<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-gray-300 bg-white/95 px-6 backdrop-blur-sm sm:px-8">
    <nav
      class="max-w-site mx-auto flex h-[72px] w-full items-center justify-between gap-6"
      :aria-label="$t('nav.mainNavigation')"
    >
      <NuxtLink :to="localePath('/')" class="shrink-0" :aria-label="$t('nav.homeLinkLabel')">
        <DibodevLogo :size="30" :large="true" />
      </NuxtLink>

      <div class="hidden items-center gap-10 lg:flex">
        <ul class="flex items-center gap-8">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-[15px] font-medium whitespace-nowrap transition-colors"
              :class="isCurrentSection(link) ? 'text-primary' : 'text-gray-200 hover:text-gray-100'"
              :aria-current="isCurrentSection(link) ? 'page' : undefined"
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </ul>
        <div class="hidden xl:block">
          <PhoneLink variant="navbar" />
        </div>
        <DibodevButton v-if="!isContactPage" :to="localePath('/contact')" @click="trackContactCta('navbar')">
          {{ $t('nav.contactMe') }}
        </DibodevButton>
      </div>

      <button
        type="button"
        class="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-gray-100 transition-colors hover:bg-gray-800 lg:hidden"
        :aria-label="mobileMenuOpen ? $t('nav.closeMenu') : $t('nav.openMenu')"
        :aria-expanded="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <DibodevIcon :name="mobileMenuOpen ? 'X' : 'Menu'" mode="stroke" :width="26" :height="26" aria-hidden="true" />
      </button>
    </nav>
  </header>

  <teleport to="body">
    <transition name="menu-fade">
      <div
        v-if="mobileMenuOpen"
        class="fixed inset-0 z-[9999] flex flex-col bg-white lg:hidden"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('nav.mainNavigation')"
      >
        <div class="flex h-[72px] shrink-0 items-center justify-between border-b border-gray-300 px-6 sm:px-8">
          <NuxtLink :to="localePath('/')" :aria-label="$t('nav.homeLinkLabel')" @click="mobileMenuOpen = false">
            <DibodevLogo :size="30" :large="true" />
          </NuxtLink>
          <button
            type="button"
            class="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg text-gray-100 transition-colors hover:bg-gray-800"
            :aria-label="$t('nav.closeMenu')"
            @click="mobileMenuOpen = false"
          >
            <DibodevIcon name="X" mode="stroke" :width="26" :height="26" aria-hidden="true" />
          </button>
        </div>

        <nav
          class="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-6 py-8 sm:px-8"
          :aria-label="$t('nav.mainNavigation')"
        >
          <NuxtLink
            v-for="(link, linkIndex) in links"
            :key="link.to"
            :to="link.to"
            class="menu-item py-1.5 text-[30px] leading-tight font-medium tracking-[-0.01em] transition-colors sm:text-[34px]"
            :class="isCurrentSection(link) ? 'text-primary' : 'hover:text-primary text-gray-100'"
            :style="{ '--menu-item-delay': `${linkIndex * MENU_ITEM_STAGGER_MS}ms` }"
            :aria-current="isCurrentSection(link) ? 'page' : undefined"
            @click="mobileMenuOpen = false"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>

        <div class="grid shrink-0 gap-5 border-t border-gray-300 px-6 py-6 sm:px-8">
          <DibodevButton
            v-if="!isContactPage"
            :to="localePath('/contact')"
            class="w-full"
            @click="trackContactCta('navbar_mobile', true)"
          >
            {{ $t('nav.contactMe') }}
          </DibodevButton>
          <PhoneLink variant="menu" @click="mobileMenuOpen = false" />
          <ul class="flex items-center gap-2" :aria-label="$t('accessibility.chooseLanguage')">
            <li v-for="language in languages" :key="language.value">
              <span
                v-if="language.value === locale"
                class="bg-accent-tint text-primary flex h-10 min-w-12 items-center justify-center rounded-lg px-3 text-sm font-medium"
                aria-current="true"
              >
                {{ language.label }}
              </span>
              <NuxtLink
                v-else
                :to="switchLocalePathWithSlug(String(language.value))"
                :hreflang="String(language.value)"
                class="flex h-10 min-w-12 items-center justify-center rounded-lg border border-gray-300 px-3 text-sm font-medium text-gray-200 transition-colors hover:border-gray-100 hover:text-gray-100"
                @click="onMobileLocaleClick(String(language.value))"
              >
                {{ language.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import type { Ref, ComputedRef } from 'vue'
import type { DibodevNavbarLink } from '~/core/types/DibodevNavbar'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import PhoneLink from '~/components/core/PhoneLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Delay between two links appearing in the mobile menu. */
const MENU_ITEM_STAGGER_MS: number = 50

/* ROUTE */
const route = useRoute()

/* I18N */
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePathWithSlug = useSwitchLocalePathWithSlug()
const { track } = useTracking()

/* DATAS */
const languages: DibodevSelectOption[] = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
]

/** Real pages only (no anchors of the home page), ordered from the main offer to the background. */
const links: ComputedRef<DibodevNavbarLink[]> = computed((): DibodevNavbarLink[] => [
  { text: t('nav.businessSoftware'), to: localePath('custom-business-software'), activePrefixes: [] },
  { text: t('nav.projects'), to: localePath('projects'), activePrefixes: [localePath('/project')] },
  { text: t('nav.tools'), to: localePath('tools'), activePrefixes: [] },
  { text: t('nav.blog'), to: localePath('/blog'), activePrefixes: [] },
  { text: t('nav.about'), to: localePath('about'), activePrefixes: [] },
])

/* REFS */
const mobileMenuOpen: Ref<boolean> = ref(false)
const isContactPage: ComputedRef<boolean> = computed(
  (): boolean => route.path === '/contact' || route.path.endsWith('/contact'),
)

/**
 * Whether the current page belongs to the section of a navbar link (the page itself or one of its sub-pages).
 * @param {DibodevNavbarLink} link - The navbar link.
 * @returns {boolean} True when the link matches the current page.
 */
function isCurrentSection(link: DibodevNavbarLink): boolean {
  return [link.to, ...link.activePrefixes].some(
    (path: string): boolean => route.path === path || route.path.startsWith(`${path}/`),
  )
}

/**
 * Track the contact CTA event, and close the mobile menu when requested.
 * @param {string} location - CTA location (navbar / navbar_mobile).
 * @param {boolean} [closeMobileMenu] - Close the mobile menu after the click.
 * @returns {void}
 */
function trackContactCta(location: string, closeMobileMenu: boolean = false): void {
  if (closeMobileMenu) {
    mobileMenuOpen.value = false
  }
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location })
}

/**
 * Track the language picked in the mobile menu, then close the menu.
 * @param {string} targetLocale - The locale picked.
 * @returns {void}
 */
function onMobileLocaleClick(targetLocale: string): void {
  track(TRACKING_EVENTS.localeSwitched, { from: locale.value, to: targetLocale })
  mobileMenuOpen.value = false
}

/**
 * Close the mobile menu with the Escape key.
 * @param {KeyboardEvent} event - The keyboard event.
 * @returns {void}
 */
function closeMenuOnEscape(event: KeyboardEvent): void {
  if (event.key === 'Escape') {
    mobileMenuOpen.value = false
  }
}

watch(mobileMenuOpen, (open: boolean): void => {
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(
  (): string => route.fullPath,
  (): void => {
    mobileMenuOpen.value = false
  },
)

onMounted((): void => {
  document.addEventListener('keydown', closeMenuOnEscape)
})

onUnmounted((): void => {
  document.removeEventListener('keydown', closeMenuOnEscape)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Full-screen mobile menu: fades in, links rise one after the other. */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.25s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-active .menu-item {
  transition:
    opacity 0.4s ease,
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--menu-item-delay);
}

.menu-fade-enter-from .menu-item {
  opacity: 0;
  transform: translateY(12px);
}

@media (prefers-reduced-motion: reduce) {
  .menu-fade-enter-active,
  .menu-fade-leave-active,
  .menu-fade-enter-active .menu-item {
    transition: none;
  }
}
</style>
