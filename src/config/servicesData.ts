import { IconType } from "react-icons";
import { FiCode, FiCpu, FiZap, FiLayout, FiSearch, FiMessageSquare } from "react-icons/fi";

export interface TechItem {
  name: string;
  category: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  desc: string;
  features: string[];
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceData {
  title: string;
  subtitle: string;
  slug: string;
  color: string;
  tag: string;
  heroDesc: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    desc: string;
  };
  metrics: { value: string; label: string }[];
  features: { title: string; desc: string }[];
  techStack: TechItem[];
  pricing: PricingPlan[];
  faqs: FAQItem[];
  seo: {
    title: string;
    description: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    subtitle: "Lightning-fast, ultra-secure websites built to turn your visitors into paying customers.",
    tag: "SPEED.CONVERSION",
    color: "#ff0099",
    heroDesc: "We build stunning, luxury-grade websites that load instantly, never crash, and make your business look like the premium leader in your industry.",
    problem: {
      title: "The Massive Cost of a Slow, Dated Website",
      points: [
        "A 1-second delay in mobile loading time can slash your sales and customer inquiries by 20%.",
        "Clunky, old platforms like WordPress are easy targets for hackers and require expensive monthly maintenance.",
        "Cheap, generic templates look unprofessional and fail to build trust with high-value clients."
      ]
    },
  solution: {
      title: "Modern, Hand-Crafted Web Engineering",
      desc: "We ditch the slow templates and write clean, modern code using Next.js. Your website's files are delivered instantly from server networks closest to your user, giving them a completely smooth, sub-second browsing experience anywhere in the world."
    },
    metrics: [
      { value: "100%", label: "Google Speed Score Target" },
      { value: "<0.4s", label: "Average Page Loading Time" },
      { value: "+34%", label: "Average Jump in Customer Inquiries" }
    ],
    features: [
      { title: "Bulletproof Security & Speed", desc: "By separation of your front design from your back data systems, hackers have nothing to target, and your site loads instantly." },
      { title: "Premium Visual Animations", desc: "Custom-designed layouts with high-end, smooth scrolling physics that make your brand feel premium, expensive, and credible." },
      { title: "Optimized for Mobile Devices", desc: "Flawless performance across all screen sizes, ensuring mobile visitors face absolutely zero friction while buying or booking." },
      { title: "The Cyber Loom Advantage", desc: "Unlike agencies that copy-paste generic WordPress templates, we write clean, custom Next.js code. You get a completely unique, premium asset that you fully own—giving you unbeatable Google speeds and zero ongoing plugin fees." }
    ],
    techStack: [
      { name: "React / Next.js", category: "Frontend Engine" },
      { name: "TypeScript", category: "Safe Code Logic" },
      { name: "Tailwind CSS", category: "Modern Styling" },
      { name: "Framer Motion", category: "Smooth Animations" },
      { name: "Node.js", category: "Backend System" },
      { name: "PostgreSQL", category: "Secure Database" },
      { name: "Vercel Edge Network", category: "Global Hosting" },
      { name: "Cloudflare", category: "Security & DNS" }
    ],
    pricing: [
      {
        name: "Premium Core",
        price: "₹45,000",
        desc: "High-converting premium websites and systems for growing businesses.",
        features: ["Custom Premium Visual Design", "Next.js High-Speed Framework", "Tailwind Fluid Layout System", "Built-in Google SEO Setup", "12 Months Full Structural Support"]
      },
      {
        name: "Enterprise Custom",
        price: "Custom Matrix",
        desc: "Complex dynamic platforms, custom portals, and global scale web applications.",
        features: ["Everything in Core Plan", "Advanced Multi-User Portals", "Custom API & Database Setup", "Dedicated Cloud Infrastructure", "SLA-Backed On-Call Support"]
      }
    ],
    faqs: [
      { q: "Why use Next.js instead of traditional platforms like WordPress?", a: "WordPress relies on heavy databases that load slowly every time a user clicks a button, leaving you vulnerable to bugs and hackers. Next.js turns your site into lightweight, pre-optimized pages that load instantly and are practically impossible to hack." },
      { q: "Can my team easily make edits after the website goes live?", a: "Yes. We set up an incredibly simple, user-friendly dashboard (Headless CMS) where your team can safely change text, blogs, and images in clicks, without any risk of breaking the website design or layout code." }
    ],
    seo: {
      title: "Premium Website Development Services | The Cyber Loom",
      description: "High-speed, custom Next.js web development engineered for premium brands. Elevate your online presence with blazing-fast speeds from The Cyber Loom."
    }
  },
  "ai-integration": {
    slug: "ai-integration",
    title: "AI Integration",
    subtitle: "Injecting secure, custom Artificial Intelligence directly into your business databases.",
    tag: "INTELLIGENT.CORE",
    color: "#8a2be2",
    heroDesc: "Stop copy-pasting sensitive info into public AI tools. We link advanced, isolated AI models safely to your unique company records so your tools can think, read, and answer with absolute precision.",
    problem: {
      title: "The Cost of Outdated, Non-AI Business Tools",
      points: [
        "Your team burns hours searching manually through thousands of internal PDFs, spreadsheets, and emails.",
        "Standard AI tools (like free ChatGPT) don't know anything about your specific business operations, products, or clients.",
        "Uploading customer data into public AI platforms creates major privacy leaks and legal liabilities."
      ]
    },
    solution: {
      title: "A Secure, Private AI Brain for Your Company",
      desc: "We build an isolated data bridge between your company's secure storage and professional AI models. The system reads and understands all your internal files instantly, answering team questions with 100% accurate context, while keeping your data private."
    },
    metrics: [
      { value: "70%", label: "Reduction in Manual Data Processing" },
      { value: "<2.1s", label: "Average AI Response Speed" },
      { value: "100%", label: "Guaranteed Data Privacy Isolation" }
    ],
    features: [
      { title: "Smart Internal Document Search", desc: "An intelligent search tool that allows employees to instantly ask questions and pull specific answers from all company manuals or histories." },
      { title: "Secure Cloud Frameworks", desc: "Custom backends built to let you utilize world-class AI models (OpenAI, Claude, or open-source) under strict security lock and key." },
      { title: "Automated Data Cleaning", desc: "Smart background scripts that automatically organize thousands of unorganized raw texts or files into perfect database rows." },
      { title: "The Cyber Loom Advantage", desc: "We don't sell cheap, generic API wrappers that leak data. We construct completely isolated, private pipelines. Your proprietary operational data never touches public training pools, meaning your intellectual property remains 100% secure and legally protected." }
    ],
    techStack: [
      { name: "OpenAI / Anthropic Claude APIs", category: "AI Brains" },
      { name: "LangChain / LlamaIndex", category: "AI Frameworks" },
      { name: "Pinecone / Chroma", category: "Secure Memory DB" },
      { name: "Python / FastAPI", category: "Backend Engine" },
      { name: "Node.js Ecosystem", category: "App Integration" },
      { name: "Docker Containers", category: "Secure Deployment" }
    ],
    pricing: [
      {
        name: "Neural Implementation",
        price: "₹85,000",
        desc: "Integrating highly secure, custom AI context search into your current software stack.",
        features: ["Private API Proxy Setup", "Smart Document Processing Engine", "Internal Knowledge Base Setup", "Complete Data Security Audit", "3 Months Ongoing Optimization"]
      },
      {
        name: "Enterprise Neural",
        price: "Custom Matrix",
        desc: "Fully independent, private open-source AI models hosted on your own dedicated cloud servers.",
        features: ["Private Cloud AI Server Hosting", "On-Premises Data Syncing", "Continuous Self-Training Loops", "High-Volume Database Sharding", "Dedicated Developer Retention"]
      }
    ],
    faqs: [
      { q: "Will our company's confidential files be used to train public AI?", a: "Absolutely not. We implement enterprise-level data connections where storage opt-outs are legally enforced by the provider, or host models on your private servers. Your data remains strictly yours." },
      { q: "What factors decide the final price of an AI setup?", a: "Pricing is calculated based on how much data needs to be processed (PDFs, CRM histories, spreadsheets), how often it changes, and whether we plug into premium APIs or build a private cloud server." }
    ],
    seo: {
      title: "Enterprise AI Integration Services | The Cyber Loom",
      description: "Securely link advanced AI models to your private business data. Boost team efficiency with custom AI systems designed by The Cyber Loom."
    }
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Creating automated workflows that run your repetitive business tasks 24/7 without human errors.",
    tag: "ZERO.FRICTION",
    color: "#00dbde",
    heroDesc: "Put your business operations on autopilot. We design self-correcting workflows that instantly route leads, sync software, update dashboards, and handle admin work around the clock.",
    problem: {
      title: "The Cost of Slow, Manual Admin Work",
      points: [
        "Manual data entry across separate software leads to costly human mistakes and lost details.",
        "Delayed responses to inbound client leads allow potential sales to vanish to faster competitors.",
        "Your team burns creative energy on repetitive copy-paste tasks instead of growing the business."
      ]
    },
    solution: {
      title: "Instant, Connected Software Ecosystems",
      desc: "We build automatic automation routines using top workflow engines (n8n, Zapier) and clean logic code. The exact second an action occurs in one app (like receiving a payment or lead), your whole business system responds and syncs instantly."
    },
    metrics: [
      { value: "Zero", label: "Manual Data Entry Errors" },
      { value: "24/7", label: "Continuous Workflow Uptime" },
      { value: "12x", label: "Operational Speed Multiplier" }
    ],
    features: [
      { title: "Self-Fixing Workflows", desc: "Automations designed with internal smart checks to catch incorrect info and automatically fix typos mid-route." },
      { title: "Instant CRM Multi-Syncing", desc: "One event updates everything at once—syncing your sales pipelines, accounting apps, and chat groups instantly." },
      { title: "Intelligent Lead Processing", desc: "AI filters inbound contact forms, understands buyer intent, and alerts the right teammate while sending an immediate custom reply." },
      { title: "The Cyber Loom Advantage", desc: "Instead of locking you into expensive monthly Zapier tiers that charge you per click, we specialize in building self-hosted automation engines (using n8n). This means you can run millions of automated tasks for free, saving you massive monthly software overhead." }
    ],
    techStack: [
      { name: "n8n (Self-Hosted)", category: "Automation Center" },
      { name: "Zapier Developer Tools", category: "App Connections" },
      { name: "JavaScript / Python Nodes", category: "Custom Logic" },
      { name: "HubSpot / CRM APIs", category: "Sales Sync" },
      { name: "Stripe Webhooks", category: "Payment Sync" },
      { name: "Docker Systems", category: "Hosting Setup" }
    ],
    pricing: [
      {
        name: "Growth Engine",
        price: "₹60,000",
        desc: "Automating core daily operations, multi-app data syncing, and smart incoming lead pipelines.",
        features: ["Up to 5 Multi-Step Automated Flows", "AI Intent-Reading Logic Gate", "Advanced Error Handling Setup", "Workflow Server Hosting Deployment", "30 Days Active Live-Tuning"]
      },
      {
        name: "Scale Infrastructure",
        price: "Custom Matrix",
        desc: "A total operational overhaul using dedicated, private automation server clusters.",
        features: ["Unlimited Automated Workflows", "Custom Code Integration Blocks", "High-Volume Data Processing", "Private Server Cost Optimization", "Priority Developer SLA Support"]
      }
    ],
    faqs: [
      { q: "What happens if an external software app drops or crashes?", a: "We build advanced safety checks into every script. If an external app errors out, our system automatically pauses, retries, logs the issue safely, and pings your team via WhatsApp or Slack without losing any data." },
      { q: "Can these automations work with old, custom legacy software?", a: "Yes. If your old software has an open data connection, we can tap into it. If it doesn't, we write custom server web-scrapers or direct database syncing links to bridge the gap safely." }
    ],
    seo: {
      title: "Custom AI Automation Workflows | The Cyber Loom",
      description: "Replace manual operational bottlenecks with high-end, autonomous workflow systems. Secure AI automations built for modern scale by The Cyber Loom."
    }
  },
  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    subtitle: "Engineering custom cloud software products ready to scale to thousands of users.",
    tag: "SOFTWARE.PRODUCT",
    color: "#ff0099",
    heroDesc: "Turn your unique business logic into an independent software asset. We build secure, beautifully crafted cloud platforms with robust user databases, recurring billing engines, and clean, fast-loading code.",
    problem: {
      title: "The Technical Mistakes That Kill New Software Products",
      points: [
        "Badly structured databases leak customer information between accounts, creating massive legal issues.",
        "Unoptimized server setups generate shocking, unpredictable hosting bills as user signups grow.",
        "Messy, unorganized code makes adding new software features painfully slow and expensive later on."
      ]
    },
    solution: {
      title: "Scalable, High-Performance Software Architecture",
      desc: "We build Software-as-a-Service applications using top-tier Next.js frameworks, optimized database engines (Prisma/Drizzle), and strictly isolated database locks. Your product launches clean, runs incredibly fast, and scales affordably."
    },
    metrics: [
      { value: "99.99%", label: "Target Platform Uptime Guarantee" },
      { value: "<50ms", label: "Database Response Speeds" },
      { value: "Zero", label: "Cross-Account Data Leak Risks" }
    ],
    features: [
      { title: "Isolated User Databases", desc: "Ironclad security locks built into the core engine ensuring data rows are completely hidden and secure between user accounts." },
      { title: "Stripe Subscription Engines", desc: "Flawless integration of multi-tier monthly subscription plans, usage metrics, user billing portals, and tax invoices." },
      { title: "Granular Team Access Control", desc: "Fine-grained permission tools that let your customers safely assign specific feature views or roles to their team members." },
      { title: "The Cyber Loom Advantage", desc: "We are full-stack product experts who understand both high-end design and heavy backend scaling. Every single line of code we ship is thoroughly documented, modular, and built on industry standards—meaning you can easily raise funding or pass rigorous enterprise security audits." }
    ],
    techStack: [
      { name: "Next.js App Router", category: "Core Framework" },
      { name: "TypeScript", category: "Clean Code Logic" },
      { name: "PostgreSQL / Prisma", category: "Database Layer" },
      { name: "Redis Cache", category: "Speed Booster" },
      { name: "Stripe Billing API", category: "Subscription Center" },
      { name: "Docker / AWS ECS", category: "Cloud Infrastructure" }
    ],
    pricing: [
      {
        name: "SaaS MVP Core",
        price: "₹1,80,000",
        desc: "Building a fully functional, beautiful software product ready to launch and acquire beta testers.",
        features: ["Multi-Tenant Account Security Design", "Stripe Recurring Billing Setup", "User Sign-in & Team Roles System", "Premium, Luxury Dashboard UI", "Complete Production Hand-Off & Keys"]
      },
      {
        name: "Enterprise Custom Platform",
        price: "Custom Matrix",
        desc: "High-scale, custom software platforms requiring heavy data systems or highly specialized integrations.",
        features: ["Everything in MVP Core Plan", "Dedicated Cloud Server Clusters", "Advanced Multi-App Integrations", "Real-Time Activity Feeds", "On-Call Systems Support Engine"]
      }
    ],
    faqs: [
      { q: "How do you guarantee that user data doesn't get mixed up between accounts?", a: "We enforce strict Row-Level Security deep within our SQL database engines. This creates an invisible firewall around every account, meaning a user can never see or edit data belonging to another company." },
      { q: "Do we own the full source code when the project is done?", a: "Yes, 100%. The absolute second we finish, the entire production GitHub code repository, user interface designs, and cloud server keys are transferred directly to you. You retain total legal ownership." }
    ],
    seo: {
      title: "Premium SaaS Product Engineering | The Cyber Loom",
      description: "Build robust, cloud-native SaaS platforms with flawless code architecture. Secure multi-tenant systems engineered for scale by The Cyber Loom."
    }
  },
  "seo-optimization": {
    slug: "seo-optimization",
    title: "SEO Optimization",
    subtitle: "Dominating Google search results through high-speed page setups and clean code architecture.",
    tag: "GOOGLE.RANK",
    color: "#8a2be2",
    heroDesc: "Stop wasting money on basic keyword tags. We optimize your website's hidden structure, build semantic code layouts that Google bots love, and secure lightning-fast load speeds to unlock organic buyer traffic.",
    problem: {
      title: "Why Standard Search Marketing Fails to Rank",
      points: [
        "Heavy, slow client-rendered websites hide text from Google's crawlers, making your pages completely invisible.",
        "Slow mobile load speeds and jumping layouts trigger active ranking penalties under Google's Core Web Vitals.",
        "Messy, disorganized page layouts confuse search bots, preventing your most profitable pages from indexing."
      ]
    },
    solution: {
      title: "True Technical SEO Engineering",
      desc: "True SEO is an engineering challenge, not just writing blog posts. We build crisp HTML structures, pre-render your pages on fast server nodes, and inject custom search data graphs (JSON-LD) so Google instantly indexes and rewards your site speed."
    },
    metrics: [
      { value: "Pass", label: "Google Core Web Vitals Validation" },
      { value: "+140%", label: "Average Growth in Organic Visibility" },
      { value: "100%", label: "Search Schema Graph Accuracy" }
    ],
    features: [
      { title: "Rich Snippet Schema Injection", desc: "Embedding high-end automated code tags into your site headers so search engines display your review stars, prices, and FAQs directly in results." },
      { title: "Core Web Vitals Dominance", desc: "Fine-tuning image files, script load paths, and code layouts to guarantee a perfect passing score on Google's speed tests." },
      { title: "Scalable Page Generation", desc: "Constructing smart, automated page models that let your site target hundreds of valuable regional or product keywords efficiently." },
      { title: "The Cyber Loom Advantage", desc: "We look at SEO as code developers, not content writers. We fix the foundational software speed and core markup that marketing agencies can't touch—giving you permanent, lightning-fast technical scores that stay ahead of search engine updates." }
    ],
    techStack: [
      { name: "Next.js Server Side Rendering", category: "Speed Framework" },
      { name: "JSON-LD Structured Schema", category: "Google Data Tags" },
      { name: "Google Search Console API", category: "Ranking Analytics" },
      { name: "Screaming Frog Engine", category: "Code Audit Software" },
      { name: "Tailwind Optimization", category: "Lightweight Layouts" },
      { name: "Vercel Analytics Network", category: "Speed Diagnostics" }
    ],
    pricing: [
      {
        name: "Technical Growth",
        price: "₹35,000",
        desc: "Complete code cleanup, search schema data tags injection, and core page speed overhauls for existing sites.",
        features: ["Google Core Web Vitals Speed Overhaul", "Full Structural HTML Code Cleanup", "Custom Rich Snippet Schema Injection", "Sitemap & Robots Engine Configuration", "90-Day Analytics & Keyword Audit"]
      },
      {
        name: "Programmatic Domination",
        price: "Custom Matrix",
        desc: "Building dynamic, data-driven page models that automatically target hundreds of profitable transaction buyer terms.",
        features: ["Everything in Technical Growth Core", "Custom Content Template Builder", "Automated Long-Tail Page Generators", "Deep Competitor Data Auditing", "Scale Content Interlinking Software"]
      }
    ],
    faqs: [
      { q: "What are Google Core Web Vitals, and why do they affect my sales?", a: "Core Web Vitals are real performance scores tracked by Google evaluating how fast your page shows up, how fast a link responds, and if the page shifts while loading. If your score is poor, Google actively pushes you below competitors." },
      { q: "How long until we see traffic improvements from a technical code cleanup?", a: "Technical code cleanups usually trigger search bot crawls within 14 to 30 days as Google discovers your clean code. Significant ranking moves and buyer traffic growth typically build steadily over 60 to 90 days." }
    ],
    seo: {
      title: "Technical SEO Engineering Services | The Cyber Loom",
      description: "Optimize your system architecture for real organic growth. Maximize search presence with speed and clean semantic structures engineered by The Cyber Loom."
    }
  },
  "ai-chatbots": {
    slug: "ai-chatbots",
    title: "AI Chatbots",
    subtitle: "Smart conversational agents linked directly to your custom data to close sales 24/7.",
    tag: "SMART.AGENTS",
    color: "#00dbde",
    heroDesc: "Deploy hyper-intelligent chat agents that don't rely on frustrating, old-school keyword rules. We build chat systems that read intent, qualify buyers, check inventory, and book meetings directly into your calendar.",
    problem: {
      title: "The Cost of Slow, Outdated Customer Chat Windows",
      points: [
        "Traditional support teams go offline overnight, causing hot customer leads to leave your site and buy elsewhere.",
        "Basic button-based bots annoy users because they fail to understand normal human questions.",
        "Isolated chat windows can't update your internal CRM pipelines or book actual meetings automatically."
      ]
    },
    solution: {
      title: "Action-Capable Conversational AI Agents",
      desc: "We build tailored chat windows that embed directly on your website or messaging profiles. These assistants use smart semantic context matching to read what a user wants, fetch instant answers from your internal documents, and run background tasks on command."
    },
    metrics: [
      { value: "<2 Sec", label: "Instant Response Time to Inbound Leads" },
      { value: "40%+", label: "Increase in Form Completions & Leads" },
      { value: "24/7/365", label: "Automated Communication Coverage" }
    ],
    features: [
      { title: "Direct Calendar Bookings", desc: "Allowing the chat agent to check your real-time calendar availability and book confirmed meetings instantly inside the conversation." },
      { title: "Omnichannel Sync Engine", desc: "Deploying a single, smart conversational brain that speaks identically across your custom website landing page, WhatsApp Business, or SMS lines." },
      { title: "Flawless Live-Human Handoff", desc: "Setting up crisp notification filters that immediately alert your live sales team on Slack or WhatsApp when a buyer exhibits hot purchase signals." },
      { title: "The Cyber Loom Advantage", desc: "We don't build dumb button bots that frustrate customers. We engineer context-aware conversational specialists equipped with 'function calling'. This means your bot doesn't just chat—it performs active work like creating calendar invites, pulling database rows, or sending email follow-ups automatically." }
    ],
    techStack: [
      { name: "OpenAI Assistants Core API", category: "AI Models" },
      { name: "Vectorized Context Stores", category: "Smart Memory" },
      { name: "Function Calling Webhooks", category: "System Actions" },
      { name: "Cal.com / Calendly APIs", category: "Calendar Sync" },
      { name: "WhatsApp Business Framework", category: "Messaging Link" },
      { name: "Next.js Custom Chat UI", category: "Frontend Interface" }
    ],
    pricing: [
      {
        name: "Custom Agent Core",
        price: "₹50,000",
        desc: "A tailored, intelligent chat system trained directly on your unique company manuals, pricing, and services.",
        features: ["Custom Chat Widget UI Interface", "Internal Knowledge Base Processing", "Lead Capture Form Automation", "Direct Email & Slack Lead Alerting", "30 Days Training Optimization Log"]
      },
      {
        name: "Omnichannel Scale Agent",
        price: "Custom Matrix",
        desc: "Advanced chat engines running secure transactional tasks across multiple messaging networks simultaneously.",
        features: ["Everything in Custom Agent Core", "Official WhatsApp Business Integration", "Live Tool Database Lookups", "Autonomous Calendar Booking Actions", "Dedicated Database Performance Audits"]
      }
    ],
    faqs: [
      { q: "How does the chat bot learn specific facts about our business?", a: "We convert your raw brochures, pricing sheets, and text documents into structured semantic data indexes (Vector Databases). When a user types a question, the assistant scans these private references instantly to answer with high accuracy." },
      { q: "What happens if a user asks a complex question the bot doesn't know?", a: "The assistant has built-in safety rules. If a question falls completely outside its training files, it smoothly steers the conversation to collect the user's phone or email details, and instantly pings your human team to take over." }
    ],
    seo: {
      title: "Context-Aware AI Chatbot Engineering | The Cyber Loom",
      description: "Deploy action-capable, conversational AI assistants. Convert web traffic into qualified leads with smart messaging infrastructure from The Cyber Loom."
    }
  }
};