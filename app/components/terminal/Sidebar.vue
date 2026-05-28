<script setup lang="ts">
const route = useRoute()
const { navTree: tree } = useNav()
const { open: openPalette } = useCommandPalette()
const { theme, toggle: toggleTheme } = useTheme()

function isActive(href: string): boolean {
  const base = href.split('#')[0]
  if (base === '/') return route.path === '/'
  return route.path.startsWith(base)
}
</script>

<template>
  <aside class="hidden md:flex md:w-72 lg:w-80 shrink-0 flex-col border-r border-border bg-panel-2 text-sm">
    <div class="px-4 pt-5 pb-4 border-b border-border">
      <NuxtLink to="/" class="flex items-center gap-2 font-medium no-underline">
        <span class="text-magenta">ananya</span>
        <span class="text-dim">@</span>
        <span class="text-cyan">purdue</span>
        <span class="text-dim">:</span>
        <span class="text-yellow">~</span>
        <span class="text-text">$</span>
      </NuxtLink>
      <div class="mt-1 text-dim text-xs">portfolio · v2</div>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-4">
      <div class="text-dim text-xs px-2 mb-2">▾ ~/</div>
      <ul class="space-y-0.5">
        <template v-for="(node, i) in tree" :key="node.href">
          <li v-if="node.kind === 'file'">
            <NuxtLink
              :to="node.href"
              class="group flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline hover:bg-panel"
              :class="[isActive(node.href) && 'bg-panel text-cyan']"
            >
              <span class="text-dim select-none">{{ i === tree.length - 1 ? '└──' : '├──' }}</span>
              <span :class="[isActive(node.href) ? 'text-cyan' : 'text-text', 'group-hover:text-cyan']">{{ node.label }}</span>
              <span v-if="isActive(node.href)" class="ml-auto text-green text-xs">*</span>
            </NuxtLink>
          </li>
          <li v-else>
            <NuxtLink
              :to="node.href"
              class="group flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline hover:bg-panel"
              :class="[isActive(node.href) && 'bg-panel text-magenta']"
            >
              <span class="text-dim select-none">{{ i === tree.length - 1 ? '└──' : '├──' }}</span>
              <span :class="[isActive(node.href) ? 'text-magenta' : 'text-blue', 'group-hover:text-magenta']">{{ node.label }}</span>
              <span v-if="isActive(node.href)" class="ml-auto text-green text-xs">*</span>
            </NuxtLink>
            <ul v-if="node.children.length && isActive(node.href)" class="ml-6 mt-0.5 space-y-0.5 border-l border-border pl-3">
              <li v-for="(child, j) in node.children" :key="child.href">
                <NuxtLink
                  :to="child.href"
                  class="flex items-center gap-2 px-2 py-0.5 rounded transition-colors no-underline text-xs text-muted hover:bg-panel hover:text-cyan"
                >
                  <span class="text-dim select-none">{{ j === node.children.length - 1 ? '└──' : '├──' }}</span>
                  <span>{{ child.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </template>
      </ul>

      <div class="text-dim text-xs px-2 mt-6 mb-2">▾ .config/</div>
      <ul class="space-y-0.5">
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan">
            <span class="text-dim select-none">├──</span><span>resume.pdf</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ananya2712" target="_blank" rel="noopener" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan">
            <span class="text-dim select-none">├──</span><span>github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ananya-uppal-a40915214/" target="_blank" rel="noopener" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan">
            <span class="text-dim select-none">├──</span><span>linkedin</span>
          </a>
        </li>
        <li>
          <a href="mailto:ananya.uppal.in@gmail.com" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan">
            <span class="text-dim select-none">└──</span><span>email</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="border-t border-border px-4 py-3 text-xs text-dim space-y-2">
      <button
        type="button"
        class="flex w-full items-center gap-2 rounded px-1 py-1 text-left hover:bg-panel transition-colors"
        @click="openPalette"
      >
        <kbd class="px-1.5 py-0.5 rounded border border-border bg-panel text-text">⌘ K</kbd>
        <span>run command…</span>
      </button>
      <button
        type="button"
        class="flex w-full items-center gap-2 rounded px-1 py-1 text-left hover:bg-panel transition-colors"
        :aria-label="`switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
        @click="toggleTheme"
      >
        <kbd class="px-1.5 py-0.5 rounded border border-border bg-panel text-text">
          {{ theme === 'dark' ? '☾' : '☀' }}
        </kbd>
        <span>theme · <span class="text-cyan">{{ theme === 'dark' ? 'tokyo-night' : 'tokyo-day' }}</span></span>
      </button>
    </div>
  </aside>
</template>
