import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--ff-display)'],
        body: ['var(--ff-body)'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-2': 'var(--bg-2)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
} satisfies Config