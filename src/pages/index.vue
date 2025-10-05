<script setup lang="ts">
useMeta({
  title: 'Mirko Bosetti | Home'
})
</script>

<template>
  <div class="flex flex-col items-start justify-center min-h-screen py-2 md:items-center px-4">
    <div class="min-h-screen flex flex-col items-start justify-center">
      <h1 class="text-2xl md:text-9xl font-bold">
        Hi, I'm <span class="text-yellow-500">MIRKO</span>!
      </h1>
      <p class="text-lg md:text-6xl mt-8 flex items-center gap-4">
        <span>I'm a Frontend Developer</span>
        <iconify-icon icon="lucide:laptop" class="text-green-500" />
      </p>
    </div>

    <Separator class="my-8" />
    Experiences
    <Separator class="my-8" />
    Education
    <Separator class="my-8" />
    Projects
    <Separator class="my-8" />
    Skills
    <Separator class="my-8" />
    Contact Me

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
