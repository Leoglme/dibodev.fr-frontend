import type { DibodevBlogTradeArticle } from '~/core/types/DibodevBlogTrade'

/** Trades with an article of their own, in the order of the "by trade" list of the blog page. */
export const BLOG_TRADE_ARTICLES: DibodevBlogTradeArticle[] = [
  { key: 'construction', articleSlug: 'artisan-btp-gerer-ses-chantiers-sans-excel-avec-un-outil-dedie' },
  { key: 'plumber', articleSlug: 'logiciel-gestion-plombiers-saas-sur-mesure-2026' },
  { key: 'electrician', articleSlug: 'electricien-outil-sur-mesure-devis-interventions-factures' },
  { key: 'heatingEngineer', articleSlug: 'chauffagiste-contrats-entretien-outil-sur-mesure' },
  { key: 'locksmith', articleSlug: 'serrurier-rennes-depannage-outil-sur-mesure' },
  { key: 'landscaper', articleSlug: 'paysagiste-outil-metier-devis-chantiers-plannings' },
  { key: 'carpenter', articleSlug: 'site-web-sur-mesure-menuiserie-2026' },
  { key: 'garage', articleSlug: 'garagiste-outil-sur-mesure-rendez-vous-devis-suivi-vehicules' },
  { key: 'drivingSchool', articleSlug: 'logiciel-gestion-auto-ecole-planning-eleves-heures' },
  { key: 'bikeShop', articleSlug: 'site-web-professionnel-atelier-reparation-velos-2026' },
  { key: 'coach', articleSlug: 'coach-sportif-limiter-les-annulations-avec-un-outil-de-reservation-en-ligne' },
  { key: 'bakery', articleSlug: 'boulangerie-artisanale-site-web-sur-mesure-2026' },
  { key: 'florist', articleSlug: 'site-web-boutique-fleurs-rennes' },
  { key: 'restaurant', articleSlug: 'optimiser-site-web-restaurant-reservations-directes' },
  { key: 'localShop', articleSlug: 'site-web-commerce-proximite-2026' },
]

/** Trades whose article cover illustrates the top of the blog page, in display order. */
export const BLOG_HERO_TRADE_KEYS: string[] = ['bakery', 'construction', 'florist', 'plumber', 'landscaper', 'coach']
