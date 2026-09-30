export type DeployRunStatus = 'queued' | 'in_progress' | 'completed' | 'unknown'

export type DeployRun = {
  status: DeployRunStatus
  conclusion: string | null
  url: string | null
  startedAt: string | null
  finishedAt: string | null
  title: string | null
}

export type DeployHeadCommit = {
  sha: string
  message: string | null
  date: string | null
}

export type DeployStatusResponse = {
  configured: boolean
  buildCommit: string | null
  headCommit: string | null
  headMessage: string | null
  headDate: string | null
  synced: boolean | null
  run: DeployRun | null
  checkedAt: string
}

export type DeployStatusCacheEntry = {
  value: DeployStatusResponse
  expiresAt: number
}

export type GithubCommitSignature = {
  date?: string
}

export type GithubCommitDetails = {
  message?: string
  committer?: GithubCommitSignature
  author?: GithubCommitSignature
}

export type GithubCommitPayload = {
  sha?: string
  commit?: GithubCommitDetails
}

export type GithubWorkflowRunPayload = {
  status?: string
  conclusion?: string | null
  html_url?: string
  run_started_at?: string
  updated_at?: string
  display_title?: string
}

export type GithubWorkflowRunsPayload = {
  workflow_runs?: GithubWorkflowRunPayload[]
}
