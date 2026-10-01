import type { jsPDF } from "jspdf";
import { educationRecord, certificates, workCases } from "@/lib/portfolioContent";
import { site } from "@/lib/site";

/**
 * Curriculum Vitae generator.
 *
 * Layout rules:
 *  - Multi-page, never one dense wall of text.
 *  - Every section has breathing room: label, rule, then content.
 *  - Entries keep together where possible; a project block will not be
 *    split across a page boundary when it can be avoided.
 *  - Content is pulled from the same datasets the website renders, so the
 *    PDF cannot drift from the site.
 */

const PAGE = { w: 210, h: 297 };
const M = 17;
const CONTENT_W = PAGE.w - M * 2;

/* palette */
const INK: [number, number, number] = [24, 24, 26];
const BODY: [number, number, number] = [58, 58, 62];
const MUTED: [number, number, number] = [122, 122, 128];
const FAINT: [number, number, number] = [196, 196, 200];
const GOLD: [number, number, number] = [161, 130, 38];
const GOLD_SOFT: [number, number, number] = [201, 176, 106];

/**
 * Assigned at the start of each build. jsPDF itself is imported dynamically
 * so its ~400 kB only loads when someone actually asks for the CV.
 *
 * The definite-assignment assertion is safe: every drawing helper below is
 * only ever called from `buildCv`, after this has been set.
 */
let doc!: jsPDF;

let y = 0;

/* ------------------------------------------------------------------ utils */

const ensure = (needed: number) => {
  if (y + needed <= PAGE.h - M - 8) return;
  doc.addPage();
  y = M;
};

/** Draw text lines, advancing y. Returns the height consumed. */
const write = (
  text: string,
  {
    x = M,
    w = CONTENT_W,
    size = 9,
    style = "normal" as "normal" | "bold" | "italic",
    color = BODY,
    leading = 4.4,
    gap = 0,
  } = {},
) => {
  doc.setFont("helvetica", style);
  doc.setFontSize(size);
  doc.setTextColor(...color);
  const lines = doc.splitTextToSize(text, w);
  const height = lines.length * leading;
  ensure(height);
  lines.forEach((line: string) => {
    doc.text(line, x, y);
    y += leading;
  });
  y += gap;
  return height;
};

/** Wrapped text carrying a hanging gold marker. */
const bullet = (text: string, { size = 8.6, leading = 4.1, color = BODY } = {}) => {
  const indent = M + 4.6;
  const marker = y;
  const lines = doc.splitTextToSize(text, CONTENT_W - 4.6);
  const height = lines.length * leading;
  ensure(height + 2);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(size);
  doc.setTextColor(...GOLD);
  doc.text("\u2022", M + 1, y);

  doc.setTextColor(...color);
  lines.forEach((line: string) => {
    doc.text(line, indent, y);
    y += leading;
  });
  void marker;
};

/** Section label + hairline rule, with generous space above and below. */
const section = (title: string) => {
  ensure(22);
  y += 9;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.4);
  doc.setTextColor(...GOLD);
  doc.text(title.toUpperCase(), M, y);
  const labelW = doc.getTextWidth(title.toUpperCase());
  doc.setDrawColor(...FAINT);
  doc.setLineWidth(0.3);
  doc.line(M + labelW + 2.4, y - 1, PAGE.w - M, y - 1);
  doc.setLineWidth(0.5);
  y += 5.4;
};

/** Title on the left, period right-aligned on the same baseline. */
const entryHeader = (title: string, period: string) => {
  ensure(9);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.4);
  doc.setTextColor(...INK);
  doc.text(title, M, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.4);
  doc.setTextColor(...MUTED);
  doc.text(period, PAGE.w - M, y, { align: "right" });
  y += 4.6;
};

/** Small uppercase metadata line under an entry header. */
const meta = (text: string, color = MUTED) => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...color);
  doc.text(text, M, y);
  y += 4.6;
};

/** Small gold status pill on the right, used by project entries. */
const statusPill = (text: string) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.setTextColor(...GOLD);
  doc.text(text.toUpperCase(), PAGE.w - M, y, { align: "right" });
};

const spacer = (amount = 3) => {
  y += amount;
};

/* ----------------------------------------------------------------- header */

const drawHeader = () => {
  const bandH = 46;

  doc.setFillColor(20, 20, 22);
  doc.rect(0, 0, PAGE.w, bandH, "F");

  // Gold accent rule at the base of the band.
  doc.setFillColor(...GOLD);
  doc.rect(0, bandH, PAGE.w, 1.1, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(21);
  doc.setTextColor(255, 255, 255);
  doc.text(site.name.toUpperCase(), PAGE.w / 2, 17, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GOLD_SOFT);
  doc.text(
    "AI & Mechatronics Engineer",
    PAGE.w / 2,
    24.5,
    { align: "center" },
  );

  doc.setFontSize(7.8);
  doc.setTextColor(206, 206, 210);
  doc.text(
    `${site.email}   \u00b7   +234 ${site.whatsapp.replace(/^0/, "")}   \u00b7   ${site.location}`,
    PAGE.w / 2,
    32,
    { align: "center" },
  );
  doc.text(
    `${site.social.linkedin.replace("https://www.", "")}   \u00b7   ${site.social.github.replace("https://", "")}   \u00b7   ${site.social.x.replace("https://", "")}`,
    PAGE.w / 2,
    37,
    { align: "center" },
  );

  y = bandH + 12;
};

/* ---------------------------------------------------------------- profile */

const drawProfile = () => {
  section("Profile");

  write(
    "AI and Mechatronics Engineer \u2014 a Mechatronics Engineering undergraduate at the Federal University of Technology, Owerri, building applied AI systems and the web platforms that ship them. Six client platforms delivered and live across agriculture, electronics, furniture, fashion and campus facility booking. Built RIE \u2014 Resistance Intelligence Engine \u2014 solo in a 24-hour global AI hackathon and recognised for creativity of concept and execution. Currently building UniUI, an academic intelligence system built around sources, retrieval, verification and honest confidence.",
    { size: 9.2, leading: 4.9, color: BODY },
  );

  // Highlight strip: three positioning pillars, boxed.
  spacer(2.5);
  const pillars = [
    ["DELIVERS", "Owns a build end to end \u2014 brief, architecture, implementation, deployment."],
    ["PROVES", "Systems shipped, deployed and used, not prototypes described in the abstract."],
    ["RECORDS", "Publishes what failed alongside what shipped, on the portfolio and in the journal."],
  ];
  const boxW = (CONTENT_W - 8) / 3;

  pillars.forEach(([label, text], index) => {
    const boxX = M + index * (boxW + 4);
    const startY = y;

    doc.setDrawColor(...FAINT);
    doc.setLineWidth(0.25);
    doc.rect(boxX, startY, boxW, 25);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.2);
    doc.setTextColor(...GOLD);
    doc.text(label, boxX + 3, startY + 5.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.4);
    doc.setTextColor(...BODY);
    doc.splitTextToSize(text, boxW - 6).forEach((line: string, lineIndex: number) => {
      doc.text(line, boxX + 3, startY + 10.5 + lineIndex * 3.5);
    });
  });

  y += 29;
};

/* ------------------------------------------------------------ capabilities */

const drawCapabilities = () => {
  section("Core capabilities");

  const groups: { title: string; items: string[] }[] = [
    {
      title: "Frontend",
      items: ["React & Next.js", "TypeScript", "Tailwind & design systems", "Accessibility (WCAG)", "Framer Motion"],
    },
    {
      title: "Backend & APIs",
      items: ["Python (FastAPI, Flask)", "Node.js & Express", "REST & GraphQL design", "PostgreSQL & Supabase", "Auth (JWT, OAuth 2.0)"],
    },
    {
      title: "AI & data",
      items: ["NLP pipelines", "Retrieval & verification", "Model orchestration", "Data pipelines", "Model serving"],
    },
    {
      title: "Infrastructure",
      items: ["Git & CI/CD", "Docker", "Vercel / Render deploys", "Performance tuning", "Figma handoff"],
    },
    {
      title: "Embedded & robotics",
      items: ["Mechatronics Engineering", "Arduino", "Raspberry Pi", "Embedded C", "Sensors & actuators"],
    },
  ];

  groups.forEach((group) => {
    ensure(19);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.4);
    doc.setTextColor(...INK);
    doc.text(group.title, M, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.4);
    doc.setTextColor(...BODY);
    doc.text(group.items.join("  \u00b7  "), M + 38, y);

    y += 5;
    doc.setDrawColor(...FAINT);
    doc.setLineWidth(0.2);
    doc.line(M, y - 1.6, PAGE.w - M, y - 1.6);
  });

  y += 2;
};

/* -------------------------------------------------------------- experience */

type ExperienceEntry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

const experience: ExperienceEntry[] = [
  {
    title: "Freelance Frontend & API Developer",
    org: "Independent / Remote \u00b7 Nigeria",
    period: "2022 \u2013 present",
    bullets: [
      "Designed, built and deployed six production platforms for clients in agriculture, electronics, furniture, fashion and campus services \u2014 each shipped live and maintained after handover.",
      "Owned the full delivery lifecycle: requirements, architecture, implementation, deployment and post-launch support, communicating directly with non-technical stakeholders.",
      "Cut initial page load on data-heavy interfaces through code-splitting, image optimisation, request caching and pagination.",
      "Designed storefronts around WhatsApp ordering and pay-on-delivery rather than checkout flows the clients had no way to service.",
    ],
  },
  {
    title: "AI Application Developer",
    org: "Self-directed & hackathon teams",
    period: "2023 \u2013 present",
    bullets: [
      "Built RIE \u2014 Resistance Intelligence Engine \u2014 solo within 24 hours at Hack-Nation Global AI Hackathon #6, then pitched live after community selection and was recognised for creativity of concept and execution.",
      "Developed NLP products including an emotional-support conversational model and an AI resume screening tool, covering tokenization, sentiment analysis, intent classification and weighted skill matching.",
      "Served models behind FastAPI and Flask endpoints consumed by React frontends, with streaming responses and context retained across sessions.",
    ],
  },
  {
    title: "Founder \u00b7 UniUI",
    org: "Academic intelligence system",
    period: "2025 \u2013 present",
    bullets: [
      "Took an AI education idea from domain and waitlist through a V1 launch, an early user community and academic retrieval infrastructure built around verification and confidence signalling.",
      "Ran the distribution experiments that come with it \u2014 course reps, rewards and referrals, an SUG post, an ambassador programme \u2014 and documented what actually converted.",
      "Reframed the product away from \u2018ChatGPT but for students\u2019 toward academic intelligence that knows when it might be wrong.",
    ],
  },
  {
    title: "Open Source Contributor",
    org: site.social.github.replace("https://", ""),
    period: "2023 \u2013 present",
    bullets: [
      "Maintain personal repositories with reproducible setup instructions, clear READMEs and issue triage across AI, data and frontend projects.",
      "Keep a consolidated hackathon lab so challenge solutions, trade-offs and reusable patterns stay reviewable instead of scattered.",
    ],
  },
];

const drawExperience = () => {
  section("Experience");

  experience.forEach((entry) => {
    entryHeader(entry.title, entry.period);
    meta(entry.org, MUTED);
    spacer(1.2);
    entry.bullets.forEach((item) => bullet(item));
    spacer(5);
  });
};

/* ---------------------------------------------------------------- selected work */

const drawSelectedWork = () => {
  section("Selected work");

  const featured = [
    "uniui",
    "rie",
    "halls-sports-futo",
    "marketai",
    "ai-resume-analyzer",
    "intentscope",
    "developer-news-dashboard",
    "e-library",
  ]
    .map((slug) => workCases.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  featured.forEach((project) => {
    // Keep a project block whole: measure first, break before if it will not fit.
    const detailLines = doc.splitTextToSize(project.solution, CONTENT_W - 4.6);
    const blockHeight = 13 + detailLines.length * 4.1 + 2;
    ensure(blockHeight);

    entryHeader(project.title, project.period ?? "Dates not published");
    statusPill(project.status);
    y += 0.6;

    meta(
      [project.role, project.category, project.technologies.slice(0, 4).join(" \u00b7 ")].filter(Boolean).join("   \u00b7   "),
      MUTED,
    );

    bullet(project.solution, { size: 8.4, leading: 4 });

    const link = [project.live, project.source].filter(Boolean).join("   \u00b7   ");
    if (link) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.2);
      doc.setTextColor(...GOLD);
      doc.splitTextToSize(link.replace("https://", ""), CONTENT_W).forEach((line: string, index: number) => {
        doc.text(line, M + 4.6, y + index * 3.4);
      });
      y += Math.min(2, doc.splitTextToSize(link, CONTENT_W).length) * 3.4;
    }

    spacer(4.5);
  });
};

/* ----------------------------------------------------------------- education */

const drawEducation = () => {
  section("Education");

  entryHeader(educationRecord.degree, educationRecord.status);
  meta(`${educationRecord.institution}, Nigeria`, MUTED);
  spacer(1);
  bullet("Relevant coursework: Control Systems & Automation, Embedded Systems Design, Digital Signal Processing, Data Structures & Algorithms, CAD & Simulation, Engineering Mathematics.");
  spacer(4.5);
};

/* ------------------------------------------------------------------ awards */

const drawAwards = () => {
  section("Awards & certifications");

  certificates.forEach((item, index) => {
    const column = index % 2;
    if (column === 0 && index > 0) spacer(0);
    const colX = M + column * (CONTENT_W / 2 + 3);
    const colW = CONTENT_W / 2 - 3;
    const topY = y;

    ensure(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.2);
    doc.setTextColor(...INK);
    doc.splitTextToSize(item.name, colW).forEach((line: string, lineIndex: number) => {
      doc.text(line, colX, topY + lineIndex * 4);
    });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.4);
    doc.setTextColor(...MUTED);
    const detailLines = doc.splitTextToSize(item.detail, colW);
    doc.text(detailLines[0], colX, topY + 4 + detailLines.length * 3.6);

    if (column === 1) {
      y = topY + Math.max(4 + detailLines.length * 3.6, 11);
    } else if (index === certificates.length - 1) {
      y = topY + Math.max(4 + detailLines.length * 3.6, 11);
    }
  });

  y += 1;
};

/* -------------------------------------------------------------------- footer */

const drawFooters = () => {
  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page += 1) {
    doc.setPage(page);
    const isFirst = page === 1;

    doc.setDrawColor(...FAINT);
    doc.setLineWidth(0.25);
    doc.line(M, PAGE.h - 13, PAGE.w - M, PAGE.h - 13);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...MUTED);

    doc.text(isFirst ? site.baseUrl.replace("https://", "") : "Nmesirionye Ngbaronye \u2014 Curriculum Vitae", M, PAGE.h - 9);
    doc.text(`Page ${page} of ${pages}`, PAGE.w - M, PAGE.h - 9, { align: "right" });
  }
};

/* --------------------------------------------------------------------- build */

/**
 * Builds and downloads the CV.
 *
 * Async because jsPDF is dynamically imported — the library is large and
 * only needed at the moment the user clicks download.
 */
const buildCv = async () => {
  const { jsPDF } = await import("jspdf");

  // Fresh document each time, so a second download does not append to the
  // pages left over from the first.
  doc = new jsPDF({ unit: "mm", format: "a4" });
  y = 0;

  drawHeader();
  drawProfile();
  drawCapabilities();
  drawExperience();
  drawSelectedWork();
  drawEducation();
  drawAwards();
  drawFooters();

  doc.save("Nmesirionye_Ngbaronye_CV.pdf");
};

export default buildCv;