<template>
  <div class="flex min-h-screen bg-gray-900 text-gray-100">
    <!-- Mobile top bar -->
    <header
      class="fixed top-0 right-0 left-0 z-40 flex h-[70px] items-center justify-between border-b border-gray-700 bg-gray-800 px-4 md:hidden"
    >
      <NuxtLink :to="localePath('/dashboard')">
        <DibodevLogo :size="28" :large="true" />
      </NuxtLink>
      <DibodevSquareButton
        :size="35"
        backgroundColor="#1b232d"
        backgroundHoverColor="#141a20"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <DibodevIcon name="Menu" />
      </DibodevSquareButton>
    </header>

    <!-- Desktop sidebar -->
    <aside class="fixed top-0 left-0 z-40 hidden h-full w-64 flex-col border-r border-gray-700 bg-gray-800 md:flex">
      <div class="flex h-[70px] items-center border-b border-gray-700 px-4">
        <NuxtLink :to="localePath('/dashboard')">
          <DibodevLogo :size="28" :large="true" />
        </NuxtLink>
      </div>
      <nav class="flex flex-1 flex-col gap-1 px-3 py-4">
        <NuxtLink
          :to="localePath('/dashboard/generate-article')"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            $route.path.endsWith('/generate-article')
              ? 'bg-gray-700 text-gray-100'
              : 'text-gray-100 hover:bg-gray-700 hover:text-gray-100'
          "
        >
          Générer un article
        </NuxtLink>
        <NuxtLink
          :to="localePath('/dashboard/indexing')"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            $route.path.endsWith('/indexing')
              ? 'bg-gray-700 text-gray-100'
              : 'text-gray-100 hover:bg-gray-700 hover:text-gray-100'
          "
        >
          Indexation Google
        </NuxtLink>
        <div class="mt-auto space-y-1 border-t border-gray-700 pt-4">
          <button
            type="button"
            class="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-gray-100"
            @click="onLogout"
          >
            {{ $t('dashboard.logout') }}
          </button>
          <DibodevLink
            :link="localePath('/')"
            class="flex w-full items-center rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600 hover:text-gray-100"
          >
            Retour au site
          </DibodevLink>
        </div>
      </nav>
    </aside>

    <main class="min-h-screen flex-1 pt-[70px] pl-0 md:pt-0 md:pl-64">
      <slot />
    </main>
  </div>

  <Teleport to="body">
    <Transition name="fade">
      <div
        v-show="mobileMenuOpen"
        class="fixed inset-0 z-[9998] bg-[rgba(0,0,0,.8)] md:hidden"
        aria-hidden="true"
        @click.self="mobileMenuOpen = false"
      >
        <Transition name="slide-up-down">
          <div v-if="mobileMenuOpen" class="absolute right-0 bottom-0 left-0 z-[9999] max-h-[calc(100dvh-70px)]">
            <section class="relative w-full overflow-auto bg-gray-800 outline-none" @click.stop>
              <div class="flex flex-col gap-1 p-4">
                <NuxtLink
                  :to="localePath('/dashboard/generate-article')"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700"
                  @click="mobileMenuOpen = false"
                >
                  Générer un article
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/dashboard/indexing')"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-700"
                  @click="mobileMenuOpen = false"
                >
                  Indexation Google
                </NuxtLink>
                <button
                  type="button"
                  class="rounded-md px-3 py-2 text-left text-sm font-medium text-gray-200 hover:bg-gray-700 hover:text-gray-100"
                  @click="onLogoutThenClose"
                >
                  {{ $t('dashboard.logout') }}
                </button>
                <DibodevLink
                  :link="localePath('/')"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600 hover:text-gray-100"
                  @click="mobileMenuOpen = false"
                >
                  Retour au site
                </DibodevLink>
              </div>
            </section>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevSquareButton from '~/components/buttons/DibodevSquareButton.vue'

const localePath = useLocalePath()
const mobileMenuOpen: Ref<boolean> = ref(false)

useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

watch(mobileMenuOpen, (open: boolean) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

async function onLogout(): Promise<void> {
  await $fetch('/api/auth/logout', { method: 'POST' })
  await navigateTo(localePath('/dashboard/login'))
}

async function onLogoutThenClose(): Promise<void> {
  mobileMenuOpen.value = false
  await onLogout()
}
</script>

<style scoped>
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
