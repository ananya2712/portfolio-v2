<script setup lang="ts">
defineProps<{
  cmd: string
  cwd?: string
}>()
</script>

<template>
  <!-- Section divider: kept small and dim so card headings carry the hierarchy. -->
  <div class="flex items-baseline gap-1.5 mt-10 mb-2 text-xs md:text-sm flex-wrap text-dim">
    <span>ananya@purdue:{{ cwd ?? '~' }}$</span>
    <span class="text-green">{{ cmd }}</span>
  </div>
</template>
