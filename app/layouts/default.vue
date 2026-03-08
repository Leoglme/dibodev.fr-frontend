<template>
  <div class="bg-gray-900 text-gray-100">
    <DibodevNavbar />
    <main>
      <slot />
    </main>
    <DibodevFooter />
  </div>
</template>
<script setup lang="ts">
import DibodevNavbar from '~/components/navigations/DibodevNavbar.vue'
import DibodevFooter from '~/components/navigations/DibodevFooter.vue'
import { personSchemaJson } from '~/config/schema'
useHead({
  script: [
    {
      key: 'schema-person',
      type: 'application/ld+json',
      innerHTML: personSchemaJson,
    },
  ],
})

onMounted(async () => {
  const [{ default: Aos }, _] = await Promise.all([import('aos'), import('aos/dist/aos.css')])
  Aos.init({ easing: 'ease-out-cubic' })
})
</script>
