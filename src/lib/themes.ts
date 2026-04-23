export const themes = ['warm', 'dark'] as const
export type Theme = (typeof themes)[number]

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'warm'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'warm'
}