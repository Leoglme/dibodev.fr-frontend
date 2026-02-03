import 'dotenv/config'
import crypto from 'node:crypto'

const SPACE_ID = process.env.NUXT_STORYBLOK_SPACE_ID
const TOKEN = process.env.NUXT_STORYBLOK_MANAGEMENT_TOKEN

if (!SPACE_ID || !TOKEN) {
  console.error('Missing env vars: NUXT_STORYBLOK_SPACE_ID and/or NUXT_STORYBLOK_MANAGEMENT_TOKEN')
  process.exit(1)
}

const BASE_URL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components/`
const COMPONENT_NAME = 'article'

async function readJsonOrText(response) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

async function apiGet(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: TOKEN,
      Accept: 'application/json',
    },
  })
}

async function apiPost(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: TOKEN,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
}

function asset(pos, required = false) {
  return {
    type: 'asset',
    pos,
    required,
    filetypes: ['images'],
    asset_folder_id: null,
    allow_external_url: true,
  }
}

const schema = {
  slug: { type: 'text', pos: 0, required: true, description: 'URL slug (e.g. mon-premier-article)' },
  title: { type: 'text', pos: 1, required: true },
  excerpt: { type: 'textarea', pos: 2, required: true },
  content: { type: 'richtext', pos: 3, required: true },
  date: { type: 'datetime', pos: 4, disable_time: true, required: true },
  coverImage: asset(5, false),
  tags: {
    type: 'textarea',
    pos: 6,
    description: 'Tags séparés par virgule ou retour à la ligne',
  },
  metaTitle: { type: 'text', pos: 7, description: 'SEO title (fallback: title)' },
  metaDescription: { type: 'textarea', pos: 8, description: 'SEO description (fallback: excerpt)' },
  ogImage: asset(9, false),
}

async function main() {
  const listRes = await apiGet(BASE_URL)
  if (!listRes.ok) {
    const payload = await readJsonOrText(listRes)
    console.error('Failed to list components:', listRes.status, listRes.statusText, payload)
    process.exit(1)
  }

  const listJson = await listRes.json()
  const existing = Array.isArray(listJson?.components)
    ? listJson.components.find((c) => c?.name === COMPONENT_NAME)
    : null

  if (existing) {
    console.log(`Component "${COMPONENT_NAME}" already exists (id=${existing.id}).`)
    return existing.id
  }

  const createRes = await apiPost(BASE_URL, {
    component: {
      name: COMPONENT_NAME,
      display_name: 'Article',
      is_root: true,
      is_nestable: false,
      schema,
    },
  })

  if (!createRes.ok) {
    const payload = await readJsonOrText(createRes)
    console.error('Failed to create component:', createRes.status, createRes.statusText, payload)
    process.exit(1)
  }

  const createdJson = await createRes.json()
  const created = createdJson?.component
  console.log(`Created component "${created?.name}" (id=${created?.id}).`)
  return created?.id
}

await main()
