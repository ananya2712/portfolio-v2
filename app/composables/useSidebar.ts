const MIN_WIDTH = 220
const MAX_WIDTH = 520
const DEFAULT_WIDTH = 288
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365  // 1 year

export function useSidebar() {
  const collapsed = useCookie<boolean>('sidebar-collapsed', {
    default: () => false,
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
    path: '/',
  })

  const width = useCookie<number>('sidebar-width', {
    default: () => DEFAULT_WIDTH,
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
    path: '/',
  })

  function toggle(): void {
    collapsed.value = !collapsed.value
  }

  function setWidth(w: number): void {
    width.value = Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, Math.round(w)))
  }

  return { collapsed, width, toggle, setWidth, MIN_WIDTH, MAX_WIDTH }
}
