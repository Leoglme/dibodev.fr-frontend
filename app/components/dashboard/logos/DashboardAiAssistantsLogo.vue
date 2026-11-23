<template>
  <span class="inline-flex shrink-0 items-center" role="img" :aria-label="`Assistants IA : ${assistantNames}`">
    <span
      v-for="(assistant, index) in AI_ASSISTANT_BRANDS"
      :key="assistant.label"
      class="grid place-items-center rounded-full border border-gray-300 bg-white"
      :class="[DISC_SIZE_CLASSES[props.size], { '-ml-2': index > 0 }]"
    >
      <DashboardBrandLogo
        v-if="assistant.logoName"
        :name="assistant.logoName"
        :size="BRAND_LOGO_SIZES[props.size]"
        is-decorative
      />
      <DashboardIcon v-else name="sparkles" :size="BRAND_LOGO_SIZES[props.size]" class="text-gray-200" />
    </span>
  </span>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type {
  DashboardAiAssistantBrand,
  DashboardAiAssistantsLogoProps,
  DashboardAiAssistantsLogoSize,
} from '~/core/types/DashboardAiAssistantsLogo'
import DashboardBrandLogo from '~/components/dashboard/logos/DashboardBrandLogo.vue'
import DashboardIcon from '~/components/dashboard/ui/DashboardIcon.vue'

/** Four overlapping discs, one per AI assistant followed in the weekly points. */
const props: DashboardAiAssistantsLogoProps = defineProps({
  size: {
    type: String as PropType<DashboardAiAssistantsLogoSize>,
    default: 'md',
  },
})

const AI_ASSISTANT_BRANDS: DashboardAiAssistantBrand[] = [
  { label: 'ChatGPT', logoName: 'chatgpt' },
  { label: 'Gemini', logoName: 'gemini' },
  { label: 'Copilot', logoName: 'copilot' },
  { label: 'Perplexity', logoName: 'perplexity' },
]

const DISC_SIZE_CLASSES: Record<DashboardAiAssistantsLogoSize, string> = {
  md: 'h-7 w-7 @2xl/page:h-8 @2xl/page:w-8',
  lg: 'h-9 w-9',
}

const BRAND_LOGO_SIZES: Record<DashboardAiAssistantsLogoSize, number> = {
  md: 14,
  lg: 17,
}

const assistantNames: string = AI_ASSISTANT_BRANDS.map(
  (assistant: DashboardAiAssistantBrand): string => assistant.label,
).join(', ')
</script>
