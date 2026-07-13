<script setup lang="ts">
import {
  personalInfo,
  workExperiences,
  education,
  projects,
  skills,
  socialLinks
} from '~/data/portfolio'
import { usePdf } from '~/composables/usePdf'

const { openPdf } = usePdf()

useSeoMeta({
  title: 'Home'
})

const skillGroups = [
  { label: 'frontend', icon: 'mdi:code-braces', items: skills.frontend },
  { label: 'tools', icon: 'mdi:tools', items: skills.tools },
  { label: 'backend', icon: 'mdi:server', items: skills.backend },
  { label: 'soft skills', icon: 'mdi:account-group', items: skills.soft }
]

const stats = [
  { value: personalInfo.yearsExperience, label: 'years shipping' },
  { value: String(projects.length), label: 'projects built' },
  { value: personalInfo.location.split(',')[0], label: 'based in' }
]
</script>

<template>
  <div>
    <!-- ══════════════════ HERO ══════════════════ -->
    <section class="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-6xl items-center px-4 sm:px-6">
      <div class="grid w-full items-center gap-10 py-16 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div>
          <p class="mb-6 flex items-center gap-2 font-mono text-sm text-signal">
            <span class="inline-block h-2 w-2 rounded-full bg-signal shadow-[0_0_8px_var(--color-signal)]" />
            {{ personalInfo.availability }}
          </p>

          <h1
            v-reveal
            class="font-display text-6xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
          >
            MIRKO<br />
            <span class="text-accent">BOSETTI</span><span class="text-accent">.</span>
          </h1>

          <p class="mt-6 max-w-[52ch] font-mono text-base leading-relaxed text-muted sm:text-lg">
            Frontend Developer crafting fast, scalable web apps with the Vue and Nuxt ecosystem.
            {{ personalInfo.yearsExperience }} years, based in {{ personalInfo.location }}.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <UiButton as="a" href="#projects" size="lg">
              <Icon name="mdi:folder-multiple-outline" class="text-lg" />
              View work
            </UiButton>
            <UiButton as="a" href="#contact" variant="outline" size="lg">
              <Icon name="mdi:message-outline" class="text-lg" />
              Get in touch
            </UiButton>
          </div>
        </div>

        <!-- avatar in pixel frame -->
        <div v-reveal="150" class="relative mx-auto w-full max-w-xs md:max-w-none">
          <div class="relative rounded-[6px] border border-border-strong bg-surface p-2">
            <div
              class="pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_60px_-20px_rgba(255,194,51,0.25)]"
            />
            <img
              :src="personalInfo.avatar"
              :alt="personalInfo.name"
              class="w-full rounded-[4px] object-cover grayscale-[15%]"
            />
            <div
              class="flex items-center justify-between border-t border-border px-1 pt-2 font-mono text-xs text-faint"
            >
              <span>~/avatar.png</span>
              <span class="text-accent">{{ personalInfo.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════ ABOUT ══════════════════ -->
    <section id="about" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="01" path="about" />

      <div class="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div class="space-y-5">
          <p
            v-for="(paragraph, i) in personalInfo.about.summary"
            :key="i"
            v-reveal
            class="max-w-[68ch] font-mono text-base leading-relaxed text-muted [&_strong]:font-semibold [&_strong]:text-text"
            v-html="paragraph"
          />

          <div class="grid grid-cols-3 gap-3 pt-4">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-[4px] border border-border bg-surface/60 p-4"
            >
              <p class="font-display text-3xl font-bold text-accent sm:text-4xl">{{ stat.value }}</p>
              <p class="mt-1 font-mono text-xs text-faint">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <UiCard class="p-5">
            <h3 class="mb-3 flex items-center gap-2 font-display text-lg font-bold">
              <Icon name="mdi:target" class="text-accent" /> What I bring
            </h3>
            <ul class="space-y-2.5">
              <li
                v-for="s in personalInfo.about.strengths"
                :key="s.boldText"
                class="flex gap-2.5 font-mono text-sm text-muted"
              >
                <Icon name="mdi:chevron-right" class="mt-0.5 shrink-0 text-accent" />
                <span><strong class="text-text">{{ s.boldText }}.</strong> {{ s.text }}</span>
              </li>
            </ul>
          </UiCard>

          <UiCard class="p-5">
            <h3 class="mb-3 flex items-center gap-2 font-display text-lg font-bold">
              <Icon name="mdi:coffee-outline" class="text-accent" /> Off the clock
            </h3>
            <ul class="space-y-2.5">
              <li
                v-for="h in personalInfo.about.hobbies"
                :key="h.text"
                class="flex gap-2.5 font-mono text-sm text-muted"
              >
                <Icon :name="h.icon" class="mt-0.5 shrink-0 text-faint" />
                <span>{{ h.text }}</span>
              </li>
            </ul>
          </UiCard>
        </div>
      </div>
    </section>

    <!-- ══════════════════ EXPERIENCE ══════════════════ -->
    <section id="experience" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="02" path="experience" />

      <div class="mt-12 space-y-6">
        <div
          v-for="exp in workExperiences"
          :key="exp.step"
          v-reveal
          class="relative grid gap-5 rounded-[4px] border border-border bg-surface/40 p-5 sm:grid-cols-[auto_1fr] sm:p-6"
        >
          <div class="flex sm:flex-col sm:items-center">
            <div
              class="flex h-16 w-16 items-center justify-center rounded-[4px] border border-border bg-bg p-2"
            >
              <img :src="exp.logo" :alt="`${exp.company.name} logo`" class="max-h-full max-w-full object-contain" />
            </div>
          </div>

          <div>
            <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 class="font-display text-2xl font-bold">{{ exp.title }}</h3>
              <a
                :href="exp.company.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                @ {{ exp.company.name }}
                <Icon name="mdi:linkedin" class="text-base" />
              </a>
            </div>
            <p class="mt-1 font-mono text-sm text-danger/90">{{ exp.period }}</p>
            <p class="mt-4 max-w-[70ch] font-mono text-sm leading-relaxed text-muted">
              {{ exp.description }}
            </p>

            <ul class="mt-4 space-y-2">
              <li
                v-for="(c, i) in exp.contributions?.slice(0, 2)"
                :key="i"
                class="flex gap-2.5 font-mono text-sm text-muted"
              >
                <Icon name="mdi:chevron-right" class="mt-0.5 shrink-0 text-signal" />
                <span>{{ c.description }}</span>
              </li>
            </ul>

            <div class="mt-5 flex flex-wrap items-center gap-2">
              <TechBadge v-for="t in exp.technologies?.slice(0, 6)" :key="t" :label="t" />
              <UiButton
                as="NuxtLink"
                :to="`/experiences/${exp.company.name.toLowerCase()}`"
                variant="ghost"
                size="sm"
                class="ml-auto"
              >
                Details <Icon name="mdi:arrow-right" />
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════ EDUCATION ══════════════════ -->
    <section id="education" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="03" path="education" />

      <div class="mt-10 grid gap-5 md:grid-cols-2">
        <UiCard v-reveal class="p-6">
          <div class="mb-3 flex items-center justify-between">
            <Icon name="mdi:school-outline" class="text-3xl text-accent" />
            <span class="font-mono text-sm text-faint">{{ education.degree.period }}</span>
          </div>
          <h3 class="font-display text-xl font-bold leading-snug">{{ education.degree.title }}</h3>
          <p class="mt-1 font-mono text-sm text-muted">{{ education.degree.institution }}</p>
          <p class="mt-4 font-mono text-sm leading-relaxed text-muted">
            {{ education.degree.description }}
          </p>
        </UiCard>

        <UiCard v-reveal="100" class="p-6">
          <Icon name="mdi:certificate-outline" class="mb-3 text-3xl text-accent" />
          <h3 class="font-display text-xl font-bold">Certifications</h3>
          <ul class="mt-4 space-y-3">
            <li
              v-for="cert in education.certifications"
              :key="cert"
              class="flex gap-2.5 font-mono text-sm text-muted"
            >
              <Icon name="mdi:check-circle-outline" class="mt-0.5 shrink-0 text-signal" />
              <span>{{ cert }}</span>
            </li>
          </ul>
        </UiCard>
      </div>
    </section>

    <!-- ══════════════════ PROJECTS ══════════════════ -->
    <section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="04" path="projects" />

      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(project, i) in projects"
          :key="project.slug"
          v-reveal
          class="h-full"
        >
          <ProjectCard
            :slug="project.slug"
            :title="project.title"
            :description="project.description"
            :image="project.image ?? ''"
            :technologies="project.technologies"
            :index="i"
          />
        </div>
      </div>
    </section>

    <!-- ══════════════════ SKILLS ══════════════════ -->
    <section id="skills" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="05" path="skills" />

      <div class="mt-10 divide-y divide-border border-y border-border">
        <div
          v-for="group in skillGroups"
          :key="group.label"
          v-reveal
          class="grid gap-4 py-6 md:grid-cols-[220px_1fr] md:items-start"
        >
          <div class="flex items-center gap-2.5">
            <Icon :name="group.icon" class="text-xl text-accent" />
            <span class="font-display text-lg font-bold">{{ group.label }}</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <TechBadge v-for="item in group.items" :key="item" :label="item" />
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════ NOTES ══════════════════ -->
    <section id="notes" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="06" path="notes" />
      <p class="mt-6 max-w-[60ch] font-mono text-sm text-muted">
        Draw something and leave it on the wall. A little guestbook, rendered on canvas.
      </p>
      <NotesBoard class="mt-8" />
    </section>

    <!-- ══════════════════ CONTACT ══════════════════ -->
    <section id="contact" class="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <SectionHeading index="07" path="contact" />

      <div
        v-reveal
        class="mt-10 overflow-hidden rounded-[6px] border border-border bg-surface/50"
      >
        <div class="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 class="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Let's build<br /><span class="text-accent">something good.</span>
            </h3>
            <p class="mt-4 max-w-[46ch] font-mono text-sm leading-relaxed text-muted">
              Open to frontend roles, remote positions, and interesting projects. Drop a line and
              I'll get back to you.
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <UiButton as="a" :href="`mailto:${socialLinks.email}`" size="lg">
                <Icon name="mdi:send" class="text-lg" /> Get in touch
              </UiButton>
              <UiButton variant="outline" size="lg" @click="openPdf">
                <Icon name="mdi:file-account-outline" class="text-lg" /> View CV
              </UiButton>
            </div>
          </div>

          <div class="flex flex-col justify-center gap-3 border-border sm:border-l sm:pl-8 lg:pl-10">
            <a
              :href="`mailto:${socialLinks.email}`"
              class="group flex items-center gap-3 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon name="mdi:email-outline" class="text-xl text-accent" />
              {{ socialLinks.email }}
            </a>
            <a
              :href="socialLinks.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-3 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon name="mdi:linkedin" class="text-xl text-accent" />
              linkedin.com/in/mirkobosetti
            </a>
            <a
              :href="socialLinks.github"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-3 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon name="mdi:github" class="text-xl text-accent" />
              github.com/mirkobosetti
            </a>
            <p class="flex items-center gap-3 font-mono text-sm text-muted">
              <Icon name="mdi:map-marker-outline" class="text-xl text-faint" />
              {{ personalInfo.location }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
