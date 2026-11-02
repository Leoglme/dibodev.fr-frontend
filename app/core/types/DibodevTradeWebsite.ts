/** The trades that have a "website for <trade>" page, in the order of the hub. */
export type DibodevTradeWebsiteKey =
  | 'plumber'
  | 'electrician'
  | 'garage'
  | 'landscaper'
  | 'carpenter'
  | 'restaurant'
  | 'hairSalon'
  | 'dentist'

/** The three colours a DevLeadHunter template is drawn with, as `#rrggbb`. */
export type DibodevTemplatePalette = {
  primary: string
  secondary: string
  accent: string
}

/**
 * One DevLeadHunter template a visitor can pick as the style of his site.
 * @property {string} id - The template id of DevLeadHunter (`plumber-signature`).
 * @property {string} demoSlug - The showcase demo rendered in the preview frame (`demo.dibodev.fr/<slug>`).
 * @property {string} thumbnailSrc - The 1200 px capture shown in the style picker and while the live demo cannot be shown.
 * @property {string} shareImageSrc - The JPEG capture drawn on the share image (Satori reads no WebP).
 * @property {DibodevTemplatePalette} defaultPalette - The signature colours of the template.
 */
export type DibodevTradeWebsiteTemplate = {
  id: string
  demoSlug: string
  thumbnailSrc: string
  shareImageSrc: string
  defaultPalette: DibodevTemplatePalette
}

/**
 * What a trade page shares across its three languages.
 * @property {DibodevTradeWebsiteKey} key - The trade.
 * @property {string} routeName - Route name of the page, without its locale suffix (`trade-websites-plumber`).
 * @property {string} icon - Icon of the trade on the hub.
 * @property {DibodevTradeWebsiteTemplate[]} templates - The styles offered, the first one being the default.
 * @property {string | null} toolRouteName - The free trade test of the trade, when one exists.
 * @property {string | null} freeTemplateRouteName - The free document template of the trade, when one exists.
 * @property {boolean} hasEmergencyService - Whether an "emergency 7 days a week" option makes sense for the trade.
 */
export type DibodevTradeWebsiteDefinition = {
  key: DibodevTradeWebsiteKey
  routeName: string
  icon: string
  templates: DibodevTradeWebsiteTemplate[]
  toolRouteName: string | null
  freeTemplateRouteName: string | null
  hasEmergencyService: boolean
}
