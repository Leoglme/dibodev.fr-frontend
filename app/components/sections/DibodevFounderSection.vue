<template>
  <section id="founder" class="bg-gray-800 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div
      class="max-w-site mx-auto grid w-full items-center gap-12 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-20"
    >
      <div class="relative mx-auto w-full max-w-sm lg:mx-0">
        <div class="bg-accent-tint absolute -top-4 -left-4 h-32 w-32 rounded-2xl" aria-hidden="true" />
        <img
          :src="PORTRAIT_SRC"
          :srcset="PORTRAIT_SRCSET"
          :sizes="PORTRAIT_SIZES"
          :alt="$t('home.founder.portraitAlt')"
          :width="PORTRAIT_SIZE"
          :height="PORTRAIT_SIZE"
          loading="lazy"
          decoding="async"
          class="relative aspect-[4/5] w-full rounded-xl object-cover shadow-[0_18px_40px_rgba(20,20,20,0.08)]"
        />
      </div>

      <div class="grid gap-7">
        <div class="grid gap-4">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ $t('home.founder.eyebrow') }}</p>
          <h2
            class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]"
          >
            {{ $t('home.founder.title', { years: YEARS_OF_EXPERIENCE }) }}
          </h2>
        </div>
        <p class="text-[17px] leading-7 text-gray-200">{{ $t('home.founder.paragraph1') }}</p>
        <p class="text-[17px] leading-7 text-gray-200">{{ $t('home.founder.paragraph2') }}</p>

        <dl class="grid gap-6 border-t border-gray-300 pt-7 lg:gap-4">
          <div v-for="fact in facts" :key="fact.label" class="flex items-start gap-4">
            <span
              class="bg-accent-tint text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
              aria-hidden="true"
            >
              <DibodevIcon :name="fact.icon" mode="stroke" :width="18" :height="18" />
            </span>
            <div class="grid gap-0.5">
              <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ fact.label }}</dt>
              <dd class="text-[15px] leading-6 text-gray-100">{{ fact.value }}</dd>
            </div>
          </div>
        </dl>

        <DibodevLink :link="localePath('about')">
          <span>{{ $t('home.founder.cta') }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </DibodevLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { CareerUtils } from '~/core/utils/CareerUtils'

type FounderFact = {
  label: string
  value: string
  icon: string
}

const PORTRAIT_SIZE: number = 800
const PORTRAIT_SRC: string = '/images/about/leo-guillaume-portrait-800.webp'
const PORTRAIT_SRCSET: string =
  '/images/about/leo-guillaume-portrait-400.webp 400w, /images/about/leo-guillaume-portrait-800.webp 800w'
const PORTRAIT_SIZES: string = '(min-width: 1024px) 384px, (min-width: 640px) 384px, calc(100vw - 48px)'

/** Facts listed under the text (i18n `home.founder.facts.*`), each with its line icon. */
const FACT_ICONS: Record<string, string> = {
  location: 'MapPin',
  area: 'Monitor',
  education: 'CheckCircle',
}

const YEARS_OF_EXPERIENCE: number = CareerUtils.getYearsOfExperience()

const { t } = useI18n()
const localePath = useLocalePath()

const facts: ComputedRef<FounderFact[]> = computed((): FounderFact[] =>
  Object.entries(FACT_ICONS).map(
    ([key, icon]: [string, string]): FounderFact => ({
      label: t(`home.founder.facts.${key}.label`),
      value: t(`home.founder.facts.${key}.value`),
      icon,
    }),
  ),
)
</script>
