import type { NuxtError } from '#app'

/**
 * Type definitions for the error page props.
 * @type {DibodevErrorPageProps}
 * @property {NuxtError} error - The error thrown by Nuxt (status code and message).
 */
export type DibodevErrorPageProps = {
  error: NuxtError
}
