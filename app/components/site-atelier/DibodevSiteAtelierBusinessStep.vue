<template>
  <div class="grid gap-5">
    <DibodevSiteAtelierStepHeading
      ref="heading"
      :title="props.wording.business.title"
      :intro="props.wording.business.intro"
    />
    <DibodevSiteAtelierGooglePlaceSearch :wording="props.wording" @select="emit('select-google-place', $event)" />
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="relative flex flex-col gap-3 sm:col-span-2">
        <label :for="NAME_ID" class="text-base font-medium text-gray-100">{{ props.wording.business.nameLabel }}</label>
        <input
          :id="NAME_ID"
          type="text"
          autocomplete="organization"
          :maxlength="SITE_ATELIER_BUSINESS_NAME_MAX_LENGTH"
          :value="props.state.businessName"
          :placeholder="props.wording.business.namePlaceholder"
          :class="SITE_ATELIER_TEXT_FIELD_CLASS"
          @input="emit('update:business-name', readValue($event))"
        />
      </div>
      <DibodevTownSearchInput
        :id="CITY_ID"
        :label="props.wording.business.cityLabel"
        :value="props.state.city"
        :placeholder="props.wording.business.cityPlaceholder"
        :maxLength="SITE_ATELIER_CITY_MAX_LENGTH"
        @update:value="emit('update:city', $event)"
      />
      <div class="relative flex flex-col gap-3">
        <label :for="PHONE_ID" class="text-base font-medium text-gray-100">{{
          props.wording.business.phoneLabel
        }}</label>
        <input
          :id="PHONE_ID"
          type="tel"
          autocomplete="tel"
          :maxlength="SITE_ATELIER_PHONE_MAX_LENGTH"
          :value="props.state.phone"
          :placeholder="props.wording.business.phonePlaceholder"
          :class="SITE_ATELIER_TEXT_FIELD_CLASS"
          @input="emit('update:phone', readValue($event))"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { SiteAtelierGooglePlace } from '~~/server/types/tools/siteAtelier'
import type { DibodevSiteAtelierState, DibodevSiteAtelierWording } from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteAtelierBusinessStepProps } from '~/core/types/DibodevSiteAtelierBusinessStep'
import { ref } from 'vue'
import DibodevTownSearchInput from '~/components/inputs/DibodevTownSearchInput.vue'
import DibodevSiteAtelierGooglePlaceSearch from '~/components/site-atelier/DibodevSiteAtelierGooglePlaceSearch.vue'
import DibodevSiteAtelierStepHeading from '~/components/site-atelier/DibodevSiteAtelierStepHeading.vue'
import {
  SITE_ATELIER_BUSINESS_NAME_MAX_LENGTH,
  SITE_ATELIER_CITY_MAX_LENGTH,
  SITE_ATELIER_PHONE_MAX_LENGTH,
  SITE_ATELIER_TEXT_FIELD_CLASS,
} from '~/core/constants/siteAtelier/siteAtelierShared'

const NAME_ID: string = 'site-atelier-business-name'
const CITY_ID: string = 'site-atelier-city'
const PHONE_ID: string = 'site-atelier-phone'

/**
 * First step: the business name, city (with commune suggestions) and phone shown on the site, with the optional Google profile search above.
 */
const props: DibodevSiteAtelierBusinessStepProps = defineProps({
  wording: {
    type: Object as PropType<DibodevSiteAtelierWording>,
    required: true,
  },
  state: {
    type: Object as PropType<DibodevSiteAtelierState>,
    required: true,
  },
})

const emit: {
  (event: 'update:business-name', value: string): void
  (event: 'update:city', value: string): void
  (event: 'update:phone', value: string): void
  (event: 'select-google-place', place: SiteAtelierGooglePlace): void
} = defineEmits<{
  (event: 'update:business-name', value: string): void
  (event: 'update:city', value: string): void
  (event: 'update:phone', value: string): void
  (event: 'select-google-place', place: SiteAtelierGooglePlace): void
}>()

const heading: Ref<InstanceType<typeof DibodevSiteAtelierStepHeading> | null> = ref(null)

/**
 * Text of the field that fired an input event.
 * @param {Event} event - The input event.
 * @returns {string} The value typed.
 */
function readValue(event: Event): string {
  return event.target instanceof HTMLInputElement ? event.target.value : ''
}

/**
 * Moves the focus to the step title.
 * @returns {void}
 */
function focusTitle(): void {
  heading.value?.focusTitle()
}

defineExpose({ focusTitle })
</script>
