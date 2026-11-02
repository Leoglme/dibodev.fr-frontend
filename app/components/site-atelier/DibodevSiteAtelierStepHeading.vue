<template>
  <div class="grid gap-2">
    <p v-if="props.eyebrow" class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ props.eyebrow }}</p>
    <h2
      ref="titleElement"
      tabindex="-1"
      class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-gray-100 outline-none sm:text-[26px]"
    >
      {{ props.title }}
    </h2>
    <p v-if="props.intro" class="text-muted text-[15px] leading-6">{{ props.intro }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { DibodevSiteAtelierStepHeadingProps } from '~/core/types/DibodevSiteAtelierStepHeading'
import { ref } from 'vue'

/**
 * Title of a workshop step, with an optional eyebrow above and a line of help under it; the title takes the focus when the step opens.
 */
const props: DibodevSiteAtelierStepHeadingProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
})

const titleElement: Ref<HTMLHeadingElement | null> = ref(null)

/**
 * Moves the keyboard focus to the title, so screen readers announce the step.
 * @returns {void}
 */
function focusTitle(): void {
  titleElement.value?.focus({ preventScroll: true })
}

defineExpose({ focusTitle })
</script>
