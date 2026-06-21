import { useMemo, useState, type CSSProperties } from 'react'
import type { ProjectItem } from '../data/portfolio'
import type { ShowcaseVariant } from '../types/LiveConsole'
import { LiveConsole } from './LiveConsole'

type ShowcaseTone = 'cyan' | 'violet' | 'emerald' | 'amber' | 'rose'

interface ShowcaseNode {
  id: string
  label: string
  title: string
  detail: string
  meta: string
  tone: ShowcaseTone
  className: string
}

interface ShowcaseConfig {
  kicker: string
  title: string
  subtitle: string
  accent: ShowcaseTone
  nodes: ShowcaseNode[]
  links: string[]
  timeline: string[]
}

interface ProjectShowcaseProps {
  project: Pick<ProjectItem, 'showcase' | 'liveConsoleConfig'>
  interactive?: boolean
}

const toneVars: Record<ShowcaseTone, string> = {
  cyan: 'var(--color-cyan)',
  violet: 'var(--color-violet)',
  emerald: 'var(--color-emerald)',
  amber: 'var(--color-amber)',
  rose: 'var(--color-accent)',
}

const variantClassNames: Record<ShowcaseVariant, string> = {
  service: 'project-showcase-service',
  wellness: 'project-showcase-wellness',
  'fake-news': 'project-showcase-fake-news',
}

const linkClassNames: Record<string, string> = {
  'query-intent': 'showcase-link-query-intent',
  'intent-engine': 'showcase-link-intent-engine',
  'engine-recommend': 'showcase-link-engine-recommend',
  'recommend-api': 'showcase-link-recommend-api',
  'prompt-retrieve': 'showcase-link-prompt-retrieve',
  'retrieve-ollama': 'showcase-link-retrieve-ollama',
  'ollama-memory': 'showcase-link-ollama-memory',
  'memory-response': 'showcase-link-memory-response',
  'dataset-prep': 'showcase-link-dataset-prep',
  'prep-lstm': 'showcase-link-prep-lstm',
  'lstm-classification': 'showcase-link-lstm-classification',
  'classification-score': 'showcase-link-classification-score',
}

const showcaseConfigs: Record<ShowcaseVariant, ShowcaseConfig> = {
  service: {
    kicker: 'AI Service Recommendation',
    title: 'Ask once. Get the best service.',
    subtitle: 'Intent enters, ranking logic returns a useful service suggestion.',
    accent: 'cyan',
    links: ['query-intent', 'intent-engine', 'engine-recommend', 'recommend-api'],
    timeline: ['Request', 'Intent', 'Rank', 'Response'],
    nodes: [
      {
        id: 'user-request',
        label: 'User request',
        title: 'User request',
        detail: 'A vague business query is captured in plain language, then normalized so the backend can reason over it.',
        meta: 'Input',
        tone: 'cyan',
        className: 'showcase-node-a',
      },
      {
        id: 'intent-parser',
        label: 'Intent parser',
        title: 'Intent parser',
        detail: 'The system identifies what the user is trying to do, what constraints matter, and which service category is relevant.',
        meta: 'Understanding',
        tone: 'violet',
        className: 'showcase-node-b',
      },
      {
        id: 'ai-engine',
        label: 'AI engine',
        title: 'AI engine',
        detail: 'OpenAI-backed logic compares intent, service metadata, and decision rules before producing ranked options.',
        meta: 'Reasoning',
        tone: 'rose',
        className: 'showcase-node-c',
      },
      {
        id: 'recommendation',
        label: 'Recommendation',
        title: 'Recommendation',
        detail: 'The best-fit service appears with confidence and a simple reason, so the user can act without searching manually.',
        meta: 'Output',
        tone: 'emerald',
        className: 'showcase-node-d',
      },
      {
        id: 'api-response',
        label: 'API response',
        title: 'API response',
        detail: 'The selected result is returned as a clean API response that another workflow or interface can consume.',
        meta: 'Integration',
        tone: 'amber',
        className: 'showcase-node-e',
      },
    ],
  },
  wellness: {
    kicker: 'AI Wellness Support',
    title: 'Support question. Calm answer.',
    subtitle: 'RAG context, local model response, and memory without medical claims.',
    accent: 'violet',
    links: ['prompt-retrieve', 'retrieve-ollama', 'ollama-memory', 'memory-response'],
    timeline: ['Prompt', 'Retrieve', 'Ollama', 'Memory'],
    nodes: [
      {
        id: 'user-prompt',
        label: 'User prompt',
        title: 'User prompt',
        detail: 'The user message is treated as a support request, not a diagnosis. The wording is kept simple and safe.',
        meta: 'Input',
        tone: 'violet',
        className: 'showcase-node-a',
      },
      {
        id: 'retrieve',
        label: 'Retrieve',
        title: 'Retrieve',
        detail: 'Relevant document chunks are pulled into context so the assistant answers from grounded support material.',
        meta: 'RAG',
        tone: 'cyan',
        className: 'showcase-node-b',
      },
      {
        id: 'ollama',
        label: 'Ollama',
        title: 'Ollama',
        detail: 'A local LLaMA model through Ollama generates the response using retrieved context and the latest user turn.',
        meta: 'Model',
        tone: 'rose',
        className: 'showcase-node-c',
      },
      {
        id: 'mongodb-memory',
        label: 'MongoDB memory',
        title: 'MongoDB memory',
        detail: 'Conversation state is stored so follow-up messages can keep context instead of starting over every time.',
        meta: 'Persistence',
        tone: 'emerald',
        className: 'showcase-node-d',
      },
      {
        id: 'support-response',
        label: 'Support response',
        title: 'Support response',
        detail: 'The final response is calm, bounded, and clear about being support-style guidance rather than medical advice.',
        meta: 'Output',
        tone: 'amber',
        className: 'showcase-node-e',
      },
    ],
  },
  'fake-news': {
    kicker: 'Fake News Detection',
    title: 'Text in. Signal out.',
    subtitle: 'A simple NLP pipeline turns raw text into a classification signal.',
    accent: 'emerald',
    links: ['dataset-prep', 'prep-lstm', 'lstm-classification', 'classification-score'],
    timeline: ['Dataset', 'Pre-process', 'LSTM', 'Classify'],
    nodes: [
      {
        id: 'dataset',
        label: 'Dataset',
        title: 'Dataset',
        detail: 'The model starts with labeled article samples, giving the pipeline examples of credible and suspicious writing patterns.',
        meta: 'Training data',
        tone: 'emerald',
        className: 'showcase-node-a',
      },
      {
        id: 'pre-processing',
        label: 'Pre-processing',
        title: 'Pre-processing',
        detail: 'Raw text is cleaned, tokenized, and prepared so the model sees consistent features instead of noisy article text.',
        meta: 'Cleaning',
        tone: 'cyan',
        className: 'showcase-node-b',
      },
      {
        id: 'lstm-model',
        label: 'LSTM model',
        title: 'LSTM model',
        detail: 'The LSTM reads text as a sequence, which helps it learn wording patterns across the article rather than isolated keywords.',
        meta: 'Model',
        tone: 'amber',
        className: 'showcase-node-c',
      },
      {
        id: 'classification',
        label: 'Classification',
        title: 'Classification',
        detail: 'The classifier converts the model output into a clear credibility signal that can be reviewed before sharing.',
        meta: 'Decision',
        tone: 'rose',
        className: 'showcase-node-d',
      },
      {
        id: 'score',
        label: 'Score',
        title: 'Score',
        detail: 'The final score is a decision aid, not an absolute truth. It gives the user a readable signal for review.',
        meta: 'Signal',
        tone: 'emerald',
        className: 'showcase-node-e',
      },
    ],
  },
}

function LegacyProjectShowcase({ variant, interactive }: { variant: ShowcaseVariant; interactive: boolean }) {
  const config = showcaseConfigs[variant]
  const [activeId, setActiveId] = useState(config.nodes[0].id)
  const activeNode = useMemo(
    () => config.nodes.find((node) => node.id === activeId) ?? config.nodes[0],
    [activeId, config.nodes],
  )
  const rootStyle = {
    '--showcase-accent': toneVars[config.accent],
  } as CSSProperties
  const explainerStyle = {
    '--node-color': toneVars[activeNode.tone],
  } as CSSProperties

  return (
    <div className={`project-showcase ${variantClassNames[variant]} ${interactive ? 'is-interactive' : 'is-preview'}`} style={rootStyle}>
      <div className="showcase-grid" aria-hidden="true" />
      <div className="showcase-scan" aria-hidden="true" />

      <div className="showcase-header">
        <p>{config.kicker}</p>
        <h4>{config.title}</h4>
        <span>{config.subtitle}</span>
      </div>

      <div className="showcase-map" aria-label={`${config.title} interactive architecture`}>
        {config.links.map((link) => (
          <span key={link} className={`showcase-link ${linkClassNames[link]}`} aria-hidden="true" />
        ))}

        {config.nodes.map((node, index) => {
          const isActive = activeNode.id === node.id
          const nodeClass = `showcase-node ${node.className} ${isActive ? 'is-active' : ''}`
          const nodeStyle = {
            '--node-color': toneVars[node.tone],
          } as CSSProperties

          return interactive ? (
            <button
              key={node.id}
              type="button"
              className={nodeClass}
              style={nodeStyle}
              onClick={() => setActiveId(node.id)}
              aria-pressed={isActive}
            >
              <span className="showcase-node-step">{String(index + 1).padStart(2, '0')}</span>
              <strong>{node.label}</strong>
              <small>{node.meta}</small>
            </button>
          ) : (
            <div key={node.id} className={nodeClass} style={nodeStyle} aria-hidden="true">
              <span className="showcase-node-step">{String(index + 1).padStart(2, '0')}</span>
              <strong>{node.label}</strong>
              <small>{node.meta}</small>
            </div>
          )
        })}
      </div>

      {interactive ? (
        <div className="showcase-explainer" style={explainerStyle} role="status" aria-live="polite">
          <p>{activeNode.meta}</p>
          <h5>{activeNode.title}</h5>
          <span>{activeNode.detail}</span>
        </div>
      ) : null}

      <div className="showcase-timeline" aria-hidden="true">
        {config.timeline.map((item, index) => (
          <span key={item}>
            <i />
            {String(index + 1).padStart(2, '0')} {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectShowcase({ project, interactive = false }: ProjectShowcaseProps) {
  if (project.liveConsoleConfig) {
    return <LiveConsole config={project.liveConsoleConfig} preview={!interactive} />
  }

  if (!project.showcase) return null

  return <LegacyProjectShowcase variant={project.showcase} interactive={interactive} />
}
