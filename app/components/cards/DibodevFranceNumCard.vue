<template>
  <article
    class="grid gap-8 rounded-lg border border-gray-300 bg-white p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:p-10"
  >
    <div
      class="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-4 border-b border-gray-300 pb-8 lg:grid-cols-1 lg:content-start lg:items-start lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0"
    >
      <img
        :src="FRANCE_NUM_ACTIVATOR_LOGO_SRC"
        :alt="t('franceNumCard.logoAlt')"
        class="h-20 w-auto sm:h-24 lg:h-32"
        width="400"
        height="364"
        loading="lazy"
        decoding="async"
      />
      <div class="grid gap-2.5">
        <p class="text-muted text-[13px] font-medium tracking-[0.08em] uppercase">{{ t('franceNumCard.since') }}</p>
        <DibodevLink
          :external-link="true"
          :link="FRANCE_NUM_PROFILE_URL"
          :aria-label="t('franceNumCard.profileLinkAriaLabel')"
          class="w-fit text-[15px] leading-6"
          @click="
            track(TRACKING_EVENTS.externalProfileClicked, { platform: 'France Num', location: props.trackingLocation })
          "
        >
          <span
            >{{ t('franceNumCard.profileLink') }}&nbsp;<DibodevIcon
              name="ExternalLink"
              mode="stroke"
              :width="14"
              :height="14"
              class="align-[-2px]"
              aria-hidden="true"
          /></span>
        </DibodevLink>
      </div>
    </div>

    <div class="grid content-start gap-6">
      <p class="text-[17px] leading-7 text-gray-100 lg:text-lg lg:leading-8">{{ t('franceNumCard.lead') }}</p>
      <ul class="grid gap-4">
        <li v-for="commitment in commitments" :key="commitment" class="flex items-start gap-3.5">
          <span
            class="bg-accent-tint text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
            aria-hidden="true"
          >
            <DibodevIcon name="Check" mode="stroke" :width="16" :height="16" />
          </span>
          <span class="pt-1 text-base leading-6 text-gray-100">{{ commitment }}</span>
        </li>
      </ul>
      <div class="grid gap-3 border-t border-gray-300 pt-6">
        <p class="text-[15px] leading-6 text-gray-200">{{ t('franceNumCard.program') }}</p>
        <DibodevLink :external-link="true" :link="FRANCE_NUM_ACTIVATOR_INFO_URL" class="w-fit text-[15px] leading-6">
          <span
            >{{ t('franceNumCard.infoLink') }}&nbsp;<DibodevIcon
              name="ExternalLink"
              mode="stroke"
              :width="14"
              :height="14"
              class="align-[-2px]"
              aria-hidden="true"
          /></span>
        </DibodevLink>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevFranceNumCardProps } from '~/core/types/DibodevFranceNumCard'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { FRANCE_NUM_ACTIVATOR_INFO_URL, FRANCE_NUM_ACTIVATOR_LOGO_SRC, FRANCE_NUM_PROFILE_URL } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Type definitions for the DibodevFranceNumCard component props
 * @type {DibodevFranceNumCardProps}
 * @property {string} trackingLocation - Where the card is shown, sent with the click on the listing link
 */
const props: DibodevFranceNumCardProps = defineProps({
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { t } = useI18n()
const { track } = useTracking()

/** Commitments of the France Num charter shown as a checklist (i18n `franceNumCard.commitments.*`). */
const COMMITMENT_KEYS: string[] = ['firstMeeting', 'publicSchemes', 'otherActivator']

const commitments: ComputedRef<string[]> = computed((): string[] =>
  COMMITMENT_KEYS.map((key: string): string => t(`franceNumCard.commitments.${key}`)),
)
</script>
