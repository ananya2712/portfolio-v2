<script setup lang="ts">
useHead({
  title: 'Ananya Uppal · AI & Cybersecurity',
})
</script>

<template>
  <div>
    <h1 class="text-2xl md:text-3xl font-medium text-magenta mb-1 cursor inline-block">Ananya Uppal</h1>
    <p class="text-muted text-sm md:text-base mb-2">explainable ai · cybersecurity · purdue ms</p>
    <div class="h-px bg-border my-6" />

    <TerminalPrompt cmd="whoami" />
    <div class="space-y-1 text-sm md:text-base text-muted pl-2">
      <p>
        <span class="text-dim">&gt;</span>
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded bg-magenta/15 text-magenta font-semibold border border-magenta/30">
          <span class="text-magenta/70">▌</span> MS CIT
        </span>
        @ <span class="text-cyan">purdue university</span> · gpa 4.0 / 4.0
      </p>
      <p>
        <span class="text-dim">&gt;</span> graduating
        <span class="inline-flex items-center gap-1 px-1.5 py-0.5 mx-0.5 rounded bg-yellow/15 text-yellow font-semibold border border-yellow/30">
          <span class="text-yellow/70">▌</span> August 2026
        </span>
        · seeking full-time roles
      </p>
      <p><span class="text-dim">&gt;</span> focus: explainable ai, data-quality repair in ml pipelines, cybersecurity</p>
    </div>

    <TerminalPrompt cmd="cat roles_of_interest.txt" />
    <div class="flex flex-wrap gap-2 mt-3 pl-2">
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Software Engineer 
      </span>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Data / ML Platform Engineer
      </span>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Security Engineer
      </span>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-green/30 bg-green/10 text-green text-sm">
        <span class="text-green/70">▌</span> Data Scientist / Applied ML
      </span>
    </div>

    <TerminalPrompt cmd="cat currently.txt" />
    <TerminalCallout label="currently" tone="note">
      <p>
        One-plus year across security and data engineering — most recently a <strong class="text-text">Software Engineer at Palo Alto Networks</strong> on the Next-Generation Firewall team, where I built automated test workflows for VM- and hardware-based Panorama/Firewall devices and hardened the certificate test suite across 8 OS releases and ~12M devices in the field.
      </p>
      <p class="mt-3">
        Before that, internships at <strong class="text-text">Leen</strong> (data-science intern designing GRC connectors for ServiceNow, OneTrust, and Archer), <strong class="text-text">Nasdaq</strong> (blockchain-performance analysis of VMware Blockchain, Hyperledger Fabric/Besu, and R3 Corda using Hyperledger Caliper), and an earlier rotation at <strong class="text-text">Palo Alto Networks</strong> cutting the automation backlog by 30% with pytest, gnmic, and Selenium-driven REST APIs across 6+ PanOS releases.
      </p>
      <p class="mt-3">
        At Purdue I'm a <strong class="text-text">Graduate Teaching Assistant</strong> for CNIT 323 (Basic Cyberforensics), CNIT 392 (Enterprise Data Management), and CNIT 175 (Intro to Visual Programming). My thesis with the <strong class="text-text">RDS Lab</strong> looks at data-valuation methods for ML data-quality repair — but I'm equally focused on production systems and security tooling.
      </p>
    </TerminalCallout>

    <TerminalPrompt cmd="cat highlights.json" />
    <div class="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-3 mt-3">
      <div class="border border-border bg-panel rounded-md p-4">
        <div class="text-xs text-dim mb-1">"education"</div>
        <div class="text-text">M.S. Computer &amp; Information Technology</div>
        <div class="text-muted text-sm mt-0.5">Purdue University · GPA 4.0 / 4.0</div>
      </div>
      <div class="border border-border bg-panel rounded-md p-4">
        <div class="text-xs text-dim mb-1">"research"</div>
        <div class="text-text">Explainable AI</div>
        <div class="text-muted text-sm mt-0.5">RDS Lab · Dr. Romila Pradhan</div>
      </div>
      <div class="border border-border bg-panel rounded-md p-4">
        <div class="text-xs text-dim mb-1">"industry"</div>
        <div class="text-text">Palo Alto Networks · Leen · Nasdaq</div>
        <div class="text-muted text-sm mt-0.5">SWE, NGFW team · Data Science intern · Blockchain perf</div>
      </div>
      <div class="border border-border bg-panel rounded-md p-4">
        <div class="text-xs text-dim mb-1">"availability"</div>
        <div class="text-text">Graduating August 2026</div>
        <div class="text-muted text-sm mt-0.5">Open to full-time AI &amp; security roles</div>
      </div>
    </div>

    <TerminalPrompt cmd="ls -la ./about" />
    <TerminalToggle summary="about_me.md">
      <p>I'm a graduate student in Computer &amp; Information Technology at <strong class="text-text">Purdue University</strong>, West Lafayette. As a member of the <strong class="text-text">Responsible Data Science (RDS) Lab</strong>, my thesis work with Dr. Romila Pradhan focuses on Explainable AI — specifically how data-valuation techniques can detect and repair data-quality issues in machine-learning pipelines.</p>
      <p class="mt-3">I've been a <strong class="text-text">Graduate Teaching Assistant</strong> for three semesters across CNIT 323: Basic Cyberforensics, CNIT 392: Enterprise Data Management, and CNIT 175: Introduction to Visual Programming. Before Purdue, I spent a year as a <strong class="text-text">Software Engineer at Palo Alto Networks</strong> on the Next-Generation Firewall team, and interned at <strong class="text-text">Leen</strong>, <strong class="text-text">Nasdaq</strong>, and Palo Alto Networks. That mix of research and production engineering shapes how I work: rigorously, but with an eye on what actually ships.</p>
    </TerminalToggle>

    <TerminalToggle summary="education.md">
      <div class="space-y-4">
        <div>
          <div class="text-text">Purdue University <span class="text-dim text-xs">— West Lafayette, IN · Fall 2024 – Summer 2026</span></div>
          <div class="text-muted text-sm">M.S. Computer &amp; Information Technology · <span class="text-green">GPA 4.0 / 4.0</span></div>
          <div class="text-muted text-sm mt-1">Coursework: Responsible Data Science, IT Data Analytics, HCI, Research Methods, AI, Social Engineering &amp; Cybersecurity.</div>
        </div>
        <div>
          <div class="text-text">PES University <span class="text-dim text-xs">— Bangalore, India · Fall 2019 – Spring 2023</span></div>
          <div class="text-muted text-sm">B.Tech Computer Science &amp; Engineering · <span class="text-green">GPA 9.06 / 10</span></div>
          <div class="text-muted text-sm mt-1">6-time MRD Scholar — 40% tuition waiver for the top 20% of students.</div>
        </div>
      </div>
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
        <div class="text-muted text-sm mt-1">ml pipelines · spark · xgboost</div>
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
