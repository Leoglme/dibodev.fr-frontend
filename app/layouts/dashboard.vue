<template>
  <div class="flex min-h-screen bg-gray-900 text-gray-100">
    <aside class="fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-gray-700 bg-gray-800">
      <div class="flex h-[70px] items-center border-b border-gray-700 px-4">
        <NuxtLink :to="localePath('/dashboard')" class="flex items-center gap-2">
          <DibodevLogo :size="28" :large="true" />
        </NuxtLink>
      </div>
      <nav class="flex flex-1 flex-col gap-1 px-3 py-4">
        <NuxtLink
          :to="localePath('/dashboard/generate-article')"
          class="rounded-md px-3 py-2 text-sm font-medium transition-colors"
          :class="
            $route.path.endsWith('/generate-article')
              ? 'bg-gray-700 text-gray-100'
              : 'text-gray-100 hover:bg-gray-700 hover:text-gray-100'
          "
        >
          Générer un article
        </NuxtLink>
        <div class="mt-auto border-t border-gray-700 pt-4">
          <DibodevLink
            :link="localePath('/')"
            class="flex w-full items-center gap-2 rounded-md bg-gray-700 px-3 py-2 text-sm font-medium text-gray-200 hover:bg-gray-600 hover:text-gray-100"
          >
            <DibodevIcon name="ChevronLeft" :width="16" :height="16" mode="stroke" class="-ml-0.5" />
            Retour au site
          </DibodevLink>
        </div>
      </nav>
    </aside>

    <main class="flex-1 pl-64">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
const localePath = useLocalePath()

useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
</script>
