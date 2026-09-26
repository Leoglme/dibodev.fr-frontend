<template>
  <section
    id="business-software-pricing"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-32 sm:px-8 sm:py-40"
  >
    <div class="grid w-full max-w-5xl gap-10 sm:gap-12">
      <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ t('businessSoftwarePage.pricing.title') }}</h2>

      <div class="grid gap-6 sm:grid-cols-2">
        <div
          v-for="pricingOffer in pricingOffers"
          :key="pricingOffer.title"
          class="grid content-start gap-3 rounded-2xl border-2 bg-gray-800 px-6 py-6"
          :class="pricingOffer.isHighlighted ? 'border-primary-light' : 'border-gray-400'"
        >
          <h3 class="text-base font-medium text-gray-100 sm:text-lg">{{ pricingOffer.title }}</h3>
          <p
            class="text-2xl font-semibold sm:text-3xl"
            :class="pricingOffer.isHighlighted ? 'text-primary-light' : 'text-gray-100'"
          >
            {{ pricingOffer.price }}
          </p>
          <p class="text-sm leading-7 text-gray-200">{{ pricingOffer.description }}</p>
        </div>
      </div>

      <div class="grid gap-1">
        <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
          {{ t('businessSoftwarePage.pricing.vatNote') }}
        </p>
        <p class="text-left text-sm leading-7 text-gray-200 sm:text-base">
          {{ t('businessSoftwarePage.pricing.note') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevBusinessSoftwarePricingOffer } from '~/core/types/DibodevBusinessSoftwarePage'
import { computed } from 'vue'

const { t } = useI18n()

const pricingOffers: ComputedRef<DibodevBusinessSoftwarePricingOffer[]> = computed(
  (): DibodevBusinessSoftwarePricingOffer[] => [
    {
      title: t('businessSoftwarePage.pricing.project.title'),
      price: t('businessSoftwarePage.pricing.project.price'),
      description: t('businessSoftwarePage.pricing.project.description'),
      isHighlighted: true,
    },
    {
      title: t('businessSoftwarePage.pricing.maintenance.title'),
      price: t('businessSoftwarePage.pricing.maintenance.price'),
      description: t('businessSoftwarePage.pricing.maintenance.description'),
      isHighlighted: false,
    },
  ],
)
</script>
