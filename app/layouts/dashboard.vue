<template>
  <div
    class="dashboard-root min-h-dvh bg-gray-800 pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-gray-100 md:flex md:h-dvh md:overflow-hidden"
    :class="{ 'is-first-paint': isFirstPaint }"
  >
    <NuxtLoadingIndicator color="var(--color-primary)" :height="2" :throttle="200" />
    <DashboardSidebar class="hidden shrink-0 md:flex" />

    <Transition name="dash-menu-scrim">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-[60] bg-(--dash-scrim) md:hidden"
        aria-hidden="true"
        @click="isMobileMenuOpen = false"
      />
    </Transition>
    <Transition name="dash-menu">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-y-0 left-0 z-[65] flex bg-gray-800 pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] shadow-[0_24px_48px_-18px_rgba(20,20,20,0.28)] md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <DashboardSidebar force-expanded class="w-[min(300px,86vw)]" />
      </div>
    </Transition>

    <main
      class="flex min-h-dvh min-w-0 flex-1 flex-col bg-white pb-[calc(64px+env(safe-area-inset-bottom,0px))] transition-[margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:m-2 md:ml-0 md:min-h-0 md:overflow-hidden md:rounded-[14px] md:border md:border-gray-300 md:pb-0"
      :class="{ 'xl:mr-[496px]': isDrawerOpen }"
    >
      <slot />
    </main>

    <DashboardTabBar />
    <DashboardDrawerHost />
    <DashboardCommandPalette />
    <DashboardConfirmDialog />
    <DashboardToastHost />
    <DashboardTooltipHost />
  </div>
</template>

<script lang="ts" setup>
import type { UseDashboardTranslationsReturn } from '~/composables/useDashboardTranslations'
import type { UseDashboardShellReturn } from '~/composables/useDashboardShell'
import type { UseDashboardPwaReturn } from '~/composables/useDashboardPwa'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { UseDashboardDeployStatusReturn } from '~/composables/useDashboardDeployStatus'
import type { UseDashboardConfirmReturn } from '~/composables/useDashboardConfirm'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import '~/assets/css/dashboard.css'
import DashboardSidebar from '~/components/dashboard/shell/DashboardSidebar.vue'
import DashboardTabBar from '~/components/dashboard/shell/DashboardTabBar.vue'
import DashboardCommandPalette from '~/components/dashboard/overlays/DashboardCommandPalette.vue'
import DashboardConfirmDialog from '~/components/dashboard/overlays/DashboardConfirmDialog.vue'
import DashboardDrawerHost from '~/components/dashboard/overlays/DashboardDrawerHost.vue'
import DashboardToastHost from '~/components/dashboard/overlays/DashboardToastHost.vue'
import DashboardTooltipHost from '~/components/dashboard/overlays/DashboardTooltipHost.vue'
import { useDashboardAppHead } from '~/composables/useDashboardAppHead'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardConfirm } from '~/composables/useDashboardConfirm'
import { useDashboardDeployStatus } from '~/composables/useDashboardDeployStatus'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardPwa } from '~/composables/useDashboardPwa'
import { useDashboardShell } from '~/composables/useDashboardShell'
import { useDashboardTranslations } from '~/composables/useDashboardTranslations'

const route: ReturnType<typeof useRoute> = useRoute()

const {
  isSidebarCollapsed,
  isMobileMenuOpen,
  isCommandPaletteOpen,
  openCommandPalette,
  closeCommandPalette,
  restoreSidebarPreference,
}: UseDashboardShellReturn = useDashboardShell()

const { isDrawerOpen, closeDrawer, closeAllDrawers }: UseDashboardDrawerReturn = useDashboardDrawer()
const { confirmOptions, settleConfirm }: UseDashboardConfirmReturn = useDashboardConfirm()
const { loadArticles }: UseDashboardArticlesReturn = useDashboardArticles()
const { loadIndexing, stopPolling }: UseDashboardIndexingReturn = useDashboardIndexing()
const { loadTranslations }: UseDashboardTranslationsReturn = useDashboardTranslations()
const { watchDeploys, unwatchDeploys }: UseDashboardDeployStatusReturn = useDashboardDeployStatus()
const { initPwa }: UseDashboardPwaReturn = useDashboardPwa()

useHead({
  htmlAttrs: { lang: 'fr' },
})
useDashboardAppHead('#f6f6f3')

const isFirstPaint: Ref<boolean> = ref(true)
let tabletQuery: MediaQueryList | null = null
let stopPwa: (() => void) | null = null
let idleTimer: ReturnType<typeof setTimeout> | null = null

/**
 * Collapses the sidebar to icons from 768 to 1279 px (iPads, small laptops) and restores the saved choice above.
 *
 * @returns {void}
 */
function applySidebarModeForScreenWidth(): void {
  if (tabletQuery?.matches) isSidebarCollapsed.value = true
  else restoreSidebarPreference()
}

/**
 * Global shortcuts: Ctrl/Cmd K toggles the palette; Escape closes the dialog, the palette, the drawer or the menu.
 *
 * @param {KeyboardEvent} event - The key event.
 * @returns {void}
 */
function onKeydown(event: KeyboardEvent): void {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    if (isCommandPaletteOpen.value) closeCommandPalette()
    else openCommandPalette()
    return
  }
  if (event.key !== 'Escape') return
  if (confirmOptions.value) settleConfirm(false)
  else if (isCommandPaletteOpen.value) closeCommandPalette()
  else if (isDrawerOpen.value) closeDrawer()
  else if (isMobileMenuOpen.value) isMobileMenuOpen.value = false
}

watch(
  (): string => route.path,
  (): void => {
    isMobileMenuOpen.value = false
    closeAllDrawers()
  },
)

watch(isMobileMenuOpen, (open: boolean): void => {
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

onMounted((): void => {
  tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1279px)')
  applySidebarModeForScreenWidth()
  tabletQuery.addEventListener('change', applySidebarModeForScreenWidth)
  window.addEventListener('keydown', onKeydown)
  stopPwa = initPwa()
  watchDeploys()
  loadArticles().catch((): void => undefined)
  loadIndexing().catch((): void => undefined)
  idleTimer = setTimeout((): void => {
    loadTranslations().catch((): void => undefined)
  }, 2500)
  requestAnimationFrame((): void => {
    requestAnimationFrame((): void => {
      isFirstPaint.value = false
    })
  })
})

onBeforeUnmount((): void => {
  tabletQuery?.removeEventListener('change', applySidebarModeForScreenWidth)
  window.removeEventListener('keydown', onKeydown)
  stopPwa?.()
  unwatchDeploys()
  stopPolling()
  if (idleTimer) clearTimeout(idleTimer)
  document.documentElement.style.overflow = ''
})
</script>

<style scoped>
.is-first-paint :deep(aside) {
  transition: none !important;
}

.dash-menu-scrim-enter-active,
.dash-menu-scrim-leave-active {
  transition: opacity 0.22s ease;
}

.dash-menu-scrim-enter-from,
.dash-menu-scrim-leave-to {
  opacity: 0;
}

.dash-menu-enter-active {
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.dash-menu-leave-active {
  transition: transform 0.22s ease;
}

.dash-menu-enter-from,
.dash-menu-leave-to {
  transform: translateX(-102%);
}
</style>
