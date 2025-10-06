<script setup lang="ts">
import {
  personalInfo,
  workExperiences,
  education,
  projects,
  skills,
  contacts,
  socialLinks,
  footer
} from '../data/portfolio'

useMeta({
  title: `${personalInfo.name} | Home`
})
</script>

<template>
  <div class="flex flex-col items-start justify-center min-h-screen py-2 md:items-center px-4">
    <div class="min-h-[calc(100vh-4rem)] flex flex-col items-start justify-center">
      <h1 class="text-2xl md:text-9xl font-bold">
        {{ personalInfo.hero.greeting }}
        <span class="text-yellow-500">{{ personalInfo.hero.name }}</span
        >!
      </h1>
      <p class="text-lg md:text-6xl mt-8 flex items-center gap-4">
        <span>{{ personalInfo.hero.subtitle }}</span>
        <iconify-icon :icon="personalInfo.hero.icon" class="text-green-500" />
      </p>
    </div>

    <Separator />

    <div id="about" class="min-h-[50vh] my-16 max-w-6xl scroll-mt-20">
      <div class="mb-12">
        <SectionHeader icon="mdi:account-circle" title="About Me" />
      </div>

      <div class="grid md:grid-cols-3 gap-8 items-start">
        <!-- Avatar and Quick Info -->
        <div class="md:col-span-1">
          <Card class="overflow-hidden">
            <div class="relative">
              <img
                :src="personalInfo.avatar"
                :alt="personalInfo.name"
                class="w-full h-auto object-cover"
              />
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
              >
                <p class="text-white font-bold text-xl">{{ personalInfo.name }}</p>
                <p class="text-white/90 text-sm">{{ personalInfo.title }}</p>
              </div>
            </div>
            <CardContent class="p-6">
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <iconify-icon icon="mdi:map-marker" class="text-yellow-500 text-xl" />
                  <span class="text-sm">{{ personalInfo.location }}</span>
                </div>
                <div class="flex items-center gap-3">
                  <iconify-icon icon="mdi:briefcase" class="text-green-500 text-xl" />
                  <span class="text-sm">{{ personalInfo.yearsExperience }} Years Experience</span>
                </div>
                <div class="flex items-center gap-3">
                  <iconify-icon icon="mdi:check-decagram" class="text-blue-500 text-xl" />
                  <span class="text-sm">{{ personalInfo.availability }}</span>
                </div>
              </div>

              <Separator class="my-4" />

              <div class="flex flex-wrap gap-2">
                <a
                  :href="socialLinks.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:text-yellow-500 transition"
                >
                  <iconify-icon icon="mdi:github" class="text-2xl" />
                </a>
                <a
                  :href="socialLinks.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:text-yellow-500 transition"
                >
                  <iconify-icon icon="mdi:linkedin" class="text-2xl" />
                </a>
                <a
                  :href="`mailto:${socialLinks.email}`"
                  class="flex items-center gap-2 hover:text-yellow-500 transition"
                >
                  <iconify-icon icon="mdi:email" class="text-2xl" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Main About Content -->
        <div class="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle class="text-2xl flex items-center gap-2">
                <iconify-icon icon="mdi:account-star" class="text-yellow-500" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent class="p-6 text-lg leading-relaxed space-y-4">
              <p
                v-for="(paragraph, index) in personalInfo.about.summary"
                :key="index"
                v-html="paragraph"
              ></p>
            </CardContent>
          </Card>

          <div class="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle class="text-xl flex items-center gap-2">
                  <iconify-icon icon="mdi:target" class="text-green-500" />
                  What I Bring
                </CardTitle>
              </CardHeader>
              <CardContent class="p-6">
                <ul class="space-y-2 text-base">
                  <InfoListItem
                    v-for="strength in personalInfo.about.strengths"
                    :key="strength.boldText"
                    icon="mdi:check-circle"
                    :bold-text="strength.boldText"
                    :text="strength.text"
                  />
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle class="text-xl flex items-center gap-2">
                  <iconify-icon icon="mdi:heart" class="text-red-500" />
                  When I'm Not Coding
                </CardTitle>
              </CardHeader>
              <CardContent class="p-6">
                <ul class="space-y-2 text-base">
                  <InfoListItem
                    v-for="hobby in personalInfo.about.hobbies"
                    :key="hobby.text"
                    :icon="hobby.icon"
                    :icon-color="hobby.iconColor"
                    :text="hobby.text"
                  />
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card class="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border-yellow-500/20">
            <CardContent class="p-6">
              <div class="flex items-start gap-4">
                <iconify-icon
                  icon="mdi:lightbulb-on"
                  class="text-yellow-500 text-3xl flex-shrink-0 mt-1"
                />
                <div>
                  <p class="font-semibold text-lg mb-2">
                    {{ personalInfo.about.opportunities.title }}
                  </p>
                  <p class="text-base" v-html="personalInfo.about.opportunities.description"></p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <Separator />

    <div
      id="experiences"
      class="min-h-[50vh] my-16 max-w-3xl scroll-mt-20"
      v-if="workExperiences.length"
    >
      <SectionHeader icon="mdi:briefcase" title="Work Experience" />
      <Stepper
        orientation="vertical"
        class="mx-auto flex w-full flex-col justify-start gap-20 mt-24"
      >
        <StepperItem
          v-for="step in workExperiences"
          :key="step.step"
          class="relative flex w-full items-start gap-6"
          :step="step.step"
        >
          <StepperSeparator
            class="absolute left-[48px] top-[38px] block w-0.5 shrink-0 rounded-full bg-primary"
            :class="step.step === 1 ? 'h-[calc(100%+3rem)]' : 'h-[calc(100%-2rem)]'"
          />

          <StepperTrigger as-child class="min-w-[6rem]">
            <div class="z-10 w-20 h-full bg-muted">
              <img :src="step.logo" alt="Company Logo" />
            </div>
          </StepperTrigger>

          <div class="flex flex-col gap-1">
            <StepperTitle class="font-semibold transition text-4xl">
              {{ step.title }}
            </StepperTitle>
            <StepperDescription class="text-3xl">
              <div class="flex gap-2">
                <span>{{ step.company.name }}</span>
                <a
                  :href="step.company.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500"
                >
                  <iconify-icon icon="mdi:linkedin" class="mt-1" />
                </a>
              </div>

              <p class="text-xl text-red-400">{{ step.period }}</p>
              <p class="text-2xl">{{ step.company.description }}</p>

              <p class="mt-12">{{ step.description }}</p>

              <!-- Contributions (if any) -->
              <div v-if="step.contributions && step.contributions.length" class="mt-4">
                <h3 class="text-2xl font-semibold mb-2">Key Contributions:</h3>
                <ul class="list-disc ml-6">
                  <li v-for="(contribution, index) in step.contributions" :key="index">
                    {{ contribution.description }}
                  </li>
                </ul>
              </div>

              <!-- View Details Button -->
              <div class="mt-8">
                <Button as-child variant="default" size="lg">
                  <RouterLink
                    :to="`/experiences/${step.company.name.toLowerCase()}`"
                    class="flex items-center gap-2"
                  >
                    <iconify-icon icon="mdi:arrow-right" />
                    View Full Details
                  </RouterLink>
                </Button>
              </div>
            </StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
    </div>

    <Separator class="my-8" />
    <div id="education" class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20">
      <SectionHeader icon="mdi:school" title="Education" />

      <Card class="mt-12">
        <CardHeader>
          <div class="flex items-start justify-between">
            <div>
              <CardTitle class="text-3xl mb-2">{{ education.degree.title }}</CardTitle>
              <CardDescription class="text-xl">{{ education.degree.institution }}</CardDescription>
            </div>
            <Badge variant="secondary" class="text-base px-3 py-1">{{
              education.degree.period
            }}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-lg">{{ education.degree.description }}</p>
        </CardContent>
      </Card>

      <Card class="mt-6">
        <CardHeader>
          <CardTitle class="text-2xl mb-2 flex items-center gap-2">
            <iconify-icon icon="mdi:certificate" class="text-yellow-500" />
            Certifications & Continuous Learning
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul class="space-y-3 text-lg">
            <li v-for="cert in education.certifications" :key="cert" class="flex items-start gap-2">
              <iconify-icon icon="mdi:check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>{{ cert }}</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <Separator class="my-8" />
    <div id="projects" class="min-h-[50vh] my-16 scroll-mt-20">
      <SectionHeader icon="mdi:puzzle-heart" title="Featured Projects" />
      <p class="text-2xl max-w-3xl mt-8 mb-12">
        Here are some of the projects I've worked on, showcasing my skills in modern web
        development.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :slug="project.slug"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :technologies="project.technologies"
        />
      </div>
    </div>
    <Separator class="my-8" />
    <div id="skills" class="min-h-[50vh] my-16 max-w-5xl scroll-mt-20">
      <SectionHeader icon="mdi:lightbulb-on" title="Skills & Expertise" />

      <div class="grid md:grid-cols-2 gap-8 mt-12">
        <SkillCard
          title="Frontend Development"
          icon="mdi:code-braces"
          icon-color="text-yellow-500"
          :items="skills.frontend"
          type="badge"
        />

        <SkillCard
          title="Tools & Technologies"
          icon="mdi:tools"
          icon-color="text-green-500"
          :items="skills.tools"
          type="badge"
        />

        <SkillCard
          title="Backend Development"
          icon="mdi:server"
          icon-color="text-blue-500"
          :items="skills.backend"
          type="badge"
        />

        <SkillCard
          title="Soft Skills"
          icon="mdi:account-group"
          icon-color="text-purple-500"
          :items="skills.soft"
          type="list"
        />
      </div>
    </div>
    <Separator class="my-8" />
    <div id="contact" class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20">
      <SectionHeader icon="mdi:email" title="Get In Touch" />

      <Card class="mt-12 bg-gradient-to-r from-yellow-500/10 to-green-500/10 border-yellow-500/20">
        <CardContent class="py-12">
          <p class="text-2xl mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <ContactCard
              v-for="contact in contacts"
              :key="contact.title"
              :icon="contact.icon"
              :icon-color="contact.iconColor"
              :title="contact.title"
              :value="contact.value"
              :href="contact.href"
              :is-external="contact.isExternal"
            />
          </div>

          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <Button size="lg" variant="default" class="text-lg px-6">
              <iconify-icon icon="mdi:email-send" class="mr-2 text-xl" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" class="text-lg px-6">
              <iconify-icon icon="mdi:download" class="mr-2 text-xl" />
              Download CV
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Footer -->
    <div class="mt-24 py-8 border-t text-center text-muted-foreground">
      <p class="text-lg">{{ footer.copyright }}</p>
      <div class="flex justify-center gap-6 mt-4">
        <a
          v-for="link in footer.socialLinks"
          :key="link.label"
          :href="link.href"
          :target="link.href.startsWith('http') ? '_blank' : undefined"
          :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
          class="hover:text-foreground transition"
          :aria-label="link.label"
        >
          <iconify-icon :icon="link.icon" class="text-2xl" />
        </a>
      </div>
    </div>
  </div>
</template>
