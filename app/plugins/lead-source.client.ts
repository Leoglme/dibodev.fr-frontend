import { useLeadSource } from '~/composables/useLeadSource'

/**
 * Captures the first-touch acquisition source (referrer, landing page, UTM) once on client startup.
 * @returns {void}
 */
export default defineNuxtPlugin((): void => {
  const { captureLeadSourceOnce } = useLeadSource()
  captureLeadSourceOnce()
})
