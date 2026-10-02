<template>
  <section id="about-story" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-14 lg:gap-16">
      <div class="mx-auto grid w-full max-w-4xl gap-8">
        <div class="grid gap-4 text-center">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ t('aboutPage.story.eyebrow') }}</p>
          <h2
            class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]"
          >
            {{ t('aboutPage.story.title') }}
          </h2>
        </div>
        <p class="text-center text-[19px] leading-8 text-gray-100 sm:text-[21px] sm:leading-9">
          {{ t(`aboutPage.story.${STORY_LEAD_KEY}`) }}
        </p>
        <div class="text-[17px] leading-7 text-gray-200 md:columns-2 md:gap-x-12">
          <p v-for="paragraphKey in STORY_BODY_KEYS" :key="paragraphKey" class="mb-6 break-inside-avoid">
            {{ t(`aboutPage.story.${paragraphKey}`) }}
          </p>
        </div>
      </div>

      <div class="mx-auto grid w-full max-w-4xl gap-14 lg:gap-16">
        <div class="bg-surface-tint grid gap-9 rounded-3xl px-6 py-9 sm:px-10 sm:py-12">
          <h3 class="text-xl font-medium text-gray-100">{{ t('aboutPage.facts.title') }}</h3>
          <dl class="grid gap-x-12 gap-y-9 sm:grid-cols-2">
            <div v-for="fact in facts" :key="fact.label" class="flex items-start gap-4">
              <span
                class="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white"
                aria-hidden="true"
              >
                <DibodevIcon :name="fact.icon" mode="stroke" :width="19" :height="19" />
              </span>
              <div class="grid gap-1.5">
                <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ fact.label }}</dt>
                <dd class="text-base leading-6 text-gray-100">{{ fact.value }}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div class="grid gap-6">
          <h3 class="text-xl font-medium text-gray-100">{{ t('aboutPage.profiles.title') }}</h3>
          <ul class="flex flex-wrap gap-3 sm:gap-4">
            <li v-for="profileLink in ABOUT_PROFILE_LINKS" :key="profileLink.href">
              <a
                :href="profileLink.href"
                target="_blank"
                rel="noopener noreferrer"
                class="profile-link focus-visible:outline-primary inline-flex min-h-14 items-center gap-3 rounded-2xl bg-white py-2 pr-5 pl-2 text-base font-medium text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2"
                :style="{ '--profile-brand-color': profileLink.brandColor }"
                @click="
                  track(TRACKING_EVENTS.externalProfileClicked, { platform: profileLink.label, location: 'about' })
                "
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold tracking-tight"
                  :class="profileLink.monogram && profileLink.monogram.length > 2 ? 'text-[11px]' : 'text-[15px]'"
                  :style="{ backgroundColor: profileLink.tileColor, color: profileLink.logoColor }"
                  aria-hidden="true"
                >
                  <DibodevBrandGlyph v-if="profileLink.logo" :logo="profileLink.logo" :size="22" />
                  <template v-else>{{ profileLink.monogram }}</template>
                </span>
                {{ profileLink.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevAboutKeyFact } from '~/core/types/DibodevAboutPage'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevBrandGlyph from '~/components/icons/DibodevBrandGlyph.vue'
import { ABOUT_PROFILE_LINKS } from '~/core/constants/aboutProfileLinks'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { CareerUtils } from '~/core/utils/CareerUtils'

const { t } = useI18n()
const { track } = useTracking()

/** First paragraph, displayed as a lead. */
const STORY_LEAD_KEY: string = 'background'
/** Remaining paragraphs, displayed in two columns on wide screens. */
const STORY_BODY_KEYS: string[] = ['career', 'dibodev', 'ai', 'workingStyle']
/** Facts of the "in short" list (i18n `aboutPage.facts.*`), each with its line icon. */
const FACT_ICONS: Record<string, string> = {
  company: 'Store',
  location: 'MapPin',
  area: 'Globe',
  experience: 'CalendarCheck',
  education: 'CheckCircle',
  languages: 'MessageCircle',
}

const facts: ComputedRef<DibodevAboutKeyFact[]> = computed((): DibodevAboutKeyFact[] =>
  Object.entries(FACT_ICONS).map(
    ([key, icon]: [string, string]): DibodevAboutKeyFact => ({
      label: t(`aboutPage.facts.${key}.label`),
      value: t(`aboutPage.facts.${key}.value`, { years: CareerUtils.getYearsOfExperience() }),
      icon,
    }),
  ),
)
</script>

<style scoped>
.profile-link {
  box-shadow:
    0 1px 2px rgba(20, 20, 20, 0.06),
    0 6px 18px rgba(20, 20, 20, 0.06);
  transition:
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.profile-link:hover,
.profile-link:focus-visible {
  box-shadow:
    0 0 0 1.5px var(--profile-brand-color),
    0 10px 24px rgba(20, 20, 20, 0.1);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .profile-link {
    transition: none;
  }

  .profile-link:hover,
  .profile-link:focus-visible {
    transform: none;
  }
}
</style>
