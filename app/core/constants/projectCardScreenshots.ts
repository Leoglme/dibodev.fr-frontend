import type { DibodevProjectCardScreenshotOverride } from '~/core/types/DibodevProjectCardScreenshot'

/**
 * Projects whose card must not use their first Storyblok media as screenshot, keyed by slug.
 * Every other project shows its first media (`media1`).
 */
export const PROJECT_CARD_SCREENSHOT_OVERRIDES: Record<string, DibodevProjectCardScreenshotOverride> = {
  /** The first media is a phone mockup; the second one is the report screen. */
  'gestion-temps': { media: 'media2' },
  /** Both Storyblok media are animated GIFs of more than 1 MB: a still frame of the first one is served from the site. */
  stockpme: { staticPath: '/images/projects/stockpme-card.webp' },
  /** The first media is a pale form that fades into the card; the second one is the landing page, readable at card size. */
  devleadhunter: { media: 'media2' },
}
