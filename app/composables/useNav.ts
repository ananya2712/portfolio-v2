export type NavLeaf = { kind: 'file'; label: string; href: string }
export type NavTree = { kind: 'dir'; label: string; href: string; children: NavLeaf[] }
export type NavNode = NavLeaf | NavTree

export type ExternalLink = { label: string; href: string; hint?: string }

export type CmdItem = {
  title: string
  hint?: string
  href: string
  group: 'pages' | 'sections' | 'external'
  external?: boolean
}

const navTree: NavNode[] = [
  { kind: 'file', label: 'about.md', href: '/' },
  {
    kind: 'dir',
    label: 'experience/',
    href: '/experience',
    children: [
      { kind: 'file', label: 'leen.md', href: '/experience#leen' },
      { kind: 'file', label: 'palo-alto.md', href: '/experience#palo-alto' },
      { kind: 'file', label: 'nasdaq.md', href: '/experience#nasdaq' },
      { kind: 'file', label: 'purdue-ta.md', href: '/experience#purdue-ta' },
    ],
  },
  {
    kind: 'dir',
    label: 'research/',
    href: '/research',
    children: [
      { kind: 'file', label: 'thesis.md', href: '/research#thesis' },
      { kind: 'file', label: 'ccce23.md', href: '/research#ccce23' },
      { kind: 'file', label: 'isda22.md', href: '/research#isda22' },
    ],
  },
  {
    kind: 'dir',
    label: 'projects/',
    href: '/projects',
    children: [
      { kind: 'file', label: 'peroxide-ml.md', href: '/projects#peroxide-ml' },
      { kind: 'file', label: 'tweet-sent.md', href: '/projects#tweet-sent' },
    ],
  },
  { kind: 'dir', label: 'writing/', href: '/writing', children: [] },
  { kind: 'file', label: 'beyond.md', href: '/beyond' },
]

const externalLinks: ExternalLink[] = [
  { label: 'resume', href: '/Ananya_Uppal_Resume.pdf', hint: 'open resume in new tab' },
  { label: 'github', href: 'https://github.com/ananya2712', hint: 'github.com/ananya2712' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/ananya-uppal-a40915214/', hint: 'linkedin profile' },
  { label: 'email', href: 'mailto:ananya.uppal.in@gmail.com', hint: 'ananya.uppal.in@gmail.com' },
]

function isExternal(href: string): boolean {
  return /^(https?:|mailto:)/.test(href) || href.endsWith('.pdf')
}

export function useNav() {
  const allItems = computed<CmdItem[]>(() => {
    const items: CmdItem[] = []
    for (const node of navTree) {
      const isHome = node.href === '/'
      items.push({
        title: isHome ? 'about' : node.label.replace(/\/$/, ''),
        hint: isHome ? 'home · landing page' : node.href,
        href: node.href,
        group: 'pages',
      })
      if (node.kind === 'dir') {
        for (const child of node.children) {
          items.push({
            title: `${node.label.replace(/\/$/, '')} · ${child.label.replace(/\.md$/, '')}`,
            hint: child.href,
            href: child.href,
            group: 'sections',
          })
        }
      }
    }
    for (const ext of externalLinks) {
      items.push({
        title: ext.label,
        hint: ext.hint,
        href: ext.href,
        group: 'external',
        external: true,
      })
    }
    return items
  })

  return { navTree, externalLinks, allItems, isExternal }
}
