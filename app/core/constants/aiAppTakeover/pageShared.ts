import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

// Public figures checked on 11 October 2026 (Veracode report, CVE record, Supabase and Lovable documentation): check them twice a year.

/** Path of the page in each language, used by the Service JSON-LD and the links of the articles. */
export const AI_APP_TAKEOVER_PAGE_PATHS: Record<SupportedLocale, string> = {
  fr: '/reprendre-application-lovable-bolt',
  en: '/en/take-over-lovable-bolt-app',
  es: '/es/recuperar-aplicacion-lovable-bolt',
}

/** Articles linked at the bottom of the page; the ones not published yet are left out automatically. */
export const AI_APP_TAKEOVER_RELATED_ARTICLE_SLUGS: string[] = [
  'reprendre-application-vibe-coding',
  'application-metier-no-code-ia-limites',
  'application-metier-sur-mesure-guide-tpe-pme',
]

/** Kinds of service declared in the JSON-LD, in English as schema.org readers expect. */
export const AI_APP_TAKEOVER_SERVICE_TYPES: string[] = [
  'AI-generated application takeover',
  'Code audit',
  'Web application security hardening',
  'Custom software development',
]

/** Veracode, 2025 GenAI Code Security Report (October 2025 update): flaws in 45 % of the tests, over 100 models. */
export const VERACODE_REPORT_SOURCE: DibodevSourceReference = {
  name: 'Veracode',
  url: 'https://www.veracode.com/resources/analyst-reports/2025-genai-code-security-report/',
}

/** CVE-2025-48757, published 30 May 2025, CVSS 9.3: insufficient row-level security on Lovable-generated sites, disputed by Lovable. */
export const LOVABLE_CVE_SOURCE: DibodevSourceReference = {
  name: 'cve.org',
  url: 'https://www.cve.org/CVERecord?id=CVE-2025-48757',
}

/** Supabase: a table in an exposed schema without row-level security is readable and writable by any role granted on it. */
export const SUPABASE_RLS_SOURCE: DibodevSourceReference = {
  name: 'Documentation Supabase',
  url: 'https://supabase.com/docs/guides/database/postgres/row-level-security',
}

/** Lovable credits: build messages cost credits (0.50 to 2), stopped requests are charged for the work done, monthly credits expire after two months. */
export const LOVABLE_CREDITS_SOURCE: DibodevSourceReference = {
  name: 'Documentation Lovable',
  url: 'https://docs.lovable.dev/user-guides/credits',
}
