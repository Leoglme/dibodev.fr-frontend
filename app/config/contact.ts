/**
 * Contact info used site-wide (phone, email, profiles).
 * Single source of truth for tel:/mailto: links and display.
 */

/** Numéro au format affichage (ex. 06 xx xx xx xx). */
export const PHONE_DISPLAY: string = '06 42 19 38 12'

/** Numéro au format E.164 pour tel: (sans espaces, avec indicatif). */
export const PHONE_E164: string = '+33642193812'

/** Public contact email address. */
export const CONTACT_EMAIL: string = 'contact@dibodev.fr'

/** Public Malt profile, which also hosts the client reviews. */
export const MALT_PROFILE_URL: string = 'https://www.malt.fr/profile/leoguillaume2'
/** Google Business listing (map, opening hours and client reviews). */
export const GOOGLE_BUSINESS_URL: string = 'https://www.google.com/maps?cid=6567115254526097431'
/** Google Knowledge Graph entity of that listing (kgmid read on its Google panel on 27 October 2026). */
export const GOOGLE_KNOWLEDGE_GRAPH_URL: string = 'https://www.google.com/search?kgmid=/g/11zxfsxt6r'
/** Online booking page (Cal.com): a 30 min first call, by Google Meet or phone, chosen by the visitor. */
export const BOOKING_URL: string = 'https://cal.com/dibodev/premier-echange'
/** Short booking address shown as the link text. */
export const BOOKING_URL_DISPLAY: string = 'cal.com/dibodev'

/** Dibodev's listing in the France Num directory of the State (DGE), live since 26 October 2026. */
export const FRANCE_NUM_PROFILE_URL: string = 'https://www.francenum.gouv.fr/activateurs/dibodev'
/** France Num page that the brand guide asks activators to link from their website. */
export const FRANCE_NUM_ACTIVATOR_INFO_URL: string =
  'https://www.francenum.gouv.fr/experts-du-numerique/pourquoi-faire-appel-un-expert-du-numerique-reference-par-france-num'
/** Official "Activateur France Num" logo, shown as it is: the brand guide forbids any change to it. */
export const FRANCE_NUM_ACTIVATOR_LOGO_SRC: string = '/images/badges/logo-activateur-france-num.jpg'
