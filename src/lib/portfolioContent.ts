export type WorkCase = {
  slug: string;
  title: string;
  kind: "Client work" | "Open source";
  category: string;
  overview: string;
  scope: string[];
  technologies: string[];
  live?: string;
  source?: string;
  recognition?: string;
};

export const workCases: WorkCase[] = [
  {
    slug: "nachigold",
    title: "NachiGold — Agricultural E-Commerce",
    kind: "Client work",
    category: "Agriculture / retail",
    overview: "A wholesale and retail agricultural products storefront for poultry, dairy, and farm produce, with WhatsApp-based ordering and nationwide delivery information.",
    scope: ["Present agricultural products in a browsable online catalog.", "Support wholesale and retail product discovery.", "Connect customers to WhatsApp ordering and delivery information."],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://peaceful-nachi.vercel.app/",
  },
  {
    slug: "halls-sports-futo",
    title: "HallsSports FUTO — Stadium & Hall Booking",
    kind: "Open source",
    category: "Sports / campus facilities",
    overview: "A facility-booking platform for FUTO halls and stadium spaces, published as Spark Stadium Builder and deployed at HallsSports FUTO.",
    scope: ["Bring facility information and reservations into one web experience.", "Let students and organisers browse facilities and booking options.", "The same project appears in both the open-source and delivered-work portfolios."],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://hallssports-futo.vercel.app/home",
    source: "https://github.com/nmesrionyengbaronye/spark-stadium-builder",
  },
  {
    slug: "eveel-electronics",
    title: "E.V.Eel Electronics — Gadget Store",
    kind: "Client work",
    category: "Electronics / e-commerce",
    overview: "An online catalog and storefront for an electronics dealer in Onitsha, featuring audio equipment and gadgets with WhatsApp-integrated ordering.",
    scope: ["Showcase electronics and audio products in a digital storefront.", "Give visitors a direct path to enquire and place orders through WhatsApp.", "Present the store and its product range online."],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://e-v-eel-electronics.vercel.app/",
  },
  {
    slug: "comfort-haven",
    title: "Obuasi Store Room — Comfort Haven",
    kind: "Client work",
    category: "Furniture / home & living",
    overview: "An e-commerce storefront for foams, chairs, and bedding, with pay-on-delivery and shipping information for customers across Nigeria.",
    scope: ["Present home and living products in a dedicated online store.", "Make product discovery and ordering information easy to find.", "Communicate the listed delivery and payment options."],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://comfort-haven-eight.vercel.app/",
  },
  {
    slug: "shirt-haven",
    title: "Shirt Haven — African Fashion Store",
    kind: "Client work",
    category: "Fashion / e-commerce",
    overview: "A fashion storefront featuring African styles and accessories, with a style quiz, loyalty rewards, and WhatsApp ordering.",
    scope: ["Bring fashion categories and accessories together in a storefront.", "Include a style quiz and loyalty-reward experience.", "Connect customers to WhatsApp ordering."],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://clothes-stores-one.vercel.app/",
  },
  {
    slug: "salubrity-superior-farms",
    title: "Salubrity Superior Farms",
    kind: "Client work",
    category: "Agriculture / wellness",
    overview: "A farm produce and wellness platform showcasing crops, livestock, and health-focused agricultural products, with direct ordering information.",
    scope: ["Introduce the farm and its range of agricultural products.", "Organise produce and wellness offerings for online discovery.", "Provide a direct route for customer ordering."],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://salubrity-superior-farms.vercel.app/",
  },
  {
    slug: "rie",
    title: "RIE — Resistance Intelligence Engine",
    kind: "Open source",
    category: "AI / data intelligence",
    overview: "A solo-built intelligence-engine concept for exploring resistance signals in unstructured reports. Created and shipped in a 24-hour sprint at Hack-Nation Global AI Hackathon #6, then selected by the community for a live pitch and recognised for creativity of concept and execution.",
    scope: ["Use NLP to extract entities and trends from unstructured reports.", "Orchestrate model-assisted analysis of resistance signals.", "Surface ranked intelligence through a query-oriented experience.", "Build and present the project solo within the 24-hour event window."],
    technologies: ["Python", "NLP", "AI", "Data pipelines"],
    source: "https://github.com/nmesrionyengbaronye/rie-submission",
    recognition: "Hack-Nation Global AI Hackathon #6, July 18–19, 2026. Certificate ID 4AD2609F8D6094C3.",
  },
  {
    slug: "hackathon-test-lab",
    title: "Hackathon Test Lab",
    kind: "Open source",
    category: "Prototyping / challenge solutions",
    overview: "A repository of hackathon challenge solutions, technical assessments, and rapid prototypes, kept together for review and reuse.",
    scope: ["Collect challenge solutions and assessment work in one repository.", "Keep rapid prototypes across AI, API, and frontend problems accessible.", "Make problem-solving experiments easier to revisit."],
    technologies: ["Python", "JavaScript", "Algorithms", "Prototyping"],
    source: "https://github.com/nmesrionyengbaronye/my-hackathon-tests",
  },
];

export const editorialDirectory = [
  { title: "About", path: "/about", description: "Background, education, and engineering perspective." },
  { title: "Work", path: "/work", description: "Client platforms, open-source builds, and project details." },
  { title: "Skills", path: "/skills", description: "Frontend, API, tools, DevOps, and robotics technologies." },
  { title: "Awards & Recognition", path: "/achievements", description: "Hack-Nation recognition, live pitch, and certificate." },
  { title: "Writing", path: "/writing", description: "The journal and external writing profiles." },
  { title: "Contact", path: "/contact", description: "Contact and professional social accounts." },
  { title: "Now", path: "/now", description: "The latest confirmed portfolio snapshot." },
  { title: "Timeline", path: "/timeline", description: "Confirmed milestones and dated recognition." },
  { title: "Education", path: "/education", description: "Mechatronics Engineering studies at FUTO." },
  { title: "Philosophy", path: "/philosophy", description: "Principles reflected in published work." },
  { title: "Press", path: "/press", description: "Documented recognition and media information." },
  { title: "Legacy", path: "/legacy", description: "A growing record of projects and contributions." },
  { title: "Uses", path: "/uses", description: "Technologies listed in the portfolio." },
  { title: "Project Graveyard", path: "/work/graveyard", description: "Paused or retired projects, when confirmed." },
];