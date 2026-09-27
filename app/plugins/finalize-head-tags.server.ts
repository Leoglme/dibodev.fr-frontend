import type { HeadTag } from '@unhead/vue'
import type { NuxtApp, RuntimeNuxtHooks } from '#app'
import { withQuery } from 'ufo'
import { SHARE_IMAGE_VERSION } from '~/core/constants/shareImage'

type AppRenderedContext = Parameters<RuntimeNuxtHooks['app:rendered']>[0]

const SHARE_IMAGE_META_KEYS: string[] = ['og:image', 'twitter:image', 'twitter:image:src']
const GENERATED_SHARE_IMAGE_PATH: string = '/__og-image__/'
const AMPERSAND_REGEX: RegExp = /&/g

/**
 * Tells whether a head tag holds the URL of a share image rendered by nuxt-og-image.
 * @param {HeadTag} tag - The resolved head tag.
 * @returns {boolean} True for an og:image or twitter:image tag pointing to a generated image.
 */
function isGeneratedShareImageTag(tag: HeadTag): boolean {
  const metaKey: string = tag.props.property ?? tag.props.name ?? ''
  return (
    tag.tag === 'meta' &&
    SHARE_IMAGE_META_KEYS.includes(metaKey) &&
    (tag.props.content ?? '').includes(GENERATED_SHARE_IMAGE_PATH)
  )
}

/**
 * Escapes the ampersands of a head tag's attributes, which Unhead writes raw ("Sport & Loisirs").
 * @param {HeadTag} tag - The resolved head tag.
 * @returns {void}
 */
function escapeAttributeAmpersands(tag: HeadTag): void {
  for (const [attributeName, attributeValue] of Object.entries(tag.props)) {
    if (typeof attributeValue === 'string') {
      tag.props[attributeName] = attributeValue.replace(AMPERSAND_REGEX, '&amp;')
    }
  }
}

/**
 * Finalizes the rendered head tags for link preview bots: versioned share image URLs, so their caches fetch redrawn images, and escaped ampersands.
 * @returns {void}
 */
export default defineNuxtPlugin((): void => {
  const nuxtApp: NuxtApp = useNuxtApp()
  nuxtApp.hooks.hook('app:rendered', (renderContext: AppRenderedContext): void => {
    renderContext.ssrContext?.head.use({
      key: 'dibodev:finalize-head-tags',
      hooks: {
        'tags:resolve': (resolveContext: { tags: HeadTag[] }): void => {
          for (const tag of resolveContext.tags) {
            if (isGeneratedShareImageTag(tag)) {
              tag.props.content = withQuery(tag.props.content ?? '', { v: SHARE_IMAGE_VERSION })
            }
            escapeAttributeAmpersands(tag)
          }
        },
      },
    })
  })
})
