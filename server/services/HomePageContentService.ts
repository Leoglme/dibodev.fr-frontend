import type { PutGitHubFilesResult } from '~~/server/utils/githubContent'
import type { HomePageContent, SaveFeaturedProjectsResponse } from '~~/server/types/dashboard/homePage'
import { createError } from 'h3'
import { putGitHubFiles, readGitHubJsonFile } from '~~/server/utils/githubContent'
import { HOME_PAGE_CONTENT } from '~~/app/core/constants/homePageContent'
import { HomePageContentUtils } from '~~/app/core/utils/HomePageContentUtils'

/**
 * Home page content edited from the dashboard, stored in content/cms/home-page.json on GitHub: each save is one commit, which deploys the site.
 */
export class HomePageContentService {
  static readonly FILE_PATH: string = 'content/cms/home-page.json'

  /**
   * Returns the content bundled in the running build: what the site shows now.
   * @returns {HomePageContent} The deployed content.
   */
  static getDeployedContent(): HomePageContent {
    return HOME_PAGE_CONTENT
  }

  /**
   * Reads the content committed on the repository: what the next deployment publishes.
   * @param {string} token - GitHub token.
   * @param {string} repo - Repository in "owner/repo" form.
   * @returns {Promise<HomePageContent>} The saved content, empty when the file does not exist yet.
   * @throws {H3Error} 502 when GitHub fails to return the file.
   */
  static async getSavedContent(token: string, repo: string): Promise<HomePageContent> {
    return HomePageContentUtils.normalize(await readGitHubJsonFile<unknown>(token, repo, this.FILE_PATH))
  }

  /**
   * Checks a selection sent by the dashboard: one to twelve distinct, well-formed project slugs.
   * @param {unknown} projectSlugs - The value received in the request body.
   * @returns {string[]} The checked slugs, in the received order.
   * @throws {H3Error} 400 when the selection is empty, too long, duplicated or malformed.
   */
  static parseFeaturedProjectSlugs(projectSlugs: unknown): string[] {
    const maximumCount: number = HomePageContentUtils.MAXIMUM_FEATURED_PROJECTS_COUNT
    const isValidSelection: boolean =
      Array.isArray(projectSlugs) &&
      projectSlugs.length > 0 &&
      projectSlugs.length <= maximumCount &&
      projectSlugs.every((slug: unknown): boolean => HomePageContentUtils.isProjectSlug(slug)) &&
      new Set(projectSlugs).size === projectSlugs.length
    if (!isValidSelection) {
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid body: projectSlugs must hold 1 to ${maximumCount} distinct project slugs.`,
      })
    }
    return projectSlugs as string[]
  }

  /**
   * Saves the projects of the home page section; a changed selection is pushed as one commit, which starts a deployment.
   * @param {string} token - GitHub token.
   * @param {string} repo - Repository in "owner/repo" form.
   * @param {string[]} projectSlugs - Checked slugs of the projects to show, in display order.
   * @returns {Promise<SaveFeaturedProjectsResponse>} The saved content, and whether a commit was pushed.
   * @throws {H3Error} 502 when GitHub fails: nothing is pushed then.
   */
  static async saveFeaturedProjects(
    token: string,
    repo: string,
    projectSlugs: string[],
  ): Promise<SaveFeaturedProjectsResponse> {
    const currentFile: Record<string, unknown> = await readGitHubJsonFile<unknown>(token, repo, this.FILE_PATH)
    const currentSlugs: string[] = HomePageContentUtils.normalize(currentFile).featuredProjectSlugs
    const saved: HomePageContent = { featuredProjectSlugs: projectSlugs }
    if (HomePageContentUtils.hasSameProjectSlugs(currentSlugs, projectSlugs)) {
      return { saved, hasNewCommit: false }
    }

    // Other keys of the file are kept.
    const updatedFile: Record<string, unknown> = { ...currentFile, ...saved }
    const pushResult: PutGitHubFilesResult = await putGitHubFiles({
      token,
      repo,
      message: `chore(content): set home page projects → ${projectSlugs.join(', ')}`,
      files: [{ path: this.FILE_PATH, content: `${JSON.stringify(updatedFile, null, 2)}\n` }],
    })
    if (!pushResult.ok) {
      throw createError({ statusCode: 502, statusMessage: pushResult.message || 'Failed to push to GitHub' })
    }
    return { saved, hasNewCommit: true }
  }
}
