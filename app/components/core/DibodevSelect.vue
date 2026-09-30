<template>
  <div ref="rootRef" class="relative flex w-full min-w-max flex-col gap-2">
    <DibodevLabel v-if="props.label" :id="props.id">
      {{ props.label }}
      <span v-if="required" class="ml-1 text-red-500"> * </span>
    </DibodevLabel>
    <div class="relative w-full">
      <!-- Mode natif : <select> (comportement et UI classiques) -->
      <template v-if="!useLinks">
        <select
          :id="id"
          :aria-label="props.label || selectedItem?.label"
          class="focus:border-primary h-12 w-full cursor-pointer appearance-none rounded-lg border bg-white pr-10 pl-3 text-base text-gray-100 focus:outline-none"
          :class="selectBorderClass"
          :value="selectedItem?.value"
          @change="onChange($event)"
        >
          <option v-for="option in options" :value="option.value" :key="String(option.value)">
            {{ option.label }}
          </option>
        </select>
        <div class="text-muted pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <DibodevIcon name="ChevronDown" mode="stroke" :width="20" :height="20" />
        </div>
      </template>

      <!-- Mode liens : même UI, options en NuxtLink (SEO, crawl) -->
      <template v-else>
        <button
          :id="id"
          type="button"
          class="focus:border-primary h-12 w-full cursor-pointer appearance-none rounded-lg border bg-white pr-10 pl-3 text-left text-base text-gray-100 focus:outline-none"
          :class="selectBorderClass"
          :aria-expanded="isOpen"
          :aria-haspopup="true"
          :aria-label="props.label || selectedItem?.label"
          @click="toggleOpen"
        >
          {{ selectedItem?.label ?? '' }}
        </button>
        <div class="text-muted pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <DibodevIcon name="ChevronDown" mode="stroke" :width="20" :height="20" />
        </div>
        <div
          v-show="isOpen"
          class="absolute top-full right-0 left-0 z-20 mt-1 max-h-60 overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg"
          role="listbox"
        >
          <NuxtLink
            v-for="opt in optionsWithHref"
            :key="String(opt.value)"
            :to="opt.href"
            role="option"
            class="block w-full px-3 py-2.5 text-left text-base text-gray-200 hover:bg-gray-800 hover:text-gray-100"
            :class="isOptionSelected(opt) ? 'bg-gray-800 text-gray-100' : ''"
            @click="closeOpen"
          >
            {{ opt.label }}
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, ComputedRef, Ref } from 'vue'
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import DibodevLabel from '~/components/core/DibodevLabel.vue'
import type { DibodevSelectProps, DibodevSelectOption, DibodevSelectOptionWithHref } from '~/core/types/DibodevSelect'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/* PROPS */
const props: DibodevSelectProps = defineProps({
  options: {
    type: Array as PropType<DibodevSelectOption[] | DibodevSelectOptionWithHref[]>,
    required: true,
  },
  modelValue: {
    type: Object as PropType<DibodevSelectOption>,
    required: true,
  },
  id: { type: String, default: 'field' },
  label: { type: String, default: null },
  required: { type: Boolean, default: false },
  useLinks: { type: Boolean, default: false },
})

/* REFS */
const rootRef: Ref<HTMLElement | null> = ref<HTMLElement | null>(null)
const isOpen: Ref<boolean> = ref<boolean>(false)

/* Computed */
const selectedItem: ComputedRef<DibodevSelectOption> = computed(
  (): DibodevSelectOption => props.modelValue ?? props.options[0] ?? { label: '', value: '' },
)

const selectBorderClass: ComputedRef<string> = computed((): string => {
  if (props.required && !selectedItem.value) return 'border-red-500'
  return 'border-gray-400 hover:border-gray-100'
})

/** En mode useLinks, options avec href (pour le template). */
const optionsWithHref: ComputedRef<DibodevSelectOptionWithHref[]> = computed((): DibodevSelectOptionWithHref[] => {
  if (!props.useLinks) return []
  return props.options as DibodevSelectOptionWithHref[]
})

/* EMIT */
const emit: (event: 'update:modelValue', value: DibodevSelectOption) => void = defineEmits<{
  (event: 'update:modelValue', value: DibodevSelectOption): void
}>()

/* METHODS */
/**
 * Emit the option matching the native select value.
 * @param {Event} event - The change event of the native select.
 * @returns {void}
 */
const onChange: (event: Event) => void = (event: Event): void => {
  const selectElement: HTMLSelectElement = event.target as HTMLSelectElement
  const selectedOptionValue: string = selectElement.value
  const selectedOption: DibodevSelectOption | undefined = props.options.find(
    (option: DibodevSelectOption) => option.value.toString() === selectedOptionValue,
  )
  if (selectedOption) {
    emit('update:modelValue', selectedOption)
  }
}

/**
 * Toggle the links dropdown.
 * @returns {void}
 */
const toggleOpen: () => void = (): void => {
  isOpen.value = !isOpen.value
}

/**
 * Close the links dropdown.
 * @returns {void}
 */
const closeOpen: () => void = (): void => {
  isOpen.value = false
}

/**
 * Whether an option is the selected one.
 * @param {DibodevSelectOptionWithHref} opt - The option to test.
 * @returns {boolean} True when selected.
 */
const isOptionSelected: (opt: DibodevSelectOptionWithHref) => boolean = (opt: DibodevSelectOptionWithHref): boolean => {
  return selectedItem.value?.value?.toString() === opt.value?.toString()
}

/**
 * Fermer le dropdown au clic extérieur.
 * @param {MouseEvent} event - The document click event.
 * @returns {void}
 */
function handleClickOutside(event: MouseEvent): void {
  const el: HTMLElement | null = rootRef.value
  if (el != null && !el.contains(event.target as Node)) {
    closeOpen()
  }
}

watch(isOpen, (open: boolean): void => {
  if (import.meta.client && open) {
    setTimeout((): void => {
      document.addEventListener('click', handleClickOutside, true)
    }, 0)
  } else if (import.meta.client) {
    document.removeEventListener('click', handleClickOutside, true)
  }
})

onBeforeUnmount((): void => {
  if (import.meta.client) {
    document.removeEventListener('click', handleClickOutside, true)
  }
})
</script>
