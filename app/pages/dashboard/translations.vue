<template>
  <DashboardPage title="Traductions" icon="languages">
    <template #actions>
      <DashboardStatus
        :tone="deployDisplay.tone"
        :label="deployDisplay.title"
        :pulse="deployDisplay.running"
        class="max-md:hidden"
      />
      <DashboardButton
        variant="outline"
        size="sm"
        icon="refresh-cw"
        :loading="isLoadingTranslations"
        @click="onRefresh"
      >
        <span class="max-sm:hidden">Actualiser</span>
      </DashboardButton>
    </template>

    <template #toolbar>
      <DashboardTabs
        v-model="tab"
        :items="tabs"
        screen-reader-label="Type de contenu"
        class="min-w-0 @max-4xl/page:w-full"
      />
      <DashboardSearchInput
        v-model="search"
        id="translations-search"
        placeholder="Nom ou slug…"
        class="w-full pb-1 @4xl/page:ml-auto @4xl/page:w-[220px] @4xl/page:pb-0 @6xl/page:w-[260px]"
      />
    </template>

    <p v-if="error" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
      <DashboardIcon name="circle-alert" :size="16" />
      {{ error }}
    </p>

    <div class="grid grid-cols-2 gap-3 @xl:gap-5 @4xl:grid-cols-3">
      <DashboardCard v-for="lang in languageCards" :key="lang.code">
        <div class="flex flex-col gap-2.5 px-4 py-4 sm:px-[18px]">
          <div class="flex items-center justify-between">
            <p class="dash-label">{{ lang.label }}</p>
            <span class="dash-mono text-muted text-[11px]">{{ lang.code }}</span>
          </div>
          <p class="text-[26px] leading-none font-medium tracking-[-0.02em] text-gray-100 tabular-nums">
            {{ lang.done }}
            <small class="text-muted text-base leading-none font-normal tracking-normal"
              >/ {{ coverage.total }}<span class="@max-xl:hidden"> contenus</span></small
            >
          </p>
          <div class="h-1.5 overflow-hidden rounded-full bg-gray-600">
            <span class="block h-full rounded-full bg-(--dash-chart-good)" :style="{ width: `${lang.ratio}%` }" />
          </div>
        </div>
      </DashboardCard>
      <DashboardCard class="col-span-2 @4xl:col-span-1">
        <div class="flex flex-col gap-2 px-4 py-4 sm:px-[18px]">
          <div class="flex items-center justify-between gap-2">
            <p class="dash-label">Dernier commit</p>
            <span v-if="deployStatus?.headCommit" class="dash-mono text-muted text-[11.5px]">{{
              deployStatus.headCommit.slice(0, 7)
            }}</span>
          </div>
          <p class="line-clamp-2 text-sm font-medium text-gray-100">{{ deployStatus?.headMessage ?? '—' }}</p>
          <p class="text-muted text-[13px]">
            {{ deployStatus?.headDate ? DashboardFormatUtils.formatDateTime(deployStatus.headDate) : '' }}
            <template v-if="deployStatus?.synced === true"> · en ligne</template>
            <template v-else-if="deployStatus?.synced === false"> · déploiement en attente</template>
          </p>
        </div>
      </DashboardCard>
    </div>

    <DashboardCard v-if="isLoadingTranslations && !lists">
      <div class="flex flex-col gap-2 p-5">
        <span v-for="index in 5" :key="index" class="dash-skeleton h-12 w-full" />
      </div>
    </DashboardCard>

    <template v-else-if="lists">
      <DashboardCard v-if="missingRows.length === 0">
        <div class="flex items-center gap-3 px-4 py-3.5 sm:px-5" role="status">
          <DashboardIcon
            :name="search ? 'search' : 'circle-check'"
            :size="17"
            class="shrink-0"
            :class="search ? 'text-muted' : 'text-(--dash-green)'"
          />
          <p class="text-sm text-gray-200">
            <template v-if="search">Aucun contenu à traduire ne correspond à « {{ search }} ».</template>
            <template v-else>
              <span class="font-medium text-gray-100">
                Tous les contenus de cet onglet sont traduits en anglais et en espagnol.
              </span>
              Les nouveaux contenus apparaîtront ici dès leur publication.
            </template>
          </p>
        </div>
      </DashboardCard>
      <DashboardCard
        v-else
        title="À traduire"
        description="Il manque l’anglais ou l’espagnol. Un clic traduit les deux en un seul commit."
        divided
      >
        <ul>
          <li
            v-for="item in missingRows"
            :key="item.fullSlug"
            class="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-(--dash-line-soft) px-4 py-3 last:border-b-0 sm:px-5"
          >
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium text-gray-100">{{ item.name }}</p>
              <p class="dash-mono text-muted mt-0.5 truncate text-xs">{{ pathOf(item) }}</p>
            </div>
            <DashboardLangChips :english="item.hasEn" :spanish="item.hasEs" />
            <DashboardButton
              variant="primary"
              size="sm"
              icon="languages"
              :loading="translatingSlugs.includes(item.fullSlug)"
              @click="onTranslate(item)"
            >
              Traduire EN + ES
            </DashboardButton>
          </li>
        </ul>
      </DashboardCard>

      <DashboardCard v-if="doneRows.length > 0">
        <button
          type="button"
          class="flex w-full cursor-pointer items-center gap-3 px-4 py-3.5 text-left sm:px-5"
          :aria-expanded="isTranslatedListOpen"
          @click="isTranslatedListOpen = !isTranslatedListOpen"
        >
          <DashboardIcon name="circle-check" :size="17" class="text-(--dash-green)" />
          <span class="text-[15px] font-medium text-gray-100">Déjà traduits</span>
          <span class="text-muted text-sm tabular-nums">{{ doneRows.length }}</span>
          <DashboardIcon
            name="chevron-down"
            :size="16"
            class="text-muted ml-auto transition-transform duration-200"
            :class="{ '-rotate-90': !isTranslatedListOpen }"
          />
        </button>
        <table v-if="isTranslatedListOpen" class="dash-table border-t border-(--dash-line-soft) @max-xl:hidden">
          <thead>
            <tr>
              <th>Contenu</th>
              <th>Langues</th>
              <th class="is-right"><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in doneRows" :key="item.fullSlug">
              <td class="dash-col-main">
                <p class="truncate font-medium text-gray-100">{{ item.name }}</p>
                <p class="dash-mono text-muted mt-0.5 truncate text-xs">{{ pathOf(item) }}</p>
              </td>
              <td><DashboardLangChips :english="item.hasEn" :spanish="item.hasEs" /></td>
              <td class="is-right">
                <DashboardButton
                  variant="ghost"
                  size="sm"
                  square
                  icon="rotate-cw"
                  :loading="translatingSlugs.includes(item.fullSlug)"
                  :aria-label="`Retraduire ${item.name}`"
                  data-tip="Retraduire en anglais et en espagnol"
                  class="dash-hover-reveal"
                  @click="onTranslate(item)"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <ul v-if="isTranslatedListOpen" class="border-t border-(--dash-line-soft) @xl:hidden">
          <li
            v-for="item in doneRows"
            :key="item.fullSlug"
            class="flex items-center gap-3 border-b border-(--dash-line-soft) px-4 py-3 last:border-b-0"
          >
            <div class="min-w-0 flex-1">
              <p class="truncate text-sm font-medium text-gray-100">{{ item.name }}</p>
              <p class="dash-mono text-muted mt-0.5 truncate text-xs">{{ pathOf(item) }}</p>
            </div>
            <DashboardButton
              variant="ghost"
              size="sm"
              square
              icon="rotate-cw"
              :loading="translatingSlugs.includes(item.fullSlug)"
              :aria-label="`Retraduire ${item.name}`"
              @click="onTranslate(item)"
            />
          </li>
        </ul>
      </DashboardCard>
    </template>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardTranslationsReturn } from '~/composables/useDashboardTranslations'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { UseDashboardDeployStatusReturn } from '~/composables/useDashboardDeployStatus'
import type {
  DashboardTranslationsLanguageCard,
  DashboardTranslationsTab,
} from '~/core/types/DashboardTranslationsPage'
import type { ComputedRef, Ref } from 'vue'
import type { DashboardTabItem } from '~/core/types/Dashboard'
import type { TranslatableItem, TranslateResponse } from '~/types/dashboard/translations'
import { computed, onMounted, ref, watch } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardLangChips from '~/components/dashboard/ui/DashboardLangChips.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import DashboardStatus from '~/components/dashboard/ui/DashboardStatus.vue'
import DashboardTabs from '~/components/dashboard/ui/DashboardTabs.vue'
import { DashboardFormatUtils } from '~/core/utils/DashboardFormatUtils'
import { useDashboardDeployStatus } from '~/composables/useDashboardDeployStatus'
import { useDashboardToast } from '~/composables/useDashboardToast'
import { useDashboardTranslations } from '~/composables/useDashboardTranslations'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Traductions · Dibodev Admin',
})

const {
  lists,
  loading: isLoadingTranslations,
  error,
  translatingSlugs,
  coverage,
  loadTranslations,
  translateItem,
}: UseDashboardTranslationsReturn = useDashboardTranslations()

const {
  status: deployStatus,
  display: deployDisplay,
  loadDeployStatus,
  watchDeploys,
}: UseDashboardDeployStatusReturn = useDashboardDeployStatus()

const { showToast }: UseDashboardToastReturn = useDashboardToast()

const TAB_NOUNS: Record<DashboardTranslationsTab, string> = {
  projects: 'projets',
  articles: 'articles',
  sectors: 'secteurs',
  categories: 'catégories',
}

const PATH_PREFIXES: Record<TranslatableItem['type'], string> = {
  project: '/project/',
  article: '/blog/',
  sector: '/projets/secteur/',
  category: '/projets/categorie/',
}

const tab: Ref<string> = ref('projects')
const search: Ref<string> = ref('')
const isTranslatedListOpen: Ref<boolean> = ref(false)

const tabItems: ComputedRef<Record<DashboardTranslationsTab, TranslatableItem[]>> = computed(
  (): Record<DashboardTranslationsTab, TranslatableItem[]> => ({
    projects: lists.value?.projects ?? [],
    articles: lists.value?.articles ?? [],
    sectors: lists.value?.sectors ?? [],
    categories: lists.value?.categories ?? [],
  }),
)

const tabs: ComputedRef<DashboardTabItem[]> = computed((): DashboardTabItem[] =>
  (['projects', 'articles', 'sectors', 'categories'] as DashboardTranslationsTab[]).map(
    (value: DashboardTranslationsTab): DashboardTabItem => ({
      value,
      label: TAB_NOUNS[value].charAt(0).toUpperCase() + TAB_NOUNS[value].slice(1),
      count: tabItems.value[value].length,
      alert: tabItems.value[value].some((item: TranslatableItem): boolean => !item.hasEn || !item.hasEs),
    }),
  ),
)

const visibleItems: ComputedRef<TranslatableItem[]> = computed((): TranslatableItem[] => {
  const needle: string = search.value.trim().toLowerCase()
  return tabItems.value[tab.value as DashboardTranslationsTab].filter(
    (item: TranslatableItem): boolean => !needle || `${item.name} ${item.slug}`.toLowerCase().includes(needle),
  )
})

const missingRows: ComputedRef<TranslatableItem[]> = computed((): TranslatableItem[] =>
  visibleItems.value.filter((item: TranslatableItem): boolean => !item.hasEn || !item.hasEs),
)

const doneRows: ComputedRef<TranslatableItem[]> = computed((): TranslatableItem[] =>
  visibleItems.value.filter((item: TranslatableItem): boolean => item.hasEn && item.hasEs),
)

const languageCards: ComputedRef<DashboardTranslationsLanguageCard[]> = computed(
  (): DashboardTranslationsLanguageCard[] => {
    const total: number = Math.max(1, coverage.value.total)
    return [
      { code: 'EN', label: 'Anglais', done: coverage.value.english, ratio: (coverage.value.english / total) * 100 },
      { code: 'ES', label: 'Espagnol', done: coverage.value.spanish, ratio: (coverage.value.spanish / total) * 100 },
    ]
  },
)

/**
 * Public path of a translatable item.
 *
 * @param {TranslatableItem} item - The item.
 * @returns {string} Its path on the site.
 */
function pathOf(item: TranslatableItem): string {
  return `${PATH_PREFIXES[item.type]}${item.slug}`
}

/**
 * Translates an item into English and Spanish.
 *
 * @param {TranslatableItem} item - The item.
 * @returns {Promise<void>}
 */
async function onTranslate(item: TranslatableItem): Promise<void> {
  try {
    const response: TranslateResponse = await translateItem(item)
    if (response.ok) {
      showToast({
        tone: 'pink',
        icon: 'languages',
        title: `${item.name} traduit en anglais et en espagnol`,
        text: 'Commit poussé : le site se reconstruit.',
      })
      watchDeploys()
    } else {
      showToast({ tone: 'red', title: 'La traduction a échoué', text: response.message })
    }
  } catch (e: unknown) {
    showToast({ tone: 'red', title: 'La traduction a échoué', text: e instanceof Error ? e.message : '' })
  }
}

/**
 * Reloads the lists and the deploy status.
 *
 * @returns {Promise<void>}
 */
async function onRefresh(): Promise<void> {
  await Promise.allSettled([loadTranslations(true), loadDeployStatus()])
}

watch(
  [tab, search, lists],
  (): void => {
    isTranslatedListOpen.value = search.value.trim().length > 0 || missingRows.value.length === 0
  },
  { immediate: true },
)

onMounted((): void => {
  loadTranslations()
    .then((): void => {
      const firstMissing: DashboardTabItem | undefined = tabs.value.find(
        (item: DashboardTabItem): boolean => item.alert === true,
      )
      if (firstMissing) tab.value = firstMissing.value
    })
    .catch((): void => undefined)
})
</script>
