import type { Ref } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type {
  HomePageContentResponse,
  SaveFeaturedProjectsBody,
  SaveFeaturedProjectsResponse,
} from '~~/server/types/dashboard/homePage'
import { StoryblokProjectService } from '~/services/storyblokProjectService'

export type UseDashboardSiteEditorReturn = {
  projects: Ref<DibodevProject[]>
  homePageContent: Ref<HomePageContentResponse | null>
  loading: Ref<boolean>
  error: Ref<string>
  saving: Ref<boolean>
  loadSiteContent: (force?: boolean) => Promise<void>
  saveFeaturedProjects: (projectSlugs: string[]) => Promise<SaveFeaturedProjectsResponse>
}

/**
 * Site content edited from the dashboard: the published projects and the content of the home page.
 *
 * @returns {UseDashboardSiteEditorReturn} The projects, the saved and deployed content, and the actions.
 */
export function useDashboardSiteEditor(): UseDashboardSiteEditorReturn {
  const projects: Ref<DibodevProject[]> = useState('dashboard-site-editor-projects', (): DibodevProject[] => [])
  const homePageContent: Ref<HomePageContentResponse | null> = useState(
    'dashboard-site-editor-home-page',
    (): HomePageContentResponse | null => null,
  )
  const loading: Ref<boolean> = useState('dashboard-site-editor-loading', (): boolean => false)
  const error: Ref<string> = useState('dashboard-site-editor-error', (): string => '')
  const saving: Ref<boolean> = useState('dashboard-site-editor-saving', (): boolean => false)

  /**
   * Loads the published projects (Storyblok) and the home page content (repository and running build).
   *
   * @param {boolean} force - Reload even when data is already in memory.
   * @returns {Promise<void>}
   */
  async function loadSiteContent(force: boolean = false): Promise<void> {
    if (!force && homePageContent.value && projects.value.length > 0) return
    loading.value = true
    error.value = ''
    try {
      const [loadedProjects, loadedContent]: [DibodevProject[], HomePageContentResponse] = await Promise.all([
        StoryblokProjectService.getProjects(),
        $fetch<HomePageContentResponse>('/api/dashboard/home-page'),
      ])
      projects.value = loadedProjects
      homePageContent.value = loadedContent
    } catch (loadError: unknown) {
      error.value = loadError instanceof Error ? loadError.message : 'Impossible de charger le contenu du site.'
    } finally {
      loading.value = false
    }
  }

  /**
   * Saves the projects of the home page section, in display order: one commit, which deploys the site.
   *
   * @param {string[]} projectSlugs - Slugs of the projects to show, in display order.
   * @returns {Promise<SaveFeaturedProjectsResponse>} The saved content, and whether a commit was pushed.
   */
  async function saveFeaturedProjects(projectSlugs: string[]): Promise<SaveFeaturedProjectsResponse> {
    saving.value = true
    try {
      const body: SaveFeaturedProjectsBody = { projectSlugs }
      const response: SaveFeaturedProjectsResponse = await $fetch<SaveFeaturedProjectsResponse>(
        '/api/dashboard/home-page/featured-projects',
        { method: 'PUT', body },
      )
      if (homePageContent.value) homePageContent.value = { ...homePageContent.value, saved: response.saved }
      return response
    } finally {
      saving.value = false
    }
  }

  return { projects, homePageContent, loading, error, saving, loadSiteContent, saveFeaturedProjects }
}
