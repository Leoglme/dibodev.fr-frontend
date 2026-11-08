<template>
  <div class="grid gap-6">
    <div class="grid gap-2">
      <h2
        ref="stepHeading"
        tabindex="-1"
        class="text-[22px] leading-tight font-medium tracking-[-0.01em] text-balance text-gray-100 outline-none sm:text-[26px]"
      >
        {{ props.wording.steps[props.step].title }}
      </h2>
      <p class="text-muted text-[15px] leading-6">{{ props.wording.steps[props.step].help }}</p>
    </div>

    <template v-if="props.step === 1">
      <div class="grid gap-3">
        <p :id="`${idPrefix}-status`" class="text-base font-medium text-gray-100">{{ props.wording.statusQuestion }}</p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-status`" class="grid gap-2">
          <button
            v-for="status in LEGAL_NOTICE_STATUSES"
            :key="status"
            type="button"
            role="radio"
            :aria-checked="props.answers.status === status"
            :class="ROW_CLASS"
            @click="chooseStatus(status)"
          >
            <span class="flex min-w-0 items-center gap-3">
              <span
                class="bg-surface-tint text-primary-dark grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                aria-hidden="true"
              >
                <DibodevIcon :name="LEGAL_NOTICE_STATUS_ICONS[status]" mode="stroke" :width="18" :height="18" />
              </span>
              <span class="grid min-w-0 gap-0.5">
                <span class="font-medium">{{ props.wording.statuses[status].label }}</span>
                <span class="text-muted text-[13.5px] leading-[1.4]">{{
                  props.wording.statuses[status].description
                }}</span>
              </span>
            </span>
            <span :class="RADIO_MARK_CLASS" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div v-if="props.answers.status === 'company'" class="grid gap-2">
        <label :for="`${idPrefix}-company-form`" class="text-[15px] font-medium text-gray-100">
          {{ props.wording.companyFormLabel }}
        </label>
        <select
          :id="`${idPrefix}-company-form`"
          :value="props.answers.companyForm"
          :class="SELECT_CLASS"
          @change="chooseCompanyForm"
        >
          <option v-for="companyForm in LEGAL_NOTICE_COMPANY_FORMS" :key="companyForm" :value="companyForm">
            {{ props.wording.companyForms[companyForm] }}
          </option>
        </select>
      </div>

      <label v-if="props.answers.status === 'individual'" :class="CHECKBOX_ROW_CLASS">
        <input
          type="checkbox"
          :checked="props.answers.hideAddress"
          :class="CHECKBOX_CLASS"
          @change="update({ hideAddress: isChecked($event) })"
        />
        <span class="grid gap-0.5">
          <span class="font-medium text-gray-100">{{ props.wording.hideAddressLabel }}</span>
          <span class="text-muted text-[13.5px] leading-5">{{ props.wording.hideAddressHelp }}</span>
        </span>
      </label>

      <DibodevLegalNoticeTextField
        v-for="fieldKey in stepOneFields"
        :key="fieldKey"
        v-bind="textFieldBindings(fieldKey)"
        @update:value="updateText(fieldKey, $event)"
      />
      <p v-if="isProfessional" class="bg-surface-tint rounded-lg px-3.5 py-3 text-[13.5px] leading-5 text-gray-200">
        {{ props.wording.professionalAddressNote }}
      </p>
    </template>

    <template v-else-if="props.step === 2">
      <p
        v-if="props.answers.status === 'individual'"
        class="bg-surface-tint rounded-lg px-3.5 py-3 text-[15px] leading-6 text-gray-200"
      >
        {{ props.wording.noRegistrationText }}
      </p>

      <template v-else>
        <DibodevLegalNoticeTextField
          v-for="fieldKey in stepTwoFields"
          :key="fieldKey"
          v-bind="textFieldBindings(fieldKey)"
          @update:value="updateText(fieldKey, $event)"
        />

        <div v-if="isSoleTrader" class="grid gap-3">
          <p :id="`${idPrefix}-registry`" class="text-base font-medium text-gray-100">
            {{ props.wording.registryQuestion }}
          </p>
          <div role="radiogroup" :aria-labelledby="`${idPrefix}-registry`" class="grid gap-2">
            <button
              v-for="registry in REGISTRIES"
              :key="registry"
              type="button"
              role="radio"
              :aria-checked="props.answers.registry === registry"
              :class="ROW_CLASS"
              @click="update({ registry })"
            >
              {{ props.wording.registries[registry] }}
              <span :class="RADIO_MARK_CLASS" aria-hidden="true" />
            </button>
          </div>
          <DibodevLegalNoticeTextField
            v-if="props.answers.registry === 'rcs'"
            v-bind="textFieldBindings('registryCity')"
            @update:value="updateText('registryCity', $event)"
          />
        </div>

        <div v-if="hasVatQuestion" class="grid gap-3">
          <p :id="`${idPrefix}-vat`" class="text-base font-medium text-gray-100">{{ props.wording.vatQuestion }}</p>
          <div role="radiogroup" :aria-labelledby="`${idPrefix}-vat`" class="grid gap-2">
            <button
              v-for="vatRegime in VAT_REGIMES"
              :key="vatRegime"
              type="button"
              role="radio"
              :aria-checked="props.answers.vatRegime === vatRegime"
              :class="ROW_CLASS"
              @click="update({ vatRegime })"
            >
              {{ props.wording.vatRegimes[vatRegime] }}
              <span :class="RADIO_MARK_CLASS" aria-hidden="true" />
            </button>
          </div>
          <DibodevLegalNoticeTextField
            v-if="props.answers.vatRegime === 'number'"
            v-bind="textFieldBindings('vatNumber')"
            @update:value="updateText('vatNumber', $event)"
          />
        </div>

        <DibodevLegalNoticeTextField
          v-for="fieldKey in professionFields"
          :key="fieldKey"
          v-bind="textFieldBindings(fieldKey)"
          @update:value="updateText(fieldKey, $event)"
        />
      </template>
    </template>

    <template v-else-if="props.step === 3">
      <div class="grid gap-2">
        <label :for="`${idPrefix}-hosting`" class="text-base font-medium text-gray-100">
          {{ props.wording.hostingQuestion }}
        </label>
        <select
          :id="`${idPrefix}-hosting`"
          :value="props.answers.hostingProvider"
          :class="SELECT_CLASS"
          @change="chooseHostingProvider"
        >
          <option v-for="provider in LEGAL_NOTICE_HOSTING_PROVIDERS" :key="provider.key" :value="provider.key">
            {{ provider.label }}
          </option>
          <option value="other">{{ props.wording.hostingOtherLabel }}</option>
        </select>
      </div>
      <p
        v-if="hostingNote"
        class="bg-surface-tint rounded-lg px-3.5 py-3 text-[13.5px] leading-5 text-gray-200"
        aria-live="polite"
      >
        {{ hostingNote }}
      </p>
      <DibodevLegalNoticeTextField
        v-for="fieldKey in HOSTING_FIELDS"
        :key="fieldKey"
        v-bind="textFieldBindings(fieldKey)"
        @update:value="updateText(fieldKey, $event)"
      />
    </template>

    <template v-else>
      <div class="grid gap-3">
        <p :id="`${idPrefix}-features`" class="text-base font-medium text-gray-100">
          {{ props.wording.dataFeaturesQuestion }}
        </p>
        <div role="group" :aria-labelledby="`${idPrefix}-features`" class="flex flex-wrap gap-2">
          <button
            v-for="feature in LEGAL_NOTICE_DATA_FEATURES"
            :key="feature"
            type="button"
            :aria-pressed="props.answers.dataFeatures.includes(feature)"
            :class="CHIP_CLASS"
            @click="update({ dataFeatures: LegalNoticeDocumentUtils.toggle(props.answers.dataFeatures, feature) })"
          >
            <DibodevIcon
              v-if="props.answers.dataFeatures.includes(feature)"
              name="Check"
              mode="stroke"
              :width="14"
              :height="14"
              class="shrink-0"
              aria-hidden="true"
            />
            {{ props.wording.dataFeatures[feature] }}
          </button>
        </div>
      </div>

      <DibodevLegalNoticeTextField
        v-if="props.answers.dataFeatures.includes('newsletter')"
        v-bind="textFieldBindings('newsletterToolName')"
        @update:value="updateText('newsletterToolName', $event)"
      />

      <div v-if="props.answers.dataFeatures.includes('onlinePayment')" class="grid gap-3">
        <p :id="`${idPrefix}-payment`" class="text-base font-medium text-gray-100">
          {{ props.wording.paymentQuestion }}
        </p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-payment`" class="grid grid-cols-3 gap-2">
          <button
            v-for="paymentProvider in PAYMENT_PROVIDERS"
            :key="paymentProvider"
            type="button"
            role="radio"
            :aria-checked="props.answers.paymentProvider === paymentProvider"
            :class="CHOICE_CLASS"
            @click="update({ paymentProvider })"
          >
            {{ props.wording.paymentProviders[paymentProvider] }}
          </button>
        </div>
        <DibodevLegalNoticeTextField
          v-if="props.answers.paymentProvider === 'other'"
          v-bind="textFieldBindings('paymentProviderName')"
          @update:value="updateText('paymentProviderName', $event)"
        />
      </div>

      <div class="grid gap-3">
        <p :id="`${idPrefix}-analytics`" class="text-base font-medium text-gray-100">
          {{ props.wording.analyticsQuestion }}
        </p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-analytics`" class="grid gap-2">
          <button
            v-for="analytics in ANALYTICS_OPTIONS"
            :key="analytics"
            type="button"
            role="radio"
            :aria-checked="props.answers.analytics === analytics"
            :class="ROW_CLASS"
            @click="update({ analytics })"
          >
            <span class="grid min-w-0 gap-0.5">
              <span class="font-medium">{{ props.wording.analyticsOptions[analytics].label }}</span>
              <span class="text-muted text-[13.5px] leading-[1.4]">
                {{ props.wording.analyticsOptions[analytics].description }}
              </span>
            </span>
            <span :class="RADIO_MARK_CLASS" aria-hidden="true" />
          </button>
        </div>
        <DibodevLegalNoticeTextField
          v-if="props.answers.analytics !== 'none'"
          v-bind="textFieldBindings('analyticsToolName')"
          @update:value="updateText('analyticsToolName', $event)"
        />
      </div>

      <div class="grid gap-3">
        <p :id="`${idPrefix}-third-party`" class="text-base font-medium text-gray-100">
          {{ props.wording.thirdPartyQuestion }}
        </p>
        <div role="group" :aria-labelledby="`${idPrefix}-third-party`" class="flex flex-wrap gap-2">
          <button
            v-for="content in LEGAL_NOTICE_THIRD_PARTY_CONTENTS"
            :key="content"
            type="button"
            :aria-pressed="props.answers.thirdPartyContents.includes(content)"
            :class="CHIP_CLASS"
            @click="
              update({ thirdPartyContents: LegalNoticeDocumentUtils.toggle(props.answers.thirdPartyContents, content) })
            "
          >
            <DibodevIcon
              v-if="props.answers.thirdPartyContents.includes(content)"
              name="Check"
              mode="stroke"
              :width="14"
              :height="14"
              class="shrink-0"
              aria-hidden="true"
            />
            {{ props.wording.thirdPartyContents[content] }}
          </button>
        </div>
      </div>

      <div v-for="question in yesNoQuestions" :key="question.key" class="grid gap-3">
        <p :id="`${idPrefix}-${question.key}`" class="text-base font-medium text-gray-100">{{ question.label }}</p>
        <p v-if="question.help" class="text-muted -mt-1.5 text-[13.5px] leading-5">{{ question.help }}</p>
        <div role="radiogroup" :aria-labelledby="`${idPrefix}-${question.key}`" class="grid grid-cols-2 gap-2">
          <button
            v-for="choice in YES_NO_CHOICES"
            :key="String(choice)"
            type="button"
            role="radio"
            :aria-checked="props.answers[question.key] === choice"
            :class="CHOICE_CLASS"
            @click="answerYesNo(question.key, choice)"
          >
            {{ choice ? props.wording.yes : props.wording.no }}
          </button>
        </div>
        <DibodevLegalNoticeTextField
          v-for="fieldKey in question.fieldKeys"
          v-show="props.answers[question.key]"
          :key="fieldKey"
          v-bind="textFieldBindings(fieldKey)"
          @update:value="updateText(fieldKey, $event)"
        />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevLegalNoticeAnalytics,
  DibodevLegalNoticeAnswers,
  DibodevLegalNoticeCompanyForm,
  DibodevLegalNoticeHostingProvider,
  DibodevLegalNoticeHostingProviderKey,
  DibodevLegalNoticePaymentProvider,
  DibodevLegalNoticeQuestionStep,
  DibodevLegalNoticeRegistry,
  DibodevLegalNoticeStatus,
  DibodevLegalNoticeTextFieldKey,
  DibodevLegalNoticeVatRegime,
} from '~/core/types/DibodevLegalNotice'
import type {
  DibodevLegalNoticeGeneratorWording,
  DibodevLegalNoticeQuestionsProps,
  DibodevLegalNoticeTextFieldInputType,
  DibodevLegalNoticeTextFieldProps,
} from '~/core/types/DibodevLegalNoticeGenerator'
import { computed, ref, useId } from 'vue'
import DibodevLegalNoticeTextField from '~/components/legal-notice/DibodevLegalNoticeTextField.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import {
  LEGAL_NOTICE_COMPANY_FORMS,
  LEGAL_NOTICE_DATA_FEATURES,
  LEGAL_NOTICE_HOSTING_PROVIDERS,
  LEGAL_NOTICE_PLATFORM_HOSTING_KEYS,
  LEGAL_NOTICE_STATUS_ICONS,
  LEGAL_NOTICE_STATUSES,
  LEGAL_NOTICE_THIRD_PARTY_CONTENTS,
} from '~/core/constants/legalNotice/pageShared'
import { LegalNoticeDocumentUtils } from '~/core/utils/LegalNoticeDocumentUtils'

/** A yes / no question of step 4, with the fields it opens when answered yes. */
type DibodevLegalNoticeYesNoQuestion = {
  key: 'hasConsentTool' | 'hasDpo' | 'sellsToConsumers'
  label: string
  help: string
  fieldKeys: DibodevLegalNoticeTextFieldKey[]
}

/** Input type, autocomplete hint and length of a field, the same in every language. */
type DibodevLegalNoticeFieldSettings = {
  inputType: DibodevLegalNoticeTextFieldInputType
  autocomplete: string
  maxLength: number
}

const REGISTRIES: DibodevLegalNoticeRegistry[] = ['rcs', 'rne']
const VAT_REGIMES: DibodevLegalNoticeVatRegime[] = ['number', 'franchise']
const PAYMENT_PROVIDERS: DibodevLegalNoticePaymentProvider[] = ['stripe', 'paypal', 'other']
const ANALYTICS_OPTIONS: DibodevLegalNoticeAnalytics[] = ['none', 'exempted', 'withConsent']
const HOSTING_FIELDS: DibodevLegalNoticeTextFieldKey[] = ['hostingName', 'hostingAddress', 'hostingPhone']
const YES_NO_CHOICES: boolean[] = [true, false]

const DEFAULT_FIELD_SETTINGS: DibodevLegalNoticeFieldSettings = {
  inputType: 'text',
  autocomplete: 'off',
  maxLength: 160,
}
const FIELD_SETTINGS: Partial<Record<DibodevLegalNoticeTextFieldKey, DibodevLegalNoticeFieldSettings>> = {
  name: { inputType: 'text', autocomplete: 'organization', maxLength: 120 },
  publicationDirector: { inputType: 'text', autocomplete: 'name', maxLength: 120 },
  address: { inputType: 'text', autocomplete: 'street-address', maxLength: 200 },
  email: { inputType: 'email', autocomplete: 'email', maxLength: 120 },
  phone: { inputType: 'tel', autocomplete: 'tel', maxLength: 30 },
  websiteUrl: { inputType: 'url', autocomplete: 'url', maxLength: 120 },
  siret: { inputType: 'text', autocomplete: 'off', maxLength: 20 },
  vatNumber: { inputType: 'text', autocomplete: 'off', maxLength: 20 },
  shareCapital: { inputType: 'text', autocomplete: 'off', maxLength: 30 },
  rnaNumber: { inputType: 'text', autocomplete: 'off', maxLength: 20 },
  hostingAddress: { inputType: 'text', autocomplete: 'off', maxLength: 200 },
  hostingPhone: { inputType: 'tel', autocomplete: 'off', maxLength: 30 },
  mediatorWebsite: { inputType: 'url', autocomplete: 'off', maxLength: 120 },
  dpoContact: { inputType: 'text', autocomplete: 'off', maxLength: 160 },
  professionalRules: { inputType: 'text', autocomplete: 'off', maxLength: 240 },
}

const CHOICE_BASE_CLASS: string =
  'hover:border-primary aria-checked:border-primary aria-checked:bg-surface-tint focus-visible:outline-primary relative flex cursor-pointer items-center rounded-[10px] border border-gray-400 bg-white text-gray-100 transition-[border-color,background-color,box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 aria-checked:shadow-[inset_0_0_0_1px_var(--color-primary)] motion-reduce:transition-none'
const CHOICE_CLASS: string = `${CHOICE_BASE_CLASS} min-h-12 justify-center px-3 py-2.5 text-center text-[15px] font-medium`
const ROW_CLASS: string = `${CHOICE_BASE_CLASS} group min-h-12 justify-between gap-3 px-3.5 py-2.5 text-left text-[15px] leading-snug`
const RADIO_MARK_CLASS: string =
  'h-[18px] w-[18px] shrink-0 rounded-full border-[1.5px] border-[#14141459] bg-white transition-[border-width,border-color] duration-150 group-aria-checked:border-[5px] group-aria-checked:border-primary'
const CHIP_CLASS: string =
  'hover:border-primary hover:text-primary-dark aria-pressed:border-primary aria-pressed:bg-primary aria-pressed:hover:text-white focus-visible:outline-primary inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full border border-gray-400 bg-white px-3.5 py-2 text-left text-sm leading-snug font-medium text-gray-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 aria-pressed:text-white'
const SELECT_CLASS: string =
  'focus:border-primary h-12 w-full min-w-0 cursor-pointer rounded-lg border border-gray-400 bg-white px-3 text-base text-gray-100 transition-colors outline-none hover:border-gray-100 focus:shadow-[0_0_0_3px_rgba(111,95,224,0.15)]'
const CHECKBOX_ROW_CLASS: string =
  'hover:border-primary flex min-h-12 cursor-pointer items-start gap-3 rounded-[10px] border border-gray-400 bg-white px-3.5 py-3 text-[15px] leading-snug transition-colors'
const CHECKBOX_CLASS: string = 'accent-primary mt-0.5 h-5 w-5 shrink-0 cursor-pointer'

/** Every answer is emitted as soon as it is given, so the documents follow each keystroke. */
const props: DibodevLegalNoticeQuestionsProps = defineProps({
  step: {
    type: Number as PropType<DibodevLegalNoticeQuestionStep>,
    required: true,
  },
  answers: {
    type: Object as PropType<DibodevLegalNoticeAnswers>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevLegalNoticeGeneratorWording>,
    required: true,
  },
})

const emit: {
  (event: 'update:answers', answers: DibodevLegalNoticeAnswers): void
} = defineEmits<{
  (event: 'update:answers', answers: DibodevLegalNoticeAnswers): void
}>()

const idPrefix: string = useId() ?? 'legal-notice'

/* REFS */
const stepHeading: Ref<HTMLHeadingElement | null> = ref(null)

/* COMPUTED */
const isProfessional: ComputedRef<boolean> = computed((): boolean =>
  ['micro', 'company', 'liberal'].includes(props.answers.status),
)

const isSoleTrader: ComputedRef<boolean> = computed((): boolean => ['micro', 'liberal'].includes(props.answers.status))

const hasVatQuestion: ComputedRef<boolean> = computed((): boolean => isProfessional.value)

/** Fields of step 1: the address disappears for an anonymous private individual. */
const stepOneFields: ComputedRef<DibodevLegalNoticeTextFieldKey[]> = computed((): DibodevLegalNoticeTextFieldKey[] => {
  if (LegalNoticeDocumentUtils.isAnonymous(props.answers)) {
    return ['websiteUrl', 'email']
  }
  const directorFields: DibodevLegalNoticeTextFieldKey[] = ['company', 'association'].includes(props.answers.status)
    ? ['publicationDirector']
    : []
  return ['websiteUrl', 'name', ...directorFields, 'address', 'email', 'phone']
})

/** Fields of step 2 shown before the register and VAT questions. */
const stepTwoFields: ComputedRef<DibodevLegalNoticeTextFieldKey[]> = computed((): DibodevLegalNoticeTextFieldKey[] => {
  switch (props.answers.status) {
    case 'company':
      return ['shareCapital', 'siret', 'registryCity']
    case 'association':
      return ['rnaNumber', 'siret']
    case 'micro':
    case 'liberal':
      return ['siret']
    case 'individual':
      return []
  }
})

const professionFields: ComputedRef<DibodevLegalNoticeTextFieldKey[]> = computed(
  (): DibodevLegalNoticeTextFieldKey[] =>
    props.answers.status === 'liberal'
      ? ['professionTitle', 'titleCountry', 'professionalBody', 'professionalRules']
      : [],
)

/** Note under the hosting list: platform, details read on the provider's pages, or details to complete. */
const hostingNote: ComputedRef<string> = computed((): string => {
  const key: DibodevLegalNoticeHostingProviderKey = props.answers.hostingProvider

  if (key === 'other') {
    return ''
  }
  if (LEGAL_NOTICE_PLATFORM_HOSTING_KEYS.includes(key)) {
    return props.wording.hostingPlatformNote
  }
  const provider: DibodevLegalNoticeHostingProvider | undefined = LEGAL_NOTICE_HOSTING_PROVIDERS.find(
    (candidate: DibodevLegalNoticeHostingProvider): boolean => candidate.key === key,
  )
  const isComplete: boolean = Boolean(provider?.legalName && provider.address && provider.phone)
  return isComplete ? props.wording.hostingPrefilledNote : props.wording.hostingIncompleteNote
})

const yesNoQuestions: ComputedRef<DibodevLegalNoticeYesNoQuestion[]> = computed(
  (): DibodevLegalNoticeYesNoQuestion[] => {
    const questions: DibodevLegalNoticeYesNoQuestion[] = [
      { key: 'hasConsentTool', label: props.wording.consentToolQuestion, help: '', fieldKeys: ['consentToolName'] },
      { key: 'hasDpo', label: props.wording.dpoQuestion, help: props.wording.dpoHelp, fieldKeys: ['dpoContact'] },
    ]

    if (props.answers.status !== 'individual') {
      questions.push({
        key: 'sellsToConsumers',
        label: props.wording.consumerSalesQuestion,
        help: props.wording.consumerSalesHelp,
        fieldKeys: ['mediatorName', 'mediatorWebsite'],
      })
    }
    return questions
  },
)

/* METHODS */
/**
 * Sends the answers with the given fields changed.
 * @param {Partial<DibodevLegalNoticeAnswers>} changes - The fields to change.
 * @returns {void}
 */
function update(changes: Partial<DibodevLegalNoticeAnswers>): void {
  emit('update:answers', { ...props.answers, ...changes })
}

/**
 * Copies what the visitor types in a field.
 * @param {DibodevLegalNoticeTextFieldKey} key - The field.
 * @param {string} value - Its new value.
 * @returns {void}
 */
function updateText(key: DibodevLegalNoticeTextFieldKey, value: string): void {
  const nextAnswers: DibodevLegalNoticeAnswers = { ...props.answers }
  nextAnswers[key] = value
  emit('update:answers', nextAnswers)
}

/**
 * Answers a yes / no question of step 4.
 * @param {DibodevLegalNoticeYesNoQuestion['key']} key - The question.
 * @param {boolean} value - Yes or no.
 * @returns {void}
 */
function answerYesNo(key: DibodevLegalNoticeYesNoQuestion['key'], value: boolean): void {
  const nextAnswers: DibodevLegalNoticeAnswers = { ...props.answers }
  nextAnswers[key] = value
  emit('update:answers', nextAnswers)
}

/**
 * Whether the checkbox of an event is ticked.
 * @param {Event} event - The change event.
 * @returns {boolean} True when ticked.
 */
function isChecked(event: Event): boolean {
  return event.target instanceof HTMLInputElement && event.target.checked
}

/**
 * Chooses the status: register and VAT answers start again.
 * @param {DibodevLegalNoticeStatus} status - The status clicked.
 * @returns {void}
 */
function chooseStatus(status: DibodevLegalNoticeStatus): void {
  emit('update:answers', LegalNoticeDocumentUtils.withStatus(props.answers, status))
}

/**
 * Chooses the legal form of the company.
 * @param {Event} event - The change event of the list.
 * @returns {void}
 */
function chooseCompanyForm(event: Event): void {
  const companyForm: DibodevLegalNoticeCompanyForm | undefined = LEGAL_NOTICE_COMPANY_FORMS.find(
    (candidate: DibodevLegalNoticeCompanyForm): boolean =>
      event.target instanceof HTMLSelectElement && candidate === event.target.value,
  )

  if (companyForm) {
    update({ companyForm })
  }
}

/**
 * Chooses the hosting provider and fills its verified details.
 * @param {Event} event - The change event of the list.
 * @returns {void}
 */
function chooseHostingProvider(event: Event): void {
  if (!(event.target instanceof HTMLSelectElement)) {
    return
  }
  const value: string = event.target.value
  const provider: DibodevLegalNoticeHostingProvider | undefined = LEGAL_NOTICE_HOSTING_PROVIDERS.find(
    (candidate: DibodevLegalNoticeHostingProvider): boolean => candidate.key === value,
  )
  emit('update:answers', LegalNoticeDocumentUtils.withHostingProvider(props.answers, provider?.key ?? 'other'))
}

/**
 * Props of the text field of an answer, its label depending on the status for the name and the address.
 * @param {DibodevLegalNoticeTextFieldKey} key - The field.
 * @returns {DibodevLegalNoticeTextFieldProps} The props to bind.
 */
function textFieldBindings(key: DibodevLegalNoticeTextFieldKey): DibodevLegalNoticeTextFieldProps {
  const settings: DibodevLegalNoticeFieldSettings = FIELD_SETTINGS[key] ?? DEFAULT_FIELD_SETTINGS
  const labelsByStatus: Partial<Record<DibodevLegalNoticeTextFieldKey, string>> = {
    name: props.wording.nameLabels[props.answers.status],
    address: props.wording.addressLabels[props.answers.status],
  }
  return {
    inputId: `${idPrefix}-${key}`,
    label: labelsByStatus[key] ?? props.wording.fields[key].label,
    value: props.answers[key],
    placeholder: props.wording.fields[key].placeholder,
    help: key === 'phone' ? props.wording.phoneNote : props.wording.fields[key].help,
    inputType: settings.inputType,
    autocomplete: settings.autocomplete,
    maxLength: settings.maxLength,
  }
}

/**
 * Moves the keyboard and screen reader focus to the question, without scrolling.
 * @returns {void}
 */
function focusHeading(): void {
  stepHeading.value?.focus({ preventScroll: true })
}

defineExpose({ focusHeading })
</script>
