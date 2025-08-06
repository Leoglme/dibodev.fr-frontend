<template>
  <section
    id="favorite-projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 py-10 sm:px-8 sm:pt-40 sm:pb-8"
  >
    <div class="grid gap-14 sm:gap-12">
      <div class="justify-left flex items-center gap-4 sm:justify-center">
        <h2 class="text-left text-2xl font-semibold sm:text-center sm:text-[32px]">Mes projets favoris</h2>
        <svg
          class="heartbeat h-[24px] w-[26px] sm:h-[30px] sm:w-[34px]"
          width="34"
          height="30"
          viewBox="0 0 34 30"
          fill="none"
        >
          <path
            d="M24.5 0C21.35 0 18.575 1.75 17 4.5C15.425 1.75 12.65 0 9.5 0C4.55 0 0.5 4.5 0.5 10C0.5 19.9167 17 30 17 30C17 30 33.5 20 33.5 10C33.5 4.5 29.45 0 24.5 0Z"
            fill="#F44336"
          />
        </svg>
      </div>
      <div class="flex w-full max-w-7xl flex-col-reverse gap-10 sm:grid sm:gap-8">
        <div class="flex w-full items-center justify-end">
          <DibodevLink link="/projects">
            <span>Voir tous les projets</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" />
          </DibodevLink>
        </div>

        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <DibodevProjectCard
            v-for="(favoriteProject, index) in favoriteProjects"
            :key="favoriteProject.name"
            :name="favoriteProject.name"
            :description="favoriteProject.description"
            :createdAt="favoriteProject.createdAt"
            :logo="favoriteProject.logo"
            :primaryColor="favoriteProject.primaryColor"
            :secondaryColor="favoriteProject.secondaryColor"
            data-aos="zoom-in"
            :data-aos-delay="index * 100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'

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
