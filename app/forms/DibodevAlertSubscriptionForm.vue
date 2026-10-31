<template>
  <div class="grid gap-3 rounded-xl border p-4" :class="toneClasses.frame">
    <div v-if="state === 'confirmationSent' || state === 'alreadyConfirmed'" class="grid gap-2">
      <p class="flex items-center gap-2 text-[15px] leading-6 font-medium">
        <DibodevIcon name="CheckCircle" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        {{ state === 'confirmationSent' ? wording.confirmationSentTitle : wording.alreadyConfirmedTitle }}
      </p>
      <p class="text-sm leading-6" :class="toneClasses.mutedText">
        {{ fillTemplate(state === 'confirmationSent' ? wording.confirmationSentText : wording.alreadyConfirmedText) }}
      </p>
    </div>

    <form v-else class="grid gap-3" novalidate @submit.prevent="subscribe">
      <div class="grid gap-1">
        <p class="flex items-center gap-2 text-[15px] leading-6 font-medium">
          <DibodevIcon name="Bell" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          {{ fillTemplate(props.site ? wording.titleWithSite : wording.title) }}
        </p>
        <p class="text-sm leading-6" :class="toneClasses.mutedText">{{ fillTemplate(wording.intro) }}</p>
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
            class="min-h-11 w-full rounded-lg border px-3.5 py-2.5 text-[15px] leading-6 focus:outline-none"
            :class="toneClasses.emailInput"
            @input="onEmailInput"
          />
        </label>
        <button
          type="submit"
          :disabled="!canSubmit"
          :aria-busy="state === 'submitting'"
          class="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg px-4 py-2.5 text-[15px] leading-6 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          :class="toneClasses.submitButton"
        >
          {{ state === 'submitting' ? wording.submitting : wording.submit }}
        </button>
      </div>

      <label class="flex cursor-pointer items-start gap-2.5 text-sm leading-6" :class="toneClasses.mutedText">
        <input
          v-model="hasConsented"
          type="checkbox"
          name="consent"
          class="accent-primary mt-1 h-4 w-4 shrink-0 cursor-pointer"
        />
        <span>{{ wording.consent }}</span>
      </label>

      <p v-if="state === 'error'" class="text-sm leading-6" :class="toneClasses.errorText" role="alert">
        {{ wording.errorTitle }} {{ wording.errorTexts[errorKind ?? 'failed'] }}
      </p>

      <NuxtLink
        :to="privacyRoute"
        class="w-fit text-xs leading-5 underline-offset-4 hover:underline"
        :class="toneClasses.mutedText"
      >
        {{ wording.privacyLinkLabel }}
      </NuxtLink>
    </form>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevAlertSubscriptionFormProps,
  DibodevAlertSubscriptionFormState,
  DibodevAlertSubscriptionFormTone,
  DibodevAlertSubscriptionFormToneClasses,
} from '~/core/types/DibodevAlertSubscriptionForm'
import type {
  DibodevSecurityAlertFormWording,
  DibodevSecurityAlertSubscribeErrorKind,
  DibodevSecurityAlertSubscribeResult,
  DibodevSecurityAlertTopic,
} from '~/core/types/DibodevSecurityAlert'
import type { UseTrackingReturn } from '~/composables/useTracking'
import { computed, ref } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import {
  HOSTING_ALERT_FORM_WORDING,
  SECURITY_ALERT_FORM_WORDING,
  SECURITY_ALERT_PRIVACY_ANCHOR_ID,
  SECURITY_ALERT_SUBSCRIBE_API_PATH,
} from '~/core/constants/securityAlerts/wording'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

const TONE_CLASSES: Record<DibodevAlertSubscriptionFormTone, DibodevAlertSubscriptionFormToneClasses> = {
  dark: {
    frame: 'border-white/20 bg-white/10 text-white',
    mutedText: 'text-white/75',
    errorText: 'text-amber-200',
    emailInput: 'border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-white',
    submitButton: 'text-primary-dark bg-white hover:bg-gray-800',
  },
  light: {
    frame: 'border-gray-300 bg-white text-gray-100',
    mutedText: 'text-gray-200',
    errorText: 'text-red-600',
    emailInput: 'border-gray-300 bg-white text-gray-100 placeholder:text-gray-400 focus:border-primary',
    submitButton: 'bg-primary hover:bg-primary-dark text-white',
  },
}

const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** The alert is active only after the confirmation link is clicked. */
const props: DibodevAlertSubscriptionFormProps = defineProps({
  topic: {
    type: String as PropType<DibodevSecurityAlertTopic>,
    required: true,
  },
  site: {
    type: String as PropType<string | null>,
    default: null,
  },
  providerName: {
    type: String as PropType<string>,
    default: '',
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevAlertSubscriptionFormTone>,
    default: 'dark',
  },
})

const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const { track }: UseTrackingReturn = useTracking()
const route: ReturnType<typeof useRoute> = useRoute()

/* REFS */
const email: Ref<string> = ref('')
const hasConsented: Ref<boolean> = ref(false)
const state: Ref<DibodevAlertSubscriptionFormState> = ref('idle')
const errorKind: Ref<DibodevSecurityAlertSubscribeErrorKind | null> = ref(null)

/* COMPUTED */
const pageLocale: ComputedRef<SupportedLocale> = computed(
  (): SupportedLocale => (locale.value as SupportedLocale) || 'fr',
)

const wording: ComputedRef<DibodevSecurityAlertFormWording> = computed((): DibodevSecurityAlertFormWording => {
  const wordingByLocale: Record<SupportedLocale, DibodevSecurityAlertFormWording> =
    props.topic === 'security' ? SECURITY_ALERT_FORM_WORDING : HOSTING_ALERT_FORM_WORDING

  return wordingByLocale[pageLocale.value] ?? wordingByLocale.fr
})

const toneClasses: ComputedRef<DibodevAlertSubscriptionFormToneClasses> = computed(
  (): DibodevAlertSubscriptionFormToneClasses => TONE_CLASSES[props.tone],
)

const canSubmit: ComputedRef<boolean> = computed(
  (): boolean => state.value !== 'submitting' && hasConsented.value && EMAIL_REGEX.test(email.value.trim()),
)

const privacyRoute: ComputedRef<string> = computed(
  (): string => `${localePath('/privacy')}#${SECURITY_ALERT_PRIVACY_ANCHOR_ID}`,
)

/* METHODS */
/**
 * Fills a text of the form with the provider name and the site checked.
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, { provider: props.providerName, site: props.site ?? '' })
}

/**
 * Clears a previous error as soon as the visitor edits the address.
 * @returns {void}
 */
function onEmailInput(): void {
  if (state.value === 'error') {
    state.value = 'idle'
    errorKind.value = null
  }
}

/**
 * Reads the HTTP status of a failed `$fetch`, when it has one.
 * @param {unknown} error - The error thrown.
 * @returns {number | null} The status, or null for a network failure.
 */
function readErrorStatus(error: unknown): number | null {
  if (typeof error !== 'object' || error === null) {
    return null
  }
  const failure: { statusCode?: unknown; response?: { status?: unknown } } = error

  if (typeof failure.statusCode === 'number') {
    return failure.statusCode
  }
  if (typeof failure.response?.status === 'number') {
    return failure.response.status
  }
  return null
}

/**
 * Maps the HTTP status of a failed request to the message shown.
 * @param {number | null} status - The HTTP status of the failure.
 * @returns {DibodevSecurityAlertSubscribeErrorKind} The kind of error.
 */
function errorKindForStatus(status: number | null): DibodevSecurityAlertSubscribeErrorKind {
  if (status === 400) {
    return 'invalid'
  }
  if (status === 429) {
    return 'rateLimited'
  }
  return 'failed'
}

/**
 * Sends the request; the API answers whether a confirmation mail left or the address was already active.
 * @returns {Promise<void>}
 */
async function subscribe(): Promise<void> {
  if (!canSubmit.value) {
    if (!EMAIL_REGEX.test(email.value.trim())) {
      state.value = 'error'
      errorKind.value = 'invalid'
    }
    return
  }
  state.value = 'submitting'
  errorKind.value = null
  try {
    const result: DibodevSecurityAlertSubscribeResult = await $fetch<DibodevSecurityAlertSubscribeResult>(
      SECURITY_ALERT_SUBSCRIBE_API_PATH,
      {
        method: 'POST',
        body: {
          email: email.value.trim(),
          site: props.site,
          topic: props.topic,
          locale: pageLocale.value,
          source: props.trackingLocation,
          pagePath: route.path,
        },
        retry: 0,
      },
    )

    state.value = result.outcome
    track(TRACKING_EVENTS.securityAlertSubscribed, {
      location: props.trackingLocation,
      topic: props.topic,
      outcome: result.outcome,
      hasSite: props.site !== null,
    })
  } catch (error: unknown) {
    errorKind.value = errorKindForStatus(readErrorStatus(error))
    state.value = 'error'
    track(TRACKING_EVENTS.securityAlertSubscribed, {
      location: props.trackingLocation,
      topic: props.topic,
      outcome: 'error',
      hasSite: props.site !== null,
    })
  }
}
</script>
