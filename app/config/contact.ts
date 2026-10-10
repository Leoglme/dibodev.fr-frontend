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
/** Online booking page (Cal.com): a 30 min first call, by Google Meet or phone, chosen by the visitor. */
export const BOOKING_URL: string = 'https://cal.com/dibodev/premier-echange'
/** Short booking address shown as the link text. */
export const BOOKING_URL_DISPLAY: string = 'cal.com/dibodev'
