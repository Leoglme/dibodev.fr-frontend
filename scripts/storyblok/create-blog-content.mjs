import 'dotenv/config'

const SPACE_ID = process.env.NUXT_STORYBLOK_SPACE_ID
const TOKEN = process.env.NUXT_STORYBLOK_MANAGEMENT_TOKEN

if (!SPACE_ID || !TOKEN) {
  console.error('Missing env vars: NUXT_STORYBLOK_SPACE_ID and/or NUXT_STORYBLOK_MANAGEMENT_TOKEN')
  process.exit(1)
}

const STORIES_URL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/stories/`

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

/**
 * Richtext content for the first article (Structure Storyblok).
 */
const FIRST_ARTICLE_RICHTEXT = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'Bienvenue sur le blog Dibodev ! Ce premier article te présente mon approche en tant que développeur freelance basé à Rennes.',
        },
      ],
    },
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: 'Pour qui est ce blog ?' }],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: "Je publie des articles ciblés pour les artisans, les PME et les entrepreneurs qui souhaitent comprendre le digital, les sites web, les applications et l'IA. L'objectif : t'aider à prendre les bonnes décisions pour ton projet.",
        },
      ],
    },
    {
      type: 'heading',
      attrs: { level: 2 },
      content: [{ type: 'text', text: 'Que puis-je faire pour toi ?' }],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: "Sites vitrines, applications mobiles, interfaces métier, connecteurs API, solutions IA sur mesure : je t'accompagne de A à Z. Si tu as une idée ou un projet en tête, n'hésite pas à me contacter.",
        },
      ],
    },
    {
      type: 'paragraph',
      content: [
        {
          type: 'text',
          text: 'À très bientôt !',
        },
      ],
    },
  ],
}

async function getOrCreateBlogFolder() {
  const listRes = await apiGet(`${STORIES_URL}?per_page=100`)
  if (!listRes.ok) {
    const payload = await readJsonOrText(listRes)
    console.error('Failed to list stories:', listRes.status, listRes.statusText, payload)
    process.exit(1)
  }

  const listJson = await listRes.json()
  const stories = listJson?.stories ?? []

  const blogFolder = stories.find((s) => s.is_folder === true && (s.slug === 'blog' || s.full_slug === 'blog'))

  if (blogFolder) {
    console.log(`Blog folder already exists (id=${blogFolder.id}).`)
    return blogFolder.id
  }

  const createFolderRes = await apiPost(STORIES_URL, {
    story: {
      name: 'Blog',
      slug: 'blog',
      is_folder: true,
      parent_id: 0,
    },
    publish: 1,
  })

  if (!createFolderRes.ok) {
    const payload = await readJsonOrText(createFolderRes)
    console.error('Failed to create blog folder:', createFolderRes.status, createFolderRes.statusText, payload)
    process.exit(1)
  }

  const folderJson = await createFolderRes.json()
  const folder = folderJson?.story
  console.log(`Created blog folder (id=${folder.id}).`)
  return folder.id
}

async function createFirstArticle(blogFolderId) {
  const listRes = await apiGet(`${STORIES_URL}?per_page=100`)
  if (listRes.ok) {
    const listJson = await listRes.json()
    const existing = (listJson?.stories ?? []).find(
      (s) => s.full_slug === 'blog/bienvenue-sur-le-blog-dibodev' && !s.is_folder,
    )
    if (existing) {
      console.log('First article already exists (id=' + existing.id + ').')
      return existing
    }
  }

  const today = new Date().toISOString().slice(0, 10)

  const articleContent = {
    component: 'article',
    slug: 'bienvenue-sur-le-blog-dibodev',
    title: 'Bienvenue sur le blog Dibodev',
    excerpt:
      'Premier article du blog Dibodev : découvre mon approche en tant que développeur freelance à Rennes et pour qui je publie ces contenus.',
    content: FIRST_ARTICLE_RICHTEXT,
    date: today,
    tags: 'freelance, blog, Rennes, digital',
    metaTitle: 'Bienvenue sur le blog Dibodev — Développeur freelance à Rennes',
    metaDescription:
      "Premier article du blog Dibodev : conseils et retours d'expérience pour artisans, PME et entrepreneurs sur le digital, les sites web, applications et IA.",
  }

  const createRes = await apiPost(STORIES_URL, {
    story: {
      name: 'Bienvenue sur le blog Dibodev',
      slug: 'bienvenue-sur-le-blog-dibodev',
      parent_id: blogFolderId,
      content: articleContent,
    },
    publish: 1,
  })

  if (!createRes.ok) {
    const payload = await readJsonOrText(createRes)
    console.error('Failed to create article:', createRes.status, createRes.statusText, payload)
    process.exit(1)
  }

  const articleJson = await createRes.json()
  const article = articleJson?.story
  console.log(`Created first article (id=${article.id}, full_slug=${article.full_slug}).`)
  return article
}

async function createArticleComponentIfNeeded() {
  const BASE_URL = `https://mapi.storyblok.com/v1/spaces/${SPACE_ID}/components/`
  const listRes = await apiGet(BASE_URL)
  if (!listRes.ok) return
  const listJson = await listRes.json()
  const existing = Array.isArray(listJson?.components) ? listJson.components.find((c) => c?.name === 'article') : null
  if (existing) {
    console.log('Article component already exists.')
    return
  }
  function asset(pos, required = false) {
    return { type: 'asset', pos, required, filetypes: ['images'], asset_folder_id: null, allow_external_url: true }
  }
  const schema = {
    slug: { type: 'text', pos: 0, required: true },
    title: { type: 'text', pos: 1, required: true },
    excerpt: { type: 'textarea', pos: 2, required: true },
    content: { type: 'richtext', pos: 3, required: true },
    date: { type: 'datetime', pos: 4, disable_time: true, required: true },
    coverImage: asset(5, false),
    tags: { type: 'textarea', pos: 6 },
    metaTitle: { type: 'text', pos: 7 },
    metaDescription: { type: 'textarea', pos: 8 },
    ogImage: asset(9, false),
  }
  const createRes = await apiPost(BASE_URL, {
    component: {
      name: 'article',
      display_name: 'Article',
      is_root: true,
      is_nestable: false,
      schema,
    },
  })
  if (!createRes.ok) {
    const payload = await readJsonOrText(createRes)
    console.error('Failed to create article component:', createRes.status, payload)
    process.exit(1)
  }
  console.log('Created article component.')
}

async function main() {
  console.log('--- Step 1: Creating article component (if needed) ---')
  await createArticleComponentIfNeeded()

  console.log('\n--- Step 2: Creating blog folder ---')
  const blogFolderId = await getOrCreateBlogFolder()

  console.log('\n--- Creating first article ---')
  const article = await createFirstArticle(blogFolderId)

  console.log(
    '\nDone! Article available at:',
    `/blog/${article.full_slug?.replace('blog/', '') ?? 'bienvenue-sur-le-blog-dibodev'}`,
  )
}

main()
