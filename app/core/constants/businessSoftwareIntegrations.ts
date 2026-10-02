import type { DibodevBusinessSoftwareIntegrationConfig } from '~/core/types/DibodevBusinessSoftwarePage'

/** Services actually used on delivered projects; brand logos from Simple Icons (CC0) or the official app icon, pictograms otherwise. */
export const BUSINESS_SOFTWARE_INTEGRATIONS: DibodevBusinessSoftwareIntegrationConfig[] = [
  { key: 'payment', logoSrc: '/images/integrations/stripe.svg', logoBackground: '#efeeff' },
  { key: 'emails', logoSrc: '/images/integrations/mailjet.png', logoBackground: '#f1edff' },
  { key: 'content', logoSrc: '/images/integrations/storyblok.svg', logoBackground: '#e3f7f6' },
  { key: 'files', logoSrc: '/images/integrations/spreadsheet.svg', logoBackground: '#e4f8ec' },
  { key: 'ai', logoSrc: '/images/integrations/mistral.svg', logoBackground: '#fff0e8' },
  { key: 'api', logoSrc: '/images/integrations/api.svg', logoBackground: '#e0f5fa' },
]
