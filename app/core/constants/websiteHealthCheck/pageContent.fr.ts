import type { DibodevWebsiteHealthCheckPageContent } from '~/core/types/DibodevWebsiteHealthCheckPage'
import { NBSP } from '~/core/constants/typography'

export const WEBSITE_HEALTH_CHECK_PAGE_FR: DibodevWebsiteHealthCheckPageContent = {
  meta: {
    title: `Tester mon site internet${NBSP}: 8 vérifications gratuites`,
    description: `Entrez l’adresse de votre site${NBSP}: HTTPS, PHP, WordPress, e-mails, téléphone, titre, mentions légales et signes d’âge vérifiés en dix secondes, avec quoi faire.`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Vérification de l’état d’un site internet : sécurité, mise à jour, affichage mobile et obligations légales',
  },
  breadcrumbLabel: 'Tester mon site',
  shareImage: {
    titleLines: ['Tester mon site :', '8 vérifications gratuites'],
    highlight: '8 vérifications',
    subtitle: 'HTTPS, PHP, WordPress, e-mails, téléphone, titre, mentions légales, signes d’âge',
    badge: 'Gratuit, sans inscription',
    alt: 'Tester mon site internet : 8 vérifications gratuites par Dibodev',
  },
  hero: {
    titleBefore: 'Tester mon site internet : ',
    titleHighlight: '8 vérifications',
    titleAfter: ' gratuites, en dix secondes',
    reassurances: ['Gratuit, sans inscription', 'Aucune donnée enregistrée', 'Résultat en dix secondes'],
    description: `Un site vitrine vieillit sans prévenir${NBSP}: un certificat qui manque, une version de PHP sans correctif, une extension WordPress fermée, des e-mails qui tombent en spam, une page qui s’affiche mal sur téléphone, un pied de page qui dit encore 2019. Cet outil lit la page d’accueil de votre site comme le ferait un visiteur et répond à huit questions, chacune avec un verdict, ce que ça veut dire et quoi faire. Les trois points les plus techniques (PHP, WordPress, e-mails) renvoient vers un vérificateur détaillé.`,
    authorIntro: 'Outil réalisé par',
    authorBio: `développeur freelance près de Rennes. Je mets à jour, je sécurise et je refais des sites vitrines pour des TPE et des PME, à distance, et je réponds sous 24${NBSP}h.`,
  },
  checker: {
    siteLabel: 'Adresse de votre site',
    sitePlaceholder: 'monentreprise.fr',
    siteHint: `Un nom de domaine suffit. Une page est lue, comme le ferait un navigateur, plus quelques fichiers publics pour WordPress et les enregistrements du domaine pour les e-mails${NBSP}: rien n’est scanné, rien n’est enregistré.`,
    submit: 'Tester mon site',
    checking: 'Vérification…',
    resultLabel: 'Votre résultat',
    idleTitle: 'Entrez l’adresse de votre site pour commencer',
    idleText: `Huit verdicts en dix secondes${NBSP}: HTTPS, PHP, WordPress, e-mails, affichage sur téléphone, titre et description, mentions légales, signes d’un site qui a vieilli.`,
    loadingTitle: 'Lecture de la page d’accueil…',
    loadingText: `Je lis la page, les en-têtes du serveur et les enregistrements du domaine, puis je lance les vérificateurs PHP, WordPress et e-mails. Dix à vingt secondes.`,
    errorTitles: {
      invalid: 'Adresse à corriger',
      unreachable: 'Site injoignable',
      rateLimited: 'Trop de vérifications',
      failed: 'Vérification impossible',
    },
    errorTexts: {
      invalid: `Entrez un nom de domaine public, comme monentreprise.fr, sans espace ni adresse interne.`,
      unreachable: `Je n’ai pas pu lire la page d’accueil de {host}${NBSP}: adresse fausse, site hors ligne, ou serveur qui refuse les robots. Essayez avec www devant, ou sans.`,
      rateLimited: `Vous avez lancé beaucoup de vérifications en peu de temps. Réessayez dans quelques minutes.`,
      failed: `Une erreur est survenue de mon côté. Réessayez dans un instant, ou écrivez-moi l’adresse du site.`,
    },
    overallTitles: {
      healthy: `{host}${NBSP}: rien d’urgent`,
      needsAttention: `{host}${NBSP}: des points à revoir`,
      atRisk: `{host}${NBSP}: au moins un point critique`,
    },
    overallTexts: {
      healthy: `Les huit points lus depuis l’extérieur sont bons ou sans objet. Ce n’est pas un audit complet, mais votre site ne montre aucun des signes les plus courants de site laissé à l’abandon.`,
      needsAttention: `Rien ne met le site en danger aujourd’hui, mais un ou plusieurs points méritent une correction dans le mois. Le détail et la marche à suivre sont dessous.`,
      atRisk: `Au moins un point expose le site, ses visiteurs ou votre réputation. Commencez par les lignes marquées « à corriger »${NBSP}; chacune dit quoi faire.`,
    },
    checksTitle: 'Les huit vérifications',
    checkLabels: {
      https: 'HTTPS',
      php: 'PHP',
      wordpress: 'WordPress',
      email: 'E-mails du domaine',
      mobile: 'Affichage sur téléphone',
      seoTags: 'Titre et description',
      legalNotice: 'Mentions légales',
      aging: 'Signes d’un site qui a vieilli',
    },
    verdictLabels: {
      ok: 'OK',
      warning: 'À surveiller',
      critical: 'À corriger',
      unknown: 'Non vérifiable',
    },
    detailTexts: {
      httpsRedirects: 'Le site est servi en HTTPS et l’adresse en http redirige vers la version sécurisée.',
      httpsNoRedirect: `Le site est servi en HTTPS, mais l’adresse en http affiche encore une page en clair${NBSP}: un visiteur qui tape l’adresse sans « https » n’est pas redirigé.`,
      httpsNoHttpAnswer: `Le site est servi en HTTPS${NBSP}; l’adresse en http ne répond pas, les navigateurs vont directement sur la version sécurisée.`,
      httpOnly: `Le site n’est pas servi en HTTPS${NBSP}: les navigateurs l’affichent comme « non sécurisé » et Google le déclasse.`,
      phpUnpatched: `Le site annonce PHP {phpVersion}, une version qui n’a pas le correctif des failles du 21 octobre 2026 (corrigé en {fixedVersion}).`,
      phpEndOfLife: `Le site annonce PHP {phpVersion}, une branche qui ne reçoit plus aucun correctif de sécurité.`,
      phpPatched: 'Le site annonce une version de PHP qui a reçu le correctif des failles du 21 octobre 2026.',
      phpHidden: `Le site tourne sur PHP, mais le serveur ne dit pas quelle version${NBSP}: impossible de confirmer le correctif depuis l’extérieur.`,
      phpNotPhp: `Le site ne tourne pas sur PHP${NBSP}: les failles PHP ne le concernent pas.`,
      phpUnknown: 'Je n’ai pas pu lire ce que le serveur annonce.',
      wordpressClean: `Le site est un WordPress${NBSP}: cœur à jour pour ce que l’on voit depuis l’extérieur, aucune extension vulnérable ni signe d’injection.`,
      wordpressOutdatedCore: `Le site est un WordPress en version {coreVersion}, alors que la version du jour est {latestCoreVersion}.`,
      wordpressVulnerablePlugin: `Le site est un WordPress avec une extension connue pour une faille non corrigée${NBSP}: {plugin}.`,
      wordpressClosedPlugin: `Le site est un WordPress avec une extension fermée par WordPress.org pour un problème de sécurité${NBSP}: {plugin}.`,
      wordpressSuspicious:
        'Le site est un WordPress et sa page d’accueil montre des signes de piratage (liens cachés, redirection, contenu injecté).',
      wordpressNotWordPress: `Le site n’est pas un WordPress${NBSP}: rien à vérifier ici.`,
      wordpressUnknown: 'Le site est un WordPress, mais ses fichiers publics n’ont pas pu être lus.',
      emailAllGood:
        'Le domaine {domain} a un SPF, une clé DKIM et une politique DMARC qui protège les e-mails envoyés en son nom.',
      emailDmarcMissing: `Le domaine {domain} a un SPF et une clé DKIM, mais aucune politique DMARC${NBSP}: Orange, Gmail et Outlook l’exigent désormais.`,
      emailDmarcNone: `Le domaine {domain} a une politique DMARC en mode « none »${NBSP}: elle observe mais ne protège rien.`,
      emailDkimNotFound: `Le domaine {domain} a un SPF, mais aucune clé DKIM n’a été trouvée sur les sélecteurs habituels.`,
      emailSpfMissing: `Le domaine {domain} n’a pas d’enregistrement SPF${NBSP}: n’importe qui peut envoyer des e-mails en son nom, et les vôtres tombent en spam.`,
      emailSpfTooPermissive: `Le SPF du domaine {domain} autorise tout le monde (« +all »)${NBSP}: il ne protège rien.`,
      emailSpfTooManyLookups: `Le SPF du domaine {domain} dépasse les dix consultations autorisées${NBSP}: les serveurs de réception l’ignorent.`,
      emailMultipleSpf: `Le domaine {domain} a plusieurs enregistrements SPF${NBSP}: les serveurs de réception les rejettent tous.`,
      emailNoMailSetup: `Aucun serveur de réception n’est déclaré pour {domain}${NBSP}: ce domaine n’envoie et ne reçoit pas d’e-mails.`,
      emailUnknown: 'Les enregistrements du domaine n’ont pas pu être lus.',
      viewportPresent: 'La page déclare la balise viewport, celle qui adapte l’affichage à la largeur du téléphone.',
      viewportMissing: `La page ne déclare pas la balise viewport${NBSP}: sur téléphone, elle s’affiche comme un écran d’ordinateur rétréci, illisible sans zoomer.`,
      seoTagsGood:
        'La page d’accueil a un titre de {titleLength} caractères et une description de {descriptionLength} caractères, des longueurs que Google affiche entières.',
      titleMissing: `La page d’accueil n’a pas de titre${NBSP}: c’est la ligne bleue de Google, et le nom de l’onglet.`,
      titleTooShort: `Le titre de la page d’accueil fait {titleLength} caractères${NBSP}: trop court pour dire ce que vous faites et où.`,
      titleTooLong: `Le titre de la page d’accueil fait {titleLength} caractères${NBSP}: Google le coupe vers 60.`,
      descriptionMissing: `La page d’accueil n’a pas de meta description${NBSP}: Google en invente une à partir du texte de la page.`,
      descriptionTooShort: `La description de la page d’accueil fait {descriptionLength} caractères${NBSP}: trop courte pour donner envie de cliquer.`,
      descriptionTooLong: `La description de la page d’accueil fait {descriptionLength} caractères${NBSP}: Google la coupe vers 160.`,
      legalNoticeLinkFound: 'La page d’accueil a un lien vers les mentions légales.',
      legalNoticeLinkMissing: `Aucun lien vers des mentions légales sur la page d’accueil${NBSP}: la loi pour la confiance dans l’économie numérique les impose à tout site professionnel.`,
      agingNone: 'Aucun des signes courants d’un site laissé à l’abandon n’a été vu sur la page d’accueil.',
      agingOldCopyright: `Le pied de page affiche un copyright {year}${NBSP}: le signe le plus visible d’un site que personne ne touche.`,
      agingOldJquery: `La page charge jQuery {jqueryVersion}${NBSP}: les branches 1 et 2 ont des failles connues et ne sont plus corrigées depuis 2016.`,
      agingFlash: `La page charge encore du Flash${NBSP}: aucun navigateur ne l’affiche depuis 2021.`,
      agingOldGenerator: `La page a été produite par « {generator} », un outil ou une version que plus personne ne maintient.`,
    },
    adviceLabel: `Quoi faire${NBSP}:`,
    adviceTexts: {
      httpsNoRedirect:
        'demander à votre hébergeur ou à votre prestataire une redirection permanente de http vers https (une ligne dans la configuration du serveur).',
      httpOnly:
        'activer un certificat SSL chez votre hébergeur (gratuit chez la plupart, Let’s Encrypt), puis forcer la redirection vers https.',
      phpUnpatched: 'changer la version de PHP dans l’espace client de l’hébergeur, aujourd’hui, après une sauvegarde.',
      phpEndOfLife:
        'passer sur une branche encore maintenue (8.2 au minimum, 8.3 ou 8.4 de préférence), après un test sur une copie du site.',
      phpHidden: 'demander par écrit à votre hébergeur la version de PHP servie et la date du correctif.',
      phpUnknown: 'réessayer dans un instant, ou vérifier la version dans l’espace client de l’hébergeur.',
      wordpressOutdatedCore: 'mettre à jour WordPress depuis le tableau de bord, après une sauvegarde complète.',
      wordpressVulnerablePlugin:
        'mettre l’extension à jour ou la désactiver aujourd’hui, puis vérifier les comptes administrateurs.',
      wordpressClosedPlugin: 'désactiver et supprimer l’extension, la remplacer par une extension maintenue.',
      wordpressSuspicious:
        'restaurer une sauvegarde saine ou faire nettoyer le site, changer tous les mots de passe, puis mettre à jour.',
      wordpressUnknown:
        'relancer la vérification WordPress détaillée, ou vérifier depuis le tableau de bord que le cœur et les extensions sont à jour.',
      emailDmarcMissing:
        'ajouter un enregistrement DMARC chez votre registrar, en commençant par « p=none » avec une adresse de rapport.',
      emailDmarcNone: 'passer la politique DMARC à « quarantine » puis « reject » une fois les rapports propres.',
      emailDkimNotFound: 'activer la signature DKIM chez votre fournisseur de mail et publier sa clé dans le DNS.',
      emailSpfMissing: 'publier un enregistrement SPF qui autorise votre fournisseur de mail, et lui seul.',
      emailSpfTooPermissive: 'remplacer « +all » par « ~all » ou « -all » à la fin du SPF.',
      emailSpfTooManyLookups: 'simplifier le SPF : retirer les services que vous n’utilisez plus.',
      emailMultipleSpf: 'fusionner les enregistrements SPF en un seul.',
      emailNoMailSetup:
        'rien, si vous n’envoyez pas d’e-mails depuis ce domaine ; sinon, déclarer votre fournisseur de mail.',
      emailUnknown: 'réessayer dans un instant, ou lancer le vérificateur e-mails détaillé.',
      viewportMissing:
        'ajouter la balise viewport dans l’en-tête de chaque page, ou refaire le site sur une base adaptée au téléphone.',
      titleMissing: 'écrire un titre de 30 à 60 caractères avec votre métier et votre ville.',
      titleTooShort: 'compléter le titre avec votre métier et votre ville, sans dépasser 60 caractères.',
      titleTooLong: 'raccourcir le titre à 60 caractères, l’essentiel en tête.',
      descriptionMissing: 'écrire une description de 120 à 160 caractères qui dit ce que vous faites, pour qui et où.',
      descriptionTooShort: 'allonger la description à 120 caractères au moins.',
      descriptionTooLong: 'raccourcir la description à 160 caractères.',
      legalNoticeLinkMissing:
        'publier une page de mentions légales (identité, adresse, SIRET, hébergeur) et la lier depuis le pied de page.',
      agingOldCopyright:
        'mettre l’année à jour, puis vérifier que le reste du site (textes, horaires, prix) est encore vrai.',
      agingOldJquery: 'faire passer le site sur jQuery 3, ou refaire le site sur une base moderne.',
      agingFlash: 'retirer le contenu Flash et le remplacer par une vidéo ou une animation standard.',
      agingOldGenerator: 'migrer le site sur un outil maintenu, ou le refaire.',
    },
    detailedToolLabels: {
      php: 'Ouvrir le vérificateur PHP détaillé',
      wordpress: 'Ouvrir le vérificateur WordPress détaillé',
      email: 'Ouvrir le vérificateur e-mails (SPF, DKIM, DMARC)',
    },
    disclaimer: `Lu depuis l’extérieur, sur la page d’accueil et le domaine. Un point « OK » ne garantit pas l’absence de problème ailleurs sur le site${NBSP}; un point « à corriger » mérite d’être confirmé avant de changer quoi que ce soit.`,
    idleCtaIntro: 'Vous préférez que je regarde moi-même, gratuitement, sous 24 h ?',
    idleCtaLabel: 'Me faire envoyer un avis',
    ctaIntro: `Besoin d’aide pour corriger, mettre à jour ou refaire le site${NBSP}?`,
    ctaLabels: {
      healthy: 'Parler de mon site',
      needsAttention: 'Faire corriger ces points',
      atRisk: 'Faire sécuriser mon site',
    },
    gdprCookieCheckLinkLabel: `Vérifier aussi les cookies et les traceurs${NBSP}: site conforme RGPD${NBSP}?`,
  },
  checks: {
    anchorId: 'verifications',
    eyebrow: 'Ce que l’outil vérifie',
    title: 'Huit points, lus comme un visiteur les verrait',
    intro:
      'Rien n’est scanné : une page, quelques fichiers publics pour WordPress et les enregistrements DNS du domaine. Voici ce que chaque point regarde, et pourquoi il compte.',
    items: [
      {
        title: '1. HTTPS',
        description:
          'Le site est-il servi en HTTPS, et l’adresse en http redirige-t-elle vers la version sécurisée ? Sans cela, les navigateurs affichent « non sécurisé » et Google déclasse la page.',
      },
      {
        title: '2. PHP',
        description:
          'La version de PHP annoncée par le serveur a-t-elle reçu le correctif des failles du 21 octobre 2026 ? Même verdict que le vérificateur PHP, avec le lien vers lui.',
      },
      {
        title: '3. WordPress',
        description:
          'Si le site est un WordPress : cœur à jour, extensions fermées ou vulnérables, signes d’injection. Sinon, le point est sans objet.',
      },
      {
        title: '4. E-mails du domaine',
        description:
          'SPF, clé DKIM et politique DMARC du domaine, lus dans le DNS. Sans les trois, les e-mails envoyés en votre nom tombent en spam chez Orange, Gmail et Outlook.',
      },
      {
        title: '5. Affichage sur téléphone',
        description:
          'La balise viewport est-elle déclarée ? Sans elle, le téléphone affiche la page comme un écran d’ordinateur rétréci.',
      },
      {
        title: '6. Titre et description',
        description:
          'La page d’accueil a-t-elle un titre et une description, de longueur raisonnable ? Ce sont les deux lignes de votre résultat Google.',
      },
      {
        title: '7. Mentions légales',
        description:
          'Un lien vers une page de mentions légales est-il présent ? La loi pour la confiance dans l’économie numérique l’impose à tout site professionnel.',
      },
      {
        title: '8. Signes d’un site qui a vieilli',
        description:
          'Année de copyright antérieure à 2024, jQuery 1 ou 2, Flash, générateur abandonné : les signes qu’un visiteur et Google lisent comme « plus personne ne s’en occupe ».',
      },
    ],
  },
  priceTeaser: {
    emphasizedIntro: `Votre site a vieilli et vous vous demandez ce que coûte un nouveau${NBSP}?`,
    text: 'Le baromètre compile les prix affichés par vingt freelances, agences, créateurs de sites et guides français, relevés le même jour, avec les médianes par taille de site.',
    linkLabel: 'Voir les prix d’un site internet en 2026',
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Comment le test est fait',
    intro:
      'Le même geste qu’un visiteur, plus trois vérificateurs que j’ai déjà écrits pour les failles PHP, les sites WordPress piratés et les e-mails en spam.',
    steps: [
      {
        label: 'Lecture',
        title: 'Une page, comme un navigateur',
        description:
          'Le serveur lit la page d’accueil en HTTPS puis en http, suit les redirections vers des adresses publiques et s’arrête aux premiers 400 Ko. Les adresses internes et privées sont refusées.',
      },
      {
        label: 'Balises',
        title: 'Ce que la page dit d’elle-même',
        description:
          'Viewport, titre, description, liens du pied de page, année de copyright, bibliothèques chargées, balise generator : tout vient du code de la page, rien n’est deviné.',
      },
      {
        label: 'Vérificateurs',
        title: 'PHP, WordPress et e-mails en parallèle',
        description:
          'Les trois vérificateurs existants tournent avec leurs propres règles ; leur verdict est ramené à quatre niveaux. Le point WordPress ne tourne que si la page montre des marqueurs WordPress.',
      },
      {
        label: 'Verdict',
        title: 'Trois niveaux, puis quoi faire',
        description:
          'Un point critique met le site « à risque », un point à surveiller le met « à revoir », sinon « rien d’urgent ». Chaque ligne dit ce que ça veut dire et quoi faire. Le résultat est gardé dix minutes en cache, rien d’autre n’est enregistré.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Tester son site${NBSP}: vos questions`,
    questions: [
      {
        question: `Comment savoir si mon site est à jour${NBSP}?`,
        answer:
          'Trois signes se lisent depuis l’extérieur : la version de PHP annoncée par le serveur, la version de WordPress et de ses extensions, et les bibliothèques chargées par la page (jQuery, par exemple). L’outil les lit en dix secondes. Pour le reste (thème, extensions non visibles), connectez-vous au tableau de bord de votre site : les mises à jour en attente y sont listées.',
      },
      {
        question: `Mon site est-il sécurisé${NBSP}?`,
        answer:
          'Depuis l’extérieur, on peut vérifier le HTTPS, le correctif PHP, les extensions WordPress connues pour une faille et les signes de piratage sur la page d’accueil. C’est ce que fait l’outil. Il ne remplace pas un audit : il dit si votre site montre les failles les plus exploitées en 2026, celles qui ont fait couper les sites des préfectures en octobre.',
      },
      {
        question: `Pourquoi mon site n’apparaît pas sur Google${NBSP}?`,
        answer:
          'Les causes les plus fréquentes sont dans le test : pas de HTTPS, pas de titre ou un titre qui ne dit ni le métier ni la ville, pas de description, une page illisible sur téléphone, un site que Google lit comme abandonné. Si tout est vert, la cause est ailleurs : trop peu de pages, pas de fiche Google Business, ou un site trop récent.',
      },
      {
        question: `Que vérifie exactement l’outil${NBSP}?`,
        answer:
          'Huit points : HTTPS et redirection, version de PHP et correctif d’octobre 2026, WordPress à jour et extensions fermées, SPF, DKIM et DMARC du domaine, balise viewport, titre et description de la page d’accueil, lien vers les mentions légales, et signes d’un site qui a vieilli (copyright antérieur à 2024, jQuery 1 ou 2, Flash, générateur abandonné).',
      },
      {
        question: `Mon site n’a pas de HTTPS, c’est grave${NBSP}?`,
        answer:
          'Oui, et c’est le point le plus simple à corriger. Sans HTTPS, Chrome et Safari affichent « non sécurisé » à côté de votre adresse, ce que vos visiteurs lisent comme « site douteux », et Google favorise les sites sécurisés depuis 2014. Le certificat est gratuit chez presque tous les hébergeurs (Let’s Encrypt) et s’active en quelques clics.',
      },
      {
        question: `Les mentions légales sont-elles obligatoires sur un petit site${NBSP}?`,
        answer:
          'Oui. La loi pour la confiance dans l’économie numérique (2004) impose à tout site professionnel d’afficher l’identité de l’éditeur, son adresse, son numéro d’immatriculation et le nom de l’hébergeur. L’amende peut atteindre 75 000 € pour une personne physique. Une page et un lien dans le pied de page suffisent.',
      },
      {
        question: `L’outil enregistre-t-il mon site ou mes données${NBSP}?`,
        answer:
          'Non. L’adresse n’est ni enregistrée ni envoyée à PostHog, l’outil de mesure du site : seuls les verdicts le sont, pour savoir quels points reviennent le plus. Le résultat reste dix minutes en mémoire du serveur pour ne pas relire le même site deux fois, puis disparaît.',
      },
      {
        question: `Mon site a vieilli${NBSP}: le corriger ou le refaire${NBSP}?`,
        answer:
          'Un ou deux points rouges se corrigent en une heure chez l’hébergeur. Quand le site cumule plusieurs signes d’âge (pas de viewport, jQuery 1, copyright 2018, PHP sans correctif), le refaire coûte souvent moins cher que de le rafistoler : un site vitrine sur mesure démarre à 1 500 € chez moi, et le baromètre de cette page donne les prix du marché.',
      },
    ],
  },
  relatedArticles: {
    title: 'Pour aller plus loin',
    intro:
      'Les guides qui détaillent la mise à jour de PHP, les vérifications d’un site WordPress et ce qu’un site doit faire pour un artisan.',
  },
  contactCta: {
    title: `Vous préférez que je regarde votre site moi-même${NBSP}?`,
    description: `Envoyez-moi l’adresse. Je vous réponds sous 24${NBSP}h avec un avis écrit, gratuit${NBSP}: ce qui presse, ce qui peut attendre, et un prix ferme si vous voulez que je m’en occupe.`,
    button: 'Envoyer mon site',
  },
}
