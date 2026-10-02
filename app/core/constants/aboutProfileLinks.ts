import type { DibodevAboutProfileLink } from '~/core/types/DibodevAboutPage'
import { GOOGLE_BUSINESS_URL, MALT_PROFILE_URL } from '~/config/contact'

const PROFILE_LOGOS_FOLDER: string = '/images/about/profiles'

/** Léo's profiles on other sites, each with the official logo of its brand. */
export const ABOUT_PROFILE_LINKS: DibodevAboutProfileLink[] = [
  {
    label: 'Malt',
    href: MALT_PROFILE_URL,
    logoSrc: `${PROFILE_LOGOS_FOLDER}/malt.png`,
  },
  {
    label: 'Codeur',
    href: 'https://www.codeur.com/-leoglme',
    logoSrc: `${PROFILE_LOGOS_FOLDER}/codeur.png`,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dibodev/',
    logoSrc: `${PROFILE_LOGOS_FOLDER}/linkedin.svg`,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Leoglme',
    logoSrc: `${PROFILE_LOGOS_FOLDER}/github.svg`,
  },
  {
    label: 'Google Maps',
    href: GOOGLE_BUSINESS_URL,
    logoSrc: `${PROFILE_LOGOS_FOLDER}/google-maps.svg`,
  },
  {
    label: 'Pages Jaunes',
    href: 'https://www.pagesjaunes.fr/pros/64381216',
    logoSrc: `${PROFILE_LOGOS_FOLDER}/pages-jaunes.png`,
  },
  {
    label: 'dev.to',
    href: 'https://dev.to/dibodev',
    logoSrc: `${PROFILE_LOGOS_FOLDER}/dev-to.png`,
  },
]
