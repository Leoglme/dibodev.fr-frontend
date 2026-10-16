import type { SupportedLocale } from '~/core/constants/categorySlugs'

export const TRANSLATED_PAGE_ANCHOR_IDS_BY_FRENCH_ID: Readonly<Record<string, Record<SupportedLocale, string>>> = {
  logiciels: { fr: 'logiciels', en: 'software', es: 'programas' },
  reglementation: { fr: 'reglementation', en: 'rules', es: 'normativa' },
  regles: { fr: 'regles', en: 'rules', es: 'reglas' },
  ailleurs: { fr: 'ailleurs', en: 'elsewhere', es: 'fuera' },
  intercommunalites: { fr: 'intercommunalites', en: 'intercommunalites', es: 'mancomunidades' },
}
