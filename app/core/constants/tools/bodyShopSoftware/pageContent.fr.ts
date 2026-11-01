import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  BODY_SHOP_PAGE_PROJECT_SLUG,
  BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  BODY_SHOP_PAGE_SCREENSHOT_URL,
  BODY_SHOP_PAGE_UPDATED_AT,
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
  CIRCULAR_ECONOMY_PARTS_SOURCE,
  COURTESY_CAR_SOURCE,
  FREE_CHOICE_OF_REPAIRER_SOURCE,
  GARAGE_RULES_SOURCE,
  PAINT_BOOTH_ICPE_SOURCE,
  VEHICLE_APPRAISAL_SOURCE,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BODY_SHOP_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel carrosserie${NBSP}: chiffrage, sinistres, prix 2026`,
    description:
      'Prix 2026 des logiciels de carrosserie (Gest’Garage, TDV, AutoProGestion, EBP), ce qu’ils font d’un dossier sinistre, test en 6 questions et modèle gratuit.',
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour atelier de carrosserie',
  },
  breadcrumbLabel: 'Logiciel pour carrosserie',
  shareImage: {
    titleLines: ['Quel logiciel pour', `votre carrosserie${NBSP}?`],
    highlight: 'carrosserie',
    subtitle:
      'Six questions, les prix 2026 des logiciels d’atelier et un modèle de devis et de suivi de sinistre gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'wrench',
    alt: `Quel logiciel pour votre carrosserie${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels d’atelier et modèle de devis carrosserie avec fiche de suivi de sinistre, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'carrosserie',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre atelier, vos dossiers et ce qui vous prend du temps. Sinistres pris en charge par les assureurs, devis directs, flottes ou bris de glace, le test vous dit quel type de logiciel choisir pour chiffrer, suivre chaque dossier de l’expert au paiement et faire tourner la cabine, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. Chez Kodeva, j’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: BODY_SHOP_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels pour carrosserie et de leurs prix',
    intro: `Les tarifs affichés sur leur site par les éditeurs de logiciels d’atelier, et ce que chacun dit de la carrosserie. Aucun d’eux ne remplace le chiffreur normé (Sidexa, GT Estimate, DAT…) ni l’accès à Darva, la plateforme d’échanges des assureurs${NBSP}: tous deux sont sur devis, et une carrosserie qui travaille avec les assureurs cumule souvent deux ou trois abonnements.`,
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Gest’Garage',
        coverage: `Devis signés en ligne, ordres de réparation, factures, un taux horaire peinture distinct, SMS et e-mails${NBSP}; l’éditeur précise qu’il n’a ni base de temps constructeur, ni chiffrage peinture, ni dossiers de sinistre, ni photos sur l’OR`,
        price: `19${NBSP}€ TTC par mois`,
        priceCondition: `Ou 180${NBSP}€ par an, jusqu’à 5 collaborateurs, garage supplémentaire 10${NBSP}€ par mois${NBSP}; 14 jours sans carte, sans engagement`,
      },
      {
        name: 'TDV Agent (groupe Asttas)',
        coverage: `Tour du véhicule en 6 photos avant prise en charge, carte des dommages, signature du client, devis, factures Factur-X, stock, «${NBSP}suivi assurance pour les carrossiers${NBSP}» et factures assurance (Pro)${NBSP}; ni chiffrage, ni Darva, ni véhicule de prêt`,
        price: `19,90 à 79${NBSP}€ TTC par mois`,
        priceCondition: `Solo Essentiel 19,90${NBSP}€ (agenda seul), Solo Complet 24,90${NBSP}€, Essentiel 39${NBSP}€ (1 site, utilisateurs illimités), Pro 79${NBSP}€ (jusqu’à 3 sites)${NBSP}; 14 jours sans carte, sans engagement`,
      },
      {
        name: 'AutoProGestion',
        coverage: `Devis, ordres de réparation avec état des lieux, factures, fiches clients et véhicules, stock${NBSP}; signature à distance et inspection vidéo (Pro), véhicules de prêt avec contrat et état des lieux (formule non précisée)${NBSP}; ni chiffrage, ni assureurs`,
        price: `29 ou 59${NBSP}€ HT par mois`,
        priceCondition: `24 ou 49${NBSP}€ HT payés à l’année${NBSP}; Starter 100 clients et 2 utilisateurs, Pro illimité, Entreprise sur devis${NBSP}; 14 jours, carte non débitée`,
      },
      {
        name: 'Kwixéo',
        coverage: `Véhicules et ordres de réparation, devis, factures, stock${NBSP}; la carrosserie n’est pas mentionnée`,
        price: `18,33 à 89${NBSP}€ HT par mois`,
        priceCondition: `Essentiel, Pro ou Expert à 22, 59 et 89${NBSP}€ HT au mois, plus 6, 8 et 10${NBSP}€ par utilisateur en plus${NBSP}; payés à l’année, 18,33 à 74,17${NBSP}€ et 5 à 8,33${NBSP}€ par utilisateur la première année (2 mois offerts, puis 1)${NBSP}; 14 jours sans carte`,
      },
      {
        name: 'WinMotor Next (Solware Auto)',
        coverage: `DMS pour MRA, agents de marque et carrossiers${NBSP}: dossiers, pilotage de l’atelier, facturation multipayeurs et planning des véhicules de courtoisie (Premium)${NBSP}; chiffrage, Darva et Sidexa absents de la page tarifs${NBSP}; Windows 10 Pro uniquement`,
        price: `68${NBSP}€ HT par mois pour 1 utilisateur`,
        priceCondition: `Starter 44${NBSP}€ HT par utilisateur à partir de 2, Premium 87${NBSP}€ HT pour 1 ou 57${NBSP}€ par utilisateur${NBSP}; mise en œuvre, reprise de données et maintenance sans tarif${NBSP}; ni essai ni engagement indiqués`,
      },
      {
        name: 'ProGarage (BH Atelier)',
        coverage: `Devis, ordres de réparation, factures, stock, chiffrage pare-brise Glasscheck et «${NBSP}gestion des assurances${NBSP}» dès Essentiel${NBSP}; pas de module carrosserie en tant que tel`,
        price: `99 à 499${NBSP}€ HT par mois`,
        priceCondition: `Starter 99${NBSP}€ (1 utilisateur), Essentiel 199${NBSP}€ (3), Performance 299${NBSP}€ (5), Intégral 499${NBSP}€ (illimité)${NBSP}; 3 mois offerts à l’année${NBSP}; 7 jours d’essai, sans engagement`,
      },
      {
        name: 'EBP MéCa PRO + module Carrosserie, Fiducial (V-Mobility, Vulcain), Repair Soft, Cilea Mastercar, 3Dsoft MecaPlanning',
        coverage: `DMS avec dossiers de sinistre${NBSP}: échanges Darva, interfaces chiffreurs (Sidexa, Qapter, ETAI), avis de sinistre rempli par les données de l’assureur, répartition assureur / client, cession de créance, véhicules de remplacement, planning par compétences et chocs léger / moyen / gros (3Dsoft), selon l’éditeur${NBSP}; Darva se souscrit à part`,
        price: 'Sur devis',
        priceCondition: `Tarifs non publiés${NBSP}; démonstration gratuite`,
      },
      {
        name: `Chiffreurs${NBSP}: Sidexa Qapter, GT Estimate, DAT, Lacour Diva, Atelio Chiffrage`,
        coverage: `Chiffrage normé à partir des données constructeur (temps, pièces, peinture), accepté par l’expert et l’assureur${NBSP}; Qapter détecte les dommages sur photo. Un chiffreur ne fait ni l’ordre de réparation, ni la facture, ni le planning`,
        price: 'Sur devis',
        priceCondition: `Aucun tarif public${NBSP}; GT Estimate offre 15 jours d’essai`,
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer un vrai dossier au logiciel. Les photos du véhicule à la réception, le chiffrage envoyé à l’expert, son accord revenu dans le dossier avec l’écart, une pièce en attente qui décale le passage en cabine, le véhicule de prêt sorti puis rendu, puis la facture coupée entre l’assureur et le client, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 1er novembre 2026 sur les pages tarifs des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Taux affichés, pièces de réemploi, expert, véhicule de prêt${NBSP}: ce que votre logiciel doit suivre en 2026`,
    intro: `Un dossier de carrosserie ne se résume pas à un devis${NBSP}: les taux tôlerie et peinture affichés, le choix du client sur les pièces de réemploi, le libre choix du réparateur rappelé par l’assureur, l’accord de l’expert, le véhicule prêté et la cabine de peinture ont chacun leur règle. Ce sont elles que vos documents et votre suivi de dossier doivent porter.`,
    facts: [
      {
        contextLabel: 'Arrêté du 27 mars 1987',
        title: 'Un taux tôlerie, un taux peinture, chacun affiché TTC',
        text: `Quand vos taux horaires diffèrent (mécanique, carrosserie, peinture), chacun est affiché TTC à l’extérieur et à la réception, avec le mode de calcul (temps passé ou barème consultable). Amende administrative jusqu’à 3${NBSP}000${NBSP}€, 15${NBSP}000${NBSP}€ pour une société.`,
        sourceName: GARAGE_RULES_SOURCE.name,
        sourceUrl: GARAGE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er octobre 2024',
        title: 'Le choix du client sur les pièces de réemploi, tracé et conservé 2 ans',
        text: `Pièces de carrosserie amovibles, vitrages non collés, optiques, garnissage${NBSP}: le client choisit entre pièce neuve et pièce issue de l’économie circulaire, sur un support durable, avant d’accepter le devis, avec disponibilité, délai et prix. Le double est conservé 2 ans, et l’information s’affiche aussi sur votre site internet.`,
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Code des assurances, art. L211-5-1',
        title: 'Le libre choix du réparateur, rappelé dès la déclaration',
        text: `L’assuré choisit son réparateur, et l’assureur le lui rappelle de manière claire dès le premier contact pour déclarer le sinistre, par écrit si le rappel est oral (arrêté du 17 juin 2016). Depuis décembre 2020, une clause qui lui interdit de vous céder sa créance d’indemnité est nulle (art. L211-5-2).`,
        sourceName: FREE_CHOICE_OF_REPAIRER_SOURCE.name,
        sourceUrl: FREE_CHOICE_OF_REPAIRER_SOURCE.url,
      },
      {
        contextLabel: 'Aucun délai légal pour le rapport',
        title: `L’assureur choisit l’expert «${NBSP}en moyenne dans les 15 jours${NBSP}»`,
        text: `L’assureur choisit l’expert, en moyenne dans les 15 jours suivant la déclaration, et l’expert intervient sur place ou sur photos pour les sinistres légers${NBSP}; aucun texte ne fixe le délai du rapport. Ne réparez pas avant son passage, sauf urgence. Véhicule économiquement irréparable${NBSP}: l’assureur propose une indemnisation dans les 15 jours du rapport (article L327-1 du code de la route).`,
        sourceName: VEHICLE_APPRAISAL_SOURCE.name,
        sourceUrl: VEHICLE_APPRAISAL_SOURCE.url,
      },
      {
        contextLabel: 'Cass. 1re civ., 25 novembre 2003',
        title: `Véhicule de prêt${NBSP}: informer le client sur son assurance`,
        text: `Rien ne vous oblige à prêter un véhicule. Si vous le faites, vous devez informer le client sur les garanties d’assurance qui le couvrent, et le véhicule est au minimum assuré en responsabilité civile. Convention de prêt et état des lieux au départ et au retour sont un usage à garder dans le dossier.`,
        sourceName: COURTESY_CAR_SOURCE.name,
        sourceUrl: COURTESY_CAR_SOURCE.url,
      },
      {
        contextLabel: 'ICPE, rubrique 2930',
        title: `Cabine de peinture${NBSP}: déclaration au-delà de 10${NBSP}kg de produits par jour`,
        text: `Les ateliers de carrosserie relèvent de la rubrique 2930 des installations classées${NBSP}: l’application de peinture, vernis ou apprêt est soumise à déclaration avec contrôle au-delà de 10${NBSP}kg de produits par jour, à enregistrement au-delà de 100${NBSP}kg. Suivre les quantités passées en cabine dit de quel côté du seuil vous êtes.`,
        sourceName: PAINT_BOOTH_ICPE_SOURCE.name,
        sourceUrl: PAINT_BOOTH_ICPE_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText:
      'votre chiffreur, dont les temps et les pièces constructeur sont sous licence, ni Darva, que les assureurs imposent, ni votre comptabilité. Il suit le dossier entre ces outils (photos, accord de l’expert, pièces, cabine, prêt, part assureur et part client, relances), puis exporte vers votre DMS ou votre comptable.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un devis carrosserie avec relevé photos et une fiche de suivi de sinistre prêts à remplir',
    description: `Le devis avec les taux tôlerie et peinture, le relevé des dommages photo par photo, la nature de chaque pièce (neuve, réemploi, qualité équivalente, échange standard), la part de l’assureur et celle du client${NBSP}; la fiche de suivi d’un dossier, de l’entrée du véhicule au paiement de l’assureur. En PDF à imprimer, ou en Excel avec les totaux, les jours d’immobilisation, l’écart devis / accord et l’encours assureurs calculés.`,
    items: [
      `Devis carrosserie${NBSP}: sinistre (assureur, n° de sinistre, expert, mode d’expertise), relevé photos par zone avec décision réparer / remplacer et pièce de réemploi proposée, lignes de chiffrage avec heures tôlerie et peinture, part assureur / part client, cession de créance, accords du client`,
      `Fiche de suivi de sinistre${NBSP}: photos et devis envoyés, accord de l’expert et montant, pièces commandées, reçues ou manquantes, tôlerie, créneau cabine, véhicule de prêt, restitution, facture, paiement de l’assureur et relances`,
      `Dans l’Excel${NBSP}: jours d’immobilisation, écart devis / accord, encours assureurs, dossiers en attente de pièces ou d’accord et taux d’occupation de la cabine calculés, plus un planning cabine et un registre des véhicules de prêt`,
    ],
    downloads: [
      {
        label: 'Télécharger le modèle PDF',
        href: BODY_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: BODY_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux et délais calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre atelier. Il ne remplace ni le chiffreur ni l’avis de votre comptable.',
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
          {
            state: 'yes',
            text: `18 à 499${NBSP}€ par mois pour le logiciel d’atelier${NBSP}; chiffreur et Darva en plus, sur devis`,
          },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Chiffrage normé et échanges Darva',
        cells: [
          { state: 'partial', text: 'Par le chiffreur et un DMS partenaire de Darva, tous deux sur devis' },
          { state: 'yes', text: 'Restent dans vos outils actuels' },
          { state: 'partial', text: 'Restent dans votre chiffreur et Darva, reliés à l’outil' },
        ],
      },
      {
        label: 'Suivi du dossier sinistre (accord, pièces, cabine, prêt, paiement)',
        cells: [
          {
            state: 'partial',
            text: `Complet dans les DMS avec module carrosserie, absent des logiciels à moins de 100${NBSP}€`,
          },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre circuit, du relevé photos à l’encaissement' },
        ],
      },
      {
        label: 'Client tenu informé (étapes du dossier, photos, véhicule de prêt)',
        cells: [
          { state: 'partial', text: 'Souvent un SMS ou un portail de l’éditeur, à ses couleurs' },
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
    rowsShownOnSmallScreens: BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: BODY_SHOP_PAGE_PROJECT_SLUG,
    screenshotUrl: BODY_SHOP_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Ce n’est pas un logiciel de carrosserie, mais le principe est le même que compter les heures de tôlerie et de peinture passées sur chaque dossier, pour connaître sa rentabilité face au montant accordé par l’expert.',
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
    title: `Logiciel pour carrosserie${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de carrosserie${NBSP}?`,
        answer: `Pour le logiciel d’atelier${NBSP}: Gest’Garage 19${NBSP}€ TTC par mois, TDV Agent 19,90 à 79${NBSP}€ TTC, AutoProGestion 29 ou 59${NBSP}€ HT, Kwixéo 22 à 89${NBSP}€ HT au mois (18,33 à 74,17${NBSP}€ la première année payée à l’année), WinMotor Next 68${NBSP}€ HT pour un utilisateur (44${NBSP}€ par utilisateur à partir de deux), ProGarage 99 à 499${NBSP}€ HT. Les DMS avec module carrosserie (EBP MéCa PRO, Fiducial, Repair Soft, Cilea, 3Dsoft) et les chiffreurs (Sidexa, GT Estimate, DAT, Lacour, Atelio) sont sur devis, et l’accès à Darva se souscrit à part (tarifs relevés le 1er novembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Faut-il un chiffreur (Sidexa, GT Estimate, DAT) en plus du logiciel d’atelier${NBSP}?`,
        answer: `Oui dès que vos dossiers passent par les assureurs${NBSP}: le chiffreur produit, à partir des temps et des pièces constructeur sous licence, un chiffrage que l’expert et l’assureur acceptent. Aucun logiciel d’atelier à moins de 100${NBSP}€ par mois n’en contient, et Gest’Garage le dit lui-même${NBSP}: ni base de temps constructeur, ni chiffrage peinture. Les DMS avec module carrosserie (EBP MéCa PRO, Fiducial, Repair Soft) s’interfacent avec ces chiffreurs pour éviter la ressaisie, après création d’un compte chez chaque plateforme. Sidexa Qapter va plus loin en détectant les dommages sur photo. Pour des clients qui paient eux-mêmes, un logiciel d’atelier avec un taux peinture distinct suffit souvent.`,
      },
      {
        question: `Darva, c’est quoi, et combien ça coûte${NBSP}?`,
        answer: `Darva est la plateforme d’échanges entre assureurs, experts et réparateurs, créée en 1988 près de Niort et détenue en majorité par des assureurs${NBSP}; sa page de présentation annonce 9 millions de dossiers sinistres. La mission de l’assureur, l’avis de sinistre, les photos, l’accord de l’expert, la facture et le paiement y transitent. Ce n’est pas un logiciel de gestion${NBSP}: on y accède par un DMS partenaire (EBP, Fiducial, Solware, Cilea, Repair Soft…) ou par le portail Sinapps Auto, avec une souscription séparée dont le tarif n’est pas publié. Son service Flash envoie un lien par SMS à l’assuré pour qu’il photographie lui-même les dégâts. À ne pas confondre avec Alpha Scale, qui n’est pas un chiffreur mais une centrale d’achats de pièces créée par Prefikar, filiale d’Axa.`,
      },
      {
        question: `Peut-on suivre ses sinistres sans logiciel spécialisé, ou avec un logiciel gratuit${NBSP}?`,
        answer: `Les logiciels relevés sont tous payants, mais la plupart se testent sans payer${NBSP}: 14 jours sans carte chez Gest’Garage, TDV Agent et Kwixéo, 14 jours chez AutoProGestion (carte non débitée), 7 jours chez ProGarage, 15 jours pour le chiffreur GT Estimate. Pour une petite carrosserie, la fiche de suivi gratuite de cette page, une ligne par dossier dans Excel, suffit à voir où en est chaque véhicule et ce que chaque assureur vous doit. Ce qu’un tableau ne fait pas${NBSP}: lier les photos au dossier, relancer tout seul l’expert ou le fournisseur, et tenir au-delà d’une trentaine de dossiers ouverts en même temps.`,
      },
      {
        question: `Quelles pièces de réemploi proposer en carrosserie${NBSP}?`,
        answer: `Les catégories du code de la consommation (art. R224-25) visent directement votre atelier${NBSP}: pièces de carrosserie amovibles, garnissage intérieur, vitrages non collés, pièces optiques, et certaines pièces mécaniques ou électroniques hors trains roulants, direction, freinage et liaison au sol. Vous pouvez ne pas en proposer si la prestation est gratuite, sous garantie ou liée à un rappel, si la pièce n’est pas disponible dans un délai compatible avec l’immobilisation du véhicule, ou en cas de risque pour la sécurité (art. R224-24), en notant le motif. Le choix du client est recueilli sur un support durable avant son accord, avec la disponibilité, le délai et le prix, et le double est conservé 2 ans${NBSP}; l’information s’affiche à l’extérieur et sur votre site internet. Sanction${NBSP}: jusqu’à 3${NBSP}000${NBSP}€, 15${NBSP}000${NBSP}€ pour une société. Les pièces de qualité équivalente, elles, n’ont pas de règle propre${NBSP}; depuis le 1er janvier 2023, le vitrage est libre de droits et les autres pièces visibles peuvent venir de l’équipementier d’origine (art. L513-6 du code de la propriété intellectuelle).`,
      },
      {
        question: `Que dire au client sur le libre choix du réparateur${NBSP}?`,
        answer: `Que son contrat le mentionne et que son assureur doit le lui rappeler dès le premier contact pour déclarer le sinistre, par écrit si c’est oral (art. L211-5-1 du code des assurances, arrêté du 17 juin 2016)${NBSP}: il peut faire réparer chez vous même si l’assureur l’oriente vers son réseau agréé. L’assureur garde le choix de l’expert, qu’il désigne en moyenne dans les 15 jours, et aucun texte ne fixe le délai de son rapport. Le modèle de devis de cette page prévoit une case «${NBSP}libre choix du réparateur rappelé au client${NBSP}», utile si le dossier se discute ensuite.`,
      },
      {
        question: `La cession de créance, comment ça marche${NBSP}?`,
        answer: `Le client vous cède son droit à l’indemnité${NBSP}: vous facturez l’assureur directement pour sa part, et le client ne vous règle que sa franchise et l’éventuelle vétusté. Depuis la loi du 3 décembre 2020, une clause du contrat d’assurance qui interdit cette cession est nulle (art. L211-5-2 du code des assurances). Faites signer un document de cession joint au devis et gardez-le dans le dossier${NBSP}; EBP MéCa PRO la gère avec une interface Mobilians, et le modèle gratuit de cette page a sa ligne «${NBSP}cession de créance${NBSP}: oui / non${NBSP}» et ses deux parts, assureur et client.`,
      },
      {
        question: `Véhicule de prêt${NBSP}: qui assure, et que garder dans le dossier${NBSP}?`,
        answer: `Vous n’êtes pas obligé de prêter un véhicule. Si vous le faites, vous devez informer le client sur les garanties d’assurance qui le couvrent (Cass. 1re civ., 25 novembre 2003), et le véhicule est au minimum assuré en responsabilité civile${NBSP}: vérifiez que votre contrat d’atelier couvre les véhicules prêtés à des clients. Gardez dans le dossier une convention de prêt, l’état des lieux au départ et au retour, le kilométrage et les dates. Côté logiciels, AutoProGestion gère le contrat et l’état des lieux, WinMotor Next (Premium) et 3Dsoft le planning des véhicules de courtoisie, Repair Soft les véhicules de remplacement${NBSP}; l’Excel gratuit de cette page a un registre des prêts.`,
      },
      {
        question: `Cabine de peinture${NBSP}: suis-je une installation classée, et que faire des déchets${NBSP}?`,
        answer: `Les ateliers de carrosserie relèvent de la rubrique 2930 des installations classées${NBSP}: l’application de peinture, vernis ou apprêt est soumise à déclaration avec contrôle au-delà de 10${NBSP}kg de produits par jour et à enregistrement au-delà de 100${NBSP}kg${NBSP}; la réparation elle-même l’est au-delà de 2${NBSP}000${NBSP}m² d’atelier. Tenez le compte des quantités passées en cabine pour savoir de quel côté du seuil vous êtes. Peintures, solvants, aérosols, huiles et batteries sont des déchets dangereux${NBSP}: le bordereau de suivi est dématérialisé sur Trackdéchets depuis le 1er janvier 2022, et le registre chronologique y est déclaré depuis le 5 mai 2025, sous 7 jours. Un véhicule hors d’usage part dans un centre VHU agréé, avec certificat de destruction.`,
      },
      {
        question: `Facture électronique et factures aux assureurs${NBSP}: qu’est-ce qui change${NBSP}?`,
        answer: `Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026, et les PME devront les émettre à partir du 1er septembre 2027. Vos factures aux assureurs et aux flottes sont des factures entre professionnels${NBSP}: elles passeront par une plateforme agréée, au format Factur-X ou équivalent${NBSP}; les factures aux particuliers relèvent de l’e-reporting. Vérifiez donc que votre logiciel sait couper une facture entre la part assureur et la part client (TDV Agent en offre Pro, WinMotor Next avec sa facturation multipayeurs, EBP MéCa PRO avec sa répartition assurance / client) et qu’il produit déjà du Factur-X, comme TDV Agent dès l’offre Essentiel.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos véhicules, vos dossiers et vos factures en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur, et demandez ce qu’il advient des photos.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre carrosserie${NBSP}?`,
    description: `Décrivez-moi votre atelier et vos dossiers en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
