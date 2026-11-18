<script setup lang="ts">
const {
  label = 'note',
  tone = 'note',
  id,
  title,
  org,
  dates,
  location,
  link,
  tags,
} = defineProps<{
  label?: string
  tone?: 'note' | 'warn' | 'info' | 'success'
  id?: string
  /** Entry mode: role / project / paper title shown as the card heading. */
  title?: string
  /** Company, lab, venue or context, shown next to the title in the tone color. */
  org?: string
  /** Date range, right-aligned in the header. */
  dates?: string
  /** Optional second line under the title (city, advisor, team size…). */
  location?: string
  /** Optional external link (GitHub, paper) shown as a small button. */
  link?: string
  /** Comma-separated (or array) tech / topic chips shown under the body. */
  tags?: string | string[]
}>()

const toneColor: Record<string, string> = {
  note: 'text-yellow',
  warn: 'text-red',
  info: 'text-cyan',
  success: 'text-green',
}

const toneBorder: Record<string, string> = {
  note: 'border-l-yellow',
  warn: 'border-l-red',
  info: 'border-l-cyan',
  success: 'border-l-green',
}

const tagList = computed(() => {
  if (!tags) return []
  const list = Array.isArray(tags) ? tags : tags.split(',')
  return list.map(t => t.trim()).filter(Boolean)
})

const linkLabel = computed(() => {
  if (!link) return ''
  if (link.includes('github.com')) return 'github'
  if (link.includes('springer')) return 'paper'
  return 'link'
})
</script>

<template>
  <!-- Entry mode: title / org / dates header -->
  <div
    v-if="title"
    :id="id"
    :class="['group my-5 border border-border border-l-2 bg-panel rounded-md overflow-hidden scroll-mt-20', toneBorder[tone]]"
  >
    <div class="not-prose px-4 md:px-5 pt-4 pb-3 border-b border-border bg-panel-2">
      <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 class="text-text text-base md:text-lg font-semibold leading-snug tracking-tight">
          {{ title }}<span v-if="org" class="font-normal text-dim"> · </span><span v-if="org" :class="['font-medium', toneColor[tone]]">{{ org }}</span>
        </h3>
        <span v-if="dates" class="ml-auto text-sm text-muted whitespace-nowrap tabular-nums">{{ dates }}</span>
      </div>
      <div v-if="location || link" class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
        <span v-if="location" class="text-sm text-dim">{{ location }}</span>
        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener"
          class="ml-auto text-xs px-2 py-0.5 rounded border border-border text-cyan hover:border-cyan hover:bg-cyan/10 no-underline transition-colors"
        >{{ linkLabel }} ↗</a>
      </div>
    </div>
    <div class="callout-body px-4 md:px-5 py-3 text-sm md:text-[15px] text-muted leading-7">
      <slot />
    </div>
    <div v-if="tagList.length" class="not-prose px-4 md:px-5 pb-4 flex flex-wrap gap-1.5">
      <span
        v-for="t in tagList"
        :key="t"
        class="text-xs px-2 py-0.5 rounded border border-border bg-bg/40 text-dim"
      >{{ t }}</span>
    </div>
  </div>

  <!-- Label mode: original bracketed header (home "currently", beyond) -->
  <div v-else :id="id" class="group my-4 border border-border bg-panel rounded-md overflow-hidden scroll-mt-20">
    <div :class="['px-4 py-2 text-sm font-semibold border-b border-border bg-panel-2 flex items-center gap-2', toneColor[tone]]">
      <span>[ {{ label }} ]</span>
      <a v-if="id" :href="`#${id}`" class="ml-auto text-dim hover:text-cyan no-underline opacity-0 group-hover:opacity-100">#</a>
    </div>
    <div class="px-4 py-3 text-sm md:text-[15px] text-muted leading-7">
      <slot />
    </div>
  </div>
</template>
