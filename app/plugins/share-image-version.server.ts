import type { HeadTag } from '@unhead/vue'
import type { NuxtApp, RuntimeNuxtHooks } from '#app'
import { withQuery } from 'ufo'
import { SHARE_IMAGE_VERSION } from '~/core/constants/shareImage'

type AppRenderedContext = Parameters<RuntimeNuxtHooks['app:rendered']>[0]

const SHARE_IMAGE_META_KEYS: string[] = ['og:image', 'twitter:image', 'twitter:image:src']
const GENERATED_SHARE_IMAGE_PATH: string = '/__og-image__/'

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
 * Adds the share image version to the generated share image URLs, so link preview caches fetch redrawn images.
 * @returns {void}
 */
export default defineNuxtPlugin((): void => {
  const nuxtApp: NuxtApp = useNuxtApp()
  nuxtApp.hooks.hook('app:rendered', (renderContext: AppRenderedContext): void => {
    renderContext.ssrContext?.head.use({
      key: 'dibodev:share-image-version',
      hooks: {
        'tags:resolve': (resolveContext: { tags: HeadTag[] }): void => {
          for (const tag of resolveContext.tags) {
            if (isGeneratedShareImageTag(tag)) {
              tag.props.content = withQuery(tag.props.content ?? '', { v: SHARE_IMAGE_VERSION })
            }
          }
        },
      },
    })
  })
})
