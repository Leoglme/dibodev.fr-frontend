<template>
  <div>
    <DibodevAiIcon v-if="props.serviceIconName === 'ai'" />

    <DibodevAppsIcon v-if="props.serviceIconName === 'apps'" />

    <DibodevCloudComputingIcon v-if="props.serviceIconName === 'cloud-computing'" />

    <DibodevCloudStorageIcon v-if="props.serviceIconName === 'cloud-storage'" />

    <DibodevMobileIcon v-if="props.serviceIconName === 'mobile'" />

    <DibodevSeoIcon v-if="props.serviceIconName === 'seo'" />

    <DibodevSeoTagIcon v-if="props.serviceIconName === 'seo-tag'" />

    <DibodevWebsiteContentIcon v-if="props.serviceIconName === 'website-content'" />
  </div>
</template>

<script lang="ts" setup>
import type { DibodevServiceIconProps, DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'
import type { PropType } from 'vue'
import DibodevAiIcon from '~/components/icons/servicesIcons/DibodevAiIcon.vue'
import DibodevAppsIcon from '~/components/icons/servicesIcons/DibodevAppsIcon.vue'
import DibodevCloudComputingIcon from '~/components/icons/servicesIcons/DibodevCloudComputingIcon.vue'
import DibodevCloudStorageIcon from '~/components/icons/servicesIcons/DibodevCloudStorageIcon.vue'
import DibodevMobileIcon from '~/components/icons/servicesIcons/DibodevMobileIcon.vue'
import DibodevSeoIcon from '~/components/icons/servicesIcons/DibodevSeoIcon.vue'
import DibodevSeoTagIcon from '~/components/icons/servicesIcons/DibodevSeoTagIcon.vue'
import DibodevWebsiteContentIcon from '~/components/icons/servicesIcons/DibodevWebsiteContentIcon.vue'

// https://www.flaticon.com/search?author_id=168&style_id=862&type=standard&word=business
const props: DibodevServiceIconProps = defineProps({
  serviceIconName: {
    type: String as PropType<DibodevServiceIconName>,
    required: true,
  },
})
</script>
