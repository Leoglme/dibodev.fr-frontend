<template>
  <div
    class="dashboard-root min-h-dvh bg-white pr-[env(safe-area-inset-right,0px)] pl-[env(safe-area-inset-left,0px)] text-gray-100"
  >
    <NuxtLoadingIndicator color="var(--color-primary)" :height="2" :throttle="200" />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import '~/assets/css/dashboard.css'
import { useDashboardAppHead } from '~/composables/useDashboardAppHead'

useDashboardAppHead('#ffffff')
</script>
