import type { DibodevSecurityAlertTopic } from '~/core/types/DibodevSecurityAlert'

export type DibodevAlertSubscriptionFormTone = 'dark' | 'light'

export type DibodevAlertSubscriptionFormState =
  | 'idle'
  | 'submitting'
  | 'confirmationSent'
  | 'alreadyConfirmed'
  | 'error'

export type DibodevAlertSubscriptionFormToneClasses = {
  frame: string
  mutedText: string
  errorText: string
  emailInput: string
  submitButton: string
}

/** Props of the alert form; `tone` follows the card it sits in. */
export type DibodevAlertSubscriptionFormProps = {
  topic: DibodevSecurityAlertTopic
  site: string | null
  providerName: string
  trackingLocation: string
  tone: DibodevAlertSubscriptionFormTone
}
