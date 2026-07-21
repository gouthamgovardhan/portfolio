import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        card: 'var(--color-card)',
        border: 'var(--color-border)',
        'border-dim': 'var(--color-border-dim)',
        accent: 'var(--color-accent)',
        'accent-h': 'var(--color-accent-h)',
        cyan: 'var(--color-cyan)',
        emerald: 'var(--color-emerald)',
        amber: 'var(--color-amber)',
        rose: 'var(--color-rose)',
        violet: 'var(--color-violet)',
        azure: 'var(--color-azure)',
        lime: 'var(--color-lime)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        dim: 'var(--color-dim)',
      },
    },
  },
  plugins: [],
} satisfies Config
