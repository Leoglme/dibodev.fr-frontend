<template>
  <section id="contact-cta" class="px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div
      class="bg-accent-tint max-w-site mx-auto grid w-full justify-items-center gap-6 rounded-2xl px-6 py-14 text-center sm:px-12 sm:py-20"
    >
      <div class="grid max-w-2xl justify-items-center gap-4">
        <h2
          class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]"
        >
          <DibodevHyphenSafeText :text="displayTitle" />
        </h2>
        <p class="max-w-[560px] text-[17px] leading-7 text-gray-200">
          {{ displayDescription }}
        </p>
      </div>

      <DibodevButton
        :to="localePath('/contact')"
        size="lg"
        class="w-full sm:w-auto"
        @click="track(TRACKING_EVENTS.ctaProjectDiscussion, { location: 'contact_cta_section' })"
      >
        {{ displayCtaText }}
      </DibodevButton>

      <ul class="flex flex-col items-center gap-2 text-[15px] text-gray-200 sm:flex-row sm:flex-wrap sm:justify-center">
        <li>
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="hover:text-primary font-medium text-gray-100 transition-colors"
            @click="track(TRACKING_EVENTS.contactEmail, { location: 'contact_cta_section' })"
          >
            {{ CONTACT_EMAIL }}
          </a>
        </li>
        <li class="text-muted hidden sm:block" aria-hidden="true">·</li>
        <li>
          <a
            :href="`tel:${PHONE_E164}`"
            class="hover:text-primary font-medium text-gray-100 transition-colors"
            @click="track(TRACKING_EVENTS.contactPhone, { location: 'contact_cta_section' })"
          >
            {{ PHONE_DISPLAY }}
          </a>
        </li>
        <li class="text-muted hidden sm:block" aria-hidden="true">·</li>
        <li>{{ $t('footer.location') }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevContactCtaSectionProps } from '~/core/types/DibodevContactCtaSection'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_E164 } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Centred lavender call-to-action block placed at the bottom of the pages: title, intro, button and contact line.
 */
const props: DibodevContactCtaSectionProps = defineProps({
  title: {
    type: String as PropType<string>,
    default: '',
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  ctaText: {
    type: String as PropType<string>,
    default: '',
  },
})

const { t } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

const displayTitle: ComputedRef<string> = computed((): string =>
  props.title.trim() ? props.title : t('blog.cta.title'),
)
const displayDescription: ComputedRef<string> = computed((): string =>
  props.description.trim() ? props.description : t('blog.cta.description'),
)
const displayCtaText: ComputedRef<string> = computed((): string =>
  props.ctaText.trim() ? props.ctaText : t('blog.cta.ctaText'),
)
</script>
