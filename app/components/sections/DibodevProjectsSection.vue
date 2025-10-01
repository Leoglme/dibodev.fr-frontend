<template>
  <section
    id="projects"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="300"
    class="relative z-2 grid h-full min-h-screen w-screen max-w-screen items-center justify-center gap-18 px-6 py-24 sm:px-8 sm:py-36"
  >
    <div class="flex w-full items-center justify-center">
      <div class="flex w-full max-w-4xl flex-col-reverse items-center justify-center gap-6 md:flex-row">
        <div class="flex w-full items-center justify-center gap-6">
          <DibodevSelect id="language-select" :options="languages" v-model="selectedLanguage" />
          <DibodevSelect id="category-select" :options="categories" v-model="selectedCategory" />
        </div>

        <DibodevSearchBar
          title="Rechercher un projet"
          placeholder="Rechercher un projet... (Ctrl + E)"
          v-model:value="searchTerm"
        />
      </div>
    </div>

    <div class="grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  </section>
</template>

<script lang="ts" setup>
import type { DibodevProjectCardProps } from '~/core/types/DibodevProjectCard'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DibodevSearchBar from '~/components/inputs/DibodevSearchBar.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'
import DibodevSelect from '~/components/core/DibodevSelect.vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'

/* DATAS */
const languages: DibodevSelectOption[] = [
  { label: 'Typescript', value: 'typescript' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'Python', value: 'python' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'PHP', value: 'php' },
  { label: 'Go', value: 'go' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin' },
]

const categories: DibodevSelectOption[] = [
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'API', value: 'api' },
  { label: 'Library', value: 'library' },
  { label: 'Tool', value: 'tool' },
]

/* REFS */
const searchTerm: Ref<string> = ref('')
const selectedLanguage: Ref<DibodevSelectOption> = ref({ label: 'Typescript', value: 'typescript' })
const selectedCategory: Ref<DibodevSelectOption> = ref({ label: 'Web', value: 'web' })

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
