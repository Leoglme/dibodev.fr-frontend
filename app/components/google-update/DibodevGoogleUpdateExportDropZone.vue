<template>
  <div class="grid content-start gap-6">
    <div
      class="grid justify-items-center gap-3 rounded-2xl border-2 border-dashed px-5 py-8 text-center transition-colors sm:px-8"
      :class="isDraggingOver ? 'border-primary bg-surface-tint' : 'border-gray-300 bg-white'"
      @dragenter.prevent="onDragEnter"
      @dragover.prevent="onDragEnter"
      @dragleave.prevent="onDragLeave"
      @drop.prevent="onDrop"
    >
      <DibodevIcon
        name="FileSpreadsheet"
        mode="stroke"
        :width="32"
        :height="32"
        class="text-primary"
        aria-hidden="true"
      />
      <p class="text-lg leading-7 font-medium text-gray-100">{{ props.wording.dropZoneTitle }}</p>
      <p class="max-w-md text-[15px] leading-6 text-gray-200">{{ props.wording.dropZoneText }}</p>
      <input
        :id="FILE_INPUT_ID"
        ref="fileInput"
        type="file"
        class="sr-only"
        accept=".zip,.csv,application/zip,text/csv"
        multiple
        tabindex="-1"
        aria-hidden="true"
        @change="onFileInputChange"
      />
      <button
        type="button"
        class="bg-primary hover:bg-primary-dark focus-visible:ring-primary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60"
        :disabled="props.isReading"
        @click="openFilePicker"
      >
        <DibodevIcon name="Download" mode="stroke" :width="18" :height="18" class="rotate-180" aria-hidden="true" />
        {{ props.isReading ? props.wording.readingLabel : props.wording.dropZoneButton }}
      </button>
      <p class="text-muted text-sm">{{ props.wording.dropZoneFormats }}</p>
      <p class="flex items-start gap-2 text-left text-sm leading-6 text-gray-200">
        <DibodevIcon
          name="ShieldCheck"
          mode="stroke"
          :width="16"
          :height="16"
          class="text-primary mt-1 shrink-0"
          aria-hidden="true"
        />
        {{ props.wording.privacyNote }}
      </p>
    </div>

    <p v-if="props.errorMessage" class="rounded-lg bg-red-50 px-4 py-3 text-[15px] leading-6 text-red-800" role="alert">
      {{ props.errorMessage }}
    </p>

    <button
      type="button"
      class="text-primary hover:text-primary-dark border-primary/40 hover:border-primary focus-visible:ring-primary inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-[15px] leading-6 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      @click="emit('example')"
    >
      <DibodevIcon name="Eye" mode="stroke" :width="18" :height="18" aria-hidden="true" />
      {{ props.wording.exampleButton }}
    </button>

    <div class="grid gap-3">
      <h3 class="text-base leading-6 font-medium text-gray-100">{{ props.wording.exportStepsTitle }}</h3>
      <ol class="grid gap-2.5">
        <li
          v-for="(step, stepIndex) in props.wording.exportSteps"
          :key="step"
          class="grid grid-cols-[1.75rem_minmax(0,1fr)] items-start gap-2.5 text-[15px] leading-6 text-gray-200"
        >
          <span
            class="bg-surface-tint text-primary inline-flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium"
            aria-hidden="true"
            >{{ stepIndex + 1 }}</span
          >
          <span>{{ step }}</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type {
  DibodevGoogleUpdateExportDropZoneProps,
  DibodevGoogleUpdateImpactCheckerWording,
} from '~/core/types/DibodevGoogleUpdateImpactChecker'
import { ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/** Drop zone of the Search Console export: the files never leave the browser, the parent reads them. */
const props: DibodevGoogleUpdateExportDropZoneProps = defineProps({
  wording: {
    type: Object as PropType<DibodevGoogleUpdateImpactCheckerWording>,
    required: true,
  },
  isReading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  errorMessage: {
    type: String as PropType<string>,
    default: '',
  },
})

const emit: {
  (event: 'files-selected', files: File[]): void
  (event: 'example'): void
} = defineEmits<{
  (event: 'files-selected', files: File[]): void
  (event: 'example'): void
}>()

const FILE_INPUT_ID: string = 'google-update-export-file'

/* REFS */
const fileInput: Ref<HTMLInputElement | null> = ref(null)
const isDraggingOver: Ref<boolean> = ref(false)

/* METHODS */
/**
 * Opens the file picker of the system.
 * @returns {void}
 */
function openFilePicker(): void {
  fileInput.value?.click()
}

/**
 * Hands the chosen files to the parent, then empties the field so the same file can be chosen again.
 * @param {Event} event - The change event of the field.
 * @returns {void}
 */
function onFileInputChange(event: Event): void {
  const input: EventTarget | null = event.target

  if (!(input instanceof HTMLInputElement) || !input.files || input.files.length === 0) {
    return
  }
  emit('files-selected', Array.from(input.files))
  input.value = ''
}

/**
 * Highlights the zone while a file is dragged over it.
 * @returns {void}
 */
function onDragEnter(): void {
  isDraggingOver.value = true
}

/**
 * Removes the highlight when the file leaves the zone.
 * @returns {void}
 */
function onDragLeave(): void {
  isDraggingOver.value = false
}

/**
 * Hands the dropped files to the parent.
 * @param {DragEvent} event - The drop event.
 * @returns {void}
 */
function onDrop(event: DragEvent): void {
  isDraggingOver.value = false
  const files: File[] = Array.from(event.dataTransfer?.files ?? [])

  if (files.length > 0 && !props.isReading) {
    emit('files-selected', files)
  }
}
</script>
