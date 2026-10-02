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

      <dl class="grid gap-x-10 gap-y-8 border-t border-gray-300 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:pt-12">
        <div v-for="fact in facts" :key="fact.label" class="flex items-start gap-4">
          <span
            class="bg-accent-tint text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            aria-hidden="true"
          >
            <DibodevIcon :name="fact.icon" mode="stroke" :width="18" :height="18" />
          </span>
          <div class="grid gap-1">
            <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ fact.label }}</dt>
            <dd class="text-[15px] leading-6 text-gray-100">{{ fact.value }}</dd>
          </div>
        </div>
      </dl>

      <div class="flex flex-col gap-5 border-t border-gray-300 pt-8 lg:flex-row lg:items-center lg:gap-8">
        <h3 class="shrink-0 text-lg font-medium text-gray-100">{{ t('aboutPage.profiles.title') }}</h3>
        <ul class="flex flex-wrap gap-3">
          <li v-for="profileLink in ABOUT_PROFILE_LINKS" :key="profileLink.href">
            <a
              :href="profileLink.href"
              target="_blank"
              rel="noopener noreferrer"
              class="profile-link focus-visible:outline-primary inline-flex min-h-12 items-center gap-3 rounded-xl border border-gray-300 bg-white py-1.5 pr-4 pl-1.5 text-[15px] font-medium text-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2"
              :style="{ '--profile-brand-color': profileLink.brandColor }"
              @click="track(TRACKING_EVENTS.externalProfileClicked, { platform: profileLink.label, location: 'about' })"
            >
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[13px] font-semibold"
                :style="{ backgroundColor: profileLink.brandColor, color: profileLink.logoColor }"
                aria-hidden="true"
              >
                <DibodevBrandGlyph v-if="profileLink.logoPath" :path="profileLink.logoPath" />
                <template v-else>{{ profileLink.monogram }}</template>
              </span>
              {{ profileLink.label }}
              <DibodevIcon
                name="ExternalLink"
                mode="stroke"
                :width="14"
                :height="14"
                class="text-muted"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
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
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.profile-link:hover,
.profile-link:focus-visible {
  border-color: var(--profile-brand-color);
  box-shadow: 0 8px 20px rgba(20, 20, 20, 0.06);
  transform: translateY(-1px);
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
