import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'
import { WEB_ACCESSIBILITY_SCOPE_QUIZ_ID } from '~/core/constants/webAccessibilityScopeQuiz'

/** Day the rules and their sources were last re-read: move it at each re-read. */
export const WEB_ACCESSIBILITY_SCOPE_PAGE_UPDATED_AT: string = '2026-11-08'

export const WEB_ACCESSIBILITY_SCOPE_ROUTE_NAME: string = 'tools-web-accessibility-scope-check'

export const WEB_ACCESSIBILITY_SCOPE_QUIZ_ANCHOR_ID: string = 'test'

/** Articles listed under the page, by Storyblok slug; a slug without a published article is skipped. */
export const WEB_ACCESSIBILITY_SCOPE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-vitrine-ou-outil-metier-artisan-tpe',
  'artisan-tpe-rennes-site-web-outil-metier-sur-mesure',
  'facture-electronique-artisan-ce-qui-change',
]

/** Article 47 of the law of 11 February 2005 (version of 8 September 2023): who, declaration, multi-year plan, home page mention. */
export const WEB_ACCESSIBILITY_ARTICLE_47_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000048050213',
}

/** Article 47-1 of the same law (ordinance 2023-859): Arcom, public formal notice, fines up to 50 000 € and 25 000 €. */
export const WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000048050174',
}

/** Decree 2019-768: 250 million euros of turnover in France, deadlines of 2019, 2020 and 2021. */
export const WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937',
}

/** RGAA scope page of the DINUM: bodies concerned, 250 M€ threshold, WCAG 2.1 AA, exempted content, disproportionate burden. */
export const WEB_ACCESSIBILITY_RGAA_SCOPE_SOURCE: DibodevSourceReference = {
  name: 'accessibilite.numerique.gouv.fr (DINUM)',
  url: 'https://accessibilite.numerique.gouv.fr/obligations/champ-application/',
}

/** RGAA home page: version 4.1.2, 106 criteria, RGAA 5 expected at the end of 2026. */
export const WEB_ACCESSIBILITY_RGAA_HOME_SOURCE: DibodevSourceReference = {
  name: 'accessibilite.numerique.gouv.fr (DINUM)',
  url: 'https://accessibilite.numerique.gouv.fr/',
}

/** Accessibility statement: compliance levels (100 %, 50 %), content, update rules. */
export const WEB_ACCESSIBILITY_RGAA_DECLARATION_SOURCE: DibodevSourceReference = {
  name: 'accessibilite.numerique.gouv.fr (DINUM)',
  url: 'https://accessibilite.numerique.gouv.fr/obligations/declaration-accessibilite/',
}

/** RGAA criteria and tests (1.1, 3.2, 4.3, 8.3, 9.1, 10.7, 11.1, 12.8). */
export const WEB_ACCESSIBILITY_RGAA_CRITERIA_SOURCE: DibodevSourceReference = {
  name: 'accessibilite.numerique.gouv.fr (DINUM)',
  url: 'https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/',
}

/** DGCCRF sheet for professionals (13 November 2025): services in scope, micro-enterprises, transition to 2030, 7 500 € fines. */
export const WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE: DibodevSourceReference = {
  name: 'economie.gouv.fr (DGCCRF)',
  url: 'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques-et-les-faq/professionnels-vos-produits-et-services-doivent-etre',
}

/** Article D412-57 of the Consumer Code: obligations of service providers, accessibility information made public. */
export const WEB_ACCESSIBILITY_CONSUMER_CODE_D412_57_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048180389',
}

/** Directive (EU) 2019/882: e-commerce services defined as distance services leading to a consumer contract. */
export const WEB_ACCESSIBILITY_DIRECTIVE_2019_882_SOURCE: DibodevSourceReference = {
  name: 'EUR-Lex',
  url: 'https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32019L0882',
}

/** Teaser of the test, shown on the tools hub and the related pages. */
export const WEB_ACCESSIBILITY_SCOPE_TEASER: DibodevToolTeaserContent = {
  toolId: WEB_ACCESSIBILITY_SCOPE_QUIZ_ID,
  routeName: WEB_ACCESSIBILITY_SCOPE_ROUTE_NAME,
  icon: 'Globe',
  wording: {
    fr: {
      emphasizedIntro: `Votre site doit-il être accessible aux personnes handicapées${NBSP}?`,
      text: `Organisme public, grande entreprise, vente en ligne, association${NBSP}: en 5 questions, le test vous dit si une obligation légale s’applique à votre site, depuis quand, et quoi faire.`,
      linkLabel: `Faire le test${NBSP}: mon site est-il concerné${NBSP}?`,
      listLabel: `Accessibilité numérique${NBSP}: mon site est-il concerné${NBSP}?`,
      hubDescription: `RGAA, déclaration d’accessibilité, loi européenne du 28 juin 2025${NBSP}: si votre site est concerné, ce que vous devez faire, et pour quand.`,
      hubMeta: '5 questions · 2 minutes',
    },
    en: {
      emphasizedIntro: 'Must your website be accessible to disabled people in France?',
      text: 'Public body, large company, online shop, association: in 5 questions, the test tells you whether a legal obligation applies to your website in France, since when, and what to do.',
      linkLabel: 'Take the test: is my website concerned?',
      listLabel: 'Web accessibility in France: is my website concerned?',
      hubDescription:
        'RGAA, accessibility statement, European Accessibility Act of 28 June 2025: whether your website is concerned, what you have to do, and by when.',
      hubMeta: '5 questions · 2 minutes',
    },
    es: {
      emphasizedIntro: '¿Tu web debe ser accesible para las personas con discapacidad en Francia?',
      text: 'Organismo público, gran empresa, tienda online, asociación: en 5 preguntas, el test te dice si una obligación legal se aplica a tu web en Francia, desde cuándo, y qué hacer.',
      linkLabel: 'Hacer el test: ¿mi web está afectada?',
      listLabel: 'Accesibilidad web en Francia: ¿mi web está afectada?',
      hubDescription:
        'RGAA, declaración de accesibilidad, ley europea del 28 de junio de 2025: si tu web está afectada, lo que tienes que hacer, y para cuándo.',
      hubMeta: '5 preguntas · 2 minutos',
    },
  },
}
