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
        bg: '#06080F',
        surface: '#0D1525',
        card: '#111D30',
        border: '#1E3050',
        'border-dim': '#162440',
        accent: '#6366F1',
        'accent-h': '#818CF8',
        cyan: '#22D3EE',
        emerald: '#10B981',
        text: '#E8EEF8',
        muted: '#7B91B0',
        dim: '#3D5580',
      },
    },
  },
  plugins: [],
} satisfies Config
