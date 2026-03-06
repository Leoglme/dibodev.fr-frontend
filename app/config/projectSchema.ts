/**
 * Génération du JSON-LD Schema.org pour les pages projet détaillées.
 * - SoftwareApplication si le projet est SaaS / application (catégorie)
 * - CreativeWork sinon
 * Injection via useHead (script type="application/ld+json").
 */

import type { DibodevProject } from '~/core/types/DibodevProject'

const SITE_URL = 'https://dibodev.fr'
const PERSON_ID = 'https://dibodev.fr/#person'

type SchemaSoftwareApplication = {
  '@context': 'https://schema.org'
  '@type': 'SoftwareApplication'
  name: string
  description: string
  url?: string
  author: { '@id': string }
  datePublished?: string
  applicationCategory?: string
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
 * Détermine si le projet doit être typé SoftwareApplication (SaaS, app, logiciel).
 */
function isSoftwareApplication(project: DibodevProject): boolean {
  const catLower = project.categories.map((c: string) => c.toLowerCase())
  return catLower.some(
    (c) => c === 'saas' || c.includes('application') || c.includes('logiciel') || c.includes('web app'),
  )
}

/**
 * Construit le schéma JSON-LD pour une page projet.
 * Choix déterministe : category SaaS/Application/Logiciel => SoftwareApplication, sinon CreativeWork.
 */
export function buildProjectSchema(
  project: DibodevProject,
  locale: string,
): SchemaSoftwareApplication | SchemaCreativeWork {
  const url =
    project.siteUrl ??
    (project.route ? `${SITE_URL}${project.route.startsWith('/') ? project.route : `/${project.route}`}` : undefined)
  const datePublished = project.date && project.date.trim() !== '' ? project.date : undefined
  const inLanguage = locale === 'fr' ? 'fr' : locale === 'es' ? 'es' : 'en'

  const base = {
    name: project.name,
    description: project.longDescription || project.shortDescription,
    ...(url && { url }),
    author: { '@id': PERSON_ID },
    ...(datePublished && { datePublished }),
    inLanguage,
  }

  if (isSoftwareApplication(project)) {
    const appCat = project.categories.includes('SaaS')
      ? 'Application'
      : (project.categories.find(
          (c) => c.toLowerCase().includes('application') || c.toLowerCase().includes('logiciel'),
        ) ?? 'WebApplication')
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      ...base,
      applicationCategory: appCat,
      ...(project.stack.some((s) => /ios|android|mobile/i.test(s)) && { operatingSystem: 'Web, iOS, Android' }),
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
