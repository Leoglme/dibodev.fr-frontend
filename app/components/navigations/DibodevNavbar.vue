<template>
  <nav>
    <ol>
      <li>
        <NuxtLink to="/">
          <DibodevLogo :size="30" :large="true" />
        </NuxtLink>
      </li>
    </ol>

    <ol>
      <li>
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="text-light-400 hover:text-light-200">
          {{ link.text }}
        </NuxtLink>
      </li>

      <li>
        <DibodevButton to="/contact" icon="Mail"> Contact </DibodevButton>
      </li>
    </ol>
  </nav>
</template>
<script setup lang="ts">
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import type { DibodevNavbarLink } from '~/core/types/DibodevNavbar'

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
</script>
