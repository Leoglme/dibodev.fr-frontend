import type { DibodevDrivingSchoolRuleSourceKey, DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'

// Prices checked on the publishers' websites on 28-29 September 2026: check them twice a year and move `UPDATED_AT`.

export const DRIVING_SCHOOL_PAGE_UPDATED_AT: string = '2026-09-29'

export const DRIVING_SCHOOL_PAGE_PROJECT_SLUG: string = 'driving-school'

/** The planning screen only: the students screen of the project shows real email addresses. */
export const DRIVING_SCHOOL_PAGE_SCREENSHOT_URL: string =
  'https://a.storyblok.com/f/290162729601023/1919x1078/c4ee5bd6df/capture-d-ecran-2026-03-31-002135.png'

/** Articles linked at the bottom of the page; the untranslated ones are left out of /en and /es automatically. */
export const DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'logiciel-gestion-auto-ecole-planning-eleves-heures',
  'logiciel-rdv-auto-ecole-reservation-en-ligne',
  'developpement-logiciel-b2b-sur-mesure-prix',
]

export const DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS: number = 2

/** Official sources of the rules section, the same in every language. */
export const DRIVING_SCHOOL_RULE_SOURCES: Record<DibodevDrivingSchoolRuleSourceKey, DibodevSourceReference> = {
  logbook: {
    name: 'Codes Rousseau, Le Mag Pro',
    url: 'https://pro.codesrousseau.fr/le-mag-pro/09/1127-api-livret-numerique-et-calcul-des-etp.html',
  },
  testSlots: {
    name: 'La Tribune des Auto-Écoles',
    url: 'https://www.tribune-auto-ecoles.fr/actualite-auto-ecole/magazine-enseignant-de-la-conduite/formations/examens-t-12/penurie-places-examen-profession-unit-pour-interpeller-etat-a-1046/',
  },
  standardContract: {
    name: 'Légifrance',
    url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000050389221',
  },
  trainingAccount: {
    name: 'Mon Compte Formation',
    url: 'https://www.moncompteformation.gouv.fr/espace-public/evolution-des-regles-deligibilite-au-cpf-des-permis-de-conduire',
  },
  payments: E_INVOICING_SOURCE,
  accompaniedDriving: {
    name: 'Service-Public.fr',
    url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F2826',
  },
}
