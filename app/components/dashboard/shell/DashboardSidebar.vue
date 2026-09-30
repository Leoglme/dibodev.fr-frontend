<template>
  <aside
    class="flex h-full flex-col gap-3.5 overflow-hidden py-3 transition-[width,padding] duration-[260ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
    :class="isCollapsedToIcons ? 'w-[68px] px-2.5' : 'w-[264px] pr-2.5 pl-3'"
    aria-label="Navigation du back-office"
  >
    <NuxtLink
      :to="localePath('/dashboard')"
      class="flex h-10 shrink-0 items-center gap-2.5"
      :class="isCollapsedToIcons ? 'justify-center' : 'px-1.5'"
      aria-label="Vue d’ensemble"
    >
      <DibodevLogo :size="28" />
      <span v-if="!isCollapsedToIcons" class="text-[17px] font-medium tracking-[-0.01em] text-gray-100">Dibodev</span>
      <span v-if="!isCollapsedToIcons" class="text-muted text-[13px]">Admin</span>
    </NuxtLink>

    <button
      type="button"
      class="text-muted flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-lg border border-gray-300 bg-white text-sm transition-colors hover:border-gray-400"
      :class="isCollapsedToIcons ? 'justify-center' : 'pr-2 pl-2.5'"
      :data-tip="isCollapsedToIcons ? 'Rechercher · Ctrl K' : undefined"
      aria-label="Rechercher"
      @click="openCommandPalette"
    >
      <DashboardIcon name="search" :size="16" />
      <template v-if="!isCollapsedToIcons">
        <span class="flex-1 text-left">Rechercher…</span>
        <kbd
          class="dash-mono text-muted hidden h-5 items-center rounded-[5px] border border-gray-300 bg-gray-800 px-1.5 text-[10.5px] font-medium [@media(hover:hover)]:inline-flex"
        >
          Ctrl K
        </kbd>
      </template>
    </button>

    <DashboardButton
      :to="localePath({ path: DASHBOARD_EDITOR_PATH, query: { new: '1' } })"
      variant="primary"
      icon="plus"
      :square="isCollapsedToIcons"
      class="shrink-0"
      :class="isCollapsedToIcons ? 'w-full' : 'justify-start'"
      :data-tip="isCollapsedToIcons ? 'Nouvel article' : undefined"
      :aria-label="isCollapsedToIcons ? 'Nouvel article' : undefined"
    >
      <template v-if="!isCollapsedToIcons">Nouvel article</template>
    </DashboardButton>

    <nav class="-mx-1 flex min-h-0 flex-1 flex-col gap-[18px] overflow-y-auto px-1 pt-0.5 pb-2" aria-label="Sections">
      <div v-for="group in DASHBOARD_NAV_GROUPS" :key="group.label" class="flex flex-col gap-0.5">
        <p v-if="!isCollapsedToIcons" class="dash-label px-2 pb-1.5">{{ group.label }}</p>
        <span v-else class="mx-2.5 mb-2 h-px bg-gray-300" aria-hidden="true" />
        <NuxtLink
          v-for="item in group.items"
          :key="item.key"
          :to="localePath(item.path)"
          class="relative flex h-[38px] items-center gap-2.5 rounded-lg text-[14.5px] whitespace-nowrap transition-[background-color,color,box-shadow] duration-150"
          :class="[
            isCollapsedToIcons ? 'justify-center' : 'pr-2 pl-1.5',
            isActive(item)
              ? 'bg-white font-medium text-gray-100 shadow-(--dash-shadow-raise)'
              : 'text-gray-200 hover:bg-(--dash-hover) hover:text-gray-100',
          ]"
          :aria-current="isActive(item) ? 'page' : undefined"
          :data-tip="isCollapsedToIcons ? navTip(item) : undefined"
          @click="isMobileMenuOpen = false"
        >
          <DashboardIconTile :icon="item.icon" :tone="item.tone" size="sm" />
          <span v-if="!isCollapsedToIcons" class="min-w-0 flex-1 truncate">{{ item.label }}</span>
          <span
            v-if="!isCollapsedToIcons && navCount(item) > 0"
            class="text-[13px] tabular-nums"
            :class="isAlert(item) ? 'font-medium text-(--dash-red)' : 'text-(--dash-faint)'"
          >
            {{ navCount(item) }}
          </span>
          <span
            v-if="isCollapsedToIcons && isAlert(item)"
            class="absolute top-1.5 right-2 h-[7px] w-[7px] rounded-full bg-(--dash-red) ring-2 ring-gray-800"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </nav>

    <div class="flex shrink-0 flex-col gap-2">
      <component
        :is="deployRunUrl ? 'a' : 'div'"
        :href="deployRunUrl || undefined"
        :target="deployRunUrl ? '_blank' : undefined"
        :rel="deployRunUrl ? 'noopener noreferrer' : undefined"
        class="flex items-center gap-2.5 rounded-xl border border-gray-300 bg-white text-[13px]"
        :class="[
          isCollapsedToIcons ? 'justify-center py-3' : 'px-3 py-2.5',
          deployRunUrl ? 'transition-colors hover:border-gray-400' : '',
        ]"
        :data-tip="isCollapsedToIcons ? `${deployDisplay.title} · ${deployDisplay.detail}` : undefined"
      >
        <span class="relative flex h-2 w-2 shrink-0">
          <span
            v-if="deployDisplay.running"
            class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            :class="DASHBOARD_TONES[deployDisplay.tone].dot"
          />
          <span class="relative inline-flex h-2 w-2 rounded-full" :class="DASHBOARD_TONES[deployDisplay.tone].dot" />
        </span>
        <span v-if="!isCollapsedToIcons" class="min-w-0">
          <span class="block font-medium text-gray-100">{{ deployDisplay.title }}</span>
          <span class="text-muted block truncate text-xs">{{ deployDisplay.detail }}</span>
        </span>
      </component>

      <div class="relative">
        <button
          ref="accountButton"
          type="button"
          class="flex w-full cursor-pointer items-center gap-2.5 rounded-lg p-1.5 text-left transition-colors hover:bg-(--dash-hover)"
          :class="isCollapsedToIcons ? 'justify-center' : ''"
          aria-haspopup="menu"
          :aria-expanded="isAccountMenuOpen"
          aria-label="Compte"
          @click="toggleAccountMenu"
        >
          <img
            src="/images/about/leo-guillaume-portrait-400.webp"
            alt=""
            width="32"
            height="32"
            class="bg-accent-tint h-8 w-8 shrink-0 rounded-full object-cover"
          />
          <span v-if="!isCollapsedToIcons" class="min-w-0 flex-1">
            <span class="block truncate text-sm font-medium text-gray-100">Léo Guillaume</span>
            <span class="text-muted block truncate text-xs">contact@dibodev.fr</span>
          </span>
          <DashboardIcon v-if="!isCollapsedToIcons" name="chevrons-up-down" :size="16" class="text-muted" />
        </button>

        <Transition name="dash-pop">
          <div
            v-if="isAccountMenuOpen"
            class="fixed z-[70] w-max max-w-[min(320px,calc(100vw-24px))] min-w-[240px] rounded-xl bg-white p-1.5 shadow-(--dash-shadow-pop)"
            :style="accountMenuPosition ?? undefined"
            role="menu"
          >
            <DashboardMenuItem icon="external-link" href="https://dibodev.fr">Voir le site</DashboardMenuItem>
            <DashboardMenuItem v-if="!isInstalledApp" icon="smartphone" @click="onShowInstallHelp">
              Installer sur l’écran d’accueil
            </DashboardMenuItem>
            <DashboardMenuItem icon="command" class="max-md:hidden" @click="onOpenPalette">
              Recherche et actions
              <template #trailing>
                <kbd class="dash-mono text-muted shrink-0 pl-3 text-[10.5px] whitespace-nowrap">Ctrl K</kbd>
              </template>
            </DashboardMenuItem>
            <span class="mx-1 my-1.5 block h-px bg-(--dash-line-soft)" aria-hidden="true" />
            <DashboardMenuItem icon="log-out" is-danger @click="onLogout">Se déconnecter</DashboardMenuItem>
          </div>
        </Transition>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import type { UseDashboardTranslationsReturn } from '~/composables/useDashboardTranslations'
import type { UseDashboardShellReturn } from '~/composables/useDashboardShell'
import type { UseDashboardPwaReturn } from '~/composables/useDashboardPwa'
import type { UseDashboardIndexingReturn } from '~/composables/useDashboardIndexing'
import type { UseDashboardDeployStatusReturn } from '~/composables/useDashboardDeployStatus'
import type { UseDashboardArticlesReturn } from '~/composables/useDashboardArticles'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardNavItem } from '~/core/types/Dashboard'
import type { DashboardSidebarMenuPosition, DashboardSidebarProps } from '~/core/types/DashboardSidebar'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardIconTile from '~/components/dashboard/ui/DashboardIconTile.vue'
import DashboardMenuItem from '~/components/dashboard/ui/DashboardMenuItem.vue'
import { DASHBOARD_EDITOR_PATH, DASHBOARD_NAV_GROUPS } from '~/core/constants/dashboardNavigation'
import { DASHBOARD_TONES } from '~/core/constants/dashboardTones'
import { useDashboardArticles } from '~/composables/useDashboardArticles'
import { useDashboardDeployStatus } from '~/composables/useDashboardDeployStatus'
import { useDashboardIndexing } from '~/composables/useDashboardIndexing'
import { useDashboardPwa } from '~/composables/useDashboardPwa'
import { useDashboardShell } from '~/composables/useDashboardShell'
import { useDashboardTranslations } from '~/composables/useDashboardTranslations'

const props: DashboardSidebarProps = defineProps({
  forceExpanded: {
    type: Boolean,
    default: false,
  },
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const { isSidebarCollapsed, isMobileMenuOpen, openCommandPalette, logout }: UseDashboardShellReturn =
  useDashboardShell()
const { counts: articleCounts }: UseDashboardArticlesReturn = useDashboardArticles()
const { counts: indexingCounts }: UseDashboardIndexingReturn = useDashboardIndexing()
const { coverage }: UseDashboardTranslationsReturn = useDashboardTranslations()
const { display: deployDisplay, status: deployStatus }: UseDashboardDeployStatusReturn = useDashboardDeployStatus()
const { isInstalledApp, showInstallInstructions }: UseDashboardPwaReturn = useDashboardPwa()

const isAccountMenuOpen: Ref<boolean> = ref(false)
const accountButton: Ref<HTMLButtonElement | null> = ref(null)
const accountMenuPosition: Ref<DashboardSidebarMenuPosition | null> = ref(null)

const isCollapsedToIcons: ComputedRef<boolean> = computed(
  (): boolean => !props.forceExpanded && isSidebarCollapsed.value,
)

const deployRunUrl: ComputedRef<string | null> = computed((): string | null => deployStatus.value?.run?.url ?? null)

/**
 * Whether a navigation entry matches the current route.
 *
 * @param {DashboardNavItem} item - The entry.
 * @returns {boolean} True for the current section.
 */
function isActive(item: DashboardNavItem): boolean {
  const path: string = route.path.replace(/\/$/, '')
  const paths: string[] = [item.path, ...item.matches].map((p: string): string => localePath(p).replace(/\/$/, ''))
  return paths.some((p: string): boolean => path === p)
}

/**
 * Count shown next to an entry: drafts, untranslated items, duplicate pages.
 *
 * @param {DashboardNavItem} item - The entry.
 * @returns {number} The count (0 hides it).
 */
function navCount(item: DashboardNavItem): number {
  if (item.key === 'articles') return articleCounts.value.draft + articleCounts.value.failed
  if (item.key === 'translations') return coverage.value.missing.length
  if (item.key === 'indexing') return indexingCounts.value.duplicate + indexingCounts.value.error
  return 0
}

/**
 * Whether the count calls for action (failed publication, duplicate or broken page).
 *
 * @param {DashboardNavItem} item - The entry.
 * @returns {boolean} True when the count is shown in red.
 */
function isAlert(item: DashboardNavItem): boolean {
  if (item.key === 'articles') return articleCounts.value.failed > 0
  if (item.key === 'indexing') return indexingCounts.value.duplicate + indexingCounts.value.error > 0
  return false
}

/**
 * Tooltip of an entry in the collapsed sidebar.
 *
 * @param {DashboardNavItem} item - The entry.
 * @returns {string} The tooltip text.
 */
function navTip(item: DashboardNavItem): string {
  const count: number = navCount(item)
  return count > 0 ? `${item.label} · ${count}` : item.label
}

/**
 * Opens or closes the account menu just above the account button; it is fixed because the sidebar clips its overflow.
 *
 * @returns {void}
 */
function toggleAccountMenu(): void {
  if (isAccountMenuOpen.value) {
    isAccountMenuOpen.value = false
    return
  }
  const rect: DOMRect | undefined = accountButton.value?.getBoundingClientRect()
  accountMenuPosition.value = rect
    ? { left: `${Math.round(rect.left)}px`, bottom: `${Math.round(window.innerHeight - rect.top + 8)}px` }
    : null
  isAccountMenuOpen.value = true
}

/**
 * Closes the account menu when the window is resized, since its position was measured for the old size.
 *
 * @returns {void}
 */
function closeAccountMenu(): void {
  isAccountMenuOpen.value = false
}

/**
 * Opens the command palette from the account menu.
 *
 * @returns {void}
 */
function onOpenPalette(): void {
  isAccountMenuOpen.value = false
  openCommandPalette()
}

/**
 * Explains how to install the dashboard as an app on iPhone / iPad (Safari has no install prompt).
 *
 * @returns {void}
 */
function onShowInstallHelp(): void {
  isAccountMenuOpen.value = false
  showInstallInstructions()
}

/**
 * Logs out and goes back to the login page.
 *
 * @returns {Promise<void>}
 */
async function onLogout(): Promise<void> {
  isAccountMenuOpen.value = false
  await logout()
}

/**
 * Closes the account menu on an outside click.
 *
 * @param {MouseEvent} event - The click.
 * @returns {void}
 */
function onDocumentClick(event: MouseEvent): void {
  if (!isAccountMenuOpen.value) return
  const target: Node | null = event.target as Node | null
  if (target && accountButton.value?.parentElement?.contains(target)) return
  isAccountMenuOpen.value = false
}

onMounted((): void => {
  document.addEventListener('click', onDocumentClick)
  window.addEventListener('resize', closeAccountMenu)
})

onBeforeUnmount((): void => {
  document.removeEventListener('click', onDocumentClick)
  window.removeEventListener('resize', closeAccountMenu)
})
</script>

<style scoped>
.dash-pop-enter-active,
.dash-pop-leave-active {
  transition:
    opacity 0.14s ease,
    transform 0.14s cubic-bezier(0.22, 1, 0.36, 1);
}

.dash-pop-enter-from,
.dash-pop-leave-to {
  opacity: 0;
  transform: translateY(4px) scale(0.98);
}
</style>
