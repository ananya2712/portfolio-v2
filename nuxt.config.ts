export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  nitro: {
    prerender: {
      routes: ['/', '/experience', '/research', '/projects', '/beyond', '/writing'],
      crawlLinks: true,
      failOnError: false,
    },
  },
  app: {
    head: {
      title: 'Ananya Uppal · AI & Cybersecurity',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ananya Uppal — Explainable AI, cybersecurity, and machine-learning research at Purdue.' },
        { name: 'color-scheme', content: 'dark light' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/face-scan.png' },
        { rel: 'apple-touch-icon', href: '/face-scan.png' },
      ],
      script: [
        {
          innerHTML: "(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';var t=(s==='dark'||s==='light')?s:p;if(t==='light'){document.documentElement.classList.add('theme-light');}}catch(e){}})();",
          tagPosition: 'head',
        },
      ],
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~~/tailwind.config.ts',
  },
})
