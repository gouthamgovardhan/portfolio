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
        bg: '#100D12',
        surface: '#171019',
        card: '#211825',
        border: '#443142',
        'border-dim': '#2C2230',
        accent: '#FF6B6B',
        'accent-h': '#FF8A7A',
        cyan: '#38E8FF',
        emerald: '#4ADE80',
        amber: '#FBBF24',
        rose: '#F472B6',
        violet: '#A78BFA',
        lime: '#BEF264',
        text: '#FFF7ED',
        muted: '#B8A9B5',
        dim: '#7C6B78',
      },
    },
  },
  plugins: [],
} satisfies Config
