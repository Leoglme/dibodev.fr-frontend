<template>
  <div class="flex flex-col">
    <div class="flex items-baseline justify-between gap-3 px-4 pt-5 pb-2.5">
      <h3 class="dash-label">Projets affichés</h3>
      <span class="dash-mono text-muted text-xs tabular-nums"
        >{{ selectedProjects.length }} / {{ props.maximumCount }}</span
      >
    </div>

    <p v-if="selectedProjects.length === 0" class="text-muted px-4 pb-5 text-sm">
      Aucun projet sélectionné. Ajoutez-en au moins un dans la liste ci-dessous.
    </p>
    <div v-else class="px-2 pb-4">
      <TransitionGroup ref="selectedList" tag="ol" name="dash-reorder" class="relative">
        <li
          v-for="(project, projectIndex) in selectedProjects"
          :key="project.route"
          class="group relative flex items-center gap-2.5 rounded-lg py-1.5 pr-1 pl-0.5 transition-[background-color,box-shadow] duration-150"
          :class="
            draggedIndex === projectIndex
              ? 'z-10 bg-(--dash-row-hover) shadow-(--dash-shadow-raise)'
              : 'bg-white hover:bg-(--dash-row-hover)'
          "
        >
          <button
            type="button"
            class="text-muted grid h-10 w-6 shrink-0 touch-none place-items-center rounded-md transition-colors select-none hover:text-gray-100"
            :class="draggedIndex === projectIndex ? 'cursor-grabbing' : 'cursor-grab'"
            :aria-label="`Déplacer ${shortNameOf(project)} (flèches haut et bas)`"
            data-reorder-control="handle"
            @pointerdown="startDrag($event, projectIndex)"
            @keydown.up.prevent="moveAndKeepFocus(projectIndex, projectIndex - 1, 'handle')"
            @keydown.down.prevent="moveAndKeepFocus(projectIndex, projectIndex + 1, 'handle')"
          >
            <DashboardIcon name="grip-vertical" :size="16" />
          </button>
          <DashboardArticleCover :src="screenshotUrlOf(project)" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-100">{{ shortNameOf(project) }}</p>
            <p
              v-if="props.selectedProjectNotes[projectIndex]"
              class="mt-0.5 flex items-center gap-1 text-xs text-(--dash-amber)"
            >
              <DashboardIcon name="eye-off" :size="12" />
              <span class="truncate">{{ props.selectedProjectNotes[projectIndex] }}</span>
            </p>
            <p v-else class="text-muted mt-0.5 truncate text-xs">{{ taglineOf(project) }}</p>
          </div>
          <div
            class="flex shrink-0 items-center rounded-md bg-inherit [@media(hover:hover)]:absolute [@media(hover:hover)]:right-9 [@media(hover:hover)]:pl-1.5 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-focus-within:opacity-100 [@media(hover:hover)]:group-hover:opacity-100"
          >
            <DashboardButton
              variant="ghost"
              size="sm"
              square
              icon="arrow-up"
              :disabled="projectIndex === 0"
              :aria-label="`Monter ${shortNameOf(project)}`"
              data-reorder-control="up"
              @click="moveAndKeepFocus(projectIndex, projectIndex - 1, 'up')"
            />
            <DashboardButton
              variant="ghost"
              size="sm"
              square
              icon="arrow-down"
              :disabled="projectIndex === selectedProjects.length - 1"
              :aria-label="`Descendre ${shortNameOf(project)}`"
              data-reorder-control="down"
              @click="moveAndKeepFocus(projectIndex, projectIndex + 1, 'down')"
            />
          </div>
          <DashboardButton
            variant="ghost"
            size="sm"
            square
            icon="x"
            :aria-label="`Retirer ${shortNameOf(project)}`"
            @click="removeProject(projectIndex)"
          />
        </li>
      </TransitionGroup>
    </div>

    <div class="flex flex-col gap-2.5 border-t border-(--dash-line-soft) px-4 pt-5 pb-3">
      <div class="flex items-baseline justify-between gap-3">
        <h3 class="dash-label">Ajouter un projet</h3>
        <span class="dash-mono text-muted text-xs tabular-nums">{{ availableProjectsCount }}</span>
      </div>
      <p v-if="hasSelectedMaximumProjects" class="text-[13px] text-(--dash-amber)">
        {{ props.maximumCount }} projets sont déjà affichés : retirez-en un pour en ajouter un autre.
      </p>
      <DashboardSearchInput
        v-model="search"
        id="project-selection-search"
        placeholder="Nom du projet…"
        screen-reader-label="Rechercher un projet à ajouter"
      />
    </div>
    <p v-if="availableProjects.length === 0" class="text-muted px-4 pb-6 text-sm">
      <template v-if="search">Aucun projet ne correspond à « {{ search }} ».</template>
      <template v-else>Tous les projets publiés sont déjà affichés.</template>
    </p>
    <ul v-else class="px-2 pb-4">
      <li v-for="project in availableProjects" :key="project.route">
        <button
          type="button"
          class="group flex w-full items-center gap-2.5 rounded-lg py-1.5 pr-2 pl-2 text-left transition-colors duration-150 enabled:cursor-pointer enabled:hover:bg-(--dash-row-hover) disabled:opacity-55"
          :disabled="hasSelectedMaximumProjects"
          :aria-label="`Ajouter ${shortNameOf(project)}`"
          @click="addProject(project)"
        >
          <DashboardArticleCover :src="screenshotUrlOf(project)" />
          <span class="min-w-0 flex-1">
            <span class="block truncate text-sm font-medium text-gray-100">{{ shortNameOf(project) }}</span>
            <span class="text-muted mt-0.5 block truncate text-xs">{{ taglineOf(project) }}</span>
          </span>
          <span
            class="text-muted grid h-[30px] w-[30px] shrink-0 place-items-center rounded-lg border border-gray-300 bg-white transition-colors group-hover:border-gray-400 group-hover:text-gray-100"
          >
            <DashboardIcon name="plus" :size="14" />
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { UseDashboardDragReorderReturn } from '~/composables/useDashboardDragReorder'
import type {
  DashboardProjectSelectionFieldProps,
  DashboardProjectSelectionReorderControl,
} from '~/core/types/DashboardProjectSelectionField'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { ComponentPublicInstance, ComputedRef, PropType, Ref } from 'vue'
import { computed, nextTick, ref } from 'vue'
import DashboardArticleCover from '~/components/dashboard/ui/DashboardArticleCover.vue'
import DashboardButton from '~/components/dashboard/ui/DashboardButton.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'
import DashboardSearchInput from '~/components/dashboard/ui/DashboardSearchInput.vue'
import { ProjectUtils } from '~/core/utils/ProjectUtils'
import { useDashboardDragReorder } from '~/composables/useDashboardDragReorder'

const props: DashboardProjectSelectionFieldProps = defineProps({
  modelValue: {
    type: Array as PropType<string[]>,
    required: true,
  },
  projects: {
    type: Array as PropType<DibodevProject[]>,
    required: true,
  },
  maximumCount: {
    type: Number,
    required: true,
  },
  selectedProjectNotes: {
    type: Array as PropType<string[]>,
    default: (): string[] => [],
  },
})

const emit = defineEmits<{
  (e: 'update:modelValue', projectSlugs: string[]): void
}>()

const selectedList: Ref<ComponentPublicInstance | null> = ref(null)
const search: Ref<string> = ref('')

const selectedListElement: ComputedRef<HTMLElement | null> = computed(
  (): HTMLElement | null => (selectedList.value?.$el as HTMLElement | undefined) ?? null,
)

const { draggedIndex, startDrag }: UseDashboardDragReorderReturn = useDashboardDragReorder(
  selectedListElement,
  (): number => props.modelValue.length,
  moveProject,
)

const selectedProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  ProjectUtils.pickBySlugs(props.projects, props.modelValue),
)

const availableProjectsCount: ComputedRef<number> = computed(
  (): number => props.projects.length - selectedProjects.value.length,
)

const availableProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  const needle: string = search.value.trim().toLowerCase()
  return props.projects.filter(
    (project: DibodevProject): boolean =>
      !props.modelValue.includes(ProjectUtils.getSlug(project)) &&
      (!needle || project.name.toLowerCase().includes(needle)),
  )
})

const hasSelectedMaximumProjects: ComputedRef<boolean> = computed(
  (): boolean => props.modelValue.length >= props.maximumCount,
)

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
 * Moves a selected project to another position.
 *
 * @param {number} fromIndex - Current position.
 * @param {number} toIndex - Target position.
 * @returns {void}
 */
function moveProject(fromIndex: number, toIndex: number): void {
  const projectSlugs: string[] = [...props.modelValue]
  const [movedSlug]: string[] = projectSlugs.splice(fromIndex, 1)
  if (movedSlug === undefined || toIndex < 0 || toIndex > projectSlugs.length) return
  projectSlugs.splice(toIndex, 0, movedSlug)
  emit('update:modelValue', projectSlugs)
}

/**
 * Moves a project from an arrow key or an arrow button, then gives the focus back to the same control of the moved row.
 *
 * @param {number} fromIndex - Current position.
 * @param {number} toIndex - Target position.
 * @param {DashboardProjectSelectionReorderControl} control - Control that triggered the move.
 * @returns {Promise<void>}
 */
async function moveAndKeepFocus(
  fromIndex: number,
  toIndex: number,
  control: DashboardProjectSelectionReorderControl,
): Promise<void> {
  if (toIndex < 0 || toIndex >= props.modelValue.length) return
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
  emit('update:modelValue', [...props.modelValue, ProjectUtils.getSlug(project)])
}

/**
 * Removes a project from the selection.
 *
 * @param {number} projectIndex - Position of the project to remove.
 * @returns {void}
 */
function removeProject(projectIndex: number): void {
  emit(
    'update:modelValue',
    props.modelValue.filter((_slug: string, index: number): boolean => index !== projectIndex),
  )
}
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
