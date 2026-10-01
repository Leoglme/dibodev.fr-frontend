<template>
  <DashboardCard title="Aperçu sur le site" :description="visibilitySummary" divided>
    <template #actions>
      <DashboardSegmented
        v-model="selectedDevice"
        :options="SCREEN_OPTIONS"
        screen-reader-label="Écran simulé"
        compact-on-mobile
      />
    </template>
    <div class="rounded-b-xl bg-gray-800 p-4 sm:p-6">
      <div ref="viewportElement" class="relative overflow-hidden" :style="{ height: `${scaledCanvasHeight}px` }">
        <div
          ref="canvasElement"
          class="absolute top-0 origin-top-left"
          :style="{
            width: `${selectedScreen.gridWidth}px`,
            left: `${canvasOffsetLeft}px`,
            transform: `scale(${canvasScale})`,
          }"
          inert
          aria-hidden="true"
        >
          <div
            class="grid"
            :style="{
              gridTemplateColumns: `repeat(${selectedLayout.columnsCount}, minmax(0, 1fr))`,
              gap: `${selectedScreen.gridGap}px`,
            }"
          >
            <DibodevProjectCard
              v-for="project in visibleProjects"
              :key="project.route"
              :name="project.name"
              :description="project.metaDescription"
              :createdAt="project.date"
              :logo="project.logoUrl"
              :screenshot="ProjectUtils.resolveCardScreenshot(project)"
              :primaryColor="project.primaryColor"
              :secondaryColor="project.secondaryColor"
              :route="project.route"
              :categories="project.categories ?? []"
            />
          </div>
        </div>
      </div>
    </div>
  </DashboardCard>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { DashboardSegmentOption } from '~/core/types/Dashboard'
import type {
  DashboardFeaturedProjectsPreviewCardProps,
  DashboardFeaturedProjectsPreviewScreen,
} from '~/core/types/DashboardFeaturedProjectsPreviewCard'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { HomeFeaturedProjectsGridLayout } from '~/core/types/HomeFeaturedProjects'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import DibodevProjectCard from '~/components/cards/DibodevProjectCard.vue'
import DashboardCard from '~/components/dashboard/ui/DashboardCard.vue'
import DashboardSegmented from '~/components/dashboard/ui/DashboardSegmented.vue'
import { DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS } from '~/core/constants/dashboardFeaturedProjects'
import { HomeFeaturedProjectsUtils } from '~/core/utils/HomeFeaturedProjectsUtils'
import { ProjectUtils } from '~/core/utils/ProjectUtils'

const props: DashboardFeaturedProjectsPreviewCardProps = defineProps({
  projects: {
    type: Array as PropType<DibodevProject[]>,
    required: true,
  },
})

const DEFAULT_SCREEN: DashboardFeaturedProjectsPreviewScreen = DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS[0]!
const NARROW_PREVIEW_MAX_WIDTH: number = 480

const SCREEN_OPTIONS: DashboardSegmentOption[] = DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS.map(
  (screen: DashboardFeaturedProjectsPreviewScreen): DashboardSegmentOption => ({
    value: screen.device,
    label: screen.label,
    icon: screen.icon,
  }),
)

const viewportElement: Ref<HTMLDivElement | null> = ref(null)
const canvasElement: Ref<HTMLDivElement | null> = ref(null)
const selectedDevice: Ref<string> = ref(DEFAULT_SCREEN.device)
const viewportWidth: Ref<number> = ref(0)
const canvasHeight: Ref<number> = ref(0)
let sizeObserver: ResizeObserver | null = null

const selectedScreen: ComputedRef<DashboardFeaturedProjectsPreviewScreen> = computed(
  (): DashboardFeaturedProjectsPreviewScreen =>
    DASHBOARD_FEATURED_PROJECTS_PREVIEW_SCREENS.find(
      (screen: DashboardFeaturedProjectsPreviewScreen): boolean => screen.device === selectedDevice.value,
    ) ?? DEFAULT_SCREEN,
)

const selectedLayout: ComputedRef<HomeFeaturedProjectsGridLayout> = computed(
  (): HomeFeaturedProjectsGridLayout =>
    HomeFeaturedProjectsUtils.getGridLayouts(props.projects.length)[selectedScreen.value.device],
)

const visibleProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  props.projects.slice(0, selectedLayout.value.visibleCount),
)

const canvasScale: ComputedRef<number> = computed((): number =>
  viewportWidth.value > 0
    ? Math.min(selectedScreen.value.maximumScale, viewportWidth.value / selectedScreen.value.gridWidth)
    : selectedScreen.value.maximumScale,
)

const scaledCanvasHeight: ComputedRef<number> = computed((): number =>
  Math.ceil(canvasHeight.value * canvasScale.value),
)

const canvasOffsetLeft: ComputedRef<number> = computed((): number =>
  Math.max(0, (viewportWidth.value - selectedScreen.value.gridWidth * canvasScale.value) / 2),
)

const visibilitySummary: ComputedRef<string> = computed((): string => {
  const { columnsCount, visibleCount }: HomeFeaturedProjectsGridLayout = selectedLayout.value
  const columnsLabel: string = columnsCount > 1 ? `${columnsCount} colonnes` : '1 colonne'
  if (visibleCount === props.projects.length) {
    return `${visibleCount} ${visibleCount > 1 ? 'cartes' : 'carte'} sur ${columnsLabel}.`
  }
  const hiddenCardsReason: string =
    selectedScreen.value.device === 'phone'
      ? 'la section reste courte sur téléphone'
      : 'une ligne incomplète n’est jamais affichée'
  return `${visibleCount} cartes affichées sur ${props.projects.length}, sur ${columnsLabel} : ${hiddenCardsReason}.`
})

/**
 * Measures the available width and the natural height of the cards, from which the scale and the frame height derive.
 *
 * @returns {void}
 */
function measurePreview(): void {
  viewportWidth.value = viewportElement.value?.clientWidth ?? 0
  canvasHeight.value = canvasElement.value?.offsetHeight ?? 0
}

onMounted((): void => {
  measurePreview()
  if (viewportWidth.value > 0 && viewportWidth.value < NARROW_PREVIEW_MAX_WIDTH) selectedDevice.value = 'phone'
  sizeObserver = new ResizeObserver(measurePreview)
  if (viewportElement.value) sizeObserver.observe(viewportElement.value)
  if (canvasElement.value) sizeObserver.observe(canvasElement.value)
})

onBeforeUnmount((): void => {
  sizeObserver?.disconnect()
})
</script>
