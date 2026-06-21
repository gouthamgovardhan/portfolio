export type ShowcaseVariant = 'service' | 'wellness' | 'fake-news'

export interface InspectorContent {
  title: string
  explanation: string
  signal?: string
  stackTags: string[]
}

export interface PanelConfig {
  id: string
  name: string
  animationType: 'typing' | 'pulse' | 'flow' | 'counter' | 'gauge' | 'static'
  content: string | { label: string; value: string | number }[]
}

export interface HotspotConfig {
  id: string
  label: string
  position: { x: number; y: number }
  targetPanel: string
  inspectorContent: InspectorContent
}

export interface MetricConfig {
  label: string
  value: string | number
  unit?: string
}

export interface LiveConsoleConfig {
  variant: ShowcaseVariant
  title: string
  status: 'active' | 'idle' | 'processing'
  timeline?: string
  hotspots: HotspotConfig[]
  panels: PanelConfig[]
  metrics?: MetricConfig[]
}
