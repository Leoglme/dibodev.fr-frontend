import type { H3Event } from 'h3'
import axios from 'axios'
import { createError } from 'h3'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import type {
  DeployHeadCommit,
  DeployRun,
  DeployRunStatus,
  GithubCommitPayload,
  GithubWorkflowRunPayload,
  GithubWorkflowRunsPayload,
} from '~~/server/types/dashboard/deploy'

export type RepositoryCounts = {
  public: number
  private: number
  organization: number
}

type GitHubUser = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string | null
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  notification_email: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
  private_gists: number
  total_private_repos: number
  owned_private_repos: number
  disk_usage: number
  collaborators: number
  two_factor_authentication: boolean
  plan: {
    name: string
    space: number
    collaborators: number
    private_repos: number
  }
}

type GitHubOrgListItem = {
  login: string
  id: number
  node_id: string
  url: string
  repos_url: string
  events_url: string
  hooks_url: string
  issues_url: string
  members_url: string
  public_members_url: string
  avatar_url: string
  description: string | null
}

export class GithubService {
  private static readonly githubUsername: string = 'Leoglme'

  private static getAxiosConfig(event: H3Event): AxiosRequestConfig {
    const config = useRuntimeConfig(event)
    if (!config.githubToken) {
      throw createError({
        statusCode: 500,
        statusMessage: 'GitHub token is not configured',
      })
    }

    return {
      headers: {
        Authorization: `Bearer ${config.githubToken}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  }

  /**
   * Get count of user's public repositories
   */
  static async getPublicReposCount(event: H3Event): Promise<number> {
    try {
      const axiosConfig: AxiosRequestConfig = this.getAxiosConfig(event)
      const response: AxiosResponse<GitHubUser> = await axios.get(
        `https://api.github.com/users/${this.githubUsername}`,
        axiosConfig,
      )
      return response.data.public_repos || 0
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError
      throw createError({
        statusCode: axiosError.response?.status || 500,
        statusMessage: `Failed to fetch public repos: ${axiosError.message}`,
      })
    }
  }

  /**
   * Get count of user's private repositories
   */
  static async getPrivateReposCount(event: H3Event): Promise<number> {
    try {
      const axiosConfig: AxiosRequestConfig = this.getAxiosConfig(event)
      // Verify if the token belongs to the requested user
      const userResponse: AxiosResponse<GitHubUser> = await axios.get('https://api.github.com/user', axiosConfig)
      if (userResponse.data.login !== this.githubUsername) {
        throw createError({
          statusCode: 403,
          statusMessage: 'Token not authorized for this user',
        })
      }

      return userResponse.data.total_private_repos || 0
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError
      throw createError({
        statusCode: axiosError.response?.status || 500,
        statusMessage: `Failed to fetch private repos: ${axiosError.message}`,
      })
    }
  }

  /**
   * Get count of organization
   */
  static async getOrganizationCount(event: H3Event): Promise<number> {
    try {
      const axiosConfig: AxiosRequestConfig = this.getAxiosConfig(event)
      const orgsResponse: AxiosResponse<GitHubOrgListItem[]> = await axios.get(
        `https://api.github.com/users/${this.githubUsername}/orgs?per_page=100`,
        axiosConfig,
      )
      const orgs: GitHubOrgListItem[] = orgsResponse.data
      const excludedWords: string[] = ['epitech']
      const filteredOrgs = orgs.filter((org) => !excludedWords.some((word) => org.login.toLowerCase().includes(word)))
      return filteredOrgs.length
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError
      throw createError({
        statusCode: axiosError.response?.status || 500,
        statusMessage: `Failed to fetch organization repos: ${axiosError.message}`,
      })
    }
  }

  /**
   * Get all repository counts in a single object
   */
  static async getAllReposCounts(event: H3Event): Promise<RepositoryCounts> {
    try {
      const [publicCount, privateCount, orgCount] = await Promise.all([
        this.getPublicReposCount(event),
        this.getPrivateReposCount(event),
        this.getOrganizationCount(event),
      ])

      return {
        public: publicCount,
        private: privateCount,
        organization: orgCount,
      }
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError
      throw createError({
        statusCode: axiosError.response?.status || 500,
        statusMessage: `Failed to fetch repository counts: ${axiosError.message}`,
      })
    }
  }

  /**
   * Latest commit of the default branch of a repository.
   *
   * @param {H3Event} event - Request event, used to read the GitHub token.
   * @param {string} repo - Repository as owner/name.
   * @returns {Promise<DeployHeadCommit | null>} The commit, or null when GitHub cannot be read.
   */
  static async getHeadCommit(event: H3Event, repo: string): Promise<DeployHeadCommit | null> {
    try {
      const response: AxiosResponse<GithubCommitPayload> = await axios.get(
        `https://api.github.com/repos/${repo}/commits/HEAD`,
        this.getAxiosConfig(event),
      )
      const commit: GithubCommitPayload = response.data
      if (!commit.sha) return null
      return {
        sha: commit.sha,
        message: commit.commit?.message?.split('\n')[0] ?? null,
        date: commit.commit?.committer?.date ?? commit.commit?.author?.date ?? null,
      }
    } catch {
      return null
    }
  }

  /**
   * Latest run of the repository workflows (build and deployment).
   *
   * @param {H3Event} event - Request event, used to read the GitHub token.
   * @param {string} repo - Repository as owner/name.
   * @returns {Promise<DeployRun | null>} The run, or null when the token cannot read GitHub Actions.
   */
  static async getLatestWorkflowRun(event: H3Event, repo: string): Promise<DeployRun | null> {
    try {
      const response: AxiosResponse<GithubWorkflowRunsPayload> = await axios.get(
        `https://api.github.com/repos/${repo}/actions/runs?per_page=1`,
        this.getAxiosConfig(event),
      )
      const run: GithubWorkflowRunPayload | undefined = response.data.workflow_runs?.[0]
      if (!run) return null
      const knownStatuses: DeployRunStatus[] = ['queued', 'in_progress', 'completed']
      const status: DeployRunStatus =
        knownStatuses.find((knownStatus: DeployRunStatus): boolean => knownStatus === run.status) ?? 'unknown'
      return {
        status,
        conclusion: run.conclusion ?? null,
        url: run.html_url ?? null,
        startedAt: run.run_started_at ?? null,
        finishedAt: status === 'completed' ? (run.updated_at ?? null) : null,
        title: run.display_title ?? null,
      }
    } catch {
      return null
    }
  }
}
