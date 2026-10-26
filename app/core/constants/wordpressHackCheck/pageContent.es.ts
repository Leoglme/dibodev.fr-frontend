import type { DibodevWordPressHackCheckPageContent } from '~/core/types/DibodevWordPressHackCheckPage'
import { WORDPRESS_HACK_SOURCES } from '~/core/constants/wordpressHackCheck/pageShared'

export const WORDPRESS_HACK_CHECK_PAGE_ES: DibodevWordPressHackCheckPageContent = {
  meta: {
    title: '¿Web WordPress hackeada? Comprobar mi web gratis',
    description:
      'Introduce la dirección de tu web WordPress: la herramienta detecta un plugin vulnerable (UpdraftPlus…), un WordPress antiguo o señales de inyección.',
    inLanguage: 'es',
    schemaAbout: 'Webs WordPress hackeadas y claves de UpdraftCentral robadas (octubre de 2026)',
  },
  breadcrumbLabel: 'Web WordPress hackeada: comprobar',
  shareImage: {
    titleLines: ['¿Mi web WordPress', 'está hackeada?'],
    highlight: 'hackeada',
    subtitle: 'Plugin vulnerable, versión y señales de inyección leídos desde fuera',
    badge: 'Comprobación gratuita',
    alt: '¿Mi web WordPress está hackeada? Comprobación gratuita por Dibodev',
  },
  hero: {
    titleBefore: '¿Mi web WordPress está ',
    titleHighlight: 'hackeada',
    titleAfter: '?',
    reassurances: ['Gratis, sin registro', 'Resultado en segundos', 'Fuentes revisadas el 26 de octubre de 2026'],
    description:
      'El fin de semana del 17 y 18 de octubre de 2026, se filtraron en su editor claves de conexión de UpdraftCentral, la herramienta de gestión remota del plugin de copias de seguridad UpdraftPlus. Desde el 18 de octubre, sirvieron para instalar plugins falsos y cuentas ocultas en webs WordPress, incluso en webs actualizadas. Una web hackeada no siempre lo muestra: redirige a algunos visitantes, añade enlaces ocultos, o espera. Esta herramienta lee tu página de inicio y algunos archivos públicos, detecta un plugin que sigue por debajo de su versión corregida, un WordPress antiguo o señales de inyección, y te dice qué hacer: nada, comprobar, o actuar hoy.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes, Francia. Limpio, actualizo y aseguro webs WordPress, tiendas y software de gestión para pequeñas empresas, a distancia, y respondo en 24 horas.',
  },
  checker: {
    siteLabel: 'Dirección de tu web WordPress',
    sitePlaceholder: 'miempresa.es',
    siteHint:
      'Basta con el nombre de dominio. Se leen la página de inicio y como mucho siete pequeños archivos públicos, como lo haría un navegador: no se escanea nada, no se guarda nada.',
    submit: 'Comprobar',
    checking: 'Comprobando…',
    resultLabel: 'Tu resultado',
    idleTitle: 'Introduce la dirección de tu web para empezar',
    idleText:
      'El resultado dice si la web funciona con WordPress, qué versión muestra, si un plugin vigilado sigue siendo vulnerable, y lo que un visitante puede ver de anormal.',
    loadingTitle: 'Leyendo la web…',
    loadingText:
      'Leo la página de inicio, luego el feed RSS, los plugins vigilados y la lista pública de autores. Unos segundos.',
    errorTitles: {
      invalid: 'Dirección que corregir',
      unreachable: 'Web inaccesible',
      rateLimited: 'Demasiadas comprobaciones',
      failed: 'Comprobación imposible',
    },
    errorTexts: {
      invalid: 'Introduce un nombre de dominio público, como miempresa.es, sin espacios ni direcciones internas.',
      unreachable:
        'No he podido leer la página de inicio de {host}: dirección errónea, web caída, o un servidor que rechaza a los robots. Prueba con www delante, o sin él.',
      rateLimited: 'Has lanzado muchas comprobaciones en poco tiempo. Vuelve a intentarlo en unos minutos.',
      failed: 'Algo ha fallado por mi parte. Vuelve a intentarlo en un momento, o escríbeme la dirección de la web.',
    },
    verdictTitles: {
      suspiciousSignals: 'Señales sospechosas: revisar hoy',
      vulnerablePlugin: '{plugin} {pluginVersion}: plugin vulnerable',
      outdatedCore: 'WordPress {coreVersion}: no está al día',
      cleanSurface: 'Nada anormal visible desde fuera',
      notWordPress: 'Esta web no funciona con WordPress',
      unknown: 'Ninguna señal legible desde fuera',
    },
    verdictTexts: {
      suspiciousSignals:
        'La página de inicio de {host} muestra una o varias señales que aparecen en webs hackeadas. No prueba un hackeo, pero hay que revisarlo de cerca, ahora.',
      vulnerablePlugin:
        '{host} usa {plugin} en la versión {pluginVersion}, cuando el fallo conocido está corregido a partir de la {fixedVersion}. Mientras el plugin no se actualice, la puerta sigue abierta.',
      outdatedCore:
        '{host} muestra WordPress {coreVersion}, cuando la última versión es la {latestCoreVersion}. Las ramas antiguas siguen recibiendo parches «por cortesía», pero solo la última versión tiene soporte oficial.',
      cleanSurface:
        '{host} funciona con WordPress y nada visible desde fuera indica un hackeo o un plugin vigilado vulnerable. Es una lectura superficial: los plugins falsos de octubre de 2026 no suelen dejar rastro en la página de inicio, y solo una revisión desde dentro los ve.',
      notWordPress:
        '{host} funciona con {platform}, no con WordPress. Los fallos de plugins de WordPress no se aplican a esta web.',
      unknown:
        'Nada en la página de inicio de {host} indica WordPress ni una plataforma conocida. Una web a medida bien configurada no muestra nada: eso no prueba que no haya WordPress.',
    },
    detailsTitle: 'Lo que he leído',
    signalTexts: {
      generatorMeta: 'La página muestra su versión de WordPress en una etiqueta meta ({coreVersion}).',
      assetVersion: 'Los archivos del núcleo llevan el número de versión {coreVersion}.',
      feedVersion: 'El feed RSS de la web muestra su versión de WordPress ({coreVersion}).',
      usersExposed:
        'La lista pública de autores muestra {users} cuenta(s) con su identificador, a menudo el mismo que el de acceso. Es el ajuste por defecto de WordPress, no un hackeo: contraseñas únicas y una autenticación en dos pasos neutralizan el riesgo.',
      pluginsSeen: 'Se reconocen plugins en el código de la página.',
      externalScripts:
        'La página carga scripts desde dominios que no conozco: {domains}. A comprobar: un servicio que elegiste, o no.',
      hiddenLinks:
        'Varios enlaces a otras webs están ocultos en la página (bloque invisible o fuera de pantalla): la firma clásica de un spam SEO inyectado.',
      redirectScript:
        'La página envía a otro dominio (etiqueta de refresco, o un script que cambia de dirección según la procedencia o el dispositivo del visitante): la forma habitual de las redirecciones que deja un hackeo.',
      obfuscatedScript:
        'Un script de la página ejecuta texto codificado (eval de un contenido decodificado): una técnica habitual de las inyecciones, rara en una web sana.',
      spamKeywords:
        'El título o la descripción de la página contienen palabras de spam (farmacia, casino online…) o un idioma ajeno a la web: señal frecuente de un hackeo SEO.',
      phpInUploads:
        'La página llama a un archivo .php de la carpeta de subidas (uploads): esa carpeta solo debería contener imágenes y documentos.',
      knownBackdoorPlugin:
        'La página carga un plugin cuyo nombre figura entre los plugins falsos instalados con las claves de UpdraftCentral robadas: trátalo como una puerta trasera, sin modificarlo.',
      criticalError:
        'La página muestra un error crítico de WordPress. Suele tener una causa banal (una actualización de PHP, un plugin incompatible), pero la primera variante de los plugins falsos de octubre de 2026 también provocaba uno: mira la lista de plugins antes de corregir nada.',
      coreOutdated: 'La versión mostrada ({coreVersion}) es más antigua que la última publicada ({latestCoreVersion}).',
      cloudflare:
        'Cloudflare está delante de la web: su cortafuegos filtra parte de los ataques, sin sustituir a las actualizaciones.',
    },
    coreVersionHiddenLine: 'Versión de WordPress oculta: es una buena práctica, y no dice si la web está al día.',
    pluginsTitle: 'Plugins vigilados leídos en la web',
    pluginStatusTexts: {
      vulnerable: '{plugin} {pluginVersion}: vulnerable, corregido a partir de la {fixedVersion}',
      fixed: '{plugin} {pluginVersion}: al día (parche {fixedVersion} o posterior)',
      unknownVersion: '{plugin}: presente, versión no legible desde fuera',
    },
    stepsTitle: 'Qué hacer',
    steps: {
      suspiciousSignals: [
        'Antes de tocar nada, haz una copia completa de la web y de la base de datos, fuera del servidor: es una prueba, no un punto de restauración.',
        'Revisa las cuentas que pueden instalar plugins (no solo los administradores), los plugins con la pestaña «Must-Use» incluida, y los archivos recientes.',
        'Cambia las contraseñas (WordPress, FTP, base de datos, hosting) y las claves secretas de wp-config.php, que cierran la sesión de todo el mundo.',
        'Sigue la guía «comprobaciones que hacer hoy» de abajo, o envíame la dirección: lo miro en 24 horas.',
      ],
      vulnerablePlugin: [
        'Entra directamente en la administración de la web y actualiza {plugin} a la {fixedVersion} o posterior, tras una copia de seguridad.',
        'Si se trata de UpdraftPlus: borra también la clave en Ajustes, UpdraftPlus, pestaña Herramientas avanzadas, UpdraftCentral. La actualización no elimina un plugin falso ya instalado.',
        'Revisa las cuentas, los plugins y los archivos recientes con la guía de abajo.',
        'Activa las actualizaciones automáticas de los plugins, o reserva una cita mensual para hacerlas.',
      ],
      outdatedCore: [
        'Actualiza WordPress desde Escritorio, Actualizaciones, tras una copia completa fuera del servidor.',
        'Actualiza también el tema y todos los plugins: la mayoría de los fallos explotados este otoño estaban en plugins.',
        'Borra los plugins y temas desactivados, que siguen siendo atacables.',
        'Comprueba la versión de PHP en tu hosting: un WordPress antiguo suele funcionar con un PHP antiguo.',
      ],
      cleanSurface: [
        'Haz la revisión desde dentro, que ve lo que esta página no ve: cuentas, plugins instalados, archivos recientes (guía de abajo).',
        'Si usas UpdraftPlus, actualízalo a la 1.26.13 (2.26.13 en Premium) y borra la clave de UpdraftCentral, aunque la web parezca sana.',
        'Guarda una copia fuera del servidor y una actualización mensual: es lo que marca la diferencia el día que algo se rompe.',
      ],
      notWordPress: [
        'Los fallos de plugins de WordPress no afectan a {platform}. Nada que hacer en esta web.',
        'Si tienes otra web, una tienda o un blog con WordPress, compruébalo aquí.',
        'Una web a medida se revisa de otra forma: versión de su lenguaje, dependencias, registros. Puedo mirarlo contigo.',
      ],
      unknown: [
        'Desde fuera, nada dice si esta web usa WordPress: pregunta a quien la hizo.',
        'Si es un WordPress, revísalo desde dentro con la guía de abajo.',
        'Si nadie responde, envíame la dirección: lo miro en 24 horas.',
      ],
    },
    disclaimer:
      'Lectura orientativa desde fuera, a partir de la página de inicio y de algunos archivos públicos. Un plugin falso que no carga nada en la página, un plugin cuyo readme está bloqueado o un hackeo que solo afecta a algunos visitantes no se ven desde aquí: solo una revisión desde dentro es concluyente.',
    guidesTitle: 'Las tres guías, en orden',
    guideLabels: {
      checks: 'Web WordPress hackeada: las comprobaciones que hacer hoy',
      updraftplus: 'UpdraftPlus: revocar UpdraftCentral, cambiar las claves, comprobar tus copias',
      restore: 'Restaurar una web WordPress tras un hackeo, sin traer de vuelta el problema',
    },
    idleCtaIntro:
      '¿Tienes dudas? Envíame la dirección de tu web y en 24 horas te digo lo que veo y qué hacer. Gratis, sin compromiso.',
    idleCtaLabel: 'Enviar la dirección de mi web',
    ctaIntro:
      '¿Prefieres delegarlo? Reviso desde dentro, limpio, cambio las claves y las contraseñas, lo actualizo todo y te envío un informe por escrito. Diagnóstico gratuito, presupuesto antes de cualquier intervención.',
    ctaLabels: {
      suspiciousSignals: 'Revisar y limpiar mi web',
      vulnerablePlugin: 'Asegurar mi web',
      outdatedCore: 'Actualizar mi web',
      cleanSurface: 'Revisar mi web desde dentro',
      notWordPress: 'Revisar mis otras herramientas',
      unknown: 'Revisar mi web',
    },
    serviceLinkLabel: 'Cómo es la intervención a distancia, y sus precios',
  },
  mobileContactBar: {
    text: '¿Dudas sobre tu WordPress?',
    buttonLabel: 'Enviar la dirección de mi web',
  },
  facts: {
    anchorId: 'hechos',
    eyebrow: 'Qué ha pasado',
    title: 'UpdraftPlus, UpdraftCentral y las webs WordPress hackeadas en octubre de 2026, en seis hechos',
    intro:
      'UpdraftPlus es el plugin de copias de seguridad más extendido de WordPress. En octubre de 2026, su herramienta de gestión remota sirvió de puerta de entrada. Esto es lo que dicen el editor y los equipos de seguridad, sin dramatizar.',
    facts: [
      {
        contextLabel: '17-18 de octubre de 2026',
        title: 'Claves de UpdraftCentral filtradas en el editor',
        text: 'TeamUpdraft, el editor de UpdraftPlus, sufrió una intrusión el fin de semana del 17 y 18 de octubre de 2026. Las claves de conexión de UpdraftCentral, su herramienta de gestión remota de webs, formaban parte de ella. No es un fallo del código del plugin: las órdenes enviadas a las webs estaban firmadas con claves auténticas.',
        sourceName: 'TeamUpdraft, artículo del 19 de octubre de 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.teamUpdraftIncident,
      },
      {
        contextLabel: 'Desde el 18 de octubre',
        title: 'Plugins falsos y cuentas ocultas',
        text: 'Patchstack vio el primer ataque el 18 de octubre a las 15:32 (hora UTC). La orden instala un plugin falso («Small maintenance toolkit», «Site Health Cache»…), que crea una cuenta capaz de instalar plugins y un acceso por enlace secreto, sin contraseña ni autenticación en dos pasos. Patchstack registró 99 nombres de plugins distintos.',
        sourceName: 'Patchstack, análisis del 19 de octubre de 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.patchstackUpdraftCentral,
      },
      {
        contextLabel: 'Webs actualizadas también',
        title: 'Estar al día no bastaba',
        text: 'La web de IT-Connect, con UpdraftPlus Premium 2.26.11, recibió la orden el 19 de octubre a las 7:17. La puerta de entrada era una clave válida, no una versión antigua: cualquier web conectada a UpdraftCentral estaba expuesta, fuera cual fuera su versión.',
        sourceName: 'IT-Connect, 19 de octubre de 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.itConnect,
      },
      {
        contextLabel: 'Marcada por defecto',
        title: 'Puede existir una clave sin que lo sepas',
        text: 'Al conectar una web a tu cuenta de TeamUpdraft, la casilla que la añade a UpdraftCentral viene marcada por defecto, y estas claves no caducan. Nethemba, que descubrió el ataque, aconseja borrar la clave incluso después de una limpieza, y mover un plugin falso fuera de la web en lugar de borrarlo desde la administración, lo que borraría sus rastros.',
        sourceName: 'Nethemba, análisis del 19 de octubre de 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.nethembaAnalysis,
      },
      {
        contextLabel: '1.26.13 y 2.26.13',
        title: 'La versión corregida, y lo que no hace',
        text: 'UpdraftPlus 1.26.13 (2.26.13 en Premium), publicada el 19 de octubre, revoca las claves creadas antes del incidente; la 1.26.12 del mismo día no las revocaba, por un error. Actualizar impide una nueva orden, pero no elimina ni un plugin falso, ni una cuenta, ni una sesión ya abierta.',
        sourceName: 'BleepingComputer, 20 de octubre de 2026',
        sourceUrl: WORDPRESS_HACK_SOURCES.bleepingComputerUpdraftCentral,
      },
      {
        contextLabel: '72 horas',
        title: 'Un hackeo que afecta a datos personales se notifica',
        text: 'Si la web tiene cuentas de clientes, pedidos o un formulario que guarda datos, una intrusión es una violación de datos. En la Unión Europea se notifica a la autoridad de protección de datos (la AEPD en España, la CNIL en Francia) en 72 horas cuando supone un riesgo para las personas, y se informa a las personas cuando el riesgo es alto.',
        sourceName: 'CNIL, notificar una violación de datos personales',
        sourceUrl: WORDPRESS_HACK_SOURCES.cnil,
      },
    ],
    calloutEmphasizedIntro: 'Lo que hago por ti:',
    calloutText:
      'leo la web desde dentro, quito lo que no debe estar, cambio las claves y las contraseñas, restauro una copia sana si hace falta, actualizo WordPress, el tema, los plugins y PHP, y te escribo lo que se ha hecho. A distancia, diagnóstico gratuito, presupuesto antes de actuar.',
  },
  signs: {
    anchorId: 'senales',
    eyebrow: 'Las señales',
    title: 'Cómo se ve una web WordPress hackeada',
    intro:
      'Un hackeo no busca romper tu web: quiere usarla, el mayor tiempo posible. Esto es lo que un visitante, la herramienta o tú mismo podéis notar.',
    items: [
      {
        title: 'Enlaces ocultos o páginas que no existen',
        description:
          'Enlaces invisibles a webs de apuestas, de medicamentos o de falsificaciones, o cientos de páginas en japonés en Google bajo tu dominio. Es el spam SEO, el más habitual.',
      },
      {
        title: 'Una redirección para algunos visitantes',
        description:
          'La web te parece normal, pero un visitante que llega desde Google con el móvil aterriza en otro sitio. La herramienta detecta una redirección en el código de la página; desde dentro, suele esconderse en el archivo .htaccess o en un plugin.',
      },
      {
        title: 'Un aviso de Google o del hosting',
        description:
          '«Sitio engañoso» en Chrome, un mensaje de Search Console, o un hosting que suspende la web por envío de spam: el hackeo ya es antiguo.',
      },
      {
        title: 'Archivos .php donde no debería haberlos',
        description:
          'La carpeta wp-content/uploads solo contiene imágenes y documentos. Un archivo .php dentro, o una carpeta desconocida en wp-content/mu-plugins o wp-content/upgrade, es una puerta trasera hasta que se demuestre lo contrario.',
      },
      {
        title: 'Una cuenta que no has creado',
        description:
          'Los plugins falsos de octubre de 2026 crean una cuenta de Editor a la que añaden el derecho de instalar plugins, con un nombre del tipo data-ops43, mostrado como «Site Tools», y una dirección en @example.org. Revisa los permisos de cada cuenta, no solo los administradores.',
      },
      {
        title: 'Un error crítico en algunas páginas',
        description:
          'La primera variante de estos plugins falsos provocaba un error «Undefined constant» en las páginas sin caché. No corrijas ese código: repararlo despertaría la puerta trasera. Mueve mejor la carpeta del plugin fuera de la web.',
      },
    ],
  },
  watchedPlugins: {
    anchorId: 'plugins-vigilados',
    eyebrow: 'Lista de vigilancia',
    title: 'Los plugins que comprueba la herramienta, y la versión que los corrige',
    intro:
      'Para cada plugin de la lista, la herramienta lee el archivo readme.txt público y compara la versión instalada con la versión corregida. UpdraftPlus y Ninja Forms se comprueban siempre, los demás cuando la página de inicio los muestra. Los plugins de pago no siempre tienen un readme público: el resultado dice entonces «versión no legible».',
    pluginColumnLabel: 'Plugin',
    issueColumnLabel: 'El problema',
    fixedVersionColumnLabel: 'Versión corregida',
    rows: [
      {
        name: 'UpdraftPlus',
        coverage:
          'Claves de UpdraftCentral robadas en el editor, plugins falsos instalados desde el 18 de octubre de 2026, webs actualizadas incluidas',
        price: '1.26.13 o posterior',
        priceCondition: '2.26.13 en Premium, y después borrar la clave de UpdraftCentral',
      },
      {
        name: 'Ninja Forms',
        coverage:
          'XSS sin autenticación (CVE-2026-94504), explotado desde el 4 de octubre de 2026 por una campaña que oculta su propia cuenta de administrador',
        price: '3.15.4 o posterior',
        priceCondition: 'Versión actual: 3.15.6',
      },
      {
        name: 'WPC Product Bundles for WooCommerce',
        coverage: 'XSS sin autenticación (CVE-2026-93836), misma campaña que Ninja Forms',
        price: '8.6.7 o posterior',
        priceCondition: 'Tiendas WooCommerce',
      },
      {
        name: 'Bricksforge',
        coverage: 'Subida de archivos sin autenticación (CVE-2026-85097), explotada desde el 7 de octubre de 2026',
        price: '3.1.8.10 o posterior',
        priceCondition: 'Complemento de pago para Bricks',
      },
      {
        name: 'Elementor Pro',
        coverage:
          'Subida de archivos PHP por los formularios (CVE-2026-32475), explotada desde el 19 de agosto de 2026',
        price: '4.2.2 o posterior',
        priceCondition: 'Plugin de pago: ver la versión en la administración',
      },
      {
        name: 'Super Forms',
        coverage: 'Subida de archivos sin autenticación (CVE-2026-14894), explotada desde el 14 de julio de 2026',
        price: '6.3.314 o posterior',
        priceCondition: 'Plugin de pago',
      },
      {
        name: 'All-in-One WP Migration',
        coverage: 'Inyección SQL (CVE-2026-19949), corregida el 20 de agosto de 2026, sin explotación conocida',
        price: '7.110 o posterior',
        priceCondition: 'Más de 5 millones de webs',
      },
    ],
    calloutEmphasizedIntro: '¿Tu plugin no está en la lista?',
    calloutText:
      'La herramienta solo comprueba los plugins cuyos fallos se han explotado o han tenido mucha difusión en los últimos meses. Para los demás, la administración de WordPress señala cada plugin que tiene una actualización: hazlas todas, y borra los que ya no usas.',
  },
  method: {
    eyebrow: 'En orden',
    title: 'Qué hacer hoy, en cuatro pasos',
    intro:
      'El mismo recorrido para una web corporativa, un blog o una tienda WooCommerce. Cuenta una hora si la web está sana, más si está hackeada.',
    steps: [
      {
        label: 'Copiar',
        title: 'Una copia completa, fuera del servidor, antes que nada',
        description:
          'Archivos y base de datos, descargados en tu ordenador o enviados a un almacenamiento externo. Aunque esté hackeada, esta copia sirve de prueba y permite encontrar lo que se ha modificado. No restaures nada antes de terminar de revisar.',
      },
      {
        label: 'Revisar',
        title: 'Cuentas, plugins, archivos, clave de UpdraftCentral',
        description:
          'Las cuentas que pueden instalar plugins, no solo los administradores. Los plugins con la pestaña «Must-Use» incluida, y las carpetas wp-content/mu-plugins y wp-content/upgrade. Los archivos .php de wp-content/uploads. La clave de UpdraftCentral y Search Console. La guía «comprobaciones que hacer hoy» da el orden y los lugares.',
      },
      {
        label: 'Limpiar',
        title: 'Quitar, cambiar, restaurar',
        description:
          'Mueve los plugins falsos fuera de la web en lugar de borrarlos desde la administración, borra las cuentas desconocidas, cambia todas las contraseñas y las claves secretas, borra la clave de UpdraftCentral. Si la duda persiste, restaura una copia anterior al 17 de octubre y repite estos pasos: es la guía de restauración.',
      },
      {
        label: 'Cerrar la puerta',
        title: 'Actualizaciones, PHP, y una rutina mensual',
        description:
          'WordPress, tema y plugins al día, plugins inútiles borrados, una versión de PHP corregida en el hosting, una copia fuera del servidor cada semana. No vuelvas a conectar UpdraftCentral hasta que el editor termine su investigación. Y si se han podido filtrar datos personales, la notificación en 72 horas.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Tus preguntas sobre una web WordPress hackeada',
    questions: [
      {
        question: '¿Cómo saber si mi web WordPress está hackeada?',
        answer:
          'Desde fuera: esta herramienta, una búsqueda «site:tudominio.es» en Google para ver páginas que no has escrito, y una visita desde el móvil en navegación privada para pillar una redirección. Desde dentro: las cuentas que pueden instalar plugins, la lista de plugins con la pestaña «Must-Use», los archivos modificados recientemente y los registros de acceso del hosting. La guía «comprobaciones que hacer hoy» detalla cada punto.',
      },
      {
        question: 'Mi web está al día, y UpdraftPlus también: ¿me afecta igualmente?',
        answer:
          'Sí, si la web tenía una clave de UpdraftCentral activa. La puerta de entrada era una clave válida, no una versión antigua, y la casilla que crea esa clave viene marcada por defecto al conectar una web a tu cuenta de TeamUpdraft. Actualiza a la 1.26.13 (2.26.13 en Premium), borra la clave en las herramientas avanzadas de UpdraftPlus y revisa las cuentas, los plugins y los archivos: la actualización sola no quita nada de lo que ya se instaló.',
      },
      {
        question: '¿Qué hago primero si mi web está hackeada?',
        answer:
          'Una copia completa fuera del servidor, y luego un cambio de todas las contraseñas (WordPress, FTP, base de datos, cuenta del hosting, correo vinculado) y de las claves secretas de wp-config.php. Solo después, la limpieza: cuentas y plugins desconocidos, archivos recientes, redirecciones. Si no puedes hacerlo tú, pon la web en mantenimiento en el hosting y escríbeme.',
      },
      {
        question: '¿Tengo que cambiar mis contraseñas?',
        answer:
          'Sí, todas, en cuanto haya una duda, y una segunda vez después de la limpieza: WordPress (cada administrador), FTP o SFTP, base de datos, cuenta del hosting, cuenta de TeamUpdraft, y el correo que recibe los restablecimientos. Cambia también las claves secretas de wp-config.php: cierran todas las sesiones abiertas, incluida la del atacante.',
      },
      {
        question: 'Mi web muestra un error crítico desde hace unos días: ¿tiene relación?',
        answer:
          'Quizás. Un error crítico suele tener una causa banal, como una actualización de PHP o un plugin incompatible. Pero la primera variante de los plugins falsos de octubre de 2026 provocaba un error «Undefined constant» en las páginas sin caché. Si el mensaje cita un plugin que no conoces, no corrijas su código: mueve su carpeta fuera de la web y sigue la guía de comprobaciones.',
      },
      {
        question: 'Mi hosting dice que la web envía spam, o la ha suspendido: ¿qué hago?',
        answer:
          'Casi siempre es un hackeo. Pide al hosting los archivos o scripts implicados y los registros, haz la copia, y luego limpia o restaura una versión anterior. La web solo debe volver a estar en línea cuando las contraseñas estén cambiadas y las actualizaciones hechas, o puede volver a ser suspendida.',
      },
      {
        question: '¿Basta con restaurar una copia de seguridad?',
        answer:
          'Solo si la copia es anterior a la intrusión, es decir, anterior al 17 de octubre para UpdraftCentral, y si cierras la puerta justo después. Una copia de esa fecha aún puede contener la antigua clave de UpdraftCentral: bórrala de nuevo, cambia las contraseñas y las claves secretas, y actualízalo todo. La guía de restauración explica cómo elegir la buena copia.',
      },
      {
        question: '¿Wordfence, Sucuri o un plugin de seguridad lo habrían evitado?',
        answer:
          'Ayudan a detectar (archivos modificados, accesos sospechosos) y bloquean parte de los ataques, pero una orden firmada con una clave auténtica pasa por legítima. No sustituyen ni las actualizaciones, ni borrar los plugins inútiles, ni contraseñas únicas con autenticación en dos pasos.',
      },
      {
        question: '¿Mi hosting se encarga de esto?',
        answer:
          'El hosting mantiene el servidor y la versión de PHP, no tu WordPress, tus plugins ni tus cuentas. Puede suspender una web que envía spam y darte los registros. La limpieza corre de tu cuenta o de tu proveedor.',
      },
      {
        question: '¿Tengo que avisar a mis clientes o a la autoridad de protección de datos?',
        answer:
          'Si la web guarda datos personales (cuentas, pedidos, formularios guardados) y una intrusión ha podido acceder a ellos, es una violación de datos: en la Unión Europea se notifica a la autoridad en 72 horas en cuanto hay un riesgo para las personas, se informa a las personas si el riesgo es alto, y se deja constancia por escrito en todos los casos. Una web corporativa que no guarda ningún dato no tiene nada que notificar.',
      },
      {
        question: '¿Qué hace exactamente esta herramienta, y qué no ve?',
        answer:
          'Lee la página de inicio una vez, como un navegador, y luego como mucho siete pequeños archivos públicos: el feed RSS cuando la página oculta su versión, el readme.txt de los plugins vigilados, y la lista pública de autores. Reconoce WordPress, su versión si se muestra, un plugin de la lista por debajo de su versión corregida, enlaces ocultos, una redirección, un script codificado, palabras de spam, archivos .php en las subidas y un error crítico. No escanea nada, no envía ninguna carga y guarda el resultado diez minutos en caché, no más. No ve un plugin falso que no carga nada en la página, ni un hackeo que solo afecta a algunos visitantes: solo una revisión desde dentro lo resuelve.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro:
      'Las tres guías de esta página, el artículo sobre el fallo de PHP de octubre de 2026, y una lectura para recuperar el control de una web de la que ya nadie se ocupa.',
  },
  contactCta: {
    title: '¿Necesitas que alguien se ocupe?',
    description:
      'Envíame la dirección de la web. Reviso desde dentro, limpio, cambio las claves, lo actualizo todo y te escribo lo que se ha hecho. Diagnóstico gratuito en 24 horas, presupuesto antes de cualquier intervención.',
    button: 'Revisar mi web',
  },
}
