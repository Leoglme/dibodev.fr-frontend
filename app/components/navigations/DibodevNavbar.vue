<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 max-w-screen border-b bg-gray-900/75 px-6 py-3.5 backdrop-blur-[12px] backdrop-saturate-[1.8] transition-all duration-600 ease-linear"
    :class="scrollPosition === 0 ? 'border-b-transparent' : 'border-b-gray-300'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <ol>
        <li>
          <NuxtLink to="/">
            <DibodevLogo :size="30" :large="true" />
          </NuxtLink>
        </li>
      </ol>

      <ol class="flex items-center justify-center gap-8 text-base font-normal">
        <li class="flex items-center justify-center gap-8">
          <DibodevLink v-for="link in links" :key="link.to" :link="link.to" color="#f5f4fb">
            {{ link.text }}
          </DibodevLink>
        </li>
      </ol>

      <ol class="flex items-center justify-center gap-8 text-base font-normal">
        <li>
          <DibodevButton to="/contact" icon="Mail" size="sm"> Me contacter </DibodevButton>
        </li>
      </ol>
    </div>
  </nav>
</template>
<script setup lang="ts">
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import type { DibodevNavbarLink } from '~/core/types/DibodevNavbar'
import type { Ref } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'

/* DATAS */
const links: DibodevNavbarLink[] = [
  {
    text: 'Mes services',
    to: '/services',
  },
  {
    text: 'Mes projets',
    to: '/projects',
  },
  {
    text: 'Tarif',
    to: '/pricing',
  },
]

// Manage scroll position
const scrollPosition: Ref<number> = ref(0)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
