<script setup lang="ts">
const route = useRoute()
const { navTree: tree } = useNav()
const { open: openPalette } = useCommandPalette()
const { theme, toggle: toggleTheme } = useTheme()
const { collapsed, width, toggle: toggleSidebar, setWidth } = useSidebar()

const isResizing = ref(false)

function isActive(href: string): boolean {
  const base = href.split('#')[0]
  if (base === '/') return route.path === '/'
  return route.path.startsWith(base)
}

function startResize(e: MouseEvent): void {
  e.preventDefault()
  isResizing.value = true
  document.body.style.cursor = 'col-resize'
  document.body.style.userSelect = 'none'

  function onMove(ev: MouseEvent): void {
    setWidth(ev.clientX)
  }
  function onUp(): void {
    isResizing.value = false
    document.body.style.cursor = ''
    document.body.style.userSelect = ''
    window.removeEventListener('mousemove', onMove)
    window.removeEventListener('mouseup', onUp)
  }
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', onUp)
}

function onResizeKey(e: KeyboardEvent): void {
  if (e.key === 'ArrowLeft') { e.preventDefault(); setWidth(width.value - 16) }
  if (e.key === 'ArrowRight') { e.preventDefault(); setWidth(width.value + 16) }
}
</script>

<template>
  <!-- COLLAPSED: thin strip -->
  <aside
    v-if="collapsed"
    class="hidden md:flex w-12 shrink-0 flex-col items-center border-r border-border bg-panel-2 py-3 gap-2"
  >
    <button
      type="button"
      class="w-8 h-8 flex items-center justify-center rounded hover:bg-panel text-muted hover:text-cyan transition-colors"
      title="Expand sidebar"
      aria-label="Expand sidebar"
      @click="toggleSidebar"
    >
      <span class="text-base">⟩</span>
    </button>
    <div class="w-6 h-px bg-border my-1" />
    <button
      type="button"
      class="w-8 h-8 flex items-center justify-center rounded hover:bg-panel text-muted hover:text-cyan transition-colors"
      title="Open command palette (⌘K)"
      aria-label="Open command palette"
      @click="openPalette"
    >
      <span class="text-sm">⌘</span>
    </button>
    <button
      type="button"
      class="w-8 h-8 flex items-center justify-center rounded hover:bg-panel text-muted hover:text-cyan transition-colors"
      :title="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
      :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
      @click="toggleTheme"
    >
      <span class="text-sm">{{ theme === 'dark' ? '☾' : '☀' }}</span>
    </button>
  </aside>

  <!-- EXPANDED: full sidebar with resize handle -->
  <aside
    v-else
    class="hidden md:flex relative shrink-0 flex-col border-r border-border bg-panel-2 text-sm overflow-hidden"
    :style="{ width: width + 'px' }"
  >
    <div class="px-4 pt-5 pb-4 pr-12 border-b border-border">
      <NuxtLink to="/" class="inline-flex items-center gap-2 font-medium no-underline">
        <span class="text-magenta">ananya</span>
        <span class="text-dim">@</span>
        <span class="text-cyan">purdue</span>
        <span class="text-dim">:</span>
        <span class="text-yellow">~</span>
        <span class="text-text">$</span>
      </NuxtLink>
      <div class="mt-1 text-dim text-xs">portfolio · v2</div>
    </div>
    <button
      type="button"
      class="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded border border-transparent bg-panel-2 hover:bg-panel hover:border-border text-dim hover:text-cyan transition-colors"
      title="Collapse sidebar"
      aria-label="Collapse sidebar"
      @click="toggleSidebar"
    >
      <span class="text-base leading-none">⟨</span>
    </button>

    <nav class="flex-1 overflow-y-auto overflow-x-hidden px-3 py-4">
      <div class="text-dim text-xs px-2 mb-2">▾ ~/</div>
      <ul class="space-y-0.5">
        <template v-for="(node, i) in tree" :key="node.href">
          <li v-if="node.kind === 'file'">
            <NuxtLink
              :to="node.href"
              class="group flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline hover:bg-panel whitespace-nowrap"
              :class="[isActive(node.href) && 'bg-panel text-cyan']"
            >
              <span class="text-dim select-none">{{ i === tree.length - 1 ? '└──' : '├──' }}</span>
              <span class="truncate" :class="[isActive(node.href) ? 'text-cyan' : 'text-text', 'group-hover:text-cyan']">{{ node.label }}</span>
              <span v-if="isActive(node.href)" class="ml-auto text-green text-xs">*</span>
            </NuxtLink>
          </li>
          <li v-else>
            <NuxtLink
              :to="node.href"
              class="group flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline hover:bg-panel whitespace-nowrap"
              :class="[isActive(node.href) && 'bg-panel text-magenta']"
            >
              <span class="text-dim select-none">{{ i === tree.length - 1 ? '└──' : '├──' }}</span>
              <span class="truncate" :class="[isActive(node.href) ? 'text-magenta' : 'text-blue', 'group-hover:text-magenta']">{{ node.label }}</span>
              <span v-if="isActive(node.href)" class="ml-auto text-green text-xs">*</span>
            </NuxtLink>
            <ul v-if="node.children.length && isActive(node.href)" class="ml-6 mt-0.5 space-y-0.5 border-l border-border pl-3">
              <li v-for="(child, j) in node.children" :key="child.href">
                <NuxtLink
                  :to="child.href"
                  class="flex items-center gap-2 px-2 py-0.5 rounded transition-colors no-underline text-xs text-muted hover:bg-panel hover:text-cyan whitespace-nowrap"
                >
                  <span class="text-dim select-none">{{ j === node.children.length - 1 ? '└──' : '├──' }}</span>
                  <span class="truncate">{{ child.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </template>
      </ul>

      <div class="text-dim text-xs px-2 mt-6 mb-2">▾ .config/</div>
      <ul class="space-y-0.5">
        <li>
          <a href="/Ananya_Uppal_Resume.pdf" target="_blank" rel="noopener" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan whitespace-nowrap">
            <span class="text-dim select-none">├──</span><span class="truncate">resume</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/ananya2712" target="_blank" rel="noopener" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan whitespace-nowrap">
            <span class="text-dim select-none">├──</span><span class="truncate">github</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ananya-uppal-a40915214/" target="_blank" rel="noopener" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan whitespace-nowrap">
            <span class="text-dim select-none">├──</span><span class="truncate">linkedin</span>
          </a>
        </li>
        <li>
          <a href="mailto:ananya.uppal.in@gmail.com" class="flex items-center gap-2 px-2 py-1 rounded transition-colors no-underline text-text hover:bg-panel hover:text-cyan whitespace-nowrap">
            <span class="text-dim select-none">└──</span><span class="truncate">email</span>
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
        <span class="truncate">run command…</span>
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
        <span class="truncate">theme · <span class="text-cyan">{{ theme === 'dark' ? 'tokyo-night' : 'tokyo-day' }}</span></span>
      </button>
    </div>

    <!-- Resize handle (right edge) -->
    <div
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize sidebar"
      tabindex="0"
      :class="[
        'absolute top-0 right-0 h-full w-1.5 cursor-col-resize transition-colors',
        isResizing ? 'bg-cyan/60' : 'bg-transparent hover:bg-cyan/40',
      ]"
      @mousedown="startResize"
      @keydown="onResizeKey"
    />
  </aside>
</template>
