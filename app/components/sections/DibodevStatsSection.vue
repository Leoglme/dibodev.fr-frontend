<template>
  <section class="relative z-2 flex items-center justify-center bg-gray-800 p-8">
    <div class="grid w-full max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-4">
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
