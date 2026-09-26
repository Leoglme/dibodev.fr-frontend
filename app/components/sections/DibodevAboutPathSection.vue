<template>
  <section
    id="about-path"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center bg-gray-900 px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-5xl gap-12">
      <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('aboutPage.path.title') }}</h2>

      <ol class="grid gap-10 border-l-2 border-gray-400 pl-6 sm:pl-8">
        <li v-for="step in steps" :key="step.title" class="grid gap-2">
          <span class="text-primary-light text-sm font-semibold">{{ step.period }}</span>
          <h3 class="text-base font-medium text-gray-100 sm:text-lg">{{ step.title }}</h3>
          <p class="text-sm leading-7 text-gray-200 sm:text-base">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevAboutPathStep } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'

const PATH_STEP_KEYS: string[] = ['webAcademy', 'kodeva', 'izidoor', 'master', 'dibodev']

const { t } = useI18n()

const steps: ComputedRef<DibodevAboutPathStep[]> = computed((): DibodevAboutPathStep[] =>
  PATH_STEP_KEYS.map(
    (key: string): DibodevAboutPathStep => ({
      period: t(`aboutPage.path.${key}.period`),
      title: t(`aboutPage.path.${key}.title`),
      description: t(`aboutPage.path.${key}.description`),
    }),
  ),
)
</script>
