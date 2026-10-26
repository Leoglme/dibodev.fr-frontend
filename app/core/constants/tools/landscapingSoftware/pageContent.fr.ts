import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BIOWASTE_SORTING_SOURCE,
  GARDENING_HOME_SERVICES_SOURCE,
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  LANDSCAPING_PAGE_PROJECT_SLUG,
  LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS,
  LANDSCAPING_PAGE_SCREENSHOT_URL,
  LANDSCAPING_PAGE_UPDATED_AT,
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
  LANDSCAPING_VAT_SOURCE,
  PESTICIDE_BAN_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const LANDSCAPING_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel paysagiste${NBSP}: devis, contrats d’entretien, prix 2026`,
    description: `Robbin, Extrabat, Paysagio${NBSP}: les prix 2026 des logiciels pour paysagistes, un test gratuit en 6 questions et un modèle de devis et de contrat d’entretien.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour paysagistes',
  },
  breadcrumbLabel: 'Logiciel paysagiste',
  shareImage: {
    titleLines: ['Quel logiciel pour', `un paysagiste${NBSP}?`],
    highlight: 'paysagiste',
    subtitle: 'Six questions, les prix 2026 des logiciels pour paysagistes et un modèle de contrat d’entretien gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'leaf',
    alt: `Quel logiciel pour un paysagiste${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et modèle de devis et de contrat d’entretien, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour un ',
    titleHighlight: 'paysagiste',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos dépôts et vos chantiers. Création de jardins, entretien sous contrat ou petit jardinage chez les particuliers, le test vous dit quel type de logiciel choisir pour vos devis, vos contrats d’entretien et vos factures, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: LANDSCAPING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels pour paysagistes et de leurs prix',
    intro:
      'Les tarifs affichés sur leur site par les éditeurs de logiciels pour paysagistes, du bâtiment et de gestion d’interventions. Le prix dépend surtout des modules choisis et du nombre d’utilisateurs.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Robbin',
        coverage: `Devis et factures pour paysagistes, catalogue d’ouvrages, planning, marges et temps de chantier${NBSP}; contrats d’entretien en offre Pro${NBSP}; dans le navigateur, sans application dédiée`,
        price: `19 ou 49${NBSP}€ HT par mois`,
        priceCondition: `15 ou 39${NBSP}€ HT par mois payé à l’année (180 ou 468${NBSP}€ HT par an)${NBSP}; 1 utilisateur en Essentiel, 2 en Pro${NBSP}; 14 jours d’essai sans carte`,
      },
      {
        name: 'Extrabat Paysage',
        coverage: `Gestion complète pour les entreprises du paysage, facturation électronique incluse (via Iopole)${NBSP}; planning des chantiers et contrats de service dès l’offre Standard, plan de charge en Premium`,
        price: `49 à 99${NBSP}€ HT par utilisateur et par mois`,
        priceCondition: `Éco 49${NBSP}€, Standard 69${NBSP}€, Premium 99${NBSP}€, tarif dégressif${NBSP}; sans engagement de durée`,
      },
      {
        name: 'Paysagio',
        coverage: `Logiciel pensé pour les paysagistes${NBSP}: saisie des heures et rentabilité par chantier${NBSP}; comptes ouvriers gratuits`,
        price: `34,90 à 99,90${NBSP}€ HT par mois`,
        priceCondition: `Par compte${NBSP}: Gestionnaire 99,90${NBSP}€, Conducteur 49,90${NBSP}€, Chef d’équipe 34,90${NBSP}€${NBSP}; sans engagement, 14 jours d’essai sans carte`,
      },
      {
        name: 'Tomas',
        coverage:
          'Logiciel de gestion pour paysagistes, en deux offres (Essentiel et Expert chantier), avec des licences pour les gestionnaires et les techniciens',
        price: `24,50 ou 49,50${NBSP}€ HT par mois`,
        priceCondition: `Licence gestionnaire en plus 24,50${NBSP}€ HT par mois, licence technicien 9,50${NBSP}€${NBSP}; sans engagement, 15 jours d’essai sans carte`,
      },
      {
        name: 'Organilog',
        coverage: `Gestion d’interventions pour paysagistes${NBSP}: bibliothèque de prix, planning et contrats dès l’offre Pro, application mobile hors ligne${NBSP}; devis et factures à partir de l’offre Business`,
        price: `19 à 64${NBSP}€ par mois et par utilisateur`,
        priceCondition: `Offre Basique gratuite${NBSP}; Business 35${NBSP}€, Premium 59${NBSP}€, Premium + Carte 64${NBSP}€${NBSP}; sans engagement`,
      },
      {
        name: 'Batappli',
        coverage: `Devis et factures du bâtiment, avec des devis de paysagiste (terrasse, plantations, clôture)${NBSP}; contrats d’entretien récurrents en offre Artisan`,
        price: `39 ou 79${NBSP}€ HT par mois`,
        priceCondition: `429 ou 869${NBSP}€ HT par an${NBSP}; 19${NBSP}€ HT par mois par utilisateur supplémentaire${NBSP}; 10 jours d’essai`,
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText: `faites passer une vraie semaine au logiciel. Un devis de réfection de terrasse maçonnée et de plantations pour une maison de plus de 2 ans, avec la TVA à 10${NBSP}% sur la terrasse et 20${NBSP}% sur les végétaux, accepté puis planifié, un contrat d’entretien et ses passages de l’année, les heures de l’équipe saisies sur le chantier, puis la facture et l’attestation fiscale d’un client en services à la personne.`,
    calloutFootnote:
      'Tarifs relevés le 26 octobre 2026 sur les sites des éditeurs. JardiSoft et Vertuoza sont sur devis. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `TVA, services à la personne, produits phytosanitaires${NBSP}: ce que votre logiciel doit respecter en 2026`,
    intro: `TVA à 10${NBSP}% ou 20${NBSP}% selon l’ouvrage, attestation fiscale des clients en services à la personne, produits phytosanitaires, déchets verts, facture électronique${NBSP}: les règles du paysagiste passent presque toutes par ses devis, ses contrats et ses factures. Un bon logiciel les remplit pour vous.`,
    facts: [
      {
        contextLabel: `TVA à 10${NBSP}% ou 20${NBSP}%`,
        title: 'Le bon taux de TVA, ouvrage par ouvrage',
        text: `Créer ou entretenir un jardin se facture à 20${NBSP}%. Certains ouvrages attenants à un logement achevé depuis plus de 2 ans passent à 10${NBSP}%${NBSP}: mur de clôture (hors haies vives), portail, réfection d’une terrasse maçonnée, muret de protection, chemin d’accès principal. Abri, serre, pergola, fontaine, bassin, éclairage et piscine restent à 20${NBSP}%.`,
        sourceName: LANDSCAPING_VAT_SOURCE.name,
        sourceUrl: LANDSCAPING_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Services à la personne',
        title: `Petit jardinage${NBSP}: une déclaration et une attestation fiscale`,
        text: 'L’entretien courant des jardins, la taille des haies et des arbres et le débroussaillage chez un particulier peuvent relever des services à la personne, sur simple déclaration (NOVA), sans agrément. Chaque client reçoit alors une attestation fiscale avant le 31 mars de l’année suivante. La vente de plantes, la conception et la réalisation de jardins, l’élagage et le terrassement n’en font pas partie.',
        sourceName: GARDENING_HOME_SERVICES_SOURCE.name,
        sourceUrl: GARDENING_HOME_SERVICES_SOURCE.url,
      },
      {
        contextLabel: `Jusqu’à 5${NBSP}000${NBSP}€ de dépenses par an`,
        title: `Un crédit d’impôt de 50${NBSP}% pour vos clients`,
        text: `Le petit jardinage payé à une entreprise déclarée en services à la personne ouvre droit, pour le client, à un crédit d’impôt de 50${NBSP}% de ses dépenses, dans la limite de 5${NBSP}000${NBSP}€ par an et par foyer (à l’intérieur du plafond général de 12${NBSP}000${NBSP}€).`,
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er juillet 2022',
        title: 'Plus de produits phytosanitaires chez les particuliers',
        text: 'Les produits phytopharmaceutiques sont interdits dans les propriétés privées à usage d’habitation et leurs espaces extérieurs, sauf produits de biocontrôle, à faible risque ou utilisables en agriculture biologique. Là où ils restent permis, leur usage professionnel demande le Certiphyto, valable 5 ans.',
        sourceName: PESTICIDE_BAN_SOURCE.name,
        sourceUrl: PESTICIDE_BAN_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er janvier 2024',
        title: 'Les déchets verts triés à la source',
        text: `Tous les professionnels trient leurs biodéchets à la source, déchets verts compris. Le brûlage des déchets verts est interdit (amende de 750${NBSP}€), et le registre chronologique des déchets se conserve 3 ans.`,
        sourceName: BIOWASTE_SORTING_SOURCE.name,
        sourceUrl: BIOWASTE_SORTING_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'La facture électronique',
        text: `Toutes les entreprises assujetties à la TVA doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME et les micro-entreprises devront les émettre à partir du 1er septembre 2027, et transmettre les données de leurs ventes aux particuliers (e-reporting).`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText:
      'votre logiciel comptable, ni un logiciel de conception de jardins (plans, 3D). Les factures partent vers votre comptabilité (export ou Factur-X), et l’outil importe les tarifs de vos pépinières et de vos fournisseurs.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un devis d’aménagement et un contrat d’entretien prêts à remplir',
    description: `Le devis d’aménagement paysager avec la TVA ligne par ligne, à 10${NBSP}% pour les ouvrages éligibles attenants à un logement de plus de 2 ans et à 20${NBSP}% pour les plantations et l’entretien${NBSP}; le contrat d’entretien de jardin avec les prestations, le nombre de passages, la période, le prix, sa révision et la résiliation. En PDF à remplir à la main, ou en Excel avec les totaux calculés.`,
    items: [
      `Devis${NBSP}: ouvrages et végétaux, quantités, prix unitaires, TVA par ligne, acompte, durée de validité, certification du client pour la TVA à 10${NBSP}%`,
      `Contrat d’entretien${NBSP}: tontes, tailles, ramassage des feuilles, nombre de passages, période, montant annuel et mensualités, révision du prix, résiliation`,
      `Mentions utiles${NBSP}: crédit d’impôt de 50${NBSP}% si l’entreprise est déclarée en services à la personne, devis gratuit dès 100${NBSP}€ TTC par mois, pas de produits phytosanitaires chez les particuliers`,
    ],
    downloads: [
      { label: 'Télécharger le modèle PDF', href: LANDSCAPING_TEMPLATE_PDF_PATH, format: 'PDF, 2 pages, à imprimer' },
      {
        label: 'Télécharger la version Excel',
        href: LANDSCAPING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, totaux calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre comptable, ni la vérification de votre éligibilité aux services à la personne.',
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
          { state: 'yes', text: `15 à 99,90${NBSP}€ HT par mois, selon les modules et les utilisateurs` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Devis, contrats d’entretien, factures',
        cells: [
          { state: 'yes', text: 'Inclus, les contrats souvent dans les offres intermédiaires' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos ouvrages, de vos contrats et de vos passages' },
        ],
      },
      {
        label: `Vos règles${NBSP}: contrats, passages, équipes`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Demandes de devis et d’entretien sur votre site',
        cells: [
          { state: 'partial', text: 'Souvent un formulaire ou une page de l’éditeur' },
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
    rowsShownOnSmallScreens: LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: LANDSCAPING_PAGE_PROJECT_SLUG,
    screenshotUrl: LANDSCAPING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Le même principe sert à suivre le temps passé par vos équipes sur chaque chantier d’aménagement et chaque passage d’entretien.',
    highlights: [
      'Heures saisies par chantier, pensées pour la tablette',
      'Validation chaque semaine, alertes sur les heures manquantes',
      'Reporting par projet et exports Excel et PDF',
    ],
    linkLabel: 'Voir le projet Gest-Time',
    imageAlt: `Rapport Gest-Time${NBSP}: heures, absences et trajets par salarié et par semaine, avec export Excel`,
    browserBarCaption: 'Gest-Time · rapport des heures par salarié',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel pour paysagiste${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour paysagiste${NBSP}?`,
        answer: `Robbin coûte 19 ou 49${NBSP}€ HT par mois (15 ou 39${NBSP}€ payé à l’année), Extrabat Paysage 49 à 99${NBSP}€ HT par utilisateur et par mois, Paysagio 34,90 à 99,90${NBSP}€ HT par mois selon le compte (comptes ouvriers gratuits), Tomas 24,50 ou 49,50${NBSP}€ HT par mois, Organilog 19 à 64${NBSP}€ par mois et par utilisateur et Batappli 39 ou 79${NBSP}€ HT par mois${NBSP}; JardiSoft et Vertuoza sont sur devis (tarifs relevés le 26 octobre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel logiciel de devis et de facturation pour un paysagiste${NBSP}?`,
        answer: `Un logiciel de facturation généraliste fait des devis et des factures, mais il lui manque la bibliothèque d’ouvrages et de végétaux, la TVA à 10${NBSP}% sur les ouvrages éligibles, les contrats d’entretien et, en services à la personne, les attestations fiscales. Les logiciels pour paysagistes partent de ces besoins${NBSP}: Robbin a un catalogue d’ouvrages et gère les contrats en offre Pro, Extrabat Paysage les contrats de service dès l’offre Standard, et JardiSoft (sur devis) annonce 7${NBSP}000 végétaux et 1${NBSP}000 matériaux. Une entreprise avec plusieurs équipes a aussi besoin du planning et des heures par chantier sur le téléphone, chez Paysagio, Organilog ou dans un outil sur mesure.`,
      },
      {
        question: `Existe-t-il un logiciel gratuit pour paysagiste${NBSP}?`,
        answer: `Organilog a une offre Basique gratuite, mais les devis et les factures commencent à l’offre Business (35${NBSP}€ par mois et par utilisateur). Robbin, Paysagio et Kwixéo offrent 14 jours d’essai sans carte bancaire, Tomas 15 jours, Batappli 10 jours. Un logiciel de facturation gratuit peut dépanner au début, mais sans bibliothèque de végétaux, sans contrats d’entretien ni attestations fiscales.`,
      },
      {
        question: `Comment gérer les contrats d’entretien de jardin${NBSP}?`,
        answer: `Le contrat fixe les prestations (tontes, tailles, ramassage des feuilles), le nombre de passages, la période, le prix, sa révision et la résiliation. Le logiciel en tire les passages de l’année dans le planning et facture au rythme prévu, chaque mois ou après chaque passage. Robbin les gère en offre Pro, Extrabat Paysage dès l’offre Standard, Organilog dès l’offre Pro, JardiSoft facture les contrats selon leur fréquence, et Prospecto (29${NBSP}€ par mois) vise les entreprises d’espaces verts de 1 à 5 personnes. Le modèle gratuit de cette page contient un contrat prêt à remplir.`,
      },
      {
        question: `Quelle TVA sur un devis de paysagiste${NBSP}?`,
        answer: `20${NBSP}% pour la création et l’entretien des jardins, les plantations et le petit jardinage en services à la personne (au taux normal depuis le 1er juillet 2013). 10${NBSP}% pour certains ouvrages attenants à un logement achevé depuis plus de 2 ans${NBSP}: mur de clôture (hors haies vives), portail, réfection d’une terrasse maçonnée, muret de protection, chemin d’accès principal${NBSP}; le client certifie alors sur le devis ou la facture que les conditions sont remplies. Abri, serre, pergola, fontaine, bassin, éclairage et piscine restent à 20${NBSP}%. Sur un devis qui mélange les deux taux, indiquez la TVA de chaque ligne et le total par taux.`,
      },
      {
        question: `Comment faire les attestations fiscales des clients en services à la personne${NBSP}?`,
        answer: `Si votre entreprise est déclarée en services à la personne (déclaration NOVA, sans agrément), vous remettez à chaque client une attestation fiscale avant le 31 mars de l’année suivante. Elle lui permet d’obtenir un crédit d’impôt de 50${NBSP}% sur le petit jardinage, dans la limite de 5${NBSP}000${NBSP}€ de dépenses par an et par foyer. Seuls l’entretien courant, la taille des haies et des arbres et le débroussaillage sont concernés, pas la création de jardins, l’élagage ni le terrassement${NBSP}: votre logiciel doit donc séparer ces prestations sur vos factures. Une entreprise du paysage sur cinq fait des services à la personne (20,5${NBSP}% selon l’UNEP).`,
      },
      {
        question: `Peut-on encore utiliser des produits phytosanitaires chez un particulier${NBSP}?`,
        answer: `Non, sauf exceptions${NBSP}: depuis le 1er juillet 2022, les produits phytopharmaceutiques sont interdits dans les propriétés privées à usage d’habitation et leurs espaces extérieurs, en dehors des produits de biocontrôle, à faible risque ou utilisables en agriculture biologique. Là où ils restent permis, leur usage professionnel demande le Certiphyto, valable 5 ans. Votre logiciel peut garder le Certiphyto de chaque salarié avec sa date de fin de validité.`,
      },
      {
        question: `Le devis est-il obligatoire pour un paysagiste${NBSP}?`,
        answer: `L’obligation de devis avant un dépannage, fixée en 2017 pour les travaux du bâtiment (maçonnerie, couverture, plomberie…), ne vise pas le jardinage. En services à la personne, en revanche, le devis est obligatoire et gratuit dès 100${NBSP}€ TTC par mois, avec 12 mentions. Pour un ouvrage maçonné (muret, terrasse) comme pour tout chantier d’aménagement, un devis détaillé et signé reste la meilleure protection.`,
      },
      {
        question: `Comment suivre les heures et la rentabilité de chaque chantier${NBSP}?`,
        answer: `Les équipes saisissent leurs heures sur le téléphone, chantier par chantier, et le logiciel compare le temps passé au temps prévu dans le devis. Paysagio met en avant la saisie des heures et la rentabilité par chantier, Robbin les marges et le temps de chantier (dans le navigateur, sans application dédiée), et JardiSoft une application de terrain pour les heures et la signature. Si vos équipes travaillent sans réseau, vérifiez le mode hors ligne${NBSP}: Organilog l’annonce${NBSP}; en sur mesure, c’est prévu dès le devis.`,
      },
      {
        question: `Logiciel de conception 3D ou logiciel de gestion${NBSP}: lequel choisir${NBSP}?`,
        answer: `Ce ne sont pas les mêmes outils. Les logiciels de conception (Planner 5D, Lumion, les outils d’Autodesk…) dessinent le jardin en plan ou en 3D pour le présenter au client. Les logiciels de gestion comparés sur cette page font les devis, les contrats d’entretien, le planning et les factures${NBSP}: c’est sur eux que porte le test.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos contrats, vos ouvrages et vos factures en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre entreprise${NBSP}?`,
    description: `Décrivez-moi votre activité en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
