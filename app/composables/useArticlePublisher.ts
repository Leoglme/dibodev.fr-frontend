/** Outcome of publishing an article by id (and optionally translating it). */
export type PublishArticleResult = {
  fullSlug: string
  message: string
  translated: boolean
}

/** Public API of the article publisher composable. */
export type UseArticlePublisherReturn = {
  publishArticleById: (id: string, options: { autoTranslate: boolean }) => Promise<PublishArticleResult>
}

/**
 * Publishes a stored article to Storyblok and, when asked, pushes its EN/ES translations.
 * Shared by the drafts list and the publication page. Translation is best-effort.
 *
 * @returns The publisher API.
 */
export function useArticlePublisher(): UseArticlePublisherReturn {
  /**
   * Publishes the article with the given id, then optionally translates it (best-effort).
   *
   * @param id - The stored article record id.
   * @param options - Whether to also push the EN/ES translations.
   * @returns The created story full slug, the server message, and whether translation succeeded.
   */
  async function publishArticleById(id: string, options: { autoTranslate: boolean }): Promise<PublishArticleResult> {
    const publishResult = await $fetch<{ fullSlug: string; message: string }>('/api/dashboard/articles/publish', {
      method: 'POST',
      body: { id, autoRebuild: !options.autoTranslate },
    })
    let translated = false
    if (options.autoTranslate) {
      try {
        await $fetch('/api/dashboard/translations/translate', {
          method: 'POST',
          body: { entityType: 'article', slug: publishResult.fullSlug, targetLocales: ['en', 'es'] },
        })
        translated = true
      } catch {
        // translation is best-effort; the article is published either way
      }
    }
    return { fullSlug: publishResult.fullSlug, message: publishResult.message, translated }
  }

  return { publishArticleById }
}
