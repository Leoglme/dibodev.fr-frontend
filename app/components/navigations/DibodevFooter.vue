<template>
  <footer class="border-t border-gray-300 bg-gray-800 px-6 sm:px-8">
    <div
      class="max-w-site mx-auto grid w-full gap-x-8 gap-y-12 py-16 sm:grid-cols-2 lg:grid-cols-[minmax(17.5rem,1fr)_repeat(3,max-content)] lg:grid-rows-[auto_1fr] lg:gap-x-[clamp(2.5rem,21.875vw_-_11.5rem,7rem)] lg:gap-y-7 lg:py-22"
    >
      <div class="grid content-start gap-6 sm:col-span-2 lg:col-span-1">
        <DibodevLogo :large="true" :size="30" />
        <p class="max-w-xs text-[15px] leading-6 text-gray-200 lg:max-w-84">{{ $t('footer.description') }}</p>
        <!-- On desktop the contact band above the footer already carries this button. -->
        <DibodevButton
          v-if="!isContactPage"
          :to="localePath('/contact')"
          class="w-full sm:w-fit lg:hidden"
          @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: 'footer' })"
        >
          {{ $t('footer.contactMe') }}
        </DibodevButton>
      </div>

      <nav class="grid content-start gap-5 lg:row-span-2 lg:pt-1.25" :aria-label="$t('footer.pagesTitle')">
        <h2
          class="text-muted text-xs font-medium tracking-[0.08em] uppercase lg:text-sm lg:tracking-normal lg:text-gray-100 lg:normal-case"
        >
          {{ $t('footer.pagesTitle') }}
        </h2>
        <ul class="grid gap-3.5 lg:gap-3">
          <li v-for="link in footerLinks" :key="link.to">
            <NuxtLink :to="link.to" class="text-[15px] leading-6 text-gray-200 transition-colors hover:text-gray-100">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="grid content-start gap-5 lg:row-span-2 lg:pt-1.25" :aria-label="$t('footer.toolsTitle')">
        <h2
          class="text-muted text-xs font-medium tracking-[0.08em] uppercase lg:text-sm lg:tracking-normal lg:text-gray-100 lg:normal-case"
        >
          {{ $t('footer.toolsTitle') }}
        </h2>
        <ul class="grid gap-3.5 lg:gap-3">
          <li v-for="toolLink in toolLinks" :key="toolLink.key">
            <NuxtLink
              :to="toolLink.to"
              class="text-[15px] leading-6 text-gray-200 transition-colors hover:text-gray-100"
            >
              {{ toolLink.title }}
            </NuxtLink>
          </li>
          <li>
            <DibodevLink :link="localePath('tools')" class="text-[15px] leading-6">
              <span>{{ $t('footer.tools.allTools') }}</span>
              <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </DibodevLink>
          </li>
        </ul>
      </nav>

      <nav class="grid content-start gap-5 lg:row-span-2 lg:pt-1.25" :aria-label="$t('footer.projectTypesTitle')">
        <h2
          class="text-muted text-xs font-medium tracking-[0.08em] uppercase lg:text-sm lg:tracking-normal lg:text-gray-100 lg:normal-case"
        >
          {{ $t('footer.projectTypesTitle') }}
        </h2>
        <ul class="grid gap-3.5 lg:gap-3">
          <li v-for="categoryLink in categoryLinks" :key="categoryLink.key">
            <NuxtLink
              :to="categoryLink.to"
              class="text-[15px] leading-6 text-gray-200 transition-colors hover:text-gray-100"
            >
              {{ categoryLink.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="grid content-start gap-5 lg:col-start-1 lg:row-start-2 lg:gap-6">
        <h2 class="text-muted text-xs font-medium tracking-[0.08em] uppercase lg:sr-only">
          {{ $t('footer.contactTitle') }}
        </h2>
        <ul class="grid gap-3.5 lg:gap-3">
          <li>
            <a
              :href="`mailto:${CONTACT_EMAIL}`"
              class="inline-flex items-center gap-2.5 text-[15px] leading-6 text-gray-200 transition-colors hover:text-gray-100"
              @click="track(TRACKING_EVENTS.contactEmail, { location: 'footer' })"
            >
              <span class="text-muted hidden shrink-0 lg:flex" aria-hidden="true">
                <DibodevIcon name="Mail" mode="stroke" :width="18" :height="18" />
              </span>
              <span>{{ CONTACT_EMAIL }}</span>
            </a>
          </li>
          <li class="lg:-order-1">
            <PhoneLink variant="footer" />
          </li>
          <li class="flex items-center gap-2.5 text-[15px] leading-6 text-gray-200">
            <span class="text-muted hidden shrink-0 lg:flex" aria-hidden="true">
              <DibodevIcon name="MapPin" mode="stroke" :width="18" :height="18" />
            </span>
            <span>{{ $t('footer.location') }}</span>
          </li>
        </ul>
        <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li v-for="social in socials" :key="social.name">
            <a
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary inline-flex items-center gap-2 text-[15px] font-medium text-gray-100 transition-colors"
              @click="track(TRACKING_EVENTS.externalProfileClicked, { platform: social.name, location: 'footer' })"
            >
              <span>{{ social.name }}</span>
              <DibodevIcon
                name="ExternalLink"
                :width="14"
                :height="14"
                mode="stroke"
                class="lg:text-muted"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="-mx-6 border-t border-gray-300 px-6 sm:-mx-8 sm:px-8">
      <!-- On desktop the assistant launcher covers the right end of the bar. -->
      <div
        class="text-muted max-w-site mx-auto flex w-full flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:flex-wrap lg:justify-start lg:gap-x-10 lg:gap-y-3 lg:pr-95"
      >
        <p class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-1.5">
          <span>© {{ currentYear }} Dibodev · {{ $t('footer.allRightsReserved') }}</span>
          <span class="hidden sm:inline" aria-hidden="true">·</span>
          <span>{{ $t('legal.publisher.siret') }}</span>
        </p>
        <div class="flex flex-wrap items-center gap-x-6 gap-y-3 lg:gap-x-10">
          <div class="w-fit lg:hidden">
            <DibodevLanguageSwitcher id="language-switcher" :options="languages" />
          </div>
          <ul class="flex flex-wrap items-center gap-x-5 gap-y-2 lg:gap-x-7">
            <li v-for="legal in legalLinks" :key="legal.to">
              <NuxtLink :to="legal.to" class="transition-colors hover:text-gray-100">{{ legal.title }}</NuxtLink>
            </li>
          </ul>
          <ul class="hidden items-center gap-3.5 lg:flex" :aria-label="$t('accessibility.chooseLanguage')">
            <li aria-hidden="true">
              <DibodevIcon name="Globe" mode="stroke" :width="16" :height="16" />
            </li>
            <li v-for="language in languages" :key="language.value">
              <span
                v-if="language.value === locale"
                class="font-medium text-gray-100 underline decoration-2 underline-offset-4"
                aria-current="true"
              >
                {{ language.label }}
              </span>
              <NuxtLink
                v-else
                :to="switchLocalePathWithSlug(String(language.value))"
                :hreflang="String(language.value)"
                class="transition-colors hover:text-gray-100"
                @click="track(TRACKING_EVENTS.localeSwitched, { from: locale, to: String(language.value) })"
              >
                {{ language.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { DibodevFooterLink, DibodevFooterSocialLink } from '~/core/types/DibodevFooter'
import type { CategoryKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import { allCategoryKeys, categoryToSlug } from '~/core/constants/categorySlugs'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import PhoneLink from '~/components/core/PhoneLink.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevLanguageSwitcher from '~/components/core/DibodevLanguageSwitcher.vue'
import { CONTACT_EMAIL, MALT_PROFILE_URL } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/* I18N */
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePathWithSlug = useSwitchLocalePathWithSlug()
const { track } = useTracking()

/* DATAS */
const socials: DibodevFooterSocialLink[] = [
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/dibodev/' },
  { name: 'Malt', link: MALT_PROFILE_URL },
  { name: 'GitHub', link: 'https://github.com/Leoglme/' },
]

const languages: DibodevSelectOption[] = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
]

const currentYear: number = new Date().getFullYear()

const footerLinks: ComputedRef<DibodevFooterLink[]> = computed((): DibodevFooterLink[] => [
  { title: t('footer.home'), to: localePath('/') },
  { title: t('footer.businessSoftware'), to: localePath('custom-business-software') },
  { title: t('footer.myProjects'), to: localePath('projects') },
  { title: t('footer.blog'), to: localePath('/blog') },
  { title: t('footer.about'), to: localePath('about') },
  { title: t('footer.contactPage'), to: localePath('/contact') },
])

/** Free tools, linked from every page for internal linking. */
const toolLinks: ComputedRef<DibodevFooterLink[]> = computed((): DibodevFooterLink[] => [
  {
    key: 'drivingSchoolSoftware',
    title: t('footer.tools.drivingSchoolSoftware'),
    to: localePath('tools-driving-school-software'),
  },
  {
    key: 'eventRentalSoftware',
    title: t('footer.tools.eventRentalSoftware'),
    to: localePath('tools-event-rental-software'),
  },
  {
    key: 'bikeShopSoftware',
    title: t('footer.tools.bikeShopSoftware'),
    to: localePath('tools-bike-shop-software'),
  },
  {
    key: 'autoRepairShopSoftware',
    title: t('footer.tools.autoRepairShopSoftware'),
    to: localePath('tools-auto-repair-shop-software'),
  },
  {
    key: 'budgetEstimator',
    title: t('footer.tools.budgetEstimator'),
    to: `${localePath('custom-business-software')}#estimator`,
  },
])

/** Category listing pages, linked from every page for internal linking. */
const categoryLinks: ComputedRef<DibodevFooterLink[]> = computed((): DibodevFooterLink[] => {
  const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
  return allCategoryKeys().map(
    (key: CategoryKey): DibodevFooterLink => ({
      key,
      title: t(`projects.categories.${key}`),
      to: localePath({ name: 'projects-category-slug', params: { slug: categoryToSlug(currentLocale, key) } }),
    }),
  )
})

const legalLinks: ComputedRef<DibodevFooterLink[]> = computed((): DibodevFooterLink[] => [
  { title: t('footer.legal'), to: localePath('/legal') },
  { title: t('footer.privacy'), to: localePath('/privacy') },
])

/* REFS */
const route = useRoute()

const isContactPage: ComputedRef<boolean> = computed(
  (): boolean => route.path === '/contact' || route.path.endsWith('/contact'),
)
</script>
