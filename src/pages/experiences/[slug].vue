<script setup lang="ts">
import { workExperiences } from '../../data/portfolio'

const { slug } = useRoute('/experiences/[slug]').params

interface WorkExperience {
  company: string
  logo: string
  period: string
  title: string
  description: string
  contributions: string[]
  technologies: string[]
  milestones: { title: string; description: string }[]
  location?: string
  type?: string
}

// Map data from portfolio.ts to the structure needed for the template
const cvingExp = workExperiences[0]!
const oripanExp = workExperiences[1]!

const workExperienceData: Record<string, WorkExperience> = {
  cving: {
    company: cvingExp.company.name,
    logo: cvingExp.logo,
    period: cvingExp.period,
    title: cvingExp.title,
    description: cvingExp.description,
    location: `${cvingExp.location}${cvingExp.remote ? ' (Remote)' : ''}`,
    type: 'Full-time',
    contributions: cvingExp.contributions?.map((c) => c.description) || [],
    technologies: cvingExp.technologies || [],
    milestones: cvingExp.milestones || []
  },
  oripan: {
    company: oripanExp.company.name,
    logo: oripanExp.logo,
    period: oripanExp.period,
    title: oripanExp.title,
    description: oripanExp.description,
    location: oripanExp.location,
    type: 'Full-time',
    contributions: oripanExp.contributions?.map((c) => c.description) || [],
    technologies: oripanExp.technologies || [],
    milestones: oripanExp.milestones || []
  }
}

const experience = computed(() => {
  const key = slug.toString().toLowerCase()
  return workExperienceData[key] || null
})

useMeta({
  title: experience.value
    ? `Mirko Bosetti | ${experience.value.company} - ${experience.value.title}`
    : `Mirko Bosetti | ${slug}`
})
</script>

<template>
  <div class="min-h-screen py-12 px-4 md:px-8 lg:px-16">
    <!-- Not Found State -->
    <div v-if="!experience" class="max-w-4xl mx-auto text-center py-32">
      <iconify-icon icon="mdi:briefcase-off-outline" class="text-9xl text-muted-foreground mb-8" />
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Work Experience Not Found</h1>
      <p class="text-xl text-muted-foreground mb-8">
        The work experience "{{ slug }}" could not be found.
      </p>
      <Button as-child variant="default" size="lg">
        <RouterLink to="/">
          <iconify-icon icon="mdi:arrow-left" class="mr-2" />
          Back to Home
        </RouterLink>
      </Button>
    </div>

    <!-- Experience Detail -->
    <div v-else class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="mb-12">
        <Button as-child variant="ghost" size="sm" class="mb-6">
          <RouterLink to="/" class="flex items-center gap-2">
            <iconify-icon icon="mdi:arrow-left" />
            Back to Home
          </RouterLink>
        </Button>

        <div class="flex flex-col md:flex-row items-start md:items-center gap-8 mb-6">
          <div
            class="w-32 h-32 bg-muted rounded-2xl p-4 flex items-center justify-center shadow-lg"
          >
            <img
              :src="experience.logo"
              :alt="`${experience.company} logo`"
              class="w-full h-full object-contain"
            />
          </div>

          <div class="flex-1">
            <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ experience.title }}</h1>
            <div class="flex flex-wrap items-center gap-4 text-xl text-muted-foreground">
              <div class="flex items-center gap-2">
                <iconify-icon icon="mdi:office-building" class="text-yellow-500" />
                <span class="font-semibold">{{ experience.company }}</span>
              </div>
              <Separator orientation="vertical" class="h-6" />
              <div class="flex items-center gap-2">
                <iconify-icon icon="mdi:calendar-range" class="text-yellow-500" />
                <span>{{ experience.period }}</span>
              </div>
              <Separator v-if="experience.location" orientation="vertical" class="h-6" />
              <div v-if="experience.location" class="flex items-center gap-2">
                <iconify-icon icon="mdi:map-marker" class="text-yellow-500" />
                <span>{{ experience.location }}</span>
              </div>
              <Separator v-if="experience.type" orientation="vertical" class="h-6" />
              <Badge v-if="experience.type" variant="secondary" class="text-base px-3 py-1">
                {{ experience.type }}
              </Badge>
            </div>
          </div>
        </div>

        <Card>
          <CardContent>
            <p class="text-lg leading-relaxed">{{ experience.description }}</p>
          </CardContent>
        </Card>
      </div>

      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- What I Have Done Section -->
        <div class="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-3xl">
                <iconify-icon icon="mdi:rocket-launch" class="text-yellow-500" />
                What I Have Done
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="space-y-3">
                <li
                  v-for="(contribution, index) in experience.contributions"
                  :key="index"
                  class="flex items-start gap-3 text-base"
                >
                  <iconify-icon
                    icon="mdi:check-circle"
                    class="text-green-500 text-xl mt-0.5 flex-shrink-0"
                  />
                  <span>{{ contribution }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <!-- Technologies Section -->
        <div class="md:col-span-1">
          <Card class="sticky top-8">
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-2xl">
                <iconify-icon icon="mdi:code-tags" class="text-yellow-500" />
                Technologies
              </CardTitle>
              <CardDescription>Tech stack used in this role</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="tech in experience.technologies"
                  :key="tech"
                  variant="outline"
                  class="text-sm px-3 py-1"
                >
                  {{ tech }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- Timeline Section -->
      <Card v-if="experience.milestones && experience.milestones.length > 0">
        <CardHeader>
          <CardTitle class="flex items-center gap-3 text-3xl">
            <iconify-icon icon="mdi:timeline" class="text-yellow-500" />
            Journey Timeline
          </CardTitle>
          <CardDescription> Key milestones at {{ experience.company }} </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="relative">
            <Progress :model-value="100" class="h-2 mb-8" />
            <div class="grid md:grid-cols-3 gap-4">
              <Card v-for="(milestone, index) in experience.milestones" :key="index">
                <CardHeader>
                  <div class="flex items-center gap-2 mb-2">
                    <div
                      class="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold"
                    >
                      {{ index + 1 }}
                    </div>
                    <CardTitle class="text-lg">{{ milestone.title }}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-sm">{{ milestone.description }}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Call to Action -->
      <div class="mt-12 text-center">
        <Card class="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border-yellow-500/20">
          <CardContent class="py-12">
            <h2 class="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p class="text-lg text-muted-foreground mb-6">
              Let's discuss how my experience can benefit your projects
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="default">
                <iconify-icon icon="mdi:email" class="mr-2 text-xl" />
                Contact Me
              </Button>
              <Button size="lg" variant="outline">
                <iconify-icon icon="mdi:download" class="mr-2 text-xl" />
                Download CV
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
