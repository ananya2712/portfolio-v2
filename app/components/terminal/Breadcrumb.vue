<script setup lang="ts">
const route = useRoute()
const { open: openPalette } = useCommandPalette()
const segments = computed(() => {
  if (route.path === '/') return ['about.md']
  return route.path.split('/').filter(Boolean)
})
</script>

<template>
  <div class="flex items-center gap-2 border-b border-border bg-panel-2 px-4 md:px-6 py-3 text-sm">
    <div class="flex items-center gap-2 min-w-0 overflow-hidden">
      <span class="text-dim shrink-0">~/</span>
      <template v-for="(seg, i) in segments" :key="i">
        <span
          class="whitespace-nowrap"
          :class="[
            i === segments.length - 1 ? 'text-text truncate' : 'text-muted shrink-0',
          ]"
        >
          {{ seg }}{{ i === segments.length - 1 && !seg.includes('.') ? '/' : '' }}
        </span>
        <span v-if="i < segments.length - 1" class="text-dim shrink-0">/</span>
      </template>
    </div>
    <button
      type="button"
      class="ml-auto shrink-0 group flex items-center gap-2 px-2 py-1 rounded-md border border-border bg-panel hover:border-cyan transition-colors text-xs"
      @click="openPalette"
    >
      <kbd class="px-1.5 py-0.5 rounded border border-border bg-bg text-text group-hover:border-cyan group-hover:text-cyan transition-colors">⌘ K</kbd>
      <span class="text-muted group-hover:text-cyan transition-colors hidden sm:inline">jump to anything</span>
    </button>
  </div>
</template>
