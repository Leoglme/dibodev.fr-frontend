import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(async (nuxtApp) => {
  if (!import.meta.env.DEV) {
    return
  }

  const { AgentationVuePlugin } = await import('agentation-vue')
  await import('agentation-vue/style.css')

  nuxtApp.vueApp.use(AgentationVuePlugin)
})
