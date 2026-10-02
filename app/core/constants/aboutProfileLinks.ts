import { siDevdotto, siGithub, siGooglemaps, siMalt } from 'simple-icons'
import type { DibodevAboutProfileLink } from '~/core/types/DibodevAboutPage'
import { GOOGLE_BUSINESS_URL, MALT_PROFILE_URL } from '~/config/contact'

/** The two letters of the LinkedIn logo, without its square (drawn on the tile instead). */
const LINKEDIN_LOGO_PATH: string =
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z'
const WHITE: string = '#ffffff'
const INK: string = '#141414'

/** Léo's profiles on other sites, each with the colours of its brand; a monogram stands in when the icon set has no logo. */
export const ABOUT_PROFILE_LINKS: DibodevAboutProfileLink[] = [
  {
    label: 'Malt',
    href: MALT_PROFILE_URL,
    brandColor: `#${siMalt.hex}`,
    logoColor: WHITE,
    logoPath: siMalt.path,
    monogram: null,
  },
  {
    label: 'Codeur',
    href: 'https://www.codeur.com/-leoglme',
    brandColor: '#006cf1',
    logoColor: WHITE,
    logoPath: null,
    monogram: 'C',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dibodev/',
    brandColor: '#0a66c2',
    logoColor: WHITE,
    logoPath: LINKEDIN_LOGO_PATH,
    monogram: null,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Leoglme',
    brandColor: `#${siGithub.hex}`,
    logoColor: WHITE,
    logoPath: siGithub.path,
    monogram: null,
  },
  {
    label: 'Google Maps',
    href: GOOGLE_BUSINESS_URL,
    brandColor: `#${siGooglemaps.hex}`,
    logoColor: WHITE,
    logoPath: siGooglemaps.path,
    monogram: null,
  },
  {
    label: 'Pages Jaunes',
    href: 'https://www.pagesjaunes.fr/pros/64381216',
    brandColor: '#ffe600',
    logoColor: INK,
    logoPath: null,
    monogram: 'PJ',
  },
  {
    label: 'dev.to',
    href: 'https://dev.to/dibodev',
    brandColor: `#${siDevdotto.hex}`,
    logoColor: WHITE,
    logoPath: siDevdotto.path,
    monogram: null,
  },
]
