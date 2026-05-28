import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.md',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        'panel-2': 'rgb(var(--c-panel-2) / <alpha-value>)',
        border: 'rgb(var(--c-border) / <alpha-value>)',
        text: 'rgb(var(--c-text) / <alpha-value>)',
        dim: 'rgb(var(--c-dim) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        cyan: 'rgb(var(--c-cyan) / <alpha-value>)',
        green: 'rgb(var(--c-green) / <alpha-value>)',
        magenta: 'rgb(var(--c-magenta) / <alpha-value>)',
        yellow: 'rgb(var(--c-yellow) / <alpha-value>)',
        red: 'rgb(var(--c-red) / <alpha-value>)',
        blue: 'rgb(var(--c-blue) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
        sans: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '48rem',
      },
    },
  },
}
