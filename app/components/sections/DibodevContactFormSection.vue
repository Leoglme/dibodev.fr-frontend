<template>
  <section id="contact-form" class="scroll-mt-24 px-6 pb-20 sm:px-8 lg:pb-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <ul class="grid gap-3 md:grid-cols-3 md:gap-5 lg:gap-6">
        <li>
          <a
            :href="`mailto:${CONTACT_EMAIL}`"
            class="contact-channel group flex h-full items-start gap-4 rounded-xl border border-gray-300 bg-white p-5 md:flex-col md:p-6"
            @click="track(TRACKING_EVENTS.contactEmail, { location: 'contact_channels' })"
          >
            <span
              class="contact-channel__icon"
              :style="{ backgroundColor: getAccentPalette(0).background, color: getAccentPalette(0).color }"
            >
              <DibodevIcon name="Mail" :width="22" :height="22" mode="stroke" aria-hidden="true" />
            </span>
            <span class="grid gap-1">
              <span class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{
                $t('contact.channels.emailTitle')
              }}</span>
              <span class="group-hover:text-primary text-lg font-medium text-gray-100 transition-colors">{{
                CONTACT_EMAIL
              }}</span>
              <span class="text-sm leading-6 text-gray-200">{{ $t('contact.channels.emailText') }}</span>
            </span>
          </a>
        </li>
        <li>
          <a
            :href="`tel:${PHONE_E164}`"
            class="contact-channel group flex h-full items-start gap-4 rounded-xl border border-gray-300 bg-white p-5 md:flex-col md:p-6"
            :aria-label="$t('contact.sidebar.phoneLabel')"
            @click="track(TRACKING_EVENTS.contactPhone, { location: 'contact_channels' })"
          >
            <span
              class="contact-channel__icon"
              :style="{ backgroundColor: getAccentPalette(1).background, color: getAccentPalette(1).color }"
            >
              <DibodevIcon name="Phone" :width="22" :height="22" mode="stroke" aria-hidden="true" />
            </span>
            <span class="grid gap-1">
              <span class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{
                $t('contact.channels.phoneTitle')
              }}</span>
              <span class="group-hover:text-primary text-lg font-medium text-gray-100 transition-colors">{{
                PHONE_DISPLAY
              }}</span>
              <span class="text-sm leading-6 text-gray-200">{{ $t('contact.channels.phoneText') }}</span>
            </span>
          </a>
        </li>
        <li
          class="contact-channel flex h-full items-start gap-4 rounded-xl border border-gray-300 bg-white p-5 md:flex-col md:p-6"
        >
          <span
            class="contact-channel__icon"
            :style="{ backgroundColor: getAccentPalette(2).background, color: getAccentPalette(2).color }"
          >
            <DibodevIcon name="MapPin" :width="22" :height="22" mode="stroke" aria-hidden="true" />
          </span>
          <span class="grid gap-1">
            <span class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{
              $t('contact.channels.addressTitle')
            }}</span>
            <span class="text-lg font-medium text-gray-100">{{ $t('contact.sidebar.location') }}</span>
            <span class="text-sm leading-6 text-gray-200">{{ $t('contact.channels.addressText') }}</span>
          </span>
        </li>
      </ul>

      <div class="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 xl:gap-14">
        <div class="sm:rounded-xl sm:border sm:border-gray-300 sm:bg-white sm:p-7 lg:p-8">
          <DibodevContactForm />
        </div>

        <aside class="grid gap-8">
          <div class="bg-surface-tint grid gap-5 rounded-xl p-6">
            <h2 class="text-lg font-medium text-gray-100">{{ $t('contact.nextSteps.title') }}</h2>
            <ol class="grid gap-4">
              <li v-for="(step, index) in nextSteps" :key="step.title" class="flex gap-4">
                <span
                  class="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
                  aria-hidden="true"
                >
                  {{ index + 1 }}
                </span>
                <div class="grid gap-1">
                  <p class="text-[15px] font-medium text-gray-100">{{ step.title }}</p>
                  <p class="text-sm leading-6 text-gray-200">{{ step.description }}</p>
                </div>
              </li>
            </ol>
          </div>

          <div class="grid gap-3 overflow-hidden rounded-xl border border-gray-300 bg-white p-3">
            <iframe
              :src="MAP_EMBED_URL"
              :title="$t('contact.map.iframeTitle')"
              class="aspect-[4/3] w-full rounded-lg border-0 bg-gray-800"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
            <div class="flex flex-wrap items-center justify-between gap-2 px-2 pb-1">
              <p class="text-sm font-medium text-gray-100">{{ $t('contact.map.title') }}</p>
              <DibodevLink :link="GOOGLE_BUSINESS_URL" externalLink class="text-sm">
                <span>{{ $t('contact.map.openInMaps') }}</span>
                <DibodevIcon name="ExternalLink" mode="stroke" :width="14" :height="14" aria-hidden="true" />
              </DibodevLink>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import DibodevContactForm from '~/forms/DibodevContactForm.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { CONTACT_EMAIL, GOOGLE_BUSINESS_URL, PHONE_DISPLAY, PHONE_E164 } from '~/config/contact'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

const NEXT_STEP_KEYS: string[] = ['reply', 'call', 'proposal']
/** OpenStreetMap embed centred on Saint-Erblon (no cookies, no consent needed). */
const MAP_EMBED_URL: string =
  'https://www.openstreetmap.org/export/embed.html?bbox=-1.7300%2C47.9850%2C-1.5750%2C48.0500&layer=mapnik&marker=48.0180%2C-1.6530'

const { t } = useI18n()
const { track } = useTracking()

/** What happens after the form is sent, as three numbered steps. */
const nextSteps: ComputedRef<DibodevGuarantee[]> = computed((): DibodevGuarantee[] =>
  NEXT_STEP_KEYS.map(
    (key: string): DibodevGuarantee => ({
      title: t(`contact.nextSteps.steps.${key}.title`),
      description: t(`contact.nextSteps.steps.${key}.description`),
    }),
  ),
)
</script>

<style scoped>
.contact-channel {
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

a.contact-channel:hover {
  border-color: rgba(111, 95, 224, 0.45);
  box-shadow: 0 14px 36px rgba(111, 95, 224, 0.1);
}

.contact-channel__icon {
  display: inline-flex;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
}
</style>
