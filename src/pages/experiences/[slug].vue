<script setup lang="ts">
import logoCving from '@/assets/images/logo_cving.png'
import logoOripan from '@/assets/images/logo_oripan.jpeg'

const { slug } = useRoute('/experiences/[slug]').params

interface WorkExperience {
  company: string
  logo: string
  period: string
  title: string
  description: string
  responsibilities: string[]
  technologies: string[]
  achievements: string[]
  location?: string
  type?: string
}

// Mock data - in a real app, this would come from an API or data store
const workExperienceData: Record<string, WorkExperience> = {
  cving: {
    company: 'Cving',
    logo: logoCving,
    period: '02/2022 - Present',
    title: 'Frontend Developer',
    description:
      'Working on building and maintaining web applications using Vue.js and Nuxt.js. Leading frontend development initiatives and collaborating with cross-functional teams to deliver high-quality user experiences.',
    location: 'Milan, Italy (Remote)',
    type: 'Full-time',
    responsibilities: [
      'Develop and maintain responsive web applications using Vue.js 3, Nuxt 2/3 and TypeScript',
      'Created a back-office dashboard using Vue3 and Tailwind CSS used by company employees',
      'Maintained and improved the candidate website (cving.com) using Nuxt2, optimizing performance and SEO',
      'Maintained the recruiter website using Vue2, implementing new features and fixing bugs',
      'Built an internal video interview platform from scratch using Vue3, WebRTC and Socket.io',
      'Collaborate with backend developers to integrate RESTful APIs',
      'Optimize application performance and ensure accessibility standards'
    ],
    technologies: [
      'Vue.js 2/3',
      'Nuxt.js 2/3',
      'TypeScript',
      'Tailwind CSS',
      'WebRTC',
      'Socket.io',
      'Express.js',
      'Vite',
      'Pinia',
      'Vuex',
      'Vue Router',
      'Git',
      'REST APIs',
      'HTML5',
      'CSS3'
    ],
    achievements: [
      'Built a complete video interview platform enabling seamless calls between candidates and recruiters',
      'Created a comprehensive back-office dashboard improving internal workflow efficiency',
      'Improved SEO and performance on the main candidate-facing website',
      'Successfully maintained and enhanced multiple production applications across different Vue versions',
      'Delivered high-quality features on schedule in an agile environment'
    ]
  },
  oripan: {
    company: 'Oripan',
    logo: logoOripan,
    period: '08/2019 - 02/2022',
    title: 'Software Developer',
    description:
      'Developed and maintained web applications using Java and Spring Boot. Worked on full-stack development with focus on backend services and API development.',
    location: 'Tione di Trento, Italy',
    type: 'Full-time',
    responsibilities: [
      'Design and develop RESTful APIs using Spring Boot',
      'Implement business logic and data access layers',
      'Write and optimize SQL queries for PostgreSQL database',
      'Integrate third-party services and APIs',
      'Participate in agile development process',
      'Debug and resolve production issues',
      'Collaborate with frontend team on API integration'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'Maven',
      'JUnit',
      'REST APIs',
      'Docker',
      'Git',
      'Jenkins',
      'Linux',
      'Hibernate',
      'MySQL',
      'Tomcat'
    ],
    achievements: [
      'Developed key features for the main product, used by over 10,000 users',
      'Reduced API response time by 50% through query optimization',
      'Implemented automated testing pipeline, reducing bugs in production by 35%',
      'Successfully migrated legacy codebase to modern Spring Boot architecture',
      'Mentored junior developers in best practices and code quality'
    ]
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
        <a href="/">
          <iconify-icon icon="mdi:arrow-left" class="mr-2" />
          Back to Home
        </a>
      </Button>
    </div>

    <!-- Experience Detail -->
    <div v-else class="max-w-6xl mx-auto">
      <!-- Header Section -->
      <div class="mb-12">
        <Button as-child variant="ghost" size="sm" class="mb-6">
          <a href="/" class="flex items-center gap-2">
            <iconify-icon icon="mdi:arrow-left" />
            Back to Home
          </a>
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
          <CardContent class="pt-6">
            <p class="text-lg leading-relaxed">{{ experience.description }}</p>
          </CardContent>
        </Card>
      </div>

      <!-- Main Content Grid -->
      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <!-- Responsibilities Section -->
        <div class="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-3xl">
                <iconify-icon icon="mdi:clipboard-list" class="text-yellow-500" />
                Key Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="space-y-3">
                <li
                  v-for="(responsibility, index) in experience.responsibilities"
                  :key="index"
                  class="flex items-start gap-3 text-base"
                >
                  <iconify-icon
                    icon="mdi:check-circle"
                    class="text-green-500 text-xl mt-0.5 flex-shrink-0"
                  />
                  <span>{{ responsibility }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <!-- Achievements Section -->
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-3xl">
                <iconify-icon icon="mdi:trophy" class="text-yellow-500" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="space-y-3">
                <li
                  v-for="(achievement, index) in experience.achievements"
                  :key="index"
                  class="flex items-start gap-3 text-base"
                >
                  <iconify-icon
                    icon="mdi:star"
                    class="text-yellow-500 text-xl mt-0.5 flex-shrink-0"
                  />
                  <span>{{ achievement }}</span>
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
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-3 text-3xl">
            <iconify-icon icon="mdi:timeline" class="text-yellow-500" />
            Journey Timeline
          </CardTitle>
          <CardDescription> My professional journey at {{ experience.company }} </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="relative">
            <Progress :model-value="100" class="h-2 mb-8" />
            <div class="grid md:grid-cols-3 gap-4">
              <Card
                v-for="(achievement, index) in experience.achievements.slice(0, 3)"
                :key="index"
              >
                <CardHeader>
                  <div class="flex items-center gap-2 mb-2">
                    <div
                      class="w-8 h-8 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold"
                    >
                      {{ index + 1 }}
                    </div>
                    <CardTitle class="text-lg">Milestone {{ index + 1 }}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-sm">{{ achievement }}</p>
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
