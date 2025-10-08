<script lang="ts" setup>
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <NavigationMenu
    class="p-2 md:p-4 flex items-center justify-center gap-1 md:gap-4 max-w-screen h-16 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b"
  >
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/#about"
          @click.prevent="scrollToSection('about')"
          class="group flex items-center gap-2"
        >
          <iconify-icon
            icon="mdi:account-circle"
            class="text-xl md:text-2xl md:hidden group-hover:text-yellow-500 transition-colors"
          />
          <p
            class="hidden md:block text-xl group-hover:text-yellow-500 transition-colors cursor-pointer"
          >
            About
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/#experiences"
          @click.prevent="scrollToSection('experiences')"
          class="group flex items-center gap-2"
        >
          <iconify-icon
            icon="mdi:briefcase"
            class="text-xl md:text-2xl md:hidden group-hover:text-yellow-500 transition-colors"
          />
          <p
            class="hidden md:block text-xl group-hover:text-yellow-500 transition-colors cursor-pointer"
          >
            Experiences
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/#education"
          @click.prevent="scrollToSection('education')"
          class="group flex items-center gap-2"
        >
          <iconify-icon
            icon="mdi:school"
            class="text-xl md:text-2xl md:hidden group-hover:text-yellow-500 transition-colors"
          />
          <p
            class="hidden md:block text-xl group-hover:text-yellow-500 transition-colors cursor-pointer"
          >
            Education
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/#projects"
          @click.prevent="scrollToSection('projects')"
          class="group flex items-center gap-2"
        >
          <iconify-icon
            icon="mdi:puzzle-heart"
            class="text-xl md:text-2xl md:hidden group-hover:text-yellow-500 transition-colors"
          />
          <p
            class="hidden md:block text-xl group-hover:text-yellow-500 transition-colors cursor-pointer"
          >
            Projects
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/#skills"
          @click.prevent="scrollToSection('skills')"
          class="group flex items-center gap-2"
        >
          <iconify-icon
            icon="mdi:lightbulb-on"
            class="text-xl md:text-2xl md:hidden group-hover:text-yellow-500 transition-colors"
          />
          <p
            class="hidden md:block text-xl group-hover:text-yellow-500 transition-colors cursor-pointer"
          >
            Skills
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>

    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink
          href="/#contact"
          @click.prevent="scrollToSection('contact')"
          class="group flex items-center gap-2"
        >
          <iconify-icon
            icon="mdi:email"
            class="text-xl md:text-2xl md:hidden group-hover:text-yellow-500 transition-colors"
          />
          <p
            class="hidden md:block text-xl group-hover:text-yellow-500 transition-colors cursor-pointer"
          >
            Contact
          </p>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
