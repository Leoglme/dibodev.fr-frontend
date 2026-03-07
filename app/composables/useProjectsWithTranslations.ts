/**
 * Liste de projets avec overlay des traductions EN/ES (depuis GitHub).
 * FR = Storyblok uniquement. EN/ES = Storyblok (FR) + overlay par slug ; pas de traduction = fallback FR.
 */
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokLink } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { buildRelsSlugMap, mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
function hasUuid(arr: string[] | undefined): boolean {
  return Array.isArray(arr) && arr.some((s) => typeof s === 'string' && UUID_REGEX.test(s.trim()))
}

type ProjectTranslation = {
  name: string
  shortDescription: string
  longDescription: string
  metaTitle: string
  metaDescription: string
  categories: string[]
  sectors?: string[]
  stack: string[]
  tags: string[]
}

function projectKey(project: DibodevProject): string {
  return project.route.replace(/^\//, '').trim() || project.route
}

export function useProjectsWithTranslations() {
  const { locale } = useI18n()
  const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

  return useAsyncData<DibodevProject[]>(
    () => `projects-with-translations-${locale.value}`,
    async (): Promise<DibodevProject[]> => {
      try {
        const response = await StoryblokService.getStories<StoryblokProjectContent>(
          {
            starts_with: 'project/',
            resolve_links: 'url',
            resolve_relations: 'project.sectors,project.categories',
          },
          storyblokLanguage.value,
        )
        const resolvedLinks: Record<string, StoryblokLink> | undefined = response.links ?? undefined
        const relsSlugMap: Record<string, string> = buildRelsSlugMap(response.rels)
        let projects: DibodevProject[] = response.stories.map((story) =>
          mapStoryblokProjectToDibodevProject(story, resolvedLinks, relsSlugMap),
        )
        projects = projects.sort((a: DibodevProject, b: DibodevProject): number => {
          const timeA: number = new Date(a.date).getTime() || 0
          const timeB: number = new Date(b.date).getTime() || 0
          return timeB - timeA
        })

        const currentLocale: string = locale.value as string
        if (currentLocale === 'en' || currentLocale === 'es') {
          const translations: Record<string, ProjectTranslation> = await $fetch<Record<string, ProjectTranslation>>(
            `/api/translations/projects/${currentLocale}`,
          ).catch(() => ({}))
          projects = projects.map((p: DibodevProject): DibodevProject => {
            const key: string = projectKey(p)
            const t: ProjectTranslation | undefined = translations[key]
            if (!t) return p
            const useTranslationCategories = !hasUuid(t.categories)
            const useTranslationSectors = t.sectors != null && !hasUuid(t.sectors)
            return {
              ...p,
              name: t.name,
              shortDescription: t.shortDescription,
              longDescription: t.longDescription,
              metaTitle: t.metaTitle,
              metaDescription: t.metaDescription,
              categories: useTranslationCategories ? (t.categories as DibodevProject['categories']) : p.categories,
              sectors: useTranslationSectors ? (t.sectors as DibodevProject['sectors']) : p.sectors,
              stack: t.stack,
              tags: t.tags,
            }
          })
        }

        return projects
      } catch {
        return []
      }
    },
  )
}
