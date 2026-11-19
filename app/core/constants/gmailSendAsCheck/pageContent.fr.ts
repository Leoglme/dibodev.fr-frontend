import type { DibodevGmailSendAsCheckPageContent } from '~/core/types/DibodevGmailSendAsCheckPage'
import { GMAIL_HELP_PAGE_URLS } from '~/core/constants/gmailSendAsCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

const THIRD_PARTY_CHANGES_URL: string = `${GMAIL_HELP_PAGE_URLS.thirdPartyChanges}?hl=fr`
const GMAILIFY_AND_POP_URL: string = `${GMAIL_HELP_PAGE_URLS.gmailifyAndPop}?hl=fr`
const THIRD_PARTY_CHANGES_SOURCE_NAME: string = 'Aide Gmail, comptes de messagerie tiers'
const GMAILIFY_AND_POP_SOURCE_NAME: string = 'Aide Gmail, Gmailify et accès POP'

export const GMAIL_SEND_AS_CHECK_PAGE_FR: DibodevGmailSendAsCheckPageContent = {
  meta: {
    title: `Gmail «${NBSP}Envoyer en tant que${NBSP}»${NBSP}: fin en 2027, test gratuit`,
    description: `À partir de janvier 2027, Gmail gratuit n’envoie plus avec une adresse hébergée ailleurs et ne la relève plus. Entrez votre adresse${NBSP}: verdict et solutions.`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Fin de « Envoyer en tant que », de « Consulter d’autres comptes de messagerie » et de Gmailify dans Gmail en janvier 2027',
  },
  breadcrumbLabel: `Gmail, janvier 2027${NBSP}: mon adresse est-elle concernée${NBSP}?`,
  shareImage: {
    titleLines: ['Gmail 2027 : mon adresse', 'est-elle concernée ?'],
    highlight: 'concernée',
    subtitle: 'Fin de « Envoyer en tant que » : test gratuit, verdict et solutions',
    badge: 'Test gratuit',
    alt: 'Gmail, janvier 2027 : mon adresse est-elle concernée ? Test gratuit par Dibodev',
  },
  hero: {
    titleBefore: `Fin de «${NBSP}Envoyer en tant que${NBSP}» dans Gmail${NBSP}: votre adresse est-elle `,
    titleHighlight: 'concernée',
    titleAfter: `${NBSP}?`,
    reassurances: ['Gratuit, sans inscription', 'Résultat en une minute', 'Pages de Google relues le 19 novembre 2026'],
    description: `À partir de janvier 2027, d’après Google, un compte Gmail gratuit ne pourra plus envoyer de mails avec une adresse hébergée ailleurs (réglage «${NBSP}Envoyer des e-mails en tant que${NBSP}») ni aller chercher les mails de cette adresse (réglage «${NBSP}Consulter d’autres comptes de messagerie${NBSP}»). Sont concernées les adresses professionnelles à votre nom de domaine hébergées chez OVHcloud, o2switch, IONOS ou un autre hébergeur, et les adresses Orange, Free, SFR, Outlook ou Yahoo lues dans Gmail. Entrez votre adresse${NBSP}: l’outil lit où elle est hébergée, vous pose trois questions, et vous dit ce qui s’arrête pour vous et quoi faire.`,
    authorIntro: 'Outil réalisé par',
    authorBio: `développeur freelance près de Rennes. Mon adresse professionnelle est elle-même hébergée chez o2switch et lue dans un Gmail gratuit${NBSP}: j’ai testé les solutions le 19 novembre 2026. Je règle la messagerie des TPE et des PME à distance et je réponds sous 24${NBSP}h.`,
  },
  checker: {
    addressLabel: 'Votre adresse e-mail professionnelle',
    addressPlaceholder: 'contact@monentreprise.fr',
    addressHint: `Seul le nom de domaine (ce qui suit le @) est envoyé à l’outil, jamais le début de l’adresse. L’outil lit les serveurs de messagerie publics de ce domaine${NBSP}: aucun mail envoyé, aucun mot de passe demandé. Seuls le domaine et son résultat sont gardés, pour des statistiques.`,
    submit: 'Tester mon adresse',
    checking: 'Lecture du domaine…',
    questionsTitle: 'Trois questions pour finir',
    questionsIntro: `L’hébergement de votre adresse ne dit pas comment vous l’utilisez. Répondez à ce que vous savez${NBSP}: «${NBSP}je ne sais pas${NBSP}» est une réponse.`,
    questions: {
      reading: {
        label: `Où lisez-vous les mails de cette adresse${NBSP}?`,
        hint: '',
        options: {
          inGmail: 'Dans Gmail, avec mon compte @gmail.com',
          elsewhere: 'Ailleurs (webmail, Outlook, Thunderbird…)',
        },
      },
      sending: {
        label: `Quand vous écrivez depuis Gmail, quelle adresse voient vos destinataires${NBSP}?`,
        hint: `C’est l’adresse de la ligne «${NBSP}De${NBSP}» d’un nouveau message.`,
        options: {
          domainAddress: 'Mon adresse @{domain}',
          gmailAddress: 'Mon adresse @gmail.com',
          unknown: 'Je ne sais pas',
        },
      },
      receiving: {
        label: `Dans Gmail, votre adresse est-elle à la ligne «${NBSP}Consulter d’autres comptes de messagerie${NBSP}»${NBSP}?`,
        hint: `Sur ordinateur${NBSP}: roue dentée, «${NBSP}Afficher tous les paramètres${NBSP}», onglet «${NBSP}Comptes et importation${NBSP}».`,
        options: {
          listed: 'Oui, elle y est',
          notListed: 'Non, la ligne est vide',
          unknown: 'Je n’ai pas regardé',
        },
      },
    },
    resultLabel: 'Votre résultat',
    idleTitle: 'Entrez votre adresse pour commencer',
    idleText: `L’outil dit où vos mails sont hébergés, chez Google ou ailleurs, puis, après trois questions, ce qui s’arrête pour vous à partir de janvier 2027${NBSP}: l’envoi, la réception, les deux, ou rien.`,
    loadingTitle: 'Lecture du domaine…',
    loadingText: 'Je lis les serveurs de messagerie de ce nom de domaine. Quelques secondes.',
    errorTitles: {
      invalid: 'Adresse à corriger',
      unreachable: 'Domaine injoignable',
      rateLimited: 'Trop de vérifications',
      failed: 'Vérification impossible',
    },
    errorTexts: {
      invalid: `Entrez une adresse e-mail, comme contact@monentreprise.fr, ou un nom de domaine${NBSP}: seul ce qui suit le @ est utilisé.`,
      unreachable: `Les serveurs de {domain} n’ont pas répondu${NBSP}: réessayez dans un instant.`,
      rateLimited: 'Vous avez lancé beaucoup de vérifications en peu de temps. Réessayez dans quelques minutes.',
      failed: 'Une erreur est survenue de mon côté. Réessayez dans un instant, ou écrivez-moi votre adresse.',
    },
    hostingTitle: 'Où sont vos mails',
    hostingLines: {
      gmailAddress: `{domain} est une adresse Gmail${NBSP}: elle est hébergée par Google.`,
      googleHosted: 'Les mails de {domain} sont hébergés chez Google (Google Workspace).',
      consumerMailbox: '{domain} est une messagerie hébergée ailleurs que chez Google.',
      thirdParty: 'Les mails de {domain} sont hébergés chez {host}, pas chez Google.',
      noMailSetup: `{domain} n’a aucun serveur de messagerie${NBSP}: ce domaine ne reçoit pas de mail.`,
      invalidDomain: '',
    },
    unknownHostName: 'un hébergeur que l’outil ne reconnaît pas (serveur {mxHost})',
    pendingTitle: 'Adresse hébergée hors de Google',
    pendingText: `Elle peut être concernée, selon la façon dont vous l’utilisez. Répondez aux trois questions${NBSP}: le verdict s’affiche ici.`,
    verdictTitles: {
      bothAffected: `Concernée${NBSP}: l’envoi et la réception s’arrêtent`,
      sendingAffected: `Concernée${NBSP}: l’envoi avec cette adresse s’arrête`,
      receivingAffected: `Concernée${NBSP}: la réception dans Gmail s’arrête`,
      notAffected: 'Pas concernée, avec vos réglages actuels',
      toCheck: `À vérifier dans Gmail${NBSP}: une minute`,
      notInGmail: `Pas concernée${NBSP}: vous n’utilisez pas Gmail pour cette adresse`,
      googleHosted: `Pas concernée${NBSP}: adresse hébergée chez Google`,
      gmailAddress: `Pas concernée${NBSP}: c’est une adresse Gmail`,
      noMailSetup: 'Aucune messagerie sur ce domaine',
      invalidDomain: 'Domaine introuvable',
    },
    verdictTexts: {
      bothAffected: `À partir de janvier 2027, d’après Google, votre Gmail gratuit ne pourra plus envoyer avec votre adresse @{domain} («${NBSP}Envoyer des e-mails en tant que${NBSP}») ni aller chercher ses mails chez {host} («${NBSP}Consulter d’autres comptes de messagerie${NBSP}»). Les mails déjà arrivés restent dans Gmail. Il faut choisir une solution avant, pour ne perdre aucun message.`,
      sendingAffected: `À partir de janvier 2027, d’après Google, votre Gmail gratuit ne pourra plus envoyer avec votre adresse @{domain}${NBSP}: le réglage «${NBSP}Envoyer des e-mails en tant que${NBSP}» s’arrête pour les adresses hébergées hors de Google. La réception n’est pas touchée si vos mails arrivent par un transfert automatique.`,
      receivingAffected: `À partir de janvier 2027, d’après Google, Gmail n’ira plus chercher les mails de votre adresse @{domain} chez {host}${NBSP}: le réglage «${NBSP}Consulter d’autres comptes de messagerie${NBSP}» s’arrête. Les nouveaux mails resteront chez {host}, sans arriver dans Gmail. Les mails déjà arrivés restent.`,
      notAffected: `Vos mails arrivent dans Gmail par un transfert automatique réglé chez {host}, et vous écrivez avec votre adresse @gmail.com${NBSP}: Google ne touche ni à l’un ni à l’autre. Rien à faire, sauf si vous voulez écrire à vos clients avec votre adresse @{domain}.`,
      toCheck: `Votre adresse est hébergée chez {host}${NBSP}: elle est concernée si elle apparaît dans les réglages de Gmail. Ouvrez Gmail sur un ordinateur, la roue dentée, «${NBSP}Afficher tous les paramètres${NBSP}», onglet «${NBSP}Comptes et importation${NBSP}», et lisez les deux lignes ci-dessous.`,
      notInGmail: `Le changement de janvier 2027 ne touche que Gmail. Si vous lisez et envoyez vos mails @{domain} dans le webmail de votre hébergeur, dans Outlook, Thunderbird ou Apple Mail, rien ne change pour vous.`,
      googleHosted: `Google l’écrit${NBSP}: la fin de «${NBSP}Envoyer en tant que${NBSP}» ne concerne ni les adresses hébergées par Google ni les alias Google Workspace. Rien à faire pour {domain}.`,
      gmailAddress: `Google l’écrit${NBSP}: envoyer avec une autre adresse Gmail reste possible. Le changement de janvier 2027 concerne les adresses hébergées ailleurs. Si vous avez aussi une adresse à votre nom de domaine, testez celle-là.`,
      noMailSetup: `Aucune adresse en @{domain} ne peut recevoir de mail. Vérifiez ce qui suit le @ dans votre adresse professionnelle et relancez le test.`,
      invalidDomain: `Aucun serveur ne répond pour {domain}${NBSP}: le nom est mal écrit, expiré, ou pas encore enregistré. Vérifiez ce qui suit le @ dans votre adresse.`,
    },
    checkSendingNote: `Envoi à vérifier${NBSP}: si votre adresse est à la ligne «${NBSP}Envoyer des e-mails en tant que${NBSP}», l’envoi avec cette adresse s’arrête.`,
    checkReceivingNote: `Réception à vérifier${NBSP}: si votre adresse est à la ligne «${NBSP}Consulter d’autres comptes de messagerie${NBSP}», la réception s’arrête. Si elle n’y est pas et que vos mails arrivent, c’est un transfert${NBSP}: il continue.`,
    stepsTitle: 'Quoi faire, dans l’ordre',
    verdictSteps: {
      bothAffected: [
        `Avant janvier${NBSP}: créez chez {host} un transfert automatique de votre adresse vers votre Gmail, pour continuer à recevoir.`,
        `Pour continuer à écrire avec @{domain} depuis Gmail${NBSP}: passez ce Gmail en Google Workspace (6,80 à 8,10${NBSP}€ HT par mois), ou écrivez depuis le webmail de votre hébergeur ou un logiciel de messagerie (gratuit).`,
        'Après tout changement, envoyez-vous un mail d’essai et vérifiez qu’il n’arrive pas en spam.',
      ],
      sendingAffected: [
        `Pour garder Gmail tel quel${NBSP}: passez-le en Google Workspace (6,80 à 8,10${NBSP}€ HT par mois et par boîte), l’adresse @{domain} devient une adresse Google.`,
        `Ou restez en Gmail gratuit et écrivez avec @{domain} depuis le webmail de votre hébergeur, un logiciel de messagerie ou l’application Gmail du téléphone.`,
        `Ou écrivez avec votre adresse @gmail.com${NBSP}: gratuit, mais vos clients voient une adresse Gmail.`,
      ],
      receivingAffected: [
        `Créez chez {host} un transfert automatique de votre adresse @{domain} vers votre adresse Gmail${NBSP}: Google confirme que le transfert continue de fonctionner.`,
        'Envoyez-vous un mail d’essai depuis une autre adresse, et regardez aussi le dossier Spam de Gmail.',
        `Gardez l’accès au webmail de votre hébergeur${NBSP}: c’est là que restent les mails si le transfert s’arrête un jour.`,
      ],
      toCheck: [
        `Ligne «${NBSP}Envoyer des e-mails en tant que${NBSP}»${NBSP}: si votre adresse @{domain} y figure, l’envoi s’arrête.`,
        `Ligne «${NBSP}Consulter d’autres comptes de messagerie${NBSP}»${NBSP}: si elle y figure, la réception s’arrête.`,
        `Revenez ici et changez vos deux réponses${NBSP}: l’outil vous donne la marche à suivre.`,
      ],
    },
    hostGuideTitle: 'Le guide pour votre messagerie',
    disclaimer: `L’outil lit où le domaine est hébergé${NBSP}; il ne voit pas les réglages de votre Gmail. Le verdict repose sur vos réponses et sur les pages d’aide de Google lues le 19 novembre 2026. Google n’a pas donné de jour précis.`,
    idleCtaIntro: `Vous préférez que je regarde${NBSP}? Envoyez-moi votre adresse${NBSP}: je vous dis sous 24${NBSP}h ce qui est touché et quelle solution vous convient.`,
    idleCtaLabel: 'Demander un avis gratuit',
    ctaIntro: `Je peux m’en occuper à distance${NBSP}: transfert, réglages du nom de domaine, passage à Google Workspace, essais d’envoi. Premier avis gratuit sous 24${NBSP}h, et si un réglage gratuit vous suffit, je vous le dis.`,
    ctaLabel: 'Envoyer mon résultat',
  },
  offer: {
    emphasizedIntro: `Vous ne voulez pas y toucher${NBSP}?`,
    text: `Je règle votre messagerie à distance${NBSP}: je regarde ce qui est en place, je vous propose la solution la plus simple, puis je fais les réglages et les essais avec vous. Premier avis gratuit, réponse sous 24${NBSP}h.`,
    linkLabel: 'M’écrire au sujet de mon adresse',
  },
  mobileContactBar: {
    text: `Besoin d’aide pour votre adresse${NBSP}?`,
    buttonLabel: 'Demander un avis gratuit',
  },
  summary: {
    eyebrow: 'En bref',
    text: `À partir de janvier 2027, d’après Google, un compte Gmail gratuit ne peut plus envoyer de mails avec une adresse hébergée hors de Google («${NBSP}Envoyer en tant que${NBSP}»), ni aller chercher les mails d’une autre boîte («${NBSP}Consulter d’autres comptes de messagerie${NBSP}»), et Gmailify s’arrête. Le transfert automatique vers Gmail, l’application Gmail du téléphone et Google Workspace continuent de fonctionner. Une adresse professionnelle hébergée chez OVHcloud, o2switch ou IONOS et lue dans un Gmail gratuit est donc concernée${NBSP}; une adresse Google Workspace ne l’est pas.`,
    dateLabel: 'Pages d’aide de Google relues le 19 novembre 2026. Google ne donne pas de jour précis.',
  },
  facts: {
    anchorId: 'ce-qui-s-arrete',
    eyebrow: 'Ce que dit Google',
    title: 'Ce qui s’arrête dans Gmail à partir de janvier 2027',
    intro: 'Six faits, chacun lu le 19 novembre 2026 sur une page d’aide de Google.',
    facts: [
      {
        contextLabel: 'Janvier 2027',
        title: `«${NBSP}Envoyer en tant que${NBSP}» s’arrête pour les adresses hébergées ailleurs`,
        text: `Google écrit${NBSP}: «${NBSP}Vous ne pourrez plus envoyer d’e-mails depuis des comptes de messagerie tiers dans Gmail sur le Web ni dans les applications mobiles Gmail.${NBSP}» Le réglage s’appelle «${NBSP}Envoyer des e-mails en tant que${NBSP}», dans l’onglet «${NBSP}Comptes et importation${NBSP}».`,
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Janvier 2027',
        title: `«${NBSP}Consulter d’autres comptes de messagerie${NBSP}» s’arrête aussi`,
        text: `Gmail n’ira plus chercher les mails d’une autre boîte. Google écrit que «${NBSP}l’extraction d’e-mails depuis des comptes tiers dans votre compte Gmail via l’accès POP ne sera plus prise en charge${NBSP}». L’option disparaît de Gmail sur ordinateur, et Gmailify s’arrête en même temps.`,
        sourceName: GMAILIFY_AND_POP_SOURCE_NAME,
        sourceUrl: GMAILIFY_AND_POP_URL,
      },
      {
        contextLabel: 'Depuis 2026',
        title: 'Les nouveaux réglages sont déjà fermés',
        text: `«${NBSP}Après le premier trimestre 2026, cette fonctionnalité n’acceptera plus les nouveaux utilisateurs. Les utilisateurs existants pourront continuer à utiliser cette fonctionnalité jusqu’en janvier 2027.${NBSP}» Un réglage qui marche aujourd’hui marche donc jusqu’à cette date.`,
        sourceName: GMAILIFY_AND_POP_SOURCE_NAME,
        sourceUrl: GMAILIFY_AND_POP_URL,
      },
      {
        contextLabel: 'Calendrier',
        title: 'Aucun jour précis n’est annoncé',
        text: `Google donne trois étapes${NBSP}: annonce et notification dans Gmail au troisième trimestre 2026, période de transition jusqu’à la fin de 2026, puis suppression complète «${NBSP}en janvier 2027${NBSP}». Aucune page ne donne le jour.`,
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Entreprises',
        title: 'Google renvoie les professionnels vers trois solutions',
        text: `À la question «${NBSP}Que faire si j’utilise la fonctionnalité “Envoyer en tant que” pour mon entreprise${NBSP}?${NBSP}», Google répond${NBSP}: un logiciel de messagerie pour ordinateur, l’interface de votre fournisseur, ou «${NBSP}utiliser Google Workspace pour un domaine personnalisé${NBSP}».`,
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Mise en garde',
        title: 'Google déconseille les outils qui promettent de recréer la fonction',
        text: `Les services tiers et les extensions de navigateur qui proposent de reproduire «${NBSP}Envoyer en tant que${NBSP}» «${NBSP}nécessitent souvent d’accéder à vos identifiants de messagerie${NBSP}», écrit Google, qui ne garantit ni leur sécurité ni leur fiabilité.`,
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
    ],
    calloutEmphasizedIntro: 'Ce que Google n’écrit pas.',
    calloutText: `Les exemples de Google sont des adresses Yahoo et Hotmail. L’adresse d’un nom de domaine hébergé chez un hébergeur n’est pas citée mot pour mot. Mais Google écrit que «${NBSP}seuls les comptes de messagerie tiers autres que Google sont concernés${NBSP}» et répond «${NBSP}Google Workspace pour un domaine personnalisé${NBSP}» aux entreprises${NBSP}: je la considère donc comme concernée, et je corrigerai cette page si Google précise.`,
  },
  unchanged: {
    anchorId: 'ce-qui-continue',
    eyebrow: 'Ce qui continue',
    title: 'Ce qui ne change pas en janvier 2027',
    intro: 'Écrit par Google sur les mêmes pages d’aide, lues le 19 novembre 2026.',
    items: [
      {
        title: 'Le transfert automatique vers Gmail',
        description: `Un transfert réglé chez votre hébergeur continue d’apporter vos mails dans Gmail. Google${NBSP}: «${NBSP}Vous pouvez configurer votre fournisseur tiers pour qu’il transfère automatiquement les messages vers votre adresse Gmail.${NBSP}»`,
      },
      {
        title: 'Les adresses hébergées par Google',
        description: `Une adresse Google Workspace, un alias Google Workspace ou une autre adresse Gmail restent utilisables dans «${NBSP}Envoyer en tant que${NBSP}».`,
      },
      {
        title: 'L’application Gmail du téléphone',
        description: `Sur Android, iPhone et iPad, vous pouvez toujours ajouter l’adresse d’un autre fournisseur comme un compte à part, la lire et écrire avec elle. L’application se connecte alors directement à votre hébergeur${NBSP}: ce n’est pas le réglage «${NBSP}Envoyer en tant que${NBSP}».`,
      },
      {
        title: 'Les mails déjà arrivés',
        description: `«${NBSP}Tous les messages que vous avez déjà importés dans Gmail depuis un compte tiers resteront dans votre boîte aux lettres.${NBSP}»`,
      },
      {
        title: 'Gmail dans Outlook, Thunderbird ou Apple Mail',
        description: 'Lire son adresse Gmail dans un logiciel de messagerie reste possible, comme aujourd’hui.',
      },
      {
        title: 'L’import ponctuel',
        description: `«${NBSP}Importer le courrier et les contacts${NBSP}» reste disponible pour reprendre d’anciens mails une seule fois, sans synchronisation continue.`,
      },
    ],
  },
  gmailSteps: {
    eyebrow: 'Vérifier soi-même',
    title: 'Comment vérifier dans Gmail en une minute',
    intro: `Sur un ordinateur, pas sur le téléphone${NBSP}: ces réglages ne sont pas dans l’application.`,
    steps: [
      {
        label: 'Paramètres',
        title: 'Ouvrez les paramètres de Gmail',
        description: `Dans Gmail sur ordinateur, cliquez sur la roue dentée en haut à droite, puis sur «${NBSP}Afficher tous les paramètres${NBSP}».`,
      },
      {
        label: 'Onglet',
        title: `Allez dans «${NBSP}Comptes et importation${NBSP}»`,
        description: `L’onglet s’appelle «${NBSP}Comptes${NBSP}» sur certains comptes.`,
      },
      {
        label: 'Envoi',
        title: `Lisez la ligne «${NBSP}Envoyer des e-mails en tant que${NBSP}»`,
        description:
          'Si votre adresse professionnelle y figure, sous votre adresse Gmail, l’envoi avec cette adresse s’arrête à partir de janvier 2027.',
      },
      {
        label: 'Réception',
        title: `Lisez la ligne «${NBSP}Consulter d’autres comptes de messagerie${NBSP}»`,
        description: `Si votre adresse y figure, Gmail va chercher vos mails chez l’hébergeur${NBSP}: cette réception s’arrête. Si la ligne est vide et que vos mails arrivent quand même, ils viennent d’un transfert, qui continue.`,
      },
      {
        label: 'Résultat',
        title: 'Reportez vos réponses dans le test',
        description: 'Le test en haut de cette page vous dit alors quoi faire, et dans quel ordre.',
      },
    ],
  },
  solutions: {
    anchorId: 'solutions',
    eyebrow: 'Les solutions',
    title: `Cinq solutions, de gratuite à 8,10${NBSP}€ par mois`,
    intro: 'Ce que chacune garde, ce qu’elle coûte, et pour qui elle convient. Prix de Google lus le 19 novembre 2026.',
    solutionColumnLabel: 'Solution',
    coverageColumnLabel: 'Ce que vous gardez',
    costColumnLabel: 'Coût',
    rows: [
      {
        name: 'Transfert automatique vers Gmail',
        coverage: `Vous recevez toujours dans Gmail. Vous répondez avec votre adresse @gmail.com${NBSP}: vos clients ne voient plus votre adresse professionnelle.`,
        price: `0${NBSP}€`,
        priceCondition: 'Réglage chez l’hébergeur, réception seulement',
      },
      {
        name: 'Transfert et webmail de l’hébergeur',
        coverage:
          'Vous recevez dans Gmail et vous écrivez avec votre adresse professionnelle depuis le site de votre hébergeur. Deux endroits à ouvrir.',
        price: `0${NBSP}€`,
        priceCondition: 'Compris dans votre hébergement',
      },
      {
        name: 'Logiciel de messagerie',
        coverage:
          'Thunderbird, Outlook ou Apple Mail lisent et envoient avec votre adresse professionnelle. Vous quittez l’écran de Gmail pour cette adresse.',
        price: `0${NBSP}€`,
        priceCondition: 'Thunderbird et Apple Mail sont gratuits',
      },
      {
        name: 'Application Gmail du téléphone',
        coverage: `Votre adresse ajoutée comme un compte à part${NBSP}: lecture et envoi, sur le téléphone seulement.`,
        price: `0${NBSP}€`,
        priceCondition: 'Android, iPhone et iPad',
      },
      {
        name: 'Google Workspace',
        coverage: `Votre Gmail devient professionnel${NBSP}: même écran, mêmes mails, envoi et réception avec votre adresse professionnelle, sur ordinateur et sur téléphone.`,
        price: `6,80 à 8,10${NBSP}€ HT par mois`,
        priceCondition: `Par boîte${NBSP}: 6,80${NBSP}€ avec un an d’engagement, 8,10${NBSP}€ sans. Essai de 14 jours`,
      },
    ],
    calloutEmphasizedIntro: 'Mon avis.',
    calloutText: `Si vos clients ne voient jamais votre adresse, parce que vous recevez surtout, le transfert gratuit suffit. Si vous écrivez tous les jours à des clients depuis Gmail avec votre adresse professionnelle, Google Workspace est la seule solution qui ne change rien à vos habitudes, pour 81,60 à 97,20${NBSP}€ HT par an et par boîte.`,
  },
  hosts: {
    anchorId: 'hebergeurs',
    eyebrow: 'Chez votre hébergeur',
    title: 'Où créer le transfert vers Gmail, hébergeur par hébergeur',
    intro:
      'Le transfert se règle chez celui qui héberge l’adresse, jamais dans Gmail. Pages officielles lues le 19 novembre 2026.',
    hostColumnLabel: 'Hébergeur',
    detailColumnLabel: 'Où ça se règle',
    guideColumnLabel: 'Page officielle',
    rows: [
      {
        name: 'OVHcloud',
        detail: `Espace client, «${NBSP}Web Cloud${NBSP}», «${NBSP}Emails${NBSP}», onglet «${NBSP}Redirections${NBSP}», bouton «${NBSP}Créer une redirection${NBSP}», avec la case «${NBSP}Conserver une copie locale${NBSP}».`,
        linkLabel: 'Guide des redirections, OVHcloud',
        linkUrl:
          'https://docs.ovhcloud.com/fr/guides/web-cloud/email-and-collaborative-solutions/common-email-features/feature-redirections',
      },
      {
        name: 'o2switch',
        detail: `Dans cPanel, outil «${NBSP}Redirecteurs${NBSP}»${NBSP}; une copie reste dans la boîte d’origine. o2switch déconseille lui-même de rediriger vers une adresse externe comme Gmail, à cause du risque de spam, et recommande un logiciel de messagerie.`,
        linkLabel: 'Redirecteurs de mails, o2switch',
        linkUrl: 'https://faq.o2switch.fr/cpanel/emails/redirecteur-email/',
      },
      {
        name: 'IONOS',
        detail: `Espace client, section «${NBSP}Email${NBSP}», l’adresse, ligne «${NBSP}Redirection${NBSP}», «${NBSP}Ajouter une redirection${NBSP}». La boîte IONOS garde le mail et une copie part vers Gmail.`,
        linkLabel: 'Configurer une redirection, IONOS',
        linkUrl:
          'https://www.ionos.fr/assistance/email/mail-basic-setup-configuration-de-base-de-la-messagerie/configurer-une-redirection-de-mails/',
      },
      {
        name: 'Orange',
        detail: `Dans Mail Orange${NBSP}: paramètres, «${NBSP}généralités${NBSP}», «${NBSP}transfert de mails${NBSP}», «${NBSP}Transférer tous les mails vers une autre boîte mail${NBSP}».`,
        linkLabel: 'Rediriger ses mails, Orange',
        linkUrl:
          'https://assistance.orange.fr/ordinateurs-peripheriques/installer-et-utiliser/l-utilisation-du-mail-et-services-associes/mail-orange/parametrer-la-boite-mail/mail-orange-rediriger-vos-emails-vers-une-autre-boite-mail_196861-741574',
      },
      {
        name: 'La Poste',
        detail: `Pas de transfert${NBSP}: «${NBSP}La messagerie laposte.net ne permet pas de rediriger vos messages vers une autre boîte aux lettres.${NBSP}» Restent son webmail, son application et l’application Gmail du téléphone.`,
        linkLabel: 'Aide laposte.net',
        linkUrl:
          'https://aide.laposte.net/contents/comment-transferer-automatiquement-les-courriers-de-ma-boite-laposte-net-vers-une-autre-adresse-e-mail',
      },
      {
        name: 'Free',
        detail:
          'Je n’ai pas trouvé de transfert automatique dans l’assistance officielle de Free. Restent le webmail de Free, un logiciel de messagerie et l’application Gmail du téléphone.',
        linkLabel: 'Réglages de la messagerie, Free',
        linkUrl: 'https://assistance.free.fr/articles/609',
      },
      {
        name: 'SFR',
        detail:
          'Je n’ai pas trouvé de transfert automatique dans l’assistance officielle de SFR. Restent SFR Mail, un logiciel de messagerie et l’application Gmail du téléphone.',
        linkLabel: 'Configurer sa messagerie, SFR',
        linkUrl: 'https://assistance.sfr.fr/sfrmail-appli/sfrmail/configurer-messagerie-recevoir-email-sfr.html',
      },
    ],
    calloutEmphasizedIntro: `Votre hébergeur n’est pas dans la liste${NBSP}?`,
    calloutText: `Le principe est le même partout${NBSP}: le transfert (ou «${NBSP}redirection${NBSP}», «${NBSP}faire suivre${NBSP}») se règle dans l’espace client de l’hébergeur. Le test en haut de page reconnaît aussi Infomaniak, Gandi, Hostinger, LWS, Microsoft 365, Zoho et Proton.`,
  },
  pitfalls: {
    anchorId: 'pieges',
    eyebrow: 'Les pièges',
    title: 'Quatre pièges à éviter en changeant',
    intro: 'Rencontrés ou vérifiés le 19 novembre 2026, en faisant le passage sur un compte de test.',
    pitfallLabel: 'L’erreur fréquente',
    items: [
      {
        title: 'Vos mails partent en spam après le changement',
        text: `Quand une adresse change de serveur d’envoi, le nom de domaine doit l’autoriser, par une ligne appelée SPF dans ses réglages. Sans elle, mon premier mail envoyé depuis Google Workspace est arrivé en spam. Une fois la ligne ajoutée, le suivant est arrivé en boîte de réception.`,
        pitfall: `Tester une minute après le réglage${NBSP}: il faut attendre quelques minutes qu’il soit lu partout.`,
      },
      {
        title: 'Les autres adresses du domaine',
        text: `Si vous passez à Google Workspace, tout le courrier du domaine part chez Google, qui prévient${NBSP}: «${NBSP}Vous devrez inclure toutes les adresses e-mail déjà configurées avec votre domaine.${NBSP}» Chaque adresse existante (contact@, devis@, facturation@) doit être recréée avant la bascule, en boîte ou en alias.`,
        pitfall: `Oublier une adresse qui ne sert qu’aux formulaires du site ou aux factures${NBSP}: ses mails se perdent sans message d’erreur.`,
      },
      {
        title: 'Un transfert n’est pas une boîte',
        text: `Un transfert automatique peut être refusé ou classé en spam par Gmail. Google l’écrit${NBSP}: «${NBSP}Transférer les e-mails peut avoir un impact sur leur authentification.${NBSP}» Gardez la boîte chez l’hébergeur et son webmail sous la main.`,
        pitfall: 'Supprimer la boîte chez l’hébergeur une fois le transfert créé.',
      },
      {
        title: 'Les outils qui demandent votre mot de passe',
        text: `Des extensions et des services promettent de recréer «${NBSP}Envoyer en tant que${NBSP}». Google met en garde${NBSP}: ils demandent souvent les identifiants de votre boîte. Aucune des cinq solutions de cette page n’en a besoin.`,
        pitfall: 'Donner le mot de passe de sa messagerie à un service inconnu pour gagner dix minutes.',
      },
    ],
  },
  experience: {
    eyebrow: 'Vécu',
    title: 'Ce que j’ai testé le 19 novembre 2026',
    emphasizedIntro: 'Je suis concerné moi aussi.',
    text: `Mon adresse professionnelle est hébergée chez o2switch et je la lis dans un Gmail gratuit, avec les deux réglages qui s’arrêtent. J’ai donc fait le passage sur un compte Gmail de test${NBSP}: le bouton «${NBSP}Mettre à niveau ce compte${NBSP}» de Google Workspace a gardé la même boîte, le même mot de passe et les 1${NBSP}799 conversations, avec l’ancienne adresse et la nouvelle dans la même boîte. Du premier écran à «${NBSP}Gmail est activé${NBSP}», environ 40 minutes, réglages du nom de domaine compris. Ce que je n’ai pas vérifié${NBSP}: le retour en arrière.`,
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Gmail et votre adresse professionnelle en 2027',
    questions: [
      {
        question: `Gmail supprime-t-il «${NBSP}Envoyer en tant que${NBSP}»${NBSP}?`,
        answer: `Oui, pour les adresses hébergées ailleurs que chez Google. D’après la page d’aide de Google lue le 19 novembre 2026, à partir de janvier 2027, un compte Gmail ne peut plus envoyer de mails depuis un compte de messagerie tiers, ni sur le Web ni dans les applications mobiles. «${NBSP}Envoyer en tant que${NBSP}» reste possible avec une autre adresse Gmail ou un alias Google Workspace.`,
      },
      {
        question: `À quelle date exacte Gmail arrête-t-il «${NBSP}Envoyer en tant que${NBSP}» et la récupération des autres comptes${NBSP}?`,
        answer: `Google écrit «${NBSP}à partir de janvier 2027${NBSP}», sans donner de jour. Le calendrier publié prévoit une notification dans Gmail au troisième trimestre 2026, une période de transition jusqu’à la fin de 2026, puis la suppression complète en janvier 2027. Cette page est mise à jour si Google précise ou déplace la date.`,
      },
      {
        question: `Mon adresse professionnelle OVH, o2switch ou IONOS est-elle concernée${NBSP}?`,
        answer: `Oui, si vous la lisez ou si vous écrivez avec elle dans un compte Gmail gratuit. Une adresse à votre nom de domaine hébergée chez OVHcloud, o2switch, IONOS ou un autre hébergeur est, pour Gmail, un compte de messagerie tiers. Elle n’est pas concernée si vous l’utilisez dans le webmail de l’hébergeur, dans Outlook ou Thunderbird, ou si les mails du domaine sont chez Google Workspace.`,
      },
      {
        question: `Vais-je perdre les mails déjà reçus dans Gmail${NBSP}?`,
        answer: `Non. Google écrit que tous les messages déjà importés dans Gmail depuis un compte tiers restent dans la boîte. Ce qui s’arrête, c’est l’arrivée des nouveaux mails par «${NBSP}Consulter d’autres comptes de messagerie${NBSP}» et l’envoi avec l’adresse tierce.`,
      },
      {
        question: `Comment continuer à recevoir les mails de mon adresse professionnelle dans Gmail${NBSP}?`,
        answer: `En créant un transfert automatique chez votre hébergeur, de votre adresse professionnelle vers votre adresse Gmail. Google confirme que cette solution reste possible et qu’elle ne dépend pas de «${NBSP}Envoyer en tant que${NBSP}». Gardez la boîte chez l’hébergeur${NBSP}: un transfert peut être refusé ou classé en spam.`,
      },
      {
        question: `Comment continuer à envoyer avec mon adresse professionnelle depuis Gmail${NBSP}?`,
        answer: `Dans Gmail sur ordinateur, une seule solution garde vos habitudes${NBSP}: passer le compte en Google Workspace, où l’adresse de votre nom de domaine devient une adresse Google (6,80 à 8,10${NBSP}€ HT par mois et par boîte, prix lus le 19 novembre 2026). Gratuitement, vous pouvez envoyer depuis le webmail de votre hébergeur, depuis un logiciel comme Thunderbird, ou depuis l’application Gmail du téléphone, où l’adresse est ajoutée comme un compte à part.`,
      },
      {
        question: `L’application Gmail du téléphone est-elle concernée${NBSP}?`,
        answer: `Le réglage «${NBSP}Envoyer en tant que${NBSP}» s’arrête aussi dans les applications mobiles. En revanche, Google écrit que l’accès aux comptes tiers depuis l’application Gmail pour Android, iPhone et iPad ne change pas${NBSP}: on peut y ajouter l’adresse d’un autre fournisseur comme un compte à part, la lire et écrire avec elle.`,
      },
      {
        question: `Mon adresse Orange, Free, SFR ou laposte.net lue dans Gmail est-elle concernée${NBSP}?`,
        answer: `Oui, si Gmail va chercher ses mails par le réglage «${NBSP}Consulter d’autres comptes de messagerie${NBSP}»${NBSP}: cette réception s’arrête en janvier 2027. Les mails déjà arrivés restent. Pour la suite${NBSP}: un transfert automatique quand le fournisseur le propose (Orange le propose, laposte.net écrit que non), son webmail, ou l’application Gmail du téléphone.`,
      },
      {
        question: `Gmailify, c’est quoi, et qu’est-ce qui change${NBSP}?`,
        answer: `Gmailify applique les fonctions de Gmail (antispam, catégories, recherche) à une boîte Yahoo, Outlook ou autre reliée à Gmail. Google l’arrête en même temps que la récupération des autres comptes, en janvier 2027.`,
      },
      {
        question: `Combien coûte Google Workspace pour une seule adresse${NBSP}?`,
        answer: `Sur la page des prix de Google pour la France, lue le 19 novembre 2026${NBSP}: Business Starter à 6,80${NBSP}€ hors taxes par utilisateur et par mois avec un engagement d’un an, soit 81,60${NBSP}€ HT par an. Sans engagement, j’ai lu 8,10${NBSP}€ par mois dans la console d’administration, soit 97,20${NBSP}€ HT par an. Essai gratuit de 14 jours. Une boîte suffit pour une personne${NBSP}: les autres adresses du domaine peuvent en être des alias.`,
      },
      {
        question: `Passer à Google Workspace fait-il perdre les anciens mails du Gmail gratuit${NBSP}?`,
        answer: `Non, dans mon essai du 19 novembre 2026${NBSP}: avec le bouton «${NBSP}Mettre à niveau ce compte${NBSP}», le compte Gmail gratuit est devenu un compte Google Workspace en gardant la même boîte, le même mot de passe et tous les mails. L’adresse de connexion devient celle du nom de domaine, et Google Family, Google Fit et Google Nest ne sont plus disponibles sur ce compte. Je n’ai pas vérifié le retour en arrière.`,
      },
      {
        question: `Pouvez-vous faire le réglage à ma place${NBSP}?`,
        answer: `Oui, à distance${NBSP}: je regarde ce qui est en place chez votre hébergeur et dans Gmail, je vous propose la solution la plus simple, puis je fais les réglages et les essais d’envoi avec vous. Le premier avis est gratuit, sous 24${NBSP}h, et si un réglage gratuit vous suffit, je vous le dis.`,
      },
    ],
  },
  relatedArticles: {
    title: 'Les guides de la série',
    intro:
      'Le pas à pas par hébergeur, le dépannage si vos mails ne partent déjà plus, et le passage à Google Workspace raconté étape par étape.',
  },
  nextTools: {
    eyebrow: 'Autres vérifications',
    title: 'Tant que vous y êtes',
  },
  contactCta: {
    title: 'Envoyez-moi votre adresse professionnelle',
    description: `Je vous dis sous 24${NBSP}h ce qui est touché et quelle solution vous convient. Premier avis gratuit.`,
    button: 'Demander un avis gratuit',
  },
}
