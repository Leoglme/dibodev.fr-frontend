import type { DashboardToolPage } from '~/core/types/DashboardSearchPerformancePage'

export const DASHBOARD_TOOL_HUB_ROUTE_NAME: string = 'tools'

/** Route families shown in the tool pages tab: a hub named after the family, and its pages named `<family>-<page>`. */
export const DASHBOARD_TOOL_ROUTE_FAMILIES: string[] = [DASHBOARD_TOOL_HUB_ROUTE_NAME, 'trade-websites']

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
  'tools-e-invoicing-scope-check': { label: 'Facture électronique : suis-je concerné ?', onlineSince: '2026-10-25' },
  'tools-wordpress-hack-check': { label: 'Site WordPress piraté : vérifier', onlineSince: '2026-10-26' },
  'tools-landscaping-software': { label: 'Logiciel paysagiste', onlineSince: '2026-10-26' },
  'tools-cleaning-business-software': { label: 'Logiciel entreprise de nettoyage', onlineSince: '2026-10-26' },
  'tools-cold-calling-check': { label: 'Démarchage téléphonique : puis-je appeler ?', onlineSince: '2026-10-26' },
  'tools-carpentry-software': { label: 'Logiciel menuisier', onlineSince: '2026-11-01' },
  'tools-training-center-software': { label: 'Logiciel organisme de formation', onlineSince: '2026-11-01' },
  'tools-leisure-booking-software': { label: 'Logiciel réservation activités de loisirs', onlineSince: '2026-11-01' },
  'tools-body-shop-software': { label: 'Logiciel carrosserie', onlineSince: '2026-11-01' },
  'tools-inventory-management-software': { label: 'Logiciel de gestion de stock', onlineSince: '2026-11-01' },
  'tools-email-deliverability-check': { label: 'E-mails en spam : SPF, DKIM, DMARC', onlineSince: '2026-11-01' },
  'tools-website-health-check': { label: 'Tester mon site : 8 vérifications', onlineSince: '2026-11-02' },
  'tools-web-host-status': { label: 'Hébergeur en panne (hub)', onlineSince: '2026-11-01' },
  'tools-web-host-status-provider': { label: 'Hébergeur en panne : pages par hébergeur', onlineSince: '2026-11-01' },
  'tools-free-templates': { label: 'Modèles gratuits (hub)', onlineSince: '2026-11-01' },
  'tools-free-templates-plumber-quote': { label: 'Modèle devis plombier-chauffagiste', onlineSince: '2026-11-01' },
  'tools-free-templates-intervention-slip': { label: 'Modèle bon d’intervention', onlineSince: '2026-11-01' },
  'tools-free-templates-garage-repair-order': { label: 'Modèle ordre de réparation garage', onlineSince: '2026-11-01' },
  'tools-free-templates-electrician-commissioning-report': {
    label: 'Modèle PV de mise en service électricien',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-personal-trainer-client-review': {
    label: 'Modèle bilan client coach sportif',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-landscaping-maintenance-contract': {
    label: 'Modèle contrat d’entretien espaces verts',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-cleaning-schedule': {
    label: 'Modèle planning de passages nettoyage',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-inventory-sheet': { label: 'Modèle fiche d’inventaire', onlineSince: '2026-11-01' },
  'tools-free-templates-body-shop-claim-tracking': {
    label: 'Modèle suivi de sinistre carrosserie',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-carpentry-cutting-list': {
    label: 'Modèle fiche de débit menuiserie',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-training-attendance-sheet': {
    label: 'Modèle feuille d’émargement formation',
    onlineSince: '2026-11-01',
  },
  'tools-free-templates-booking-schedule': {
    label: 'Modèle planning de réservations loisirs',
    onlineSince: '2026-11-01',
  },
  'trade-websites': { label: 'Sites internet par métier (hub)', onlineSince: '2026-11-02' },
  'trade-websites-plumber': { label: 'Site internet pour plombier', onlineSince: '2026-11-02' },
}
