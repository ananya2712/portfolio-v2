<script setup lang="ts">
const { label = 'note', tone = 'note', id } = defineProps<{
  label?: string
  tone?: 'note' | 'warn' | 'info' | 'success'
  id?: string
}>()

const toneColor: Record<string, string> = {
  note: 'text-yellow',
  warn: 'text-red',
  info: 'text-cyan',
  success: 'text-green',
}
</script>

<template>
  <div :id="id" class="my-4 border border-border bg-panel rounded-md overflow-hidden scroll-mt-20">
    <div :class="['px-3 py-1.5 text-xs border-b border-border bg-panel-2 flex items-center gap-2', toneColor[tone]]">
      <span>[ {{ label }} ]</span>
      <a v-if="id" :href="`#${id}`" class="ml-auto text-dim hover:text-cyan no-underline opacity-0 hover:opacity-100 group-hover:opacity-100">#</a>
    </div>
    <div class="px-4 py-3 text-sm text-muted leading-relaxed">
      <slot />
    </div>
  </div>
</template>
