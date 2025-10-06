<script setup lang="ts">
const { slug } = useRoute('/projects/[slug]').params

interface Project {
  name: string
  tagline: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  category: string
  date: string
}

const projectsData: Record<string, Project> = {
  'portfolio-website': {
    name: 'Portfolio Website',
    tagline: 'Personal portfolio showcasing my work and skills',
    description:
      'A modern, responsive portfolio website built with Vue.js and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.',
    image: 'https://via.placeholder.com/800x400',
    category: 'Web Development',
    date: '2024',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    features: [
      'Fully responsive design that works on all devices',
      'Dark mode support with smooth transitions',
      'Interactive project showcase with filtering',
      'Optimized performance with lazy loading',
      'SEO-friendly structure',
      'Accessible to all users'
    ],
    links: {
      live: 'https://example.com',
      github: 'https://github.com/mirkobosetti/portfolio'
    }
  },
  'task-manager': {
    name: 'Task Manager App',
    tagline: 'Efficient task management for teams',
    description:
      'A collaborative task management application that helps teams organize, prioritize, and track their work. Built with Vue.js and integrates with popular productivity tools.',
    image: 'https://via.placeholder.com/800x400',
    category: 'Web Application',
    date: '2023',
    technologies: ['Vue.js', 'Nuxt.js', 'Pinia', 'PostgreSQL', 'Node.js'],
    features: [
      'Real-time collaboration with team members',
      'Drag-and-drop task organization',
      'Priority levels and due dates',
      'File attachments and comments',
      'Email notifications',
      'Advanced filtering and search'
    ],
    links: {
      demo: 'https://demo.example.com'
    }
  },
  'ecommerce-platform': {
    name: 'E-Commerce Platform',
    tagline: 'Modern online shopping experience',
    description:
      'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Designed for scalability and user experience.',
    image: 'https://via.placeholder.com/800x400',
    category: 'E-Commerce',
    date: '2023',
    technologies: ['Vue.js', 'Stripe', 'REST API', 'Tailwind CSS', 'MongoDB'],
    features: [
      'Product catalog with search and filtering',
      'Shopping cart and wishlist',
      'Secure payment processing with Stripe',
      'User authentication and profiles',
      'Order tracking and history',
      'Admin dashboard for inventory management'
    ]
  }
}

const project = computed(() => {
  const key = slug.toString().toLowerCase()
  return projectsData[key] || null
})

useMeta({
  title: project.value ? `Mirko Bosetti | ${project.value.name}` : `Mirko Bosetti | ${slug}`
})
</script>

<template>
  <div class="min-h-screen py-12 px-4 md:px-8 lg:px-16">
    <div v-if="!project" class="max-w-4xl mx-auto text-center py-32">
      <iconify-icon icon="mdi:folder-off-outline" class="text-9xl text-muted-foreground mb-8" />
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Project Not Found</h1>
      <p class="text-xl text-muted-foreground mb-8">The project "{{ slug }}" could not be found.</p>
      <Button as-child variant="default" size="lg">
        <RouterLink to="/">
          <iconify-icon icon="mdi:arrow-left" class="mr-2" />
          Back to Home
        </RouterLink>
      </Button>
    </div>

    <div v-else class="max-w-6xl mx-auto">
      <div class="mb-12">
        <Button as-child variant="ghost" size="sm" class="mb-6">
          <RouterLink to="/" class="flex items-center gap-2">
            <iconify-icon icon="mdi:arrow-left" />
            Back to Home
          </RouterLink>
        </Button>

        <div class="mb-8">
          <div class="flex flex-wrap items-center gap-4 mb-4">
            <Badge variant="secondary" class="text-base px-3 py-1">
              {{ project.category }}
            </Badge>
            <div class="flex items-center gap-2 text-muted-foreground">
              <iconify-icon icon="mdi:calendar" class="text-yellow-500" />
              <span>{{ project.date }}</span>
            </div>
          </div>

          <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ project.name }}</h1>
          <p class="text-2xl text-muted-foreground mb-6">{{ project.tagline }}</p>

          <div v-if="project.links" class="flex flex-wrap gap-4">
            <Button v-if="project.links.live" as-child size="lg" variant="default">
              <a :href="project.links.live" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="mdi:open-in-new" class="mr-2" />
                View Live Site
              </a>
            </Button>
            <Button v-if="project.links.github" as-child size="lg" variant="outline">
              <a :href="project.links.github" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="mdi:github" class="mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button v-if="project.links.demo" as-child size="lg" variant="outline">
              <a :href="project.links.demo" target="_blank" rel="noopener noreferrer">
                <iconify-icon icon="mdi:play-circle" class="mr-2" />
                View Demo
              </a>
            </Button>
          </div>
        </div>

        <Card class="overflow-hidden">
          <img :src="project.image" :alt="project.name" class="w-full h-auto object-cover" />
        </Card>
      </div>

      <Card class="mb-8">
        <CardHeader>
          <CardTitle class="flex items-center gap-3 text-3xl">
            <iconify-icon icon="mdi:information" class="text-yellow-500" />
            About This Project
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-lg leading-relaxed">{{ project.description }}</p>
        </CardContent>
      </Card>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <div class="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-3xl">
                <iconify-icon icon="mdi:star-box" class="text-yellow-500" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul class="space-y-3">
                <li
                  v-for="(feature, index) in project.features"
                  :key="index"
                  class="flex items-start gap-3 text-base"
                >
                  <iconify-icon
                    icon="mdi:check-circle"
                    class="text-green-500 text-xl mt-0.5 flex-shrink-0"
                  />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div class="md:col-span-1">
          <Card class="sticky top-8">
            <CardHeader>
              <CardTitle class="flex items-center gap-3 text-2xl">
                <iconify-icon icon="mdi:code-tags" class="text-yellow-500" />
                Technologies
              </CardTitle>
              <CardDescription>Tech stack used</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge
                  v-for="tech in project.technologies"
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

      <div class="mt-12 text-center">
        <Card class="bg-gradient-to-r from-yellow-500/10 to-green-500/10 border-yellow-500/20">
          <CardContent class="py-12">
            <h2 class="text-3xl font-bold mb-4">Interested in a similar project?</h2>
            <p class="text-lg text-muted-foreground mb-6">
              Let's discuss how I can help bring your ideas to life
            </p>
            <div class="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="default">
                <iconify-icon icon="mdi:email" class="mr-2 text-xl" />
                Get in Touch
              </Button>
              <Button as-child size="lg" variant="outline">
                <RouterLink to="/">
                  <iconify-icon icon="mdi:view-grid" class="mr-2 text-xl" />
                  View More Projects
                </RouterLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
