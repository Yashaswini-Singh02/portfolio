export const profile = {
  name: "Yashaswini Singh Shaktawat",
  shortName: "Yashaswini Singh",
  role: "Full-Stack Engineer",
  ens: "yashaswini.base.eth",
  location: "Udaipur, Rajasthan — IN",
  available: "Open to building cool things",
  email: "yashaswinisinghshaktawat@gmail.com",
  intro:
    "I'm a full-stack engineer who lives at the intersection of clean interfaces and on-chain logic. I build fast, ship faster, and obsess over the details nobody notices until they're gone.",
  blurb:
    "Curious by default, fast-learner by habit, and genuinely fun to build with. I find prediction markets and trading endlessly fascinating, love spelunking through new ecosystems, and treat hackathons as my favorite sport — 11× winner and counting.",
  adjectives: [
    "Curious",
    "Fast-learner",
    "Fun to build with",
    "Markets-obsessed",
    "Ecosystem explorer",
    "Crazy binge-watcher",
    "Hackathon athlete",
  ],
};

export const stats = [
  { value: "11×", label: "Hackathon wins" },
  { value: "9.3", label: "B.Tech CGPA" },
  { value: "600+", label: "Traders served" },
  { value: "3+", label: "Years shipping" },
];

export const socials = [
  { label: "GitHub", handle: "Yashaswini-Singh02", href: "https://github.com/Yashaswini-Singh02" },
  { label: "LinkedIn", handle: "yashaswini-singh-shaktawat", href: "https://www.linkedin.com/in/yashaswini-singh-shaktawat/" },
  { label: "X / Twitter", handle: "@yashaswini_s_s", href: "https://x.com/yashaswini_s_s" },
  { label: "Devfolio", handle: "@YS9", href: "https://devfolio.co/@YS9/projects" },
];

export type Experience = {
  company: string;
  role: string;
  period?: string;
  location?: string;
  points: string[];
  stack: string[];
  logo?: string;
  // RPG skill-tree metadata — `seq` 1 = earliest "root" role
  seq: number;
  level: string;
  archetype: string;
  accent: string;
};

// Root skills unlocked at the very base of the tree
export const rootSkills = {
  title: "Root Skills",
  subtitle: "where the tree begins",
  skills: ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "Base Architecture"],
};

export const experience: Experience[] = [
  {
    company: "Covalent",
    role: "Software Developer",
    period: "Apr 2025 — Jun 2026",
    location: "Remote",
    seq: 5,
    level: "LVL 5 — Current",
    archetype: "Real-Time Trading Systems Architect",
    accent: "#E94F0B",
    points: [
      "Engineered a mobile-first prediction market with Next.js & Hono, scaling to 600+ active traders on a high-performance REST API with the Polymarket SDK for real-time market data.",
      "Built a full-stack multi-chain trading terminal across Solana & Hyperliquid — Zustand + TanStack Query lifted rendering performance 35%, wired with Turnkey embedded wallets.",
      "Architected core trading logic for Meteora AMM & Pumpfun AMM, boosting throughput 25% while cutting transaction landing time.",
    ],
    stack: ["Next.js", "Hono", "Solana", "Hyperliquid", "Zustand", "TanStack Query", "Turnkey"],
    logo: "/logos/covalenthq.jpeg",
  },
  {
    company: "Mintair",
    role: "Frontend Developer",
    location: "Remote",
    seq: 4,
    level: "LVL 4",
    archetype: "DePIN Dashboard Architect",
    accent: "#9CA3AF",
    points: [
      "Utilized TypeScript and TailwindCSS for Mintair's Dashboard V2, ensuring scalability and maintainability, and increasing user engagement by 50%.",
      "Architected various features while handling multiple use cases for more than 10 different nodes, ensuring seamless integration and functionality.",
      "Created an effective billing and discount section, providing users with clear and straightforward payment options and promotional offers.",
      "Conducted in-depth research on diverse blockchain communication frameworks, implementing strategic enhancements that streamlined user interactions — evidenced by a 30% decrease in user-reported issues within the first quarter post-launch.",
    ],
    stack: ["TypeScript", "Tailwind CSS", "Next.js", "DePIN"],
    logo: "/logos/mintair.svg",
  },
  {
    company: "Atmos Protocol",
    role: "Frontend Developer",
    period: "Jan 2025 — Apr 2025",
    location: "Remote",
    seq: 3,
    level: "LVL 3",
    archetype: "Multi-Chain Frontend Engineer",
    accent: "#9CA3AF",
    points: [
      "Shipped a production-ready UI for a gamified DEX on the Supra L1, translating designs into pixel-perfect Next.js + Tailwind components.",
      "Streamlined REST APIs & GraphQL queries with CDN delivery and skeleton loaders — cutting page load time 45%.",
      "Built swap functionality with React Context and wired Starkey Wallet for secure Supra L1 transactions.",
    ],
    stack: ["Next.js", "Tailwind CSS", "GraphQL", "Supra L1", "Starkey Wallet"],
    logo: "/logos/atmos.jpeg",
  },
  {
    company: "Positions Fi",
    role: "Frontend Developer",
    period: "Aug 2024 — Dec 2024",
    location: "Remote",
    seq: 2,
    level: "LVL 2",
    archetype: "DeFi UI/UX Specialist",
    accent: "#9CA3AF",
    points: [
      "Led React.js UI/UX work for a DeFi lending protocol — +25% user satisfaction, -30% load times.",
      "Drove rapid prototyping and agile feedback loops, cutting pre-release revision cycles 40%.",
    ],
    stack: ["React.js", "DeFi", "UI/UX"],
    logo: "/logos/positionsfi.jpeg",
  },
  {
    company: "Padhai Academy",
    role: "Frontend Developer",
    location: "Remote",
    seq: 1,
    level: "LVL 1",
    archetype: "Foundations & First UIs",
    accent: "#9CA3AF",
    points: [
      "Developed the initial UI for a web application using TypeScript, Next.js, and TailwindCSS, ensuring intuitive navigation and a seamless user experience.",
      "Integrated GraphQL-based APIs into the application, improving data retrieval and processing by 25% and enhancing overall system performance.",
      "Designed a Markdown-based editor for effortless content creation and formatting.",
      "Leveraged TypeScript to enhance code quality, reduce bugs, and improve developer productivity.",
    ],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "GraphQL", "Markdown"],
  },
];

export const currently = [
  { label: "Building", value: "multi-chain trading terminals" },
  { label: "Watching", value: "way too many K-dramas (no regrets)" },
  { label: "Exploring", value: "a brand-new L1 almost every week" },
  { label: "Fueled by", value: "chai + hackathon adrenaline" },
];

export type Project = {
  name: string;
  domain: string;
  href: string;
  meta: string[]; // e.g. ["2026", "live"]
  tagline: string;
  role: string;
  points: string[];
  stack: string[];
  accent: string;
  // drop screenshots/assets here — falls back to a branded screen until then
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Trench",
    domain: "trench.ag",
    href: "https://www.trench.ag/",
    meta: ["2026", "live"],
    tagline:
      "Unified trading terminal across memes, perps, stocks & more — alpha feed, wallet tracking, and execution on Solana & Hyperliquid.",
    role: "product surfaces · transaction infra · data pipelines",
    points: [
      "Real-time alpha intelligence + smart-wallet signals",
      "Sub-second routing for spot and perpetual positions",
      "Scalable transaction-building layer behind the terminal",
    ],
    stack: ["React", "Rust", "Solana", "Hyperliquid", "Trading"],
    accent: "#E94F0B",
    image: "/projects/trench.jpg",
  },
  {
    name: "TMB",
    domain: "tmb.fun",
    href: "https://tmb.fun",
    meta: ["2026", "shipped", "sunsetted"],
    tagline:
      "Prediction markets with conviction — the full stack went live at tmb.fun before being sunsetted.",
    role: "prediction market flows · backend · market mechanics",
    points: [
      "End-to-end prediction market implementation",
      "Real-time market dynamics and conviction-based UX",
      "Production infra at Covalent scale",
    ],
    stack: ["Prediction", "Web3", "React", "Node"],
    accent: "#E50083",
    image: "/projects/tmb.jpg",
  },
  {
    name: "Atmos",
    domain: "atmos.ag",
    href: "https://atmos.ag/",
    meta: ["2025", "live", "freelance"],
    tagline:
      "Social-driven gamified DeFi on Supra — swap, liquidity pools, the PUMP token studio, and rewards.",
    role: "freelance full-stack — entire backend + frontend integration",
    points: [
      "Built backend architecture for the DEX, Hyper AMM, and token-launch flows",
      "Integrated frontend for swap, staking, liquidity, and PUMP tooling",
      "Wired gamified XP & rewards progression end-to-end",
    ],
    stack: ["DeFi", "Supra", "Node", "React", "Web3"],
    accent: "#CFB3D4",
    image: "/projects/atmos.jpg",
  },
  {
    name: "Nibble",
    domain: "nibble.fun",
    href: "https://devnet.nibble.fun/discover",
    meta: ["2026", "devnet"],
    tagline:
      "A social launch venue where liquidity never dies — dead-token liquidity is pooled and redistributed into active runners.",
    role: "product + frontend",
    points: [
      "Social launch venue where communities form, publish, and earn dividends around tokens",
      "Liquidity from inactive tokens is removed, pooled & redistributed — automatically and verifiably",
      "Community co-governance: token direction decided by consensus, not a single creator",
    ],
    stack: ["Web3", "Social", "DeFi", "React"],
    accent: "#E94F0B",
    image: "/projects/nibble.jpg",
  },
];

export type Award = {
  place: string;
  event: string;
  detail: string;
  year: string;
};

export const awards: Award[] = [
  { place: "1st", event: "ETHIndia 2024", detail: "Lit Protocol & Supra — from 500+ participants", year: "'24" },
  { place: "1st", event: "Unfold 2024", detail: "Agoric track", year: "'24" },
  { place: "2nd", event: "Superhack", detail: "Celo Protocol", year: "'24" },
  { place: "3rd", event: "ETHGlobal Delhi 2025", detail: "Fluence — against 200+ teams", year: "'25" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C", "C++", "ALP", "VHDL", "SQL"],
  },
  {
    title: "Web",
    items: ["React.js", "Next.js", "Web3", "Framer Motion", "Redux", "GraphQL", "Express", "HTML/CSS"],
  },
  {
    title: "Tools & Platforms",
    items: ["Zustand", "TanStack Query", "Tailwind CSS", "REST APIs", "CDN", "Git", "DePIN", "ENS"],
  },
];

export const marqueeWords = [
  "FULL-STACK",
  "WEB3",
  "PREDICTION MARKETS",
  "11× HACKATHON WINNER",
  "DEFI",
  "NEXT.JS",
  "SOLANA",
  "TRADING TERMINALS",
  "SHEFI S13 SCHOLAR",
];
