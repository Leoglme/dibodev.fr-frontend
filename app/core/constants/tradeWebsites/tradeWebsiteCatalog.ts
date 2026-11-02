import type {
  DibodevTemplatePalette,
  DibodevTradeWebsiteDefinition,
  DibodevTradeWebsiteKey,
  DibodevTradeWebsiteTemplate,
} from '~/core/types/DibodevTradeWebsite'
import { PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/plumberQuote/pageShared'

export const TRADE_WEBSITES_HUB_ROUTE_NAME: string = 'trade-websites'

export const TRADE_WEBSITES_HUB_UPDATED_AT: string = '2026-11-02'

export const SITE_ATELIER_TUNNEL_ID_PREFIX: string = 'site-atelier-'

export const TRADE_WEBSITE_TRACKING_LOCATION_PREFIX: string = 'trade_website_'
export const TRADE_WEBSITES_HUB_TRACKING_LOCATION: string = 'trade_websites_hub'

export const TRADE_WEBSITE_ATELIER_ANCHOR_ID: string = 'atelier'
export const TRADE_WEBSITE_CONTENTS_ANCHOR_ID: string = 'contenu'
export const TRADE_WEBSITE_RULES_ANCHOR_ID: string = 'reglementation'
export const TRADE_WEBSITE_PRICING_ANCHOR_ID: string = 'pricing'
export const TRADE_WEBSITE_RESOURCES_ANCHOR_ID: string = 'aller-plus-loin'
export const TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID: string = 'metiers'

const THUMBNAILS_DIRECTORY: string = '/images/sites'

/**
 * Builds a template of DevLeadHunter with its signature palette (`TEMPLATE_META` of `api/services/templates/<id>.py`, read on 2 November 2026).
 * @param {string} id - The template id.
 * @param {string} demoSlug - The showcase demo of the template.
 * @param {DibodevTemplatePalette} defaultPalette - Its signature colours.
 * @returns {DibodevTradeWebsiteTemplate} The template.
 */
function buildTemplate(
  id: string,
  demoSlug: string,
  defaultPalette: DibodevTemplatePalette,
): DibodevTradeWebsiteTemplate {
  return {
    id,
    demoSlug,
    thumbnailSrc: `${THUMBNAILS_DIRECTORY}/${id}.webp`,
    shareImageSrc: `${THUMBNAILS_DIRECTORY}/${id}-share.jpg`,
    defaultPalette,
  }
}

export const TRADE_WEBSITE_CATALOG: DibodevTradeWebsiteDefinition[] = [
  {
    key: 'plumber',
    routeName: 'trade-websites-plumber',
    icon: 'Droplets',
    templates: [
      buildTemplate('plumber-signature', 'exemple-plombier-signature', {
        primary: '#0F5257',
        secondary: '#14181C',
        accent: '#E8552D',
      }),
      buildTemplate('plumber-atelier', 'exemple-plombier-atelier', {
        primary: '#B8732E',
        secondary: '#1C1B19',
        accent: '#2E5B6B',
      }),
      buildTemplate('plumber-cuivre', 'exemple-plombier-cuivre', {
        primary: '#1080B4',
        secondary: '#10293D',
        accent: '#22A8C4',
      }),
    ],
    toolRouteName: 'tools-plumbing-heating-software',
    freeTemplateRouteName: PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME,
    hasEmergencyService: true,
  },
  {
    key: 'electrician',
    routeName: 'trade-websites-electrician',
    icon: 'Zap',
    templates: [
      buildTemplate('electrician-eclat', 'exemple-electricien-eclat', {
        primary: '#F59E0B',
        secondary: '#0B1B2E',
        accent: '#F59E0B',
      }),
      buildTemplate('electrician-lumen', 'exemple-electricien-lumen', {
        primary: '#FFD400',
        secondary: '#070B14',
        accent: '#FF9F1C',
      }),
    ],
    toolRouteName: 'tools-electrician-software',
    freeTemplateRouteName: 'tools-free-templates-electrician-commissioning-report',
    hasEmergencyService: true,
  },
  {
    key: 'garage',
    routeName: 'trade-websites-garage',
    icon: 'Car',
    templates: [
      buildTemplate('mechanic-pitlane', 'exemple-garage-pitlane', {
        primary: '#E11D2E',
        secondary: '#0C0C0D',
        accent: '#F4F4F5',
      }),
    ],
    toolRouteName: 'tools-auto-repair-shop-software',
    freeTemplateRouteName: 'tools-free-templates-garage-repair-order',
    hasEmergencyService: false,
  },
  {
    key: 'landscaper',
    routeName: 'trade-websites-landscaper',
    icon: 'Sprout',
    templates: [
      buildTemplate('landscaper-verdure', 'exemple-paysagiste-verdure', {
        primary: '#2d746d',
        secondary: '#00b67a',
        accent: '#bcff83',
      }),
    ],
    toolRouteName: 'tools-landscaping-software',
    freeTemplateRouteName: 'tools-free-templates-landscaping-maintenance-contract',
    hasEmergencyService: false,
  },
  {
    key: 'carpenter',
    routeName: 'trade-websites-carpenter',
    icon: 'Hammer',
    templates: [
      buildTemplate('artisan-edito', 'exemple-menuisier-edito', {
        primary: '#1B1813',
        secondary: '#6B6355',
        accent: '#E8A33C',
      }),
    ],
    toolRouteName: 'tools-carpentry-software',
    freeTemplateRouteName: 'tools-free-templates-carpentry-cutting-list',
    hasEmergencyService: false,
  },
  {
    key: 'restaurant',
    routeName: 'trade-websites-restaurant',
    icon: 'Utensils',
    templates: [
      buildTemplate('food', 'exemple-restaurant', { primary: '#055346', secondary: '#f9efe6', accent: '#f3c395' }),
    ],
    toolRouteName: null,
    freeTemplateRouteName: null,
    hasEmergencyService: false,
  },
  {
    key: 'hairSalon',
    routeName: 'trade-websites-hair-salon',
    icon: 'Scissors',
    templates: [
      buildTemplate('barber', 'exemple-coiffeur', { primary: '#121212', secondary: '#f8f5ef', accent: '#dec7a6' }),
    ],
    toolRouteName: null,
    freeTemplateRouteName: null,
    hasEmergencyService: false,
  },
  {
    key: 'dentist',
    routeName: 'trade-websites-dentist',
    icon: 'Smile',
    templates: [
      buildTemplate('dental', 'exemple-dentiste', { primary: '#b1040e', secondary: '#2e333e', accent: '#80060d' }),
    ],
    toolRouteName: null,
    freeTemplateRouteName: null,
    hasEmergencyService: false,
  },
]

export const TRADE_WEBSITES_BY_KEY: Record<DibodevTradeWebsiteKey, DibodevTradeWebsiteDefinition> = Object.fromEntries(
  TRADE_WEBSITE_CATALOG.map(
    (trade: DibodevTradeWebsiteDefinition): [DibodevTradeWebsiteKey, DibodevTradeWebsiteDefinition] => [
      trade.key,
      trade,
    ],
  ),
) as Record<DibodevTradeWebsiteKey, DibodevTradeWebsiteDefinition>

export const TRADE_WEBSITE_TEMPLATE_COUNT: number = TRADE_WEBSITE_CATALOG.reduce(
  (count: number, trade: DibodevTradeWebsiteDefinition): number => count + trade.templates.length,
  0,
)
