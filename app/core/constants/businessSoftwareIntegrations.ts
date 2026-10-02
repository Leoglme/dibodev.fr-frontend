import type { DibodevBusinessSoftwareIntegrationConfig } from '~/core/types/DibodevBusinessSoftwarePage'

/** Services a custom tool connects to, in display order (three per row): brand logos from Simple Icons (CC0) or the official app icon, pictograms otherwise. */
export const BUSINESS_SOFTWARE_INTEGRATIONS: DibodevBusinessSoftwareIntegrationConfig[] = [
  { key: 'payment', logoSrc: '/images/integrations/stripe.svg', logoBackground: '#efeeff' },
  { key: 'banking', logoSrc: '/images/integrations/qonto.png', logoBackground: '#ededeb' },
  { key: 'accounting', logoSrc: '/images/integrations/pennylane.png', logoBackground: '#e6f5ef' },
  { key: 'quotes', logoSrc: '/images/integrations/ebp.png', logoBackground: '#e4eefb' },
  { key: 'crm', logoSrc: '/images/integrations/hubspot.svg', logoBackground: '#fff0eb' },
  { key: 'emails', logoSrc: '/images/integrations/mailjet.png', logoBackground: '#f1edff' },
  { key: 'messaging', logoSrc: '/images/integrations/whatsapp.svg', logoBackground: '#e6f9ed' },
  { key: 'calendar', logoSrc: '/images/integrations/google-calendar.svg', logoBackground: '#e8f0fe' },
  { key: 'files', logoSrc: '/images/integrations/spreadsheet.svg', logoBackground: '#e4f8ec' },
  { key: 'automation', logoSrc: '/images/integrations/n8n.svg', logoBackground: '#fdeaf0' },
  { key: 'ai', logoSrc: '/images/integrations/claude.svg', logoBackground: '#fbeee8' },
  { key: 'api', logoSrc: '/images/integrations/api.svg', logoBackground: '#e0f5fa' },
]
