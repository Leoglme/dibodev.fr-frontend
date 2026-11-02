<template>
  <div class="grid gap-5">
    <DibodevSiteAtelierStepHeading
      ref="heading"
      :title="props.wording.style.title"
      :intro="props.tradeWording.styleIntro"
    />
    <div role="radiogroup" :aria-label="props.wording.style.styleGroupLabel" class="grid gap-3">
      <button
        v-for="template in props.templates"
        :key="template.id"
        type="button"
        role="radio"
        :aria-checked="template.id === props.templateId"
        class="group hover:border-primary aria-checked:border-primary aria-checked:bg-surface-tint relative grid cursor-pointer grid-cols-[88px_minmax(0,1fr)] items-center gap-4 rounded-[14px] border border-gray-400 bg-white p-3 text-left text-gray-100 transition-colors"
        @click="emit('select', template.id)"
      >
        <img
          :src="template.thumbnailSrc"
          alt=""
          width="1200"
          height="750"
          loading="lazy"
          decoding="async"
          class="aspect-[4/3] w-full rounded-lg object-cover object-top"
        />
        <span class="grid gap-0.5">
          <span class="font-medium">{{ templateWordingOf(template.id).name }}</span>
          <span class="text-muted text-sm leading-5">{{ templateWordingOf(template.id).description }}</span>
        </span>
        <span
          class="bg-primary absolute -top-2 -right-2 grid h-6 w-6 scale-60 place-items-center rounded-full text-white opacity-0 ring-2 ring-white transition group-aria-checked:scale-100 group-aria-checked:opacity-100"
          aria-hidden="true"
        >
          <DibodevIcon name="Check" mode="stroke" :width="14" :height="14" />
        </span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { DibodevSiteAtelierTradeWording, DibodevSiteAtelierWording } from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierStyleStepProps } from '~/core/types/DibodevSiteAtelierStyleStep'
import type { DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'
import { ref } from 'vue'
import DibodevSiteAtelierStepHeading from '~/components/site-atelier/DibodevSiteAtelierStepHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/**
 * Second step: the templates of the trade, as radio cards with their capture.
 */
const props: DibodevSiteAtelierStyleStepProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  tradeWording: {
    type: Object as PropType<DibodevSiteAtelierTradeWording>,
    required: true,
  },
  templates: {
    type: Array as PropType<DibodevTradeWebsiteTemplate[]>,
    required: true,
  },
  templateId: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: (event: 'select', templateId: string) => void = defineEmits<{
  (event: 'select', templateId: string): void
}>()

const heading: Ref<InstanceType<typeof DibodevSiteAtelierStepHeading> | null> = ref(null)

/**
 * Name and description of a template in the page language; the id is shown when the page has no text for it.
 * @param {string} templateId - The template.
 * @returns {{ name: string; description: string }} The texts.
 */
function templateWordingOf(templateId: string): { name: string; description: string } {
  return props.tradeWording.templates[templateId] ?? { name: templateId, description: '' }
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
