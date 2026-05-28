<template>
  <div class="flex min-h-screen bg-bg text-text">
    <TerminalSidebar />
    <div class="flex flex-1 flex-col min-w-0">
      <TerminalMobileHeader />
      <TerminalBreadcrumb />
      <main class="flex-1 px-6 md:px-10 lg:px-14 py-8 w-full">
        <slot />
      </main>
      <footer class="border-t border-border px-6 md:px-10 py-4 text-xs text-dim flex flex-wrap items-center gap-4">
        <span>© 2026 ananya uppal</span>
        <span class="text-border">·</span>
        <span>built with <a href="https://nuxt.com" class="text-cyan">nuxt</a></span>
        <span class="text-border">·</span>
        <span>source: <a href="https://github.com/ananya2712" class="text-cyan">github</a></span>
      </footer>
    </div>
    <TerminalCommandPalette />
  </div>
</template>
