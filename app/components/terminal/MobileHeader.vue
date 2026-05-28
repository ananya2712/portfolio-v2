<script setup lang="ts">
const route = useRoute()
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
  <header class="md:hidden flex items-center justify-between border-b border-border bg-panel-2 px-4 py-3">
    <NuxtLink to="/" class="flex items-center gap-2 text-sm no-underline">
      <span class="text-magenta">ananya</span>
      <span class="text-dim">@</span>
      <span class="text-cyan">purdue</span>
      <span class="text-dim">:</span>
      <span class="text-yellow">~</span>
      <span class="text-green">$</span>
    </NuxtLink>
    <nav class="flex items-center gap-3 text-xs">
      <NuxtLink
        v-for="link in links"
        :key="link.href"
        :to="link.href"
        class="no-underline hover:text-cyan"
        :class="[isActive(link.href) ? 'text-cyan' : 'text-muted']"
      >{{ link.label }}</NuxtLink>
    </nav>
  </header>
</template>
