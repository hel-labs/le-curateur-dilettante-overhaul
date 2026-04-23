'use client'

import { useEffect, useState } from 'react'
import type { Theme } from '@/lib/themes'
import { getSystemTheme } from '@/lib/themes'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('warm')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const resolved = stored ?? getSystemTheme()
    setTheme(resolved)
    document.documentElement.setAttribute('data-theme', resolved)
  }, [])

  function toggle() {
    const next: Theme = theme === 'warm' ? 'dark' : 'warm'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return { theme, toggle }
}