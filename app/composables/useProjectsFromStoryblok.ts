/**
 * Composable partagé pour charger la liste des projets depuis Storyblok.
 * Une seule clé et un seul handler pour éviter le warning useAsyncData "different handler"
 * (page index et page secteur utilisent ce composable).
 */
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import { StoryblokService } from '~/services/storyblokService'
import { buildRelsSlugMap, mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'

export function useProjectsFromStoryblok() {
  const { locale } = useI18n()
  const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

  return useAsyncData<DibodevProject[]>(
    () => `projects-storyblok-list-${locale.value}`,
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
        const projects: DibodevProject[] = response.stories.map((story) =>
          mapStoryblokProjectToDibodevProject(story, resolvedLinks, relsSlugMap),
        )
        return projects.sort((a: DibodevProject, b: DibodevProject): number => {
          const timeA: number = new Date(a.date).getTime() || 0
          const timeB: number = new Date(b.date).getTime() || 0
          return timeB - timeA
        })
      } catch {
        return []
      }
    },
  )
}
