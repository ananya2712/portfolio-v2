<script setup lang="ts">
useHead({
  title: 'Ananya Uppal · AI & Cybersecurity',
})

const { externalLinks, isExternal } = useNav()

// Skills from the engineering resume, plus tools shown in projects on this site / GitHub.
const skills = [
  { group: 'languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C/C++', 'Ruby', 'R', 'MATLAB', 'SAS'] },
  { group: 'frontend', items: ['React.js', 'Next.js', 'Vue / Nuxt', 'HTML/CSS', 'Tailwind CSS', 'Streamlit', 'R Shiny'] },
  { group: 'backend / data', items: ['Flask', 'Django', 'REST API development', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { group: 'cloud / devops', items: ['AWS', 'GCP', 'Docker', 'Linux', 'Git', 'Jenkins'] },
  { group: 'ai / llm', items: ['LLMs', 'GenAI', 'prompt engineering', 'LLM agents', 'tool calling', 'evals'] },
  { group: 'ml / big data', items: ['responsible ML/AI', 'scikit-learn', 'XGBoost', 'Spark / PySpark', 'Hadoop', 'Shapley values', 'DataScope', 'CleanLab'] },
  { group: 'security / testing', items: ['test automation', 'pytest', 'Selenium', 'OSINT', 'threat intel', 'PAN-OS / NGFW'] },
]
</script>

<template>
  <div>
    <h1 class="text-3xl md:text-5xl font-semibold tracking-tight text-magenta mb-2 cursor inline-block">Ananya Uppal</h1>
    <p class="text-muted text-sm md:text-base mb-2">applied ai · cybersecurity · purdue m.s. '26</p>

    <div class="flex flex-wrap gap-2 mt-4">
      <a
        v-for="(l, i) in externalLinks"
        :key="l.label"
        :href="l.href"
        :target="isExternal(l.href) && !l.href.startsWith('mailto:') ? '_blank' : undefined"
        :rel="isExternal(l.href) && !l.href.startsWith('mailto:') ? 'noopener' : undefined"
        :title="l.hint"
        :class="[
          'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-sm font-medium no-underline transition-colors',
          i === 0
            ? 'border-magenta bg-magenta/15 text-magenta hover:bg-magenta/25'
            : 'border-border bg-panel text-text hover:border-cyan hover:text-cyan',
        ]"
      >{{ l.label }}<span class="text-xs opacity-70">{{ i === 0 ? '↓' : '↗' }}</span></a>
    </div>
    <div class="h-px bg-border my-6" />

    <TerminalPrompt cmd="whoami" />
    <div class="space-y-1 text-sm md:text-base text-muted pl-2">
      <p>
        <span class="text-dim">&gt;</span>
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded bg-magenta/15 text-magenta font-semibold border border-magenta/30">
          <span class="text-magenta/70">▌</span> MS CIT
        </span>
        @ <span class="text-cyan">purdue university</span> · gpa 4.0 / 4.0 · completed aug 2026
      </p>
      <p>
        <span class="text-dim">&gt;</span> status
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded bg-yellow/15 text-yellow font-semibold border border-yellow/30">
          <span class="text-yellow/70">▌</span> available now
        </span>
        · open to full-time roles
      </p>
      <p><span class="text-dim">&gt;</span> focus: llm agents &amp; applied ai, data quality in ml pipelines, cybersecurity</p>
    </div>

    <TerminalPrompt cmd="cat roles_of_interest.txt" />
    <div class="flex flex-wrap gap-2 mt-3 pl-2">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Software Engineer (ML / Backend)
      </span>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Applied AI / Research Engineer 
      </span>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Security Engineer (Product / AppSec)
      </span>
    </div>

    <TerminalPrompt cmd="cat summary.txt" />
    <TerminalCallout title="Summary" org="1.5 yrs industry · M.S. Purdue '26" tone="note">
      <p>Software engineer working across <strong class="text-text">applied AI, ML data quality and security</strong>. I like systems that are measured, tested and ready to ship.</p>
      <ul class="mt-3 space-y-2">
        <li class="flex gap-2"><span class="text-dim shrink-0">─</span><span><strong class="text-text">Palo Alto Networks</strong> · Software Engineer, NGFW team · Jenkins test pipelines across VM and hardware firewalls (code coverage 23% → 78%), certificate test suite across 8 PAN-OS releases and ~12M devices</span></li>
        <li class="flex gap-2"><span class="text-dim shrink-0">─</span><span><strong class="text-text">Purdue</strong> · M.S. thesis on <NuxtLink to="/research#thesis">data valuation for ML data-quality repair</NuxtLink> · TA for 4 semesters across 3 courses</span></li>
        <li class="flex gap-2"><span class="text-dim shrink-0">─</span><span><strong class="text-text">Internships</strong> · Leen (2025, GRC data connectors) · Nasdaq (2022, blockchain performance analysis)</span></li>
      </ul>
    </TerminalCallout>

    <TerminalPrompt cmd="cat skills.json" />
    <div class="border border-border bg-panel rounded-md px-4 md:px-5 py-4 space-y-3">
      <div v-for="g in skills" :key="g.group" class="flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-4">
        <div class="text-sm text-cyan md:w-40 shrink-0 whitespace-nowrap">"{{ g.group }}"</div>
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="item in g.items"
            :key="item"
            class="text-xs md:text-sm px-2 py-0.5 rounded border border-border bg-bg/40 text-muted"
          >{{ item }}</span>
        </div>
      </div>
    </div>

    <TerminalPrompt cmd="cat education.md" />
    <TerminalCallout id="purdue" title="M.S. Computer &amp; Information Technology" org="Purdue University" dates="Fall 2024 – Summer 2026" location="West Lafayette, IN · GPA 4.0 / 4.0" tone="success" tags="responsible data science, it data analytics, hci, research methods, ai, social engineering &amp; cybersecurity">
      <p>Thesis in the <strong class="text-text">Responsible Data Science (RDS) Lab</strong> with Dr. Romila Pradhan: <NuxtLink to="/research#thesis">data valuation techniques to detect and repair data quality issues in ML pipelines</NuxtLink>.</p>
    </TerminalCallout>
    <TerminalCallout id="pes" title="B.Tech Computer Science &amp; Engineering" org="PES University" dates="Fall 2019 – Spring 2023" location="Bengaluru, India · GPA 9.06 / 10" tone="success" tags="big data, natural language processing, information retrieval, network analysis, dbms, object-oriented design">
      <p>6-time <strong class="text-text">MRD Scholar</strong> — 40% tuition waiver for the top 20% of students.</p>
      <p class="mt-2">Club member of <strong class="text-text">ACM-Women</strong> and <strong class="text-text">The Changemaker's Society</strong> — organised and mentored 3 hackathons/ideathons.</p>
    </TerminalCallout>

    <TerminalPrompt cmd="ls -la ./about" />
    <TerminalToggle summary="about_me.md">
      <p>I completed my M.S. in Computer &amp; Information Technology at <strong class="text-text">Purdue University</strong>, West Lafayette, in August 2026. As a member of the <strong class="text-text">Responsible Data Science (RDS) Lab</strong>, my thesis work with Dr. Romila Pradhan focused on how data-valuation techniques can detect and repair data-quality issues in machine-learning pipelines.</p>
      <p class="mt-3">I was a <strong class="text-text">Graduate Teaching Assistant</strong> for four semesters across three courses — CNIT 323: Basic Cyberforensics, CNIT 392: Enterprise Data Management, and CNIT 175: Introduction to Visual Programming. Before Purdue, I spent a year as a <strong class="text-text">Software Engineer at Palo Alto Networks</strong> on the Next-Generation Firewall team, and interned at <strong class="text-text">Leen</strong>, <strong class="text-text">Nasdaq</strong>, and Palo Alto Networks. That mix of research and production engineering shapes how I work: rigorously, but with an eye on what actually ships.</p>
    </TerminalToggle>

    <TerminalToggle summary="beyond_work.md">
      <p>Away from the screen, I'm a classically trained <strong class="text-text">Hindustani Classical vocalist</strong> and sang with the band <em class="text-cyan not-italic">Tin Pan Alley</em> during my undergrad. I also love films and travelling.</p>
    </TerminalToggle>

    <TerminalPrompt cmd="ls ~/" />
    <div class="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-3 mt-3">
      <NuxtLink to="/experience" class="group border border-border bg-panel hover:border-cyan hover:bg-panel-2 rounded-md p-4 transition-colors no-underline">
        <div class="flex items-center justify-between">
          <span class="text-blue group-hover:text-cyan">experience/</span>
          <span class="text-dim group-hover:text-cyan">→</span>
        </div>
        <div class="text-muted text-sm mt-1">leen · palo alto networks · nasdaq · purdue</div>
      </NuxtLink>
      <NuxtLink to="/research" class="group border border-border bg-panel hover:border-cyan hover:bg-panel-2 rounded-md p-4 transition-colors no-underline">
        <div class="flex items-center justify-between">
          <span class="text-blue group-hover:text-cyan">research/</span>
          <span class="text-dim group-hover:text-cyan">→</span>
        </div>
        <div class="text-muted text-sm mt-1">thesis + ccce'23 + isda'22</div>
      </NuxtLink>
      <NuxtLink to="/projects" class="group border border-border bg-panel hover:border-cyan hover:bg-panel-2 rounded-md p-4 transition-colors no-underline">
        <div class="flex items-center justify-between">
          <span class="text-blue group-hover:text-cyan">projects/</span>
          <span class="text-dim group-hover:text-cyan">→</span>
        </div>
        <div class="text-muted text-sm mt-1">llm agents · scam osint · ml pipelines</div>
      </NuxtLink>
      <NuxtLink to="/writing" class="group border border-border bg-panel hover:border-cyan hover:bg-panel-2 rounded-md p-4 transition-colors no-underline">
        <div class="flex items-center justify-between">
          <span class="text-blue group-hover:text-cyan">writing/</span>
          <span class="text-dim group-hover:text-cyan">→</span>
        </div>
        <div class="text-muted text-sm mt-1">technical notes on ai &amp; security</div>
      </NuxtLink>
    </div>

    <TerminalPrompt cmd="exit" />
    <p class="text-dim text-sm pl-2">logout · press <span class="text-cyan">⌘K</span> to jump anywhere</p>
  </div>
</template>
