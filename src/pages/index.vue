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
    <div
      class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center w-full"
    >
      <h1
        class="text-5xl md:text-9xl font-bold leading-tight flex flex-wrap justify-center md:gap-20"
      >
        <span>{{ personalInfo.hero.greeting }}</span>
        <span class="text-yellow-500">{{ personalInfo.hero.name }}!</span>
      </h1>
      <p
        class="text-3xl md:text-6xl mt-8 flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 leading-tight"
      >
        <span class="block md:inline">{{ personalInfo.hero.subtitle }}</span>
        <iconify-icon :icon="personalInfo.hero.icon" class="text-green-500 text-4xl md:text-6xl" />
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
      class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20"
      v-if="workExperiences.length"
    >
      <SectionHeader icon="mdi:briefcase" title="Work Experience" />
      <Stepper
        orientation="vertical"
        class="mx-auto flex w-full flex-col justify-start gap-10 md:gap-20 mt-12 md:mt-24"
      >
        <StepperItem
          v-for="step in workExperiences"
          :key="step.step"
          class="relative flex w-full items-start gap-3 md:gap-6"
          :step="step.step"
        >
          <StepperSeparator
            class="absolute left-[32px] md:left-[48px] top-[38px] block w-0.5 shrink-0 rounded-full bg-primary"
            :class="
              step.step === 1
                ? 'h-[calc(100%+1rem)] md:h-[calc(100%+3rem)]'
                : 'h-[calc(100%-2rem)] md:h-[calc(100%-2rem)]'
            "
          />

          <StepperTrigger as-child class="min-w-[4rem] md:min-w-[6rem]">
            <div class="z-10 w-16 md:w-20 h-full bg-muted">
              <img :src="step.logo" alt="Company Logo" />
            </div>
          </StepperTrigger>

          <div class="flex flex-col gap-1 flex-1 min-w-0">
            <StepperTitle class="font-semibold transition text-xl md:text-4xl">
              {{ step.title }}
            </StepperTitle>
            <StepperDescription class="text-base md:text-3xl">
              <div class="flex gap-2 items-center">
                <span class="text-lg md:text-3xl">{{ step.company.name }}</span>
                <a
                  :href="step.company.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-500"
                >
                  <iconify-icon icon="mdi:linkedin" class="text-lg md:text-2xl" />
                </a>
              </div>

              <p class="text-sm md:text-xl text-red-400 mt-1">{{ step.period }}</p>

              <!-- Desktop only content -->
              <p class="hidden md:block text-2xl mt-2">{{ step.company.description }}</p>
              <p class="hidden md:block mt-12">{{ step.description }}</p>

              <!-- Contributions (if any) - Desktop only -->
              <div
                v-if="step.contributions && step.contributions.length"
                class="mt-4 hidden md:block"
              >
                <h3 class="text-2xl font-semibold mb-2">Key Contributions:</h3>
                <ul class="list-disc ml-6">
                  <li v-for="(contribution, index) in step.contributions" :key="index">
                    {{ contribution.description }}
                  </li>
                </ul>
              </div>

              <!-- View Details Button -->
              <div class="mt-8 md:mt-8">
                <Button
                  as-child
                  variant="default"
                  size="sm"
                  class="md:size-lg text-sm md:text-base"
                >
                  <RouterLink
                    :to="`/experiences/${step.company.name.toLowerCase()}`"
                    class="flex items-center gap-2"
                  >
                    <iconify-icon icon="mdi:arrow-right" />
                    <span class="hidden md:inline">View Full Details</span>
                    <span class="md:hidden">Details</span>
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
          <div class="flex items-start justify-between gap-4">
            <div class="flex-1">
              <CardTitle class="text-2xl md:text-3xl mb-2">{{ education.degree.title }}</CardTitle>
              <CardDescription class="text-base md:text-xl">{{
                education.degree.institution
              }}</CardDescription>
              <p class="text-sm text-muted-foreground mt-2 md:hidden">
                {{ education.degree.period }}
              </p>
            </div>
            <Badge
              variant="secondary"
              class="hidden md:flex text-base px-3 py-1 whitespace-nowrap"
              >{{ education.degree.period }}</Badge
            >
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-base md:text-lg">{{ education.degree.description }}</p>
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

    <div id="projects" class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20">
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
          :image="project.image ?? ''"
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
        <CardContent class="py-6 md:py-12 px-4 md:px-6">
          <p class="text-base md:text-2xl mb-6 md:mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>

          <div class="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
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

          <div class="flex flex-wrap justify-center gap-3 md:gap-4 mt-6 md:mt-8">
            <Button as-child size="default" class="md:size-lg text-sm md:text-lg px-4 md:px-6">
              <a :href="`mailto:${socialLinks.email}`">
                <iconify-icon icon="mdi:email-send" class="mr-2 text-lg md:text-xl" />
                Send Message
              </a>
            </Button>
            <Button
              as-child
              variant="outline"
              size="default"
              class="md:size-lg text-sm md:text-lg px-4 md:px-6"
            >
              <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="mdi:file-pdf-box" class="mr-2 text-lg md:text-xl" />
                View CV
              </a>
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
