/**
 * Single source of truth for portfolio content.
 *
 * Every page reads from here so a project detail, a work card, a search
 * result and the sitemap can never drift apart.
 *
 * Honesty rule for this file: only record what can be evidenced by a live
 * URL, a public repository, a dated event, or the creator's own CV. Where a
 * fact is not yet confirmed it is marked `unconfirmed` and rendered as such
 * rather than filled in with a plausible guess.
 */

export type WorkKind = "Client work" | "Open source" | "Product";

export type ProjectStatus = "Shipped" | "Building" | "Early concept";

export type WorkCase = {
  slug: string;
  title: string;
  kind: WorkKind;
  category: string;
  /** One-line description used on cards, search results and meta tags. */
  summary: string;
  /** Longer overview used on the project detail page. */
  overview: string;
  role: string;
  status: ProjectStatus;
  /** Display period. `null` when the start date is genuinely not known. */
  period: string | null;
  periodNote?: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  live?: string;
  source?: string;
  recognition?: string;
  /** Key import, if one exists for this project. */
  image?: string;
  /** Show on the home page featured row. */
  featured?: boolean;
};

export const workCases: WorkCase[] = [
  // ---------------------------------------------------------------- flagship
  {
    slug: "uniui",
    title: "UniUI — Academic Intelligence for Students",
    kind: "Product",
    category: "AI / Education infrastructure",
    summary:
      "An academic intelligence system that answers student questions with sources, retrieval and confidence — not just fluent text.",
    overview:
      "UniUI started as an AI education app and became something harder: a system that knows when it might be wrong. The work moved from a waitlist and a V1 launch through academic retrieval infrastructure, verification, and a student community, toward a broader ambition of becoming student infrastructure across the Southeast and then Nigeria. It is the clearest expression of the philosophy on the Philosophy page — education over shortcuts, truth over false certainty.",
    role: "Founder & Solo Builder",
    status: "Building",
    period: null,
    periodNote: "Pre-launch through V1 and community building; exact dates not published.",
    problem:
      "Students use general AI assistants for coursework and get confident answers with no sources, no retrieval, and no way to tell when the model is hallucinating. The failure mode is not bad grammar — it is false certainty presented as fact.",
    solution:
      "Build academic intelligence around the chain sources → retrieval → verification → confidence → explanation, so a student can see where an answer came from and how sure the system actually is.",
    features: [
      "Academic retrieval infrastructure built on real course material rather than open-web guessing",
      "Source-attributed answers so every claim is traceable back to material",
      "Verification layer intended to flag low-confidence responses",
      "Student waitlist and early-access community",
      "Course-rep and rewards/referral experiments for distribution",
      "Ambassador programme to extend reach beyond a single campus",
    ],
    technologies: ["Python", "AI/ML", "Retrieval", "Verification", "React", "APIs"],
    featured: true,
  },
  {
    slug: "rie",
    title: "RIE — Resistance Intelligence Engine",
    kind: "Open source",
    category: "AI / data intelligence",
    summary:
      "An award-recognised AI intelligence engine for resistance signals, built solo in 24 hours and pitched live on stage.",
    overview:
      "RIE ingests unstructured resistance reports, applies NLP and model orchestration to extract entities and trends, and surfaces ranked intelligence through a query-oriented interface. Designed, built and shipped entirely solo inside the 24-hour window of Hack-Nation Global AI Hackathon #6, then selected by the community to pitch live and recognised for creativity of concept and execution.",
    role: "Solo Builder",
    status: "Shipped",
    period: "July 18–19, 2026",
    problem:
      "Teams tracking antimicrobial and systemic resistance signals work with scattered, unstructured reports, so emerging resistance patterns surface far too late to act on.",
    solution:
      "RIE ingests unstructured resistance data, applies NLP and model orchestration to extract entities and trends, and surfaces ranked intelligence through a real-time query interface — designed, built and shipped solo inside a 24-hour sprint.",
    features: [
      "NLP pipeline for entity extraction from unstructured reports",
      "Model orchestration layer for reasoning over resistance signals",
      "Real-time data pipeline with ranked intelligence output",
      "Query interface for exploring patterns and trends",
      "Solo build shipped and pitched live within 24 hours",
    ],
    technologies: ["Python", "NLP", "AI", "Data pipelines"],
    source: "https://github.com/nmesrionyengbaronye/rie-submission",
    recognition:
      "Hack-Nation Global AI Hackathon #6, July 18–19, 2026. Creativity recognition, certificate ID 4AD2609F8D6094C3.",
    image: "rie",
    featured: true,
  },
  {
    slug: "halls-sports-futo",
    title: "HallsSports FUTO — Stadium & Hall Booking",
    kind: "Client work",
    category: "Sports / campus facilities",
    summary:
      "A live facility-booking platform for FUTO halls and stadium spaces, replacing informal chat reservations with real slot booking.",
    overview:
      "Booking sports halls and stadium slots on campus ran on informal chats and paper lists, causing double bookings and no record of who reserved what. HallsSports centralises facility listings, availability and reservations in one web experience, so organisers can publish spaces and students can browse and book against live availability. Built as Spark Stadium Builder and deployed for real student use.",
    role: "Frontend Developer & Designer",
    status: "Shipped",
    period: null,
    periodNote: "Delivered and live; delivery dates not published.",
    problem:
      "Campus facility booking ran on informal chats and paper lists, causing double bookings, unclear availability and no record of who reserved what.",
    solution:
      "A web platform that centralises facility listings, availability and reservations — organisers publish halls and slots, users browse and book, and everything stays visible in one dashboard-style interface.",
    features: [
      "Facility and hall catalogue with details and availability",
      "Slot-based booking flow with clear confirmation states",
      "Responsive layout built for mobile-first campus use",
      "Component-driven React + TypeScript architecture",
      "Deployed live on Vercel for real student usage",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://hallssports-futo.vercel.app/home",
    source: "https://github.com/nmesrionyengbaronye/spark-stadium-builder",
    image: "stadium",
    featured: true,
  },

  // ---------------------------------------------------------- client storefronts
  {
    slug: "nachigold",
    title: "NachiGold — Agricultural E-Commerce",
    kind: "Client work",
    category: "Agriculture / retail",
    summary:
      "A wholesale and retail agricultural storefront for poultry, dairy and farm produce, with WhatsApp ordering and nationwide delivery information.",
    overview:
      "A wholesale and retail agricultural products storefront for NachiGold. The catalogue covers poultry, dairy and farm produce, and ordering runs through WhatsApp rather than a checkout the business had no way to service — a deliberate fit to how agricultural trade actually settles in Nigeria.",
    role: "Frontend Developer & Designer",
    status: "Shipped",
    period: null,
    periodNote: "Delivered and live; delivery dates not published.",
    problem:
      "An agricultural supplier with wholesale and retail stock had no way to present its range or take orders outside in-person trade.",
    solution:
      "A browsable online catalogue covering poultry, dairy and farm produce, wired to WhatsApp ordering with nationwide delivery information stated on the site.",
    features: [
      "Present agricultural products in a browsable online catalog.",
      "Support wholesale and retail product discovery.",
      "Connect customers to WhatsApp ordering and delivery information.",
      "Responsive layout for mobile-first browsing",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://peaceful-nachi.vercel.app/",
  },
  {
    slug: "eveel-electronics",
    title: "E.V.Eel Electronics — Gadget Store",
    kind: "Client work",
    category: "Electronics / e-commerce",
    summary:
      "An online catalogue and storefront for an electronics dealer in Onitsha, with audio equipment, gadgets and WhatsApp-integrated ordering.",
    overview:
      "A storefront for an electronics dealer in Onitsha, featuring audio equipment and gadgets. As with the other client storefronts, the ordering path runs through WhatsApp so the customer reaches the actual seller directly rather than an unstaffed cart.",
    role: "Frontend Developer & Designer",
    status: "Shipped",
    period: null,
    periodNote: "Delivered and live; delivery dates not published.",
    problem:
      "A local electronics dealer with a physical counter had no online presence for customers to browse products or enquire outside opening hours.",
    solution:
      "A digital catalogue of audio equipment and gadgets with a direct WhatsApp path to enquire and order.",
    features: [
      "Showcase electronics and audio products in a digital storefront.",
      "Give visitors a direct path to enquire and place orders through WhatsApp.",
      "Present the store and its product range online.",
      "Mobile-first product browsing",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://e-v-eel-electronics.vercel.app/",
  },
  {
    slug: "comfort-haven",
    title: "Obuasi Store Room — Comfort Haven",
    kind: "Client work",
    category: "Furniture / home & living",
    summary:
      "An e-commerce storefront for foams, chairs and bedding, with pay-on-delivery and shipping information across Nigeria.",
    overview:
      "A home and living storefront covering foams, chairs and bedding, with pay-on-delivery and shipping information published for customers across Nigeria. The build communicates the payment and delivery terms on the page rather than deferring them to a checkout conversation.",
    role: "Frontend Developer & Designer",
    status: "Shipped",
    period: null,
    periodNote: "Delivered and live; delivery dates not published.",
    problem:
      "A furniture and bedding retailer selling on pay-on-delivery terms had no way to show its range or state its delivery terms online.",
    solution:
      "A storefront presenting foams, chairs and bedding with the pay-on-delivery and nationwide shipping information stated clearly for customers.",
    features: [
      "Present home and living products in a dedicated online store.",
      "Make product discovery and ordering information easy to find.",
      "Communicate the listed delivery and payment options.",
      "Responsive product presentation across devices",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://comfort-haven-eight.vercel.app/",
  },
  {
    slug: "shirt-haven",
    title: "Shirt Haven — African Fashion Store",
    kind: "Client work",
    category: "Fashion / e-commerce",
    summary:
      "A fashion storefront for African styles and accessories, with a style quiz, loyalty rewards and WhatsApp ordering.",
    overview:
      "The most interactive of the client storefronts: a fashion marketplace covering Ankara dresses, Kente styles, Dashiki and accessories, plus a style quiz and a loyalty-rewards experience. The quiz and rewards were included to give returning customers a reason to come back rather than a one-shot catalogue visit.",
    role: "Frontend Developer & Designer",
    status: "Shipped",
    period: null,
    periodNote: "Delivered and live; delivery dates not published.",
    problem:
      "A fashion retailer with a wide range of African styles needed more than a flat catalogue to help customers find what they wanted and to come back.",
    solution:
      "A storefront bringing fashion categories and accessories together, with a style quiz, loyalty rewards and WhatsApp ordering.",
    features: [
      "Bring fashion categories and accessories together in a storefront.",
      "Include a style quiz and loyalty-reward experience.",
      "Connect customers to WhatsApp ordering.",
      "Ankara, Kente and Dashiki category presentation",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://clothes-stores-one.vercel.app/",
  },
  {
    slug: "salubrity-superior-farms",
    title: "Salubrity Superior Farms",
    kind: "Client work",
    category: "Agriculture / wellness",
    summary:
      "A farm produce and wellness platform showcasing crops, livestock and health-focused agricultural products with direct ordering.",
    overview:
      "A platform presenting the farm's crop and livestock range alongside health-focused agricultural products. It extends the agriculture storefront pattern into wellness, where the product story carries as much weight as the catalogue.",
    role: "Frontend Developer & Designer",
    status: "Shipped",
    period: null,
    periodNote: "Delivered and live; delivery dates not published.",
    problem:
      "A farm with both produce and wellness lines had no single place to introduce the range or take direct orders.",
    solution:
      "A platform showcasing crops, livestock and health-focused agricultural products, organised for online discovery with a direct route to ordering.",
    features: [
      "Introduce the farm and its range of agricultural products.",
      "Organise produce and wellness offerings for online discovery.",
      "Provide a direct route for customer ordering.",
      "Responsive layout for mobile browsing",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://salubrity-superior-farms.vercel.app/",
  },

  // ------------------------------------------------------------------ open source
  {
    slug: "marketai",
    title: "MarketAI API",
    kind: "Open source",
    category: "AI / market intelligence",
    summary:
      "A market intelligence dashboard with real-time data streams, AI-powered synthesis and trending product analytics.",
    overview:
      "A market intelligence dashboard that aggregates and analyses real-time market data using AI-powered synthesis, delivering live streaming, trend analysis and interactive visualisation in one interface. Built with a modular widget architecture so new data sources can be added without touching core code.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Deployed; build dates not published.",
    problem:
      "Businesses and analysts struggle to keep up with rapidly changing market trends, often relying on fragmented data sources and manual research that leads to delayed, uninformed decisions.",
    solution:
      "MarketAI API aggregates and analyzes real-time market data using AI-powered synthesis, delivering live data streaming, trend analysis, and interactive visualizations — all in one premium dashboard.",
    features: [
      "Real-time data streaming and market indicator tracking",
      "AI-powered trend analysis and opportunity identification",
      "Interactive charts, data tables, and advanced filtering",
      "Dark-themed professional interface with responsive design",
      "Robust API integration layer for external data sources",
    ],
    technologies: ["React", "TypeScript", "API", "AI"],
    source: "https://github.com/nmesrionyengbaronye/Market-Trend-AI",
    live: "https://market-trend-ai.onrender.com/",
    image: "marketai",
  },
  {
    slug: "developer-news-dashboard",
    title: "Developer News Dashboard",
    kind: "Open source",
    category: "Data / news aggregation",
    summary:
      "A centralised developer news dashboard curating tech articles, trending topics and industry updates in real time.",
    overview:
      "A one-stop aggregation platform that curates developer-focused news from multiple sources into a clean, scannable interface with category-based filtering and trending topic highlights. Built to remove the tab-hopping cost of staying current.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Deployed; build dates not published.",
    problem:
      "Developers waste valuable time jumping between multiple news sources, blogs, and social feeds to stay updated on the latest technologies and industry trends.",
    solution:
      "A one-stop aggregation platform that curates and organizes developer-focused news from multiple sources into a clean, scannable interface with category-based filtering and trending topic highlights.",
    features: [
      "Real-time news aggregation from multiple developer sources",
      "Category filtering (frontend, backend, DevOps, AI/ML)",
      "Trending topics sidebar with popularity metrics",
      "Clean, dark-themed UI optimized for readability",
      "Responsive design for desktop and mobile",
    ],
    technologies: ["React", "TypeScript", "API", "News Aggregation"],
    source: "https://github.com/nmesrionyengbaronye/Developer-News-Dashboard",
    live: "https://developer-news-dashboard.onrender.com",
    image: "news-dashboard",
  },
  {
    slug: "e-library",
    title: "E-Library",
    kind: "Open source",
    category: "Data / digital library",
    summary:
      "A digital library for browsing, searching and managing book collections with a clean, accessible interface.",
    overview:
      "A full-stack digital library platform with book browsing, real-time search filtering by title, author or genre, and reading-list management through a modern, accessible interface. Built around fast retrieval rather than a page-per-screen catalogue.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Deployed; build dates not published.",
    problem:
      "Access to organized digital book collections is often locked behind clunky interfaces or expensive platforms, making it hard for readers to discover and manage books efficiently.",
    solution:
      "A full-stack digital library platform with seamless book browsing, real-time search filtering by title, author, or genre, and reading list management through a modern, accessible interface.",
    features: [
      "Real-time search and filtering by title, author, and genre",
      "Responsive design for desktop, tablet, and mobile",
      "Component-driven architecture with React and TypeScript",
      "Smooth loading states, error handling, and transitions",
      "Clean UI styled with Tailwind CSS",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    source: "https://github.com/nmesrionyengbaronye/E-library",
    live: "https://e-library-panther0508.vercel.app",
    image: "elibrary",
  },
  {
    slug: "emotional-support-model",
    title: "Emotional Support Model",
    kind: "Open source",
    category: "AI / NLP",
    summary:
      "An NLP-driven conversational model providing empathetic, contextually appropriate responses for emotional wellbeing support.",
    overview:
      "A conversational model built on tokenization, sentiment analysis and intent classification to understand a user's emotional state and generate empathetic, contextually appropriate responses. An early application of the ML-in-product work that later feeds into the AI side of UniUI.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Deployed; build dates not published.",
    problem:
      "Mental health support is often inaccessible, expensive, or stigmatized — leaving many people without a safe space to express their emotions and receive guidance.",
    solution:
      "An AI chatbot leveraging tokenization, sentiment analysis, and intent classification to understand user emotions and generate empathetic, contextually appropriate responses.",
    features: [
      "Sentiment analysis and intent classification",
      "Empathetic response generation using ML-driven selection",
      "Text preprocessing and feature extraction pipelines",
      "Conversational interface for natural interaction",
      "Trained on curated mental health support datasets",
    ],
    technologies: ["Python", "NLP", "Machine Learning", "AI"],
    source: "https://github.com/nmesirionyengbaronye/Emotional-Support-Model",
    live: "https://emotional-support-model-1.onrender.com/",
    image: "emotional-support",
  },
  {
    slug: "intentscope",
    title: "IntentScope",
    kind: "Open source",
    category: "Data / developer tooling",
    summary:
      "A data exploration and interactive code execution platform for API development and cloud-based data science workflows.",
    overview:
      "A data exploration platform with intent classification for natural-language queries, interactive notebook-style execution, and API development workflows. It aimed to remove the tool-switching cost between exploring a dataset, running code, and building an API on top of the result.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Deployed; build dates not published.",
    problem:
      "Data scientists and developers lack a unified environment for exploring datasets, writing code, and building APIs — switching between tools slows productivity.",
    solution:
      "A comprehensive data exploration platform with intent classification for natural language queries, interactive notebook-style execution, and seamless API development workflows.",
    features: [
      "Intent classification for natural language data queries",
      "Interactive notebook-style code execution",
      "Real-time data visualization",
      "Seamless API development and testing workflows",
      "Cloud-based workspace accessible from anywhere",
    ],
    technologies: ["Python", "API", "Data Science", "NLP"],
    source: "https://github.com/nmesrionyengbaronye/IntentScope",
    live: "https://intentscope.pxxl.click",
    image: "intentscope",
  },
  {
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    kind: "Open source",
    category: "AI / HR technology",
    summary:
      "A resume screening tool for parsing, scoring and ranking candidate resumes at scale.",
    overview:
      "An HR-tech tool that automates resume processing with keyword-based scoring, candidate ranking and filtering, so recruiters can identify top candidates without manually comparing every application. A practical study in applying NLP where the bottleneck is volume rather than novelty.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Deployed; build dates not published.",
    problem:
      "Recruiters are overwhelmed by the volume of resumes, making it nearly impossible to manually review and compare candidates fairly and efficiently at scale.",
    solution:
      "An HR-tech tool that automates resume processing with keyword-based scoring, candidate ranking, and filtering — enabling recruiters to quickly identify top candidates.",
    features: [
      "Automated resume parsing and data extraction",
      "Keyword-based scoring and candidate ranking",
      "Advanced filtering and comparison capabilities",
      "Python-based NLP pipelines for skill matching",
      "Clean web interface for recruiter interaction",
    ],
    technologies: ["Python", "API", "NLP", "Full-Stack"],
    source: "https://github.com/nmesrionyengbaronye/Ai-resume-analyzer",
    live: "https://ai-resume-analyzer-7ubo.onrender.com/login",
    image: "resume-analyzer",
  },
  {
    slug: "hackathon-test-lab",
    title: "Hackathon Test Lab",
    kind: "Open source",
    category: "Prototyping / challenge solutions",
    summary:
      "A repository of hackathon challenge solutions, technical assessments and rapid prototypes kept for review and reuse.",
    overview:
      "A consolidated lab of timed challenge solutions and experiments across AI, API and frontend problems, kept in one repository so approaches, trade-offs and iterations stay reviewable and reusable rather than scattered and lost.",
    role: "Solo Builder",
    status: "Shipped",
    period: null,
    periodNote: "Continuously updated; build dates not published.",
    problem:
      "Hackathon and interview-style challenges demand fast, correct solutions across unfamiliar domains, and practice work usually ends up scattered and unreviewable.",
    solution:
      "A consolidated lab of timed challenge solutions and experiments, kept in one repository so approaches, trade-offs and iterations stay reviewable and reusable.",
    features: [
      "Collection of timed hackathon and assessment solutions",
      "Rapid prototypes across AI, API and frontend problems",
      "Reusable patterns extracted from repeated challenge types",
      "Documented approaches and trade-offs per solution",
      "Continuously updated as new challenges are attempted",
    ],
    technologies: ["Python", "JavaScript", "Algorithms", "Prototyping"],
    source: "https://github.com/nmesrionyengbaronye/my-hackathon-tests",
    image: "hackathon-tests",
  },

  // ------------------------------------------------------------------- concepts
  {
    slug: "pantero",
    title: "Pantero",
    kind: "Product",
    category: "Career / digital skills",
    summary:
      "A broader African career and digital-skills platform — earlier stage than UniUI.",
    overview:
      "Pantero is the career and digital-skills arm of the long-term plan: a platform aimed at African users rather than a single campus. It is at an early concept stage and is deliberately listed here as an ambition with a thesis, not as delivered work.",
    role: "Founder (concept)",
    status: "Early concept",
    period: null,
    periodNote: "Early concept; not yet publicly launched.",
    problem:
      "Career and digital-skills resources across Africa are fragmented, uneven in quality, and rarely tied to the local job market they are supposed to serve.",
    solution:
      "A platform designed around African career pathways and digital skills, with the scope still being defined.",
    features: ["Thesis and scope still being defined", "Not yet publicly launched"],
    technologies: [],
  },
  {
    slug: "vitachain",
    title: "VitaChain",
    kind: "Product",
    category: "Health / AI infrastructure",
    summary:
      "Health-oriented AI infrastructure designed with accessibility and low-end devices in mind.",
    overview:
      "VitaChain is a health-focused AI infrastructure concept built around a constraint most AI products ignore: the target user is on a low-end device, often on a poor connection. Designing for that constraint rather than bolting it on later is the whole point of the concept.",
    role: "Founder (concept)",
    status: "Early concept",
    period: null,
    periodNote: "Early concept; not yet publicly launched.",
    problem:
      "Health AI products are usually designed for capable devices and fast connections, which excludes the users they claim to serve.",
    solution:
      "Design the health AI infrastructure around low-end devices and constrained connectivity from the start.",
    features: [
      "Low-end device performance as a primary design constraint",
      "Designed for constrained network conditions",
      "Not yet publicly launched",
    ],
    technologies: ["AI/ML"],
  },
];

// ------------------------------------------------------------------ now / timeline

export type NowEntry = {
  period: string;
  heading: string;
  detail: string;
};

export const nowEntries: NowEntry[] = [
  {
    period: "2026 – present",
    heading: "Building UniUI",
    detail:
      "The flagship effort: an academic intelligence system built around sources, retrieval, verification and confidence, aimed at student infrastructure across the Southeast and then Nigeria.",
  },
  {
    period: "2026 – present",
    heading: "Studying Mechatronics Engineering at FUTO",
    detail:
      "B.Eng at the Federal University of Technology, Owerri. Coursework sits alongside software work rather than competing with it.",
  },
  {
    period: "Ongoing",
    heading: "Taking frontend and API work",
    detail:
      "Client storefronts, booking platforms and AI prototypes. Six client products are delivered and live; the pattern across all of them is React, TypeScript and a direct route to the customer.",
  },
  {
    period: "Learning",
    heading: "Deepening AI/ML, backend and systems work",
    detail:
      "Moving past 'I know Python' toward 'I designed this architecture, deployed it, maintained it, and users actually used it'.",
  },
  {
    period: "Open",
    heading: "Opportunities",
    detail:
      "Open to freelance frontend and API work now, and to full-time roles and serious collaborations from 2027.",
  },
];

export type TimelineEntry = {
  year: string;
  title: string;
  detail: string;
  kind: "Confirmed milestone" | "Current phase" | "Direction";
  href?: string;
};

export const timelineEntries: TimelineEntry[] = [
  {
    year: "2024 – 2025",
    title: "Foundations",
    kind: "Direction",
    detail:
      "The period in which frontend became the primary tool rather than a side interest. Self-taught React and TypeScript, first client work, and the realisation that shipping is a separate skill from building.",
  },
  {
    year: "2025",
    title: "First client platforms delivered",
    kind: "Confirmed milestone",
    detail:
      "The client storefront era: NachiGold, E.V.Eel Electronics, Comfort Haven, Shirt Haven and Salubrity Superior Farms all shipped live on a consistent React and TypeScript foundation, with WhatsApp as the ordering path.",
  },
  {
    year: "2025 – 2026",
    title: "Campus booking goes live",
    kind: "Confirmed milestone",
    detail:
      "HallsSports FUTO replaced informal chat-based facility reservations with real slot booking, published as Spark Stadium Builder and deployed for actual student use.",
  },
  {
    year: "2025 – 2026",
    title: "UniUI begins",
    kind: "Confirmed milestone",
    detail:
      "Domain, waitlist, early users, a V1 launch, and the hard lesson that building the technology and distributing it are different problems. Flyers that did not work, course reps who did not cooperate, an SUG post that produced attention but not a sustainable channel.",
  },
  {
    year: "July 18–19, 2026",
    title: "Hack-Nation Global AI Hackathon #6",
    kind: "Confirmed milestone",
    detail:
      "Built RIE solo in 24 hours, chosen by the community to pitch live, and recognised for creativity of concept and execution. Certificate ID 4AD2609F8D6094C3.",
    href: "/achievements",
  },
  {
    year: "2026",
    title: "Student → builder",
    kind: "Current phase",
    detail:
      "Finishing the engineering foundation while making UniUI real. Building, launching, selling, recruiting, negotiating, communicating, managing communities and surviving when things do not go to plan.",
  },
  {
    year: "2027 – 2029",
    title: "Builder → engineer and founder",
    kind: "Direction",
    detail:
      "Stronger technical credentials and international exposure, with DAAD/Germany and Google Nigeria as the main routes considered. The target is not 'I know Python' but systems I designed, deployed and maintained under real load.",
  },
  {
    year: "2029 onward",
    title: "Engineer → technology leader",
    kind: "Direction",
    detail:
      "Building companies, African-scale products, financial independence and enough technical weight to sit in rooms where technology, education and development decisions get made.",
  },
];

// -------------------------------------------------------------------- principles

export const philosophyPrinciples = [
  {
    title: "Education over shortcuts",
    detail:
      "A shortcut that leaves the user unable to explain the answer is not a solution. If a system produces a result nobody understands, it has only moved the confusion somewhere less visible.",
  },
  {
    title: "Truth over false certainty",
    detail:
      "The most dangerous output of an AI system is a confident answer that is wrong. Sourcing, retrieval and an honest confidence signal matter more than fluency — this is the principle UniUI is built around.",
  },
  {
    title: "Understanding over memorization",
    detail:
      "Retrieving the right idea matters more than storing the largest number of facts. Systems should help a student reason, not help them recall.",
  },
  {
    title: "Never rewrite history to look better",
    detail:
      "A record that is edited afterwards is not evidence. Failed flyers, course reps who would not cooperate, and distribution attempts that did not work stay in the record because removing them teaches nothing.",
  },
  {
    title: "Distribution is the hard part",
    detail:
      "Learning to build technology was the easy half. Flyers that did not work, an SUG post that produced attention but no sustainable channel — building the thing and reaching people are separate problems that most projects underestimate.",
  },
  {
    title: "Consolidate before expanding",
    detail:
      "The hardest discipline here is not learning another language. It is choosing a small number of priorities and finishing them, rather than starting a fifth direction before the first four are real.",
  },
];

// ---------------------------------------------------------------------- education

export const educationRecord = {
  institution: "Federal University of Technology, Owerri",
  shortName: "FUTO",
  url: "https://futo.edu.ng",
  degree: "B.Eng, Mechatronics Engineering",
  status: "In progress",
  detail:
    "Mechatronics Engineering at the Federal University of Technology, Owerri, Nigeria — control systems and embedded practice alongside software engineering.",
  coursework: [
    "Control Systems & Automation",
    "Embedded Systems Design",
    "Digital Signal Processing",
    "Data Structures & Algorithms",
    "CAD & Simulation",
    "Engineering Mathematics",
  ],
};

export const certificates = [
  { name: "Hack-Nation Global AI Hackathon #6", detail: "Creativity recognition, July 2026. Certificate ID 4AD2609F8D6094C3." },
  { name: "freeCodeCamp — Responsive Web Design", detail: "Self-directed certification." },
  { name: "freeCodeCamp — JavaScript Algorithms and Data Structures", detail: "Self-directed certification." },
  { name: "Udemy — The Complete React Developer Course", detail: "Hooks and Redux." },
  { name: "Coursera — Python for Everybody Specialization", detail: "Python fundamentals." },
];

// ---------------------------------------------------------------------- graveyard

export type GraveyardEntry = {
  title: string;
  reason: string;
  lesson: string;
};

export const graveyardProjects: GraveyardEntry[] = [
  {
    title: "UniUI campus dominance strategy",
    reason:
      "The first instinct was to make UniUI dominant at FUTO before expanding. Flyers, course reps and an official SUG post were all tried.",
    lesson:
      "Distribution networks cannot be built by being louder on one campus. Building the network elsewhere — Southeast, then Nigeria — turned out to be the better path.",
  },
  {
    title: "Chatbot-for-students framing",
    reason:
      "UniUI began as 'ChatGPT but for students', a positioning that reduced it to a wrapper with no reason to exist.",
    lesson:
      "Reframing it as academic intelligence that knows when it might be wrong is what produced the retrieval and verification work worth keeping.",
  },
];

// ------------------------------------------------------------------------ skills

export const skillGroups = [
  { group: "Frontend", tools: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "Framer Motion"] },
  { group: "API & Backend", tools: ["Python", "Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"] },
  { group: "Tools & DevOps", tools: ["Git", "Docker", "CI/CD", "Vite", "Figma", "Postman"] },
  { group: "Robotics", tools: ["Arduino", "Raspberry Pi", "Embedded C", "Sensors & Actuators", "PCB Design", "3D Printing"] },
];

// ---------------------------------------------------------------------- sitemap

export const editorialDirectory = [
  { title: "About", path: "/about", description: "Background, education, and engineering perspective." },
  { title: "Work", path: "/work", description: "Client platforms, open-source builds, and product work." },
  { title: "Now", path: "/now", description: "What I am focused on right now." },
  { title: "Timeline", path: "/timeline", description: "Year by year, what happened and what it taught." },
  { title: "Skills", path: "/skills", description: "Frontend, API, tools, DevOps, and robotics technologies." },
  { title: "Education", path: "/education", description: "Mechatronics Engineering studies at FUTO." },
  { title: "Philosophy", path: "/philosophy", description: "Working principles behind the decisions." },
  { title: "Achievements", path: "/achievements", description: "Hack-Nation recognition, live pitch, and certificate." },
  { title: "Writing", path: "/writing", description: "The journal and external writing profiles." },
  { title: "Press", path: "/press", description: "Documented recognition and media information." },
  { title: "Uses", path: "/uses", description: "Tools and technologies used across the work." },
  { title: "Legacy", path: "/legacy", description: "What this site is and what it is meant to preserve." },
  { title: "Contact", path: "/contact", description: "Contact details and professional social accounts." },
  { title: "Project Graveyard", path: "/work/graveyard", description: "Paused, retired, and abandoned approaches." },
  { title: "Search", path: "/search", description: "Search every page and project on the site." },
];

/** Primary header navigation. Deliberately short. */
export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Now", href: "/now" },
  { label: "Timeline", href: "/timeline" },
  { label: "Writing", href: "/writing" },
];