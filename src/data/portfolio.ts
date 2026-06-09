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

export const PERSONAL = {
  name: 'Goutham Reddy S',
  shortName: 'GR',
  firstName: 'Goutham',
  lastName: 'Reddy',
  suffixName: 'S.',
  tagline: 'AI Engineer',
  eyebrow: 'Currently shipping at Visionet Systems',
  rolePrefix: 'I am building like a',
  heroDescription:
    'Bengaluru-based AI engineer turning RAG, agents, APIs, and messy enterprise workflows into things people can actually use.',
  roles: [
    'AI Engineer',
    'RAG Architect',
    'Backend Systems Builder',
    'Agentic AI Developer',
    'Salesforce Developer',
  ],
  bio: [
    'I am a Computer Science Engineer from Bengaluru who likes building AI systems that escape the notebook and survive real users. My core belief: Deploy beats Demo.',
    'At Visionet Systems, I work on LLM-powered agentic systems for enterprise workflows, including RAG chat, multi-model evaluation, routing, and automation that has served 1000+ users.',
    'After work I keep poking at agent architectures, eval loops, backend patterns, and the strange little details that make AI products feel fast, useful, and alive.',
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
  email: 'ADD_YOUR_EMAIL_HERE@gmail.com',
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

export const HERO_TECH = ['React', 'TypeScript', 'Python', 'FastAPI', 'Docker', 'Git', 'Tailwind', 'LangChain', 'RAG']

export const HERO_TERMINAL: TerminalLine[] = [
  { label: 'prompt', value: 'make enterprise AI less sleepy' },
  { label: 'retrieval', value: 'hybrid + evaluated' },
  { label: 'agents', value: 'plan, act, check' },
  { label: 'mood', value: 'ship first, polish always' },
]

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'About', href: '#about', id: 'about' },
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
    title: 'Stuff I am proud to show',
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
} as const

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
      'ChromaDB',
      'Pinecone',
      'LangSmith',
      'RAGAS',
      'HuggingFace',
      'Prompt Engineering',
      'Multi-Agent Systems',
      'LLM Evaluation',
      'Embeddings',
      'Vector Search',
    ],
  },
  {
    category: 'Backend & APIs',
    skills: [
      'Python',
      'FastAPI',
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'Redis',
      'MongoDB',
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
      'Full-stack AI chatbot with RAG-based persistent memory, stage-based emotional conversation flow, and real-time chat interface. Delivers context-aware responses across multi-turn conversations.',
    icon: 'AI',
    tags: ['FastAPI', 'RAG', 'React', 'Node.js', 'ChromaDB'],
    githubUrl: 'https://github.com/gouthamgovardhan/ai-therapy-chatbot',
    featured: true,
  },
]

export const CERTIFICATIONS: CertItem[] = [
  { name: 'Salesforce Administrator', issuer: 'Salesforce', icon: 'SF' },
  { name: 'Platform Developer I', issuer: 'Salesforce', icon: 'PD' },
  { name: 'AI Associate', issuer: 'Salesforce', icon: 'AI' },
]
