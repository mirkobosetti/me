<script setup lang="ts">
import logoCving from '@/assets/images/logo_cving.png'
import logoOripan from '@/assets/images/logo_oripan.jpeg'
import avatar from '@/assets/images/avatar.png'
import type { workExperience } from '../types'

useMeta({
  title: 'Mirko Bosetti | Home'
})

const workExperiences: workExperience[] = [
  {
    step: 1,
    company: {
      name: 'Cving',
      location: 'Milan, Italy',
      description:
        'The first platform experience dedicated to the world of work, experience, entertainment, and career.',
      linkedin: 'https://www.linkedin.com/company/cving/'
    },
    location: 'Milan, Italy',
    remote: true,
    logo: logoCving,
    period: '02/2022 - Present',
    title: 'Front-end Developer',
    description: 'Working on building and maintaining web applications using Vue.js and Nuxt.js.',
    contributions: [
      {
        description:
          'Created a back-office dashboard using Vue3 and Tailwind CSS. Used by our company employees to manage recruiters, candidates, companies and their campaigns.'
      },
      {
        description:
          'Mantained and improved the website used by candidates (https://www.cving.com) using Nuxt2. Optimizing performance and SEO.'
      },
      {
        description:
          'Mantained the website used by recruiters (https://recruiter.cving.com) using vue2. Implemented new features and fixed bugs.'
      },
      {
        description:
          'Built an internal video interview platform from scratch similar to Google Meet using Vue3 WebRTC and socket (both FE and BE in express.js) and enabling seamless video calls between candidates and recruiters.'
      }
    ]
  },
  {
    step: 2,
    company: {
      name: 'Oripan',
      location: 'Tione di Trento, Italy',
      description: 'A software company focused on enterprise solutions.',
      linkedin: 'https://www.linkedin.com/company/oripan/'
    },
    location: 'Tione di Trento, Italy',
    remote: false,
    logo: logoOripan,
    period: '08/2019 - 02/2022',
    title: 'Software Developer',
    description: 'Developed and maintained web applications using Java and Spring Boot.'
  }
]
</script>

<template>
  <div class="flex flex-col items-start justify-center min-h-screen py-2 md:items-center px-4">
    <div class="min-h-[calc(100vh-4rem)] flex flex-col items-start justify-center">
      <h1 class="text-2xl md:text-9xl font-bold">
        Hi, I'm <span class="text-yellow-500">MIRKO</span>!
      </h1>
      <p class="text-lg md:text-6xl mt-8 flex items-center gap-4">
        <span>I'm a Frontend Developer</span>
        <iconify-icon icon="lucide:laptop" class="text-green-500" />
      </p>
    </div>

    <Separator />

    <div id="about" class="min-h-[50vh] my-16 max-w-6xl scroll-mt-20">
      <h2 class="text-5xl font-bold mb-12 flex items-center gap-4">
        <iconify-icon icon="mdi:account-circle" class="inline-block mr-2 text-yellow-500" />
        <span>About Me</span>
      </h2>

      <div class="grid md:grid-cols-3 gap-8 items-start">
        <!-- Avatar and Quick Info -->
        <div class="md:col-span-1">
          <Card class="overflow-hidden">
            <div class="relative">
              <img :src="avatar" alt="Mirko Bosetti" class="w-full h-auto object-cover" />
              <div
                class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
              >
                <p class="text-white font-bold text-xl">Mirko Bosetti</p>
                <p class="text-white/90 text-sm">Frontend Developer</p>
              </div>
            </div>
            <CardContent class="p-6">
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <iconify-icon icon="mdi:map-marker" class="text-yellow-500 text-xl" />
                  <span class="text-sm">Milan, Italy</span>
                </div>
                <div class="flex items-center gap-3">
                  <iconify-icon icon="mdi:briefcase" class="text-green-500 text-xl" />
                  <span class="text-sm">6+ Years Experience</span>
                </div>
                <div class="flex items-center gap-3">
                  <iconify-icon icon="mdi:check-decagram" class="text-blue-500 text-xl" />
                  <span class="text-sm">Available for Opportunities</span>
                </div>
              </div>

              <Separator class="my-4" />

              <div class="flex flex-wrap gap-2">
                <a
                  href="https://github.com/mirkobosetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:text-yellow-500 transition"
                >
                  <iconify-icon icon="mdi:github" class="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mirkobosetti"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 hover:text-yellow-500 transition"
                >
                  <iconify-icon icon="mdi:linkedin" class="text-2xl" />
                </a>
                <a
                  href="mailto:mirkobosetti@example.com"
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
              <p>
                Frontend Developer with <strong>6+ years of experience</strong> specializing in
                building modern, scalable web applications. Expert in
                <strong>Vue.js ecosystem</strong> (Vue 2/3, Nuxt.js) with a strong focus on
                performance optimization, user experience, and clean code architecture.
              </p>
              <p>
                Currently working at <strong>Cving</strong>, where I've built critical features
                including a comprehensive back-office dashboard, candidate platform, and a real-time
                video interview system using <strong>WebRTC</strong> and <strong>Socket.io</strong>.
              </p>
              <p>
                I'm passionate about creating
                <strong>accessible, user-friendly</strong> applications that solve real problems. I
                believe in continuous learning, best practices, and writing maintainable code that
                teams can easily work with.
              </p>
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
                  <li class="flex items-start gap-2">
                    <iconify-icon
                      icon="mdi:check-circle"
                      class="text-green-500 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Problem Solver:</strong> I approach challenges methodically and find
                      elegant solutions</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <iconify-icon
                      icon="mdi:check-circle"
                      class="text-green-500 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Team Player:</strong> Experience collaborating in agile
                      environments</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <iconify-icon
                      icon="mdi:check-circle"
                      class="text-green-500 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Quality Focused:</strong> Strong believer in testing, code reviews,
                      and documentation</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <iconify-icon
                      icon="mdi:check-circle"
                      class="text-green-500 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Fast Learner:</strong> Quick to adapt to new technologies and
                      frameworks</span
                    >
                  </li>
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
                  <li class="flex items-center gap-2">
                    <iconify-icon icon="mdi:book-open-variant" class="text-yellow-500" />
                    <span>Reading tech blogs and staying updated with web trends</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <iconify-icon icon="mdi:code-braces-box" class="text-blue-500" />
                    <span>Contributing to open source projects</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <iconify-icon icon="mdi:hiking" class="text-green-500" />
                    <span>Hiking and exploring the Italian Alps</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <iconify-icon icon="mdi:gamepad-variant" class="text-purple-500" />
                    <span>Gaming and UI/UX analysis in interactive media</span>
                  </li>
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
                  <p class="font-semibold text-lg mb-2">Open to Opportunities</p>
                  <p class="text-base">
                    I'm currently open to <strong>frontend roles</strong>,
                    <strong>remote positions</strong>, and <strong>exciting projects</strong> where
                    I can contribute my Vue.js expertise and grow as a developer. Particularly
                    interested in <strong>product-focused companies</strong> and
                    <strong>innovative startups</strong>.
                  </p>
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
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:briefcase" class="inline-block mr-2 text-yellow-500" />
        <span>Work Experience</span>
      </h2>
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
            v-if="step.step !== workExperiences.length"
            class="absolute left-[48px] top-[38px] block h-[125%] w-0.5 shrink-0 rounded-full bg-primary"
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
                  <a
                    :href="`/experiences/${step.company.name.toLowerCase()}`"
                    class="flex items-center gap-2"
                  >
                    <iconify-icon icon="mdi:arrow-right" />
                    View Full Details
                  </a>
                </Button>
              </div>
            </StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
    </div>

    <Separator class="my-8" />
    <div id="education" class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:school" class="inline-block mr-2 text-yellow-500" />
        <span>Education</span>
      </h2>

      <Card class="mt-12">
        <CardHeader>
          <div class="flex items-start justify-between">
            <div>
              <CardTitle class="text-3xl mb-2">Computer Science Degree</CardTitle>
              <CardDescription class="text-xl">University Name</CardDescription>
            </div>
            <Badge variant="secondary" class="text-base px-3 py-1">2015 - 2019</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p class="text-lg">
            Focused on software engineering, web development, algorithms, and data structures.
            Gained strong foundation in programming principles and modern development practices.
          </p>
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
            <li class="flex items-start gap-2">
              <iconify-icon icon="mdi:check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Vue.js and Modern Frontend Development</span>
            </li>
            <li class="flex items-start gap-2">
              <iconify-icon icon="mdi:check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>TypeScript: Advanced Concepts</span>
            </li>
            <li class="flex items-start gap-2">
              <iconify-icon icon="mdi:check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Web Performance Optimization</span>
            </li>
            <li class="flex items-start gap-2">
              <iconify-icon icon="mdi:check-circle" class="text-green-500 mt-1 flex-shrink-0" />
              <span>Accessibility in Web Development</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
    <Separator class="my-8" />
    <div id="projects" class="min-h-[50vh] my-16 scroll-mt-20">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:puzzle-heart" class="inline-block mr-2 text-yellow-500" />
        <span>Featured Projects</span>
      </h2>
      <p class="text-2xl max-w-3xl mt-8 mb-12">
        Here are some of the projects I've worked on, showcasing my skills in modern web
        development.
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Card class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <a href="/projects/portfolio-website">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Portfolio Website"
              class="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle class="text-2xl">Portfolio Website</CardTitle>
              <CardDescription>Modern personal portfolio with Vue.js</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </div>
            </CardContent>
          </a>
        </Card>

        <Card class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <a href="/projects/task-manager">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Task Manager"
              class="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle class="text-2xl">Task Manager App</CardTitle>
              <CardDescription>Collaborative task management platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">Nuxt.js</Badge>
                <Badge variant="secondary">Pinia</Badge>
              </div>
            </CardContent>
          </a>
        </Card>

        <Card class="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
          <a href="/projects/ecommerce-platform">
            <img
              src="https://via.placeholder.com/400x250"
              alt="E-Commerce Platform"
              class="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle class="text-2xl">E-Commerce Platform</CardTitle>
              <CardDescription>Full-featured online shopping experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">Stripe</Badge>
                <Badge variant="secondary">MongoDB</Badge>
              </div>
            </CardContent>
          </a>
        </Card>
      </div>
    </div>
    <Separator class="my-8" />
    <div id="skills" class="min-h-[50vh] my-16 max-w-5xl scroll-mt-20">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:lightbulb-on" class="inline-block mr-2 text-yellow-500" />
        <span>Skills & Expertise</span>
      </h2>

      <div class="grid md:grid-cols-2 gap-8 mt-12">
        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-2xl">
              <iconify-icon icon="mdi:code-braces" class="text-yellow-500" />
              Frontend Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge class="text-base px-3 py-1">Vue.js</Badge>
              <Badge class="text-base px-3 py-1">Nuxt.js</Badge>
              <Badge class="text-base px-3 py-1">TypeScript</Badge>
              <Badge class="text-base px-3 py-1">JavaScript</Badge>
              <Badge class="text-base px-3 py-1">HTML5</Badge>
              <Badge class="text-base px-3 py-1">CSS3</Badge>
              <Badge class="text-base px-3 py-1">Tailwind CSS</Badge>
              <Badge class="text-base px-3 py-1">Pinia</Badge>
              <Badge class="text-base px-3 py-1">Vuex</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-2xl">
              <iconify-icon icon="mdi:tools" class="text-green-500" />
              Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div class="flex flex-wrap gap-2">
              <Badge class="text-base px-3 py-1">Git</Badge>
              <Badge class="text-base px-3 py-1">Vite</Badge>
              <Badge class="text-base px-3 py-1">WebRTC</Badge>
              <Badge class="text-base px-3 py-1">Socket.io</Badge>
              <Badge class="text-base px-3 py-1">REST APIs</Badge>
              <Badge class="text-base px-3 py-1">Vitest</Badge>
              <Badge class="text-base px-3 py-1">ESLint</Badge>
              <Badge class="text-base px-3 py-1">npm/yarn</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-2xl">
              <iconify-icon icon="mdi:rocket-launch" class="text-blue-500" />
              Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Performance Optimization</span>
              </li>
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Accessibility (a11y)</span>
              </li>
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Responsive Design</span>
              </li>
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>SEO Optimization</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="flex items-center gap-2 text-2xl">
              <iconify-icon icon="mdi:account-group" class="text-purple-500" />
              Soft Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul class="space-y-2">
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Agile/Scrum Methodology</span>
              </li>
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Team Collaboration</span>
              </li>
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Problem Solving</span>
              </li>
              <li class="flex items-center gap-2">
                <iconify-icon icon="mdi:check" class="text-green-500" />
                <span>Code Review</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
    <Separator class="my-8" />
    <div id="contact" class="min-h-[50vh] my-16 max-w-4xl scroll-mt-20">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:email" class="inline-block mr-2 text-yellow-500" />
        <span>Get In Touch</span>
      </h2>

      <Card class="mt-12 bg-gradient-to-r from-yellow-500/10 to-green-500/10 border-yellow-500/20">
        <CardContent class="py-12">
          <p class="text-2xl mb-8 text-center">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part
            of your vision.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent class="p-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center"
                  >
                    <iconify-icon icon="mdi:email" class="text-2xl text-yellow-500" />
                  </div>
                  <div>
                    <p class="font-semibold text-lg">Email</p>
                    <a href="mailto:mirkobosetti@example.com" class="text-blue-500 hover:underline">
                      mirkobosetti@example.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent class="p-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center"
                  >
                    <iconify-icon icon="mdi:linkedin" class="text-2xl text-blue-500" />
                  </div>
                  <div>
                    <p class="font-semibold text-lg">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/mirkobosetti"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-500 hover:underline"
                    >
                      linkedin.com/in/mirkobosetti
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent class="p-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center"
                  >
                    <iconify-icon icon="mdi:github" class="text-2xl text-purple-500" />
                  </div>
                  <div>
                    <p class="font-semibold text-lg">GitHub</p>
                    <a
                      href="https://github.com/mirkobosetti"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-blue-500 hover:underline"
                    >
                      github.com/mirkobosetti
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent class="p-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <iconify-icon icon="mdi:map-marker" class="text-2xl text-green-500" />
                  </div>
                  <div>
                    <p class="font-semibold text-lg">Location</p>
                    <p class="text-muted-foreground">Milan, Italy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
      <p class="text-lg">© 2024 Mirko Bosetti. Built with Vue.js & Tailwind CSS.</p>
      <div class="flex justify-center gap-6 mt-4">
        <a
          href="https://github.com/mirkobosetti"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-foreground transition"
        >
          <iconify-icon icon="mdi:github" class="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/mirkobosetti"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-foreground transition"
        >
          <iconify-icon icon="mdi:linkedin" class="text-2xl" />
        </a>
        <a href="mailto:mirkobosetti@example.com" class="hover:text-foreground transition">
          <iconify-icon icon="mdi:email" class="text-2xl" />
        </a>
      </div>
    </div>
  </div>
</template>
