export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    return v === 'dark' || v === 'light' ? v : null
  } catch { return null }
}

function readSystem(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyToDocument(t: Theme): void {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('theme-light', t === 'light')
}

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')

  function set(t: Theme): void {
    theme.value = t
    applyToDocument(t)
    try { localStorage.setItem(STORAGE_KEY, t) } catch { /* ignore */ }
  }

  function toggle(): void { set(theme.value === 'dark' ? 'light' : 'dark') }

  function init(): void {
    if (typeof window === 'undefined') return
    const current = readStored() ?? readSystem()
    theme.value = current
    applyToDocument(current)
  }

  return { theme, set, toggle, init }
}
