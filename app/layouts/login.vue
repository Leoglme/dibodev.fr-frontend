<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-900 px-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
import Aos from 'aos'
import 'aos/dist/aos.css'

useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})

onMounted(() => {
  Aos.init({ easing: 'ease-out-cubic' })
})
</script>
