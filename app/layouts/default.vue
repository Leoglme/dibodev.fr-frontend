<template>
  <div class="bg-gray-900 text-gray-100">
    <DibodevNavbar />
    <slot />
    <DibodevFooter />
  </div>
</template>
<script setup lang="ts">
import DibodevNavbar from '~/components/navigations/DibodevNavbar.vue'
import DibodevFooter from '~/components/navigations/DibodevFooter.vue'
import { personSchemaJson } from '~/config/schema'
import Aos from 'aos'
import 'aos/dist/aos.css'

useHead({
  script: [
    {
      key: 'schema-person',
      type: 'application/ld+json',
      innerHTML: personSchemaJson,
    },
  ],
})

onMounted(() => {
  Aos.init({
    easing: 'ease-out-cubic',
  })
})
</script>
