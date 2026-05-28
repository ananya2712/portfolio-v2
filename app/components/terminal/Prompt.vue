<script setup lang="ts">
defineProps<{
  cmd: string
  cwd?: string
}>()
</script>

<template>
  <div class="flex items-baseline gap-2 mt-10 mb-3 text-base md:text-lg flex-wrap">
    <span class="text-magenta">ananya</span>
    <span class="text-dim">@</span>
    <span class="text-cyan">purdue</span>
    <span class="text-dim">:</span>
    <span class="text-yellow">{{ cwd ?? '~' }}</span>
    <span class="text-text">$</span>
    <span class="text-green font-semibold">{{ cmd }}</span>
  </div>
</template>
