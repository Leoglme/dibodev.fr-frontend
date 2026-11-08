import type { DibodevWebsiteHealthCheckPageContent } from '~/core/types/DibodevWebsiteHealthCheckPage'

export const WEBSITE_HEALTH_CHECK_PAGE_ES: DibodevWebsiteHealthCheckPageContent = {
  meta: {
    title: 'Probar mi web: 8 comprobaciones gratuitas en diez segundos',
    description:
      'Escribe la dirección de tu web: HTTPS, PHP, WordPress, correos, móvil, título, aviso legal y señales de edad comprobados en diez segundos, con qué hacer.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Comprobación del estado de una web: seguridad, actualizaciones, pantalla del móvil y obligaciones legales francesas',
  },
  breadcrumbLabel: 'Probar mi web',
  shareImage: {
    titleLines: ['Probar mi web:', '8 comprobaciones gratuitas'],
    highlight: '8 comprobaciones',
    subtitle: 'HTTPS, PHP, WordPress, correos, móvil, título, aviso legal, señales de edad',
    badge: 'Gratis, sin registro',
    alt: 'Probar mi web: 8 comprobaciones gratuitas por Dibodev',
  },
  hero: {
    titleBefore: 'Probar mi web: ',
    titleHighlight: '8 comprobaciones',
    titleAfter: ' gratuitas, en diez segundos',
    reassurances: ['Gratis, sin registro', 'No se guarda ningún dato', 'Resultado en diez segundos'],
    description:
      'Una web corporativa envejece sin avisar: un certificado que falta, una versión de PHP sin su parche, una extensión de WordPress cerrada, correos que caen en spam, una página que se ve mal en el móvil, un pie de página que todavía dice 2019. Esta herramienta lee la página de inicio de tu web como lo haría un visitante y responde a ocho preguntas, cada una con un veredicto, lo que significa y qué hacer. Los tres puntos más técnicos (PHP, WordPress, correos) enlazan con un comprobador detallado. Pensada para las empresas francesas, funciona con cualquier web pública.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes (Francia). Actualizo, aseguro y rehago webs corporativas para pequeñas empresas, a distancia, y respondo en 24 horas.',
  },
  checker: {
    siteLabel: 'Dirección de tu web',
    sitePlaceholder: 'miempresa.fr',
    siteHint:
      'Basta con un nombre de dominio. Se lee una página, como lo haría un navegador, más algunos archivos públicos para WordPress y los registros DNS del dominio para los correos: nada se escanea, nada se guarda.',
    submit: 'Probar mi web',
    checking: 'Comprobando…',
    resultLabel: 'Tu resultado',
    idleTitle: 'Escribe la dirección de tu web para empezar',
    idleText:
      'Ocho veredictos en diez segundos: HTTPS, PHP, WordPress, correos, pantalla del móvil, título y descripción, aviso legal, señales de web envejecida.',
    loadingTitle: 'Leyendo la página de inicio…',
    loadingText:
      'Leo la página, las cabeceras del servidor y los registros DNS del dominio, y luego lanzo los comprobadores PHP, WordPress y correos. Diez a veinte segundos.',
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
    overallTitles: {
      healthy: '{host}: nada urgente',
      needsAttention: '{host}: puntos que revisar',
      atRisk: '{host}: al menos un punto crítico',
    },
    overallTexts: {
      healthy:
        'Los ocho puntos leídos desde fuera están bien o no aplican. No es una auditoría completa, pero tu web no muestra ninguna de las señales más comunes de una web abandonada.',
      needsAttention:
        'Nada pone la web en peligro hoy, pero uno o varios puntos merecen una corrección este mes. El detalle y los pasos están debajo.',
      atRisk:
        'Al menos un punto expone la web, a sus visitantes o a tu reputación. Empieza por las líneas marcadas «a corregir»; cada una dice qué hacer.',
    },
    checksTitle: 'Las ocho comprobaciones',
    checkLabels: {
      https: 'HTTPS',
      php: 'PHP',
      wordpress: 'WordPress',
      email: 'Correos del dominio',
      mobile: 'Pantalla del móvil',
      seoTags: 'Título y descripción',
      legalNotice: 'Aviso legal',
      aging: 'Señales de web envejecida',
    },
    verdictLabels: {
      ok: 'OK',
      warning: 'A vigilar',
      critical: 'A corregir',
      unknown: 'No verificable',
    },
    detailTexts: {
      httpsRedirects: 'La web se sirve en HTTPS y la dirección en http redirige a la versión segura.',
      httpsNoRedirect:
        'La web se sirve en HTTPS, pero la dirección en http todavía muestra una página sin cifrar: un visitante que escribe la dirección sin «https» no es redirigido.',
      httpsNoHttpAnswer:
        'La web se sirve en HTTPS; la dirección en http no responde, los navegadores van directamente a la versión segura.',
      httpOnly: 'La web no se sirve en HTTPS: los navegadores la muestran como «no segura» y Google la relega.',
      phpUnpatched:
        'La web anuncia PHP {phpVersion}, una versión sin el parche de los fallos del 21 de octubre de 2026 (corregido en {fixedVersion}).',
      phpEndOfLife: 'La web anuncia PHP {phpVersion}, una rama que ya no recibe ningún parche de seguridad.',
      phpPatched: 'La web anuncia una versión de PHP que recibió el parche de los fallos del 21 de octubre de 2026.',
      phpHidden:
        'La web funciona con PHP, pero el servidor no dice qué versión: imposible confirmar el parche desde fuera.',
      phpNotPhp: 'La web no funciona con PHP: los fallos de PHP no le afectan.',
      phpUnknown: 'No he podido leer lo que anuncia el servidor.',
      wordpressClean:
        'La web es un WordPress: núcleo al día por lo que se ve desde fuera, ninguna extensión vulnerable ni señal de inyección.',
      wordpressOutdatedCore:
        'La web es un WordPress en versión {coreVersion}, cuando la versión actual es {latestCoreVersion}.',
      wordpressVulnerablePlugin:
        'La web es un WordPress con una extensión conocida por un fallo sin corregir: {plugin}.',
      wordpressClosedPlugin:
        'La web es un WordPress con una extensión cerrada por WordPress.org por un problema de seguridad: {plugin}.',
      wordpressSuspicious:
        'La web es un WordPress y su página de inicio muestra señales de hackeo (enlaces ocultos, redirección, contenido inyectado).',
      wordpressNotWordPress: 'La web no es un WordPress: nada que comprobar aquí.',
      wordpressUnknown: 'La web es un WordPress, pero sus archivos públicos no se han podido leer.',
      emailAllGood:
        'El dominio {domain} tiene un SPF, una clave DKIM y una política DMARC que protege los correos enviados en su nombre.',
      emailDmarcMissing:
        'El dominio {domain} tiene un SPF y una clave DKIM, pero ninguna política DMARC: Orange, Gmail y Outlook ya la exigen.',
      emailDmarcNone: 'El dominio {domain} tiene una política DMARC en modo «none»: observa pero no protege nada.',
      emailDkimNotFound:
        'El dominio {domain} tiene un SPF, pero no se ha encontrado ninguna clave DKIM en los selectores habituales.',
      emailSpfMissing:
        'El dominio {domain} no tiene registro SPF: cualquiera puede enviar correos en su nombre, y los tuyos caen en spam.',
      emailSpfTooPermissive: 'El SPF del dominio {domain} autoriza a todo el mundo («+all»): no protege nada.',
      emailSpfTooManyLookups:
        'El SPF del dominio {domain} supera las diez consultas permitidas: los servidores de recepción lo ignoran.',
      emailMultipleSpf:
        'El dominio {domain} tiene varios registros SPF: los servidores de recepción los rechazan todos.',
      emailNoMailSetup:
        'No hay ningún servidor de recepción declarado para {domain}: este dominio no envía ni recibe correos.',
      emailUnknown: 'Los registros DNS del dominio no se han podido leer.',
      viewportPresent: 'La página declara la etiqueta viewport, la que adapta la pantalla al ancho del móvil.',
      viewportMissing:
        'La página no declara la etiqueta viewport: en el móvil se ve como una pantalla de ordenador encogida, ilegible sin hacer zoom.',
      seoTagsGood:
        'La página de inicio tiene un título de {titleLength} caracteres y una descripción de {descriptionLength} caracteres, longitudes que Google muestra enteras.',
      titleMissing: 'La página de inicio no tiene título: es la línea azul de Google, y el nombre de la pestaña.',
      titleTooShort:
        'El título de la página de inicio tiene {titleLength} caracteres: demasiado corto para decir qué haces y dónde.',
      titleTooLong: 'El título de la página de inicio tiene {titleLength} caracteres: Google lo corta hacia los 60.',
      descriptionMissing:
        'La página de inicio no tiene meta descripción: Google se inventa una a partir del texto de la página.',
      descriptionTooShort:
        'La descripción de la página de inicio tiene {descriptionLength} caracteres: demasiado corta para dar ganas de hacer clic.',
      descriptionTooLong:
        'La descripción de la página de inicio tiene {descriptionLength} caracteres: Google la corta hacia los 160.',
      legalNoticeLinkFound: 'La página de inicio tiene un enlace al aviso legal.',
      legalNoticeLinkMissing:
        'Ningún enlace a un aviso legal en la página de inicio: la ley francesa para la confianza en la economía digital lo exige a toda web profesional.',
      agingNone: 'No se ha visto en la página de inicio ninguna de las señales comunes de una web abandonada.',
      agingOldCopyright:
        'El pie de página muestra un copyright {year}: la señal más visible de una web que nadie toca.',
      agingOldJquery:
        'La página carga jQuery {jqueryVersion}: las ramas 1 y 2 tienen fallos conocidos y no se corrigen desde 2016.',
      agingFlash: 'La página todavía carga Flash: ningún navegador lo muestra desde 2021.',
      agingOldGenerator:
        'La página fue producida por «{generator}», una herramienta o una versión que ya nadie mantiene.',
    },
    adviceLabel: 'Qué hacer:',
    adviceTexts: {
      httpsNoRedirect:
        'pedir a tu hosting o a tu proveedor una redirección permanente de http a https (una línea en la configuración del servidor).',
      httpOnly:
        'activar un certificado SSL en tu hosting (gratis en la mayoría, Let’s Encrypt), y luego forzar la redirección a https.',
      phpUnpatched: 'cambiar la versión de PHP en el área de cliente del hosting, hoy, tras una copia de seguridad.',
      phpEndOfLife:
        'pasar a una rama todavía mantenida (8.2 como mínimo, 8.3 u 8.4 preferiblemente), tras una prueba en una copia de la web.',
      phpHidden: 'pedir por escrito a tu hosting la versión de PHP servida y la fecha del parche.',
      phpUnknown: 'volver a intentarlo en un momento, o comprobar la versión en el área de cliente del hosting.',
      wordpressOutdatedCore: 'actualizar WordPress desde el escritorio, tras una copia de seguridad completa.',
      wordpressVulnerablePlugin:
        'actualizar o desactivar la extensión hoy, y luego revisar las cuentas de administrador.',
      wordpressClosedPlugin: 'desactivar y eliminar la extensión, sustituirla por una extensión mantenida.',
      wordpressSuspicious:
        'restaurar una copia limpia o hacer limpiar la web, cambiar todas las contraseñas, y luego actualizar.',
      wordpressUnknown:
        'volver a lanzar la comprobación WordPress detallada, o comprobar desde el escritorio que el núcleo y las extensiones están al día.',
      emailDmarcMissing:
        'añadir un registro DMARC en tu registrador, empezando por «p=none» con una dirección de informes.',
      emailDmarcNone: 'pasar la política DMARC a «quarantine» y luego a «reject» cuando los informes estén limpios.',
      emailDkimNotFound: 'activar la firma DKIM en tu proveedor de correo y publicar su clave en el DNS.',
      emailSpfMissing: 'publicar un registro SPF que autorice a tu proveedor de correo, y solo a él.',
      emailSpfTooPermissive: 'sustituir «+all» por «~all» o «-all» al final del SPF.',
      emailSpfTooManyLookups: 'simplificar el SPF: quitar los servicios que ya no usas.',
      emailMultipleSpf: 'fusionar los registros SPF en uno solo.',
      emailNoMailSetup: 'nada, si no envías correos desde este dominio; si no, declarar tu proveedor de correo.',
      emailUnknown: 'volver a intentarlo en un momento, o lanzar el comprobador de correos detallado.',
      viewportMissing:
        'añadir la etiqueta viewport en la cabecera de cada página, o rehacer la web sobre una base adaptada al móvil.',
      titleMissing: 'escribir un título de 30 a 60 caracteres con tu oficio y tu ciudad.',
      titleTooShort: 'completar el título con tu oficio y tu ciudad, sin pasar de 60 caracteres.',
      titleTooLong: 'acortar el título a 60 caracteres, lo esencial al principio.',
      descriptionMissing: 'escribir una descripción de 120 a 160 caracteres que diga qué haces, para quién y dónde.',
      descriptionTooShort: 'alargar la descripción hasta 120 caracteres como mínimo.',
      descriptionTooLong: 'acortar la descripción a 160 caracteres.',
      legalNoticeLinkMissing:
        'publicar una página de aviso legal (identidad, dirección, número de registro, hosting) y enlazarla desde el pie de página.',
      agingOldCopyright:
        'poner el año al día, y luego comprobar que el resto de la web (textos, horarios, precios) sigue siendo cierto.',
      agingOldJquery: 'pasar la web a jQuery 3, o rehacerla sobre una base moderna.',
      agingFlash: 'quitar el contenido Flash y sustituirlo por un vídeo o una animación estándar.',
      agingOldGenerator: 'migrar la web a una herramienta mantenida, o rehacerla.',
    },
    detailedToolLabels: {
      php: 'Abrir el comprobador PHP detallado',
      wordpress: 'Abrir el comprobador WordPress detallado',
      email: 'Abrir el comprobador de correos (SPF, DKIM, DMARC)',
    },
    disclaimer:
      'Leído desde fuera, en la página de inicio y el dominio. Un punto «OK» no garantiza que no haya problemas en otra parte de la web; un punto «a corregir» merece confirmación antes de cambiar nada.',
    idleCtaIntro: '¿Prefieres que lo mire yo mismo, gratis, en 24 horas?',
    idleCtaLabel: 'Recibir mi opinión escrita',
    ctaIntro: '¿Necesitas ayuda para corregir, actualizar o rehacer la web?',
    ctaLabels: {
      healthy: 'Hablar de mi web',
      needsAttention: 'Que me corrijan estos puntos',
      atRisk: 'Que me aseguren la web',
    },
    gdprCookieCheckLinkLabel: 'Comprobar también las cookies y los rastreadores: ¿mi web cumple el RGPD?',
  },
  checks: {
    anchorId: 'comprobaciones',
    eyebrow: 'Lo que comprueba la herramienta',
    title: 'Ocho puntos, leídos como los vería un visitante',
    intro:
      'Nada se escanea: una página, algunos archivos públicos para WordPress y los registros DNS del dominio. Esto es lo que mira cada punto, y por qué importa.',
    items: [
      {
        title: '1. HTTPS',
        description:
          '¿La web se sirve en HTTPS, y la dirección en http redirige a la versión segura? Sin eso, los navegadores muestran «no segura» y Google relega la página.',
      },
      {
        title: '2. PHP',
        description:
          '¿La versión de PHP anunciada por el servidor recibió el parche de los fallos del 21 de octubre de 2026? Mismo veredicto que el comprobador PHP, con el enlace a él.',
      },
      {
        title: '3. WordPress',
        description:
          'Si la web es un WordPress: núcleo al día, extensiones cerradas o vulnerables, señales de inyección. Si no, el punto no aplica.',
      },
      {
        title: '4. Correos del dominio',
        description:
          'SPF, clave DKIM y política DMARC del dominio, leídos en el DNS. Sin los tres, los correos enviados en tu nombre caen en spam en Orange, Gmail y Outlook.',
      },
      {
        title: '5. Pantalla del móvil',
        description:
          '¿Está declarada la etiqueta viewport? Sin ella, el móvil muestra la página como una pantalla de ordenador encogida.',
      },
      {
        title: '6. Título y descripción',
        description:
          '¿La página de inicio tiene un título y una descripción, de longitud razonable? Son las dos líneas de tu resultado en Google.',
      },
      {
        title: '7. Aviso legal',
        description:
          '¿Hay un enlace a una página de aviso legal? La ley francesa para la confianza en la economía digital lo exige a toda web profesional.',
      },
      {
        title: '8. Señales de web envejecida',
        description:
          'Año de copyright anterior a 2024, jQuery 1 o 2, Flash, generador abandonado: las señales que un visitante y Google leen como «ya nadie se ocupa de esto».',
      },
    ],
  },
  priceTeaser: {
    emphasizedIntro: '¿Tu web ha envejecido y te preguntas cuánto cuesta una nueva?',
    text: 'El barómetro recoge los precios publicados por veinte freelances, agencias, creadores de webs y guías de precios franceses, recogidos el mismo día, con las medianas por tamaño de web.',
    linkLabel: 'Ver los precios de una página web en 2026',
  },
  method: {
    eyebrow: 'Método',
    title: 'Cómo está hecho el test',
    intro:
      'El mismo gesto que un visitante, más tres comprobadores que ya había escrito para los fallos de PHP, las webs WordPress hackeadas y los correos en spam.',
    steps: [
      {
        label: 'Lectura',
        title: 'Una página, como un navegador',
        description:
          'El servidor lee la página de inicio en HTTPS y luego en http, sigue las redirecciones hacia direcciones públicas y se detiene en los primeros 400 KB. Las direcciones internas y privadas se rechazan.',
      },
      {
        label: 'Etiquetas',
        title: 'Lo que la página dice de sí misma',
        description:
          'Viewport, título, descripción, enlaces del pie de página, año de copyright, librerías cargadas, etiqueta generator: todo sale del código de la página, nada se adivina.',
      },
      {
        label: 'Comprobadores',
        title: 'PHP, WordPress y correos en paralelo',
        description:
          'Los tres comprobadores existentes funcionan con sus propias reglas; su veredicto se reduce a cuatro niveles. El punto WordPress solo se ejecuta si la página muestra marcadores de WordPress.',
      },
      {
        label: 'Veredicto',
        title: 'Tres niveles, y luego qué hacer',
        description:
          'Un punto crítico pone la web «en riesgo», un punto a vigilar la pone «a revisar», si no «nada urgente». Cada línea dice lo que significa y qué hacer. El resultado se guarda diez minutos en caché, nada más se almacena.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Probar tu web: tus preguntas',
    questions: [
      {
        question: '¿Cómo saber si mi web está al día?',
        answer:
          'Tres señales se leen desde fuera: la versión de PHP anunciada por el servidor, la versión de WordPress y de sus extensiones, y las librerías que carga la página (jQuery, por ejemplo). La herramienta las lee en diez segundos. Para el resto (tema, extensiones no visibles), entra en el escritorio de tu web: las actualizaciones pendientes aparecen ahí.',
      },
      {
        question: '¿Mi web es segura?',
        answer:
          'Desde fuera se puede comprobar el HTTPS, el parche de PHP, las extensiones de WordPress conocidas por un fallo y las señales de hackeo en la página de inicio. Es lo que hace la herramienta. No sustituye a una auditoría: dice si tu web muestra los fallos más explotados en 2026, los que dejaron fuera de línea webs del Estado francés en octubre.',
      },
      {
        question: '¿Por qué mi web no aparece en Google?',
        answer:
          'Las causas más frecuentes están en el test: sin HTTPS, sin título o con un título que no dice ni el oficio ni la ciudad, sin descripción, una página ilegible en el móvil, una web que Google lee como abandonada. Si todo está en verde, la causa está en otra parte: muy pocas páginas, ninguna ficha de Google Business, o una web demasiado reciente.',
      },
      {
        question: '¿Qué comprueba exactamente la herramienta?',
        answer:
          'Ocho puntos: HTTPS y redirección, versión de PHP y parche de octubre de 2026, WordPress al día y extensiones cerradas, SPF, DKIM y DMARC del dominio, etiqueta viewport, título y descripción de la página de inicio, enlace al aviso legal, y señales de web envejecida (copyright anterior a 2024, jQuery 1 o 2, Flash, generador abandonado).',
      },
      {
        question: 'Mi web no tiene HTTPS, ¿es grave?',
        answer:
          'Sí, y es el punto más fácil de corregir. Sin HTTPS, Chrome y Safari muestran «no segura» junto a tu dirección, lo que tus visitantes leen como «web dudosa», y Google favorece las webs seguras desde 2014. El certificado es gratis en casi todos los hostings (Let’s Encrypt) y se activa en unos clics.',
      },
      {
        question: '¿El aviso legal es obligatorio en una web pequeña en Francia?',
        answer:
          'Sí. La ley francesa para la confianza en la economía digital (2004) exige a toda web profesional mostrar la identidad del editor, su dirección, su número de registro y el nombre del hosting. La multa puede llegar a 75 000 € para una persona física. Una página y un enlace en el pie de página bastan.',
      },
      {
        question: '¿La herramienta guarda mi web o mis datos?',
        answer:
          'No. La dirección no se guarda ni se envía a PostHog, la herramienta de medición de la web: solo los veredictos, para saber qué puntos se repiten más. El resultado queda diez minutos en la memoria del servidor para no leer dos veces la misma web, y luego desaparece.',
      },
      {
        question: 'Mi web ha envejecido: ¿corregirla o rehacerla?',
        answer:
          'Uno o dos puntos rojos se corrigen en una hora en el hosting. Cuando la web acumula varias señales de edad (sin viewport, jQuery 1, copyright 2018, PHP sin parche), rehacerla suele costar menos que remendarla: una web corporativa a medida empieza en 1500 € conmigo, y el barómetro de esta página da los precios del mercado francés.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro:
      'Las guías que detallan la actualización de PHP, las comprobaciones de una web WordPress y lo que una web debe hacer por un artesano.',
  },
  contactCta: {
    title: '¿Prefieres que mire tu web yo mismo?',
    description:
      'Envíame la dirección. Te respondo en 24 horas con una opinión escrita, gratis: lo que urge, lo que puede esperar, y un precio firme si quieres que me ocupe yo.',
    button: 'Enviar mi web',
  },
}
