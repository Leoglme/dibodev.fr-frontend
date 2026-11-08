<template>
  <div class="grid gap-3 rounded-xl border border-white/20 bg-white/10 p-4 text-white">
    <div v-if="state === 'sent'" class="grid gap-2" role="status">
      <p class="flex items-center gap-2 text-[15px] leading-6 font-medium">
        <DibodevIcon name="CheckCircle" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        {{ wording.sentTitle }}
      </p>
      <p class="text-sm leading-6 text-white/75">
        {{ hasContactConsent ? wording.sentTextWithContactConsent : wording.sentText }}
      </p>
    </div>

    <form v-else class="grid gap-3" novalidate @submit.prevent="requestReport">
      <div class="grid gap-1">
        <p class="flex items-center gap-2 text-[15px] leading-6 font-medium">
          <DibodevIcon name="Mail" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          {{ wording.title }}
        </p>
        <p class="text-sm leading-6 break-words text-white/75">{{ introText }}</p>
      </div>

      <div class="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label class="grid gap-1">
          <span class="sr-only">{{ wording.emailLabel }}</span>
          <input
            v-model="email"
            type="email"
            name="email"
            autocomplete="email"
            inputmode="email"
            required
            :placeholder="wording.emailPlaceholder"
            :aria-invalid="state === 'error' && errorKind === 'invalid'"
            class="min-h-11 w-full rounded-lg border border-white/30 bg-white/10 px-3.5 py-2.5 text-[15px] leading-6 text-white placeholder:text-white/50 focus:border-white focus:outline-none"
            @input="clearError"
          />
        </label>
        <button
          type="submit"
          :disabled="!canSubmit"
          :aria-busy="state === 'submitting'"
          class="text-primary-dark inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-white px-4 py-2.5 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {{ state === 'submitting' ? wording.submitting : wording.submit }}
        </button>
      </div>

      <label class="flex cursor-pointer items-start gap-2.5 text-sm leading-6 text-white/75">
        <input
          v-model="hasContactConsent"
          type="checkbox"
          name="contactConsent"
          class="accent-primary mt-1 h-4 w-4 shrink-0 cursor-pointer"
        />
        <span>{{ wording.contactConsent }}</span>
      </label>

      <div class="sr-only" aria-hidden="true">
        <input v-model="honeypotValue" name="website" type="text" tabindex="-1" autocomplete="off" />
      </div>

      <p v-if="state === 'error'" class="text-sm leading-6 text-amber-200" role="alert">
        {{ wording.errorTitle }} {{ wording.errorTexts[errorKind ?? 'failed'] }}
      </p>

      <p class="text-xs leading-5 text-white/75">
        {{ wording.privacyNote }}
        <NuxtLink :to="privacyRoute" class="underline underline-offset-4 transition-colors hover:text-white">
          {{ wording.privacyLinkLabel }}
        </NuxtLink>
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type {
  DibodevSiteCheckReportFormProps,
  DibodevSiteCheckReportFormState,
  DibodevSiteCheckReportFormWording,
  DibodevSiteCheckReportResponse,
  DibodevSiteCheckToolKey,
} from '~/core/types/DibodevSiteCheckReport'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed, ref, watch } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import {
  SITE_CHECK_PRIVACY_ANCHOR_ID,
  SITE_CHECK_REPORT_API_PATH,
  SITE_CHECK_REPORT_FORM_WORDING,
} from '~/core/constants/siteCheckReport/wording'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** The server runs the check again and writes the e-mail itself: the page only sends the checker, the site and the address. */
const props: DibodevSiteCheckReportFormProps = defineProps({
  tool: {
    type: String as PropType<DibodevSiteCheckToolKey>,
    required: true,
  },
  site: {
    type: String as PropType<string>,
    required: true,
  },
  verdict: {
    type: String as PropType<string>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { track }: UseTrackingReturn = useTracking()
const route: ReturnType<typeof useRoute> = useRoute()

const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const email: Ref<string> = ref('')
const hasContactConsent: Ref<boolean> = ref(false)
const honeypotValue: Ref<string> = ref('')
const state: Ref<DibodevSiteCheckReportFormState> = ref('idle')
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)

const pageLocale: ComputedRef<SupportedLocale> = computed(
  (): SupportedLocale => (locale.value as SupportedLocale) || 'fr',
)

const wording: ComputedRef<DibodevSiteCheckReportFormWording> = computed(
  (): DibodevSiteCheckReportFormWording =>
    SITE_CHECK_REPORT_FORM_WORDING[pageLocale.value] ?? SITE_CHECK_REPORT_FORM_WORDING.fr,
)

const introText: ComputedRef<string> = computed((): string =>
  QuizTextUtils.fillTemplate(wording.value.intro, { site: props.site }),
)

const canSubmit: ComputedRef<boolean> = computed(
  (): boolean => state.value !== 'submitting' && EMAIL_REGEX.test(email.value.trim()),
)

const privacyRoute: ComputedRef<string> = computed(
  (): string => `${localePath('/privacy')}#${SITE_CHECK_PRIVACY_ANCHOR_ID}`,
)

/**
 * Clears a previous error as soon as the visitor edits the address.
 * @returns {void}
 */
function clearError(): void {
  if (state.value === 'error') {
    state.value = 'idle'
    errorKind.value = null
  }
}

/**
 * Asks the server to e-mail the result of the check shown above, with the separate contact consent.
 * @returns {Promise<void>}
 */
async function requestReport(): Promise<void> {
  if (!canSubmit.value) {
    if (!EMAIL_REGEX.test(email.value.trim())) {
      state.value = 'error'
      errorKind.value = 'invalid'
    }
    return
  }
  const contactConsent: boolean = hasContactConsent.value
  state.value = 'submitting'
  errorKind.value = null
  try {
    await $fetch<DibodevSiteCheckReportResponse>(SITE_CHECK_REPORT_API_PATH, {
      method: 'POST',
      body: {
        tool: props.tool,
        site: props.site,
        email: email.value.trim(),
        locale: pageLocale.value,
        contactConsent,
        pagePath: route.path,
        website: honeypotValue.value,
      },
      retry: 0,
    })
    state.value = 'sent'
    track(TRACKING_EVENTS.siteCheckReportRequested, {
      location: props.trackingLocation,
      tool: props.tool,
      verdict: props.verdict,
      contactConsent,
      outcome: 'sent',
      errorKind: null,
    })
  } catch (error: unknown) {
    errorKind.value = SiteCheckErrorUtils.kindOf(error)
    state.value = 'error'
    track(TRACKING_EVENTS.siteCheckReportRequested, {
      location: props.trackingLocation,
      tool: props.tool,
      verdict: props.verdict,
      contactConsent,
      outcome: 'error',
      errorKind: errorKind.value,
    })
  }
}

watch(
  (): string => props.site,
  (): void => {
    state.value = 'idle'
    errorKind.value = null
  },
)
</script>
