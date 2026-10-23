import type { DashboardToolPage } from '~/core/types/DashboardSearchPerformancePage'

export const DASHBOARD_TOOL_HUB_ROUTE_NAME: string = 'tools'

/** By route name without its locale suffix; a tool page missing here is labelled from its French slug and shows no online date. */
export const DASHBOARD_TOOL_PAGES: Record<string, DashboardToolPage> = {
  tools: { label: 'Page « Outils » (hub)', onlineSince: '2026-10-01' },
  'tools-driving-school-software': { label: 'Logiciel auto-école', onlineSince: '2026-09-30' },
  'tools-event-rental-software': { label: 'Logiciel location de matériel événementiel', onlineSince: '2026-09-30' },
  'tools-bike-shop-software': { label: 'Logiciel atelier vélo', onlineSince: '2026-09-30' },
  'tools-auto-repair-shop-software': { label: 'Logiciel garage automobile', onlineSince: '2026-09-30' },
  'tools-public-aid-simulator': { label: 'Simulateur d’aides publiques', onlineSince: '2026-10-11' },
  'tools-plumbing-heating-software': { label: 'Logiciel plombier-chauffagiste', onlineSince: '2026-10-19' },
  'tools-field-service-software': { label: 'Logiciel gestion d’interventions', onlineSince: '2026-10-19' },
  'tools-electrician-software': { label: 'Logiciel électricien', onlineSince: '2026-10-19' },
  'tools-personal-trainer-software': { label: 'Logiciel coach sportif', onlineSince: '2026-10-19' },
  'tools-php-vulnerability-check': { label: 'Faille PHP : vérifier mon site', onlineSince: '2026-10-21' },
  'tools-e-invoicing-software-check': { label: 'Facture électronique : mon logiciel', onlineSince: '2026-10-23' },
}
