<template>
  <div
    class="flex flex-col gap-6 lg:flex-row lg:items-end"
    :class="props.align === 'center' ? 'lg:justify-center' : 'lg:justify-between'"
  >
    <div class="grid gap-4" :class="props.align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
      <p v-if="props.eyebrow" class="text-primary text-xs font-medium tracking-[0.08em] uppercase">
        {{ props.eyebrow }}
      </p>
      <h2 class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]">
        <DibodevHyphenSafeText :text="props.title" />
      </h2>
      <p
        v-if="props.intro"
        class="max-w-[640px] text-[17px] leading-7 text-gray-200"
        :class="props.align === 'center' ? 'mx-auto' : ''"
      >
        {{ props.intro }}
      </p>
    </div>
    <div v-if="$slots.action" class="shrink-0">
      <slot name="action" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevSectionHeadingProps } from '~/core/types/DibodevSectionHeading'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'

/**
 * Section header shared by the content sections: violet eyebrow, title, optional intro and an optional right-side action.
 */
const props: DibodevSectionHeadingProps = defineProps({
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
  align: {
    type: String as PropType<'left' | 'center'>,
    default: 'left',
  },
})
</script>
