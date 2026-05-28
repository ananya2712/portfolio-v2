<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: page.value?.title
    ? `${page.value.title} · Ananya Uppal`
    : 'Ananya Uppal · AI & Cybersecurity',
})

const subtitle = computed(() => (page.value as { subtitle?: string } | null)?.subtitle ?? null)
</script>

<template>
  <article v-if="page">
    <header class="mb-6">
      <h1 class="text-3xl md:text-5xl font-semibold tracking-tight text-magenta mb-2 cursor inline-block">
        {{ page.title }}
      </h1>
      <p v-if="subtitle" class="text-muted text-sm md:text-base">{{ subtitle }}</p>
      <div class="h-px bg-border my-6" />
    </header>
    <div class="prose-terminal">
      <ContentRenderer :value="page" />
    </div>
  </article>
</template>
