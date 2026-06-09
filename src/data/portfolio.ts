import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import type { IconType } from 'react-icons'

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
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

export interface CertItem {
  name: string
  issuer: string
  icon: string
  year?: string
}

export interface StatItem {
  value: string
  suffix: string
  label: string
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

export interface BuildMode {
  label: string
  title: string
  description: string
  items: string[]
  tone: 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet'
}

export interface ProductPillar {
  label: string
  title: string
  description: string
  metric: string
  tone: 'cyan' | 'accent' | 'emerald' | 'amber' | 'rose' | 'violet'
}

export interface RoleFit {
  role: string
  pitch: string
  strengths: string[]
}

export interface ProofPoint {
  label: string
  value: string
  detail: string
}

export const PERSONAL = {
  name: 'Goutham Reddy S',
  shortName: 'GR',
  firstName: 'Goutham',
  lastName: 'Reddy',
  suffixName: 'S.',
  tagline: 'AI x Salesforce x Backend Engineer',
  eyebrow: 'Currently shipping at Visionet Systems',
  rolePrefix: 'I am building like a',
  heroDescription:
    'Bengaluru-based AI engineer turning RAG, agents, Salesforce automation, and backend APIs into usable production workflows.',
  roles: [
    'AI Systems Builder',
    'RAG + Agent Engineer',
    'Backend API Engineer',
    'Salesforce Automation Developer',
    'Production-Minded Builder',
  ],
  bio: [
    'I am a Computer Science Engineer from Bengaluru who builds AI systems that escape the notebook and survive real users. My core belief: Deploy beats Demo.',
    'At Visionet Systems, I work on LLM-powered and agentic AI systems for enterprise workflows, including RAG chat, context capture, intelligent routing, backend integrations, and automation that has served 1000+ users.',
    'My sweet spot is the bridge between product and plumbing: model behavior, retrieval quality, API design, Salesforce workflows, logs, latency, and the unglamorous details that make software feel reliable.',
  ],
  highlightPoints: [
    'RAG pipelines and hybrid retrieval',
    'Agentic AI with ReAct and Plan-Execute',
    'FastAPI async backend systems',
    'Salesforce LWC and Apex development',
    'Multi-model evaluation with RAGAS and LangSmith',
    'Docker, AWS, CI/CD observability',
  ],
  location: 'Bengaluru, Karnataka, India',
  email: 'gouthamgovardhan@hotmail.com',
  github: 'https://github.com/gouthamgovardhan',
  linkedin: 'https://linkedin.com/in/goutham-govardhan',
  resumeUrl: '/portfolio/assets/resume.pdf',
  currentRole: 'SDE @ Visionet Systems',
  openToHire: 'Open to Hire',
  locationEyebrow: 'Location - Hover to Explore',
  country: 'India',
  coordinates: '12.97°N 77.59°E',
  timezone: 'GMT+5:30',
  aboutQuote: '"I like AI that ships, logs, fails loudly, gets fixed, and then quietly saves someone three hours."',
  footerLine: 'Deploy beats Demo.',
  copyrightYear: '2025',
} as const

export const HERO_TECH = [
  'RAG',
  'Agents',
  'FastAPI',
  'Salesforce',
  'Apex',
  'LWC',
  'Python',
  'TypeScript',
  'Docker',
  'LangChain',
  'Eval Loops',
]

export const HERO_TERMINAL: TerminalLine[] = [
  { label: 'prompt', value: 'make enterprise AI less sleepy' },
  { label: 'retrieval', value: 'hybrid + evaluated' },
  { label: 'agents', value: 'plan, act, check' },
  { label: 'mood', value: 'ship first, polish always' },
]

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
  { label: 'Why Me', href: '#product', id: 'product' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: 'GitHub', href: PERSONAL.github, icon: FaGithub },
  { label: 'LinkedIn', href: PERSONAL.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${PERSONAL.email}`, icon: FaEnvelope },
]

export const SECTION_TEXT = {
  about: {
    label: 'Origin Story',
    title: 'Not a wizard. Just very curious.',
  },
  capabilities: {
    label: 'What I Build',
    title: 'Three lanes, one builder brain',
    subtitle:
      'I sit in the useful overlap: AI workflows, Salesforce automation, and backend systems that make the whole thing run.',
  },
  builderOS: {
    label: 'Builder OS',
    title: 'More signal, less resume fog',
    subtitle:
      'A quick map of how I think when a problem moves from vague idea to running system.',
  },
  skills: {
    label: 'Loadout',
    title: 'Tools I keep reaching for',
  },
  experience: {
    label: 'Field Notes',
    title: 'Where the code met reality',
  },
  projects: {
    label: 'Featured Work',
    title: 'Proof, not decoration',
    subtitle:
      'Projects pulled from real work and resume-backed builds: AI chat, service recommendation, and NLP classification.',
  },
  product: {
    label: 'Why Hire Me',
    title: 'Think of me as a production upgrade',
    subtitle:
      'I am not selling a generic developer profile. I am selling a builder who can take AI ideas, connect them to enterprise systems, and make them usable.',
  },
  certifications: {
    label: 'Receipts',
    title: 'Proof I studied the manuals',
  },
  contact: {
    label: 'Ping Me',
    title: 'Got a weird AI idea?',
    subtitle:
      'Open to full-time, freelance, and consulting work across AI engineering, backend systems, and Salesforce builds.',
  },
} as const

export const ACTION_LABELS = {
  viewProjects: 'View Projects',
  downloadResume: 'Download Resume',
  certified: 'Certified',
  menu: 'Toggle navigation',
  githubProject: 'Open GitHub repository',
  liveProject: 'Open live project',
  caseStudy: 'case study',
  productFit: 'product fit',
} as const

export const PRODUCT_PILLARS: ProductPillar[] = [
  {
    label: 'Outcome',
    title: 'Automation that gives time back',
    description:
      'I look for workflows where AI, APIs, or Salesforce automation can reduce repetitive work and decision friction.',
    metric: '70% manual effort reduction',
    tone: 'accent',
  },
  {
    label: 'Reliability',
    title: 'AI that is checked, traced, and improved',
    description:
      'I package AI features with retrieval, evaluation, logging, and fallback thinking so teams can trust the system after launch.',
    metric: 'Multi-model evaluation mindset',
    tone: 'violet',
  },
  {
    label: 'Integration',
    title: 'Backend glue for messy enterprise reality',
    description:
      'I connect LLM workflows to REST APIs, databases, Salesforce flows, and internal tools where the real business process lives.',
    metric: '1000+ production users served',
    tone: 'emerald',
  },
  {
    label: 'Momentum',
    title: 'Builder energy without losing discipline',
    description:
      'I enjoy turning vague requirements into buildable slices, shipping fast, debugging patiently, and documenting the path.',
    metric: 'Mentored 4 developers',
    tone: 'amber',
  },
]

export const ROLE_FITS: RoleFit[] = [
  {
    role: 'AI Engineer',
    pitch:
      'Best fit when you need RAG, agents, prompt systems, LLM APIs, eval loops, or AI workflows connected to real product behavior.',
    strengths: ['RAG pipelines', 'LLM orchestration', 'Context capture', 'Multi-model evaluation'],
  },
  {
    role: 'Salesforce Developer',
    pitch:
      'Best fit when Salesforce needs custom logic, LWC UI, Apex, Flow, Agentforce ideas, or external backend integrations.',
    strengths: ['Apex', 'LWC', 'Flow Builder', 'SOQL', 'Agentforce'],
  },
  {
    role: 'Backend Engineer',
    pitch:
      'Best fit when the product needs APIs, database-backed services, async workflows, reliable integrations, or automation logic.',
    strengths: ['FastAPI', 'REST APIs', 'MongoDB', 'MySQL', 'Python'],
  },
]

export const PROOF_POINTS: ProofPoint[] = [
  {
    label: 'Production reach',
    value: '1000+',
    detail: 'enterprise users served by AI and automation workflows',
  },
  {
    label: 'Automation impact',
    value: '70%',
    detail: 'manual effort reduction through intelligent workflow automation',
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

export const PERSONA_TRAITS: PersonaTrait[] = [
  {
    label: 'Growth',
    description: 'Always collecting sharper mental models, better tools, and tiny lessons from every build.',
  },
  {
    label: 'Focus',
    description: 'Retrieval quality, backend reliability, agent behavior, and the boring parts that keep demos alive.',
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
      'I build AI workflows that retrieve context, reason through tasks, call tools, and get measured instead of blindly trusted.',
    proof: 'Production LLM workflows for 1000+ enterprise users',
    tags: ['RAG', 'LangChain', 'OpenAI', 'RAGAS', 'LangSmith'],
    accent: 'cyan',
  },
  {
    label: '02 / Salesforce',
    title: 'Enterprise automation without the sleepy UI',
    description:
      'I work across Apex, LWC, Agentforce, Flow, and integrations to turn business workflows into clean internal tools.',
    proof: 'Salesforce certified and hands-on with enterprise delivery',
    tags: ['Apex', 'LWC', 'Agentforce', 'Flow', 'SOQL'],
    accent: 'accent',
  },
  {
    label: '03 / Backend',
    title: 'APIs, async services, and reliable glue',
    description:
      'I like the backend layer where product ideas become durable APIs, queues, data models, auth, logs, and deployable services.',
    proof: 'FastAPI, REST, PostgreSQL, Redis, Docker, AWS',
    tags: ['FastAPI', 'REST', 'PostgreSQL', 'Redis', 'Docker'],
    accent: 'emerald',
  },
]

export const BUILD_MODES: BuildMode[] = [
  {
    label: 'AI Productization',
    title: 'From prompt demo to usable workflow',
    description: 'I care about retrieval quality, memory, tool use, routing, latency, and evaluation before calling an AI feature done.',
    items: ['RAG design', 'Agent flows', 'Eval loops', 'Fallback paths'],
    tone: 'violet',
  },
  {
    label: 'Salesforce Automation',
    title: 'Enterprise workflows with less clicking',
    description: 'I can build around Salesforce objects, flows, Apex logic, LWC interfaces, Agentforce ideas, and external API integrations.',
    items: ['Apex', 'LWC', 'Flow', 'SOQL'],
    tone: 'accent',
  },
  {
    label: 'Backend Systems',
    title: 'The API layer that keeps promises',
    description: 'I like clean service boundaries, async endpoints, auth, data models, queues, and boring reliability work.',
    items: ['FastAPI', 'REST', 'PostgreSQL', 'Redis'],
    tone: 'emerald',
  },
  {
    label: 'Evaluation Mindset',
    title: 'Measure the model, do not worship it',
    description: 'For LLM systems, I think in traces, tests, feedback loops, and practical quality checks.',
    items: ['RAGAS', 'LangSmith', 'Logs', 'Metrics'],
    tone: 'amber',
  },
  {
    label: 'Delivery Habits',
    title: 'Ship small, observe, then sharpen',
    description: 'Docker, CI/CD, deployment checks, readable docs, and enough observability to debug without guessing.',
    items: ['Docker', 'AWS', 'CI/CD', 'Linux'],
    tone: 'cyan',
  },
  {
    label: 'Team Energy',
    title: 'Useful in the messy middle',
    description: 'I enjoy debugging, mentoring, writing clearer handoffs, and turning scattered requirements into buildable slices.',
    items: ['Mentoring', 'Docs', 'Debugging', 'Ownership'],
    tone: 'rose',
  },
]

export const STATS: StatItem[] = [
  { value: '2', suffix: '+', label: 'Years of Experience' },
  { value: '1000', suffix: '+', label: 'Users Served in Production' },
  { value: '70', suffix: '%', label: 'Manual Effort Reduction' },
  { value: '3', suffix: '+', label: 'Industry Certifications' },
]

export const SKILLS: SkillGroup[] = [
  {
    category: 'AI & Machine Learning',
    skills: [
      'LangChain',
      'OpenAI API',
      'RAG',
      'LLaMA / Ollama',
      'ChromaDB',
      'LangSmith',
      'RAGAS',
      'HuggingFace',
      'Prompt Engineering',
      'Multi-Agent Systems',
      'LLM Evaluation',
      'Embeddings',
      'Vector Search',
      'NLP',
      'LSTM',
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Python',
      'FastAPI',
      'Flask',
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'MySQL',
      'SQLAlchemy',
      'Alembic',
      'Async Patterns',
      'JWT / OAuth2',
    ],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'AWS', 'GitHub Actions', 'Nginx', 'Linux', 'Grafana', 'Redis Streams'],
  },
  {
    category: 'Salesforce',
    skills: ['Apex', 'LWC', 'Agentforce', 'Einstein Copilot', 'Flow Builder', 'SOQL', 'Platform Events'],
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Visionet Systems Inc.',
    role: 'Software Development Engineer',
    type: 'Full-time',
    period: 'Aug 2024 - Present',
    location: 'Bengaluru, India - On-site',
    current: true,
    bullets: [
      'Built and deployed LLM-powered agentic AI systems for enterprise workflows used by 1000+ users',
      'Reduced manual effort by 70% and improved system response time by 70% through intelligent automation',
      'Developed conversational AI systems for query handling, context capture, and intelligent routing',
      'Designed RAG-based pipelines with multi-model evaluation using OpenAI, Grok, and Perplexity',
      'Integrated REST APIs and built scalable backend systems for decision support automation',
      'Mentored 4 developers and contributed to system architecture and production issue resolution',
    ],
    tags: ['LangChain', 'RAG', 'FastAPI', 'OpenAI', 'Agentic AI', 'Salesforce'],
  },
  {
    company: 'Visionet Systems Inc.',
    role: 'Software Engineer Intern',
    type: 'Internship',
    period: 'Feb 2024 - Jul 2024',
    location: 'Bengaluru, India - On-site',
    current: false,
    bullets: [
      'Built workflow automation solutions reducing manual effort by 40%',
      'Developed backend integrations and improved performance for systems serving 100+ users',
      'Gained hands-on experience with Apex, LWC, Agentforce, and enterprise Salesforce development',
    ],
    tags: ['Apex', 'LWC', 'Agentforce', 'Salesforce'],
  },
  {
    company: 'InternPe',
    role: 'Python Developer Intern',
    type: 'Internship',
    period: 'Sep 2023 - Oct 2023',
    location: 'Remote',
    current: false,
    bullets: [
      'Demonstrated rapid improvement in Python programming and collaborated with remote peers',
      'Prioritized code optimization and debugging, delivering reliable solutions',
    ],
    tags: ['Python'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'AI Therapy Chatbot',
    description:
      'Conversational AI system using LLaMA through Ollama, RAG retrieval, document chunking, and MongoDB-backed persistent memory for context-aware multi-turn conversations.',
    icon: 'AI',
    tags: ['LLaMA', 'Ollama', 'RAG', 'MongoDB', 'Retrieval'],
    githubUrl: 'https://github.com/gouthamgovardhan/ai-therapy-chatbot',
    featured: true,
  },
  {
    title: 'AI Service Recommendation System',
    description:
      'AI recommendation workflow using OpenAI APIs to understand user queries, recommend relevant services, and reduce manual lookup effort in decision-heavy workflows.',
    icon: 'SR',
    tags: ['OpenAI API', 'Decision Automation', 'REST APIs', 'Python', 'Workflow Logic'],
    featured: true,
  },
  {
    title: 'Fake News Detection System',
    description:
      'NLP classification project using an LSTM model on 6000+ samples with preprocessing, feature engineering, and an end-to-end machine learning pipeline.',
    icon: 'NL',
    tags: ['NLP', 'LSTM', 'Python', 'Feature Engineering', 'Classification'],
    featured: false,
  },
]

export const CERTIFICATIONS: CertItem[] = [
  { name: 'Salesforce Administrator', issuer: 'Salesforce', icon: 'SF' },
  { name: 'Platform Developer I', issuer: 'Salesforce', icon: 'PD' },
  { name: 'AI Associate', issuer: 'Salesforce', icon: 'AI' },
]
