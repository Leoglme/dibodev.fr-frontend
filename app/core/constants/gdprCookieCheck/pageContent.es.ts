import type { DibodevGdprCookieCheckPageContent } from '~/core/types/DibodevGdprCookieCheckPage'
import {
  GDPR_ARTICLE_82_SOURCE,
  GDPR_CNIL_AUDIENCE_SOURCE,
  GDPR_CNIL_FAQ_SOURCE,
  GDPR_CNIL_GUIDELINES_SOURCE,
  GDPR_CNIL_RECOMMENDATION_SOURCE,
  GDPR_CNIL_SANCTIONS_SOURCE,
  GDPR_CNIL_SESSION_REPLAY_SOURCE,
  GDPR_LEGAL_NOTICE_SOURCE,
} from '~/core/constants/gdprCookieCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const GDPR_COOKIE_CHECK_PAGE_ES: DibodevGdprCookieCheckPageContent = {
  meta: {
    title: '¿Tu web cumple el RGPD? Test gratuito de cookies',
    description:
      'Escribe la dirección de tu web: rastreadores cargados sin consentimiento (Google Analytics, Meta, Hotjar…), banner de cookies y enlaces obligatorios.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Conformidad de una web con las normas francesas sobre cookies y otros rastreadores (RGPD, artículo 82 de la ley francesa de protección de datos)',
  },
  applicationName: 'Test RGPD de cookies y rastreadores de una web',
  breadcrumbLabel: 'Web conforme al RGPD: comprobar las cookies',
  shareImage: {
    titleLines: ['¿Mi web', 'cumple el RGPD?'],
    highlight: 'cumple el RGPD',
    subtitle: 'Rastreadores, banner de cookies y enlaces obligatorios leídos en el HTML',
    badge: 'Test gratuito, sin registro',
    alt: '¿Mi web cumple el RGPD? Test gratuito de cookies y rastreadores por Dibodev',
  },
  hero: {
    titleBefore: '¿Mi web ',
    titleHighlight: 'cumple el RGPD',
    titleAfter: '? Test gratuito de cookies y rastreadores',
    reassurances: [
      'Gratis, sin registro',
      'No se guarda ningún dato',
      `Normas revisadas el 8${NBSP}de noviembre de 2026`,
    ],
    description:
      'Un banner de cookies no demuestra nada: lo que cuenta es lo que la página carga antes de que el visitante haya elegido. Una web puede mostrar un banner bonito mientras Google Analytics, el píxel de Facebook o un vídeo de YouTube ya han salido. Esta herramienta lee el HTML de tu página de inicio, como un robot, sin ejecutar el JavaScript: detecta los rastreadores conocidos y dice si esperan el consentimiento, reconoce la herramienta de consentimiento (Axeptio, tarteaucitron, Cookiebot, Didomi…) y busca los tres enlaces obligatorios. Para cada punto: lo que ha visto, lo que significa, qué hacer. Pensada para las empresas francesas y las normas francesas (CNIL), funciona con cualquier web pública.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes (Francia). Creo, rehago y pongo en regla webs corporativas para pequeñas y medianas empresas, a distancia, y respondo en 24 horas.',
  },
  checker: {
    siteLabel: 'Dirección de tu web',
    sitePlaceholder: 'miempresa.fr',
    siteHint:
      'Basta con un nombre de dominio. Solo se lee la página de inicio, como lo haría un robot, sin ejecutar el JavaScript: nada se escanea, nada se guarda.',
    submit: 'Probar mi web',
    checking: 'Leyendo…',
    resultLabel: 'Tu resultado',
    idleTitle: 'Escribe la dirección de tu web para empezar',
    idleText:
      'El resultado lista los rastreadores vistos en el HTML (Google Analytics, Meta, Hotjar, YouTube…), dice si esperan el consentimiento, nombra la herramienta de consentimiento y comprueba los enlaces obligatorios.',
    loadingTitle: 'Leyendo la página de inicio…',
    loadingText:
      'Leo el HTML de la página y luego detecto los rastreadores, la herramienta de consentimiento y los enlaces del pie de página. Unos segundos.',
    errorTitles: {
      invalid: 'Dirección a corregir',
      unreachable: 'Web inaccesible',
      rateLimited: 'Demasiadas comprobaciones',
      failed: 'Comprobación imposible',
    },
    errorTexts: {
      invalid: 'Escribe un nombre de dominio público, como miempresa.fr, sin espacios ni direcciones internas.',
      unreachable:
        'No he podido leer la página de inicio de {host}: dirección errónea, web fuera de línea, o servidor que rechaza los robots. Prueba con www delante, o sin él.',
      rateLimited: 'Has lanzado muchas comprobaciones en poco tiempo. Vuelve a intentarlo en unos minutos.',
      failed:
        'Ha ocurrido un error por mi parte. Vuelve a intentarlo en un momento, o escríbeme la dirección de la web.',
    },
    verdictTitles: {
      compliantLikely: '{host}: nada arriesgado en el HTML',
      needsCheck: '{host}: puntos a comprobar',
      atRisk: '{host}: hay rastreadores que salen sin consentimiento',
      unknown: '{host}: página ilegible desde fuera',
    },
    verdictTexts: {
      compliantLikely:
        'Ningún rastreador conocido sale antes de la elección del visitante, y los enlaces obligatorios están. No es un certificado de conformidad: el test lee la página de inicio sin ejecutar el JavaScript.',
      needsCheck:
        'Nada flagrante, pero al menos un punto merece un vistazo: un rastreador cargado a pesar de la herramienta de consentimiento (que puede bloquearlo ella misma al cargar, a comprobar en el navegador), un rastreador a configurar, o un enlace que falta.',
      atRisk:
        'La página carga rastreadores que requieren el consentimiento del visitante, y ninguna herramienta de consentimiento aparece en el HTML. Es lo que sanciona la CNIL, la autoridad francesa de protección de datos, también en pequeñas empresas.',
      unknown:
        'La página recibida está protegida contra los robots, construida con JavaScript o es demasiado larga para leerla hasta el pie de página: no puedo juzgar los enlaces. Compruébalo en tu navegador, o envíame la dirección.',
    },
    trackersTitle: 'Rastreadores vistos en el HTML',
    noTracker: {
      label: 'Ningún rastreador conocido',
      badge: 'Nada visto',
      seenText:
        'Ni Google Analytics, ni Google Tag Manager, ni píxel publicitario, ni Hotjar, Clarity, Matomo, vídeo de YouTube, mapa de Google Maps o reCAPTCHA en el HTML de la página de inicio.',
      meaningText:
        'Nada sale antes de la elección del visitante, por lo que muestra el HTML. Un rastreador añadido después por un script, o presente en otra página, no se ve desde aquí.',
    },
    trackerLabels: {
      googleAnalytics: 'Google Analytics',
      googleAds: 'Google Ads o AdSense',
      googleTagManager: 'Google Tag Manager',
      metaPixel: 'Píxel de Meta (Facebook, Instagram)',
      hotjar: 'Hotjar',
      microsoftClarity: 'Microsoft Clarity',
      linkedInInsight: 'LinkedIn Insight Tag',
      tiktokPixel: 'Píxel de TikTok',
      pinterestTag: 'Etiqueta de Pinterest',
      matomo: 'Matomo',
      youtube: 'Vídeo de YouTube',
      youtubeNoCookie: 'Vídeo de YouTube (modo de privacidad mejorado)',
      googleMaps: 'Mapa de Google Maps',
      recaptcha: 'Google reCAPTCHA',
    },
    trackerMeaningTexts: {
      googleAnalytics:
        'Medición de audiencia de Google. Solo se libra del consentimiento si se limita a tus estadísticas anónimas, para tu propia cuenta; la CNIL excluye de la exención las ofertas cuyo proveedor indica que reutiliza los datos por cuenta propia.',
      googleAds:
        'Publicidad de Google (seguimiento de conversiones, remarketing o anuncios de AdSense): los rastreadores publicitarios requieren el consentimiento previo del visitante.',
      googleTagManager:
        'Gestor de etiquetas de Google: carga otros scripts (estadísticas, píxeles, a veces la propia herramienta de consentimiento) que el HTML de la página no muestra.',
      metaPixel:
        'Píxel publicitario de Meta: sigue a los visitantes para la publicidad segmentada, lo que requiere su consentimiento previo.',
      hotjar:
        'Hotjar graba el recorrido de los visitantes. La CNIL somete estas herramientas de reproducción de sesiones al consentimiento previo (recomendación del 8 de octubre de 2026).',
      microsoftClarity:
        'Clarity graba las sesiones de los visitantes para reproducirlas. La CNIL somete estas herramientas de reproducción de sesiones al consentimiento previo (recomendación del 8 de octubre de 2026).',
      linkedInInsight:
        'Etiqueta publicitaria de LinkedIn (conversiones, remarketing): requiere el consentimiento previo del visitante.',
      tiktokPixel: 'Píxel publicitario de TikTok: requiere el consentimiento previo del visitante.',
      pinterestTag: 'Etiqueta publicitaria de Pinterest: requiere el consentimiento previo del visitante.',
      matomo:
        'Medición de audiencia Matomo. Puede prescindir del consentimiento si está configurada como describe la CNIL (estadísticas anónimas para tu propia cuenta, rastreadores de 13 meses como máximo, datos guardados 25 meses como máximo): el HTML no muestra estos ajustes.',
      youtube:
        'El reproductor de YouTube se carga con la página. La CNIL pide que un contenido integrado no deposite ningún rastreador sujeto a consentimiento antes de que el visitante acepte.',
      youtubeNoCookie:
        'Según Google, este modo impide que los vídeos vistos personalicen YouTube y los anuncios, pero Google no dice que no se guarde nada en el dispositivo del visitante.',
      googleMaps:
        'Un contenido de Google cargado en tu página. La CNIL pide que un contenido integrado no deposite ningún rastreador sujeto a consentimiento antes de que el visitante acepte.',
      recaptcha:
        'Un CAPTCHA está exento si solo sirve para proteger la web, pero la CNIL cita reCAPTCHA entre las soluciones cuyo proveedor indica que reutiliza los datos por cuenta propia: entonces hace falta el consentimiento.',
    },
    trackerAdviceTexts: {
      googleAnalytics:
        'cargarlo solo después del consentimiento del visitante (bloqueado por la herramienta de consentimiento, o modo «básico» de Google), o pasar a una medición de audiencia configurada para la exención.',
      googleAds:
        'bloquearlo hasta que el visitante elija en la herramienta de consentimiento, o quitarlo si ya no sirve.',
      googleTagManager:
        'comprobar en Google Tag Manager que cada etiqueta espera el consentimiento (modo de consentimiento para las etiquetas de Google, activador tras el consentimiento para las demás).',
      metaPixel:
        'bloquearlo hasta que el visitante elija, o quitarlo si ya no haces publicidad en Facebook o Instagram.',
      hotjar:
        'cargarlo tras el consentimiento, ocultar los campos de formulario, o quitarlo si nadie mira las grabaciones.',
      microsoftClarity:
        'cargarlo tras el consentimiento, ocultar los campos de formulario, o quitarlo si nadie mira las grabaciones.',
      linkedInInsight: 'bloquearla hasta que el visitante elija, o quitarla si ya no haces publicidad en LinkedIn.',
      tiktokPixel: 'bloquearlo hasta que el visitante elija, o quitarlo si ya no haces publicidad en TikTok.',
      pinterestTag: 'bloquearla hasta que el visitante elija, o quitarla si ya no haces publicidad en Pinterest.',
      matomo:
        'comprobar sus ajustes con la guía de exención publicada en la web de la CNIL y citarlo en tu política de privacidad, o ponerlo detrás de la herramienta de consentimiento.',
      youtube:
        'mostrar una imagen con un botón «Ver el vídeo» que pida el consentimiento antes de cargar el reproductor (la mayoría de las herramientas de consentimiento lo hacen), o un simple enlace a YouTube.',
      youtubeNoCookie: 'lo más seguro sigue siendo cargar el vídeo solo después del consentimiento del visitante.',
      googleMaps: 'mostrar una imagen del mapa con un enlace a Google Maps, o cargar el mapa tras el consentimiento.',
      recaptcha:
        'revisar las condiciones de Google, cargarlo solo en la página del formulario y tras el consentimiento, o pasar a una protección que no necesite consentimiento.',
    },
    loadingLabels: {
      loadedDirectly: 'Cargado sin consentimiento',
      loadedOnClick: 'Cargado al hacer clic',
      waitingForConsent: 'Espera el consentimiento',
      googleConsentModeDenied: 'Modo de consentimiento',
    },
    loadingSeenTexts: {
      loadedDirectly:
        'Cargado en cuanto se abre la página (o al primer gesto del visitante), antes de cualquier elección sobre las cookies.',
      loadedOnClick:
        'Una imagen ocupa su lugar: el contenido se carga cuando el visitante hace clic, sin pedirle su consentimiento.',
      waitingForConsent:
        'Presente en el HTML pero desactivado: espera la elección del visitante en la herramienta de consentimiento.',
      googleConsentModeDenied:
        'Cargado con la página, modo de consentimiento de Google configurado en «denegado» por defecto: según Google, no se lee ni se escribe ninguna cookie antes del consentimiento, pero se envían igualmente mediciones sin cookies.',
    },
    loadingAdviceTexts: {
      waitingForConsent: 'nada, si el banner ofrece «Rechazar todo» al mismo nivel que «Aceptar todo».',
      googleConsentModeDenied:
        'para no enviar nada antes de la elección, Google describe el modo «básico», que bloquea sus etiquetas hasta el clic en el banner.',
    },
    consentToolTitle: 'Herramienta de consentimiento',
    consentToolLabel: 'Banner de cookies',
    consentToolStatusLabels: {
      found: 'Encontrada',
      notFound: 'Ausente',
      notNeeded: 'No necesaria',
    },
    consentToolSeenTexts: {
      found: '{tools} se carga en la página.',
      notFound:
        'Ninguna herramienta de consentimiento conocida en el HTML (Axeptio, tarteaucitron, Cookiebot, Didomi, CookieYes, Complianz…).',
      notNeeded: 'Ninguna herramienta de consentimiento, y ningún rastreador conocido tampoco.',
    },
    consentToolAutoBlockingText:
      'Está configurada en bloqueo automático: puede bloquear, al cargar la página, scripts que el HTML muestra como cargados.',
    consentToolMeaningTexts: {
      found:
        'Es la que muestra el banner, guarda la elección del visitante y debe bloquear los rastreadores mientras no haya aceptado.',
      notFound:
        'Sin ella, el visitante no puede ni aceptar ni rechazar: los rastreadores que requieren consentimiento salen igualmente.',
      notNeeded:
        'Un banner solo hace falta si la web deposita rastreadores que requieren el consentimiento del visitante.',
    },
    consentToolAdviceTexts: {
      found:
        'comprobar que «Rechazar todo» está al mismo nivel que «Aceptar todo», y que cada rastreador de la lista espera de verdad la elección.',
      notFound:
        'instalar una herramienta de consentimiento que bloquee los rastreadores hasta la elección, con «Aceptar todo» y «Rechazar todo» al mismo nivel; si la carga Google Tag Manager, comprobar que se ejecuta antes que las demás etiquetas.',
      notNeeded:
        'nada, mientras no se añada ningún rastreador (estadísticas de Google, píxel publicitario, vídeo de YouTube).',
    },
    linksTitle: 'Enlaces obligatorios',
    linkLabels: {
      legalNotice: 'Aviso legal',
      privacyPolicy: 'Política de privacidad',
      cookieSettings: 'Gestión de cookies',
    },
    linkStatusLabels: {
      found: 'Encontrado',
      missing: 'Ausente',
      providedByConsentTool: 'Botón de la herramienta',
      notNeeded: 'No necesario',
      notReadable: 'Ilegible',
    },
    linkDetailTexts: {
      legalNoticeFound: 'La página de inicio tiene un enlace al aviso legal.',
      legalNoticeMissing: 'Ningún enlace a un aviso legal en la página de inicio.',
      privacyPolicyFound: 'La página de inicio tiene un enlace a una política de privacidad o de protección de datos.',
      privacyPolicyMissing: 'Ningún enlace a una política de privacidad en la página de inicio.',
      cookieSettingsFound: 'Un enlace o un botón permite cambiar la elección de cookies.',
      cookieSettingsMissing: 'Ningún enlace «Gestionar mis cookies» en la página de inicio.',
      cookieSettingsByConsentTool:
        'Ningún enlace en el HTML: la herramienta de consentimiento suele mostrar su propio botón para cambiar la elección.',
      cookieSettingsNotNeeded:
        'Ningún enlace, pero ningún rastreador requiere consentimiento: no hay nada que gestionar.',
      linkNotReadable:
        'Ilegible: la página está construida con JavaScript, o es demasiado larga para leerla hasta el pie de página.',
    },
    linkMeaningTexts: {
      legalNotice:
        'La identidad de la empresa, su dirección, su registro y su hosting son obligatorios en la web de una empresa en Francia: hasta 75 000 € de multa para un empresario individual, 375 000 € para una sociedad.',
      privacyPolicy:
        'En cuanto la web recoge datos (formulario, cookies), debe decir cuáles, por qué, durante cuánto tiempo y cuáles son los derechos de las personas, en una política accesible desde cada página.',
      cookieSettings:
        'Retirar el consentimiento debe ser tan fácil como darlo, en cualquier momento: un enlace «Gestionar mis cookies» o un icono en todas las páginas.',
    },
    linkAdviceTexts: {
      legalNoticeMissing:
        'publicar una página de aviso legal (identidad, dirección, número SIRET, hosting) y enlazarla desde el pie de cada página.',
      privacyPolicyMissing:
        'publicar la política y enlazarla en el pie de página con un título claro, como «Datos personales» o «Privacidad»; si está dentro de tu aviso legal, dilo en el enlace.',
      cookieSettingsMissing:
        'añadir un enlace «Gestionar mis cookies» en el pie de página, conectado a la herramienta de consentimiento.',
      cookieSettingsByConsentTool:
        'cerrar el banner y comprobar que un botón o un enlace para cambiar de opinión sigue visible en todas las páginas.',
      linkNotReadable: 'revisar a ojo el pie de página de tu web.',
    },
    meaningLabel: 'Lo que significa:',
    adviceLabel: 'Qué hacer:',
    disclaimer:
      'Leído en el HTML de la página de inicio, sin ejecutar el JavaScript: un rastreador añadido por un script, por Google Tag Manager o en otra página no se ve desde aquí. Este test no sustituye a una auditoría ni a un asesoramiento jurídico.',
    idleCtaIntro: '¿Prefieres que la mire yo mismo, gratis, en 24 horas?',
    idleCtaLabel: 'Recibir mi opinión gratuita',
    ctaIntro: '¿Necesitas ayuda para instalar el banner, configurar los rastreadores o escribir las páginas legales?',
    ctaLabels: {
      compliantLikely: 'Hablar de mi web',
      needsCheck: 'Hacer revisar estos puntos',
      atRisk: 'Poner mi web en regla',
      unknown: 'Hacer revisar mi web',
    },
  },
  checks: {
    anchorId: 'lo-que-mira-el-test',
    eyebrow: 'Lo que mira el test',
    title: 'Seis puntos, leídos en el HTML de la página de inicio',
    intro:
      'El test lee el HTML como un robot, sin ejecutar el JavaScript. Es su límite: un rastreador añadido después por un script o por Google Tag Manager no se ve desde aquí. Lo que ve, lo dice con franqueza.',
    items: [
      {
        title: '1. Los rastreadores cargados de entrada',
        description:
          'Google Analytics, Google Tag Manager, Google Ads, píxel de Meta, Hotjar, Microsoft Clarity, LinkedIn, TikTok, Pinterest, Matomo, vídeos de YouTube, mapas de Google Maps, reCAPTCHA: para cada uno, el test dice si sale en cuanto se abre la página.',
      },
      {
        title: '2. Los rastreadores en espera',
        description:
          'Un script desactivado hasta la elección (tipo «text/plain» con una categoría, ajuste de la herramienta de consentimiento) o el modo de consentimiento de Google en «denegado»: esos esperan al visitante.',
      },
      {
        title: '3. La herramienta de consentimiento',
        description:
          'Axeptio, Didomi, tarteaucitron, Cookiebot, CookieYes, Complianz, OneTrust, Iubenda, Usercentrics, Sirdata, AppConsent y una docena más, reconocidas por su código.',
      },
      {
        title: '4. El aviso legal',
        description: 'Un enlace a la página que dice quién edita la web, su dirección, su registro y su hosting.',
      },
      {
        title: '5. La política de privacidad',
        description:
          'Un enlace a la página que dice qué datos recoge la web, por qué, durante cuánto tiempo, y cómo ejercer los propios derechos.',
      },
      {
        title: '6. El enlace «Gestionar mis cookies»',
        description:
          'Un enlace o un botón para cambiar la elección, cuando la web deposita rastreadores sujetos a consentimiento.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que dicen los textos',
    title: 'Cookies, banner y páginas legales: las normas francesas, con fuentes',
    intro:
      'Nueve normas, leídas el 8 de noviembre de 2026 en Légifrance, la web de la CNIL y service-public.fr, las fuentes oficiales francesas. Cada una enlaza con el texto.',
    facts: [
      {
        contextLabel: 'Artículo 82, ley francesa de protección de datos',
        title: 'Primero el consentimiento, salvo para lo imprescindible',
        text: 'Leer o depositar una información en el dispositivo de un visitante requiere su consentimiento, tras informarle de la finalidad y de los medios para oponerse. Solo se libran las operaciones que sirven únicamente a la comunicación, o que son estrictamente necesarias para el servicio que ha pedido.',
        sourceName: GDPR_ARTICLE_82_SOURCE.name,
        sourceUrl: GDPR_ARTICLE_82_SOURCE.url,
      },
      {
        contextLabel: 'Directrices de la CNIL, 17 de septiembre de 2020',
        title: 'Seguir navegando no es aceptar',
        text: 'Seguir navegando, usar la aplicación o desplazar la página no vale como consentimiento. Rechazar debe ser posible sin ningún trámite, o con un gesto tan sencillo como aceptar, y retirar el consentimiento tan sencillo como darlo.',
        sourceName: GDPR_CNIL_GUIDELINES_SOURCE.name,
        sourceUrl: GDPR_CNIL_GUIDELINES_SOURCE.url,
      },
      {
        contextLabel: 'Directrices de la CNIL, artículo 3',
        title: 'Los rastreadores de otros también son asunto tuyo',
        text: 'La web que deja que terceros (Google, Meta, una red publicitaria) depositen rastreadores desde sus páginas debe asegurarse de que un mecanismo recoja de verdad el consentimiento de sus visitantes.',
        sourceName: GDPR_CNIL_GUIDELINES_SOURCE.name,
        sourceUrl: GDPR_CNIL_GUIDELINES_SOURCE.url,
      },
      {
        contextLabel: 'Recomendación de la CNIL, 17 de septiembre de 2020',
        title: '«Aceptar todo» y «Rechazar todo» al mismo nivel',
        text: 'La CNIL recomienda dos botones del mismo nivel y formato, guardar la elección del visitante (consentimiento o rechazo) seis meses, y permitirle retirarla en cualquier momento mediante un enlace «Gestionar mis cookies» o un icono presente en todas las páginas.',
        sourceName: GDPR_CNIL_RECOMMENDATION_SOURCE.name,
        sourceUrl: GDPR_CNIL_RECOMMENDATION_SOURCE.url,
      },
      {
        contextLabel: 'Medición de audiencia, página de la CNIL del 4 de julio de 2025',
        title: 'Estadísticas sin banner, con condiciones',
        text: 'Una herramienta de medición de audiencia puede prescindir del consentimiento si solo mide la audiencia por cuenta exclusiva de la web y produce estadísticas anónimas, sin cruces ni cesión a terceros. La CNIL recomienda rastreadores de 13 meses como máximo y una conservación de 25 meses como máximo, y excluye las ofertas cuyo proveedor indica que reutiliza los datos por cuenta propia.',
        sourceName: GDPR_CNIL_AUDIENCE_SOURCE.name,
        sourceUrl: GDPR_CNIL_AUDIENCE_SOURCE.url,
      },
      {
        contextLabel: 'Preguntas y respuestas de la CNIL, 29 de abril de 2026',
        title: 'Vídeos, botones para compartir, reCAPTCHA',
        text: 'Un vídeo o un botón para compartir que deposita rastreadores no debe depositar nada antes de que el visitante acepte; el clic en el vídeo puede servir para pedirlo. Un CAPTCHA está exento si solo sirve para proteger la web, pero la CNIL cita reCAPTCHA entre las soluciones cuyo proveedor indica que reutiliza los datos.',
        sourceName: GDPR_CNIL_FAQ_SOURCE.name,
        sourceUrl: GDPR_CNIL_FAQ_SOURCE.url,
      },
      {
        contextLabel: 'Deliberación de la CNIL del 8 de octubre de 2026',
        title: 'La reproducción de sesiones requiere consentimiento',
        text: 'Las herramientas que graban el recorrido completo de un visitante para reproducirlo, como las que ofrecen Hotjar y Microsoft Clarity, están sujetas a su consentimiento previo. La CNIL también recomienda ocultar los formularios y bloquear la recogida de contraseñas y datos bancarios. Publicada en el Diario Oficial francés del 5 de noviembre de 2026.',
        sourceName: GDPR_CNIL_SESSION_REPLAY_SOURCE.name,
        sourceUrl: GDPR_CNIL_SESSION_REPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Sanciones publicadas por la CNIL',
        title: 'Multas también para las pequeñas empresas',
        text: 'El 4 de noviembre de 2025, 4000 € para una consultora de clubes de deportes subacuáticos; el 18 de diciembre de 2025, 2000 € y un requerimiento para una agencia de viajes: dos procedimientos simplificados por cookies, información y consentimiento. El 1 de septiembre de 2025, 325 millones de euros para una empresa de servicios en línea.',
        sourceName: GDPR_CNIL_SANCTIONS_SOURCE.name,
        sourceUrl: GDPR_CNIL_SANCTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Comprobado el 13 de octubre de 2026',
        title: 'Aviso legal y política de privacidad',
        text: 'La web de una empresa en Francia, microempresarios incluidos, debe decir quién la edita, su dirección, su registro y su hosting, so pena de 75 000 € de multa para un empresario individual y 375 000 € para una sociedad. La política de privacidad debe ser accesible desde cada página mediante un enlace bien visible.',
        sourceName: GDPR_LEGAL_NOTICE_SOURCE.name,
        sourceUrl: GDPR_LEGAL_NOTICE_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Este test no sustituye a una auditoría ni a un asesoramiento jurídico:',
    calloutText:
      'dice lo que muestra el HTML de la página de inicio, sin ejecutar el JavaScript. Para una web que vende en línea, guarda cuentas de clientes o hace publicidad, sigue haciendo falta una revisión completa en el navegador, página por página.',
  },
  remediation: {
    anchorId: 'que-hacer',
    eyebrow: 'Tu web está en riesgo',
    title: 'Qué hacer, en orden',
    intro:
      'El mismo recorrido para una web corporativa, un WordPress o una tienda, de lo más urgente a lo más sencillo.',
    pitfallLabel: 'La trampa',
    items: [
      {
        title: 'Instalar una herramienta de consentimiento que bloquee de verdad',
        text: 'Axeptio, tarteaucitron, Cookiebot, Didomi, o una extensión de WordPress como Complianz o CookieYes: la herramienta debe bloquear cada rastreador hasta la elección, y ofrecer «Aceptar todo» y «Rechazar todo» al mismo nivel.',
        pitfall:
          'Un banner que informa sin bloquear nada: los rastreadores salen antes del clic, y el banner no sirve de nada.',
      },
      {
        title: 'Clasificar cada rastreador en una categoría',
        text: 'Estadísticas, publicidad, vídeos, mapas: cada script pasa bajo el control de la herramienta, también los que añaden el tema y las extensiones (Site Kit, MonsterInsights, el reCAPTCHA del formulario de contacto).',
        pitfall:
          'Los optimizadores como WP Rocket o LiteSpeed Cache retrasan los scripts hasta el primer gesto del visitante: la página va más rápido, pero nadie ha dado su consentimiento.',
      },
      {
        title: 'Configurar Google Analytics',
        text: 'O bien espera el consentimiento (bloqueado por la herramienta de consentimiento, o modo «básico» de Google), o bien pasas a una medición de audiencia configurada para la exención, como Matomo ajustado según la guía publicada en la web de la CNIL.',
        pitfall:
          'El modo de consentimiento «avanzado» carga las etiquetas de Google desde la llegada: según Google, envían mediciones sin cookies antes de la elección.',
      },
      {
        title: 'Sustituir los vídeos de YouTube y los mapas',
        text: 'Una imagen con un botón «Ver el vídeo» que pida el consentimiento antes de cargar el reproductor; para el mapa, una captura con un enlace a Google Maps. La mayoría de las herramientas de consentimiento saben hacerlo.',
        pitfall:
          'Pasar a youtube-nocookie.com: según Google, los vídeos vistos ya no personalizan YouTube, pero Google no dice que no se guarde nada.',
      },
      {
        title: 'Añadir los tres enlaces del pie de página',
        text: 'Aviso legal, política de privacidad y «Gestionar mis cookies», en todas las páginas. La política dice qué datos recoges, por qué, durante cuánto tiempo, y cómo ejercer los propios derechos.',
        pitfall: 'Una sola página «Aviso legal» que esconde la política de privacidad sin decirlo en el enlace.',
      },
      {
        title: 'Hacer limpieza y comprobar en el navegador',
        text: 'Quita los píxeles de las campañas terminadas y las pruebas olvidadas, y luego abre la web en una ventana privada: antes de cualquier clic en el banner, las herramientas de desarrollo (F12, pestaña «Application», «Cookies») no deben mostrar ninguna cookie de medición ni de publicidad.',
        pitfall: 'Probar en un navegador donde ya aceptaste: tu elección anterior esconde el problema.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Cookies y RGPD en tu web: tus preguntas',
    questions: [
      {
        question: '¿El banner de cookies es obligatorio?',
        answer:
          'No siempre. Hace falta en cuanto la web deposita o lee rastreadores que requieren consentimiento: publicidad, botones y vídeos de redes sociales, grabación de sesiones, estadísticas que no cumplen las condiciones de la exención. Una web que solo usa rastreadores imprescindibles (carrito, inicio de sesión, elección del idioma, memoria de la elección sobre las cookies) o una medición de audiencia exenta no lo necesita; para la medición de audiencia, la CNIL recomienda aun así informar a los visitantes, por ejemplo en la política de privacidad.',
      },
      {
        question: '¿Se puede usar Google Analytics sin banner?',
        answer:
          'Solo si cumple todas las condiciones de la exención: medición de audiencia para tu propia cuenta, estadísticas anónimas, sin cruces ni cesión a terceros. La CNIL precisa que las ofertas cuyo proveedor indica que reutiliza los datos por cuenta propia no se benefician de ella, salvo si esa reutilización puede desactivarse. Mientras no lo hayas comprobado en las condiciones de Google, lo más seguro es cargar Google Analytics tras el consentimiento del visitante, o pasar a una herramienta configurada para la exención.',
      },
      {
        question: '¿Matomo puede prescindir del consentimiento?',
        answer:
          'Sí, si está configurado para ello. La CNIL publica en su web una guía de configuración de Matomo Analytics para la exención: exportaciones de datos desactivadas, posibilidad para el visitante de negarse a ser seguido, direcciones IP anonimizadas, ni cookies de terceros ni seguimiento entre dominios, sin User ID, mapas de calor y grabaciones de sesiones desactivados, ningún dato personal recogido. El test ve Matomo, no sus ajustes: por eso lo clasifica «a comprobar».',
      },
      {
        question: '¿Qué multas hay por cookies depositadas sin consentimiento?',
        answer:
          'La CNIL publica sus sanciones. Las más conocidas afectan a grandes grupos (325 millones de euros el 1 de septiembre de 2025 para una empresa de servicios en línea, 150 millones el mismo día para una tienda de ropa en línea), pero también sanciona a pequeñas estructuras mediante un procedimiento simplificado: 4000 € el 4 de noviembre de 2025 para una consultora de clubes de deportes subacuáticos, 2000 € y un requerimiento el 18 de diciembre de 2025 para una agencia de viajes, 15 000 € y un requerimiento el 26 de marzo de 2026 para una empresa de venta de entradas (con otros incumplimientos).',
      },
      {
        question: '¿El aviso legal y la política de privacidad son obligatorios?',
        answer:
          'Sí, en Francia. La web de una empresa, microempresarios incluidos, debe mostrar su identidad, su dirección, su registro y su hosting: hasta 75 000 € de multa para un empresario individual y 375 000 € para una sociedad. En cuanto recoge datos, también debe decir cuáles, por qué, durante cuánto tiempo y cómo ejercer los derechos, en una política de privacidad accesible desde cada página mediante un enlace bien visible.',
      },
      {
        question: 'Mi web WordPress tiene una extensión de cookies: ¿estoy en regla?',
        answer:
          'No necesariamente. La extensión (Complianz, CookieYes, Cookiebot, tarteaucitron…) debe bloquear los scripts hasta la elección, también los que ponen el tema u otras extensiones: Site Kit o MonsterInsights para Google Analytics, el reCAPTCHA de un formulario de contacto, un vídeo de YouTube en un maquetador. Los optimizadores como WP Rocket o LiteSpeed Cache retrasan algunos scripts hasta el primer gesto del visitante, lo que no vale como consentimiento. El test muestra lo que sale antes de la elección.',
      },
      {
        question: '¿Un vídeo de YouTube o un mapa de Google Maps es un problema?',
        answer:
          'Sí, si se carga con la página. La CNIL pide que un contenido integrado no deposite ningún rastreador sujeto a consentimiento antes de que el visitante acepte; el clic en el vídeo puede servir para pedir ese consentimiento. El modo de privacidad mejorado de YouTube (youtube-nocookie.com) impide, según Google, que los vídeos vistos personalicen YouTube y los anuncios, pero Google no dice que no se guarde nada: el test lo clasifica «a comprobar».',
      },
      {
        question: '¿Un botón «Rechazar todo» es obligatorio?',
        answer:
          'La norma es que rechazar sea tan fácil como aceptar. Para conseguirlo, la CNIL recomienda un botón «Rechazar todo» al mismo nivel y con el mismo aspecto que «Aceptar todo». Seguir navegando o desplazar la página nunca vale como consentimiento. El 31 de diciembre de 2021, la CNIL sancionó a dos grandes plataformas (150 y 60 millones de euros) por la forma de rechazar las cookies.',
      },
      {
        question: '¿Qué comprueba exactamente este test, y qué no ve?',
        answer:
          'Lee una vez el HTML de la página de inicio, como un robot, sin ejecutar el JavaScript. Reconoce los rastreadores más habituales (Google Analytics, Google Tag Manager, Google Ads, píxel de Meta, Hotjar, Microsoft Clarity, LinkedIn, TikTok, Pinterest, Matomo, YouTube, Google Maps, reCAPTCHA), las herramientas de consentimiento más extendidas, y busca tres enlaces: aviso legal, privacidad, gestión de cookies. No ve lo que Google Tag Manager o un script cargan después, ni las demás páginas de la web, ni el contenido de tus páginas legales. No sustituye a una auditoría ni a un asesoramiento jurídico.',
      },
      {
        question: '¿El test guarda la dirección de mi web?',
        answer:
          'No. La dirección no se guarda ni se envía a PostHog, la herramienta de medición de esta web: solo se envían el veredicto, los rastreadores reconocidos y la herramienta de consentimiento encontrada, para saber qué aparece más. El resultado se queda diez minutos en la memoria del servidor para no leer dos veces la misma web, y luego desaparece.',
      },
    ],
  },
  contactCta: {
    title: '¿Prefieres que ponga tu web en regla?',
    description:
      'Envíame la dirección. Te respondo en 24 horas con lo que veo: los rastreadores a bloquear, la herramienta de consentimiento a instalar o configurar, las páginas legales a completar, y un precio cerrado si quieres que me encargue.',
    button: 'Enviar mi web',
    healthCheckLabel: 'Probar mi web: 8 comprobaciones',
  },
}
