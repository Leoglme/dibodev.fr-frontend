import 'dotenv/config'
import crypto from 'node:crypto'

const SPACE_ID = process.env.NUXT_STORYBLOK_SPACE_ID
const TOKEN = process.env.NUXT_STORYBLOK_MANAGEMENT_TOKEN

if (!SPACE_ID || !TOKEN) {
  console.error('Missing env vars: NUXT_STORYBLOK_SPACE_ID and/or NUXT_STORYBLOK_MANAGEMENT_TOKEN')
  process.exit(1)
}

const BASE_URL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components/`
const COMPONENT_NAME = 'project'

/**
 * Read an HTTP response body as JSON when possible, otherwise as plain text.
 * @param {any} response - Fetch Response object.
 * @returns {Promise<any>} Parsed JSON or raw text.
 */
async function readJsonOrText(response) {
  const text = await response.text()
  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

/**
 * Perform a GET request against Storyblok Management API.
 * @param {string} url - Absolute URL.
 * @returns {Promise<any>} Fetch response.
 */
async function apiGet(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Authorization: TOKEN,
      Accept: 'application/json',
    },
  })
}

/**
 * Perform a POST request against Storyblok Management API.
 * @param {string} url - Absolute URL.
 * @param {any} body - JSON payload.
 * @returns {Promise<any>} Fetch response.
 */
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

/**
 * Create Storyblok multi-options schema field.
 * @param {number} pos - Field position in the editor.
 * @param {Array<{name: string, value: string}>} options - Allowed options.
 * @param {boolean} required - Whether the field is required.
 * @returns {Record<string, any>} Schema field definition.
 */
function multiOptions(pos, options, required = false) {
  return {
    type: 'options',
    pos,
    required,
    source: undefined,
    options: options.map((o) => ({ _uid: crypto.randomUUID(), name: o.name, value: o.value })),
  }
}

/**
 * Create Storyblok asset schema field.
 * @param {number} pos - Field position in the editor.
 * @param {boolean} required - Whether the field is required.
 * @returns {Record<string, any>} Schema field definition.
 */
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
  name: { type: 'text', pos: 0, required: true },
  primaryColor: { type: 'text', pos: 1, required: true },
  secondaryColor: { type: 'text', pos: 2 },
  logoUrl: asset(3, true),
  categories: multiOptions(
    4,
    [
      { name: 'Site web', value: 'Site web' },
      { name: 'Application métier', value: 'Application métier' },
      { name: 'IA', value: 'IA' },
      { name: 'Santé', value: 'Santé' },
      { name: 'Application mobile', value: 'Application mobile' },
      { name: 'Logiciel', value: 'Logiciel' },
    ],
    true,
  ),
  date: { type: 'datetime', pos: 5, disable_time: true },
  shortDescription: { type: 'textarea', pos: 6, required: true },
  longDescription: { type: 'textarea', pos: 7, required: true },
  siteUrl: { type: 'text', pos: 8 },
  stack: multiOptions(
    9,
    [
      { name: 'Nuxt.js', value: 'Nuxt.js' },
      { name: 'Vue.js', value: 'Vue.js' },
      { name: 'TypeScript', value: 'TypeScript' },
      { name: 'TailwindCSS', value: 'TailwindCSS' },
      { name: 'GraphQL', value: 'GraphQL' },
      { name: 'PostgreSQL', value: 'PostgreSQL' },
      { name: 'FastAPI', value: 'FastAPI' },
      { name: 'Python', value: 'Python' },
    ],
    true,
  ),
  repoUrl: { type: 'text', pos: 10 },
  media1: asset(11, false),
  media2: asset(12, false),
  tags: {
    type: 'textarea',
    pos: 13,
    description: 'Separate tags with comma or newline',
  },
  metaTitle: { type: 'text', pos: 14, required: true },
  metaDescription: { type: 'textarea', pos: 15, required: true },
  isFavorite: { type: 'boolean', pos: 16, inline_label: true },
}

/**
 * Ensure the "project" content type exists in the target Storyblok space.
 */
async function main() {
  // 1) Check if component already exists
  const listRes = await apiGet(BASE_URL)
  if (!listRes.ok) {
    const payload = await readJsonOrText(listRes)
    console.error(`Failed to list components: ${listRes.status} ${listRes.statusText}`)
    console.error(payload)
    process.exit(1)
  }

  const listJson = await listRes.json()
  const existing = Array.isArray(listJson?.components)
    ? listJson.components.find((c) => c?.name === COMPONENT_NAME)
    : null

  if (existing) {
    console.log(`Component "${COMPONENT_NAME}" already exists (id=${existing.id}).`)
    return
  }

  // 2) Create component
  const createRes = await apiPost(BASE_URL, {
    component: {
      name: COMPONENT_NAME,
      display_name: 'Project',
      is_root: true,
      is_nestable: false,
      schema,
    },
  })

  if (!createRes.ok) {
    const payload = await readJsonOrText(createRes)
    console.error(`Failed to create component: ${createRes.status} ${createRes.statusText}`)
    console.error(payload)
    process.exit(1)
  }

  const createdJson = await createRes.json()
  const created = createdJson?.component
  console.log(`Created component "${created?.name}" (id=${created?.id}).`)
}

await main()
