import { FaEnvelope, FaGithub, FaLinkedin, FaSalesforce } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { assetUrl } from '../lib/assetUrl'

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  type: 'Full-time' | 'Internship' | 'Contract'
  period: string
  location: string
  current: boolean
  bullets: string[]
  tags: string[]
}

export interface ProjectItem {
  title: string
  description: string
  icon: string
  category: string
  accent: 'violet' | 'cyan' | 'emerald' | 'amber' | 'rose'
  tags: string[]
  highlights: string[]
  outcome: string
  architecture: string[]
  proofStatus: string
  disclaimer?: string
  githubUrl?: string
  liveUrl?: string
  proofUrl?: string
  proofLinkLabel?: string
  featured: boolean
}

export interface QuickFact {
  label: string
  value: string
  href?: string
}

export interface StatItem {
  value: string
  suffix: string
  label: string
  detail?: string
}

export interface NavLinkItem {
  label: string
  href: string
  id: string
}

export interface SocialLinkItem {
  label: string
  href: string
  icon: IconType
}

export interface ContactLinkItem {
  label: string
  value: string
  href: string
  icon: IconType
}

export interface PersonaTrait {
  label: string
  description: string
}

export interface WorkflowStep {
  label: string
}

export interface TerminalLine {
  label: string
  value: string
}

export interface CapabilityItem {
  label: string
  title: string
  description: string
  proof: string
  tags: string[]
  accent: 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet'
}

export interface ProofPoint {
  label: string
  value: string
  detail: string
}

export interface EducationItem {
  school: string
  degree: string
  period: string
  location: string
  imageUrl: string
  coursework: string[]
  activities: string[]
}

export interface SignalItem {
  label: string
  title: string
  detail: string
  tags: string[]
  tone: 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet'
}

export interface TrailheadMetric {
  value: string
  label: string
  detail: string
}

export interface SuperbadgeItem {
  name: string
  completed: string
  description: string
}

export interface RolePath {
  id: string
  role: string
  headline: string
  pitch: string
  proof: string
  stack: string[]
  tone: 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet'
}

export interface PublicationItem {
  title: string
  journal: string
  published: string
  doi: string
  doiUrl: string
  authors: string[]
  authorListingNote?: string
  summary: string
  tags: string[]
}

export interface SkillDepthItem {
  category: string
  points: string[]
  interviewTest: string
  tone: 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet'
}

export interface RangeItem {
  title: string
  detail: string
  tags: string[]
}

export const PERSONAL = {
  name: 'Goutham Reddy S',
  shortName: 'SGR',
  firstName: 'Goutham',
  lastName: 'Reddy',
  suffixName: 'S.',
  tagline: 'AI + Salesforce Engineer with backend depth',
  eyebrow: 'Software Engineer @ Visionet Systems',
  heroHeadline: 'AI + Salesforce Engineer building agentic workflows, backend APIs, and production automation.',
  heroDescription:
    'Bengaluru-based engineer shipping Salesforce automation, enterprise AI workflows, and reliable backend systems for real business processes.',
  bio: [
    'Computer Science engineer from Bengaluru (B.Tech CSE, Data Science) with a production-minded builder bias. I turn AI and automation requirements into workflows teams can operate after launch.',
    'At Visionet Systems, I contribute to LLM-powered and agentic AI workflows for enterprise use cases — query handling, context capture, intelligent routing, RAG pipelines, backend integrations, and Salesforce service automation.',
    'My focus is the bridge between product and plumbing: model behavior, retrieval quality, API design, platform workflows, logs, latency, and the operational details that keep software dependable after launch.',
  ],
  highlightPoints: [
    'LLM and agentic AI systems for enterprise workflows (team reach: 1000+ users)',
    'RAG pipelines with multi-model evaluation (OpenAI, Grok, Perplexity)',
    'Built observability stack with Loki and Grafana for production logging and tracing',
    'Diagnosed RAG pipeline issues: vector scoring normalization, reranking threshold tuning, and retrieval quality',
    'Architected multi-agent system spike comparing LangGraph, CrewAI, and AutoGen for cost and capability',
    'Shipped RAGAS evaluation loops for retrieval quality measurement in production RAG',
    'Designed AWS Cost Optimization Agent patterns with approval workflows and cost aggregation',
    'FastAPI, REST APIs, and backend automation for decision support',
    'Salesforce Apex, LWC, Flow, Service Cloud, and Agentforce-oriented builds',
    'Mentored 4 developers on RAG architecture, API design, production debugging, and code review',
    'Published NLP/chatbot research in IRJMETS (Jan 2024)',
  ],
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 9741341708',
  email: 'gouthamgovardhan@hotmail.com',
  github: 'https://github.com/gouthamgovardhan',
  linkedin: 'https://linkedin.com/in/goutham-govardhan',
  trailblazer: 'https://www.salesforce.com/trailblazer/gouthamgovardhan',
  resumeUrl: assetUrl('assets/resume.pdf'),
  profileImageUrl: assetUrl('assets/profile.jpg'),
  officeImageUrl: assetUrl('assets/profile.jpg'),
  formalImageUrl: assetUrl('assets/profile-formal.jpg'),
  currentRole: 'Software Engineer, AI + Salesforce @ Visionet Systems',
  openToHire: 'Open to Roles',
  locationEyebrow: 'Location - Hover to Explore',
  country: 'India',
  timezone: 'GMT+5:30',
  aboutQuote: '"I like AI that ships with logs, fallbacks, ownership, and a clear reason to exist."',
  footerLine: 'Build the demo. Ship the system.',
  copyrightYear: '2026',
} as const

export const HERO_TECH = [
  'RAG',
  'Agents',
  'FastAPI',
  'Salesforce',
  'Agentforce',
  'Apex',
  'LWC',
  'Flow',
  'Python',
  'TypeScript',
  'Docker',
  'LangChain',
  'Eval Loops',
]

export const HERO_TERMINAL: TerminalLine[] = [
  { label: 'prompt', value: 'turn enterprise AI into shipped workflows' },
  { label: 'retrieval', value: 'hybrid + evaluated' },
  { label: 'salesforce', value: 'agents + flows + lwc' },
  { label: 'backend', value: 'apis that keep promises' },
  { label: 'mood', value: 'ship first, polish always' },
]

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Roles', href: '#roles', id: 'roles' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Salesforce', href: '#salesforce', id: 'salesforce' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Depth', href: '#skills-depth', id: 'skills-depth' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: 'GitHub', href: PERSONAL.github, icon: FaGithub },
  { label: 'LinkedIn', href: PERSONAL.linkedin, icon: FaLinkedin },
  { label: 'Trailblazer', href: PERSONAL.trailblazer, icon: FaSalesforce },
  { label: 'Email', href: `mailto:${PERSONAL.email}`, icon: FaEnvelope },
]

export const CONTACT_LINKS: ContactLinkItem[] = [
  { label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, icon: FaEnvelope },
  { label: 'LinkedIn', value: 'goutham-govardhan', href: PERSONAL.linkedin, icon: FaLinkedin },
  { label: 'GitHub', value: 'gouthamgovardhan', href: PERSONAL.github, icon: FaGithub },
  { label: 'Trailblazer', value: 'gouthamgovardhan', href: PERSONAL.trailblazer, icon: FaSalesforce },
]

export const SECTION_TEXT = {
  about: {
    label: 'Builder Profile',
    title: 'Production-minded engineer with platform range.',
    subtitle: 'Resume-backed highlights across AI systems, backend delivery, Salesforce work, and published research.',
  },
  capabilities: {
    label: 'What I Build',
    title: 'Core capabilities behind the role paths',
    subtitle:
      'AI workflows, Salesforce automation, and backend systems that make the whole stack run in production.',
  },
  roles: {
    label: 'Role Fit',
    title: 'One builder, multiple hiring lenses',
    subtitle:
      'Use this section to see how the same work maps to AI, Salesforce, backend, and software engineering roles.',
  },
  skills: {
    label: 'Skills - 02',
    title: 'Production stack, loaded from skills.txt',
    subtitle:
      'Core skills are backed by projects, resume, Trailhead proof, and hands-on delivery.',
  },
  skillsDepth: {
    label: 'Interview Depth',
    title: 'Skills I can explain under pressure',
    subtitle:
      'Discussion-ready depth across backend APIs, Salesforce, RAG, LLM systems, security, observability, and debugging.',
  },
  experience: {
    label: 'Experience - 03',
    title: "Where I've shipped.",
    subtitle: 'Three roles. Each one represents a stack, a team, and work that moved past the demo stage.',
  },
  projects: {
    label: 'Shipped Builds',
    title: 'Real projects. Clear outcomes.',
    subtitle:
      'AI workflows, enterprise automation, and ML systems — each with a defined stack, architecture path, and proof link where available.',
  },
  publications: {
    label: 'Published Work',
    title: 'Research signal behind the builder story',
    subtitle:
      'Team-authored academic work connecting deep learning, NLP, chatbot design, and real-time conversational systems.',
  },
  salesforce: {
    label: 'Trailhead Credentials',
    title: 'Salesforce proof: badges, superbadges, and Agentforce practice',
    subtitle:
      'Public Trailblazer profile with 102 badges, 4 superbadges, Agentforce work, Prompt Builder practice, and service workflow learning.',
  },
  education: {
    label: 'Education - 04',
    title: 'Class of 2024',
    subtitle:
      'A student-ID style archive for the data-systems, ML, and leadership years at Presidency University.',
  },
  contact: {
    label: 'Contact',
    title: 'Got a workflow, platform, or product problem?',
    subtitle:
      'Email and LinkedIn are the fastest paths. Phone number is available on the downloadable resume.',
  },
} as const

export const ACTION_LABELS = {
  viewProjects: 'View Projects',
  downloadResume: 'Download Resume',
  menu: 'Toggle navigation',
  githubProject: 'Open GitHub repository',
  liveProject: 'Open live project',
  sourcePending: 'Resume notes',
  viewProof: 'View proof',
  caseStudy: 'Featured',
  workflow: 'Flow',
} as const

export const TECH_EXPLANATIONS: Record<string, string> = {
  AI: 'Systems that use models to reason, classify, generate, or automate decisions.',
  'AI Help': 'Using AI as an assistant while still validating the engineering output.',
  Agents: 'LLM workflows that can plan, call tools, and complete multi-step tasks.',
  Agentforce: 'Salesforce agent platform for AI-assisted service and business workflows.',
  'Agent Builder': 'Salesforce tooling for configuring agent behavior, actions, and instructions.',
  'Agile Methodology': 'Iterative project approach using planning, execution, feedback, and adaptation.',
  'Agriculture AI': 'AI applied to farming, advisory workflows, crop decisions, and knowledge access.',
  Apex: 'Salesforce backend language for custom business logic and platform automation.',
  'Apex Triggers': 'Apex logic that runs automatically when Salesforce records change.',
  'Async Patterns': 'Backend designs that handle work without blocking the main request path.',
  AWS: 'Cloud platform for hosting, storage, compute, networking, and deployment services.',
  ChromaDB: 'Vector database used to store embeddings for semantic retrieval.',
  Chatbot: 'Conversational interface that responds to users through text or voice.',
  Classification: 'Machine learning task that assigns inputs to categories.',
  Databases: 'Systems for storing, querying, and managing application data.',
  Dataset: 'Collection of examples used to train, test, or evaluate a model.',
  'Decision Automation': 'Software logic that helps recommend or route decisions with less manual lookup.',
  'Deep Learning': 'Neural network methods for learning complex patterns from data.',
  Docker: 'Container tooling that packages apps and dependencies for predictable deployment.',
  'Email-to-Case': 'Salesforce feature that turns customer emails into support cases.',
  'Einstein Bots': 'Salesforce bot tooling for guided self-service and customer support experiences.',
  'Einstein Discovery': 'Salesforce analytics and AI feature for discovering patterns and recommendations.',
  Embeddings: 'Numeric representations of text used for search, retrieval, and similarity.',
  Eval: 'Quality checks that measure whether model outputs are useful and reliable.',
  'Eval Loops': 'Repeated testing and feedback cycles for improving AI system behavior.',
  FastAPI: 'Python framework for building fast, typed, production-ready APIs.',
  'Feature Engineering': 'Preparing useful input features so ML models can learn better patterns.',
  Flask: 'Lightweight Python web framework for APIs and services.',
  Flow: 'Salesforce automation builder for business processes without heavy custom code.',
  Flows: 'Salesforce automation flows for guided logic, approvals, and process steps.',
  'Flow Builder': 'Salesforce visual builder for automating business workflows.',
  'GitHub Actions': 'CI/CD automation for tests, builds, and deployments from GitHub.',
  Grafana: 'Dashboard and monitoring tool for observing system metrics.',
  HuggingFace: 'Ecosystem for open-source ML models, datasets, and inference tools.',
  'Intent parsing': 'Identifying what a user wants from their natural-language request.',
  'Intent Classification': 'Classifying a user message into the action or topic it represents.',
  JavaScript: 'Core programming language of the web.',
  JWT: 'Token format used for stateless authentication between clients and services.',
  'JWT / OAuth2': 'Common authentication and authorization standards for APIs.',
  LangChain: 'Framework for composing LLM apps with prompts, tools, memory, and retrieval.',
  LangSmith: 'Tracing and evaluation platform for debugging LLM applications.',
  Linux: 'Operating system commonly used for servers, development, and deployments.',
  LLaMA: 'Open large language model family used for local or hosted AI workflows.',
  'LLaMA / Ollama': 'Local model workflow: LLaMA models served through Ollama.',
  'LLaMA/Ollama': 'Local model runtime using LLaMA through Ollama.',
  LLM: 'Large language model used for generation, reasoning, summarization, and chat.',
  'LLM Evaluation': 'Testing model outputs for correctness, relevance, safety, and quality.',
  LSTM: 'Neural network architecture useful for sequence and text classification tasks.',
  'LSTM model': 'Sequence model used to learn patterns in text or time-series data.',
  LWC: 'Lightning Web Components, Salesforce UI framework for custom frontend experiences.',
  Machine: 'Computer systems and models used to process data and automate work.',
  'Machine Learning': 'Algorithms that learn patterns from data for prediction or classification.',
  MongoDB: 'Document database often used for flexible app data and chat memory.',
  'MongoDB memory': 'Stored conversation context used to support multi-turn chat.',
  MySQL: 'Relational database used for structured data and SQL queries.',
  'Multi-Agent Systems': 'Multiple AI agents coordinating specialized tasks.',
  Net: 'Networked systems, services, and cloud-connected platforms.',
  'Net Zero Cloud': 'Salesforce cloud for sustainability and emissions data workflows.',
  Next: 'React framework for production web applications.',
  'Next.js': 'React framework for routing, rendering, and production web apps.',
  Nginx: 'Web server and reverse proxy often used in deployments.',
  NLP: 'Natural Language Processing: techniques for understanding and classifying text.',
  Node: 'JavaScript runtime used for backend services and tooling.',
  'Node.js': 'JavaScript runtime for APIs, servers, and build tools.',
  OAuth2: 'Authorization protocol commonly used for secure access delegation.',
  Ollama: 'Tool for running and serving local LLMs.',
  Omni: 'Coordinated routing of work across channels or queues.',
  'Omni-Channel': 'Salesforce routing for assigning work to the right agent or queue.',
  OpenAI: 'Model provider for language, reasoning, embedding, and generation APIs.',
  'OpenAI API': 'API access to OpenAI models for generation, reasoning, and embeddings.',
  PostgreSQL: 'Reliable relational database for structured, transactional data.',
  Prompt: 'Instruction text that guides model behavior.',
  Preprocessing: 'Cleaning and transforming raw data before modeling.',
  'Prompt Builder': 'Salesforce tool for building reusable AI prompt templates.',
  'Prompt Engineering': 'Designing instructions and context to guide model output.',
  Python: 'General-purpose language used heavily in AI, backend services, and automation.',
  RAG: 'Retrieval-Augmented Generation: grounding model answers in external context.',
  RAGAS: 'Evaluation toolkit for measuring RAG answer quality and retrieval behavior.',
  React: 'JavaScript library for building interactive user interfaces.',
  Redis: 'Fast in-memory store often used for cache, queues, and session data.',
  'Redis Streams': 'Redis data structure for event streaming and queue-like workflows.',
  Reports: 'Structured views of business data for tracking and decision-making.',
  'Reports & Dashboards': 'Salesforce reporting tools for metrics and business visibility.',
  REST: 'API style using HTTP methods and resource-based endpoints.',
  'REST APIs': 'HTTP APIs used for integrations between services and platforms.',
  'API response': 'Structured result returned by a backend service or integration.',
  'Query intake': 'Capturing and normalizing the user request before processing.',
  'Recommendation logic': 'Rules or model behavior that maps user needs to suggested services.',
  Retrieval: 'Finding relevant stored context before generating an answer.',
  Retriever: 'Component that fetches relevant documents or chunks for RAG.',
  Salesforce: 'CRM platform for sales, service, automation, and enterprise workflows.',
  'Sales Cloud': 'Salesforce cloud for sales processes, accounts, opportunities, and pipeline.',
  'Service Cloud': 'Salesforce cloud for support, cases, service workflows, and agents.',
  SQLAlchemy: 'Python ORM for working with relational databases.',
  SOQL: 'Salesforce Object Query Language for querying Salesforce records.',
  'SOQL / SOSL': 'Salesforce query languages for records and search.',
  'Tailwind CSS': 'Utility-first CSS framework for building responsive interfaces.',
  TypeScript: 'Typed JavaScript that improves maintainability and editor feedback.',
  UAT: 'User Acceptance Testing before release.',
  'Vector Search': 'Search technique using embeddings to find semantically similar content.',
  'Workflow Logic': 'Business or backend rules that move a task from input to useful output.',
}

export const TRAILHEAD_METRICS: TrailheadMetric[] = [
  { value: '102', label: 'Badges', detail: 'Trailhead learning across Salesforce, Agentforce, service, sales, and AI topics' },
  { value: '58,450', label: 'Points', detail: 'Expeditioner rank progress toward Ranger' },
  { value: '13', label: 'Trails', detail: 'Structured Salesforce learning paths completed' },
  { value: '4', label: 'Superbadges', detail: 'Hands-on scenario credentials, including Agentforce and Prompt Builder work' },
]

export const ROLE_PATHS: RolePath[] = [
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    headline: 'RAG, agents, evals, and enterprise AI workflows.',
    pitch:
      'Hire here when you need shipped AI features — not demos that stop at the notebook.',
    proof: 'Enterprise LLM workflows, RAG, agent orchestration, and post-launch evaluation',
    stack: ['RAG', 'LangChain', 'OpenAI', 'RAGAS', 'LangSmith'],
    tone: 'violet',
  },
  {
    id: 'salesforce-developer',
    role: 'Salesforce Developer',
    headline: 'Apex, LWC, Flow, Service Cloud, Agentforce, and integrations.',
    pitch:
      'Hire here when Salesforce needs custom UI, automation, and integrations — not just config.',
    proof: 'Agentblazer Champion 2025, Agentforce Service Superbadge, Prompt Builder Superbadge',
    stack: ['Apex Triggers', 'LWC', 'Flows', 'SOQL/SOSL', 'Agentforce'],
    tone: 'cyan',
  },
  {
    id: 'salesforce-consultant',
    role: 'Salesforce Consultant',
    headline: 'Business workflow thinking plus technical execution.',
    pitch:
      'Hire here when the business problem needs translation into Salesforce service journeys and AI-assisted workflows.',
    proof: 'Service Cloud delivery, case lifecycle work, Trailhead Expeditioner',
    stack: ['Service Cloud', 'Omni-Channel', 'Email-to-Case', 'Reports', 'UAT'],
    tone: 'accent',
  },
  {
    id: 'backend-engineer',
    role: 'Backend Engineer',
    headline: 'APIs and automation logic that keep promises.',
    pitch:
      'Hire here when the product needs APIs, data models, and integrations that stay reliable in production.',
    proof: 'FastAPI services, REST integrations, MongoDB/MySQL projects, automation workflows',
    stack: ['Python', 'FastAPI', 'REST APIs', 'MongoDB', 'MySQL'],
    tone: 'emerald',
  },
  {
    id: 'software-engineer',
    role: 'Software Engineer',
    headline: 'Generalist builder with AI, backend, and platform range.',
    pitch:
      'Hire here when you want a generalist who can debug, integrate, mentor, and own messy product surfaces.',
    proof: 'Mentored 4 developers, production issue resolution, cross-stack delivery',
    stack: ['Problem Solving', 'Debugging', 'React', 'APIs', 'Ownership'],
    tone: 'amber',
  },
]

export const SUPERBADGES: SuperbadgeItem[] = [
  {
    name: 'Superbadge: Agentforce Service',
    completed: 'May 14, 2025',
    description: 'Customized an Agentforce Service Agent to handle customer inquiries and bookings.',
  },
  {
    name: 'Superbadge: Prompt Builder Templates',
    completed: 'May 7, 2025',
    description: 'Created Prompt Builder templates to supercharge AI-powered insights and engagement.',
  },
  {
    name: 'Case Lifecycle Superbadge Unit',
    completed: 'September 17, 2024',
    description: 'Worked through case lifecycle concepts for Salesforce service workflows.',
  },
  {
    name: 'Financial Services Cloud Specialist',
    completed: 'September 12, 2024',
    description: 'Completed Financial Services Cloud specialist scenario work on the Salesforce platform.',
  },
]

export const CERTIFICATIONS: string[] = [
  'Salesforce AI Champion',
  'Salesforce Certified AI Associate',
  'Financial Services Cloud Specialist',
  'Case Lifecycle Specialist Superbadge',
  'Trailhead Ranger / Expeditioner progress',
  'Google AI Essentials',
  'Python Development & Machine Learning Certification',
]

export const SKILL_DEPTH: SkillDepthItem[] = [
  {
    category: 'LLM Architecture & Evaluation',
    points: [
      'LangGraph for multi-agent orchestration, routing, and state graphs',
      'CrewAI and AutoGen evaluation for agent capability comparison',
      'RAGAS evaluation for retrieval quality, faithfulness, and coherence metrics',
      'RAG diagnostics: vector similarity scoring, reranking tuning, and chunk hierarchy',
      'Hybrid retrieval pipelines with BM25 plus semantic search',
      'Semantic caching and parent-child indexing patterns',
      'LangSmith observability for LLM traces and cost tracking',
    ],
    interviewTest: 'Compare LangGraph, CrewAI, and AutoGen for a production multi-agent workflow.',
    tone: 'violet',
  },
  {
    category: 'Infrastructure & Observability',
    points: [
      'Docker, Docker Compose, and Kubernetes basics',
      'Loki, Promtail, Grafana dashboards, and log aggregation',
      'Alembic database migrations and SQLAlchemy ORM',
      'Redis for caching, streaming, workers, and session patterns',
      'Credential management with Fernet encryption and secure config',
      'Structured logging, OpenTelemetry, trace correlation IDs, and log sampling',
      'Health checks, circuit breakers, and production monitoring patterns',
    ],
    interviewTest: "Walk me through how you'd set up observability for a backend API.",
    tone: 'cyan',
  },
  {
    category: 'Cloud & Cost Optimization',
    points: [
      'AWS cost analysis and optimization patterns',
      'Multi-vendor cost tracking across LLM APIs and developer tools',
      'Cost tracking for Pinecone, W&B, HuggingFace, LangSmith, and API usage',
      'Financial data modeling with Decimal arithmetic and cost aggregation',
      'Budget forecasting and anomaly detection patterns',
      'Reserved capacity planning vs on-demand cost-benefit analysis',
      'Organizational cost governance and chargeback models',
    ],
    interviewTest: 'How would you design a multi-vendor cost tracking system for LLM APIs and cloud services?',
    tone: 'amber',
  },
  {
    category: 'Vector Databases & Search',
    points: [
      'ChromaDB, Pinecone, and Weaviate',
      'Vector indexing, semantic search, and similarity scoring',
      'Reranking and score normalization',
      'Embedding model evaluation',
      'Hybrid search implementation with BM25 and semantic reranking',
      'Query decomposition and routing',
      'Context window optimization and multi-hop reasoning chains',
    ],
    interviewTest: 'How would you diagnose why a RAG system is returning irrelevant documents?',
    tone: 'emerald',
  },
  {
    category: 'LLM & Prompt Optimization',
    points: [
      'Prompt engineering and optimization loops',
      'LLM API integration with OpenAI, Anthropic Claude, Grok, and Perplexity',
      'Temperature and top-p tuning for reliability',
      'Token optimization and cost tracking per request',
      'Tool and function calling patterns',
      'Agent failure handling, fallback strategies, and recovery',
      'Cost tracking per agent call',
    ],
    interviewTest: 'Design a reliable prompt and model configuration strategy for a high-volume LLM workflow.',
    tone: 'rose',
  },
  {
    category: 'Data Processing & Evaluation',
    points: [
      'Data evaluation frameworks: RAGAS and custom evals',
      'Synthetic data generation with openpyxl and pandas pipelines',
      'Document processing and chunking strategies',
      'Hierarchical indexing with parent-child retrieval',
      'A/B testing LLM outputs',
      'Latency profiling and bottleneck identification',
      'Retrieval accuracy, answer relevance, faithfulness, and coherence metrics',
    ],
    interviewTest: "What metrics would you use to evaluate a RAG system's retrieval quality?",
    tone: 'emerald',
  },
  {
    category: 'API & System Design',
    points: [
      'REST API design patterns',
      'Rate limiting, throttling, and backoff strategies',
      'Error recovery and resilience patterns',
      'Request and response validation with Pydantic schemas',
      'API versioning and deprecation handling',
      'Idempotency and exactly-once semantics',
      'Dead letter queues and retry logic',
    ],
    interviewTest: "Walk me through how you'd design an API that needs to handle rate limits and retry logic.",
    tone: 'accent',
  },
  {
    category: 'Database & Migration Patterns',
    points: [
      'Alembic versioning strategy and reversible migrations',
      'Schema design for multi-tenant systems',
      'Connection pooling and query optimization',
      'Data consistency in distributed systems',
      'Backup and recovery procedures',
      'Transaction safety and ACID principles',
      'Database migrations and versioning',
    ],
    interviewTest: 'How would you design a schema and migration strategy for cost tracking across multiple services?',
    tone: 'cyan',
  },
  {
    category: 'Async & Worker Patterns',
    points: [
      'Redis Streams for event-driven architecture',
      'Celery and background job queues',
      'Docker Compose for local database, cache, and observability stacks',
      'GitHub Actions workflows for CI/CD and automated deploys',
      'Environment variable management and secrets rotation',
      'Health checks and circuit breakers',
      'Workers, retries, and failure recovery patterns',
    ],
    interviewTest: 'Design an async worker system with retries, idempotency, and dead letter handling.',
    tone: 'amber',
  },
  {
    category: 'Data & Security',
    points: [
      'Credential encryption and rotation with Fernet',
      'Secure configuration management',
      'Role-based access control design',
      'Audit logging and compliance patterns',
      'Secret rotation and key management',
      'OAuth 2.0 flows for third-party integrations',
      'Webhook handling and retry logic',
    ],
    interviewTest: 'How would you design credential storage for integrating with multiple third-party APIs?',
    tone: 'rose',
  },
  {
    category: 'Advanced Salesforce Patterns',
    points: [
      'Apex trigger patterns: before/after and bulk-safe design',
      'Batch Apex for large data volumes',
      'Scheduled actions and time-based workflows',
      'Custom REST APIs in Apex',
      'Governor limit optimization',
      'Platform events and middleware for reliable data sync',
      'Custom metadata and integration configuration patterns',
    ],
    interviewTest: 'How would you design a bulk-safe Salesforce integration that respects governor limits?',
    tone: 'cyan',
  },
  {
    category: 'Agentforce & Service Cloud Automation',
    points: [
      'Agentforce prompt optimization',
      'Action framework patterns for Agentforce agents',
      'Salesforce Einstein copilot integration',
      'Knowledge article linking to agents',
      'Omnichannel routing rules',
      'Service workflow automation',
      'Case intelligence, escalation, and Customer 360 agent context',
    ],
    interviewTest: 'Design an Agentforce service workflow that routes cases and uses knowledge context safely.',
    tone: 'violet',
  },
  {
    category: 'Technical Writing & Playbooks',
    points: [
      'Architectural decision records',
      'RAG pipeline setup guides',
      'Troubleshooting playbooks for merge conflicts and observability debugging',
      'API documentation with examples',
      'Knowledge base articles for internal teams',
      'Technical blogging and public speaking topic planning',
      'Technical communication for non-technical stakeholders',
    ],
    interviewTest: 'How would you document a RAG pipeline so another engineer can debug it in production?',
    tone: 'emerald',
  },
  {
    category: 'Problem-Solving & Production Debugging',
    points: [
      'RAG quality diagnosis across retrieval, ranking, and generation',
      'Production incident response using logs and traces',
      'Performance profiling and bottleneck identification',
      'Debugging distributed systems with observability',
      'Version control conflict resolution and team workflow debugging',
      'Root cause analysis methodology',
      'Postmortems and corrective action planning',
    ],
    interviewTest: "Walk me through how you'd debug a slow API endpoint or low-quality RAG response.",
    tone: 'amber',
  },
  {
    category: 'Mentoring & Leadership',
    points: [
      'Mentored 4 developers on RAG architecture, API design, and production debugging',
      'Led code reviews with architectural feedback on LLM systems',
      'Coordinated 30+ Theatre Club members and event logistics',
      'Cross-functional collaboration with product, data science, and ops teams',
      'Explained complex AI/backend systems to non-technical stakeholders',
    ],
    interviewTest: 'How do you mentor a developer through a production debugging or architecture problem?',
    tone: 'accent',
  },
  {
    category: 'Quantifiable Impact',
    points: [
      '1000+ users across team-delivered AI workflows',
      'Shipped 7+ API endpoints for cost aggregation and analytics',
      'Reduced RAG retrieval latency by about 40% via reranking optimization',
      'Achieved 95%+ retrieval accuracy on domain queries with RAGAS evals',
      'Diagnosed and resolved 10+ production incidents using logs and traces',
    ],
    interviewTest: 'Which engineering metrics prove that your AI/backend work improved production outcomes?',
    tone: 'rose',
  },
  {
    category: 'FinOps & Enterprise Automation',
    points: [
      'Cost attribution across LLM APIs, cloud platforms, and SaaS tools',
      'Budget forecasting and anomaly detection patterns',
      'Reserved capacity planning vs on-demand cost-benefit',
      'Organizational cost governance and chargeback models',
      'Business process mapping and workflow design',
      'Service automation, case routing, and integration middleware patterns',
      'Change management for process automation',
    ],
    interviewTest: 'How would you design a cost governance workflow for AI and cloud usage across teams?',
    tone: 'cyan',
  },
  {
    category: 'Tooling, Testing & Data Tools',
    points: [
      'Postman for API testing and CLI workflows with git, docker, and grep',
      'Pandas, NumPy, SciPy, and OpenPyXL for data processing and Excel automation',
      'Unit tests, integration tests, mock/stub patterns, and pytest',
      'GitHub Actions, automated testing, and deployment pipelines',
      'VS Code extension workflows and developer tooling',
      'GitHub discussions, Stack Overflow answers, and open-source contribution patterns',
    ],
    interviewTest: 'How would you set up testing and developer tooling around a backend API project?',
    tone: 'emerald',
  },
]

export const SALESFORCE_FOCUS: RangeItem[] = [
  {
    title: 'Proven through TAPESTRY, BOILERJUICE, and Agentforce work',
    detail:
      'Service Cloud administration, Apex development, LWC, Flows, SOQL analysis, Agentforce, Einstein Bots, Prompt Builder, REST integrations, reports, dashboards, and service workflows.',
    tags: ['Service Cloud', 'Apex', 'LWC', 'Flows', 'Agentforce', 'Prompt Builder'],
  },
  {
    title: 'Salesforce patterns I can discuss',
    detail:
      'Best practices, multi-cloud solution thinking, case management, Omni-Channel routing, service automation, Batch Apex, scheduled jobs, custom metadata, and platform events.',
    tags: ['Omni-Channel', 'Case Management', 'Batch Apex', 'Platform Events'],
  },
  {
    title: 'Agentforce and AI Cloud patterns',
    detail:
      'Agentforce prompt optimization, action framework design, Einstein copilot integration, knowledge article linking, and Customer 360 context for agents.',
    tags: ['Agentforce', 'Einstein Bots', 'Knowledge Articles', 'Customer 360'],
  },
]

export const AI_BACKEND_RANGE: RangeItem[] = [
  {
    title: 'Salesforce AI integration',
    detail:
      'Agentforce, Einstein, Prompt Builder, and AI-assisted service processes backed by Visionet project exposure.',
    tags: ['Agentforce', 'Einstein Bots', 'Prompt Builder'],
  },
  {
    title: 'Backend API and infrastructure range',
    detail:
      'API design, integrations, logging, deployment thinking, RAG patterns, LLM integration, and data quality evaluation.',
    tags: ['REST APIs', 'Observability', 'RAG', 'LLM Evaluation'],
  },
  {
    title: 'Cloud cost and FinOps thinking',
    detail:
      'Cost attribution across LLM APIs, cloud platforms, SaaS tools, budget forecasting, anomaly detection, and approval workflows.',
    tags: ['AWS', 'Cost Tracking', 'FinOps', 'Approval Workflows'],
  },
]

export const PROOF_POINTS: ProofPoint[] = [
  {
    label: 'Production reach',
    value: '1000+',
    detail: 'enterprise users on team-delivered AI and automation workflows I contributed to',
  },
  {
    label: 'Automation impact',
    value: 'Up to 70%',
    detail: 'effort reduction in targeted automation workflows I helped improve',
  },
  {
    label: 'Team lift',
    value: '4',
    detail: 'developers mentored while contributing to architecture and issue resolution',
  },
  {
    label: 'NLP dataset',
    value: '6000+',
    detail: 'samples used in fake-news classification pipeline',
  },
]

export const SIGNALS: SignalItem[] = [
  {
    label: 'Product Instinct',
    title: 'I look for the workflow pain first',
    detail:
      'Before picking a model or framework, I try to understand where people are losing time, context, or confidence.',
    tags: ['Discovery', 'Workflow Mapping', 'Automation Fit'],
    tone: 'amber',
  },
  {
    label: 'Engineering Taste',
    title: 'I like reliability under the AI layer',
    detail:
      'AI is visible. Auth, latency, logs, retrieval quality, error states, and maintenance make it usable.',
    tags: ['APIs', 'Observability', 'Fallbacks'],
    tone: 'emerald',
  },
  {
    label: 'Communication',
    title: 'I can explain messy systems clearly',
    detail:
      'Theatre leadership and mentoring helped me get better at breaking work down, aligning people, and keeping momentum.',
    tags: ['Mentoring', 'Docs', 'Teamwork'],
    tone: 'rose',
  },
]

export const EDUCATION: EducationItem[] = [
  {
    school: 'Presidency University',
    degree: 'Bachelor of Technology in Computer Science and Engineering (Data Science)',
    period: '2020 - 2024',
    location: 'India',
    imageUrl: assetUrl('assets/graduation-2024.jpeg'),
    coursework: ['Data Structures', 'Algorithms', 'Databases', 'Machine Learning'],
    activities: ['Theatre Club Coordinator', 'Led 30+ members', 'Organized multiple events'],
  },
]

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: 'Intent Classification Chatbot: Creating a Real-Time Conversational Agent with Deep Learning and Natural Language Processing',
    journal: 'International Research Journal of Modernization in Engineering Technology and Science (IRJMETS)',
    published: '20 Jan 2024',
    doi: '10.56726/IRJMETS48292',
    doiUrl: 'https://www.doi.org/10.56726/IRJMETS48292',
    authors: ['Srinidhi', 'Goutham Reddy S', 'Swain Ekka', 'Yogith P D', 'Harishkumar K.S'],
    authorListingNote: 'IRJMETS listing uses “Goutam Reddy S”.',
    summary:
      'Team publication on a real-time conversational agent using deep learning and NLP, focused on intent classification, chatbot methodology, agricultural support, and scalable knowledge access.',
    tags: ['Deep Learning', 'NLP', 'Intent Classification', 'Chatbot', 'Agriculture AI', 'Agile Methodology'],
  },
]

export const QUICK_FACTS: QuickFact[] = [
  { label: 'Education', value: 'B.Tech CSE (Data Science), Presidency University · 2020–2024' },
  { label: 'Publication', value: 'IRJMETS · Intent classification chatbot · Jan 2024', href: '#publications' },
  { label: 'Trailhead', value: '102 badges · Agentblazer Champion 2025', href: PERSONAL.trailblazer },
  { label: 'GitHub', value: 'Open-source wellness support chatbot', href: PERSONAL.github },
]

export const PERSONA_TRAITS: PersonaTrait[] = [
  {
    label: 'Growth',
    description: 'Always collecting sharper mental models, better tools, and tiny lessons from every build.',
  },
  {
    label: 'Focus',
    description: 'Retrieval quality, backend reliability, agent behavior, and the operational parts that keep demos alive.',
  },
  {
    label: 'Craft',
    description: 'Interfaces that feel clean, services that can be debugged, and systems that do not panic under load.',
  },
]

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { label: 'Spark' },
  { label: 'Sketch' },
  { label: 'AI Help' },
  { label: 'Code' },
  { label: 'Break' },
  { label: 'Fix' },
  { label: 'Ship' },
]

export const CAPABILITIES: CapabilityItem[] = [
  {
    label: '01 / AI Systems',
    title: 'RAG, agents, and evaluation loops',
    description:
      'Design retrieval pipelines, agent orchestration, prompt flows, and evaluation loops that keep model behavior observable after launch.',
    proof: 'Hybrid retrieval, tool use, RAGAS/LangSmith evals, enterprise LLM workflow delivery',
    tags: ['RAG', 'LangChain', 'OpenAI', 'RAGAS', 'LangSmith'],
    accent: 'cyan',
  },
  {
    label: '02 / Salesforce',
    title: 'Agentforce, Service Cloud, Flow, LWC, and automation',
    description:
      'Build inside Salesforce with Apex, LWC, Flow, Service Cloud, Agentforce, Prompt Builder, Omni-Channel, and external API integrations.',
    proof: '102 Trailhead badges, 4 superbadges, Agentforce and service workflow builds',
    tags: ['Agentforce', 'Service Cloud', 'Apex', 'LWC', 'Flow'],
    accent: 'accent',
  },
  {
    label: '03 / Backend',
    title: 'APIs, async services, and reliable glue',
    description:
      'Ship async APIs, database-backed services, auth, logging, and deployment-ready glue between AI layers and business systems.',
    proof: 'FastAPI, REST integrations, MongoDB/MySQL data layers, Docker, AWS delivery',
    tags: ['FastAPI', 'REST', 'MongoDB', 'MySQL', 'Docker'],
    accent: 'emerald',
  },
]

export const STATS: StatItem[] = [
  { value: '2', suffix: '+', label: 'Years Experience', detail: 'Full-time and internship engineering work' },
  {
    value: '1000',
    suffix: '+',
    label: 'Enterprise Users',
    detail: 'Contributed to team workflows used by enterprise users',
  },
  {
    value: 'Up to 70',
    suffix: '%',
    label: 'Effort Reduction',
    detail: 'In targeted automation workflows I helped improve',
  },
  { value: '4', suffix: '', label: 'Superbadges', detail: 'Hands-on Salesforce scenario credentials' },
]

export const SKILLS: SkillGroup[] = [
  {
    category: 'LLM Architecture',
    skills: ['rag', 'langgraph', 'crewai', 'autogen', 'langchain', 'langsmith', 'ragas', 'prompt-engineering'],
  },
  {
    category: 'Vector Search',
    skills: ['chromadb', 'pinecone', 'weaviate', 'hybrid-search', 'reranking', 'semantic-caching', 'parent-child-indexing'],
  },
  {
    category: 'LLM Providers',
    skills: ['openai-api', 'anthropic-claude', 'grok', 'perplexity', 'huggingface', 'token-optimization', 'cost-tracking'],
  },
  {
    category: 'Backend / APIs',
    skills: ['python', 'fastapi', 'pydantic', 'rest-apis', 'rate-limiting', 'backoff', 'api-versioning'],
  },
  {
    category: 'Data / Persistence',
    skills: ['postgresql', 'sqlalchemy', 'alembic', 'mongodb', 'mysql', 'redis-streams', 'decimal-arithmetic'],
  },
  {
    category: 'Observability / DevOps',
    skills: ['docker', 'docker-compose', 'kubernetes', 'loki', 'promtail', 'grafana', 'opentelemetry'],
  },
  {
    category: 'Security',
    skills: ['fernet', 'secure-config', 'rbac', 'audit-logging', 'oauth2', 'secrets-rotation'],
  },
  {
    category: 'Salesforce',
    skills: ['agentforce', 'apex', 'batch-apex', 'lwc', 'flow-builder', 'prompt-builder', 'service-cloud', 'platform-events'],
  },
  {
    category: 'Testing / Data Tools',
    skills: ['pytest', 'pandas', 'numpy', 'scipy', 'openpyxl', 'postman', 'github-actions'],
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Visionet Systems Inc.',
    role: 'Software Engineer, AI + Salesforce',
    type: 'Full-time',
    period: 'Jun 2024 - Present',
    location: 'Bengaluru, India - On-site',
    current: true,
    bullets: [
      'Contributed to LLM-powered and agentic AI systems for enterprise workflows used by 1000+ users (team-delivered)',
      'Helped reduce manual effort and improve response time by up to 70% in targeted automation workflows',
      'Built observability stack with Loki and Grafana for production logging, tracing, and diagnostics',
      'Diagnosed RAG pipeline issues around vector scoring normalization, reranking thresholds, and retrieval quality',
      'Shipped RAGAS evaluation loops for retrieval quality measurement in production RAG workflows',
      'Architected a multi-agent spike comparing LangGraph, CrewAI, and AutoGen across cost and capability',
      'Designed AWS cost optimization agent patterns with cost aggregation, analytics APIs, and approval workflows',
      'Built conversational AI for query handling, context capture, and intelligent routing',
      'Designed RAG-based pipelines with multi-model evaluation using OpenAI, Grok, and Perplexity',
      'Integrated REST APIs and built backend systems for automation, decision support, and platform modernization',
      'Develop Salesforce applications with Apex, LWC, Flow, Service Cloud, Agentforce, and Prompt Builder-oriented work',
      'Mentored 4 developers on RAG architecture, API design, production debugging, and code review',
    ],
    tags: ['LLM', 'RAG', 'RAGAS', 'LangGraph', 'Loki', 'Grafana', 'FastAPI', 'Salesforce', 'Agentforce'],
  },
  {
    company: 'Visionet Systems Inc.',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Feb 2024 - May 2024',
    location: 'Bengaluru, India - On-site',
    current: false,
    bullets: [
      'Built workflow automation solutions reducing manual effort by 40%',
      'Developed backend integrations and improved performance for systems serving 100+ users',
      'Gained hands-on experience with Apex, LWC, Agentforce, and enterprise Salesforce development practices',
    ],
    tags: ['Apex', 'LWC', 'Agentforce', 'Automation'],
  },
  {
    company: 'InternPe',
    role: 'Python Developer Intern',
    type: 'Internship',
    period: 'Sep 2023 - Oct 2023',
    location: 'Remote',
    current: false,
    bullets: [
      'Developed Python-based solutions focused on optimization, debugging, and performance improvement',
      'Collaborated in a remote environment on real-world programming problems',
    ],
    tags: ['Python', 'Debugging', 'Optimization'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'TAPESTRY - Service Cloud Support & Administration',
    description:
      'Large-scale Salesforce Service Cloud support and administration for enterprise customer service operations at Visionet Systems.',
    icon: 'TS',
    category: 'Salesforce Service',
    accent: 'cyan',
    tags: ['Service Cloud', 'SOQL', 'Email-to-Case', 'Omni-Channel'],
    highlights: [
      'Managed Salesforce user access, profiles, permission sets, queues, and security configurations',
      'Investigated production incidents within SLA timelines with root cause analysis',
      'Supported Case Management, Email-to-Case, Omni-Channel routing, service workflows, reports, and dashboards',
    ],
    outcome: 'Maintained high service levels with zero client escalations while supporting enterprise service operations.',
    architecture: ['Access setup', 'Case workflow', 'SOQL analysis', 'SLA resolution'],
    proofStatus: 'Resume-backed',
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Project on resume',
    featured: true,
  },
  {
    title: 'BOILERJUICE - Salesforce Development & Enhancement',
    description:
      'Salesforce development and enhancement work for business process automation, platform improvements, testing, and release support.',
    icon: 'BJ',
    category: 'Salesforce Dev',
    accent: 'violet',
    tags: ['Apex', 'LWC', 'Flow', 'SOQL'],
    highlights: [
      'Developed and enhanced Apex Classes, Triggers, and Lightning Web Components',
      'Implemented Salesforce Flows and automation solutions for operational efficiency',
      'Prepared solution design documentation and supported deployment/post-release validation',
    ],
    outcome: 'Improved Salesforce platform workflows through code quality, automation patterns, and testing methodology.',
    architecture: ['Requirement', 'Apex/LWC', 'Testing', 'Deployment'],
    proofStatus: 'Resume-backed',
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Project on resume',
    featured: true,
  },
  {
    title: 'Internal AI Capabilities & Agentforce Solutions',
    description:
      'Internal Salesforce AI initiatives focused on Agentforce, Prompt Builder, Einstein Bots, and intelligent service engagement.',
    icon: 'AF',
    category: 'Salesforce AI',
    accent: 'rose',
    tags: ['Agentforce', 'Prompt Builder', 'Einstein Bots', 'Service Cloud'],
    highlights: [
      'Designed Agentforce use cases for customer service workflow automation',
      'Configured Prompt Builder for AI-driven response generation',
      'Developed Einstein Bot experiences and AI-powered workflows for case routing and resolution efficiency',
    ],
    outcome: 'Helped shape Agentforce POCs and demos that connected Salesforce AI capabilities to existing service processes.',
    architecture: ['Use case', 'Prompt Builder', 'Einstein Bot', 'Service workflow'],
    proofStatus: 'Resume-backed',
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Project on resume',
    featured: false,
  },
  {
    title: 'Net Zero Cloud Demo - Sustainability Solution',
    description:
      'Salesforce Net Zero Cloud demonstration solution designed for internal innovation, sustainability tracking, and stakeholder presentation.',
    icon: 'NZ',
    category: 'Salesforce Cloud',
    accent: 'emerald',
    tags: ['Net Zero Cloud', 'Reports & Dashboards', 'Data Modeling', 'Salesforce'],
    highlights: [
      'Configured Net Zero Cloud for sustainability tracking and reporting',
      'Designed data models and dashboards for environmental metrics',
      'Presented the solution to internal stakeholders and received recognition for innovation and technical execution',
    ],
    outcome: 'Delivered a Salesforce sustainability demo that showed solution design thinking and stakeholder communication.',
    architecture: ['Data model', 'Net Zero Cloud', 'Dashboards', 'Presentation'],
    proofStatus: 'Resume-backed',
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Project on resume',
    featured: false,
  },
  {
    title: 'AI Wellness Support Chatbot',
    description:
      'Support-style conversational demo using LLaMA through Ollama, RAG retrieval, document chunking, and MongoDB-backed memory for multi-turn context.',
    icon: 'AI',
    category: 'AI Systems',
    accent: 'violet',
    tags: ['LLaMA', 'Ollama', 'RAG', 'MongoDB'],
    highlights: [
      'Built conversational AI using LLaMA (Ollama) with a RAG pipeline for context-aware responses',
      'Implemented document chunking, retrieval pipelines, and persistent memory with MongoDB',
    ],
    outcome: 'Built a retrieval-backed support workflow with local model orchestration and persistent memory.',
    architecture: ['User prompt', 'Retriever', 'LLaMA/Ollama', 'MongoDB memory'],
    proofStatus: 'Open source',
    disclaimer: 'Support-style demo only. Not medical or mental-health advice.',
    githubUrl: 'https://github.com/gouthamgovardhan/ai-wellness-support-chatbot',
    featured: true,
  },
  {
    title: 'AI Service Recommendation System',
    description:
      'Enterprise recommendation workflow using OpenAI APIs to interpret user queries, recommend services, and reduce manual lookup in decision-heavy processes.',
    icon: 'SR',
    category: 'Enterprise AI',
    accent: 'cyan',
    tags: ['OpenAI API', 'REST APIs', 'Python', 'Automation'],
    highlights: [
      'Built an AI system using OpenAI APIs to recommend services based on user queries',
      'Automated decision workflows to reduce manual lookup effort in service selection',
    ],
    outcome: 'Mapped vague user intent to service suggestions with backend decision logic and API orchestration.',
    architecture: ['Query intake', 'Intent parsing', 'Recommendation logic', 'API response'],
    proofStatus: 'Resume-backed',
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Architecture on resume',
    featured: true,
  },
  {
    title: 'Fake News Detection System',
    description:
      'NLP classification pipeline using an LSTM model on 6000+ samples with preprocessing, feature engineering, training, and inference.',
    icon: 'NL',
    category: 'Machine Learning',
    accent: 'emerald',
    tags: ['NLP', 'LSTM', 'Python', 'Classification'],
    highlights: [
      'Trained an LSTM classification model on a dataset of 6000+ samples',
      'Implemented preprocessing, feature engineering, and an end-to-end ML pipeline',
    ],
    outcome: 'Delivered an end-to-end text classification pipeline from preprocessing through model inference.',
    architecture: ['Dataset', 'Preprocessing', 'LSTM model', 'Classification'],
    proofStatus: 'Resume-backed',
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Architecture on resume',
    featured: false,
  },
]
