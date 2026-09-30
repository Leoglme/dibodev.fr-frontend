<template>
  <section class="relative w-full overflow-x-clip px-4 pt-[104px] pb-16 sm:px-8 sm:pt-[120px] lg:pt-[144px] lg:pb-24">
    <div
      class="bg-primary/10 pointer-events-none absolute -top-40 right-[-6%] h-[28rem] w-[28rem] rounded-full blur-[110px]"
      aria-hidden="true"
    />
    <div
      class="bg-accent-tint pointer-events-none absolute top-48 left-[-12%] h-[22rem] w-[22rem] rounded-full opacity-70 blur-[110px]"
      aria-hidden="true"
    />

    <div class="relative mx-auto grid w-full max-w-5xl gap-8 sm:gap-10">
      <div class="grid justify-items-start gap-4 text-left sm:justify-items-center sm:gap-5 sm:text-center">
        <DibodevBreadcrumb :items="props.breadcrumbs" align="centerFromSmallScreens" />
        <h1
          class="text-[32px] leading-[1.12] font-medium tracking-[-0.01em] text-gray-100 sm:text-[44px] lg:text-[52px]"
        >
          <DibodevHyphenSafeText :text="props.titleBefore" /><span class="text-primary"
            ><DibodevHyphenSafeText :text="props.titleHighlight" /></span
          ><DibodevHyphenSafeText :text="props.titleAfter" />
        </h1>
        <ul
          v-if="props.reassurances.length"
          class="flex flex-col items-start gap-2 text-[15px] text-gray-200 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2"
        >
          <li v-for="reassurance in props.reassurances" :key="reassurance" class="flex items-center gap-2">
            <DibodevIcon
              name="Check"
              mode="stroke"
              :width="16"
              :height="16"
              class="text-primary shrink-0"
              aria-hidden="true"
            />
            {{ reassurance }}
          </li>
        </ul>
      </div>

      <div class="min-w-0">
        <slot name="tool" />
      </div>

      <div class="grid gap-5 border-t border-gray-300 pt-8">
        <div class="grid gap-2">
          <h2 class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ t('toolPage.aboutTitle') }}</h2>
          <p class="max-w-3xl text-base leading-7 text-gray-200 sm:text-[17px]">{{ props.description }}</p>
        </div>
        <div class="flex max-w-3xl items-start gap-4">
          <img
            :src="PORTRAIT_SRC"
            :alt="t('home.founder.portraitAlt')"
            :width="PORTRAIT_SIZE"
            :height="PORTRAIT_SIZE"
            loading="lazy"
            decoding="async"
            class="h-12 w-12 shrink-0 rounded-full object-cover"
          />
          <div class="grid gap-1">
            <p class="text-[15px] leading-6 text-gray-200">
              {{ props.authorIntro }}
              <NuxtLink
                :to="localePath('about')"
                class="font-medium text-gray-100 underline decoration-gray-400 underline-offset-2 transition-colors hover:decoration-gray-100"
                >{{ PERSON_NAME }}</NuxtLink
              >{{ props.authorBio }}
            </p>
            <p class="text-muted text-sm">
              {{ t('toolPage.updatedOn') }} <time :datetime="props.updatedAt">{{ updatedAtLabel }}</time>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevToolLandingSectionProps } from '~/core/types/DibodevToolLandingSection'
import { computed } from 'vue'
import DibodevBreadcrumb from '~/components/navigations/DibodevBreadcrumb.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import { PERSON_NAME } from '~/config/schema'

const PORTRAIT_SRC: string = '/images/about/leo-guillaume-portrait-400.webp'
const PORTRAIT_SIZE: number = 48

const props: DibodevToolLandingSectionProps = defineProps({
  breadcrumbs: {
    type: Array as PropType<DibodevBreadcrumbItem[]>,
    required: true,
  },
  titleBefore: {
    type: String as PropType<string>,
    default: '',
  },
  titleHighlight: {
    type: String as PropType<string>,
    required: true,
  },
  titleAfter: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  reassurances: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
  authorIntro: {
    type: String as PropType<string>,
    required: true,
  },
  authorBio: {
    type: String as PropType<string>,
    default: '',
  },
  updatedAt: {
    type: String as PropType<string>,
    required: true,
  },
})

const { t, locale } = useI18n()
const localePath = useLocalePath()

/** Update date in words ("29 septembre 2026"), read in UTC so the server and the browser agree. */
const updatedAtLabel: ComputedRef<string> = computed((): string =>
  new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${props.updatedAt}T00:00:00Z`),
  ),
)
</script>
