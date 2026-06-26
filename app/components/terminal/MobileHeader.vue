<script setup lang="ts">
const route = useRoute()
const { theme, toggle: toggleTheme } = useTheme()
const links = [
  { label: 'about', href: '/' },
  { label: 'exp', href: '/experience' },
  { label: 'research', href: '/research' },
  { label: 'projects', href: '/projects' },
  { label: 'writing', href: '/writing' },
]
function isActive(href: string): boolean {
  if (href === '/') return route.path === '/'
  return route.path.startsWith(href)
}
</script>

<template>
  <header class="md:hidden border-b border-border bg-panel-2">
    <div class="flex items-center justify-between px-4 pt-3 pb-2">
      <NuxtLink to="/" class="flex items-center gap-2 text-sm no-underline min-w-0">
        <span class="text-magenta">ananya</span>
        <span class="text-dim">@</span>
        <span class="text-cyan">purdue</span>
        <span class="text-dim">:</span>
        <span class="text-yellow">~</span>
        <span class="text-green">$</span>
      </NuxtLink>
      <button
        type="button"
        class="shrink-0 -mr-1 w-8 h-8 flex items-center justify-center rounded text-muted hover:text-cyan transition-colors"
        :aria-label="`switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        @click="toggleTheme"
      >
        <span class="text-base">{{ theme === 'dark' ? '☾' : '☀' }}</span>
      </button>
    </div>
    <nav class="flex items-center gap-4 overflow-x-auto px-4 pb-2 text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <NuxtLink
        v-for="link in links"
        :key="link.href"
        :to="link.href"
        class="shrink-0 no-underline whitespace-nowrap hover:text-cyan"
        :class="[isActive(link.href) ? 'text-cyan' : 'text-muted']"
      >{{ link.label }}</NuxtLink>
    </nav>
  </header>
</template>
