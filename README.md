# portfolio

Personal site for Ananya Uppal — terminal-styled, Notion-structured.

## Stack

- [Nuxt 4](https://nuxt.com) (Vue 3 + Nitro)
- [@nuxt/content v3](https://content.nuxt.com) — markdown-driven pages, MDC components
- [Tailwind CSS](https://tailwindcss.com) — CSS-variable theme tokens
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — monospace everywhere
- TypeScript (strict), better-sqlite3 (content index)

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build → .output/
npm run preview    # preview the built site locally
```

Requires Node 22+ (Node 24 recommended; switch with `nvm use 24`).

## Layout

```
app/
├─ app.vue                          mounts layout + page, hydrates theme
├─ layouts/default.vue              sidebar + breadcrumb + main + footer shell
├─ assets/css/tailwind.css          theme variables (dark + light), prose styles
├─ components/terminal/
│  ├─ Sidebar.vue                   file-tree nav, ⌘K + theme buttons
│  ├─ MobileHeader.vue              condensed nav for narrow viewports
│  ├─ Breadcrumb.vue                ~/path/file.md with persistent ⌘K trigger
│  ├─ Prompt.vue                    ananya@purdue:~$ <cmd> blocks
│  ├─ Callout.vue                   [ label ] bordered card with tone
│  ├─ Toggle.vue                    collapsible details block
│  └─ CommandPalette.vue            teleported ⌘K modal
├─ composables/
│  ├─ useNav.ts                     sidebar tree + flat searchable list
│  ├─ useCommandPalette.ts          open/close/toggle state
│  └─ useTheme.ts                   dark ↔ light with localStorage persistence
└─ pages/
   ├─ index.vue                     home / about
   ├─ writing/index.vue             writing index (currently WIP placeholder)
   └─ [...slug].vue                 catch-all renderer for content/*.md

content/
├─ experience.md, research.md, projects.md, beyond.md
└─ writing/                         blog posts land here (none live yet)

public/
├─ favicon.svg                      cute black cat
├─ resume.pdf, resume_picture.jpg

tailwind.config.ts                  colors aliased to CSS variables
nuxt.config.ts                      head config + FOUC-prevention theme script
content.config.ts                   collection schema with optional date/tags
```

## Editing

- **Roles / experience / research / projects / beyond** — edit the corresponding `content/*.md`. Each role is a `::terminal-callout{...}` block.
- **Home page copy** (whoami, role chips, callout body, highlight cards) — `app/pages/index.vue`.
- **Sidebar nav structure** — `app/composables/useNav.ts` (it feeds both the sidebar tree and the ⌘K palette).
- **Theme colors** — `app/assets/css/tailwind.css`, the `:root` (dark) and `:root.theme-light` blocks. Each color is an `R G B` triplet referenced via `rgb(var(--c-x) / <alpha-value>)`.

### Add a blog post

Drop a markdown file in `content/writing/`:

```md
---
title: 'post title'
subtitle: optional one-liner
date: 2026-05-27
tags: [optional, tags]
---

# heading

content goes here. you can use any MDC component, e.g.:

::terminal-callout{label="note" tone="note"}
This is a callout inside markdown.
::
```

It'll appear automatically on `/writing` (sorted by `date` desc) and be readable at `/writing/<filename-without-extension>`.

## Deploy

Vercel auto-detects Nuxt. Push to `main` → Vercel rebuilds. See the project's Vercel dashboard for the live URL.
