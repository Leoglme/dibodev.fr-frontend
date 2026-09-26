<template>
  <section
    id="business-software-steps"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center bg-gray-900 px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-start gap-4">
        <h2 class="text-left text-[22px] font-semibold sm:text-[32px]">{{ t('businessSoftwarePage.steps.title') }}</h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
          {{ t('businessSoftwarePage.steps.subtitle') }}
        </p>
      </div>

      <div class="grid gap-x-20 gap-y-16 lg:grid-cols-2">
        <DibodevWhyWorkWithMeItem
          v-for="(step, index) in steps"
          :key="step.number"
          :number="step.number"
          :label="step.label"
          :title="step.title"
          :description="step.description"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevBusinessSoftwareStep } from '~/core/types/DibodevBusinessSoftwarePage'
import { computed } from 'vue'
import DibodevWhyWorkWithMeItem from '~/components/sections/DibodevWhyWorkWithMeItem.vue'

const { t } = useI18n()

const steps: ComputedRef<DibodevBusinessSoftwareStep[]> = computed((): DibodevBusinessSoftwareStep[] => [
  {
    number: 1,
    label: t('businessSoftwarePage.steps.discovery.label'),
    title: t('businessSoftwarePage.steps.discovery.title'),
    description: t('businessSoftwarePage.steps.discovery.description'),
  },
  {
    number: 2,
    label: t('businessSoftwarePage.steps.quote.label'),
    title: t('businessSoftwarePage.steps.quote.title'),
    description: t('businessSoftwarePage.steps.quote.description'),
  },
  {
    number: 3,
    label: t('businessSoftwarePage.steps.build.label'),
    title: t('businessSoftwarePage.steps.build.title'),
    description: t('businessSoftwarePage.steps.build.description'),
  },
  {
    number: 4,
    label: t('businessSoftwarePage.steps.support.label'),
    title: t('businessSoftwarePage.steps.support.title'),
    description: t('businessSoftwarePage.steps.support.description'),
  },
])
</script>
