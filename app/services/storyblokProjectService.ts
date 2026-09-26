import type { DibodevProject, DibodevProjectTranslation } from '~/core/types/DibodevProject'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokStoryResponse, StoryblokVersion } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { buildRelsSlugMap, mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'

const PROJECT_FOLDER: string = 'project/'
const PROJECT_RELATIONS: string = 'project.sectors,project.categories'
const UUID_REGEX: RegExp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

/**
 * Service for fetching project pages from Storyblok.
 */
export class StoryblokProjectService {
  /**
   * Fetches a project (always FR in Storyblok, with its categories and sectors) and overlays its EN/ES translation.
   *
   * @param {string} projectSlug - Project slug, without the project folder prefix.
   * @param {StoryblokVersion} version - "published", or "draft" inside the Storyblok visual editor.
   * @param {string} locale - Active i18n locale.
   * @param {string} [language] - Storyblok language code, omitted for the default language.
   * @returns {Promise<DibodevProject | null>} The project in the requested locale, or null when Storyblok cannot return it.
   */
  public static async getLocalizedProject(
    projectSlug: string,
    version: StoryblokVersion,
    locale: string,
    language?: string,
  ): Promise<DibodevProject | null> {
    const storyblokSlug: string = `${PROJECT_FOLDER}${projectSlug}`
    try {
      const storyResponse: StoryblokStoryResponse<StoryblokProjectContent> =
        await StoryblokService.getStoryBySlug<StoryblokProjectContent>(storyblokSlug, version, language, {
          resolve_relations: PROJECT_RELATIONS,
        })
      const relsSlugMap: Record<string, string> = buildRelsSlugMap(storyResponse.rels)
      const project: DibodevProject = mapStoryblokProjectToDibodevProject(storyResponse.story, undefined, relsSlugMap)
      if (locale !== 'en' && locale !== 'es') return project

      const translations: Record<string, DibodevProjectTranslation> = await $fetch<
        Record<string, DibodevProjectTranslation>
      >(`/api/translations/projects/${locale}`).catch(() => ({}))
      const translation: DibodevProjectTranslation | undefined = translations[storyblokSlug]
      if (!translation) return project

      const useTranslatedCategories: boolean = !this.hasUuid(translation.categories)
      const useTranslatedSectors: boolean = translation.sectors != null && !this.hasUuid(translation.sectors)

      return {
        ...project,
        name: translation.name,
        shortDescription: translation.shortDescription,
        longDescription: translation.longDescription,
        metaTitle: translation.metaTitle,
        metaDescription: translation.metaDescription,
        categories: useTranslatedCategories
          ? (translation.categories as DibodevProject['categories'])
          : project.categories,
        sectors: useTranslatedSectors ? (translation.sectors as DibodevProject['sectors']) : project.sectors,
        stack: translation.stack,
        tags: translation.tags,
      }
    } catch {
      return null
    }
  }

  /**
   * Tells whether a translated category or sector list still holds Storyblok UUIDs instead of slugs.
   *
   * @param {string[] | undefined} values - Translated category or sector values.
   * @returns {boolean} True when at least one value is a UUID.
   */
  private static hasUuid(values: string[] | undefined): boolean {
    return Array.isArray(values) && values.some((value: string): boolean => UUID_REGEX.test(String(value).trim()))
  }
}
