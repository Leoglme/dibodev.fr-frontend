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

/** Minimal asset shape for story content (Storyblok expects id + filename at least). */
export type StoryblokAssetRef = {
  id: number
  filename: string
  [key: string]: unknown
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
    const listRes = await fetch(
      `${STORYBLOK_MAPI_BASE}/${spaceId}/assets/?per_page=20&sort_by=created_at:desc`,
      { headers: { Authorization: token, Accept: 'application/json' } },
    )
    if (!listRes.ok) {
      throw new Error('Storyblok upload succeeded but could not retrieve asset id (list assets failed).')
    }
    const listData = (await listRes.json()) as {
      assets?: Array<{ id: number; filename: string; short_filename?: string }>
    }
    const assets = listData.assets ?? []
    const match = assets.find(
      (a) =>
        a.short_filename === filename || a.filename?.includes(filename) || a.filename?.endsWith(filename),
    )
    if (!match) {
      throw new Error('Storyblok upload succeeded but could not find the new asset in the list.')
    }
    assetId = match.id
    assetFilename = match.filename
  }

  const getRes = await fetch(`${STORYBLOK_MAPI_BASE}/${spaceId}/assets/${assetId}`, {
    headers: { Authorization: token, Accept: 'application/json' },
  })
  if (getRes.ok) {
    const getData = (await getRes.json()) as { asset?: Record<string, unknown> }
    const full = getData.asset
    if (full && typeof full.id === 'number' && full.filename) {
      return full as StoryblokAssetRef
    }
  }
  return { id: assetId, filename: assetFilename }
}
