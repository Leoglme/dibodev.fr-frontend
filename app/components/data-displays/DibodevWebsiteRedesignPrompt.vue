<template>
  <DibodevContactPrompt
    icon="Monitor"
    :emphasizedIntro="wording.emphasizedIntro"
    :text="wording.text"
    :linkLabel="wording.linkLabel"
    :to="contactRoute"
    :trackingLocation="props.trackingLocation"
    :tone="props.tone"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevCalloutTone } from '~/core/types/DibodevCallout'
import type {
  DibodevWebsiteRedesignPromptProps,
  DibodevWebsiteRedesignPromptWording,
} from '~/core/types/DibodevWebsiteRedesignPrompt'
import { computed } from 'vue'
import DibodevContactPrompt from '~/components/data-displays/DibodevContactPrompt.vue'
import { WEBSITE_REDESIGN_CONTACT_QUERY, WEBSITE_REDESIGN_PROMPT_WORDING } from '~/core/constants/websiteRedesignPrompt'

/** The showcase website redesign offer, for visitors who come with an old site (PHP update, hacked WordPress). */
const props: DibodevWebsiteRedesignPromptProps = defineProps({
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevCalloutTone>,
    default: 'tint',
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()

const wording: ComputedRef<DibodevWebsiteRedesignPromptWording> = computed(
  (): DibodevWebsiteRedesignPromptWording =>
    WEBSITE_REDESIGN_PROMPT_WORDING[locale.value as SupportedLocale] ?? WEBSITE_REDESIGN_PROMPT_WORDING.fr,
)

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({ path: '/contact', query: WEBSITE_REDESIGN_CONTACT_QUERY }),
)
</script>
