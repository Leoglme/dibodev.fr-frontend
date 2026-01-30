<template>
  <div
    class="border-primary-light grid max-w-6xl gap-12 rounded-2xl border-2 bg-gray-400 px-6 py-6 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-6"
  >
    <div class="grid gap-8">
      <div class="grid gap-3 sm:gap-4">
        <h4 class="text-2xl font-medium sm:text-3xl">{{ $t('home.pricing.title') }}</h4>
        <p class="text-sm font-normal">
          {{ $t('home.pricing.intro') }}
          <span class="text-primary-light">{{ $t('home.pricing.hours') }}</span
          >.
        </p>
      </div>

      <DibodevButton :to="localePath('/contact')" icon="Mail" class="hidden! w-full sm:block!">{{
        $t('home.pricing.requestQuote')
      }}</DibodevButton>
    </div>

    <div class="justify-left flex flex-col items-center gap-3 sm:justify-center">
      <h5 class="w-full text-left text-[32px] font-medium sm:text-center sm:text-5xl">
        <span class="text-primary-light">{{ $t('home.pricing.priceTTC') }}</span
        >{{ $t('home.pricing.pricePerDay') }}
      </h5>
      <p class="w-full text-left text-base font-normal sm:text-center">{{ $t('home.pricing.priceHT') }}</p>
    </div>

    <DibodevButton :to="localePath('/contact')" icon="Mail" class="w-full sm:hidden">{{
      $t('home.pricing.requestQuote')
    }}</DibodevButton>
  </div>
</template>
<script setup lang="ts">
import DibodevButton from '~/components/core/DibodevButton.vue'

const localePath = useLocalePath()
</script>
