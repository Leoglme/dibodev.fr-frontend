<template>
  <div class="@container/page flex min-h-0 flex-1 flex-col">
    <header
      class="sticky top-0 z-30 flex min-h-14 shrink-0 items-center gap-2.5 border-b border-gray-300 bg-white/95 px-3 pt-[env(safe-area-inset-top,0px)] backdrop-blur-sm md:static md:min-h-[60px] md:bg-white md:pt-0 md:pr-5 md:pl-3 md:backdrop-blur-none"
    >
      <DashboardButton
        variant="ghost"
        square
        :icon="isMobileViewport ? 'menu' : 'panel-left'"
        :aria-label="isMobileViewport ? 'Ouvrir le menu' : isSidebarCollapsed ? 'Déplier le menu' : 'Replier le menu'"
        :data-tip="isMobileViewport ? undefined : isSidebarCollapsed ? 'Déplier le menu' : 'Replier le menu'"
        @click="onToggleNavigation"
      />
      <span class="hidden h-5 w-px shrink-0 bg-gray-300 md:block" aria-hidden="true" />
      <div class="flex min-w-0 flex-1 items-center gap-2.5">
        <slot name="title">
          <DashboardIcon v-if="props.icon" :name="props.icon" :size="18" class="text-muted max-md:hidden" />
          <h1 class="truncate text-base font-medium tracking-[-0.005em] text-gray-100 md:text-[17px]">
            {{ props.title }}
          </h1>
        </slot>
      </div>
      <div v-if="$slots.actions" class="flex shrink-0 items-center gap-2">
        <slot name="actions" />
      </div>
    </header>

    <div
      v-if="!isOnline"
      class="flex items-center gap-2 bg-(--dash-amber-tint) px-4 py-2 text-[13px] text-(--dash-amber)"
      role="status"
    >
      <DashboardIcon name="wifi-off" :size="15" />
      Hors ligne : les données affichées peuvent dater. Elles se mettront à jour au retour du réseau.
    </div>

    <div
      v-if="$slots.toolbar"
      class="flex min-h-[52px] shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-b border-gray-300 px-3 py-2 md:px-6 @4xl/page:flex-nowrap @4xl/page:py-0"
    >
      <slot name="toolbar" />
    </div>

    <div ref="scrollBody" class="@container flex-1 px-4 pt-5 pb-8 md:min-h-0 md:overflow-y-auto md:px-6 md:pt-6">
      <div class="dash-rise flex flex-col gap-5 md:gap-6">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UseDashboardShellReturn } from '~/composables/useDashboardShell'
import type { UseDashboardPwaReturn } from '~/composables/useDashboardPwa'
import type { PropType, Ref } from 'vue'
import type { DashboardIconName } from '~/core/constants/dashboardIcons'
import type { DashboardPageProps } from '~/core/types/DashboardPage'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import { useDashboardPwa } from '~/composables/useDashboardPwa'
import { useDashboardShell } from '~/composables/useDashboardShell'

const props: DashboardPageProps = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String as PropType<DashboardIconName | null>,
    default: null,
  },
})

const { isSidebarCollapsed, isMobileMenuOpen, toggleSidebar }: UseDashboardShellReturn = useDashboardShell()
const { isOnline }: UseDashboardPwaReturn = useDashboardPwa()

const scrollBody: Ref<HTMLDivElement | null> = ref(null)
const isMobileViewport: Ref<boolean> = ref(false)
let mobileQuery: MediaQueryList | null = null

/**
 * Collapses the sidebar on desktop, opens the menu drawer on phones.
 *
 * @returns {void}
 */
function onToggleNavigation(): void {
  if (isMobileViewport.value) {
    isMobileMenuOpen.value = true
    return
  }
  toggleSidebar()
}

/**
 * Tracks whether the viewport is phone-sized.
 *
 * @returns {void}
 */
function updateViewport(): void {
  isMobileViewport.value = mobileQuery?.matches ?? false
}

onMounted((): void => {
  mobileQuery = window.matchMedia('(max-width: 767px)')
  updateViewport()
  mobileQuery.addEventListener('change', updateViewport)
})

onBeforeUnmount((): void => {
  mobileQuery?.removeEventListener('change', updateViewport)
})
</script>
