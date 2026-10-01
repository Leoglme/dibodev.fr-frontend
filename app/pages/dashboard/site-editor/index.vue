<template>
  <DashboardPage title="Éditeur du site" icon="panels-top-left" is-full-bleed>
    <template #actions>
      <DashboardStatus
        v-if="hasUnpublishedChanges"
        tone="amber"
        label="Modifications non publiées"
        class="max-lg:hidden"
      />
      <DashboardStatus
        v-else
        :tone="deployDisplay.tone"
        :label="deployDisplay.title"
        :pulse="deployDisplay.running"
        class="max-md:hidden"
      />
      <DashboardButton v-if="hasUnpublishedChanges" variant="ghost" size="sm" :disabled="isSaving" @click="onDiscard">
        Annuler
      </DashboardButton>
      <DashboardButton
        variant="primary"
        size="sm"
        icon="rocket"
        :loading="isSaving"
        :disabled="!canPublish"
        @click="onPublish"
      >
        Publier
      </DashboardButton>
    </template>

    <p
      v-if="error"
      class="flex items-center gap-2 border-b border-gray-300 px-4 py-2.5 text-sm text-(--dash-red) md:px-5"
      role="alert"
    >
      <DashboardIcon name="circle-alert" :size="16" class="shrink-0" />
      {{ error }}
    </p>
    <p
      v-if="isAwaitingDeployment"
      class="flex items-center gap-2 border-b border-gray-300 bg-(--dash-amber-wash) px-4 py-2.5 text-[13px] text-gray-200 md:px-5"
      role="status"
    >
      <DashboardIcon name="rocket" :size="15" class="shrink-0 text-(--dash-amber)" />
      <span class="min-w-0 flex-1">
        <span class="font-medium text-gray-100">Mise en ligne en cours.</span>
        Le site se reconstruit tout seul, il sera à jour dans quelques minutes.
      </span>
      <a
        v-if="deployStatus?.run?.url"
        :href="deployStatus.run.url"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 font-medium text-gray-100 underline underline-offset-2 max-sm:hidden"
      >
        Suivre
      </a>
    </p>

    <div class="flex justify-center border-b border-gray-300 px-4 py-2 @4xl:hidden">
      <DashboardSegmented v-model="activePane" :options="PANE_OPTIONS" screen-reader-label="Zone de l’éditeur" />
    </div>

    <div class="flex flex-1 flex-col md:min-h-0 @4xl:flex-row">
      <aside
        class="flex shrink-0 flex-col bg-white md:min-h-0 md:overflow-y-auto @4xl:w-[360px] @4xl:border-r @4xl:border-gray-300 @6xl:w-[392px]"
        :class="{ '@max-4xl:hidden': activePane !== 'content' }"
        aria-label="Contenu de la section"
      >
        <header class="border-b border-(--dash-line-soft) px-4 pt-4 pb-4">
          <p class="text-muted flex items-center gap-1.5 text-[13px]">
            <DashboardIcon name="house" :size="14" class="shrink-0" />
            Page d’accueil
            <DashboardIcon name="chevron-right" :size="13" class="shrink-0 text-(--dash-faint)" />
          </p>
          <h2 class="mt-1 text-[19px] leading-tight font-medium tracking-[-0.01em] text-gray-100">Réalisations</h2>
          <p class="text-muted mt-1.5 text-[13px] leading-relaxed">
            Les projets présentés sur la page d’accueil. L’ordre de la liste est celui des cartes sur le site.
          </p>
        </header>

        <div v-if="isLoadingSiteContent && projects.length === 0" class="flex flex-col gap-2.5 p-4">
          <span v-for="rowIndex in 6" :key="rowIndex" class="dash-skeleton h-12 w-full" />
        </div>
        <template v-else-if="homePageContent">
          <DashboardProjectSelectionField
            v-model="draftProjectSlugs"
            :projects="projects"
            :maximum-count="MAXIMUM_PROJECTS_COUNT"
            :selected-project-notes="hiddenScreensNotes"
          />
          <p
            v-if="selectionSourceNote"
            class="text-muted mt-auto flex items-start gap-2 border-t border-(--dash-line-soft) px-4 py-3.5 text-[13px]"
          >
            <DashboardIcon name="info" :size="15" class="mt-0.5 shrink-0" />
            {{ selectionSourceNote }}
          </p>
        </template>
      </aside>

      <section
        class="min-w-0 flex-1 bg-(--dash-canvas) md:min-h-0 md:overflow-y-auto"
        :class="{ '@max-4xl:hidden': activePane !== 'preview' }"
        aria-label="Aperçu du site"
      >
        <DashboardSitePreview :home-page-content="draftHomePageContent">
          <template #summary="{ device }">{{ visibilitySummary(device) }}</template>
        </DashboardSitePreview>
      </section>
    </div>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardConfirmReturn } from '~/composables/useDashboardConfirm'
import type { UseDashboardDeployStatusReturn } from '~/composables/useDashboardDeployStatus'
import type { UseDashboardSiteEditorReturn } from '~/composables/useDashboardSiteEditor'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type { DashboardSitePreviewScreen } from '~/core/types/DashboardSitePreview'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type {
  HomeFeaturedProjectsDevice,
  HomeFeaturedProjectsGridLayout,
  HomeFeaturedProjectsGridLayouts,
} from '~/core/types/HomeFeaturedProjects'
import type { ComputedRef, Ref } from 'vue'
import type { HomePageContent, SaveFeaturedProjectsResponse } from '~~/server/types/dashboard/homePage'
import { computed, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import DashboardSitePreview from '~/components/dashboard/editor/DashboardSitePreview.vue'
import DashboardProjectSelectionField from '~/components/dashboard/fields/DashboardProjectSelectionField.vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import DashboardStatus from '~/components/dashboard/ui/DashboardStatus.vue'
import { DASHBOARD_SITE_PREVIEW_SCREENS } from '~/core/constants/siteEditorPreview'
import { HomeFeaturedProjectsUtils } from '~/core/utils/HomeFeaturedProjectsUtils'
import { HomePageContentUtils } from '~/core/utils/HomePageContentUtils'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
import { useDashboardConfirm } from '~/composables/useDashboardConfirm'
import { useDashboardDeployStatus } from '~/composables/useDashboardDeployStatus'
import { useDashboardSiteEditor } from '~/composables/useDashboardSiteEditor'
import { useDashboardToast } from '~/composables/useDashboardToast'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Éditeur du site · Dibodev Admin',
})

const {
  projects,
  homePageContent,
  loading: isLoadingSiteContent,
  error,
  saving: isSaving,
  loadSiteContent,
  saveFeaturedProjects,
}: UseDashboardSiteEditorReturn = useDashboardSiteEditor()

const {
  status: deployStatus,
  display: deployDisplay,
  watchDeploys,
}: UseDashboardDeployStatusReturn = useDashboardDeployStatus()

const { showToast }: UseDashboardToastReturn = useDashboardToast()
const { confirm }: UseDashboardConfirmReturn = useDashboardConfirm()

const MAXIMUM_PROJECTS_COUNT: number = HomePageContentUtils.MAXIMUM_FEATURED_PROJECTS_COUNT
const SCREEN_NAMES_FORMATTER: Intl.ListFormat = new Intl.ListFormat('fr', { style: 'long', type: 'conjunction' })
const PANE_OPTIONS: DashboardSegmentOption[] = [
  { value: 'content', label: 'Contenu', icon: 'list-ordered' },
  { value: 'preview', label: 'Aperçu', icon: 'eye' },
]

const draftProjectSlugs: Ref<string[]> = ref([])
const activePane: Ref<string> = ref('content')

/** Slugs shown by the next deployment: the saved selection, or the Storyblok favourites while nothing is saved. */
const savedProjectSlugs: ComputedRef<string[]> = computed((): string[] =>
  HomeFeaturedProjectsUtils.resolveDisplayedProjects(
    projects.value,
    homePageContent.value?.saved.featuredProjectSlugs ?? [],
  ).map((project: DibodevProject): string => ProjectUtils.getSlug(project)),
)

const draftHomePageContent: ComputedRef<HomePageContent> = computed(
  (): HomePageContent => ({ featuredProjectSlugs: draftProjectSlugs.value }),
)

const hasUnpublishedChanges: ComputedRef<boolean> = computed(
  (): boolean => !HomePageContentUtils.hasSameProjectSlugs(draftProjectSlugs.value, savedProjectSlugs.value),
)

const canPublish: ComputedRef<boolean> = computed(
  (): boolean => hasUnpublishedChanges.value && draftProjectSlugs.value.length > 0,
)

const isAwaitingDeployment: ComputedRef<boolean> = computed(
  (): boolean =>
    homePageContent.value !== null &&
    !HomePageContentUtils.hasSameProjectSlugs(
      homePageContent.value.saved.featuredProjectSlugs,
      homePageContent.value.deployed.featuredProjectSlugs,
    ),
)

const gridLayouts: ComputedRef<HomeFeaturedProjectsGridLayouts> = computed(
  (): HomeFeaturedProjectsGridLayouts => HomeFeaturedProjectsUtils.getGridLayouts(draftProjectSlugs.value.length),
)

const hiddenScreensNotes: ComputedRef<string[]> = computed((): string[] =>
  draftProjectSlugs.value.map((_slug: string, projectIndex: number): string => {
    const hiddenScreenNames: string[] = DASHBOARD_SITE_PREVIEW_SCREENS.filter(
      (screen: DashboardSitePreviewScreen): boolean => projectIndex >= gridLayouts.value[screen.device].visibleCount,
    ).map((screen: DashboardSitePreviewScreen): string => screen.label.toLowerCase())
    return hiddenScreenNames.length > 0 ? `Masqué sur ${SCREEN_NAMES_FORMATTER.format(hiddenScreenNames)}` : ''
  }),
)

const selectionSourceNote: ComputedRef<string> = computed((): string => {
  const savedSlugs: string[] = homePageContent.value?.saved.featuredProjectSlugs ?? []
  if (savedSlugs.length === 0) {
    return 'Rien n’est encore enregistré ici : le site affiche les projets cochés « favori » dans Storyblok.'
  }
  const unpublishedSlugs: string[] = savedSlugs.filter(
    (slug: string): boolean => !savedProjectSlugs.value.includes(slug),
  )
  return unpublishedSlugs.length > 0 ? `Ignoré car plus publié dans Storyblok : ${unpublishedSlugs.join(', ')}.` : ''
})

/**
 * Says how many cards the section shows on a screen, and why some are left out.
 *
 * @param {HomeFeaturedProjectsDevice} device - The simulated screen.
 * @returns {string} The summary shown above the preview.
 */
function visibilitySummary(device: HomeFeaturedProjectsDevice): string {
  const { columnsCount, visibleCount }: HomeFeaturedProjectsGridLayout = gridLayouts.value[device]
  const selectedProjectsCount: number = draftProjectSlugs.value.length
  if (!homePageContent.value) return 'Chargement du contenu…'
  if (selectedProjectsCount === 0) return 'Aucun projet sélectionné : le site afficherait les favoris Storyblok.'
  const columnsLabel: string = columnsCount > 1 ? `${columnsCount} colonnes` : '1 colonne'
  if (visibleCount === selectedProjectsCount) {
    return `${visibleCount} ${visibleCount > 1 ? 'cartes' : 'carte'} sur ${columnsLabel}`
  }
  const hiddenCardsReason: string =
    device === 'phone' ? 'la section reste courte sur téléphone' : 'une ligne incomplète n’est jamais affichée'
  return `${visibleCount} cartes affichées sur ${selectedProjectsCount} : ${hiddenCardsReason}`
}

/**
 * Drops the unpublished changes and goes back to the saved selection.
 *
 * @returns {void}
 */
function onDiscard(): void {
  draftProjectSlugs.value = [...savedProjectSlugs.value]
}

/**
 * Publishes the selection: one commit on the repository, which rebuilds and deploys the site.
 *
 * @returns {Promise<void>}
 */
async function onPublish(): Promise<void> {
  try {
    const response: SaveFeaturedProjectsResponse = await saveFeaturedProjects(draftProjectSlugs.value)
    showToast({
      tone: 'cyan',
      icon: 'rocket',
      title: 'Modifications publiées',
      text: response.hasNewCommit
        ? 'Le site se reconstruit : en ligne dans quelques minutes.'
        : 'Cette sélection était déjà enregistrée.',
    })
    watchDeploys()
  } catch {
    showToast({
      tone: 'red',
      title: 'La publication a échoué',
      text: 'Rien n’a changé sur le site. Réessayez dans un instant.',
    })
  }
}

watch(
  savedProjectSlugs,
  (slugs: string[], previousSlugs: string[] | undefined): void => {
    const hasUnsavedChanges: boolean = !HomePageContentUtils.hasSameProjectSlugs(
      draftProjectSlugs.value,
      previousSlugs ?? [],
    )
    if (!hasUnsavedChanges) draftProjectSlugs.value = [...slugs]
  },
  { immediate: true },
)

watch(
  (): boolean | null => deployStatus.value?.synced ?? null,
  (isSiteSynced: boolean | null): void => {
    if (isSiteSynced && isAwaitingDeployment.value) loadSiteContent(true).catch((): void => undefined)
  },
)

onBeforeRouteLeave((): boolean | Promise<boolean> => {
  if (!hasUnpublishedChanges.value) return true
  return confirm({
    title: 'Quitter sans publier ?',
    text: 'Les modifications du site ne sont pas enregistrées.',
    confirmLabel: 'Quitter',
    danger: true,
  })
})

onMounted((): void => {
  loadSiteContent().catch((): void => undefined)
})
</script>
