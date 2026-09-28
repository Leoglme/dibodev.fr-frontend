/** GitHub API helpers for the translation JSON files (content/translations/*.json): raw read and single-commit push. */

const GITHUB_API_BASE: string = 'https://api.github.com'

export type GetRawFileResult = { ok: true; content: string } | { ok: false; statusCode: number; message: string }

/**
 * Get the raw content of a repository file, up to 100 MB (the JSON Contents API returns no content above 1 MB).
 * @param {string} token - GitHub token.
 * @param {string} repo - Repository in "owner/repo" form.
 * @param {string} path - File path in the repository.
 * @returns {Promise<GetRawFileResult>} The UTF-8 content, or the failing status code and message.
 */
export async function getGitHubRawFile(token: string, repo: string, path: string): Promise<GetRawFileResult> {
  const res: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/contents/${path}`, {
    headers: {
      Accept: 'application/vnd.github.raw+json',
      Authorization: `Bearer ${token}`,
    },
  })
  if (!res.ok) {
    const text: string = await res.text()
    return { ok: false, statusCode: res.status, message: text || `GitHub API ${res.status}` }
  }
  return { ok: true, content: await res.text() }
}

const GIT_MODE_BLOB: string = '100644'

export type PutGitHubFilesItem = { path: string; content: string }

export type PutGitHubFilesParams = {
  token: string
  repo: string
  message: string
  files: PutGitHubFilesItem[]
}

export type PutGitHubFilesResult = { ok: true } | { ok: false; statusCode: number; message: string }

type GitRefResponse = { object?: { sha?: string } }
type GitCommitResponse = { sha: string; tree?: { sha?: string } }
type GitTreeEntry = { path: string; mode: string; type: string; sha: string }
type GitBlobResponse = { sha: string }

/**
 * Push multiple files in a single commit (Git Data API).
 * Uses default branch (e.g. main). One commit = one deployment.
 */
export async function putGitHubFiles(params: PutGitHubFilesParams): Promise<PutGitHubFilesResult> {
  const token: string = params.token
  const repo: string = params.repo
  const message: string = params.message
  const files: PutGitHubFilesItem[] = params.files

  if (files.length === 0) {
    return { ok: false, statusCode: 400, message: 'No files to push' }
  }

  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  const repoRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}`, { headers })
  if (!repoRes.ok) {
    const text: string = await repoRes.text()
    return { ok: false, statusCode: repoRes.status, message: text || `GitHub API ${repoRes.status}` }
  }
  const repoData: { default_branch?: string } = (await repoRes.json()) as { default_branch?: string }
  const branch: string = repoData.default_branch ?? 'main'

  const refRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/git/refs/heads/${branch}`, { headers })
  if (!refRes.ok) {
    const text: string = await refRes.text()
    return { ok: false, statusCode: refRes.status, message: text || `GitHub API ${refRes.status}` }
  }
  const refData: GitRefResponse = (await refRes.json()) as GitRefResponse
  const commitSha: string | undefined = refData.object?.sha
  if (!commitSha) {
    return { ok: false, statusCode: 502, message: 'Could not get commit SHA from ref' }
  }

  const commitRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/git/commits/${commitSha}`, { headers })
  if (!commitRes.ok) {
    const text: string = await commitRes.text()
    return { ok: false, statusCode: commitRes.status, message: text || `GitHub API ${commitRes.status}` }
  }
  const commitData: GitCommitResponse = (await commitRes.json()) as GitCommitResponse
  const baseTreeSha: string | undefined = commitData.tree?.sha
  if (!baseTreeSha) {
    return { ok: false, statusCode: 502, message: 'Could not get tree SHA from commit' }
  }

  const treeEntries: GitTreeEntry[] = []
  for (const file of files) {
    const blobRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/git/blobs`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        content: Buffer.from(file.content, 'utf-8').toString('base64'),
        encoding: 'base64',
      }),
    })
    if (!blobRes.ok) {
      const text: string = await blobRes.text()
      return { ok: false, statusCode: blobRes.status, message: text || `GitHub API ${blobRes.status}` }
    }
    const blobData: GitBlobResponse = (await blobRes.json()) as GitBlobResponse
    treeEntries.push({
      path: file.path,
      mode: GIT_MODE_BLOB,
      type: 'blob',
      sha: blobData.sha,
    })
  }

  const treeRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/git/trees`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: treeEntries,
    }),
  })
  if (!treeRes.ok) {
    const text: string = await treeRes.text()
    return { ok: false, statusCode: treeRes.status, message: text || `GitHub API ${treeRes.status}` }
  }
  const treeData: { sha?: string } = (await treeRes.json()) as { sha?: string }
  const newTreeSha: string | undefined = treeData.sha
  if (!newTreeSha) {
    return { ok: false, statusCode: 502, message: 'Could not get new tree SHA' }
  }

  const newCommitRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/git/commits`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      tree: newTreeSha,
      parents: [commitSha],
      message,
    }),
  })
  if (!newCommitRes.ok) {
    const text: string = await newCommitRes.text()
    return { ok: false, statusCode: newCommitRes.status, message: text || `GitHub API ${newCommitRes.status}` }
  }
  const newCommitData: GitCommitResponse = (await newCommitRes.json()) as GitCommitResponse
  const newCommitSha: string = newCommitData.sha

  const updateRefRes: Response = await fetch(`${GITHUB_API_BASE}/repos/${repo}/git/refs/heads/${branch}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({ sha: newCommitSha }),
  })
  if (!updateRefRes.ok) {
    const text: string = await updateRefRes.text()
    return { ok: false, statusCode: updateRefRes.status, message: text || `GitHub API ${updateRefRes.status}` }
  }

  return { ok: true }
}
