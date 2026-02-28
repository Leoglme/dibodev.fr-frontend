<template>
  <nav
    class="fixed top-0 right-0 left-0 z-50 flex h-[70px] max-w-screen items-center border-b bg-gray-900/75 px-6 py-3.5 backdrop-blur-[12px] backdrop-saturate-[1.8] transition-all duration-600 ease-linear"
    :class="scrollPosition === 0 ? 'border-b-transparent' : 'border-b-gray-300'"
  >
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between">
      <ol>
        <li>
          <NuxtLink :to="localePath('/')">
            <DibodevLogo :size="30" :large="true" />
          </NuxtLink>
        </li>
      </ol>

      <ol class="hidden items-center justify-center gap-8 text-base font-normal sm:flex">
        <li class="flex items-center justify-center gap-8">
          <DibodevLink v-for="link in links" :key="link.to" :link="link.to" color="#f5f4fb">
            {{ link.text }}
          </DibodevLink>
        </li>
        <li class="ml-6 flex items-center gap-10">
          <PhoneLink variant="navbar" />
          <DibodevButton v-if="!isContactPage" :to="localePath('/contact')" icon="Mail" size="sm">{{
            $t('nav.contactMe')
          }}</DibodevButton>
        </li>
      </ol>

      <DibodevSquareButton
        :size="35"
        backgroundColor="#1b232d"
        backgroundHoverColor="#141a20"
        class="sm:hidden"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <DibodevIcon name="Menu" />
      </DibodevSquareButton>
    </div>
  </nav>

  <teleport to="body">
    <transition name="fade">
      <div
        v-show="mobileMenuOpen"
        class="fixed top-0 right-0 bottom-0 left-0 z-[9998] bg-[rgba(0,0,0,.8)] sm:hidden"
        @click.self="mobileMenuOpen = false"
      >
        <transition name="slide-up-down">
          <div v-if="mobileMenuOpen" class="absolute right-0 bottom-0 left-0 z-[9999] m-auto h-[calc(100dvh-70px)]">
            <section class="relative h-full w-full overflow-auto bg-gray-900 outline-none" @click.stop>
              <div class="flex flex-col gap-8 p-8">
                <DibodevLink
                  v-for="link in links"
                  :key="link.to"
                  :link="link.to"
                  color="#f5f4fb"
                  @click="mobileMenuOpen = false"
                >
                  {{ link.text }}
                </DibodevLink>
                <PhoneLink variant="menu" class="mb-2 w-full justify-start" @click="mobileMenuOpen = false" />
                <DibodevButton
                  v-if="!isContactPage"
                  :to="localePath('/contact')"
                  icon="Mail"
                  size="sm"
                  @click="mobileMenuOpen = false"
                >
                  {{ $t('nav.contactMe') }}
                </DibodevButton>
                <DibodevLanguageSwitcher id="language-switcher-mobile" :options="languages" />
              </div>
            </section>
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevLanguageSwitcher from '~/components/core/DibodevLanguageSwitcher.vue'
import type { DibodevNavbarLink } from '~/core/types/DibodevNavbar'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { Ref, ComputedRef } from 'vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import PhoneLink from '~/components/core/PhoneLink.vue'
import DibodevSquareButton from '~/components/buttons/DibodevSquareButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
/* ROUTE */
const route = useRoute()

/* I18N */
const { t } = useI18n()
const localePath = useLocalePath()

/* DATAS */
const languages: DibodevSelectOption[] = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
]

const links: ComputedRef<DibodevNavbarLink[]> = computed((): DibodevNavbarLink[] => [
  { text: t('nav.home'), to: localePath('/') },
  { text: t('nav.myProjects'), to: localePath('/projects') },
  { text: t('nav.blog'), to: localePath('/blog') },
])

/* REFS */
const mobileMenuOpen: Ref<boolean> = ref(false)
const isContactPage: ComputedRef<boolean> = computed(
  (): boolean => route.path === '/contact' || route.path.endsWith('/contact'),
)

// Manage scroll position
const scrollPosition: Ref<number> = ref(0)

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

watch(mobileMenuOpen, (open: boolean) => {
  document.body.style.overflow = open ? 'hidden' : ''
})
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

/* Slide-up-down menu */
.slide-up-down-enter-active,
.slide-up-down-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-down-enter-from,
.slide-up-down-leave-to {
  transform: translateY(100%);
}
.slide-up-down-enter-to,
.slide-up-down-leave-from {
  transform: translateY(0%);
}
</style>
