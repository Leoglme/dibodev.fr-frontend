<template>
  <DashboardPage title="Publication" icon="send">
    <p class="text-muted text-sm">Ouverture de la publication…</p>
  </DashboardPage>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import DashboardPage from '~/components/dashboard/shell/DashboardPage.vue'

definePageMeta({
  layout: 'dashboard',
})

useHead({
  title: 'Publication · Dibodev Admin',
})

const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()

// Old links (?draft=<id>) open the publication drawer over the article list.
onMounted(async (): Promise<void> => {
  const draftId: string = typeof route.query.draft === 'string' ? route.query.draft : ''
  await navigateTo(localePath({ path: '/dashboard/articles', query: draftId ? { publish: draftId } : {} }), {
    replace: true,
  })
})
</script>
