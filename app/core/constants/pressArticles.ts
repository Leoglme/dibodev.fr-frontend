import type { DibodevPressArticle } from '~/core/types/DibodevPressArticle'

const PRESS_LOGOS_FOLDER: string = '/images/press'

/** Articles about Léo and Dibodev in the press, newest first, each headline exactly as published. */
export const PRESS_ARTICLES: DibodevPressArticle[] = [
  {
    key: 'bretagneEconomique2026',
    mediaName: 'Bretagne Économique',
    mediaUrl: 'https://www.bretagne-economique.com/',
    mediaLogoSrc: `${PRESS_LOGOS_FOLDER}/logo-bretagne-economique.png`,
    headline: 'Les IA développés par le Rennais Léo Guillaume séduisent les entreprises',
    url: 'https://www.bretagne-economique.com/actualites/dibodev-au-coeur-des-usages-concrets-de-lia/',
    datePublished: '2026-11-05',
    language: 'fr',
    authorName: 'Véronique Maignant',
  },
]
