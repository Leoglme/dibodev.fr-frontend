import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

// Prices checked on the publishers' websites on 29 September 2026: check them twice a year and move `UPDATED_AT`.

export const BIKE_SHOP_PAGE_UPDATED_AT: string = '2026-09-29'

export const BIKE_SHOP_PAGE_PROJECT_SLUG: string = 'izidoor'

/** Transparent laptop and phone mockup of the Izidoor planning: shown without the browser frame. */
export const BIKE_SHOP_PAGE_SCREENSHOT_URL: string = '/images/tools/izidoor-booking-mockup.webp'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-professionnel-atelier-reparation-velos-2026',
  'developpement-logiciel-b2b-sur-mesure-prix',
]

export const BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Bike marking: new bikes since 1 January 2021, used bikes sold by businesses since 1 July 2021, FNUCI run by APIC. */
export const BIKE_MARKING_SOURCE: DibodevSourceReference = {
  name: 'jeunes.gouv.fr',
  url: 'https://www.jeunes.gouv.fr/le-point-sur-l-obligation-du-marquage-des-velos-460',
}

/** Bonus Réparation amounts for a standard bike: 15 € from 65 € of repair, 30 € from 120 €. */
export const BIKE_REPAIR_BONUS_SOURCE: DibodevSourceReference = {
  name: 'e-reparation.eco (Ecologic)',
  url: 'https://www.e-reparation.eco/appareil/velo-classique/',
}

/** Repair bonus refunds: within 15 days of the complete claim, plus 5 € per approved claim for the repairer. */
export const BIKE_REPAIR_BONUS_REFUND_SOURCE: DibodevSourceReference = {
  name: 'Ecologic',
  url: 'https://www.ecologic-france.com/ecologic/filiere-asl/fonds-reparation-bonusrepar-cycles.html',
}

/** Secure till software: certificate or, again since 21 February 2026, an individual statement from the publisher. */
export const BIKE_SHOP_TILL_SOURCE: DibodevSourceReference = {
  name: 'BOFiP-Impôts',
  url: 'https://bofip.impots.gouv.fr/bofip/15035-PGP.html/ACTU-2026-00073',
}
