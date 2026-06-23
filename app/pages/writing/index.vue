<script setup lang="ts">
useHead({ title: 'writing · Ananya Uppal' })

type Post = {
  path: string
  title?: string
  subtitle?: string
  date?: string
  tags?: string[]
}

const { data: posts } = await useAsyncData('writing-posts', () =>
  queryCollection('content')
    .where('path', 'LIKE', '/writing/%')
    .order('date', 'DESC')
    .all() as Promise<Post[]>,
)

function fmtDate(d?: string): string {
  if (!d) return ''
  const parsed = new Date(d)
  if (Number.isNaN(parsed.getTime())) return d
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}
</script>

<template>
  <article>
    <header class="mb-6">
      <h1 class="text-3xl md:text-5xl font-semibold tracking-tight text-magenta mb-2 cursor inline-block">writing</h1>
      <p class="text-muted text-sm md:text-base">technical notes on ai, ml, and cybersecurity</p>
      <div class="h-px bg-border my-6" />
    </header>

    <TerminalPrompt cmd="ls -la ./writing" />

    <div v-if="posts && posts.length" class="space-y-3 mt-3">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="group block border border-border bg-panel hover:border-cyan hover:bg-panel-2 rounded-md p-4 transition-colors no-underline"
      >
        <div class="flex items-baseline justify-between gap-3">
          <span class="text-blue group-hover:text-cyan font-medium">{{ post.title }}</span>
          <span v-if="post.date" class="text-dim text-xs whitespace-nowrap shrink-0">{{ fmtDate(post.date) }}</span>
        </div>
        <p v-if="post.subtitle" class="text-muted text-sm mt-1">{{ post.subtitle }}</p>
        <div v-if="post.tags?.length" class="flex flex-wrap gap-1.5 mt-3">
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="text-xs text-dim border border-border rounded px-1.5 py-0.5"
          >{{ tag }}</span>
        </div>
      </NuxtLink>
    </div>

    <TerminalCallout v-else label="empty" tone="warn">
      <p>no posts published yet &mdash; drafts are in flight. check back soon, or follow along on <a href="https://github.com/ananya2712">github</a>.</p>
    </TerminalCallout>

    <TerminalPrompt cmd="exit" />
    <p class="text-dim text-sm pl-2">logout &middot; press <span class="text-cyan">⌘K</span> to jump elsewhere</p>
  </article>
</template>
