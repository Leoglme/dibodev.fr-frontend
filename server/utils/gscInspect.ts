const GSC_INSPECT_URL = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect'
const GSC_SITE_DOMAIN = 'sc-domain:dibodev.fr'
const REQUEST_TIMEOUT_MS = 12_000

export type GscInspectResult = {
  verdict?: string
  coverageState?: string
  lastCrawlTime?: string
  inspectionResultLink?: string
  googleCanonical?: string
}

/**
 * Une seule inspection d’URL (1 requête). À appeler dans un job avec rate limit.
 */
export async function inspectUrl(
  inspectionUrl: string,
  accessToken: string,
  quotaProjectId: string,
): Promise<GscInspectResult> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
  try {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    }
    if (quotaProjectId) {
      headers['x-goog-user-project'] = quotaProjectId
    }
    const res = await fetch(GSC_INSPECT_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        inspectionUrl,
        siteUrl: GSC_SITE_DOMAIN,
        languageCode: 'fr-FR',
      }),
      signal: controller.signal,
    })
    clearTimeout(timeoutId)
    if (!res.ok) {
      const err = await res.text()
      throw new Error(`GSC inspect ${res.status}: ${err.slice(0, 300)}`)
    }
    const data: {
      inspectionResult?: {
        indexStatusResult?: {
          verdict?: string
          coverageState?: string
          lastCrawlTime?: string
          googleCanonical?: string
        }
        inspectionResultLink?: string
      }
    } = (await res.json()) as {
      inspectionResult?: {
        indexStatusResult?: {
          verdict?: string
          coverageState?: string
          lastCrawlTime?: string
          googleCanonical?: string
        }
        inspectionResultLink?: string
      }
    }
    const indexStatus:
      | {
          verdict?: string
          coverageState?: string
          lastCrawlTime?: string
          googleCanonical?: string
        }
      | undefined = data.inspectionResult?.indexStatusResult
    const canonical: string | undefined = indexStatus?.googleCanonical
    return {
      verdict: indexStatus?.verdict,
      coverageState: indexStatus?.coverageState,
      lastCrawlTime: indexStatus?.lastCrawlTime,
      inspectionResultLink: data.inspectionResult?.inspectionResultLink,
      googleCanonical: canonical,
    }
  } finally {
    clearTimeout(timeoutId)
  }
}
