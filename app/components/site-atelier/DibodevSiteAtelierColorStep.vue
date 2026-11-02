<template>
  <div class="grid gap-5">
    <DibodevSiteAtelierStepHeading
      ref="heading"
      :title="props.wording.colors.title"
      :intro="props.wording.colors.intro"
    />
    <div role="radiogroup" :aria-label="props.wording.colors.groupLabel" class="flex flex-wrap items-center gap-3">
      <button
        type="button"
        role="radio"
        :aria-checked="isTemplateColorSelected"
        :aria-label="props.wording.colors.templateColor"
        :title="props.wording.colors.templateColor"
        class="aria-checked:ring-primary h-11 w-11 cursor-pointer rounded-full ring-offset-2 transition hover:ring-2 hover:ring-gray-400 aria-checked:ring-2"
        :style="{ background: templateSwatchBackground }"
        @click="emit('select-color', null)"
      />
      <button
        v-for="swatch in props.wording.colors.swatches"
        :key="swatch.hex"
        type="button"
        role="radio"
        :aria-checked="isSwatchSelected(swatch.hex)"
        :aria-label="swatch.label"
        :title="swatch.label"
        class="aria-checked:ring-primary h-11 w-11 cursor-pointer rounded-full ring-offset-2 transition hover:ring-2 hover:ring-gray-400 aria-checked:ring-2"
        :style="{ backgroundColor: swatch.hex }"
        @click="emit('select-color', swatch.hex)"
      />
      <label
        :for="CUSTOM_COLOR_ID"
        class="hover:border-primary hover:text-primary relative flex h-11 cursor-pointer items-center gap-2 rounded-full border bg-white px-4 text-sm font-medium transition-colors"
        :class="isCustomColorSelected ? 'border-primary text-primary' : 'border-gray-400 text-gray-100'"
      >
        <span
          v-if="isCustomColorSelected && props.state.chosenColor"
          class="inline-block h-4 w-4 rounded-full ring-1 ring-gray-400"
          :style="{ backgroundColor: props.state.chosenColor }"
          aria-hidden="true"
        />
        <DibodevIcon v-else name="Palette" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        {{ props.wording.colors.customColor }}
        <input
          :id="CUSTOM_COLOR_ID"
          type="color"
          :value="props.state.chosenColor ?? props.templatePalette.primary"
          class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          @input="emit('select-color', readValue($event))"
        />
      </label>
    </div>
    <label
      v-if="props.state.logoColor"
      class="flex min-h-11 cursor-pointer items-center gap-3 text-[15px] text-gray-100"
    >
      <input
        type="checkbox"
        :checked="props.state.usesLogoColor"
        class="accent-primary h-5 w-5 shrink-0"
        @change="emit('use-logo-color', readChecked($event))"
      />
      <span class="flex items-center gap-2">
        <span
          class="inline-block h-5 w-5 shrink-0 rounded-full ring-1 ring-gray-400"
          :style="{ backgroundColor: props.state.logoColor }"
          aria-hidden="true"
        />
        {{ props.wording.colors.useLogoColor }}
      </span>
    </label>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevSiteAtelierColorSwatch,
  DibodevSiteAtelierState,
  DibodevSiteAtelierWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierColorStepProps } from '~/core/types/DibodevSiteAtelierColorStep'
import type { DibodevTemplatePalette } from '~/core/types/DibodevTradeWebsite'
import { computed, ref } from 'vue'
import DibodevSiteAtelierStepHeading from '~/components/site-atelier/DibodevSiteAtelierStepHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

const CUSTOM_COLOR_ID: string = 'site-atelier-custom-color'

/**
 * Third step: the template's own colours, six swatches, a free colour, and the logo colour when a logo was dropped.
 */
const props: DibodevSiteAtelierColorStepProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  state: {
    type: Object as PropType<DibodevSiteAtelierState>,
    required: true,
  },
  templatePalette: {
    type: Object as PropType<DibodevTemplatePalette>,
    required: true,
  },
})

const emit: {
  (event: 'select-color', color: string | null): void
  (event: 'use-logo-color', usesLogoColor: boolean): void
} = defineEmits<{
  (event: 'select-color', color: string | null): void
  (event: 'use-logo-color', usesLogoColor: boolean): void
}>()

const heading: Ref<InstanceType<typeof DibodevSiteAtelierStepHeading> | null> = ref(null)

const isLogoColorActive: ComputedRef<boolean> = computed(
  (): boolean => props.state.usesLogoColor && props.state.logoColor !== null,
)
const isTemplateColorSelected: ComputedRef<boolean> = computed(
  (): boolean => !isLogoColorActive.value && props.state.chosenColor === null,
)
const isCustomColorSelected: ComputedRef<boolean> = computed(
  (): boolean =>
    !isLogoColorActive.value &&
    props.state.chosenColor !== null &&
    !props.wording.colors.swatches.some(
      (swatch: DibodevSiteAtelierColorSwatch): boolean => swatch.hex === props.state.chosenColor,
    ),
)
const templateSwatchBackground: ComputedRef<string> = computed(
  (): string =>
    `linear-gradient(135deg, ${props.templatePalette.primary} 0 50%, ${props.templatePalette.accent} 50% 100%)`,
)

/**
 * Tells whether a swatch is the colour painted on the demo.
 * @param {string} hex - The swatch colour.
 * @returns {boolean} True when selected.
 */
function isSwatchSelected(hex: string): boolean {
  return !isLogoColorActive.value && props.state.chosenColor === hex
}

/**
 * Value of the colour field that fired an input event.
 * @param {Event} event - The input event.
 * @returns {string} The colour as `#rrggbb`.
 */
function readValue(event: Event): string {
  return event.target instanceof HTMLInputElement ? event.target.value : ''
}

/**
 * State of the checkbox that fired a change event.
 * @param {Event} event - The change event.
 * @returns {boolean} True when checked.
 */
function readChecked(event: Event): boolean {
  return event.target instanceof HTMLInputElement ? event.target.checked : false
}

/**
 * Moves the focus to the step title.
 * @returns {void}
 */
function focusTitle(): void {
  heading.value?.focusTitle()
}

defineExpose({ focusTitle })
</script>
