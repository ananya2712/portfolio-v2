<script setup lang="ts">
useHead({ title: 'writing · Ananya Uppal' })
</script>

<template>
  <article>
    <header class="mb-6">
      <h1 class="text-2xl md:text-3xl font-medium text-magenta mb-1 cursor inline-block">writing</h1>
      <p class="text-muted text-sm md:text-base">technical notes on ai, ml, and cybersecurity</p>
      <div class="h-px bg-border my-6" />
    </header>

    <TerminalPrompt cmd="status" />
    <TerminalCallout label="under construction" tone="warn">
      <p>this section is a <strong class="text-text">work in progress</strong> &mdash; the writing infrastructure is wired up but no posts are live yet.</p>
      <p class="mt-3">drafts currently in flight:</p>
      <ul class="mt-2 space-y-1 pl-2 list-none">
        <li class="text-muted"><span class="text-dim mr-2">─</span> explainable ai &amp; interpretability methods</li>
        <li class="text-muted"><span class="text-dim mr-2">─</span> data-valuation for ml data-quality repair</li>
        <li class="text-muted"><span class="text-dim mr-2">─</span> notes from the rds lab</li>
        <li class="text-muted"><span class="text-dim mr-2">─</span> security tooling &amp; threat modeling</li>
      </ul>
      <p class="mt-3 text-dim text-xs">check back soon, or follow along on <a href="https://github.com/ananya2712">github</a>.</p>
    </TerminalCallout>

    <TerminalPrompt cmd="exit" />
    <p class="text-dim text-sm pl-2">logout &middot; press <span class="text-cyan">⌘K</span> to jump elsewhere</p>
  </article>
</template>
