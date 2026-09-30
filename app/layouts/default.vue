<template>
  <div class="bg-white text-gray-100">
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
import { siteEntityGraphJson } from '~/config/schema'
useHead({
  script: [
    {
      key: 'schema-entities',
      type: 'application/ld+json',
      innerHTML: siteEntityGraphJson,
    },
  ],
})

onMounted(async (): Promise<void> => {
  const [{ default: Aos }, _] = await Promise.all([import('aos'), import('aos/dist/aos.css')])
  Aos.init({ easing: 'ease-out-cubic', once: true, duration: 600, offset: 80 })
})
</script>
