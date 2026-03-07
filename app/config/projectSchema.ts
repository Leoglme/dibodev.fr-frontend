/**
 * Génération du JSON-LD Schema.org pour les pages projet détaillées.
 * - SoftwareApplication si le projet est SaaS / application (catégorie)
 * - CreativeWork sinon
 * Injection via useHead (script type="application/ld+json").
 */

import type { DibodevProject } from '~/core/types/DibodevProject'
import type { CategoryKey } from '~/core/constants/projectEnums'
import { getProjectDescriptionForSchema } from '~/core/utils/projectDescriptionForSchema'

const SITE_URL: string = 'https://dibodev.fr'
const PERSON_ID: string = 'https://dibodev.fr/#person'

/** Valeurs standard schema.org pour applicationCategory (SoftwareApplication). */
export const SCHEMA_APPLICATION_CATEGORY = [
  'BusinessApplication',
  'GameApplication',
  'EducationApplication',
  'WebApplication',
  'MobileApplication',
] as const

export type SchemaApplicationCategory = (typeof SCHEMA_APPLICATION_CATEGORY)[number]

/** Mapping exhaustif : catégorie Storyblok (CategoryKey) → valeur schema.org. */
export const CATEGORY_TO_SCHEMA_APPLICATION_CATEGORY: Record<CategoryKey, SchemaApplicationCategory> = {
  'site-web': 'WebApplication',
  'application-mobile': 'MobileApplication',
  saas: 'BusinessApplication',
  'application-metier': 'BusinessApplication',
  logiciel: 'BusinessApplication',
  ia: 'BusinessApplication',
}

/** Valeur par défaut si une catégorie inconnue est reçue. */
const DEFAULT_SCHEMA_APPLICATION_CATEGORY: SchemaApplicationCategory = 'WebApplication'

type SchemaSoftwareApplication = {
  '@context': 'https://schema.org'
  '@type': 'SoftwareApplication'
  name: string
  description: string
  url?: string
  author: { '@id': string }
  datePublished?: string
  applicationCategory?: SchemaApplicationCategory
  operatingSystem?: string
  inLanguage?: string
}

type SchemaCreativeWork = {
  '@context': 'https://schema.org'
  '@type': 'CreativeWork'
  name: string
  description: string
  url?: string
  author: { '@id': string }
  datePublished?: string
  inLanguage?: string
}

/**
 * Détermine si le projet doit être typé SoftwareApplication (SaaS, app, logiciel, etc.).
 */
function isSoftwareApplication(project: DibodevProject): boolean {
  const catLower: string[] = project.categories.map((c: string) => c.toLowerCase())
  return catLower.some(
    (c: string) =>
      c === 'saas' || c.includes('application') || c.includes('logiciel') || c === 'ia' || c.includes('web app'),
  )
}

/**
 * Retourne la valeur schema.org pour applicationCategory à partir des catégories du projet.
 */
function getApplicationCategory(project: DibodevProject): SchemaApplicationCategory {
  const categories: CategoryKey[] = project.categories
  for (const cat of categories) {
    const mapped: SchemaApplicationCategory | undefined = CATEGORY_TO_SCHEMA_APPLICATION_CATEGORY[cat as CategoryKey]
    if (mapped !== undefined) {
      return mapped
    }
  }
  return DEFAULT_SCHEMA_APPLICATION_CATEGORY
}

/**
 * Construit le schéma JSON-LD pour une page projet.
 */
export function buildProjectSchema(
  project: DibodevProject,
  locale: string,
): SchemaSoftwareApplication | SchemaCreativeWork {
  const url: string | undefined =
    project.siteUrl ??
    (project.route ? `${SITE_URL}${project.route.startsWith('/') ? project.route : `/${project.route}`}` : undefined)
  const datePublished: string | undefined = project.date && project.date.trim() !== '' ? project.date : undefined
  const inLanguage: string = locale === 'fr' ? 'fr' : locale === 'es' ? 'es' : 'en'
  const description: string = getProjectDescriptionForSchema(project)

  const base: Omit<SchemaCreativeWork, '@context' | '@type'> = {
    name: project.name,
    description,
    ...(url !== undefined && { url }),
    author: { '@id': PERSON_ID },
    ...(datePublished !== undefined && { datePublished }),
    inLanguage,
  }

  if (isSoftwareApplication(project)) {
    const applicationCategory: SchemaApplicationCategory = getApplicationCategory(project)
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      ...base,
      applicationCategory,
      ...(project.stack.some((s: string) => /ios|android|mobile/i.test(s)) && {
        operatingSystem: 'Web, iOS, Android',
      }),
    } as SchemaSoftwareApplication
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    ...base,
  } as SchemaCreativeWork
}

/**
 * Retourne le JSON stringifié pour injection dans le head.
 */
export function buildProjectSchemaJson(project: DibodevProject, locale: string): string {
  return JSON.stringify(buildProjectSchema(project, locale))
}
