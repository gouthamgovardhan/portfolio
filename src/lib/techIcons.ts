import type { IconType } from 'react-icons'
import { FaAws, FaBrain, FaCloud, FaCode, FaDatabase, FaRobot, FaSalesforce, FaServer } from 'react-icons/fa6'
import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiGithubactions,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSalesforce,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { TbApi, TbChartDots, TbDatabase, TbRobot, TbTopologyStar, TbVector } from 'react-icons/tb'

const salesforceIcon = SiSalesforce || FaSalesforce

export const TECH_ICONS: Record<string, IconType> = {
  AI: FaBrain,
  Agents: TbRobot,
  Agentforce: salesforceIcon,
  'Agent Builder': salesforceIcon,
  Apex: salesforceIcon,
  'Apex Triggers': salesforceIcon,
  AWS: FaAws,
  ChromaDB: TbDatabase,
  Classification: TbChartDots,
  'Decision Automation': TbTopologyStar,
  Docker: SiDocker,
  'Email-to-Case': salesforceIcon,
  Embeddings: TbVector,
  Eval: TbChartDots,
  'Eval Loops': TbChartDots,
  FastAPI: SiFastapi,
  'Feature Engineering': TbChartDots,
  Flask: SiFlask,
  Flow: salesforceIcon,
  Flows: salesforceIcon,
  'Flow Builder': salesforceIcon,
  'GitHub Actions': SiGithubactions,
  HuggingFace: SiHuggingface,
  'Intent Classification': TbChartDots,
  'Intent parsing': TbChartDots,
  JavaScript: SiJavascript,
  LangChain: SiLangchain,
  LangSmith: SiLangchain,
  Linux: SiLinux,
  LLaMA: FaBrain,
  'LLaMA / Ollama': SiOllama,
  'LLaMA/Ollama': SiOllama,
  LLM: FaBrain,
  'LLM Evaluation': TbChartDots,
  LSTM: FaBrain,
  'LSTM model': FaBrain,
  LWC: salesforceIcon,
  MongoDB: SiMongodb,
  'MongoDB memory': SiMongodb,
  MySQL: SiMysql,
  NLP: FaBrain,
  Node: SiNodedotjs,
  'Node.js': SiNodedotjs,
  Ollama: SiOllama,
  'Omni-Channel': salesforceIcon,
  OpenAI: SiOpenai,
  'OpenAI API': SiOpenai,
  PostgreSQL: SiPostgresql,
  'Prompt Builder': salesforceIcon,
  'Prompt Engineering': FaCode,
  Python: SiPython,
  RAG: FaBrain,
  RAGAS: TbChartDots,
  React: SiReact,
  Redis: SiRedis,
  Reports: TbChartDots,
  'Reports & Dashboards': TbChartDots,
  REST: TbApi,
  'REST APIs': TbApi,
  Retrieval: TbDatabase,
  Retriever: TbDatabase,
  Salesforce: salesforceIcon,
  'Sales Cloud': salesforceIcon,
  'Service Cloud': salesforceIcon,
  'Financial Services Cloud': salesforceIcon,
  'SOQL / SOSL': salesforceIcon,
  'Tailwind CSS': SiTailwindcss,
  TypeScript: SiTypescript,
  UAT: TbChartDots,
  'Vector Search': TbVector,
  'Workflow Logic': TbTopologyStar,
}

export function getTechIcon(label: string): IconType {
  return TECH_ICONS[label] ?? genericTechIcon(label)
}

function genericTechIcon(label: string): IconType {
  const normalized = label.toLowerCase()

  if (normalized.includes('api')) return TbApi
  if (normalized.includes('cloud')) return FaCloud
  if (normalized.includes('data') || normalized.includes('sql') || normalized.includes('database')) return FaDatabase
  if (normalized.includes('agent') || normalized.includes('bot')) return FaRobot
  if (normalized.includes('server') || normalized.includes('backend')) return FaServer
  if (normalized.includes('ai') || normalized.includes('model') || normalized.includes('learning')) return FaBrain

  return FaCode
}
