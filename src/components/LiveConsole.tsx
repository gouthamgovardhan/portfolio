import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import type { HotspotConfig, LiveConsoleConfig, MetricConfig, PanelConfig, ShowcaseVariant } from '../types/LiveConsole'
import styles from '../styles/LiveConsole.module.css'

interface LiveConsoleProps {
  config: LiveConsoleConfig
  preview?: boolean
}

const statusClassNames: Record<LiveConsoleConfig['status'], string> = {
  active: styles.statusActive,
  idle: styles.statusIdle,
  processing: styles.statusProcessing,
}

const variantClassNames: Record<ShowcaseVariant, string> = {
  service: styles.variantService,
  wellness: styles.variantWellness,
  'fake-news': styles.variantFakeNews,
}

const variantLabels: Record<ShowcaseVariant, { eyebrow: string; session: string; objectLabel: string }> = {
  service: {
    eyebrow: 'AI service automation',
    session: 'Live request routing',
    objectLabel: 'service workflow',
  },
  wellness: {
    eyebrow: 'AI wellness support',
    session: 'Grounded response loop',
    objectLabel: 'support workflow',
  },
  'fake-news': {
    eyebrow: 'Fake news detection',
    session: 'Text classification run',
    objectLabel: 'classification workflow',
  },
}

function getInitialHotspot(config: LiveConsoleConfig) {
  return config.hotspots[0] ?? null
}

function formatContentValue(value: string | number) {
  return typeof value === 'number' ? value.toLocaleString() : value
}

function getMetricDisplay(metric: MetricConfig, index: number, tick: number, reducedMotion: boolean) {
  if (reducedMotion) return metric.value

  const label = metric.label.toLowerCase()
  const wobble = (tick + index) % 4

  if (label.includes('confidence')) return `${88 + wobble}%`
  if (label.includes('latency')) return String(225 + ((tick + index) % 5) * 8)
  if (label.includes('ranked')) return String(12 + ((tick + index) % 3))
  if (label.includes('tokens')) return String(148 + ((tick + index) % 6) * 11)
  if (label.includes('memory')) return String(32 + ((tick + index) % 5))
  if (label.includes('accuracy')) return `${(93.4 + wobble / 10).toFixed(1)}%`
  if (label.includes('word')) return String(420 + ((tick + index) % 7) * 9)
  if (label.includes('positive') || label.includes('false')) return String(Number(metric.value) + ((tick + index) % 3 || 0))

  return metric.value
}

function isPanelData(content: PanelConfig['content']): content is { label: string; value: string | number }[] {
  return Array.isArray(content)
}

function renderDataRows(panel: PanelConfig) {
  if (!isPanelData(panel.content)) return null

  return (
    <dl className={styles.dataRows}>
      {panel.content.map((item, index) => (
        <div key={`${panel.id}-${item.label}`} className={styles.dataRow} style={{ '--row-index': index } as CSSProperties}>
          <dt>{item.label}</dt>
          <dd>{formatContentValue(item.value)}</dd>
        </div>
      ))}
    </dl>
  )
}

function renderServicePanel(panel: PanelConfig) {
  if (panel.id === 'intake') {
    return (
      <div className={styles.panelScene}>
        <div className={styles.chatBubble}>
          <span className={styles.typingLine}>I need urgent support for my API integration.</span>
        </div>
        <div className={styles.inlineMeta}>
          <span>channel: web</span>
          <span>priority: high</span>
        </div>
        <div className={styles.thinProgress} aria-hidden="true">
          <span />
        </div>
      </div>
    )
  }

  if (panel.id === 'intent') {
    return (
      <div className={styles.panelScene}>
        <div className={styles.entityLine}>
          <span>intent</span>
          <strong>technical_support</strong>
        </div>
        <div className={styles.entityLine}>
          <span>entities</span>
          <strong>API · integration · urgent</strong>
        </div>
        <div className={styles.confidenceBlock}>
          <span>confidence</span>
          <div className={styles.confidenceTrack} aria-hidden="true">
            <i style={{ '--fill': '94%' } as CSSProperties} />
          </div>
        </div>
      </div>
    )
  }

  if (panel.id === 'ranking') {
    return (
      <div className={styles.rankList}>
        {[
          ['Premium Support', '94%'],
          ['API Engineering', '87%'],
          ['On-call Dev', '76%'],
        ].map(([label, score], index) => (
          <div key={label} className={styles.rankItem} style={{ '--row-index': index, '--fill': score } as CSSProperties}>
            <span>{label}</span>
            <strong>{score}</strong>
            <i aria-hidden="true" />
          </div>
        ))}
      </div>
    )
  }

  if (panel.id === 'api') {
    return (
      <div className={styles.codeWindow}>
        <span className={styles.codeMuted}>calling backend</span>
        <span className={styles.loadingDots} aria-hidden="true">
          ···
        </span>
        <code>{'{ status: "ok", eta: "2m" }'}</code>
      </div>
    )
  }

  if (panel.id === 'action') {
    return (
      <div className={styles.resultCard}>
        <span className={styles.successOrb} aria-hidden="true" />
        <strong>Connect to Premium Support</strong>
        <span>confidence 89% · ready to route</span>
      </div>
    )
  }

  return renderDataRows(panel)
}

function renderWellnessPanel(panel: PanelConfig) {
  if (panel.id === 'prompt') {
    return (
      <div className={styles.panelScene}>
        <div className={styles.chatBubble}>
          <span className={styles.typingLine}>I have been feeling anxious at work lately.</span>
        </div>
        <div className={styles.inlineMeta}>
          <span>mode: support</span>
          <span>risk: low</span>
        </div>
      </div>
    )
  }

  if (panel.id === 'retrieval') {
    return (
      <div className={styles.documentStack}>
        {[
          ['grounding.md', '0.91'],
          ['breathing.txt', '0.84'],
          ['boundaries.md', '0.78'],
        ].map(([label, score], index) => (
          <div key={label} style={{ '--row-index': index } as CSSProperties}>
            <span>{label}</span>
            <strong>{score}</strong>
          </div>
        ))}
      </div>
    )
  }

  if (panel.id === 'generation') {
    return (
      <div className={styles.generationBox}>
        <span className={styles.pulseDots} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <p>Generating calm, bounded response...</p>
        <strong>tokens +148</strong>
      </div>
    )
  }

  if (panel.id === 'memory') {
    return (
      <div className={styles.memoryStack}>
        <span>previous context</span>
        <span>preferred tone: calm</span>
        <span>memory entries: 34</span>
      </div>
    )
  }

  if (panel.id === 'guardrails') {
    return (
      <div className={styles.checkList}>
        {['No diagnosis', 'Safe wording', 'Grounded context'].map((item, index) => (
          <span key={item} style={{ '--row-index': index } as CSSProperties}>
            ✓ {item}
          </span>
        ))}
      </div>
    )
  }

  if (panel.id === 'response') {
    return (
      <div className={styles.responsePreview}>
        <span className={styles.typingLine}>That sounds difficult. Try one small reset before the next task.</span>
      </div>
    )
  }

  return renderDataRows(panel)
}

function renderFakeNewsPanel(panel: PanelConfig) {
  if (panel.id === 'article') {
    return (
      <div className={styles.panelScene}>
        <strong className={styles.articleHeadline}>Breaking claim spreads across social feed</strong>
        <div className={styles.wordCounter}>
          <span>word count</span>
          <b>429</b>
        </div>
      </div>
    )
  }

  if (panel.id === 'preprocess') {
    return (
      <div className={styles.tokenStream}>
        {['claim', 'source', 'quote', 'date', 'signal', 'bias'].map((token, index) => (
          <span key={token} style={{ '--row-index': index } as CSSProperties}>
            {token}
          </span>
        ))}
      </div>
    )
  }

  if (panel.id === 'lstm') {
    return (
      <div className={styles.neuralNet} aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <i />
      </div>
    )
  }

  if (panel.id === 'classification') {
    return (
      <div className={styles.gaugeBox}>
        <div className={styles.gaugeTrack} aria-hidden="true">
          <span />
        </div>
        <strong>MIXED</strong>
        <small>review recommended</small>
      </div>
    )
  }

  if (panel.id === 'metrics') {
    return (
      <div className={styles.checkList}>
        <span>accuracy 93.6%</span>
        <span>true positive +2</span>
        <span>false positive +1</span>
      </div>
    )
  }

  return renderDataRows(panel)
}

function renderLivePanel(variant: ShowcaseVariant, panel: PanelConfig) {
  if (variant === 'service') return renderServicePanel(panel)
  if (variant === 'wellness') return renderWellnessPanel(panel)
  return renderFakeNewsPanel(panel)
}

function renderDetailVisualization(variant: ShowcaseVariant, hotspot: HotspotConfig) {
  const target = hotspot.targetPanel

  if (variant === 'service' && target === 'intent') {
    return (
      <div className={styles.detailIntentViz}>
        <p>
          I need <mark>urgent</mark> technical support for my <mark>API integration</mark>.
        </p>
        <div>
          <span>intent</span>
          <strong>technical_support</strong>
        </div>
        <div>
          <span>confidence</span>
          <i style={{ '--fill': '94%' } as CSSProperties} />
        </div>
      </div>
    )
  }

  if (variant === 'service' && target === 'ranking') {
    return (
      <div className={styles.detailRankViz}>
        {[
          ['Premium Support', '94%'],
          ['API Engineering', '87%'],
          ['On-call Dev', '76%'],
        ].map(([label, score], index) => (
          <div key={label} style={{ '--row-index': index, '--fill': score } as CSSProperties}>
            <span>{label}</span>
            <strong>{score}</strong>
            <i />
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'service') {
    return (
      <div className={styles.detailFlowViz}>
        <span>request</span>
        <i />
        <span>{target}</span>
        <i />
        <span>validated output</span>
      </div>
    )
  }

  if (variant === 'wellness' && target === 'retrieval') {
    return (
      <div className={styles.detailDocsViz}>
        {[
          ['work-anxiety-grounding.md', '91%'],
          ['breathing-reset.txt', '84%'],
          ['support-boundaries.md', '78%'],
        ].map(([label, score], index) => (
          <div key={label} style={{ '--row-index': index } as CSSProperties}>
            <span>{label}</span>
            <strong>{score}</strong>
          </div>
        ))}
      </div>
    )
  }

  if (variant === 'wellness') {
    return (
      <div className={styles.detailResponseViz}>
        <p className={styles.typingLine}>A grounded answer is assembled from retrieved context and safety checks.</p>
        <div className={styles.checkList}>
          <span>✓ support tone</span>
          <span>✓ no medical claim</span>
          <span>✓ memory updated</span>
        </div>
      </div>
    )
  }

  if (target === 'lstm') {
    return (
      <div className={styles.detailNeuralViz} aria-hidden="true">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} style={{ '--row-index': index } as CSSProperties} />
        ))}
        <i />
      </div>
    )
  }

  if (target === 'classification') {
    return (
      <div className={styles.detailGaugeViz}>
        <div>
          <span />
        </div>
        <strong>MIXED · 82%</strong>
        <p>Signal is high enough to route the article for review before publication.</p>
      </div>
    )
  }

  return (
    <div className={styles.detailTokenViz}>
      {['raw text', 'clean', 'tokens', 'sequence', 'signal'].map((token, index) => (
        <span key={token} style={{ '--row-index': index } as CSSProperties}>
          {token}
        </span>
      ))}
    </div>
  )
}

export function LiveConsole({ config, preview = false }: LiveConsoleProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<HotspotConfig | null>(() => getInitialHotspot(config))
  const [detailHotspot, setDetailHotspot] = useState<HotspotConfig | null>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [metricTick, setMetricTick] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const labels = variantLabels[config.variant]

  const hotspotsByPanel = useMemo(
    () =>
      config.hotspots.reduce<Record<string, HotspotConfig[]>>((groups, hotspot) => {
        groups[hotspot.targetPanel] = [...(groups[hotspot.targetPanel] ?? []), hotspot]
        return groups
      }, {}),
    [config.hotspots],
  )
  const inspector = selectedHotspot?.inspectorContent

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches)

    updateMotionPreference()
    motionQuery.addEventListener('change', updateMotionPreference)

    return () => motionQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) return undefined

    const interval = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % Math.max(config.panels.length, 1))
      setMetricTick((tick) => tick + 1)
    }, 1500)

    return () => window.clearInterval(interval)
  }, [config.panels.length, reducedMotion])

  useEffect(() => {
    if (!detailHotspot) return undefined

    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null
    requestAnimationFrame(() => closeButtonRef.current?.focus())

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      event.preventDefault()
      event.stopPropagation()
      setDetailHotspot(null)
    }

    window.addEventListener('keydown', handleKeyDown, true)

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true)
      previouslyFocused?.focus()
    }
  }, [detailHotspot])

  const openHotspot = (hotspot: HotspotConfig) => {
    setSelectedHotspot(hotspot)
    if (!preview) setDetailHotspot(hotspot)
  }

  return (
    <section
      className={`${styles.consoleStage} ${variantClassNames[config.variant]} ${preview ? styles.previewStage : ''}`}
      aria-label={`${config.title} live console`}
    >
      <header className={styles.consoleHeader}>
        <div className={styles.headerCopy}>
          <p className={styles.headerKicker}>{labels.eyebrow}</p>
          <h4 className={styles.headerTitle}>{config.title}</h4>
        </div>
        <div className={styles.headerMeta}>
          <span className={styles.liveSession}>
            <i aria-hidden="true" />
            {labels.session}
          </span>
          <span className={`${styles.statusChip} ${statusClassNames[config.status]}`}>{config.status}</span>
          {config.timeline ? <span className={styles.timelineChip}>{config.timeline}</span> : null}
        </div>
      </header>

      <div className={styles.workflowArea} aria-label={labels.objectLabel}>
        <div className={styles.workflowTrack}>
          {config.panels.map((panel, index) => {
            const panelHotspots = hotspotsByPanel[panel.id] ?? []
            const isSelected = selectedHotspot?.targetPanel === panel.id
            const isLive = activeStep === index
            const firstHotspot = panelHotspots[0]
            const panelStyle = {
              '--panel-index': index,
              '--panel-delay': `${index * 1.2}s`,
            } as CSSProperties

            return (
              <div key={panel.id} className={styles.panelSlot} style={panelStyle}>
                <article
                  className={`${styles.panelCard} ${isSelected ? styles.panelCardSelected : ''} ${isLive ? styles.panelCardLive : ''} ${
                    firstHotspot && !preview ? styles.panelCardClickable : ''
                  }`}
                  tabIndex={firstHotspot && !preview ? 0 : undefined}
                  role={firstHotspot && !preview ? 'button' : undefined}
                  onClick={() => {
                    if (firstHotspot) openHotspot(firstHotspot)
                  }}
                  onKeyDown={(event) => {
                    if (!firstHotspot || (event.key !== 'Enter' && event.key !== ' ')) return
                    event.preventDefault()
                    openHotspot(firstHotspot)
                  }}
                  aria-label={firstHotspot && !preview ? `Open ${firstHotspot.label} details` : undefined}
                >
                  <div className={styles.panelTopline}>
                    <span className={styles.panelIndex}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={styles.panelStatus}>{isLive ? 'processing' : 'standby'}</span>
                  </div>
                  <h5 className={styles.panelName}>{panel.name}</h5>
                  {renderLivePanel(config.variant, panel)}
                  {panelHotspots.map((hotspot, hotspotIndex) =>
                    preview ? (
                      <span key={hotspot.id} className={styles.hotspotMarker} aria-hidden="true">
                        {index + hotspotIndex + 1}
                      </span>
                    ) : (
                      <button
                        key={hotspot.id}
                        type="button"
                        className={`${styles.hotspotButton} ${selectedHotspot?.id === hotspot.id ? styles.hotspotButtonActive : ''}`}
                        onClick={(event) => {
                          event.stopPropagation()
                          openHotspot(hotspot)
                        }}
                        aria-label={`Open ${hotspot.label} explanation`}
                        aria-pressed={selectedHotspot?.id === hotspot.id}
                      >
                        {index + hotspotIndex + 1}
                      </button>
                    ),
                  )}
                </article>
                {index < config.panels.length - 1 ? <span className={styles.flowConnector} aria-hidden="true" /> : null}
              </div>
            )
          })}
        </div>
      </div>

      {!preview ? (
        <aside className={styles.inspectorPanel} aria-live="polite">
          {inspector ? (
            <>
              <p className={styles.inspectorEyebrow}>Selected block</p>
              <h5 className={styles.inspectorTitle}>{inspector.title}</h5>
              <p className={styles.inspectorExplanation}>{inspector.explanation}</p>
              {inspector.signal ? <p className={styles.inspectorSignal}>{inspector.signal}</p> : null}
              <div className={styles.stackTags} aria-label="Related stack">
                {inspector.stackTags.map((tag) => (
                  <span key={tag} className={styles.stackTag}>
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className={styles.inspectAction}
                onClick={() => selectedHotspot && setDetailHotspot(selectedHotspot)}
                disabled={!selectedHotspot}
              >
                Open animated breakdown
              </button>
            </>
          ) : (
            <p className={styles.inspectorExplanation}>Select a hotspot to inspect this workflow.</p>
          )}
        </aside>
      ) : null}

      {config.metrics?.length ? (
        <div className={styles.metricsStrip} aria-label="Console metrics">
          {config.metrics.map((metric, index) => (
            <div key={metric.label} className={styles.metricCard} style={{ '--row-index': index } as CSSProperties}>
              <p className={styles.metricCardLabel}>{metric.label}</p>
              <p className={styles.metricCardValue}>
                {getMetricDisplay(metric, index, metricTick, reducedMotion)}
                {metric.unit ? <span className={styles.metricCardUnit}>{metric.unit}</span> : null}
              </p>
              <span className={styles.metricSpark} aria-hidden="true" />
            </div>
          ))}
        </div>
      ) : null}

      {detailHotspot ? (
        <div className={styles.hotspotOverlay} role="presentation" onMouseDown={() => setDetailHotspot(null)}>
          <article
            className={styles.hotspotDialog}
            role="dialog"
            aria-modal="true"
            aria-label={`${detailHotspot.inspectorContent.title} explanation`}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={styles.hotspotClose}
              onClick={() => setDetailHotspot(null)}
              aria-label="Close block explanation"
            >
              ×
            </button>
            <p className={styles.hotspotDialogEyebrow}>{detailHotspot.label}</p>
            <h5>{detailHotspot.inspectorContent.title}</h5>
            <p>{detailHotspot.inspectorContent.explanation}</p>
            {renderDetailVisualization(config.variant, detailHotspot)}
            {detailHotspot.inspectorContent.signal ? <span className={styles.hotspotSignal}>{detailHotspot.inspectorContent.signal}</span> : null}
            <div className={styles.stackTags}>
              {detailHotspot.inspectorContent.stackTags.map((tag) => (
                <span key={tag} className={styles.stackTag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      ) : null}
    </section>
  )
}
