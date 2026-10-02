import { siGithub } from 'simple-icons'
import type { DibodevBrandLogo } from '~/core/types/DibodevBrandGlyph'
import type { DibodevAboutProfileLink } from '~/core/types/DibodevAboutPage'
import { GOOGLE_BUSINESS_URL, MALT_PROFILE_URL } from '~/config/contact'

const WHITE: string = '#ffffff'
const INK: string = '#141414'
const DEFAULT_LOGO_BOX: string = '0 0 24 24'

/** The Malt symbol alone, without the word "malt" that makes the full logo unreadable at this size. */
const MALT_LOGO: DibodevBrandLogo = {
  viewBox: '0 9.39 6.03 6.03',
  paths: [
    {
      path: 'M3.499 13.563l-.21.21.619.618c.304.304.79.598 1.244.144.339-.34.26-.695.073-.98-.06.004-1.726.008-1.726.008zm-.963-2.325.21-.21-.608-.607c-.304-.303-.765-.621-1.243-.143-.351.35-.273.692-.087.97Zm2.86.416c-.037.043-1.511 1.524-1.511 1.524h1.154c.43 0 .981-.101.981-.777 0-.496-.296-.683-.624-.747zm-3.244-.031H.981c-.43 0-.981.135-.981.778 0 .479.307.676.641.745.04-.046 1.511-1.523 1.511-1.523zm1.484 3.04-.618-.618-.608.607a2.613 2.613 0 0 1-.137.128c.07.333.266.639.745.639s.676-.307.745-.641c-.043-.037-.085-.073-.127-.115zM2.41 10.15l.608.607.618-.618a2.25 2.25 0 0 1 .128-.118c-.065-.327-.251-.623-.747-.623s-.682.297-.746.625c.046.04.092.08.14.127zm2.742.117c-.455-.454-.94-.16-1.244.144l-2.87 2.87c-.303.303-.621.765-.143 1.243.478.478.94.16 1.243-.143l2.87-2.87c.304-.304.598-.79.144-1.244Z',
      color: null,
    },
  ],
}

/** The two letters of the LinkedIn logo, without its square (the tile draws it). */
const LINKEDIN_LOGO: DibodevBrandLogo = {
  viewBox: DEFAULT_LOGO_BOX,
  paths: [
    {
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z',
      color: null,
    },
  ],
}

const GITHUB_LOGO: DibodevBrandLogo = {
  viewBox: DEFAULT_LOGO_BOX,
  paths: [{ path: siGithub.path, color: null }],
}

/** The four-colour Google "G", for the Google listing of the company. */
const GOOGLE_LOGO: DibodevBrandLogo = {
  viewBox: '0 0 48 48',
  paths: [
    {
      path: 'M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z',
      color: '#ea4335',
    },
    {
      path: 'M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z',
      color: '#4285f4',
    },
    {
      path: 'M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z',
      color: '#fbbc05',
    },
    {
      path: 'M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z',
      color: '#34a853',
    },
  ],
}

/** Léo's profiles on other sites, each with the logo and the colours of its brand; a monogram stands in for a brand without a drawable logo. */
export const ABOUT_PROFILE_LINKS: DibodevAboutProfileLink[] = [
  {
    label: 'Malt',
    href: MALT_PROFILE_URL,
    brandColor: '#fc5757',
    tileColor: '#fc5757',
    logoColor: WHITE,
    logo: MALT_LOGO,
    monogram: null,
  },
  {
    label: 'Codeur',
    href: 'https://www.codeur.com/-leoglme',
    brandColor: '#006cf1',
    tileColor: '#006cf1',
    logoColor: WHITE,
    logo: null,
    monogram: 'C',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dibodev/',
    brandColor: '#0a66c2',
    tileColor: '#0a66c2',
    logoColor: WHITE,
    logo: LINKEDIN_LOGO,
    monogram: null,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Leoglme',
    brandColor: '#181717',
    tileColor: '#181717',
    logoColor: WHITE,
    logo: GITHUB_LOGO,
    monogram: null,
  },
  {
    label: 'Google Maps',
    href: GOOGLE_BUSINESS_URL,
    brandColor: '#4285f4',
    tileColor: WHITE,
    logoColor: INK,
    logo: GOOGLE_LOGO,
    monogram: null,
  },
  {
    label: 'Pages Jaunes',
    href: 'https://www.pagesjaunes.fr/pros/64381216',
    brandColor: '#e6cf00',
    tileColor: '#ffe600',
    logoColor: INK,
    logo: null,
    monogram: 'PJ',
  },
  {
    label: 'dev.to',
    href: 'https://dev.to/dibodev',
    brandColor: '#0a0a0a',
    tileColor: '#0a0a0a',
    logoColor: WHITE,
    logo: null,
    monogram: 'DEV',
  },
]
