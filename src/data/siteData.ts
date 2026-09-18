export interface ModelItem {
  name: string;
  category: string;
  context: string;
  logo: string;
}

export const OPEN_MODELS: ModelItem[] = [
  { name: "DeepSeek-V3", category: "General Reasoning", context: "64k Context", logo: "/assets/logos/deepseek.svg" },
  { name: "DeepSeek-R1", category: "Reinforcement Reasoning", context: "128k Context", logo: "/assets/logos/deepseek.svg" },
  { name: "Qwen 2.5 Coder 32B", category: "Open Weights", context: "128k Context", logo: "/assets/logos/qwen.svg" },
  { name: "Qwen 2.5 72B", category: "Open Weights", context: "128k Context", logo: "/assets/logos/qwen.svg" },
  { name: "OpenAI o3-mini", category: "Reasoning", context: "200k Context", logo: "/assets/logos/openai.svg" },
  { name: "Gemini 2.0 Flash", category: "Multimodal", context: "1M Context", logo: "/assets/logos/gemini.svg" },
  { name: "Kimi k1.5", category: "Long Context", context: "200k Context", logo: "/assets/logos/moonshot.svg" },
  { name: "MiniMax-01", category: "Ultra Fast", context: "128k Context", logo: "/assets/logos/minimax.svg" },
  { name: "GLM-4-Plus", category: "Code Synthesis", context: "128k Context", logo: "/assets/logos/zai.svg" },
  { name: "Hunyuan-Large", category: "Enterprise Scale", context: "64k Context", logo: "/assets/logos/tencent.svg" },
];

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  tagline?: string;
  visual?: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: "01",
    title: "Always learning",
    description: "Every accept, reject, and edit is a signal — auto-generates into project-level skills.",
    badge: "taste-1",
    tagline: "No manual prompt tuning needed",
    visual: "/assets/visuals/visual1.svg"
  },
  {
    id: "02",
    title: "A mode for every moment",
    description: "Interactive CLI. Headless -p, --yolo mode for continuous batch autonomy. Background sandbox execution.",
    badge: "Execution Modes",
    tagline: "Interactive & Background Agents",
    visual: "/assets/visuals/visual2.svg"
  },
  {
    id: "03",
    title: "Best in class tools. Built in",
    description: "Read and shell tools that lead the token efficiency frontier. File ops, AST grep, extended thinking. The full stack, in your hands.",
    badge: "Benchmark Leader",
    tagline: "Pareto Frontier TEF Benchmark",
    visual: "/assets/visuals/visual3.svg"
  },
  {
    id: "04",
    title: "It remembers. So you don't have to",
    description: "Custom /agents and persistent /memory — carried seamlessly across every development session.",
    badge: "Persistent Memory",
    tagline: "Zero Context Amnesia",
    visual: "/assets/visuals/visual11.svg"
  },
  {
    id: "05",
    title: "Hackable. Out of the box",
    description: "Reusable /skills, /commands, /mcp servers, plugins. Built from first principles to be inspected and extended.",
    badge: "Extensible",
    tagline: "Full Protocol Compatibility"
  },
  {
    id: "06",
    title: "Even better, together",
    description: "/share sessions. npx taste push/pull. Distribute and sync team coding taste like git commits.",
    badge: "Team Taste Registry",
    tagline: "Collaborative Taste Alignment"
  },
  {
    id: "07",
    title: "Your design partner",
    description: "One command, seventeen modes. Audits, recolors, and reships your user interfaces with zero-slop standards.",
    badge: "Zero AI Slop",
    tagline: "Pixel-Accurate Parity"
  }
];

export const BENCHMARKS = [
  { metric: "Tool Call In-Flight Repairs", commandCode: "1M / 1T tokens (Free)", others: "0 (Fails on Open Models)", highlight: true },
  { metric: "Prompt Cache Hit Rate", commandCode: "99.2% (Industry Best)", others: "64.5% - 81.2%", highlight: true },
  { metric: "Token Efficiency on Read/Shell", commandCode: "Pareto Frontier (#1)", others: "Standard / Bloated", highlight: true },
  { metric: "Continuous Taste Learning", commandCode: "Native (taste-1 Neuro-Symbolic)", others: "Manual prompt stuffing", highlight: true },
  { metric: "Model Freedom", commandCode: "~50 Open & Commercial Models", others: "Walled Garden (1-2 models)", highlight: false },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For solo developers bringing their own keys.",
    features: [
      "Bring your own API keys (BYOK)",
      "Full terminal CLI & interactive shell",
      "Persistent /memory & custom /agents",
      "Standard community skills"
    ],
    cta: "Install Free CLI",
    highlight: false
  },
  {
    name: "GOAT",
    badge: "Most Popular",
    price: "$10",
    period: "/month",
    description: "The best low cost coding plan. Get $70 worth of compute credits.",
    features: [
      "$70 included model credits every month",
      "Access to ~50 open and frontier models",
      "1M in-flight tool call repairs per 1T tokens",
      "Native taste-1 personalized code learning",
      "Priority prompt caching (99%+ hit rate)"
    ],
    cta: "Get GOAT Plan",
    highlight: true
  },
  {
    name: "Team",
    price: "$20",
    period: "/user/month",
    description: "For engineering teams sharing conventions and architecture rules.",
    features: [
      "Shared taste registry (npx taste push/pull)",
      "Centralized billing & seat allocation",
      "Unified MCP servers & enterprise skills",
      "Dedicated high-concurrency cloud sandbox",
      "Priority 24/7 engineering support"
    ],
    cta: "Upgrade Team",
    highlight: false
  }
];

export const FAQS = [
  {
    q: "How is Command Code different from Cursor or Copilot?",
    a: "Command Code is the best coding agent for open models. It lives in your terminal and continuously learns your coding taste. Powered by taste-1, it ships, fixes, tests, and refactors with the patterns you keep, and forgets the ones you delete."
  },
  {
    q: "Why is Command Code the best coding agent for open models?",
    a: "Because we made them work. 'Open model bad at tool calling' is a harness problem, so Command Code validates and repairs every tool call in flight, about 1M repairs per 1T tokens, free on every plan. Our read and shell tools lead the token efficiency frontier benchmarks across ten harnesses, and our prompt caching holds 99%+ cache hit rates, the best in the industry. DeepSeek, Kimi, GLM, Qwen, and MiniMax all run on it, proven at 30T scale, 130T+ tokens served, by 100K+ developers and 40K+ paid customers."
  },
  {
    q: "What does 'learns my taste' actually mean?",
    a: "Every accept, reject, and edit is a signal. Command Code distills those into project-level /skills and personal /memory, so the next session opens with the conventions you already prefer. No rules to write, no prompts to maintain."
  },
  {
    q: "Which models can I use? Can I bring my own?",
    a: "Every model listed in our docs ships out of the box — Anthropic, OpenAI, Google, xAI, DeepSeek, Qwen, Kimi, GLM, MiniMax, and more. New vendors land regularly."
  },
  {
    q: "Is my code used for training?",
    a: "No. Never. Your code, your skills, and your memory stay on your machine. Command Code never trains on your work."
  },
  {
    q: "How do teams share taste?",
    a: "npx taste push to publish a project skill, npx taste pull to install one. Skills are open files in your repo — review them in PRs like any other code."
  },
  {
    q: "What does it cost?",
    a: "Free tier for solo developers. Pro and Team plans add seats, more compute, and shared taste registries. Start with $1/mo trial or $10/mo GOAT plan with $70 free credits."
  }
];
