<template>
  <article
    class="grid gap-8 rounded-lg border border-gray-300 bg-white p-6 sm:p-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14 lg:p-10"
  >
    <div
      class="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-5 gap-y-4 border-b border-gray-300 pb-8 lg:grid-cols-1 lg:content-start lg:items-start lg:border-r lg:border-b-0 lg:pr-12 lg:pb-0"
    >
      <img
        :src="props.pressArticle.mediaLogoSrc"
        :alt="t('pressArticleCard.logoAlt', { media: props.pressArticle.mediaName })"
        class="h-auto w-32 sm:w-44"
        width="720"
        height="290"
        loading="lazy"
        decoding="async"
      />
      <p class="text-muted text-[13px] font-medium tracking-[0.08em] uppercase">{{ publicationDateLabel }}</p>
    </div>

    <div class="grid content-start gap-6">
      <p class="text-[17px] leading-7 text-gray-100 lg:text-lg lg:leading-8">
        {{ t(`pressArticles.${props.pressArticle.key}.summary`) }}
      </p>
      <blockquote class="border-l-2 border-gray-300 pl-5 text-xl leading-8 font-medium text-gray-100">
        {{ t(`pressArticles.${props.pressArticle.key}.quote`) }}
      </blockquote>
      <DibodevLink
        :external-link="true"
        :link="props.pressArticle.url"
        :aria-label="t('pressArticleCard.readArticleAriaLabel', { media: props.pressArticle.mediaName })"
        class="w-fit text-[15px] leading-6"
        @click="
          track(TRACKING_EVENTS.pressArticleClicked, {
            media: props.pressArticle.mediaName,
            location: props.trackingLocation,
          })
        "
      >
        <span
          >{{ t('pressArticleCard.readArticle') }}&nbsp;<DibodevIcon
            name="ExternalLink"
            mode="stroke"
            :width="14"
            :height="14"
            class="align-[-2px]"
            aria-hidden="true"
        /></span>
      </DibodevLink>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevPressArticle } from '~/core/types/DibodevPressArticle'
import type { DibodevPressArticleCardProps } from '~/core/types/DibodevPressArticleCard'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Type definitions for the DibodevPressArticleCard component props
 * @type {DibodevPressArticleCardProps}
 * @property {DibodevPressArticle} pressArticle - Article shown in the card
 * @property {string} trackingLocation - Where the card is shown, sent with the click on the article link
 */
const props: DibodevPressArticleCardProps = defineProps({
  pressArticle: {
    type: Object as PropType<DibodevPressArticle>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { t, locale } = useI18n()
const { track } = useTracking()

/** Publication date in words ("5 novembre 2026"), read in UTC so the server and the browser agree. */
const publicationDateLabel: ComputedRef<string> = computed((): string =>
  new Intl.DateTimeFormat(locale.value, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(`${props.pressArticle.datePublished}T00:00:00Z`),
  ),
)
</script>
