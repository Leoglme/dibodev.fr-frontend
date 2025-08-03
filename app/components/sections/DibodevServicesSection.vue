<template>
  <section class="container mx-auto grid gap-16">
    <div class="grid gap-6">
      <h2 class="text-center text-3xl font-bold">Mes services</h2>
      <p class="text-center text-lg text-gray-300">
        Platform independant business solutions for maximum availability Platform independant business solutions for
        maximum availability
      </p>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-6">
      <DibodevServiceItem
        v-for="service in services"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :color="service.color"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import type { DibodevServiceItemProps } from '~/core/types/DibodevServiceItem'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
/* DATAS */
const services: DibodevServiceItemProps[] = [
  {
    title: 'Web Application',
    description: 'Platform independant business solutions for maximum availability',
    color: '#FFF2F2',
  },
  {
    title: 'Mobile Applications',
    description: 'The simplest but robust technology to accompany with you',
    color: '#F1E8FF',
  },
  {
    title: 'SEO',
    description: 'Let the world find you on top of others',
    color: '#E2F3FF',
  },
  {
    title: 'Iot/ AI/ RObotic',
    description: 'Advanced autonomous technologies to make life simple',
    color: '#FFE7FB',
  },
]
</script>
