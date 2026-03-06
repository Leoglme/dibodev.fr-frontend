/**
 * GitHub Contents API: get and update a file in the repo.
 * Used for translation JSON files (content/translations/*.json).
 */

const GITHUB_API_BASE: string = 'https://api.github.com'

export type GitHubFileResponse = {
  content: string
  sha: string
  encoding: string
}

export type GetFileResult =
  | { ok: true; content: string; sha: string }
  | { ok: false; statusCode: number; message: string }

export type PutFileParams = {
  token: string
  repo: string
  path: string
  content: string
  message: string
  sha?: string
}

export type PutFileResult = { ok: true } | { ok: false; statusCode: number; message: string }

/**
 * Get file content from GitHub repo (Contents API).
 * Returns decoded UTF-8 content; repo must be "owner/repo".
 */
export async function getGitHubFile(token: string, repo: string, path: string): Promise<GetFileResult> {
  const url: string = `${GITHUB_API_BASE}/repos/${repo}/contents/${path}`
  const res: Response = await fetch(url, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (res.status === 404) {
    return { ok: false, statusCode: 404, message: 'File not found' }
  }

  if (!res.ok) {
    const text: string = await res.text()
    return {
      ok: false,
      statusCode: res.status,
      message: text || `GitHub API ${res.status}`,
    }
  }

  const data: GitHubFileResponse = (await res.json()) as GitHubFileResponse
  if (data.encoding !== 'base64') {
    return { ok: false, statusCode: 500, message: 'Unsupported encoding' }
  }

  const decoded: string = Buffer.from(data.content, 'base64').toString('utf-8')
  return { ok: true, content: decoded, sha: data.sha }
}

/**
 * Create or update a file in the repo (PUT Contents API).
 * If sha is provided, updates existing file; otherwise creates.
 */
export async function putGitHubFile(params: PutFileParams): Promise<PutFileResult> {
  const token: string = params.token
  const repo: string = params.repo
  const path: string = params.path
  const content: string = params.content
  const message: string = params.message
  const sha: string | undefined = params.sha
  const url: string = `${GITHUB_API_BASE}/repos/${repo}/contents/${path}`
  const body: { message: string; content: string; sha?: string } = {
    message,
    content: Buffer.from(content, 'utf-8').toString('base64'),
  }
  if (sha) body.sha = sha

  const res: Response = await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const text: string = await res.text()
    return {
      ok: false,
      statusCode: res.status,
      message: text || `GitHub API ${res.status}`,
    }
  }

  return { ok: true }
}
