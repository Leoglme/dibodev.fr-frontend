<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-gray-300 bg-white/95 backdrop-blur-sm">
    <nav
      class="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8"
      :aria-label="$t('nav.mainNavigation')"
    >
      <NuxtLink :to="localePath('/')" class="shrink-0" :aria-label="$t('nav.homeLinkLabel')">
        <DibodevLogo :size="30" :large="true" />
      </NuxtLink>

      <ul class="hidden items-center gap-6 lg:flex xl:gap-7">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-[15px] font-medium whitespace-nowrap text-gray-200 transition-colors hover:text-gray-100"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden items-center gap-6 lg:flex">
        <div class="hidden xl:block">
          <PhoneLink variant="navbar" />
        </div>
        <DibodevButton v-if="!isContactPage" :to="localePath('/contact')" @click="trackContactCta('navbar')">
          {{ $t('nav.contactMe') }}
        </DibodevButton>
      </div>

      <DibodevSquareButton
        :size="44"
        class="lg:hidden"
        :aria-label="mobileMenuOpen ? $t('nav.closeMenu') : $t('nav.openMenu')"
        :aria-expanded="mobileMenuOpen"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <DibodevIcon :name="mobileMenuOpen ? 'X' : 'Menu'" mode="stroke" />
      </DibodevSquareButton>
    </nav>
  </header>

  <teleport to="body">
    <transition name="fade">
      <div
        v-show="mobileMenuOpen"
        class="fixed inset-0 z-[9998] bg-[rgba(20,20,20,0.35)] lg:hidden"
        @click.self="mobileMenuOpen = false"
      >
        <transition name="slide-down">
          <div
            v-if="mobileMenuOpen"
            class="absolute inset-x-0 top-[72px] z-[9999] max-h-[calc(100dvh-72px)] overflow-auto border-b border-gray-300 bg-white"
          >
            <nav class="flex flex-col px-6 pt-2 pb-8 sm:px-8" :aria-label="$t('nav.mainNavigation')" @click.stop>
              <NuxtLink
                v-for="link in links"
                :key="link.to"
                :to="link.to"
                class="border-b border-gray-300 py-4 text-lg font-medium text-gray-100"
                @click="mobileMenuOpen = false"
              >
                {{ link.text }}
              </NuxtLink>
              <PhoneLink variant="menu" class="mt-4" @click="mobileMenuOpen = false" />
              <DibodevButton
                v-if="!isContactPage"
                :to="localePath('/contact')"
                class="mt-4 w-full"
                @click="trackContactCta('navbar_mobile', true)"
              >
                {{ $t('nav.contactMe') }}
              </DibodevButton>
              <div class="mt-6">
                <DibodevLanguageSwitcher id="language-switcher-mobile" :options="languages" />
              </div>
            </nav>
          </div>
        </transition>
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
import DibodevLanguageSwitcher from '~/components/core/DibodevLanguageSwitcher.vue'
import PhoneLink from '~/components/core/PhoneLink.vue'
import DibodevSquareButton from '~/components/buttons/DibodevSquareButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/* ROUTE */
const route = useRoute()

/* I18N */
const { t } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

/* DATAS */
const languages: DibodevSelectOption[] = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
]

const links: ComputedRef<DibodevNavbarLink[]> = computed((): DibodevNavbarLink[] => [
  { text: t('nav.services'), to: `${localePath('/')}#services` },
  { text: t('nav.projects'), to: localePath('projects') },
  { text: t('nav.businessSoftware'), to: localePath('custom-business-software') },
  { text: t('nav.about'), to: localePath('about') },
  { text: t('nav.blog'), to: localePath('/blog') },
])

/* REFS */
const mobileMenuOpen: Ref<boolean> = ref(false)
const isContactPage: ComputedRef<boolean> = computed(
  (): boolean => route.path === '/contact' || route.path.endsWith('/contact'),
)

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

watch(mobileMenuOpen, (open: boolean): void => {
  document.body.style.overflow = open ? 'hidden' : ''
})

watch(
  (): string => route.fullPath,
  (): void => {
    mobileMenuOpen.value = false
  },
)
</script>

<style scoped>
/* Fade backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

/* Slide-down menu panel */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.25s ease,
    opacity 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-12px);
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
