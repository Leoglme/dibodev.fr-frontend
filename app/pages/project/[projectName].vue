<template>
  <div class="h-screen w-screen">
    {{ projectName }}
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const projectName: string | null = route.params.projectName as string | null
</script>
