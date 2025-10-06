<script setup lang="ts">
import logoCving from '@/assets/images/logo_cving.png'
import logoOripan from '@/assets/images/logo_oripan.jpeg'

useMeta({
  title: 'Mirko Bosetti | Home'
})

type contribution = {
  description: string
}

type workExperience = {
  step: number
  company: company
  location: string
  remote: boolean
  logo: string
  period: string
  title: string
  description: string
  contributions?: contribution[]
  workflow?: string[]
}

type company = {
  name: string
  location: string
  description: string
  linkedin: string
}

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

    <div class="min-h-[50vh] my-16 max-w-3xl">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:account-circle" class="inline-block mr-2 text-yellow-500" />
        <span>About Me</span>
      </h2>
      <div class="text-2xl mt-24">
        <p>
          Frontend Developer with 6+ years of experience writing web applications. I love Vue.js,
          Tailwind CSS, and TypeScript.
        </p>
        <p class="mt-6">
          I am passionate about creating user-friendly and accessible web applications that provide
          a seamless experience across all devices.
        </p>
      </div>
    </div>

    <Separator />

    <div class="min-h-[50vh] my-16 max-w-3xl" v-if="workExperiences.length">
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
            </StepperDescription>
          </div>
        </StepperItem>
      </Stepper>
    </div>

    <Separator class="my-8" />
    <div class="min-h-[50vh]">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:school" class="inline-block mr-2 text-yellow-500" />
        <span>Education</span>
      </h2>
      <p class="text-2xl max-w-3xl">
        I hold a degree in Computer Science and have completed several certifications in web
        development, focusing on modern frameworks and best practices.
      </p>
    </div>
    <Separator class="my-8" />
    <div class="min-h-[50vh]">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:puzzle-heart" class="inline-block mr-2 text-yellow-500" />
        <span>Projects</span>
      </h2>
      <p class="text-2xl max-w-3xl">
        Here are some of the projects I've worked on, showcasing my skills in Vue.js, Tailwind CSS,
        and TypeScript.
      </p>
      <ul class="list-disc ml-6">
        <li>Project A - A web application for managing tasks.</li>
        <li>Project B - An e-commerce platform with a focus on user experience.</li>
        <li>Project C - A portfolio website to showcase my work.</li>
      </ul>
    </div>
    <Separator class="my-8" />
    <div class="min-h-[50vh]">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:lightbulb-on" class="inline-block mr-2 text-yellow-500" />
        <span>Skills</span>
      </h2>
      <p class="text-2xl max-w-3xl">
        Proficient in Vue.js, Tailwind CSS, TypeScript, JavaScript, HTML5, CSS3, Git, and Agile
        methodologies. Strong understanding of web performance optimization, accessibility
        standards, and responsive design principles.
      </p>
    </div>
    <Separator class="my-8" />
    <div class="min-h-[50vh]">
      <h2 class="text-5xl font-bold mb-4 flex items-center gap-4">
        <iconify-icon icon="mdi:phone-alert" class="inline-block mr-2 text-yellow-500" />
        <span>Contact Me</span>
      </h2>
      <p class="text-2xl max-w-3xl">
        Feel free to reach out to me via email at
        <a href="mailto:mirkobosetti@example.com" class="text-blue-500">mirkobosetti@example.com</a>
        or connect with me on LinkedIn at
        <a href="https://www.linkedin.com/in/mirkobosetti" class="text-blue-500"
          >linkedin.com/in/mirkobosetti</a
        >.
      </p>
    </div>

    <Carousel class="mt-32 max-w-8/12">
      <CarouselContent>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
        <CarouselItem class="md:basis-1/2 lg:basis-1/3">
          <ProjectCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
