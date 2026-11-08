import type {
  DibodevLegalNoticeCompanyForm,
  DibodevLegalNoticeDataFeature,
  DibodevLegalNoticeHostingProvider,
  DibodevLegalNoticeStatus,
  DibodevLegalNoticeThirdPartyContent,
} from '~/core/types/DibodevLegalNotice'
import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

/** Day the laws, the durations and the hosting providers were last re-read: move it at each re-read. */
export const LEGAL_NOTICE_GENERATOR_PAGE_UPDATED_AT: string = '2026-11-08'

export const LEGAL_NOTICE_GENERATOR_ROUTE_NAME: string = 'tools-legal-notice-generator'

export const LEGAL_NOTICE_GENERATOR_ANCHOR_ID: string = 'generateur'

export const LEGAL_NOTICE_GENERATOR_TRACKING_LOCATION: string = 'legal_notice_generator'

/** The documents are written for a website run in France, whatever the page language. */
export const LEGAL_NOTICE_DOCUMENT_LANGUAGE_TAG: string = 'fr-FR'

export const LEGAL_NOTICE_STATUSES: DibodevLegalNoticeStatus[] = [
  'micro',
  'company',
  'association',
  'liberal',
  'individual',
]

export const LEGAL_NOTICE_COMPANY_FORMS: DibodevLegalNoticeCompanyForm[] = ['sarl', 'eurl', 'sas', 'sasu', 'sa']

export const LEGAL_NOTICE_DATA_FEATURES: DibodevLegalNoticeDataFeature[] = [
  'contactForm',
  'booking',
  'newsletter',
  'customerAccount',
  'onlinePayment',
]

export const LEGAL_NOTICE_THIRD_PARTY_CONTENTS: DibodevLegalNoticeThirdPartyContent[] = [
  'youtube',
  'googleMaps',
  'recaptcha',
  'socialNetworks',
]

/** Icon of each status, shared by the generator tiles and the status cards of the page. */
export const LEGAL_NOTICE_STATUS_ICONS: Record<DibodevLegalNoticeStatus, string> = {
  micro: 'Laptop',
  company: 'Store',
  association: 'Flag',
  liberal: 'ClipboardCheck',
  individual: 'Smile',
}

/**
 * Hosting providers read on their own legal pages on 8 November 2026. An empty field is printed as « [À COMPLÉTER] »:
 * the phone is mandatory but most providers do not publish one, and two addresses could not be checked.
 */
export const LEGAL_NOTICE_HOSTING_PROVIDERS: DibodevLegalNoticeHostingProvider[] = [
  {
    key: 'ovhcloud',
    label: 'OVHcloud',
    legalName: 'OVH SAS',
    address: '2 rue Kellermann, 59100 Roubaix, France',
    phone: '',
    sourceUrl: 'https://www.ovhcloud.com/fr/terms-and-conditions/',
  },
  {
    key: 'o2switch',
    label: 'o2switch',
    legalName: 'o2switch SAS',
    address: 'Chemin des Pardiaux, 63000 Clermont-Ferrand, France',
    phone: `04${NBSP}44${NBSP}44${NBSP}60${NBSP}40`,
    sourceUrl: 'https://www.o2switch.fr/cgv/',
  },
  {
    key: 'ionos',
    label: 'IONOS',
    legalName: 'IONOS SARL',
    address: '7 place de la Gare, BP 70109, 57200 Sarreguemines Cedex, France',
    phone: `09${NBSP}70${NBSP}80${NBSP}89${NBSP}11`,
    sourceUrl: 'https://www.ionos.fr/terms-gtc/terms-imprint/',
  },
  {
    key: 'hostinger',
    label: 'Hostinger',
    legalName: 'Hostinger International Limited',
    address: '61 Lordou Vironos str., 6023 Larnaca, Chypre',
    phone: '',
    sourceUrl: 'https://www.hostinger.fr/legal/termes-universels-de-contrat-de-service',
  },
  {
    key: 'infomaniak',
    label: 'Infomaniak',
    legalName: 'Infomaniak Network SA',
    address: 'Rue Eugène Marziano 25, 1227 Les Acacias (GE), Suisse',
    phone: '',
    sourceUrl: 'https://www.infomaniak.com/fr/cgv/mentions-legales',
  },
  {
    key: 'planethoster',
    label: 'PlanetHoster',
    legalName: '',
    address: '',
    phone: '',
    sourceUrl: 'https://www.planethoster.com/fr/',
  },
  {
    key: 'lws',
    label: 'LWS',
    legalName: 'LWS (Ligne Web Services) SAS',
    address: '',
    phone: '',
    sourceUrl: 'https://www.lws.fr/cgv-lws.php',
  },
  {
    key: 'gandi',
    label: 'Gandi',
    legalName: 'Gandi SAS',
    address: '63-65 boulevard Masséna, 75013 Paris, France',
    phone: '',
    sourceUrl: 'https://www.gandi.net/fr/contracts/terms-of-use',
  },
  {
    key: 'scaleway',
    label: 'Scaleway',
    legalName: 'Scaleway SAS',
    address: '8 rue de la Ville-l’Évêque, 75008 Paris, France',
    phone: '',
    sourceUrl: 'https://www.scaleway.com/fr/mentions-legales/',
  },
  {
    key: 'wix',
    label: 'Wix',
    legalName: 'Wix.com Ltd.',
    address: '5 Yunitzman St., Tel-Aviv, Israël',
    phone: '',
    sourceUrl: 'https://fr.wix.com/about/terms-of-use',
  },
  {
    key: 'shopify',
    label: 'Shopify',
    legalName: 'Shopify International Limited',
    address: 'The Sidings, 4th Floor, Grand Canal Quay, Dublin D02 E7K8, Irlande',
    phone: '',
    sourceUrl: 'https://www.shopify.com/fr/legal/conditions',
  },
  {
    key: 'wordpressCom',
    label: 'WordPress.com',
    legalName: 'Automattic Inc.',
    address: '60 29th Street #343, San Francisco, CA 94110, États-Unis',
    phone: '',
    sourceUrl: 'https://automattic.com/contact/',
  },
]

/** Platforms that host the site and provide the editor: their company is the hosting provider of the legal notice. */
export const LEGAL_NOTICE_PLATFORM_HOSTING_KEYS: string[] = ['wix', 'shopify', 'wordpressCom']

/** Law on confidence in the digital economy, article 1-1 (in force since 23 May 2024): who publishes, publication director, hosting provider, anonymity of non-professional publishers. */
export const LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049568614',
}

/** Article 1-2 of the same law, as written by the law of 21 May 2024: one year of prison and 75 000 € for a natural person or a manager, legal persons under articles 131-38 and 131-39 of the criminal code. */
export const LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000049563632',
}

/** Article 19 of the same law: e-mail, VAT number and, for regulated professions, title, State, professional body and rules. */
export const LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000032236011',
}

/** Article 13 of the GDPR: what a privacy policy tells the person when the data is collected. */
export const LEGAL_NOTICE_GDPR_ARTICLE_13_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre3#Article13',
}

/** Article 37 of the GDPR: the three cases where a data protection officer is mandatory. */
export const LEGAL_NOTICE_GDPR_ARTICLE_37_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article37',
}

/** CNIL reference framework for customer and prospect files (deliberation 2021-131): prospects kept three years from the last contact. */
export const LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE: DibodevSourceReference = {
  name: 'CNIL (Légifrance)',
  url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045538574',
}

/** CNIL page on retention periods (2 April 2026): billing data kept ten years under the commercial code. */
export const LEGAL_NOTICE_CNIL_RETENTION_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees',
}

/** Article L110-4 of the commercial code: five-year limitation period between traders and non-traders. */
export const LEGAL_NOTICE_COMMERCIAL_LIMITATION_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027725867',
}

/** How to file a complaint with the CNIL: online form and postal address. */
export const LEGAL_NOTICE_CNIL_COMPLAINT_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/adresser-une-plainte',
}

/** The legal notice and privacy policy generator, teased from the tools hub and the other tools. */
export const LEGAL_NOTICE_GENERATOR_TEASER: DibodevToolTeaserContent = {
  toolId: 'legal-notice-generator',
  routeName: LEGAL_NOTICE_GENERATOR_ROUTE_NAME,
  icon: 'ClipboardCheck',
  wording: {
    fr: {
      emphasizedIntro: `Pas encore de mentions légales${NBSP}?`,
      text: 'Le générateur rédige vos mentions légales et votre politique de confidentialité à partir de vos réponses, selon votre statut (micro-entreprise, société, association, profession réglementée), avec l’adresse de votre hébergeur déjà remplie.',
      linkLabel: `Générer mes mentions légales${NBSP}: gratuit, sans e-mail`,
      listLabel: 'Générer mes mentions légales',
      hubDescription: `Micro-entreprise, société, association, profession réglementée ou particulier${NBSP}: vos mentions légales et votre politique de confidentialité rédigées en direct, l’hébergeur prérempli, en Word ou à copier.`,
      hubMeta: '5 étapes · 2 documents',
    },
    en: {
      emphasizedIntro: 'No legal notice on your website yet?',
      text: 'The generator writes the legal notice and the privacy policy of a website run in France from your answers, for your status (sole trader, company, association, regulated profession), with your hosting provider’s address already filled in.',
      linkLabel: 'Generate my legal notice: free, no e-mail',
      listLabel: 'Generate my legal notice',
      hubDescription:
        'Sole trader, company, association, regulated profession or private individual: the legal notice and privacy policy required in France, written live from your answers, hosting provider prefilled, in Word or to copy.',
      hubMeta: '5 steps · 2 documents',
    },
    es: {
      emphasizedIntro: '¿Tu web aún no tiene aviso legal?',
      text: 'El generador redacta el aviso legal y la política de privacidad de una web gestionada en Francia a partir de tus respuestas, según tu estatus (autónomo, sociedad, asociación, profesión regulada), con la dirección de tu proveedor de alojamiento ya rellenada.',
      linkLabel: 'Generar mi aviso legal: gratis, sin e-mail',
      listLabel: 'Generar mi aviso legal',
      hubDescription:
        'Autónomo, sociedad, asociación, profesión regulada o particular: el aviso legal y la política de privacidad exigidos en Francia, redactados en directo a partir de tus respuestas, con el alojamiento ya rellenado, en Word o para copiar.',
      hubMeta: '5 pasos · 2 documentos',
    },
  },
}
