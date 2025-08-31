<template>
  <section
    id="stats"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex items-center justify-center bg-gray-800 px-6 py-20 sm:px-8 sm:py-8"
  >
    <div class="grid w-full max-w-7xl grid-cols-2 gap-x-8 gap-y-20 sm:gap-x-6 sm:gap-y-6 md:grid-cols-4">
      <DibodevStat
        v-for="(stat, index) in stats"
        :key="index"
        :value="stat.value.toString()"
        :label="stat.label"
        data-aos="zoom-in"
        :data-aos-delay="index * 150"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevStat from '~/components/data-displays/DibodevStat.vue'
import type { ComputedRef } from 'vue'

const { data: repoCounts } = await useFetch(`/api/github/repos`)

/* COMPUTED */
const yearExperience: ComputedRef<string> = computed(() => {
  return new Date().getFullYear() - 2016 + ''
})

const numberOfRepos: ComputedRef<number> = computed(() => {
  const numberOfPrivateRepos: number = repoCounts.value?.private || 0
  const numberOfPublicRepos: number = repoCounts.value?.public || 0
  const numberOfOrganizationRepos: number = repoCounts.value?.organization || 0

  return numberOfPrivateRepos + numberOfPublicRepos + numberOfOrganizationRepos
})

/* DATAS */
const stats: DibodevStatItemProps[] = [
  {
    value: yearExperience.value,
    label: "Années d'expérience",
  },
  {
    value: '4',
    label: 'Années en entreprise',
  },
  {
    value: numberOfRepos.value,
    label: 'Projets réalisés',
  },
  {
    value: '100%',
    label: 'Passion & implication',
  },
]
</script>
