import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'

/** Route name of the service page (`app/pages/php-update-service.vue`). */
export const PHP_UPDATE_SERVICE_ROUTE_NAME: string = 'php-update-service'

/** French path of the page, the `@id` of its Service JSON-LD. */
export const PHP_UPDATE_SERVICE_PAGE_PATH: string = '/mise-a-jour-php-site-logiciel'

/** `topic` query value that makes the contact form open with the "update my site" message. */
export const PHP_UPDATE_CONTACT_TOPIC: string = 'php-update'

/** Kinds of service declared in the JSON-LD, in English as schema.org readers expect. */
export const PHP_UPDATE_SERVICE_TYPES: string[] = [
  'PHP version upgrade',
  'WordPress maintenance',
  'Website security update',
  'Business software maintenance',
]

/** Prices of the JSON-LD offers in euros, in the order of the cards of the page (0 = free diagnosis). */
export const PHP_UPDATE_SERVICE_OFFER_PRICES_EUR: number[] = [0, 190, 390, 690]

/** Articles listed at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const PHP_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS: string[] = [
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire',
  'changer-version-php-ovh-faille-octobre-2026',
  'changer-version-php-o2switch-faille-octobre-2026',
  'changer-version-php-ionos-faille-octobre-2026',
  'changer-version-php-hostinger-faille-octobre-2026',
  'changer-version-php-infomaniak-faille-octobre-2026',
  'changer-version-php-planethoster-faille-octobre-2026',
]

/** Teaser of the service, shown under the checker and at the end of the PHP articles. */
export const PHP_UPDATE_SERVICE_TEASER: DibodevToolTeaserContent = {
  toolId: 'php-update-service',
  routeName: PHP_UPDATE_SERVICE_ROUTE_NAME,
  icon: 'Wrench',
  wording: {
    fr: {
      emphasizedIntro: 'Vous préférez que je m’en occupe ?',
      text: 'Mise à jour de PHP et de votre site à distance, après sauvegarde et test sur une copie. Diagnostic gratuit, intervention dès 190 €, réponse sous 24 h.',
      linkLabel: 'Voir l’offre et les prix',
      listLabel: 'Mise à jour PHP : offre et prix',
    },
    en: {
      emphasizedIntro: 'Rather have me handle it?',
      text: 'PHP and website update done remotely, after a backup and a test on a copy. Free diagnosis, work from €190, reply within 24 hours.',
      linkLabel: 'See the offer and prices',
      listLabel: 'PHP update: offer and prices',
    },
    es: {
      emphasizedIntro: '¿Prefieres que me ocupe yo?',
      text: 'Actualización de PHP y de tu web a distancia, tras una copia de seguridad y una prueba en una copia. Diagnóstico gratuito, intervención desde 190 €, respuesta en 24 h.',
      linkLabel: 'Ver la oferta y los precios',
      listLabel: 'Actualización de PHP: oferta y precios',
    },
  },
}
