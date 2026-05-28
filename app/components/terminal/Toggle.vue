<script setup lang="ts">
defineProps<{
  summary: string
  open?: boolean
}>()
</script>

<template>
  <details class="group my-3 border-l-2 border-border pl-3 hover:border-dim transition-colors" :open="open">
    <summary class="cursor-pointer list-none flex items-center gap-2 text-sm select-none">
      <span class="text-dim group-open:hidden">▸</span>
      <span class="text-dim hidden group-open:inline">▾</span>
      <span class="text-blue group-hover:text-cyan transition-colors">{{ summary }}</span>
    </summary>
    <div class="mt-2 pl-5 text-sm text-muted leading-relaxed">
      <slot />
    </div>
  </details>
</template>
