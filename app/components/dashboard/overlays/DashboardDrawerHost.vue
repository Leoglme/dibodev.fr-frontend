<template>
  <Transition name="dash-scrim">
    <div
      v-if="topEntry"
      class="fixed inset-0 z-[70] bg-(--dash-scrim) md:bg-(--dash-scrim-light) xl:hidden"
      aria-hidden="true"
      @click="closeDrawer"
    />
  </Transition>
  <Transition name="dash-drawer">
    <aside
      v-if="topEntry"
      :key="topEntry.kind"
      class="fixed inset-x-0 bottom-0 z-[75] flex max-h-[92dvh] flex-col rounded-t-2xl bg-white shadow-(--dash-shadow-pop) md:inset-x-auto md:top-2 md:right-2 md:bottom-2 md:max-h-none md:w-[min(480px,calc(100vw-16px))] md:rounded-2xl"
      role="dialog"
      :aria-modal="isDrawerBesideContent ? 'false' : 'true'"
      aria-label="Détail"
    >
      <span class="mx-auto mt-2 block h-1 w-10 shrink-0 rounded-full bg-gray-300 md:hidden" aria-hidden="true" />
      <DashboardArticleDrawer
        v-if="topEntry.kind === 'article'"
        :article-key="topEntry.articleKey"
        :browse-keys="topEntry.browseKeys"
      />
      <DashboardPublishDrawer v-else-if="topEntry.kind === 'publish'" :article-id="topEntry.articleId" />
      <DashboardIndexingDrawer
        v-else-if="topEntry.kind === 'indexing'"
        :url="topEntry.url"
        :browse-urls="topEntry.browseUrls"
      />
      <DashboardQueryDrawer v-else :query="topEntry.query" :period="topEntry.period" />
    </aside>
  </Transition>
</template>

<script lang="ts" setup>
import type { UseDashboardDrawerReturn } from '~/composables/useDashboardDrawer'
import type { Ref } from 'vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import DashboardArticleDrawer from '~/components/dashboard/drawers/DashboardArticleDrawer.vue'
import DashboardIndexingDrawer from '~/components/dashboard/drawers/DashboardIndexingDrawer.vue'
import DashboardPublishDrawer from '~/components/dashboard/drawers/DashboardPublishDrawer.vue'
import DashboardQueryDrawer from '~/components/dashboard/drawers/DashboardQueryDrawer.vue'
import { useDashboardDrawer } from '~/composables/useDashboardDrawer'

const { topEntry, closeDrawer, restoreDrawers }: UseDashboardDrawerReturn = useDashboardDrawer()

const isDrawerBesideContent: Ref<boolean> = ref(false)
let wideQuery: MediaQueryList | null = null

/**
 * From 1280 px the drawer sits next to the content (non-modal, content pushed aside); below, it covers it.
 *
 * @returns {void}
 */
function updateWide(): void {
  isDrawerBesideContent.value = wideQuery?.matches ?? false
}

onMounted((): void => {
  restoreDrawers()
  wideQuery = window.matchMedia('(min-width: 1280px)')
  updateWide()
  wideQuery.addEventListener('change', updateWide)
})

onBeforeUnmount((): void => {
  wideQuery?.removeEventListener('change', updateWide)
})
</script>

<style scoped>
.dash-scrim-enter-active,
.dash-scrim-leave-active {
  transition: opacity 0.2s ease;
}

.dash-scrim-enter-from,
.dash-scrim-leave-to {
  opacity: 0;
}

.dash-drawer-enter-active {
  transition: transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
}

.dash-drawer-leave-active {
  transition: transform 0.22s ease;
}

.dash-drawer-enter-from,
.dash-drawer-leave-to {
  transform: translateY(100%);
}

@media (min-width: 768px) {
  .dash-drawer-enter-from,
  .dash-drawer-leave-to {
    transform: translateX(calc(100% + 16px));
  }
}
</style>
