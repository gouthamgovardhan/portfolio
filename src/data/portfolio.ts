import { FaGithub, FaLinkedin, FaSalesforce } from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { assetUrl } from '../lib/assetUrl'
import type { LiveConsoleConfig, ShowcaseVariant } from '../types/LiveConsole'

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
  showcase?: ShowcaseVariant
  liveConsoleConfig?: LiveConsoleConfig
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
  tagline: 'AI Engineer and systems builder',
  eyebrow: 'AI Engineer · Salesforce Consultant · Bengaluru',
  heroHeadline: 'I build complete AI products, from intelligent workflows to reliable production systems.',
  heroDescription:
    'Salesforce consultant with broader hands-on work across LLMs, RAG, APIs, data, integrations, observability, and deployment.',
  bio: [
    'I am an AI systems builder currently working as a Salesforce Consultant in Bengaluru.',
    'My broader engineering work spans LLM applications, RAG, backend APIs, databases, integrations, observability, and deployment.',
  ],
  highlightPoints: [
    'Develop LLM, RAG, and agentic AI workflows',
    'Build Python and FastAPI backend services',
    'Work across APIs, databases, caching, and integrations',
    'Improve authentication, reliability, logging, and diagnostics',
    'Build Salesforce solutions with Apex, LWC, Flow, and Agentforce',
    'Contribute to collaborative architecture, reviews, and documentation',
  ],
  location: 'Bengaluru, Karnataka, India',
  phone: '+91 9741341708',
  github: 'https://github.com/gouthamgovardhan',
  linkedin: 'https://linkedin.com/in/goutham-govardhan',
  trailblazer: 'https://www.salesforce.com/trailblazer/gouthamgovardhan',
  resumeUrl: assetUrl('assets/resume.pdf'),
  profileImageUrl: assetUrl('assets/profile.jpg'),
  officeImageUrl: assetUrl('assets/profile-office.jpeg'),
  formalImageUrl: assetUrl('assets/profile-formal.jpg'),
  currentRole: 'Salesforce Consultant · AI Systems Builder',
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
  'LLM',
  'Prompt Engineering',
  'Python',
  'FastAPI',
  'LangChain',
  'REST APIs',
]

export const HERO_TERMINAL: TerminalLine[] = [
  { label: 'focus', value: 'end-to-end AI systems' },
  { label: 'ai', value: 'RAG + agentic workflows' },
  { label: 'platform', value: 'Salesforce automation' },
  { label: 'backend', value: 'APIs + data + integrations' },
]

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Roles', href: '#roles', id: 'roles' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: 'GitHub', href: PERSONAL.github, icon: FaGithub },
  { label: 'LinkedIn', href: PERSONAL.linkedin, icon: FaLinkedin },
  { label: 'Trailblazer', href: PERSONAL.trailblazer, icon: FaSalesforce },
]

export const CONTACT_LINKS: ContactLinkItem[] = [
  { label: 'LinkedIn', value: 'goutham-govardhan', href: PERSONAL.linkedin, icon: FaLinkedin },
  { label: 'GitHub', value: 'gouthamgovardhan', href: PERSONAL.github, icon: FaGithub },
  { label: 'Trailblazer', value: 'gouthamgovardhan', href: PERSONAL.trailblazer, icon: FaSalesforce },
]

export const SECTION_TEXT = {
  about: {
    label: 'Builder Profile',
    title: 'Builder profile.',
    subtitle: 'A quick view of how I think, build, and work.',
  },
  roles: {
    label: 'Role Fit',
    title: 'Three ways I can contribute.',
    subtitle: 'Choose a role to see the full fit and supporting proof.',
  },
  skills: {
    label: 'Skills - 02',
    title: 'Core stack.',
    subtitle: 'Open a category only when you want the full toolset.',
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
    label: 'Selected Work',
    title: 'What I worked on.',
    subtitle:
      'A privacy-safe view of my hands-on contributions across AI, Salesforce, backend automation, and machine learning.',
  },
  publications: {
    label: 'Published Work',
    title: 'Published work.',
    subtitle: 'Open the paper for its summary, authors, topics, and DOI.',
  },
  salesforce: {
    label: 'Trailhead Credentials',
    title: 'Salesforce credentials, verified.',
    subtitle: 'Public Trailblazer proof with expandable credential details.',
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
      'Send a focused note through the form, or use the public profiles for more context.',
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
  workflow: 'Areas covered',
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
    headline: 'LLMs, RAG, agents, and production automation.',
    pitch: 'Best fit for teams building AI features that must work beyond the demo.',
    proof: 'Collaborative AI platform work across LLM workflows, APIs, data, and production readiness',
    stack: ['RAG', 'LangChain', 'OpenAI', 'Python'],
    tone: 'violet',
  },
  {
    id: 'backend-ai-engineer',
    role: 'Backend AI Engineer',
    headline: 'Scalable APIs and automation behind AI products.',
    pitch: 'Best fit for AI products that need dependable integrations and backend workflows.',
    proof: 'REST integrations, decision automation, context capture, and intelligent routing',
    stack: ['Python', 'FastAPI', 'REST APIs', 'MongoDB'],
    tone: 'cyan',
  },
  {
    id: 'salesforce-ai-engineer',
    role: 'Salesforce AI Engineer',
    headline: 'Agentforce, prompts, automation, and CRM workflows.',
    pitch: 'Best fit where AI capabilities need to connect with Salesforce workflows.',
    proof: 'Agentforce practice, Prompt Builder, Apex, LWC, Flow, and Service Cloud',
    stack: ['Agentforce', 'Prompt Builder', 'Apex', 'Flow'],
    tone: 'accent',
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
      'Contributed to code reviews and architecture discussions for AI and backend systems',
      'Shared debugging context and implementation guidance with engineering teammates',
      'Coordinated 30+ Theatre Club members and event logistics',
      'Cross-functional collaboration with product, data science, and ops teams',
      'Explained complex AI/backend systems to non-technical stakeholders',
    ],
    interviewTest: 'How do you mentor a developer through a production debugging or architecture problem?',
    tone: 'accent',
  },
  {
    category: 'Delivery Evidence',
    points: [
      'Built and debugged APIs that support AI and automation workflows',
      'Worked across authentication, databases, caching, and integrations',
      'Used retrieval evaluation and diagnostics to improve RAG behavior',
      'Added logging and traces to investigate production issues',
      'Documented architecture and operational workflows for team delivery',
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
    title: 'Applied through Salesforce delivery and Agentforce work',
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
      'Agentforce, Einstein, Prompt Builder, and AI-assisted service workflows from Salesforce consulting practice.',
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

export const STATS: StatItem[] = [
  { value: '2', suffix: '+', label: 'Years Experience', detail: 'Full-time and internship engineering work' },
  { value: '102', suffix: '', label: 'Trailhead Badges', detail: 'Public Salesforce learning across AI, service, and platform topics' },
  { value: '4', suffix: '', label: 'Superbadges', detail: 'Hands-on Salesforce scenario credentials' },
  { value: '1', suffix: '', label: 'Publication', detail: 'Peer-reviewed NLP and intent-classification research' },
]

export const SKILLS: SkillGroup[] = [
  {
    category: 'AI / LLM Systems',
    skills: ['rag', 'agents', 'langchain', 'openai-api', 'prompt-engineering'],
  },
  {
    category: 'Evaluation',
    skills: ['LLM Evaluation', 'Eval Loops', 'OpenAI', 'Grok', 'Perplexity'],
  },
  {
    category: 'Backend',
    skills: ['python', 'fastapi', 'flask', 'pydantic', 'rest-apis'],
  },
  {
    category: 'Data / ML',
    skills: ['Machine Learning', 'NLP', 'pandas', 'numpy', 'mongodb'],
  },
  {
    category: 'Salesforce',
    skills: ['agentforce', 'apex', 'lwc', 'flow-builder', 'prompt-builder', 'service-cloud'],
  },
  {
    category: 'Delivery',
    skills: ['docker', 'github-actions', 'postman', 'debugging', 'mentoring'],
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Visionet Systems Inc.',
    role: 'Salesforce Consultant',
    type: 'Full-time',
    period: 'Jun 2024 - Present',
    location: 'Bengaluru, India - Hybrid',
    current: true,
    bullets: [
      'Design and develop Salesforce solutions using Apex, Lightning Web Components, and Flow',
      'Build workflow automation around business and operational requirements',
      'Work on API integrations between Salesforce and external systems',
      'Explore Agentforce, Prompt Builder, and AI-assisted workflows',
      'Troubleshoot application issues and support testing and production releases',
      'Translate requirements into maintainable platform solutions with engineering teams',
    ],
    tags: ['Salesforce', 'Apex', 'LWC', 'Flow', 'Agentforce', 'REST APIs'],
  },
  {
    company: 'Visionet Systems Inc.',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Feb 2024 - Jul 2024',
    location: 'Bengaluru, India - On-site',
    current: false,
    bullets: [
      'Developed Salesforce functionality using Apex, LWC, and platform automation',
      'Supported backend integrations, application testing, debugging, and reliability improvements',
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
      'Developed Python applications with a focus on clean, reusable code',
      'Improved reliability through debugging, testing, error handling, and documentation',
    ],
    tags: ['Python', 'Debugging', 'Optimization'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'End-to-End AI Platform',
    description:
      'My contribution to a collaborative product build spans AI workflows, backend services, integrations, reliability, and production readiness.',
    icon: 'EP',
    category: 'Collaborative Build',
    accent: 'cyan',
    tags: ['LLM Systems', 'FastAPI', 'REST APIs', 'Docker'],
    highlights: [
      'Build and debug backend services, APIs, and AI workflows',
      'Work across databases, caching, authentication, and integrations',
      'Improve logging, monitoring, deployment workflows, and documentation',
    ],
    outcome: 'Contribute across the complete platform rather than only the AI or backend layer.',
    architecture: ['AI workflows', 'Backend APIs', 'Data and integrations', 'Reliability and delivery'],
    proofStatus: 'Collaborative project',
    disclaimer: 'Built collaboratively. Organization, client, and internal product details are intentionally omitted.',
    featured: true,
  },
  {
    title: 'Salesforce Consulting & Automation',
    description:
      'My professional work covers Salesforce development, workflow automation, integrations, troubleshooting, and release support.',
    icon: 'SF',
    category: 'Professional Work',
    accent: 'violet',
    tags: ['Apex', 'LWC', 'Flow', 'Agentforce'],
    highlights: [
      'Developed Apex classes, triggers, and Lightning Web Components',
      'Built Flows and API integrations for business-process automation',
      'Worked with Agentforce, Prompt Builder, testing, debugging, and releases',
    ],
    outcome: 'Deliver maintainable Salesforce solutions from requirements through production support.',
    architecture: ['Requirements', 'Platform development', 'Automation and integrations', 'Testing and release'],
    proofStatus: 'Professional experience',
    disclaimer: 'Client, company, and internal project details are intentionally omitted.',
    featured: true,
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
    showcase: 'wellness',
    liveConsoleConfig: {
      variant: 'wellness',
      title: 'Wellness Support RAG Console',
      status: 'processing',
      timeline: 'local model + memory',
      hotspots: [
        {
          id: 'wellness-user-prompt',
          label: 'User Prompt',
          position: { x: 8, y: 22 },
          targetPanel: 'prompt',
          inspectorContent: {
            title: 'Support Prompt Intake',
            explanation:
              'The user question is accepted as a support request, not a diagnosis. The system keeps the wording simple, tracks risk level, and prepares the message for grounded retrieval.',
            signal: 'risk: low, mode: support',
            stackTags: ['React', 'Prompt Design', 'Guardrails'],
          },
        },
        {
          id: 'wellness-rag-retrieval',
          label: 'RAG Retrieval',
          position: { x: 25, y: 22 },
          targetPanel: 'retrieval',
          inspectorContent: {
            title: 'Grounded Context Retrieval',
            explanation:
              'Relevant support resources are retrieved before generation so the assistant answers from known material instead of guessing from the model alone.',
            signal: 'chunks: 3, best match: 0.91',
            stackTags: ['RAG', 'Embeddings', 'Document Chunking'],
          },
        },
        {
          id: 'wellness-ollama-generation',
          label: 'Ollama Generation',
          position: { x: 42, y: 22 },
          targetPanel: 'generation',
          inspectorContent: {
            title: 'Local Model Generation',
            explanation:
              'Ollama serves a local LLaMA model that generates the response using the retrieved context, latest user message, and support-safe instructions.',
            signal: 'tokens: 148, model: local',
            stackTags: ['LLaMA', 'Ollama', 'Streaming Output'],
          },
        },
        {
          id: 'wellness-memory',
          label: 'MongoDB Memory',
          position: { x: 59, y: 22 },
          targetPanel: 'memory',
          inspectorContent: {
            title: 'Conversation Memory',
            explanation:
              'MongoDB stores lightweight conversation context so follow-up turns can stay coherent without asking the user to repeat everything.',
            signal: 'memory entries: 34',
            stackTags: ['MongoDB', 'Persistence', 'Conversation State'],
          },
        },
        {
          id: 'wellness-guardrails',
          label: 'Safety Guardrails',
          position: { x: 76, y: 22 },
          targetPanel: 'guardrails',
          inspectorContent: {
            title: 'Safety and Scope Checks',
            explanation:
              'The workflow checks that the answer stays support-oriented, avoids medical claims, and keeps the user pointed toward appropriate help when needed.',
            signal: 'checks passed: 3/3',
            stackTags: ['Safety Checks', 'Prompt Policy', 'Validation'],
          },
        },
        {
          id: 'wellness-response',
          label: 'Response Preview',
          position: { x: 91, y: 22 },
          targetPanel: 'response',
          inspectorContent: {
            title: 'Calm Response Output',
            explanation:
              'The final answer is concise, grounded, and careful about scope. It gives practical support language without presenting itself as medical advice.',
            signal: 'tone: calm, scope: support only',
            stackTags: ['Response Design', 'RAG', 'UX Writing'],
          },
        },
      ],
      panels: [
        {
          id: 'prompt',
          name: 'User Prompt',
          animationType: 'typing',
          content: 'User: "I have been feeling anxious at work lately."',
        },
        {
          id: 'retrieval',
          name: 'RAG Retrieval',
          animationType: 'flow',
          content: [
            { label: 'Resource 1', value: 'grounding.md' },
            { label: 'Resource 2', value: 'breathing.txt' },
            { label: 'Resource 3', value: 'boundaries.md' },
          ],
        },
        {
          id: 'generation',
          name: 'Ollama',
          animationType: 'typing',
          content: 'Generating calm response with local model context.',
        },
        {
          id: 'memory',
          name: 'MongoDB Memory',
          animationType: 'counter',
          content: [
            { label: 'Entries', value: 34 },
            { label: 'Tone', value: 'calm' },
            { label: 'Context', value: 'latest turn' },
          ],
        },
        {
          id: 'guardrails',
          name: 'Safety Checks',
          animationType: 'pulse',
          content: [
            { label: 'No diagnosis', value: 'pass' },
            { label: 'Grounded', value: 'pass' },
            { label: 'Safe tone', value: 'pass' },
          ],
        },
        {
          id: 'response',
          name: 'Response',
          animationType: 'typing',
          content: 'That sounds difficult. Try one small reset before the next task.',
        },
      ],
      metrics: [
        { label: 'Tokens Streamed', value: '148' },
        { label: 'Memory Entries', value: '34' },
        { label: 'Safety Checks', value: '3/3' },
        { label: 'Grounded Answer', value: 'yes' },
      ],
    },
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
    showcase: 'service',
    liveConsoleConfig: {
      variant: 'service',
      title: 'Service Recommendation Pipeline',
      status: 'active',
      timeline: '3 months',
      hotspots: [
        {
          id: 'customer-query',
          label: 'Customer Query',
          position: { x: 5, y: 20 },
          targetPanel: 'intake',
          inspectorContent: {
            title: 'Customer Query Intake',
            explanation: 'Raw user request is captured and normalized. Includes metadata like location, service tier, and historical context.',
            signal: 'tokens: 45',
            stackTags: ['FastAPI', 'Pydantic', 'Redis'],
          },
        },
        {
          id: 'intent-parser',
          label: 'Intent Parsing',
          position: { x: 25, y: 20 },
          targetPanel: 'intent',
          inspectorContent: {
            title: 'Intent & Entity Extraction',
            explanation: 'LLM extracts user intent and named entities. Uses few-shot prompting with domain-specific examples.',
            signal: 'intent: 0.94, entities: 3',
            stackTags: ['LangChain', 'OpenAI API', 'PostgreSQL'],
          },
        },
        {
          id: 'recommendation-engine',
          label: 'Recommendation Ranking',
          position: { x: 50, y: 20 },
          targetPanel: 'ranking',
          inspectorContent: {
            title: 'Service Ranking Engine',
            explanation: 'Scores services by relevance, user history, and availability. Uses hybrid retrieval with custom scoring.',
            signal: 'scored: 12 services, top: 3',
            stackTags: ['Pinecone', 'FAISS', 'NumPy'],
          },
        },
        {
          id: 'api-response',
          label: 'Backend Integration',
          position: { x: 75, y: 20 },
          targetPanel: 'api',
          inspectorContent: {
            title: 'Third-Party API Response',
            explanation: 'Calls external service APIs and aggregates responses. Handles retries, timeouts, and partial failures gracefully.',
            signal: 'latency: 240ms, status: 200',
            stackTags: ['aiohttp', 'Circuit Breaker', 'Observability'],
          },
        },
        {
          id: 'agent-action',
          label: 'Agent Action',
          position: { x: 90, y: 20 },
          targetPanel: 'action',
          inspectorContent: {
            title: 'Recommended Action',
            explanation: 'Final agent decision on which service to present and what action to suggest. Includes confidence and reasoning.',
            signal: 'confidence: 0.89, action: schedule_call',
            stackTags: ['LangGraph', 'Tool Calling', 'Validation'],
          },
        },
      ],
      panels: [
        {
          id: 'intake',
          name: 'Customer Intake',
          animationType: 'typing',
          content: 'User: "I need urgent technical support for my API integration"',
        },
        {
          id: 'intent',
          name: 'Intent Parsing',
          animationType: 'gauge',
          content: [
            { label: 'Intent', value: 'technical_support' },
            { label: 'Urgency', value: 'high' },
            { label: 'Entities', value: 'API, integration' },
          ],
        },
        {
          id: 'ranking',
          name: 'Service Ranking',
          animationType: 'counter',
          content: [
            { label: '1. Premium Support', value: '0.94' },
            { label: '2. API Engineering', value: '0.87' },
            { label: '3. On-Call Dev', value: '0.76' },
          ],
        },
        {
          id: 'api',
          name: 'Backend Response',
          animationType: 'flow',
          content: '{ status: "ok", data: { slots: 2, eta: 5min } }',
        },
        {
          id: 'action',
          name: 'Agent Action',
          animationType: 'pulse',
          content: 'Recommended: Connect to Premium Support (Est. wait: 2 min)',
        },
      ],
      metrics: [
        { label: 'Confidence', value: '89%', unit: 'match' },
        { label: 'Latency', value: '240', unit: 'ms' },
        { label: 'Services Ranked', value: '12' },
        { label: 'Automation Ready', value: 'yes' },
      ],
    },
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
    showcase: 'fake-news',
    liveConsoleConfig: {
      variant: 'fake-news',
      title: 'Fake News Classification Console',
      status: 'active',
      timeline: '6000+ samples',
      hotspots: [
        {
          id: 'fake-news-article',
          label: 'Article Input',
          position: { x: 8, y: 22 },
          targetPanel: 'article',
          inspectorContent: {
            title: 'Article Intake',
            explanation:
              'A headline and short article snippet enter the pipeline. The system tracks basic shape signals like length, source cues, quoted claims, and article structure.',
            signal: 'words: 429, source cues: 4',
            stackTags: ['NLP', 'Python', 'Pandas'],
          },
        },
        {
          id: 'fake-news-preprocess',
          label: 'Preprocessing',
          position: { x: 28, y: 22 },
          targetPanel: 'preprocess',
          inspectorContent: {
            title: 'Preprocessing Stream',
            explanation:
              'Raw text is cleaned, normalized, and tokenized so the model receives consistent sequence input rather than noisy article formatting.',
            signal: 'tokens: 612, cleaned: true',
            stackTags: ['Tokenization', 'Text Cleaning', 'Feature Engineering'],
          },
        },
        {
          id: 'fake-news-lstm',
          label: 'LSTM Model',
          position: { x: 50, y: 22 },
          targetPanel: 'lstm',
          inspectorContent: {
            title: 'LSTM Sequence Model',
            explanation:
              'The LSTM reads tokens as a sequence, allowing the classifier to learn phrasing patterns and context across the article instead of isolated keywords only.',
            signal: 'hidden units: 128, sequence: 256',
            stackTags: ['LSTM', 'Deep Learning', 'Keras'],
          },
        },
        {
          id: 'fake-news-classification',
          label: 'Classification',
          position: { x: 70, y: 22 },
          targetPanel: 'classification',
          inspectorContent: {
            title: 'Classification Result',
            explanation:
              'The model output is converted into a readable credibility signal. The result is treated as a review aid, not an absolute truth.',
            signal: 'label: mixed, confidence: 82%',
            stackTags: ['Classification', 'Confidence Score', 'Review Signal'],
          },
        },
        {
          id: 'fake-news-metrics',
          label: 'Model Metrics',
          position: { x: 88, y: 22 },
          targetPanel: 'metrics',
          inspectorContent: {
            title: 'Model Metrics',
            explanation:
              'Accuracy and confusion-count style metrics keep the demo grounded in model evaluation rather than only showing the final label.',
            signal: 'accuracy: 93.6%, dataset: 6000+',
            stackTags: ['Evaluation', 'Metrics', 'Dataset'],
          },
        },
      ],
      panels: [
        {
          id: 'article',
          name: 'Article Input',
          animationType: 'typing',
          content: 'Breaking claim spreads across social feed.',
        },
        {
          id: 'preprocess',
          name: 'Preprocess',
          animationType: 'flow',
          content: [
            { label: 'Clean', value: 'lowercase' },
            { label: 'Tokenize', value: '612 tokens' },
            { label: 'Sequence', value: '256 length' },
          ],
        },
        {
          id: 'lstm',
          name: 'LSTM Model',
          animationType: 'pulse',
          content: [
            { label: 'Input', value: 'tokens' },
            { label: 'Hidden', value: 128 },
            { label: 'Output', value: 'signal' },
          ],
        },
        {
          id: 'classification',
          name: 'Classification',
          animationType: 'gauge',
          content: [
            { label: 'Label', value: 'mixed' },
            { label: 'Confidence', value: '82%' },
            { label: 'Action', value: 'review' },
          ],
        },
        {
          id: 'metrics',
          name: 'Metrics',
          animationType: 'counter',
          content: [
            { label: 'Accuracy', value: '93.6%' },
            { label: 'True Positive', value: 182 },
            { label: 'False Positive', value: 14 },
          ],
        },
      ],
      metrics: [
        { label: 'Accuracy', value: '93.6%' },
        { label: 'Word Count', value: '429' },
        { label: 'True Positive', value: 182 },
        { label: 'False Positive', value: 14 },
      ],
    },
    proofUrl: PERSONAL.resumeUrl,
    proofLinkLabel: 'Architecture on resume',
    featured: false,
  },
]
