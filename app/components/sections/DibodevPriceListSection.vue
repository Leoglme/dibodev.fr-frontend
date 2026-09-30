<template>
  <section :id="props.anchorId" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-10 lg:gap-12">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" align="center" />

      <div class="hidden overflow-hidden rounded-2xl border border-gray-300 bg-white md:block">
        <table class="w-full border-collapse text-left">
          <thead>
            <tr class="border-b border-gray-300">
              <th scope="col" class="text-muted w-[22%] px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.productColumnLabel }}
              </th>
              <th scope="col" class="text-muted px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.coverageColumnLabel }}
              </th>
              <th scope="col" class="text-muted w-[30%] px-6 py-4 text-xs font-medium tracking-[0.08em] uppercase">
                {{ props.priceColumnLabel }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in props.products" :key="product.name" class="border-b border-gray-300 last:border-b-0">
              <th scope="row" class="px-6 py-4 align-top text-[15px] font-medium text-gray-100">{{ product.name }}</th>
              <td class="px-6 py-4 align-top text-sm leading-6 text-gray-200">{{ product.coverage }}</td>
              <td class="px-6 py-4 align-top">
                <span class="block text-[15px] font-medium text-gray-100 tabular-nums">{{ product.price }}</span>
                <span class="text-muted block text-sm leading-6">{{ product.priceCondition }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul class="grid gap-3 md:hidden">
        <li
          v-for="product in props.products"
          :key="`card-${product.name}`"
          class="grid gap-1.5 rounded-2xl border border-gray-300 bg-white p-5"
        >
          <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
            <span class="text-base font-medium text-gray-100">{{ product.name }}</span>
            <span class="text-[15px] font-medium whitespace-nowrap text-gray-100 tabular-nums">{{
              product.price
            }}</span>
          </div>
          <p class="text-sm leading-6 text-gray-200">{{ product.coverage }}</p>
          <p class="text-muted text-sm leading-6">{{ product.priceCondition }}</p>
        </li>
      </ul>

      <slot name="footer" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevPricedProduct, DibodevPriceListSectionProps } from '~/core/types/DibodevPriceListSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

const props: DibodevPriceListSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'prices',
  },
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  productColumnLabel: {
    type: String as PropType<string>,
    required: true,
  },
  coverageColumnLabel: {
    type: String as PropType<string>,
    required: true,
  },
  priceColumnLabel: {
    type: String as PropType<string>,
    required: true,
  },
  products: {
    type: Array as PropType<DibodevPricedProduct[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'offWhite',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
