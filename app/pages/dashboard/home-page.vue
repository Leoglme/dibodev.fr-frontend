<template>
  <DashboardPage title="Page d’accueil" icon="house">
    <template #actions>
      <DashboardStatus
        :tone="deployDisplay.tone"
        :label="deployDisplay.title"
        :pulse="deployDisplay.running"
        class="max-md:hidden"
      />
      <DashboardButton v-if="hasUnsavedSelection" variant="ghost" size="sm" :disabled="isSaving" @click="onDiscard">
        Annuler
      </DashboardButton>
      <DashboardButton
        variant="primary"
        size="sm"
        icon="rocket"
        :loading="isSaving"
        :disabled="!canPublishSelection"
        @click="onPublish"
      >
        <span class="max-sm:hidden">Mettre en ligne</span>
        <span class="sm:hidden">Publier</span>
      </DashboardButton>
    </template>

    <p v-if="error" class="flex items-center gap-2 text-sm text-(--dash-red)" role="alert">
      <DashboardIcon name="circle-alert" :size="16" />
      {{ error }}
    </p>

    <DashboardCard v-if="isAwaitingDeployment">
      <div class="flex items-center gap-3 px-4 py-3.5 sm:px-5" role="status">
        <DashboardIcon name="rocket" :size="17" class="shrink-0 text-(--dash-amber)" />
        <p class="min-w-0 flex-1 text-sm text-gray-200">
          <span class="font-medium text-gray-100">Sélection enregistrée, mise en ligne en cours.</span>
          Le site se reconstruit tout seul : la page d’accueil sera à jour dans quelques minutes.
        </p>
        <DashboardButton
          v-if="deployStatus?.run?.url"
          variant="outline"
          size="sm"
          trailing-icon="external-link"
          :href="deployStatus.run.url"
          class="max-sm:hidden"
        >
          Suivre
        </DashboardButton>
      </div>
    </DashboardCard>

    <div v-if="isLoadingHomePage && projects.length === 0" class="grid gap-5 md:gap-6 @4xl:grid-cols-2">
      <DashboardCard v-for="cardIndex in 2" :key="cardIndex">
        <div class="flex flex-col gap-2 p-5">
          <span v-for="rowIndex in 4" :key="rowIndex" class="dash-skeleton h-12 w-full" />
        </div>
      </DashboardCard>
    </div>

    <template v-else-if="content">
      <div class="grid gap-5 md:gap-6 @4xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] @4xl:items-start">
        <DashboardCard title="Réalisations affichées" :description="selectionSummary" divided>
          <DashboardEmptyState
            v-if="selectedProjects.length === 0"
            icon="house"
            title="Aucun projet sélectionné"
            text="Ajoutez au moins un projet pour pouvoir mettre la section en ligne."
          />
          <div v-else ref="selectedListElement">
            <TransitionGroup tag="ol" name="dash-reorder" class="relative">
              <li
                v-for="(project, projectIndex) in selectedProjects"
                :key="project.route"
                class="flex items-center gap-2.5 border-b border-(--dash-line-soft) bg-white py-2.5 pr-2 pl-1.5 transition-[background-color,box-shadow] duration-150 last:rounded-b-xl last:border-b-0 sm:gap-3 sm:pr-3 sm:pl-2.5"
                :class="{
                  'relative z-10 bg-(--dash-row-hover) shadow-[inset_2px_0_0_var(--color-primary)]':
                    draggedIndex === projectIndex,
                }"
              >
                <button
                  type="button"
                  class="text-muted grid h-9 w-7 shrink-0 touch-none place-items-center rounded-md transition-colors select-none hover:bg-(--dash-hover) hover:text-gray-100"
                  :class="draggedIndex === projectIndex ? 'cursor-grabbing' : 'cursor-grab'"
                  :aria-label="`Déplacer ${shortNameOf(project)} (flèches haut et bas)`"
                  data-reorder-control="handle"
                  @pointerdown="startDrag($event, projectIndex)"
                  @keydown.up.prevent="onMoveAndKeepFocus(projectIndex, projectIndex - 1, 'handle')"
                  @keydown.down.prevent="onMoveAndKeepFocus(projectIndex, projectIndex + 1, 'handle')"
                >
                  <DashboardIcon name="grip-vertical" :size="16" />
                </button>
                <span class="dash-mono text-muted w-4 shrink-0 text-center text-[13px] tabular-nums">
                  {{ projectIndex + 1 }}
                </span>
                <DashboardArticleCover :src="screenshotUrlOf(project)" class="@max-md:hidden" />
                <div class="min-w-0 flex-1">
                  <p class="truncate text-sm font-medium text-gray-100">{{ shortNameOf(project) }}</p>
                  <p
                    v-if="hiddenScreensNote(projectIndex)"
                    class="mt-0.5 flex items-center gap-1 truncate text-xs text-(--dash-amber)"
                  >
                    <DashboardIcon name="eye-off" :size="12" />
                    <span class="truncate">{{ hiddenScreensNote(projectIndex) }}</span>
                  </p>
                  <p v-else class="text-muted mt-0.5 truncate text-xs">{{ taglineOf(project) }}</p>
                </div>
                <div class="flex shrink-0 items-center">
                  <DashboardButton
                    variant="ghost"
                    size="sm"
                    square
                    icon="arrow-up"
                    :disabled="projectIndex === 0"
                    :aria-label="`Monter ${shortNameOf(project)}`"
                    data-reorder-control="up"
                    @click="onMoveAndKeepFocus(projectIndex, projectIndex - 1, 'up')"
                  />
                  <DashboardButton
                    variant="ghost"
                    size="sm"
                    square
                    icon="arrow-down"
                    :disabled="projectIndex === selectedProjects.length - 1"
                    :aria-label="`Descendre ${shortNameOf(project)}`"
                    data-reorder-control="down"
                    @click="onMoveAndKeepFocus(projectIndex, projectIndex + 1, 'down')"
                  />
                  <DashboardButton
                    variant="ghost"
                    size="sm"
                    square
                    icon="x"
                    :aria-label="`Retirer ${shortNameOf(project)} de la page d’accueil`"
                    data-tip="Retirer de la page d’accueil"
                    @click="removeProject(projectIndex)"
                  />
                </div>
              </li>
            </TransitionGroup>
          </div>
          <template v-if="selectionSourceNote" #footer>
            <span class="flex items-center gap-2">
              <DashboardIcon name="info" :size="15" class="shrink-0" />
              {{ selectionSourceNote }}
            </span>
          </template>
        </DashboardCard>

        <DashboardCard title="Autres projets" :description="availableProjectsSummary" divided>
          <template #actions>
            <DashboardSearchInput
              v-model="search"
              id="home-page-projects-search"
              placeholder="Nom du projet…"
              screen-reader-label="Rechercher un projet"
              class="w-[168px]"
            />
          </template>
          <p v-if="availableProjects.length === 0" class="text-muted px-4 py-6 text-center text-sm sm:px-5">
            <template v-if="search">Aucun projet ne correspond à « {{ search }} ».</template>
            <template v-else>Tous les projets publiés sont déjà sur la page d’accueil.</template>
          </p>
          <ul v-else class="max-h-[min(62vh,456px)] overflow-y-auto overscroll-contain rounded-b-xl">
            <li
              v-for="project in availableProjects"
              :key="project.route"
              class="flex items-center gap-3 border-b border-(--dash-line-soft) py-2.5 pr-3 pl-4 last:border-b-0 sm:pl-5"
            >
              <DashboardArticleCover :src="screenshotUrlOf(project)" />
              <div class="min-w-0 flex-1">
                <p class="truncate text-sm font-medium text-gray-100">{{ shortNameOf(project) }}</p>
                <p class="text-muted mt-0.5 truncate text-xs">{{ taglineOf(project) }}</p>
              </div>
              <DashboardButton
                variant="outline"
                size="sm"
                icon="plus"
                :disabled="hasSelectedMaximumProjects"
                :aria-label="`Ajouter ${shortNameOf(project)} à la page d’accueil`"
                @click="addProject(project)"
              >
                Ajouter
              </DashboardButton>
            </li>
          </ul>
        </DashboardCard>
      </div>

      <DashboardFeaturedProjectsPreviewCard v-if="selectedProjects.length > 0" :projects="selectedProjects" />
    </template>
  </DashboardPage>
</template>

<script lang="ts" setup>
import type { UseDashboardConfirmReturn } from '~/composables/useDashboardConfirm'
import type { UseDashboardDeployStatusReturn } from '~/composables/useDashboardDeployStatus'
import type { UseDashboardDragReorderReturn } from '~/composables/useDashboardDragReorder'
import type { UseDashboardHomePageReturn } from '~/composables/useDashboardHomePage'
import type { UseDashboardToastReturn } from '~/composables/useDashboardToast'
import type { DashboardFeaturedProjectsPreviewScreen } from '~/core/types/DashboardFeaturedProjectsPreviewCard'
import type { DashboardHomePageReorderControl } from '~/core/types/DashboardHomePage'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { HomeFeaturedProjectsGridLayouts } from '~/core/types/HomeFeaturedProjects'
import type { ComputedRef, Ref } from 'vue'
import type { SaveFeaturedProjectsResponse } from '~~/server/types/dashboard/homePage'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import DashboardFeaturedProjectsPreviewCard from '~/components/dashboard/cards/DashboardFeaturedProjectsPreviewCard.vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardEmptyState from '~/components/dashboard/ui/DashboardEmptyState.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import DashboardStatus from '~/components/dashboard/ui/DashboardStatus.vue'
import { DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS } from '~/core/constants/dashboardFeaturedProjects'
import { HomeFeaturedProjectsUtils } from '~/core/utils/HomeFeaturedProjectsUtils'
import { HomePageContentUtils } from '~/core/utils/HomePageContentUtils'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
import { useDashboardConfirm } from '~/composables/useDashboardConfirm'
import { useDashboardDeployStatus } from '~/composables/useDashboardDeployStatus'
import { useDashboardDragReorder } from '~/composables/useDashboardDragReorder'
import { useDashboardHomePage } from '~/composables/useDashboardHomePage'
import { useDashboardToast } from '~/composables/useDashboardToast'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Page d’accueil · Dibodev Admin',
})

const {
  projects,
  content,
  loading: isLoadingHomePage,
  error,
  saving: isSaving,
  loadHomePage,
  saveFeaturedProjects,
}: UseDashboardHomePageReturn = useDashboardHomePage()

const {
  status: deployStatus,
  display: deployDisplay,
  watchDeploys,
}: UseDashboardDeployStatusReturn = useDashboardDeployStatus()

const { showToast }: UseDashboardToastReturn = useDashboardToast()
const { confirm }: UseDashboardConfirmReturn = useDashboardConfirm()

const MAXIMUM_PROJECTS_COUNT: number = HomePageContentUtils.MAXIMUM_FEATURED_PROJECTS_COUNT
const SCREEN_NAMES_FORMATTER: Intl.ListFormat = new Intl.ListFormat('fr', { style: 'long', type: 'conjunction' })

const selectedListElement: Ref<HTMLDivElement | null> = ref(null)
const draftProjectSlugs: Ref<string[]> = ref([])
const search: Ref<string> = ref('')

const { draggedIndex, startDrag }: UseDashboardDragReorderReturn = useDashboardDragReorder(
  selectedListElement,
  (): number => draftProjectSlugs.value.length,
  moveProject,
)

/** Slugs shown by the next deployment: the saved selection, or the Storyblok favourites while nothing is saved. */
const savedProjectSlugs: ComputedRef<string[]> = computed((): string[] =>
  HomeFeaturedProjectsUtils.resolveDisplayedProjects(
    projects.value,
    content.value?.saved.featuredProjectSlugs ?? [],
  ).map((project: DibodevProject): string => ProjectUtils.getSlug(project)),
)

const selectedProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  HomeFeaturedProjectsUtils.pickProjects(projects.value, draftProjectSlugs.value),
)

const availableProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  const needle: string = search.value.trim().toLowerCase()
  return projects.value.filter(
    (project: DibodevProject): boolean =>
      !draftProjectSlugs.value.includes(ProjectUtils.getSlug(project)) &&
      (!needle || project.name.toLowerCase().includes(needle)),
  )
})

const hasUnsavedSelection: ComputedRef<boolean> = computed(
  (): boolean => !HomePageContentUtils.hasSameProjectSlugs(draftProjectSlugs.value, savedProjectSlugs.value),
)

const canPublishSelection: ComputedRef<boolean> = computed(
  (): boolean => hasUnsavedSelection.value && draftProjectSlugs.value.length > 0,
)

const hasSelectedMaximumProjects: ComputedRef<boolean> = computed(
  (): boolean => draftProjectSlugs.value.length >= MAXIMUM_PROJECTS_COUNT,
)

const isAwaitingDeployment: ComputedRef<boolean> = computed(
  (): boolean =>
    content.value !== null &&
    !HomePageContentUtils.hasSameProjectSlugs(
      content.value.saved.featuredProjectSlugs,
      content.value.deployed.featuredProjectSlugs,
    ),
)

const gridLayouts: ComputedRef<HomeFeaturedProjectsGridLayouts> = computed(
  (): HomeFeaturedProjectsGridLayouts => HomeFeaturedProjectsUtils.getGridLayouts(draftProjectSlugs.value.length),
)

const selectionSummary: ComputedRef<string> = computed((): string => {
  const selectedProjectsCount: number = draftProjectSlugs.value.length
  const countLabel: string =
    selectedProjectsCount > 1 ? `${selectedProjectsCount} projets` : `${selectedProjectsCount} projet`
  return `${countLabel} sur ${MAXIMUM_PROJECTS_COUNT} au plus. L’ordre de la liste est celui des cartes sur le site.`
})

const availableProjectsSummary: ComputedRef<string> = computed((): string => {
  if (hasSelectedMaximumProjects.value) {
    return `${MAXIMUM_PROJECTS_COUNT} projets sont déjà affichés : retirez-en un pour en ajouter un autre.`
  }
  const availableProjectsCount: number = projects.value.length - selectedProjects.value.length
  return availableProjectsCount > 1
    ? `${availableProjectsCount} projets publiés à ajouter.`
    : `${availableProjectsCount} projet publié à ajouter.`
})

const selectionSourceNote: ComputedRef<string> = computed((): string => {
  const savedSlugs: string[] = content.value?.saved.featuredProjectSlugs ?? []
  if (savedSlugs.length === 0) {
    return 'Rien n’est encore enregistré ici : le site affiche les projets cochés « favori » dans Storyblok.'
  }
  const unpublishedSlugs: string[] = savedSlugs.filter(
    (slug: string): boolean => !savedProjectSlugs.value.includes(slug),
  )
  return unpublishedSlugs.length > 0 ? `Ignoré car plus publié dans Storyblok : ${unpublishedSlugs.join(', ')}.` : ''
})

/**
 * Short name of a project (its Storyblok name without the tagline).
 *
 * @param {DibodevProject} project - The project.
 * @returns {string} The short name.
 */
function shortNameOf(project: DibodevProject): string {
  return ProjectUtils.splitNameAndTagline(project.name).shortName
}

/**
 * Tagline of a project, or its short description when the name has none.
 *
 * @param {DibodevProject} project - The project.
 * @returns {string} The line shown under the name.
 */
function taglineOf(project: DibodevProject): string {
  return ProjectUtils.splitNameAndTagline(project.name).tagline || project.shortDescription
}

/**
 * Screenshot shown as the thumbnail of a project row.
 *
 * @param {DibodevProject} project - The project.
 * @returns {string | null} The screenshot URL, or null when the project has no usable one.
 */
function screenshotUrlOf(project: DibodevProject): string | null {
  return ProjectUtils.resolveCardScreenshot(project)?.url ?? null
}

/**
 * Names the screens where a card is hidden because it would start an incomplete row (or exceed the phone limit).
 *
 * @param {number} projectIndex - Position of the project in the selection.
 * @returns {string} The note, empty when the card is shown on every screen.
 */
function hiddenScreensNote(projectIndex: number): string {
  const hiddenScreenNames: string[] = DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS.filter(
    (screen: DashboardFeaturedProjectsPreviewScreen): boolean =>
      projectIndex >= gridLayouts.value[screen.device].visibleCount,
  ).map((screen: DashboardFeaturedProjectsPreviewScreen): string => screen.label.toLowerCase())
  return hiddenScreenNames.length > 0 ? `Masqué sur ${SCREEN_NAMES_FORMATTER.format(hiddenScreenNames)}` : ''
}

/**
 * Moves a project of the selection to another position.
 *
 * @param {number} fromIndex - Current position.
 * @param {number} toIndex - Target position.
 * @returns {void}
 */
function moveProject(fromIndex: number, toIndex: number): void {
  const slugs: string[] = [...draftProjectSlugs.value]
  const [movedSlug]: string[] = slugs.splice(fromIndex, 1)
  if (movedSlug === undefined || toIndex < 0 || toIndex > slugs.length) return
  slugs.splice(toIndex, 0, movedSlug)
  draftProjectSlugs.value = slugs
}

/**
 * Moves a project from an arrow key or an arrow button, then gives the focus back to the same control of the moved row.
 *
 * @param {number} fromIndex - Current position.
 * @param {number} toIndex - Target position.
 * @param {DashboardHomePageReorderControl} control - Control that triggered the move.
 * @returns {Promise<void>}
 */
async function onMoveAndKeepFocus(
  fromIndex: number,
  toIndex: number,
  control: DashboardHomePageReorderControl,
): Promise<void> {
  if (toIndex < 0 || toIndex >= draftProjectSlugs.value.length) return
  moveProject(fromIndex, toIndex)
  await nextTick()
  const movedRow: Element | undefined = selectedListElement.value?.querySelectorAll('li')[toIndex]
  const movedControl: HTMLButtonElement | null | undefined = movedRow?.querySelector<HTMLButtonElement>(
    `[data-reorder-control="${control}"]`,
  )
  const handle: HTMLButtonElement | null | undefined = movedRow?.querySelector<HTMLButtonElement>(
    '[data-reorder-control="handle"]',
  )
  // An arrow gets disabled at the top and the bottom of the list: the handle takes the focus instead.
  const controlToFocus: HTMLButtonElement | null | undefined =
    movedControl && !movedControl.disabled ? movedControl : handle
  controlToFocus?.focus()
}

/**
 * Adds a project at the end of the selection.
 *
 * @param {DibodevProject} project - The project to add.
 * @returns {void}
 */
function addProject(project: DibodevProject): void {
  if (hasSelectedMaximumProjects.value) return
  draftProjectSlugs.value = [...draftProjectSlugs.value, ProjectUtils.getSlug(project)]
}

/**
 * Removes a project from the selection.
 *
 * @param {number} projectIndex - Position of the project to remove.
 * @returns {void}
 */
function removeProject(projectIndex: number): void {
  draftProjectSlugs.value = draftProjectSlugs.value.filter(
    (_slug: string, index: number): boolean => index !== projectIndex,
  )
}

/**
 * Drops the unsaved changes and goes back to the saved selection.
 *
 * @returns {void}
 */
function onDiscard(): void {
  draftProjectSlugs.value = [...savedProjectSlugs.value]
}

/**
 * Saves the selection: one commit on the repository, which rebuilds and deploys the site.
 *
 * @returns {Promise<void>}
 */
async function onPublish(): Promise<void> {
  try {
    const response: SaveFeaturedProjectsResponse = await saveFeaturedProjects(draftProjectSlugs.value)
    showToast({
      tone: 'cyan',
      icon: 'rocket',
      title: 'Page d’accueil enregistrée',
      text: response.hasNewCommit
        ? 'Le site se reconstruit : en ligne dans quelques minutes.'
        : 'Cette sélection était déjà enregistrée.',
    })
    watchDeploys()
  } catch {
    showToast({
      tone: 'red',
      title: 'L’enregistrement a échoué',
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
    if (isSiteSynced && isAwaitingDeployment.value) loadHomePage(true).catch((): void => undefined)
  },
)

onBeforeRouteLeave((): boolean | Promise<boolean> => {
  if (!hasUnsavedSelection.value) return true
  return confirm({
    title: 'Quitter sans mettre en ligne ?',
    text: 'La nouvelle sélection de projets n’est pas enregistrée.',
    confirmLabel: 'Quitter',
    danger: true,
  })
})

onMounted((): void => {
  loadHomePage().catch((): void => undefined)
})
</script>

<style scoped>
.dash-reorder-move {
  transition: transform 0.26s var(--dash-ease);
}

.dash-reorder-enter-active {
  transition:
    opacity 0.2s ease,
    transform 0.26s var(--dash-ease);
}

.dash-reorder-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}

.dash-reorder-leave-active {
  position: absolute;
  right: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.14s ease;
}
</style>
