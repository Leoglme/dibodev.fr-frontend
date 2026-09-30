import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BIKE_MARKING_SOURCE,
  BIKE_REPAIR_BONUS_REFUND_SOURCE,
  BIKE_REPAIR_BONUS_SOURCE,
  BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  BIKE_SHOP_PAGE_PROJECT_SLUG,
  BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  BIKE_SHOP_PAGE_SCREENSHOT_URL,
  BIKE_SHOP_PAGE_UPDATED_AT,
  BIKE_SHOP_TILL_SOURCE,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const BIKE_SHOP_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel atelier vélo${NBSP}: comparatif, prix 2026 et test gratuit`,
    description: `Logiciels d’atelier et de magasin de vélos${NBSP}: prix 2026 (Epsylon, Atelier Vélo+, CycleSoftware, Shifter…) et test gratuit en 6 questions pour choisir le vôtre.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion d’atelier et de magasin de vélos',
  },
  breadcrumbLabel: 'Logiciel atelier vélo',
  shareImage: {
    titleLines: ['Quel logiciel pour', `votre atelier vélo${NBSP}?`],
    highlight: 'atelier vélo',
    subtitle: 'Six questions, les prix 2026 des logiciels d’atelier vélo et combien prévoir',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'bike',
    alt: `Quel logiciel pour votre atelier vélo${NBSP}? Test gratuit en 6 questions et prix 2026 des logiciels, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'atelier vélo',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos magasins et votre activité. Le test vous dit quel type de logiciel choisir pour vos rendez-vous, vos fiches atelier et votre caisse, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      ', développeur d’applications métier près de Rennes. J’ai développé la plateforme de réservation en ligne d’une trentaine de structures de sport et de loisirs.',
    updatedAt: BIKE_SHOP_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels d’atelier vélo et de leurs prix',
    intro:
      'Les tarifs affichés par les éditeurs sur leur site. Le prix dépend surtout des modules choisis et du nombre de magasins.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Epsylon',
        coverage:
          'Fiches réparation, stock de pièces, caisse et factures, appli atelier, plusieurs magasins (offre Boutique)',
        price: `9 à 89${NBSP}€ par mois`,
        priceCondition: `TVA non applicable${NBSP}; 1 magasin à 9${NBSP}€, jusqu’à 3 à 45${NBSP}€`,
      },
      {
        name: 'Atelier Vélo+',
        coverage: 'Clients, vélos, réparations, devis et factures, paiement en ligne, logiciel Windows hors ligne',
        price: `199 ou 359${NBSP}€ par an`,
        priceCondition: 'L’offre Pro ajoute la prise de rendez-vous en ligne et les rappels d’entretien',
      },
      {
        name: 'CycleSoftware',
        coverage: 'Caisse, stock, atelier, catalogues fournisseurs, postes illimités',
        price: `70${NBSP}€ HT par mois`,
        priceCondition: `Engagement d’un an${NBSP}; modules en plus, dont plusieurs magasins (70${NBSP}€) et rendez-vous en ligne (15${NBSP}€)`,
      },
      {
        name: 'Shifter',
        coverage: 'Caisse, atelier, stock, commandes fournisseurs, facture électronique incluse',
        price: `69 à 148${NBSP}€ HT par mois`,
        priceCondition: `Plusieurs boutiques et entrepôt dans l’offre à 148${NBSP}€`,
      },
      {
        name: 'MCA Bike',
        coverage: 'Caisse, stock multi-sites, atelier, rendez-vous, location, QR codes',
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'demandez une démonstration avec un vrai samedi de printemps. Dix vélos déposés, deux pièces à commander, un client à prévenir par SMS et une vente de vélo neuf à marquer.',
    calloutFootnote: 'Tarifs relevés le 29 septembre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: 'Ce que votre logiciel doit suivre en 2026',
    intro: `Marquage des vélos, Bonus Réparation, caisse sécurisée et bientôt facture électronique${NBSP}: votre logiciel garde la trace de tout cela, vélo par vélo.`,
    facts: [
      {
        contextLabel: 'Depuis le 1er janvier 2021',
        title: 'Le marquage des vélos neufs vendus',
        text: 'Chaque vélo neuf vendu porte un identifiant unique, enregistré avec les coordonnées de son propriétaire dans le fichier national (FNUCI), géré par l’APIC.',
        sourceName: BIKE_MARKING_SOURCE.name,
        sourceUrl: BIKE_MARKING_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er juillet 2021',
        title: 'Et des vélos d’occasion vendus en magasin',
        text: 'Les vélos d’occasion vendus par un professionnel doivent aussi être marqués, par l’un des sept opérateurs agréés (Paravol, Recobike…).',
        sourceName: BIKE_MARKING_SOURCE.name,
        sourceUrl: BIKE_MARKING_SOURCE.url,
      },
      {
        contextLabel: `15 ou 30${NBSP}€ par réparation`,
        title: 'Le Bonus Réparation vélo',
        text: `Pour un vélo classique, 15${NBSP}€ de remise dès 65${NBSP}€ TTC de réparation, 30${NBSP}€ dès 120${NBSP}€ TTC. Seul un réparateur labellisé peut l’appliquer.`,
        sourceName: BIKE_REPAIR_BONUS_SOURCE.name,
        sourceUrl: BIKE_REPAIR_BONUS_SOURCE.url,
      },
      {
        contextLabel: 'Sous 15 jours',
        title: 'Le bonus remboursé à l’atelier',
        text: `Ecologic rembourse l’atelier en principe sous 15 jours après un dossier complet, et verse 5${NBSP}€ de prime par dossier validé.`,
        sourceName: BIKE_REPAIR_BONUS_REFUND_SOURCE.name,
        sourceUrl: BIKE_REPAIR_BONUS_REFUND_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 21 février 2026',
        title: 'Une caisse sécurisée, prouvée',
        text: `Si vous encaissez des particuliers avec un logiciel de caisse, il doit garantir l’inaltérabilité et l’archivage des ventes. La preuve${NBSP}: un certificat, ou de nouveau une attestation de l’éditeur.`,
        sourceName: BIKE_SHOP_TILL_SOURCE.name,
        sourceUrl: BIKE_SHOP_TILL_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'La facture électronique',
        text: `Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME devront les émettre à partir du 1er septembre 2027.`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText: `votre caisse sécurisée et le marquage. La caisse reste chez un éditeur qui fournit le certificat ou l’attestation, le marquage chez un opérateur agréé${NBSP}; l’outil sur mesure se relie aux deux.`,
  },
  comparison: {
    eyebrow: 'Les trois options',
    title: `Logiciel du marché, complément ou sur mesure${NBSP}?`,
    intro: `Chacune a sa place. Le test vous oriente${NBSP}; ce tableau montre ce que vous gagnez et ce que vous acceptez avec chacune.`,
    criterionLabel: 'Critère',
    columns: ['Logiciel du marché', 'Logiciel du marché + complément', 'Outil sur mesure'],
    rows: [
      {
        label: 'Prix',
        cells: [
          { state: 'yes', text: `9 à 150${NBSP}€ par mois, selon les modules et les magasins` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Caisse sécurisée',
        cells: [
          { state: 'yes', text: 'Fournie par l’éditeur, avec son certificat ou son attestation' },
          { state: 'yes', text: 'Reste dans votre logiciel actuel' },
          { state: 'partial', text: 'Reste chez un éditeur de caisse, relié à l’outil' },
        ],
      },
      {
        label: `Vos règles${NBSP}: forfaits, délais, magasins`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Rendez-vous d’atelier sur votre site',
        cells: [
          { state: 'partial', text: 'Souvent en module payant, sur une page de l’éditeur' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
        ],
      },
      {
        label: 'Mise en route',
        cells: [
          { state: 'yes', text: 'Quelques jours' },
          { state: 'partial', text: '2 à 6 semaines' },
          { state: 'partial', text: '5 à 20 semaines, par étapes' },
        ],
      },
      {
        label: 'Vos données',
        cells: [
          { state: 'partial', text: 'Chez l’éditeur, export selon le logiciel' },
          { state: 'partial', text: 'Réparties entre les deux outils' },
          { state: 'yes', text: 'À vous, code compris' },
        ],
      },
    ],
    rowsShownOnSmallScreens: BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: BIKE_SHOP_PAGE_PROJECT_SLUG,
    screenshotUrl: BIKE_SHOP_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Déjà réalisé',
    title: 'Une plateforme de réservation, déjà en production',
    description:
      'Chez Izidoor, j’ai développé la plateforme de réservation d’une trentaine de structures de sport et de loisirs. Leurs clients réservent et paient sur le site de chaque structure, l’équipe suit tout dans un planning. Plusieurs milliers de réservations y passent chaque saison.',
    highlights: [
      'Réservation en ligne sur le site de chaque structure',
      'Paiement Stripe, acomptes et remboursements',
      'Planning, disponibilités et caisse pour encaisser sur place',
    ],
    linkLabel: 'Voir le projet Izidoor',
    imageAlt: 'Planning Izidoor sur ordinateur et sur téléphone : créneaux réservés par moniteur et par jour',
    browserBarCaption: 'Izidoor · planning des réservations',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel atelier vélo${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour atelier vélo${NBSP}?`,
        answer: `Epsylon coûte 9${NBSP}€ par mois pour un magasin (45 et 89${NBSP}€ pour plusieurs), Atelier Vélo+ 199 ou 359${NBSP}€ par an, CycleSoftware 70${NBSP}€ HT par mois plus ses modules, et Shifter 69 à 148${NBSP}€ HT par mois. MCA Bike est sur devis (tarifs relevés le 29 septembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Existe-t-il un logiciel d’atelier vélo gratuit${NBSP}?`,
        answer: `Pas parmi ceux relevés ici, mais les essais gratuits sont courants${NBSP}: 30 jours chez Epsylon et CycleSoftware, 14 jours chez Atelier Vélo+. Le moins cher, Epsylon, coûte 9${NBSP}€ par mois pour un magasin.`,
      },
      {
        question: `Le marquage des vélos est-il obligatoire${NBSP}?`,
        answer: `Oui, pour les vélos neufs vendus depuis le 1er janvier 2021 et pour les vélos d’occasion vendus par un professionnel depuis le 1er juillet 2021. Le marquage passe par l’un des sept opérateurs agréés, et le numéro est enregistré dans le fichier national (FNUCI)${NBSP}; votre logiciel peut le garder avec la fiche du vélo.`,
      },
      {
        question: `Comment appliquer le Bonus Réparation vélo${NBSP}?`,
        answer: `Il faut être réparateur labellisé. Vous déduisez le bonus de la facture du client (15${NBSP}€ dès 65${NBSP}€ TTC de réparation, 30${NBSP}€ dès 120${NBSP}€ TTC pour un vélo classique), puis Ecologic vous rembourse, en principe sous 15 jours, avec 5${NBSP}€ de prime par dossier validé.`,
      },
      {
        question: `Ma caisse doit-elle être certifiée${NBSP}?`,
        answer: `Si vous encaissez des particuliers avec un logiciel de caisse, il doit garantir l’inaltérabilité et l’archivage des ventes. Depuis le 21 février 2026, la preuve peut être un certificat d’un organisme accrédité ou une attestation individuelle de l’éditeur${NBSP}: demandez-la avant de signer.`,
      },
      {
        question: `Mes clients peuvent-ils prendre rendez-vous en ligne${NBSP}?`,
        answer: `Oui${NBSP}: la plupart des logiciels le proposent en option (15${NBSP}€ par mois chez CycleSoftware, offre Pro chez Atelier Vélo+). Un outil sur mesure le met sur votre propre site, avec les vraies disponibilités de vos mécaniciens.`,
      },
      {
        question: `Un logiciel peut-il gérer plusieurs magasins${NBSP}?`,
        answer: `Oui${NBSP}: Epsylon jusqu’à 3 magasins à 45${NBSP}€ par mois, Shifter dans son offre à 148${NBSP}€ HT, CycleSoftware avec un module à 70${NBSP}€ par mois. Vérifiez que le stock et les transferts entre magasins sont bien suivis.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vélos et ventes en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre atelier${NBSP}?`,
    description: `Décrivez-moi votre atelier en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Parler de mon projet',
  },
}
