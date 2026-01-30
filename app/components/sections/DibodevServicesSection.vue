<template>
  <section
    id="services"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 py-36 sm:px-8 sm:py-60"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-center gap-4 sm:gap-8">
        <h2 class="text-left text-2xl font-semibold sm:text-center sm:text-[32px]">{{ $t('home.services.title') }}</h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:max-w-3xl sm:text-base">
          {{ $t('home.services.intro') }}
        </p>
      </div>

      <div class="grid gap-x-20 gap-y-18 pt-4 sm:grid-cols-2">
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
import type { ComputedRef } from 'vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'

type DibodevServiceItem = {
  title: string
  description: string
  color: string
  icon: DibodevServiceIconName
}

/* I18N */
const { t } = useI18n()

/* DATAS */
const services: ComputedRef<DibodevServiceItem[]> = computed((): DibodevServiceItem[] => [
  {
    title: t('home.services.items.projectLaunch.title'),
    description: t('home.services.items.projectLaunch.description'),
    color: '#E2F3FF',
    icon: 'seo',
  },
  {
    title: t('home.services.items.website.title'),
    description: t('home.services.items.website.description'),
    color: '#EFEAFF',
    icon: 'website-content',
  },
  {
    title: t('home.services.items.mobileApps.title'),
    description: t('home.services.items.mobileApps.description'),
    color: '#F1E8FF',
    icon: 'mobile',
  },
  {
    title: t('home.services.items.businessInterfaces.title'),
    description: t('home.services.items.businessInterfaces.description'),
    color: '#FFF2F2',
    icon: 'apps',
  },
  {
    title: t('home.services.items.apiConnectors.title'),
    description: t('home.services.items.apiConnectors.description'),
    color: '#FFE7FB',
    icon: 'cloud-computing',
  },
  {
    title: t('home.services.items.seo.title'),
    description: t('home.services.items.seo.description'),
    color: '#ECFFDA',
    icon: 'seo-tag',
  },
  {
    title: t('home.services.items.cloudDevOps.title'),
    description: t('home.services.items.cloudDevOps.description'),
    color: '#DBF7F5',
    icon: 'cloud-storage',
  },
  {
    title: t('home.services.items.ai.title'),
    description: t('home.services.items.ai.description'),
    color: '#EDEAFF',
    icon: 'ai',
  },
])
</script>
