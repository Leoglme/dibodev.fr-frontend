<template>
  <section
    id="services"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 py-10 sm:px-8 sm:py-8"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-center gap-4 sm:gap-8">
        <h2 class="text-left text-2xl font-semibold sm:text-center sm:text-[32px]">Mes services</h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:max-w-2xl sm:text-base">
          Je vous accompagne dans la conception de solutions digitales sur mesure, qu’il s’agisse de simplifier vos
          processus, d’optimiser votre présence en ligne, de créer une interface métier performante ou de connecter
          intelligemment vos outils existants.
        </p>
      </div>

      <div class="grid gap-20 pt-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        <DibodevServiceItem
          v-for="(service, index) in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :color="service.color"
          data-aos="fade-right"
          :data-aos-delay="index * 100"
        >
          <template #icon>
            <DibodevServiceIcon :serviceIconName="service.icon" />
          </template>
        </DibodevServiceItem>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'

type DibodevServiceItem = {
  title: string
  description: string
  color: string
  icon: string
}

/* DATAS */
const services: DibodevServiceItem[] = [
  {
    title: 'Web Application',
    description: 'Platform independant business solutions for maximum availability',
    color: '#FFF2F2',
    icon: 'apps',
  },
  {
    title: 'Mobile Applications',
    description: 'The simplest but robust technology to accompany with you',
    color: '#F1E8FF',
    icon: 'mobile',
  },
  {
    title: 'SEO',
    description: 'Let the world find you on top of others',
    color: '#E2F3FF',
    icon: 'seo',
  },
  {
    title: 'Iot/ AI/ RObotic',
    description: 'Advanced autonomous technologies to make life simple',
    color: '#FFE7FB',
    icon: 'cloud-computing',
  },
]
</script>
