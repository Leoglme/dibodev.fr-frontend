/**
 * Update the "project" component's stack and categories field options in Storyblok
 * from existing project stories (CDN). Extracts unique values from all project stories
 * and updates the component schema via Management API PUT.
 *
 * Env: NUXT_STORYBLOK_SPACE_ID, NUXT_STORYBLOK_MANAGEMENT_TOKEN, NUXT_STORYBLOK_DELIVERY_API_TOKEN.
 *
 * Run: node scripts/storyblok/update-project-stack-options.mjs
 */

import 'dotenv/config'
import crypto from 'node:crypto'

const SPACE_ID = process.env.NUXT_STORYBLOK_SPACE_ID
const MANAGEMENT_TOKEN = process.env.NUXT_STORYBLOK_MANAGEMENT_TOKEN
const DELIVERY_TOKEN = process.env.NUXT_STORYBLOK_DELIVERY_API_TOKEN
const COMPONENT_NAME = 'project'
const CDN_BASE = 'https://api.storyblok.com/v2/cdn'

if (!SPACE_ID || !MANAGEMENT_TOKEN || !DELIVERY_TOKEN) {
  console.error(
    'Missing env: NUXT_STORYBLOK_SPACE_ID, NUXT_STORYBLOK_MANAGEMENT_TOKEN and/or NUXT_STORYBLOK_DELIVERY_API_TOKEN',
  )
  process.exit(1)
}

const MAPI_COMPONENTS_URL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components/`

/**
 *
 * @param response
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
 *
 * @param url
 * @param token
 */
async function apiGet(url, token) {
  return fetch(url, {
    method: 'GET',
    headers: {
      ...(token ? { Authorization: token } : {}),
      Accept: 'application/json',
    },
  })
}

/**
 *
 * @param url
 * @param body
 */
async function apiPut(url, body) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: MANAGEMENT_TOKEN,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  })
}

/**
 * Fetch project stories from Storyblok CDN and return their content array.
 */
async function fetchProjectStoriesFromCdn() {
  const spaceUrl = `${CDN_BASE}/spaces/me?token=${DELIVERY_TOKEN}`
  const spaceRes = await fetch(spaceUrl)
  if (!spaceRes.ok) {
    const payload = await readJsonOrText(spaceRes)
    console.error('Failed to fetch Storyblok space:', spaceRes.status, payload)
    process.exit(1)
  }
  const spaceJson = await spaceRes.json()
  const cv = spaceJson?.space?.version ?? 0

  const storiesUrl = `${CDN_BASE}/stories?token=${DELIVERY_TOKEN}&version=published&starts_with=project/&cv=${cv}`
  const storiesRes = await fetch(storiesUrl)
  if (!storiesRes.ok) {
    const payload = await readJsonOrText(storiesRes)
    console.error('Failed to fetch project stories:', storiesRes.status, payload)
    process.exit(1)
  }
  const storiesJson = await storiesRes.json()
  const stories = storiesJson?.stories ?? []
  return stories.map((s) => s.content).filter(Boolean)
}

/**
 * Extract unique stack values from story contents (content.stack can be array or options value).
 * @param contents
 */
function getUniqueStackFromContents(contents) {
  const set = new Set()
  for (const content of contents) {
    const stack = content.stack
    if (Array.isArray(stack)) {
      for (const value of stack) {
        const v =
          value != null ? (typeof value === 'string' ? value : (value.value ?? value.name ?? String(value))) : ''
        if (String(v).trim() !== '') set.add(String(v).trim())
      }
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'fr'))
}

/**
 * Extract unique categories from story contents.
 * @param contents
 */
function getUniqueCategoriesFromContents(contents) {
  const set = new Set()
  for (const content of contents) {
    const categories = content.categories
    if (Array.isArray(categories)) {
      for (const value of categories) {
        const v =
          value != null ? (typeof value === 'string' ? value : (value.value ?? value.name ?? String(value))) : ''
        if (String(v).trim() !== '') set.add(String(v).trim())
      }
    }
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'fr'))
}

/**
 *
 * @param stackValues
 */
function buildStackFieldOptions(stackValues) {
  return {
    type: 'options',
    pos: 9,
    required: true,
    source: undefined,
    options: stackValues.map((value) => ({
      _uid: crypto.randomUUID(),
      name: value,
      value,
    })),
  }
}

/**
 *
 * @param categoriesValues
 */
function buildCategoriesFieldOptions(categoriesValues) {
  return {
    type: 'options',
    pos: 4,
    required: true,
    source: undefined,
    options: categoriesValues.map((value) => ({
      _uid: crypto.randomUUID(),
      name: value,
      value,
    })),
  }
}

/**
 *
 */
async function main() {
  const contents = await fetchProjectStoriesFromCdn()
  console.log('Project stories from CDN:', contents.length)

  const uniqueStack = getUniqueStackFromContents(contents)
  const uniqueCategories = getUniqueCategoriesFromContents(contents)

  console.log('Categories from stories:', uniqueCategories.length)
  console.log(uniqueCategories.join(', '))
  console.log('\nStack from stories:', uniqueStack.length)
  console.log(uniqueStack.join(', '))

  const listRes = await apiGet(MAPI_COMPONENTS_URL, MANAGEMENT_TOKEN)
  if (!listRes.ok) {
    const payload = await readJsonOrText(listRes)
    console.error('Failed to list components:', listRes.status, listRes.statusText, payload)
    process.exit(1)
  }

  const listJson = await listRes.json()
  const components = listJson?.components ?? []
  const projectComponent = components.find((c) => c?.name === COMPONENT_NAME)

  if (!projectComponent) {
    console.error(`Component "${COMPONENT_NAME}" not found. Create it first with create-project-component.mjs`)
    process.exit(1)
  }

  const componentId = projectComponent.id
  const currentSchema = projectComponent.schema ?? {}
  const updatedSchema = {
    ...currentSchema,
    categories: buildCategoriesFieldOptions(uniqueCategories),
    stack: buildStackFieldOptions(uniqueStack),
  }

  const putUrl = `${MAPI_COMPONENTS_URL}${componentId}`
  const putBody = {
    component: {
      ...projectComponent,
      schema: updatedSchema,
    },
  }

  const putRes = await apiPut(putUrl, putBody)
  if (!putRes.ok) {
    const payload = await readJsonOrText(putRes)
    console.error('Failed to update component:', putRes.status, putRes.statusText, payload)
    process.exit(1)
  }

  const updated = (await putRes.json()).component
  const categoriesOpts = updated?.schema?.categories?.options ?? []
  const stackOpts = updated?.schema?.stack?.options ?? []
  console.log(
    `\nComponent "project" (id=${componentId}) updated. Categories: ${categoriesOpts.length}, Stack: ${stackOpts.length}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
