<template>
  <nav
    class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-300 bg-white/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md md:hidden"
    aria-label="Navigation principale"
  >
    <div class="mx-auto grid h-16 max-w-md grid-cols-5 items-stretch px-2">
      <NuxtLink
        v-for="tab in leftTabs"
        :key="tab.key"
        :to="localePath(tab.path)"
        class="flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors"
        :class="isActive(tab) ? 'text-gray-100' : 'text-muted'"
        :aria-current="isActive(tab) ? 'page' : undefined"
      >
        <DashboardIcon :name="tab.icon" :size="22" :stroke-width="isActive(tab) ? 2 : 1.75" />
        {{ tab.shortLabel }}
      </NuxtLink>

      <div class="flex items-start justify-center">
        <NuxtLink
          :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { new: '1' } })"
          class="bg-primary -mt-3 grid h-[52px] w-[52px] place-items-center rounded-full text-white shadow-[0_10px_24px_-8px_rgba(111,95,224,0.7)] transition-transform active:scale-95"
          aria-label="Nouvel article"
        >
          <DashboardIcon name="plus" :size="24" :stroke-width="2.2" />
        </NuxtLink>
      </div>

      <NuxtLink
        :to="localePath(searchTab.path)"
        class="flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors"
        :class="isActive(searchTab) ? 'text-gray-100' : 'text-muted'"
        :aria-current="isActive(searchTab) ? 'page' : undefined"
      >
        <DashboardIcon :name="searchTab.icon" :size="22" :stroke-width="isActive(searchTab) ? 2 : 1.75" />
        {{ searchTab.shortLabel }}
      </NuxtLink>

      <button
        type="button"
        class="relative flex cursor-pointer flex-col items-center justify-center gap-1 text-[11px] font-medium transition-colors"
        :class="isMoreTabActive ? 'text-gray-100' : 'text-muted'"
        aria-label="Plus de sections"
        @click="isMobileMenuOpen = true"
      >
        <DashboardIcon name="menu" :size="22" />
        Plus
        <span
          v-if="hasAlertInMoreTab"
          class="absolute top-3 right-[calc(50%-16px)] h-2 w-2 rounded-full bg-(--dash-red) ring-2 ring-white"
          aria-hidden="true"
        />
      </button>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { UseDashboardShellReturn } from '~/composables/useDashboardShell'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { DashboardTabBarEntry } from '~/core/types/DashboardTabBar'
import type { ComputedRef } from 'vue'
import type { DashboardNavItem } from '~/core/types/Dashboard'
import { computed } from 'vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import {
  DASHBOARD_ARTICLES_ITEM,
  DASHBOARD_AUDIT_ITEM,
  DASHBOARD_EDITOR_PATH,
  DASHBOARD_HOME_PAGE_ITEM,
  DASHBOARD_INDEXING_ITEM,
  DASHBOARD_OVERVIEW_ITEM,
  DASHBOARD_SEARCH_ITEM,
  DASHBOARD_TRANSLATIONS_ITEM,
} from '~/core/constants/dashboardNavigation'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardShell } from '~/composables/useDashboardShell'

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const { isMobileMenuOpen }: UseDashboardShellReturn = useDashboardShell()
const { counts: indexingCounts }: UseDashboardIndexingReturn = useDashboardIndexing()

const leftTabs: DashboardTabBarEntry[] = [
  { ...DASHBOARD_OVERVIEW_ITEM, shortLabel: 'Accueil' },
  { ...DASHBOARD_ARTICLES_ITEM, shortLabel: 'Articles' },
]

const searchTab: DashboardTabBarEntry = { ...DASHBOARD_SEARCH_ITEM, shortLabel: 'Google' }

const isMoreTabActive: ComputedRef<boolean> = computed((): boolean =>
  [DASHBOARD_HOME_PAGE_ITEM, DASHBOARD_TRANSLATIONS_ITEM, DASHBOARD_INDEXING_ITEM, DASHBOARD_AUDIT_ITEM].some(isActive),
)

const hasAlertInMoreTab: ComputedRef<boolean> = computed(
  (): boolean => indexingCounts.value.duplicate + indexingCounts.value.error > 0,
)

/**
 * Whether an entry matches the current route.
 *
 * @param {DashboardNavItem} item - The entry.
 * @returns {boolean} True for the current section.
 */
function isActive(item: DashboardNavItem): boolean {
  const path: string = route.path.replace(/\/$/, '')
  return [item.path, ...item.matches].some((p: string): boolean => localePath(p).replace(/\/$/, '') === path)
}
</script>
