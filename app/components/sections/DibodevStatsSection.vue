<template>
  <section class="relative z-2 flex items-center justify-center bg-gray-800 px-6 py-20 sm:px-8 sm:py-8">
    <div class="grid w-full max-w-7xl grid-cols-2 gap-x-8 gap-y-20 sm:gap-x-6 sm:gap-y-6 md:grid-cols-4">
      <DibodevStat v-for="(stat, index) in stats" :key="index" :value="stat.value" :label="stat.label" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevStat from '~/components/data-displays/DibodevStat.vue'

const stats: DibodevStatItemProps[] = [
  {
    value: '6',
    label: 'Happy Clients',
  },
  {
    value: '11',
    label: 'Completed Projects',
  },
  {
    value: '7M',
    label: 'Transsactions',
  },
  {
    value: '6000+',
    label: 'Customers',
  },
]
</script>
