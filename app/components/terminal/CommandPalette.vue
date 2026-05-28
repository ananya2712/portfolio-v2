<script setup lang="ts">
import type { CmdItem } from '~/composables/useNav'

const { isOpen, open, close } = useCommandPalette()
const { allItems, isExternal } = useNav()
const router = useRouter()

const query = ref('')
const selected = ref(0)
const inputEl = ref<HTMLInputElement | null>(null)

const filtered = computed<CmdItem[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return allItems.value
  return allItems.value.filter((item) => {
    const hay = `${item.title} ${item.hint ?? ''} ${item.href}`.toLowerCase()
    return q.split(/\s+/).every(token => hay.includes(token))
  })
})

const grouped = computed(() => {
  const groups: Record<CmdItem['group'], CmdItem[]> = {
    pages: [],
    sections: [],
    external: [],
  }
  for (const item of filtered.value) groups[item.group].push(item)
  return groups
})

const flat = computed<CmdItem[]>(() => [
  ...grouped.value.pages,
  ...grouped.value.sections,
  ...grouped.value.external,
])

watch(filtered, () => { selected.value = 0 })
watch(isOpen, async (val) => {
  if (val) {
    query.value = ''
    selected.value = 0
    await nextTick()
    inputEl.value?.focus()
  }
})

function activate(item: CmdItem): void {
  close()
  if (item.external || isExternal(item.href)) {
    if (item.href.startsWith('mailto:')) {
      window.location.href = item.href
    } else {
      window.open(item.href, '_blank', 'noopener')
    }
    return
  }
  router.push(item.href)
}

function onKeydown(e: KeyboardEvent): void {
  const isMac = typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  const cmdKey = isMac ? e.metaKey : e.ctrlKey
  if (cmdKey && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault()
    isOpen.value ? close() : open()
    return
  }
  if (!isOpen.value) return
  if (e.key === 'Escape') { e.preventDefault(); close(); return }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selected.value = Math.min(selected.value + 1, flat.value.length - 1)
    return
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    selected.value = Math.max(selected.value - 1, 0)
    return
  }
  if (e.key === 'Enter') {
    e.preventDefault()
    const item = flat.value[selected.value]
    if (item) activate(item)
  }
}

onMounted(() => { window.addEventListener('keydown', onKeydown) })
onBeforeUnmount(() => { window.removeEventListener('keydown', onKeydown) })

function indexOf(item: CmdItem): number {
  return flat.value.indexOf(item)
}

const groupLabel: Record<CmdItem['group'], string> = {
  pages: 'pages',
  sections: 'sections',
  external: 'links',
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 md:pt-32 bg-bg/70 backdrop-blur-sm"
        @click.self="close"
      >
        <div class="w-full max-w-xl border border-border bg-panel-2 rounded-lg shadow-2xl overflow-hidden">
          <div class="flex items-center gap-2 border-b border-border px-4 py-3">
            <span class="text-green font-medium select-none">&gt;</span>
            <input
              ref="inputEl"
              v-model="query"
              class="flex-1 bg-transparent outline-none border-none text-text placeholder:text-dim font-mono text-sm"
              placeholder="run command… type to filter"
              autocomplete="off"
              spellcheck="false"
            />
            <kbd class="px-1.5 py-0.5 rounded border border-border bg-bg text-dim text-[10px]">esc</kbd>
          </div>

          <div class="max-h-[60vh] overflow-y-auto py-2">
            <template v-for="group in (['pages', 'sections', 'external'] as const)" :key="group">
              <div v-if="grouped[group].length">
                <div class="px-4 pt-3 pb-1 text-[10px] uppercase tracking-wider text-dim">
                  {{ groupLabel[group] }}
                </div>
                <ul>
                  <li
                    v-for="item in grouped[group]"
                    :key="item.href + item.title"
                    :class="[
                      'flex items-center gap-3 px-4 py-2 cursor-pointer text-sm transition-colors',
                      indexOf(item) === selected ? 'bg-panel text-cyan' : 'text-text hover:bg-panel/60',
                    ]"
                    @click="activate(item)"
                    @mouseenter="selected = indexOf(item)"
                  >
                    <span class="text-dim select-none">
                      {{ group === 'pages' ? '▸' : group === 'sections' ? '·' : '↗' }}
                    </span>
                    <span class="truncate">{{ item.title }}</span>
                    <span v-if="item.hint" class="ml-auto text-dim text-xs truncate max-w-[40%]">{{ item.hint }}</span>
                  </li>
                </ul>
              </div>
            </template>

            <div v-if="!flat.length" class="px-4 py-8 text-center text-sm text-dim">
              command not found: <span class="text-magenta">{{ query }}</span>
            </div>
          </div>

          <div class="flex items-center gap-3 border-t border-border px-4 py-2 text-[11px] text-dim">
            <span><kbd class="px-1 rounded border border-border bg-bg">↑</kbd> <kbd class="px-1 rounded border border-border bg-bg">↓</kbd> move</span>
            <span><kbd class="px-1 rounded border border-border bg-bg">↵</kbd> open</span>
            <span><kbd class="px-1 rounded border border-border bg-bg">esc</kbd> close</span>
            <span class="ml-auto">{{ flat.length }} result{{ flat.length === 1 ? '' : 's' }}</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
