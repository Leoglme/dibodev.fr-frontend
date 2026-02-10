<template>
  <section
    id="why-work-with-me"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center bg-gray-900 px-6 py-32 sm:px-8 sm:py-56"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-start gap-4">
        <h2 class="text-left text-2xl font-semibold sm:text-[32px]">
          {{ $t('home.whyWorkWithMe.title') }}
        </h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
          {{ $t('home.whyWorkWithMe.subtitle') }}
        </p>
      </div>

      <div class="grid gap-x-20 gap-y-16 sm:grid-cols-2">
        <DibodevWhyWorkWithMeItem
          v-for="(item, index) in items"
          :key="item.number"
          :number="item.number"
          :label="item.label"
          :title="item.title"
          :description="item.description"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DibodevWhyWorkWithMeItem from '~/components/sections/DibodevWhyWorkWithMeItem.vue'

const { t } = useI18n()

type WhyWorkWithMeNumber = 1 | 2 | 3 | 4

type WhyWorkWithMeItem = {
  number: WhyWorkWithMeNumber
  label: string
  title: string
  description: string
}

const items = computed((): WhyWorkWithMeItem[] => [
  {
    number: 1,
    label: t('home.whyWorkWithMe.items.one.label'),
    title: t('home.whyWorkWithMe.items.one.title'),
    description: t('home.whyWorkWithMe.items.one.description'),
  },
  {
    number: 2,
    label: t('home.whyWorkWithMe.items.two.label'),
    title: t('home.whyWorkWithMe.items.two.title'),
    description: t('home.whyWorkWithMe.items.two.description'),
  },
  {
    number: 3,
    label: t('home.whyWorkWithMe.items.three.label'),
    title: t('home.whyWorkWithMe.items.three.title'),
    description: t('home.whyWorkWithMe.items.three.description'),
  },
  {
    number: 4,
    label: t('home.whyWorkWithMe.items.four.label'),
    title: t('home.whyWorkWithMe.items.four.title'),
    description: t('home.whyWorkWithMe.items.four.description'),
  },
])
</script>
