<template>
  <section class="flex items-center justify-center bg-gray-800 p-8">
    <div class="flex items-center justify-around">
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
