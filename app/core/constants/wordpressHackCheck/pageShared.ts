import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type {
  DibodevWordPressHackGuideKey,
  DibodevWordPressHackSourceKey,
  DibodevWordPressHackVerdict,
} from '~/core/types/DibodevWordPressHackCheck'
import { PHP_UPDATE_SERVICE_ROUTE_NAME, PHP_UPDATE_SERVICE_TEASER } from '~/core/constants/phpUpdateService/pageShared'

export const WORDPRESS_HACK_CHECK_PAGE_UPDATED_AT: string = '2026-10-26'

export const WORDPRESS_HACK_CHECK_API_PATH: string = '/api/tools/wordpress-hack-check'

export const WORDPRESS_HACK_CHECKER_ANCHOR_ID: string = 'verification'

export const WORDPRESS_HACK_CHECK_ROUTE_NAME: string = 'tools-wordpress-hack-check'

export const WORDPRESS_HACK_CONTACT_TOPIC: string = 'wordpress-hack'

export const WORDPRESS_HACK_VERDICTS: DibodevWordPressHackVerdict[] = [
  'suspiciousSignals',
  'vulnerablePlugin',
  'outdatedCore',
  'cleanSurface',
  'notWordPress',
  'unknown',
]

export const WORDPRESS_HACK_GUIDE_KEYS: DibodevWordPressHackGuideKey[] = ['checks', 'updraftplus', 'restore']

export const WORDPRESS_HACK_GUIDE_SLUGS: Record<DibodevWordPressHackGuideKey, string> = {
  checks: 'site-wordpress-pirate-verifications-a-faire-aujourd-hui',
  updraftplus: 'updraftplus-revoquer-updraftcentral-verifier-sauvegardes',
  restore: 'restaurer-site-wordpress-apres-piratage',
}

export const WORDPRESS_HACK_VERDICTS_WITH_GUIDES: DibodevWordPressHackVerdict[] = [
  'suspiciousSignals',
  'vulnerablePlugin',
  'outdatedCore',
  'cleanSurface',
]

export const WORDPRESS_HACK_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  WORDPRESS_HACK_GUIDE_SLUGS.checks,
  WORDPRESS_HACK_GUIDE_SLUGS.updraftplus,
  WORDPRESS_HACK_GUIDE_SLUGS.restore,
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire',
  'reprendre-application-vibe-coding',
]

export const WORDPRESS_HACK_SOURCES: Record<DibodevWordPressHackSourceKey, string> = {
  teamUpdraftIncident: 'https://teamupdraft.com/blog/security-incident-october-2026/',
  patchstackUpdraftCentral: 'https://patchstack.com/articles/updraftcentral-key-compromise-wordpress-backdoors/',
  nethembaAnalysis: 'https://nethemba.com/updraftcentral-backdoor-analysis/',
  bleepingComputerUpdraftCentral:
    'https://www.bleepingcomputer.com/news/security/stolen-updraftcentral-keys-used-to-backdoor-wordpress-sites',
  itConnect: 'https://www.it-connect.fr/updraftplus-updraftcentral-porte-derobee-it-connect/',
  cnil: 'https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles',
}

export const WORDPRESS_CLEANUP_SERVICE_TEASER: DibodevToolTeaserContent = {
  toolId: PHP_UPDATE_SERVICE_TEASER.toolId,
  routeName: PHP_UPDATE_SERVICE_ROUTE_NAME,
  icon: 'Wrench',
  wording: {
    fr: {
      emphasizedIntro: 'Vous préférez que je m’en occupe ?',
      text: 'Vérification de l’intérieur, nettoyage, clés et mots de passe changés, mises à jour faites, compte rendu écrit. Diagnostic gratuit, mise à jour dès 190 €, nettoyage sur devis, réponse sous 24 h.',
      linkLabel: 'Voir l’offre et les prix',
      listLabel: 'Site WordPress : intervention à distance',
    },
    en: {
      emphasizedIntro: 'Rather have me handle it?',
      text: 'Check from the inside, clean-up, keys and passwords changed, updates done, written report. Free diagnosis, updates from €190, clean-up on quote, reply within 24 hours.',
      linkLabel: 'See the offer and prices',
      listLabel: 'WordPress site: remote work',
    },
    es: {
      emphasizedIntro: '¿Prefieres que me ocupe yo?',
      text: 'Revisión desde dentro, limpieza, claves y contraseñas cambiadas, actualizaciones hechas, informe por escrito. Diagnóstico gratuito, actualización desde 190 €, limpieza con presupuesto, respuesta en 24 h.',
      linkLabel: 'Ver la oferta y los precios',
      listLabel: 'Web WordPress: intervención a distancia',
    },
  },
}
