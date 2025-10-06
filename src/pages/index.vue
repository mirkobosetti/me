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

const projects = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description: 'Modern personal portfolio with Vue.js',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    slug: 'task-manager',
    title: 'Task Manager App',
    description: 'Collaborative task management platform',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'Nuxt.js', 'Pinia']
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-featured online shopping experience',
    image: 'https://via.placeholder.com/400x250',
    technologies: ['Vue.js', 'Stripe', 'MongoDB']
  }
]

const skills = {
  frontend: [
    'Vue.js',
    'Nuxt.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Pinia',
    'Vuex'
  ],
  tools: ['Git', 'Vite', 'WebRTC', 'Socket.io', 'REST APIs', 'Vitest', 'ESLint', 'npm/yarn'],
  practices: [
    'Performance Optimization',
    'Accessibility (a11y)',
    'Responsive Design',
    'SEO Optimization'
  ],
  soft: ['Agile/Scrum Methodology', 'Team Collaboration', 'Problem Solving', 'Code Review']
}

const contacts = [
  {
    icon: 'mdi:email',
    iconColor: 'text-yellow-500',
    title: 'Email',
    value: 'mirkobosetti@example.com',
    href: 'mailto:mirkobosetti@example.com'
  },
  {
    icon: 'mdi:linkedin',
    iconColor: 'text-blue-500',
    title: 'LinkedIn',
    value: 'linkedin.com/in/mirkobosetti',
    href: 'https://www.linkedin.com/in/mirkobosetti',
    isExternal: true
  },
  {
    icon: 'mdi:github',
    iconColor: 'text-purple-500',
    title: 'GitHub',
    value: 'github.com/mirkobosetti',
    href: 'https://github.com/mirkobosetti',
    isExternal: true
  },
  {
    icon: 'mdi:map-marker',
    iconColor: 'text-green-500',
    title: 'Location',
    value: 'Milan, Italy'
  }
]

const strengths = [
  {
    boldText: 'Problem Solver',
    text: 'I approach challenges methodically and find elegant solutions'
  },
  { boldText: 'Team Player', text: 'Experience collaborating in agile environments' },
  {
    boldText: 'Quality Focused',
    text: 'Strong believer in testing, code reviews, and documentation'
  },
  { boldText: 'Fast Learner', text: 'Quick to adapt to new technologies and frameworks' }
]

const hobbies = [
  {
    icon: 'mdi:book-open-variant',
    text: 'Reading tech blogs and staying updated with web trends',
    iconColor: 'text-yellow-500'
  },
  {
    icon: 'mdi:code-braces-box',
    text: 'Contributing to open source projects',
    iconColor: 'text-blue-500'
  },
  {
    icon: 'mdi:hiking',
    text: 'Hiking and exploring the Italian Alps',
    iconColor: 'text-green-500'
  },
  {
    icon: 'mdi:gamepad-variant',
    text: 'Gaming and UI/UX analysis in interactive media',
    iconColor: 'text-purple-500'
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
      <div class="mb-12">
        <SectionHeader icon="mdi:account-circle" title="About Me" />
      </div>

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
                  <InfoListItem
                    v-for="strength in strengths"
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
                    v-for="hobby in hobbies"
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
          title="Best Practices"
          icon="mdi:rocket-launch"
          icon-color="text-blue-500"
          :items="skills.practices"
          type="list"
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
