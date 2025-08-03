<template>
  <section class="gap gap-12 p-8">
    <div class="flex items-center justify-center gap-4">
      <h2 class="text-center text-3xl font-semibold">Mes projets favoris</h2>
      <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24.5 0C21.35 0 18.575 1.75 17 4.5C15.425 1.75 12.65 0 9.5 0C4.55 0 0.5 4.5 0.5 10C0.5 19.9167 17 30 17 30C17 30 33.5 20 33.5 10C33.5 4.5 29.45 0 24.5 0Z"
          fill="#F44336"
        />
      </svg>
    </div>
    <div class="grid gap-8">
      <div class="flex w-full items-center justify-end">
        <DibodevLink link="/projects" />
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        <DibodevProjectCard
          v-for="favoriteProject in favoriteProjects"
          :key="favoriteProject.name"
          :name="favoriteProject.name"
          :description="favoriteProject.description"
          :createdAt="favoriteProject.createdAt"
          :logo="favoriteProject.logo"
          :primaryColor="favoriteProject.primaryColor"
          :secondaryColor="favoriteProject.secondaryColor"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'

const favoriteProjects: DibodevProjectCardProps[] = [
  {
    name: 'ApartEasy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet pellentesque diam, sed viverra dui lobortis id. Donec dapibus arcu et diam interdum, et feugiat velit sagittis.',
    createdAt: '25/04/1998',
    logo: '/images/projects/aparteasy.png',
    primaryColor: '#D30A5E',
    secondaryColor: '#101623',
  },
  {
    name: 'freeAds',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet pellentesque diam, sed viverra dui lobortis id. Donec dapibus arcu et diam interdum, et feugiat velit sagittis.',
    createdAt: '25/04/1998',
    logo: '/images/projects/freeAds.png',
    primaryColor: '#FF6E14',
    secondaryColor: '#FFFFFF',
  },
  {
    name: 'Nextodo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet pellentesque diam, sed viverra dui lobortis id. Donec dapibus arcu et diam interdum, et feugiat velit sagittis.',
    createdAt: '25/04/1998',
    logo: '/images/projects/nextodo.png',
    primaryColor: '#F5A623',
    secondaryColor: '#1F1F1F',
  },
  {
    name: 'Spotify',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet pellentesque diam, sed viverra dui lobortis id. Donec dapibus arcu et diam interdum, et feugiat velit sagittis.',
    createdAt: '25/04/1998',
    logo: '/images/projects/spotify.png',
    primaryColor: '#1ED760',
    secondaryColor: '#FFFFFF',
  },
]
</script>
