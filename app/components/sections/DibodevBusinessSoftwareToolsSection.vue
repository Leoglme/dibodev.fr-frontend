<template>
  <section
    id="business-software-tools"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-start gap-4 sm:gap-8">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('businessSoftwarePage.tools.title') }}</h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
          {{ t('businessSoftwarePage.tools.intro') }}
        </p>
      </div>

      <div class="grid gap-x-20 gap-y-18 pt-4 sm:grid-cols-2">
        <DibodevServiceItem
          v-for="(tool, index) in tools"
          :key="tool.title"
          :title="tool.title"
          :description="tool.description"
          :color="tool.color"
          data-aos="fade-right"
          :data-aos-delay="index * 100"
        >
          <template #icon>
            <DibodevServiceIcon :serviceIconName="tool.icon" />
          </template>
        </DibodevServiceItem>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevBusinessSoftwareTool } from '~/core/types/DibodevBusinessSoftwarePage'
import { computed } from 'vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'

const { t } = useI18n()

const tools: ComputedRef<DibodevBusinessSoftwareTool[]> = computed((): DibodevBusinessSoftwareTool[] => [
  {
    title: t('businessSoftwarePage.tools.planning.title'),
    description: t('businessSoftwarePage.tools.planning.description'),
    color: '#EFEAFF',
    icon: 'apps',
  },
  {
    title: t('businessSoftwarePage.tools.stock.title'),
    description: t('businessSoftwarePage.tools.stock.description'),
    color: '#E2F3FF',
    icon: 'cloud-storage',
  },
  {
    title: t('businessSoftwarePage.tools.quotes.title'),
    description: t('businessSoftwarePage.tools.quotes.description'),
    color: '#FFE7FB',
    icon: 'website-content',
  },
  {
    title: t('businessSoftwarePage.tools.time.title'),
    description: t('businessSoftwarePage.tools.time.description'),
    color: '#ECFFDA',
    icon: 'cloud-computing',
  },
  {
    title: t('businessSoftwarePage.tools.booking.title'),
    description: t('businessSoftwarePage.tools.booking.description'),
    color: '#F1E8FF',
    icon: 'mobile',
  },
  {
    title: t('businessSoftwarePage.tools.ai.title'),
    description: t('businessSoftwarePage.tools.ai.description'),
    color: '#EDEAFF',
    icon: 'ai',
  },
])
</script>
