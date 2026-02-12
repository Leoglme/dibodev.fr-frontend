/**
 * Upload an image from a URL to Storyblok's asset library and return the asset reference for story content.
 */

const STORYBLOK_MAPI_BASE = 'https://mapi.storyblok.com/v1/spaces'

type SignedResponse = {
  id?: number
  post_url?: string
  fields?: Record<string, string>
  filename?: string
}

/** Minimal asset shape for story content. Storyblok Asset fields require filename to be the full CDN URL. */
export type StoryblokAssetRef = {
  id: number
  filename: string
  [key: string]: unknown
}

const STORYBLOK_CDN_ORIGIN = 'https://a.storyblok.com'
const S3_STORYBLOK_PREFIX = 'https://s3.amazonaws.com/a.storyblok.com'

/**
 * Normalize asset filename to Storyblok CDN URL (required for story content Asset fields).
 * Management API may return S3 URL; we need https://a.storyblok.com/f/...
 * Only accepts full CDN or S3 URLs; the path must contain the hash (not the asset id).
 */
function toCdnFilename(filename: string): string {
  const trimmed = (filename ?? '').trim()
  if (trimmed.startsWith(STORYBLOK_CDN_ORIGIN)) {
    return trimmed
  }
  if (trimmed.startsWith(S3_STORYBLOK_PREFIX)) {
    return trimmed.replace(S3_STORYBLOK_PREFIX, STORYBLOK_CDN_ORIGIN)
  }
  throw new Error(`Asset filename is not a valid Storyblok CDN or S3 URL: ${trimmed.slice(0, 80)}`)
}

/**
 * Fetch image buffer and content-type from URL.
 */
async function fetchImageBuffer(imageUrl: string): Promise<{ buffer: ArrayBuffer; contentType: string; ext: string }> {
  const res = await fetch(imageUrl, { redirect: 'follow' })
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status} ${imageUrl}`)
  }
  const contentType = res.headers.get('content-type') ?? 'image/jpeg'
  const buffer = await res.arrayBuffer()
  const ext = contentType.includes('png') ? 'png' : contentType.includes('webp') ? 'webp' : 'jpg'
  return { buffer, contentType, ext }
}

/**
 * Derive a safe filename for the asset.
 */
function getFilename(slug: string, ext: string): string {
  const base = slug.replace(/[^a-z0-9-]/gi, '-').slice(0, 50) || 'cover'
  return `${base}.${ext}`
}

/**
 * Upload image from URL to Storyblok and return asset reference for story content.
 */
export async function uploadImageToStoryblok(
  spaceId: string,
  token: string,
  imageUrl: string,
  slug: string,
): Promise<StoryblokAssetRef | null> {
  const { buffer, contentType, ext } = await fetchImageBuffer(imageUrl)
  const filename = getFilename(slug, ext)

  const signedRes = await fetch(`${STORYBLOK_MAPI_BASE}/${spaceId}/assets/`, {
    method: 'POST',
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      filename,
      validate_upload: 1,
    }),
  })
  if (!signedRes.ok) {
    const errText = await signedRes.text()
    throw new Error(`Storyblok signed response failed: ${signedRes.status} ${errText}`)
  }

  const signed = (await signedRes.json()) as SignedResponse
  const postUrl = signed.post_url
  const fields = signed.fields
  const assetIdFromSigned = signed.id

  if (!postUrl || !fields) {
    throw new Error('Storyblok signed response missing post_url or fields.')
  }

  const form = new FormData()
  for (const [key, value] of Object.entries(fields)) {
    form.append(key, value)
  }
  const blob = new Blob([buffer], { type: contentType })
  form.append('file', blob, filename)

  const uploadRes = await fetch(postUrl, {
    method: 'POST',
    body: form,
  })
  if (!uploadRes.ok) {
    const errText = await uploadRes.text()
    throw new Error(`Storyblok S3 upload failed: ${uploadRes.status} ${errText}`)
  }

  let assetId: number = assetIdFromSigned as number
  let assetFilename: string = signed.filename ?? filename

  if (typeof assetIdFromSigned === 'number') {
    const finishRes = await fetch(`${STORYBLOK_MAPI_BASE}/${spaceId}/assets/${assetIdFromSigned}/finish_upload`, {
      headers: { Authorization: token, Accept: 'application/json' },
    })
    if (finishRes.ok) {
      const finishData = (await finishRes.json()) as { asset?: { id: number; filename: string } }
      const asset = finishData.asset
      if (asset?.filename) {
        assetId = asset.id
        assetFilename = asset.filename
      }
    }
  } else {
    const listRes = await fetch(`${STORYBLOK_MAPI_BASE}/${spaceId}/assets/?per_page=20&sort_by=created_at:desc`, {
      headers: { Authorization: token, Accept: 'application/json' },
    })
    if (!listRes.ok) {
      throw new Error('Storyblok upload succeeded but could not retrieve asset id (list assets failed).')
    }
    const listData = (await listRes.json()) as {
      assets?: Array<{ id: number; filename: string; short_filename?: string }>
    }
    const assets = listData.assets ?? []
    const match = assets.find(
      (a) => a.short_filename === filename || a.filename?.includes(filename) || a.filename?.endsWith(filename),
    )
    if (!match) {
      throw new Error('Storyblok upload succeeded but could not find the new asset in the list.')
    }
    assetId = match.id
    assetFilename = match.filename
  }

  // GET single asset: API returns the asset object at root (id, filename, ...). Filename is full S3/CDN URL with hash.
  async function fetchAssetFilename(): Promise<string> {
    const getRes = await fetch(`${STORYBLOK_MAPI_BASE}/${spaceId}/assets/${assetId}`, {
      headers: { Authorization: token, Accept: 'application/json' },
    })
    if (!getRes.ok) {
      throw new Error(`Storyblok GET asset failed: ${getRes.status} ${await getRes.text()}`)
    }
    const getData = (await getRes.json()) as { id?: number; filename?: string }
    const rawFilename = getData.filename
    if (!rawFilename || !String(rawFilename).startsWith('http')) {
      throw new Error('Storyblok asset response missing or invalid filename (expected full URL).')
    }
    return toCdnFilename(String(rawFilename))
  }

  let cdnFilename: string
  try {
    cdnFilename = await fetchAssetFilename()
  } catch (firstErr) {
    // Retry once after short delay (API may not have filename ready immediately after upload).
    await new Promise((r) => setTimeout(r, 1500))
    cdnFilename = await fetchAssetFilename()
  }

  return { id: assetId, filename: cdnFilename }
}
