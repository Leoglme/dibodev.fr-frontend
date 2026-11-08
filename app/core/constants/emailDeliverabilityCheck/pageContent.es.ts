import type { DibodevEmailDeliverabilityCheckPageContent } from '~/core/types/DibodevEmailDeliverabilityCheckPage'
import {
  EMAIL_DELIVERABILITY_SOURCES,
  EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS,
} from '~/core/constants/emailDeliverabilityCheck/pageShared'

export const EMAIL_DELIVERABILITY_CHECK_PAGE_ES: DibodevEmailDeliverabilityCheckPageContent = {
  meta: {
    title: '¿Mis correos llegan a spam? Comprobar SPF, DKIM y DMARC',
    description:
      'Escribe tu dominio: la herramienta lee SPF, DKIM y DMARC, reconoce tu proveedor de correo y dice qué corregir para llegar a Gmail, Orange y laposte.net.',
    inLanguage: 'es',
    schemaAbout: 'Autenticación del correo (SPF, DKIM, DMARC) y exigencias de los proveedores de correo en 2026',
  },
  breadcrumbLabel: 'Correos en spam: comprobar SPF, DKIM, DMARC',
  shareImage: {
    titleLines: ['¿Mis correos llegan', 'a spam?'],
    highlight: 'spam',
    subtitle: 'SPF, DKIM y DMARC leídos en el DNS de tu dominio, veredicto y correcciones',
    badge: 'Comprobación gratuita',
    alt: '¿Mis correos llegan a spam? Comprobación SPF, DKIM y DMARC gratuita de Dibodev',
  },
  hero: {
    titleBefore: '¿Mis correos llegan a ',
    titleHighlight: 'spam',
    titleAfter: '?',
    reassurances: ['Gratis, sin registro', 'Resultado en segundos', 'Fuentes revisadas el 27 de octubre de 2026'],
    description:
      'Orange, el mayor proveedor de correo particular de Francia, exige ahora SPF, DKIM y DMARC a todos los remitentes, sea cual sea el volumen (reglas actualizadas el 1 de septiembre de 2026). laposte.net pide los tres desde septiembre de 2025, iCloud también, y Gmail rechaza cada vez más mensajes sin autenticar desde noviembre de 2025. Una pequeña empresa que envía sus presupuestos y facturas desde su propio dominio está afectada desde el primer correo. Esta herramienta lee los registros DNS públicos de tu dominio, reconoce tu proveedor de buzón y tus servicios de envío, busca la clave DKIM bajo sus selectores, y te dice qué falta y en qué orden corregirlo.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes, Francia. Configuro el envío de correo de las webs, tiendas y software de gestión que entrego a pequeñas empresas, a distancia, y respondo en 24 horas.',
  },
  checker: {
    domainLabel: 'Tu nombre de dominio',
    domainPlaceholder: 'miempresa.es',
    domainHint:
      'Un dominio o una dirección de correo (solo se conserva el dominio después de la @). La herramienta lee los registros DNS públicos, como lo haría un destinatario: no se envía ningún correo. Solo se guardan el dominio y su resultado, para estadísticas.',
    submit: 'Comprobar',
    checking: 'Leyendo el DNS…',
    resultLabel: 'Tu resultado',
    idleTitle: 'Escribe tu dominio para empezar',
    idleText:
      'El resultado dice si tu dominio publica un SPF válido, una clave DKIM bajo los selectores de tu proveedor y una política DMARC, y luego lista las correcciones en orden y las guías de tu proveedor.',
    loadingTitle: 'Leyendo los registros…',
    loadingText:
      'Leo el SPF y sus inclusiones, los MX, la política DMARC, y luego sondeo una veintena de selectores DKIM a la vez. Unos segundos.',
    errorTitles: {
      invalid: 'Dominio a corregir',
      unreachable: 'DNS inaccesible',
      rateLimited: 'Demasiadas comprobaciones',
      failed: 'Comprobación imposible',
    },
    errorTexts: {
      invalid:
        'Escribe un nombre de dominio, como miempresa.es, o una dirección de correo: solo se usa el dominio después de la @.',
      unreachable: 'Los servidores DNS de {domain} no respondieron: inténtalo de nuevo en un momento.',
      rateLimited: 'Has lanzado muchas comprobaciones en poco tiempo. Inténtalo de nuevo en unos minutos.',
      failed: 'Algo ha fallado de mi lado. Inténtalo de nuevo en un momento, o escríbeme tu nombre de dominio.',
    },
    verdictTitles: {
      consumerMailbox: 'Correo gratuito: nada que configurar por tu parte',
      allGood: 'SPF, DKIM y DMARC en su sitio',
      dmarcMissing: 'DMARC ausente: por publicar',
      dmarcNone: 'DMARC en p=none: solo observas',
      dkimNotFound: 'DKIM: ninguna clave utilizable encontrada',
      spfMissing: 'Sin SPF válido',
      spfTooPermissive: 'SPF demasiado permisivo ({spfAll})',
      spfTooManyLookups: 'SPF: {spfLookups} consultas DNS, el límite es 10',
      multipleSpf: 'Varios registros SPF',
      noMailSetup: 'Ninguna configuración de correo en este dominio',
      invalidDomain: 'Dominio no encontrado',
    },
    verdictTexts: {
      consumerMailbox:
        '{domain} es un servicio de correo para particulares: es él quien publica y gestiona SPF, DKIM y DMARC, y no tienes acceso a ninguno de estos ajustes. Si tus presupuestos llegan a spam desde esta dirección, la causa está en otra parte (contenido, enlaces, adjuntos, volumen). Para una empresa, una dirección con tu propio dominio (contacto@tu-empresa.es) inspira más confianza y se configura por completo: prueba ese dominio.',
      allGood:
        '{domain} publica un SPF que termina en {spfAll}, una clave DKIM bajo el selector {dkimSelector} y una política DMARC {dmarcPolicy}. Tus correos tienen lo que piden Orange, laposte.net, Gmail, Outlook.com e iCloud. Los puntos de abajo, si los hay, son mejoras, no urgencias.',
      dmarcMissing:
        '{domain} no tiene ningún registro DMARC. Orange exige ahora SPF, DKIM y DMARC; laposte.net e iCloud también. Un p=none con una dirección de informes basta para empezar, y no bloquea nada. El detalle de abajo dice cómo están el SPF y la clave DKIM.',
      dmarcNone:
        '{domain} tiene lo necesario para empezar: un SPF, una clave DKIM y un DMARC en observación. Tus correos pasan. Queda leer los informes, y luego pasar a quarantine y a reject para que nadie más pueda enviar en tu nombre.',
      dkimNotFound:
        '{domain} tiene un SPF, pero ninguna clave DKIM utilizable bajo los {selectorsProbed} selectores sondeados. Sin firma DKIM, Orange puede rechazar el correo, y Gmail y Outlook.com lo clasifican como spam con más facilidad. Si tu proveedor activó DKIM bajo otro selector, la clave quizá exista igualmente: el detalle de abajo dice cómo comprobarlo.',
      spfMissing:
        '{domain} no publica ningún registro SPF utilizable. Es el primero de los tres que hay que poner: una línea TXT que lista los servidores autorizados a enviar en tu nombre. Sin él, Gmail puede rechazar el correo (error 5.7.26) y Orange devuelve el error 519.',
      spfTooPermissive:
        'El SPF de {domain} existe, pero su final ({spfAll}) no prohíbe nada: cualquier servidor puede enviar en tu nombre sin ser rechazado. Una palabra que cambiar, y se vuelve útil.',
      spfTooManyLookups:
        'El SPF de {domain} necesita {spfLookups} consultas DNS para evaluarse. Por encima de 10, los destinatarios devuelven un error permanente (RFC 7208) y el SPF deja de contar. Hay que aligerarlo.',
      multipleSpf:
        '{domain} publica {spfCount} registros que empiezan por v=spf1. La RFC 7208 solo admite uno: con varios, los destinatarios devuelven un error permanente, como si no hubiera ninguno. Hay que fusionarlos.',
      noMailSetup:
        '{domain} no tiene ni servidor de recepción (MX) ni SPF. O este dominio no envía correo, y no hay nada que hacer, o tus correos salen de otro dominio: comprueba el que sigue a la @ en tu dirección de envío.',
      invalidDomain:
        'Ningún DNS responde para {domain}: el nombre está mal escrito, caducado o aún sin registrar. Comprueba la ortografía, o prueba con el dominio que sigue a la @ en tu dirección.',
    },
    spfNoAllLabel: 'sin all',
    recordsTitle: 'Los tres registros leídos',
    recordLabels: {
      spf: 'SPF',
      dkim: 'DKIM',
      dmarc: 'DMARC',
    },
    recordStatusTexts: {
      spfFound: '{spfRecord}',
      spfMissing: 'Ningún registro v=spf1',
      spfMultiple: '{spfCount} registros v=spf1 en el mismo dominio',
      dkimFound: 'Selector {dkimSelector}, clave {dkimKeyType} de {dkimBits} bits',
      dkimFoundSizeUnknown: 'Selector {dkimSelector}, clave no descodificable',
      dkimMissing: 'Ninguna clave bajo los {selectorsProbed} selectores sondeados',
      dmarcFound: '{dmarcRecord}',
      dmarcMissing: 'Ningún registro v=DMARC1 bajo _dmarc',
      dmarcMultiple: '{dmarcCount} registros v=DMARC1 bajo _dmarc',
      dmarcMalformed: '{dmarcRecord}',
    },
    providerLine: 'Buzón: {provider}.',
    providerUnknownLine: 'Proveedor de buzón no reconocido (MX {mxHost}).',
    providerNoMxLine: 'Ningún servidor de recepción (MX).',
    sendingServicesLine: 'Envíos autorizados por el SPF: {services}.',
    findingsTitle: 'Lo que he leído',
    severityLabels: {
      blocking: 'Bloqueante',
      warning: 'A vigilar',
      info: 'Información',
    },
    findingTexts: {
      mxMissing:
        'Ningún registro MX: {domain} no recibe correo. Si aun así envías desde este dominio, tus destinatarios no pueden responderte, y varios filtros desconfían.',
      spfMissing:
        'Ningún registro TXT que empiece por v=spf1 en {domain}: los destinatarios no tienen forma de saber quién tiene derecho a enviar en tu nombre.',
      spfMultiple:
        '{value} registros SPF en el mismo dominio: la RFC 7208 solo admite uno, los destinatarios devuelven un error permanente, como si no hubiera ninguno.',
      spfIncludeUnresolved:
        'La inclusión {value} no publica ningún SPF: para los destinatarios, todo el registro está en error permanente.',
      spfTooManyLookups:
        '{value} consultas DNS para evaluar el SPF, cuando el límite es 10 (RFC 7208): por encima, los destinatarios lo ignoran.',
      spfPlusAll:
        'El registro termina en +all: cualquier servidor del mundo está autorizado a enviar en tu nombre, mejor no publicar nada.',
      spfNeutralAll:
        'El registro termina en ?all (neutro): el SPF no dice nada de los servidores que no lista. Gandi y Microsoft desaconsejan este valor en producción.',
      spfNoAll:
        'El registro no tiene ni all ni redirect: los servidores no listados obtienen un resultado neutro, lo que equivale a ?all.',
      spfSoftFail:
        'El registro termina en ~all (fallo suave), lo que recomienda Google. Una vez DKIM y DMARC en su sitio, -all es más estricto.',
      spfHardFail:
        'El registro termina en -all (fallo estricto): todo servidor no listado es rechazado. Comprueba que cada servicio que envía en tu nombre figure en él.',
      spfProviderMissing:
        'Tus MX están en {value}, pero el SPF no contiene su include. Si envías desde este buzón, esos envíos fallan el SPF.',
      spfPtrMechanism:
        'El SPF usa un mecanismo ptr, directamente o a través de una inclusión: la RFC 7208 pide no publicarlo más, porque es lento y poco fiable. Los clientes de OVH lo heredan de include:mx.ovh.com.',
      spfSendingServices:
        'Servicios de envío autorizados por el SPF: {value}. Cada uno debe firmar también tus correos con DKIM.',
      dkimNotFound:
        'Ninguna clave DKIM bajo los {value} selectores sondeados. Puede existir con otro nombre (OVH, Amazon SES y Zoho generan el selector o te dejan elegirlo): abre la cabecera completa de un correo que hayas enviado, el valor s= de la línea DKIM-Signature es el selector.',
      dkimKeyRevoked:
        'La clave publicada bajo el selector {value} tiene un valor p= vacío: está revocada (RFC 6376), las firmas que la usan son inválidas.',
      dkimKeyTooShort:
        'Clave DKIM de {value} bits: Gmail exige 1.024 bits como mínimo y la RFC 8301 prohíbe validar por debajo.',
      dkimKeyUnreadable:
        'La clave bajo el selector {value} no se ha podido descodificar: a menudo un registro de más de 255 caracteres mal dividido, o truncado, por el editor de zona DNS.',
      dkimTestMode:
        'La clave del selector {value} lleva t=y (modo de prueba): los destinatarios tratan tus correos como si no estuvieran firmados.',
      dmarcMissing:
        'Ningún registro v=DMARC1 bajo _dmarc.{domain}: Orange, laposte.net e iCloud lo exigen, y sin él nadie te avisa cuando alguien suplanta tu dominio.',
      dmarcMultiple:
        '{value} registros DMARC bajo _dmarc.{domain}: la RFC 7489 pide a los destinatarios no aplicar ninguno en ese caso.',
      dmarcMalformed:
        'El registro DMARC está mal formado: v=DMARC1 debe ir primero, seguido de una política p=none, p=quarantine o p=reject, en inglés. Los valores traducidos no se reconocen.',
      dmarcPolicyNone:
        'Política p=none: observas, pero nada detiene un correo suplantado. Aceptada por Gmail y Outlook.com, es el punto de partida, no la llegada.',
      dmarcPolicyQuarantine: 'Política p=quarantine: un correo que falla la alineación va a spam en el destinatario.',
      dmarcPolicyReject:
        'Política p=reject: un correo que falla la alineación es rechazado. Es el objetivo, siempre que todos tus envíos pasen SPF o DKIM.',
      dmarcNoReporting:
        'Ninguna dirección rua=: no recibes ningún informe, así que no sabrás ni quién envía en tu nombre, ni si tus propios envíos fallan.',
      dmarcExternalReportingUnauthorized:
        'Los informes se piden hacia {value}, que no publica la autorización {domain}._report._dmarc: los destinatarios no enviarán nada (RFC 7489).',
      dmarcPartialPercentage:
        '{value}: la política solo se aplica a una parte de los correos, el resto se trata como p=none.',
      dmarcStrictWithoutAuthentication:
        'Política {value} cuando DKIM no se encuentra y el SPF no cubre tu buzón: tus propios correos corren el riesgo de acabar en spam o ser rechazados.',
    },
    fixesTitle: 'Por corregir, en orden',
    nextStepsTitle: 'Y ahora',
    fixTexts: {
      mxMissing: 'Si este dominio debe recibir correo, añade los registros MX de tu proveedor de buzón.',
      spfMissing:
        'Publica un TXT en la raíz de {domain}: v=spf1, el include de tu proveedor de buzón, un include por servicio de envío, y luego ~all.',
      spfMultiple: 'Fusiona tus registros SPF en uno solo: un v=spf1, todos los includes seguidos, un solo all.',
      spfIncludeUnresolved:
        'Quita o corrige la inclusión {value} en tu SPF: comprueba el nombre exacto en la documentación del servicio.',
      spfTooManyLookups:
        'Deja el SPF por debajo de 10 consultas: quita los servicios que ya no usas, sustituye a y mx por ip4, o envía desde un subdominio dedicado para un software.',
      spfPlusAll: 'Sustituye +all por ~all (o -all una vez DKIM y DMARC en su sitio).',
      spfNeutralAll: 'Sustituye ?all por ~all.',
      spfNoAll: 'Añade ~all al final del registro.',
      spfProviderMissing: 'Añade el include de {value} a tu SPF si envías desde este buzón (ver su guía abajo).',
      dkimNotFound:
        'Activa DKIM en tu proveedor y publica la clave que te da bajo <selector>._domainkey.{domain}. Si ya existe bajo otro selector, nada que hacer.',
      dkimKeyRevoked:
        'Genera una nueva clave DKIM en tu proveedor y publícala bajo el selector {value}, o elimina este selector si ya no sirve.',
      dkimKeyTooShort: 'Genera una clave DKIM de 2.048 bits en tu proveedor y sustituye el registro.',
      dkimKeyUnreadable:
        'Vuelve a publicar la clave del selector {value} dividida en cadenas de 255 caracteres, sin espacios añadidos.',
      dkimTestMode: 'Quita t=y del registro del selector {value} cuando terminen tus pruebas.',
      dmarcMissing:
        'Publica un TXT bajo _dmarc.{domain}: v=DMARC1; p=none; rua=mailto:dmarc@{domain}, 48 horas después de SPF y DKIM.',
      dmarcMultiple: 'Conserva un solo registro bajo _dmarc.{domain} y elimina los demás.',
      dmarcMalformed:
        'Reescribe el registro: v=DMARC1; p=none; rua=mailto:dmarc@{domain}, y sube la política más adelante.',
      dmarcPolicyNone:
        'Tras unas semanas de informes sin fallos en tus envíos legítimos, pasa a p=quarantine (primero con pct=10), y luego a p=reject.',
      dmarcNoReporting: 'Añade rua=mailto:dmarc@{domain} (un buzón dedicado, no el tuyo) para recibir los informes.',
      dmarcExternalReportingUnauthorized:
        'Pide al servicio que recibe tus informes que publique {domain}._report._dmarc.{value} (TXT v=DMARC1), o usa una dirección de tu propio dominio.',
      dmarcStrictWithoutAuthentication:
        'Vuelve a p=none mientras corriges SPF y DKIM, y sube la política cuando los informes estén limpios.',
    },
    verdictSteps: {
      consumerMailbox: [
        'Si tienes un nombre de dominio, pruébalo aquí: es el que cuenta para tus presupuestos y facturas.',
        '¿Todavía no tienes dominio? Una dirección con tu nombre cuesta unos pocos euros al mes en la mayoría de hostings, con SPF, DKIM y DMARC incluidos.',
      ],
      allGood: [
        'Envía un correo a un buzón de Gmail y abre «Mostrar original»: SPF, DKIM y DMARC deben mostrar PASS.',
        'Si la política sigue en quarantine, pasa a reject tras unas semanas de informes limpios.',
        'Cada nuevo software que envíe en tu nombre (presupuestos, CRM, newsletter) se añade al SPF y firma con DKIM: repite esta comprobación tras cada alta.',
      ],
      noMailSetup: [
        'Si realmente envías desde este dominio, añade los MX y el SPF de tu proveedor de buzón, y repite la comprobación.',
        'Si tus correos salen de otro dominio, comprueba ese.',
      ],
      invalidDomain: [
        'Comprueba la ortografía del dominio, sin espacios ni acentos.',
        'Si el dominio se acaba de comprar, su DNS puede tardar unas horas en responder.',
      ],
    },
    guidesTitle: 'Guías oficiales de tus proveedores',
    guideLabels: {
      spf: 'Configurar SPF en {provider}',
      dkim: 'Configurar DKIM en {provider}',
      dmarc: 'Configurar DMARC en {provider}',
      general: 'Documentación de {provider}',
    },
    disclaimer:
      'Lectura indicativa del DNS público, sin enviar ningún correo. La clave DKIM solo se busca bajo los selectores conocidos: una clave publicada con otro nombre no aparece aquí. La alineación, la reputación de la IP, el registro PTR y el contenido de los mensajes no se prueban: un correo aún puede acabar en spam por otras razones.',
    idleCtaIntro:
      '¿Dudas? Envíame tu nombre de dominio y tu proveedor, y te digo en 24 h qué falta y qué hacer. Gratis, sin compromiso.',
    idleCtaLabel: 'Enviar mi nombre de dominio',
    ctaIntro:
      '¿Prefieres delegar? Pongo SPF, DKIM y DMARC en tu zona DNS, lo compruebo enviando correos de prueba y te escribo lo que se ha hecho. Diagnóstico gratuito, presupuesto antes de cualquier intervención.',
    ctaLabels: {
      consumerMailbox: 'Pasar a una dirección con mi dominio',
      allGood: 'Que revisen mis envíos',
      dmarcMissing: 'Que configuren DMARC',
      dmarcNone: 'Que endurezcan mi política DMARC',
      dkimNotFound: 'Que activen DKIM',
      spfMissing: 'Que configuren mi SPF',
      spfTooPermissive: 'Que corrijan mi SPF',
      spfTooManyLookups: 'Que aligeren mi SPF',
      multipleSpf: 'Que fusionen mis SPF',
      noMailSetup: 'Hacer la pregunta',
      invalidDomain: 'Hacer la pregunta',
    },
  },
  offer: {
    emphasizedIntro: '¿Prefieres que me ocupe yo?',
    text: 'Configuración de SPF, DKIM y DMARC en tu zona DNS (OVH, o2switch, IONOS, Gandi, Infomaniak…), fusión de un SPF existente, activación de DKIM en cada servicio de envío, correos de prueba e informe por escrito. Diagnóstico gratuito, configuración con presupuesto, respuesta en 24 h.',
    linkLabel: 'Pedir un presupuesto',
  },
  mobileContactBar: {
    text: '¿Tus correos acaban en spam?',
    buttonLabel: 'Enviar mi dominio',
  },
  facts: {
    anchorId: 'hechos',
    eyebrow: 'Lo que exigen los proveedores de correo',
    title: 'Orange, laposte.net, Gmail, Outlook.com, iCloud: las exigencias, con fecha',
    intro:
      'Cada gran proveedor de correo ha publicado sus reglas. Aquí están tal como se escribieron, con la fecha y la página oficial, sin dramatizar. Para una pequeña empresa en Francia, las dos primeras líneas cuentan más que las siguientes.',
    facts: [
      {
        contextLabel: '1 de septiembre de 2026',
        title: 'Orange exige SPF, DKIM y DMARC a todos los remitentes',
        text: 'La página postmaster de Orange, actualizada el 1 de septiembre de 2026, pide que los tres mecanismos pasen: SPF requerido, DKIM requerido (un mensaje sin firmar puede ser rechazado), DMARC requerido. Ningún umbral de volumen: las reglas se aplican a todo el mundo. Los códigos de error 515 (DMARC), 519 (SPF) y 535 (DKIM) remiten a estos ajustes.',
        sourceName: 'postmaster.orange.fr, actualización del 1 de septiembre de 2026',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.orangePostmaster,
      },
      {
        contextLabel: '9 de septiembre de 2025',
        title: 'laposte.net pide los tres, particulares incluidos',
        text: 'El postmaster de laposte.net anunció el 22 de agosto de 2025 que todo remitente hacia laposte.net, «particulares, empresas o remitentes de mensajes transaccionales o de marketing», debe implementar SPF, DKIM y DMARC, sin umbral de volumen. Los correos que fallen «serán considerados spam». No existe página oficial: la fuente es el anuncio recogido por dmarcian.',
        sourceName: 'dmarcian (FR), 3 de septiembre de 2025, actualizado el 11 de noviembre de 2025',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.laposteDmarcian,
      },
      {
        contextLabel: '1 de febrero de 2024',
        title: 'Gmail: SPF o DKIM para todos, los tres por encima de 5.000 correos al día',
        text: 'Desde el 1 de febrero de 2024, todo remitente hacia Gmail debe configurar SPF o DKIM, publicar un PTR válido, cifrar con TLS, mantenerse por debajo del 0,3 % de quejas y firmar con una clave DKIM de al menos 1.024 bits. A partir de 5.000 mensajes al día hacia cuentas Gmail personales: SPF y DKIM, DMARC (p=none aceptado), alineación y baja en un clic. Desde noviembre de 2025, los mensajes no conformes se rechazan de forma progresiva.',
        sourceName: 'Google, directrices para remitentes y FAQ sobre las exigencias',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.googleSenderGuidelines,
      },
      {
        contextLabel: '5 de mayo de 2025',
        title: 'Outlook.com: los tres obligatorios por encima de 5.000 correos al día',
        text: '«Effective May 5th, 2025», los dominios que envían más de 5.000 mensajes al día hacia Outlook.com, Hotmail y Live deben pasar SPF, DKIM y DMARC (al menos p=none, reject recomendado), alineados. Los mensajes no conformes van primero a correo no deseado, y luego se rechazan con el error 550 5.7.515. Por debajo del umbral, Microsoft «recomienda encarecidamente» los tres a todos los remitentes.',
        sourceName: 'Outlook.com Postmaster, Policies, Practices and Guidelines',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.microsoftPostmasterPolicies,
      },
      {
        contextLabel: '25 de febrero de 2025',
        title: 'iCloud Mail: SPF, DKIM y DMARC publicado, sin umbral',
        text: 'La página de Apple para remitentes pide SPF, DKIM, una política DMARC publicada por el dominio emisor, DNS inverso y un enlace de baja, sin umbral de volumen ni tasa de quejas cifrada. Frase clave: «All requirements must be met in order to send a bulk email. If not, the email will be rejected.»',
        sourceName: 'Apple, iCloud Mail – Best practices for senders',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.appleIcloudSenders,
      },
      {
        contextLabel: '7,8 %',
        title: 'Menos de un dominio .fr de cada diez publica un DMARC',
        text: 'Entre los dominios .fr con servidor de recepción, el 57,8 % publica un SPF, el 23,1 % al menos una clave DKIM y el 7,8 % un DMARC. De esos DMARC, el 73,6 % está en p=none: solo el 1,3 % de la zona .fr está en p=reject. Los errores técnicos de SPF son raros: menos del 2,3 % de políticas demasiado permisivas, el 0,005 % por encima de 10 consultas.',
        sourceName: 'AFNIC, estudio del 21 de marzo de 2023',
        sourceUrl: EMAIL_DELIVERABILITY_SOURCES.afnicStudy,
      },
    ],
    calloutEmphasizedIntro: 'Para una pequeña empresa que envía 50 correos al día:',
    calloutText:
      'en Francia, tus clientes tienen direcciones @orange.fr, @wanadoo.fr, @laposte.net o @icloud.com. Para ellos, «SPF o DKIM» no basta, hacen falta los tres, desde el primer correo. El umbral de 5.000 mensajes al día de Google y Microsoft solo afecta a sus propios buzones: no te protege. Por eso el veredicto de la herramienta apunta a SPF, DKIM y DMARC, con al menos p=none y una dirección de informes.',
  },
  checks: {
    anchorId: 'que-comprueba-la-herramienta',
    eyebrow: 'Qué comprueba la herramienta',
    title: 'Tres registros DNS, leídos como los lee un destinatario',
    intro:
      'No se envía nada: la herramienta consulta los servidores DNS públicos de tu dominio, sigue las inclusiones del SPF, sondea los selectores DKIM conocidos y descodifica la clave encontrada. También reconoce tu proveedor de buzón por los MX y tus servicios de envío por el SPF, para darte las guías correctas.',
    items: [
      {
        title: 'SPF (RFC 7208)',
        description:
          'Un solo TXT que empieza por v=spf1, los servidores autorizados a enviar en tu nombre, como máximo 10 consultas DNS contando las inclusiones, un final en ~all o -all, ninguna inclusión que no resuelva, y el include de tu proveedor de buzón.',
      },
      {
        title: 'DKIM (RFC 6376 y 8301)',
        description:
          'La clave pública bajo <selector>._domainkey, buscada bajo los selectores documentados por tu proveedor (google, selector1, default, gm1, s1-ionos, protonmail…) y los más habituales, y luego descodificada: 1.024 bits como mínimo, sin clave revocada (p= vacío), sin modo de prueba (t=y).',
      },
      {
        title: 'DMARC (RFC 7489)',
        description:
          'El TXT bajo _dmarc: un solo registro, v=DMARC1 primero, una política p=none, quarantine o reject, el porcentaje pct, la dirección de informes rua y, cuando está en otro dominio, la autorización _report._dmarc que permite a los destinatarios enviar los informes.',
      },
    ],
  },
  providers: {
    anchorId: 'proveedores',
    eyebrow: 'Por proveedor',
    title: 'Los proveedores reconocidos, sus selectores DKIM y su guía oficial',
    intro:
      'La herramienta reconoce tu proveedor de buzón por los MX de tu dominio y tus servicios de envío por las inclusiones de tu SPF, y luego sondea los selectores que cada uno documenta. Cuando el selector se genera por cuenta (OVH, Amazon SES) o lo eliges tú (Zoho), no se puede adivinar: léelo en la cabecera DKIM-Signature de un correo enviado.',
    providerColumnLabel: 'Proveedor',
    detailColumnLabel: 'Cómo se reconoce, selectores DKIM',
    guideColumnLabel: 'Guía oficial',
    rows: [
      {
        name: 'Google Workspace',
        detail:
          'MX smtp.google.com o aspmx.l.google.com, include:_spf.google.com. Selector google (clave de 2.048 bits recomendada).',
        linkLabel: 'Configurar DKIM en Google',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.google,
      },
      {
        name: 'Microsoft 365',
        detail:
          'MX en .mail.protection.outlook.com, include:spf.protection.outlook.com. Selectores selector1 y selector2, en CNAME.',
        linkLabel: 'Configurar DKIM en Microsoft',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.microsoft,
      },
      {
        name: 'OVHcloud',
        detail:
          'MX mx0 a mx4.mail.ovh.net, include:mx.ovh.com. Selectores ovhmo<id>-selector1 y 2, propios de la cuenta: no adivinables, activados automáticamente.',
        linkLabel: 'Configurar DKIM en OVHcloud',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.ovh,
      },
      {
        name: 'o2switch',
        detail:
          'MX en tu propio dominio, reconocido por include:spf.jabatus.fr. Selector default, clave de 2.048 bits generada por cPanel.',
        linkLabel: 'SPF, DKIM y DMARC en o2switch',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.o2switch,
      },
      {
        name: 'IONOS',
        detail:
          'MX mx00 y mx01.ionos.com o .ionos.fr, include:_spf-eu.ionos.com. Selectores s1-ionos, s2-ionos, s42582890, automáticos con los servidores de nombres de IONOS.',
        linkLabel: 'Configurar DKIM en IONOS',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.ionos,
      },
      {
        name: 'Gandi',
        detail: 'MX spool y fb.mail.gandi.net, include:_mailcust.gandi.net. Selectores gm1, gm2 y gm3, en CNAME.',
        linkLabel: 'Antisuplantación en Gandi',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.gandi,
      },
      {
        name: 'Infomaniak',
        detail:
          'MX mta-gw.infomaniak.ch, include:spf.infomaniak.ch. Selector no documentado, generado en el Manager (Seguridad global, DKIM).',
        linkLabel: 'Registros DKIM en Infomaniak',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.infomaniak,
      },
      {
        name: 'Proton Mail',
        detail:
          'MX mail y mailsec.protonmail.ch, include:_spf.protonmail.ch. Selectores protonmail, protonmail2 y protonmail3, en CNAME.',
        linkLabel: 'Antisuplantación en Proton',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.proton,
      },
      {
        name: 'Zoho Mail',
        detail:
          'MX mx, mx2 y mx3.zoho.eu o .zoho.com, include:zoho.com o one.zoho.eu. Selector elegido por el administrador (zoho, zmail…).',
        linkLabel: 'Configurar DKIM en Zoho',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.zoho,
      },
      {
        name: 'Hostinger',
        detail:
          'MX mx1 y mx2.hostinger.com, include:_spf.mail.hostinger.com. Selectores hostingermail-a, -b y -c, en CNAME.',
        linkLabel: 'Configurar un dominio en Hostinger',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.hostinger,
      },
      {
        name: 'LWS',
        detail:
          'include:_spf.lws.fr, MX en .lws.fr o .lwspanel.com (no documentado). Selector default, clave generada por cPanel.',
        linkLabel: 'SPF, DKIM y DMARC en LWS',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.lws,
      },
      {
        name: 'Orange Pro',
        detail:
          'MX en .orange.fr o .orange-business.com (valores según la oferta, no publicados). Ningún selector documentado: pregunta al soporte.',
        linkLabel: 'Reglas postmaster de Orange',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.orange,
      },
      {
        name: 'Brevo',
        detail:
          'include:spf.brevo.com o spf.sendinblue.com. Selectores brevo1 y brevo2 en CNAME, formato antiguo mail._domainkey en TXT.',
        linkLabel: 'Autenticar un dominio en Brevo',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.brevo,
      },
      {
        name: 'Mailjet',
        detail: 'include:spf.mailjet.com. Selector mailjet, en TXT.',
        linkLabel: 'SPF y DKIM en Mailjet',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.mailjet,
      },
      {
        name: 'Mailchimp',
        detail:
          'include:servers.mcsv.net. Selectores k2 y k3 en CNAME (k1 para el formato antiguo); Mandrill: mte1 y mte2.',
        linkLabel: 'Autenticar un dominio en Mailchimp',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.mailchimp,
      },
      {
        name: 'SendGrid',
        detail: 'include:sendgrid.net. Selectores s1 y s2, en CNAME hacia sendgrid.net.',
        linkLabel: 'Autenticar un dominio en SendGrid',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.sendgrid,
      },
      {
        name: 'Amazon SES',
        detail:
          'include:amazonses.com (con un dominio MAIL FROM personalizado). Tres selectores generados al azar: no adivinables, léelos en la cabecera de un correo enviado.',
        linkLabel: 'Easy DKIM en Amazon SES',
        linkUrl: EMAIL_PROVIDER_OFFICIAL_GUIDE_URLS.amazonSes,
      },
    ],
    calloutEmphasizedIntro: '¿Tu proveedor no está en la lista?',
    calloutText:
      'La herramienta sondea igualmente una veintena de selectores habituales (default, google, selector1, mail, dkim, s1, k1…). Si no encuentra nada, busca «DKIM» en la ayuda de tu proveedor, o envíame su nombre con tu dominio: lo miro en 24 h.',
  },
  method: {
    eyebrow: 'En orden',
    title: 'Configurar SPF, DKIM y DMARC, en cuatro pasos',
    intro:
      'El mismo recorrido en OVH, o2switch, IONOS, Gandi o Infomaniak: todo ocurre en la zona DNS del dominio y en el panel de cada servicio que envía en tu nombre. Cuenta una hora, y luego unas semanas de informes antes de endurecer DMARC.',
    steps: [
      {
        label: 'SPF',
        title: 'Un solo registro, todos tus servicios',
        description:
          'Lista todo lo que envía en tu nombre: el buzón, el software de presupuestos y facturas, la newsletter, el formulario de la web. Un solo TXT en la raíz del dominio, v=spf1, el include de cada servicio, y luego ~all. Comprueba que el conjunto se quede por debajo de 10 consultas DNS, inclusiones contadas.',
      },
      {
        label: 'DKIM',
        title: 'Activar en cada servicio, publicar la clave',
        description:
          'Cada servicio que envía debe firmar: activa DKIM en su panel (en Google Workspace, espera de 24 a 72 h tras activar Gmail para obtener la clave), y publica el TXT o el CNAME indicado bajo <selector>._domainkey.tudominio. Prefiere una clave de 2.048 bits, dividida en cadenas de 255 caracteres si tu editor de zona lo exige.',
      },
      {
        label: 'DMARC',
        title: 'p=none con una dirección de informes, 48 h después',
        description:
          'Google pide esperar 48 horas tras SPF y DKIM. Publica entonces bajo _dmarc.tudominio: v=DMARC1; p=none; rua=mailto:dmarc@tudominio, hacia un buzón dedicado (Microsoft aconseja un buzón compartido, no el tuyo). Esta política no detiene nada: te envía los informes.',
      },
      {
        label: 'Comprobar, luego endurecer',
        title: 'Un correo de prueba, los informes, y luego quarantine y reject',
        description:
          'Vuelve a lanzar esta herramienta, envía un correo a un buzón de Gmail y abre «Mostrar original»: SPF, DKIM y DMARC deben mostrar PASS. Lee los informes durante varias semanas (OVH lo aconseja), pasa a p=quarantine con pct=10 y luego 100, y por fin a p=reject cuando ningún envío legítimo falle.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Tus preguntas sobre los correos que llegan a spam',
    questions: [
      {
        question: 'Envío 50 correos al día, ¿me afecta?',
        answer:
          'Sí. El umbral de 5.000 mensajes al día solo existe en Google y Microsoft, y solo afecta a sus buzones. Orange exige ahora SPF, DKIM y DMARC a todos los remitentes (reglas actualizadas el 1 de septiembre de 2026), laposte.net desde septiembre de 2025, iCloud sin umbral. E incluso en Gmail, un correo sin SPF ni DKIM puede ser rechazado con el error 5.7.26 desde el primer envío. Un autónomo que escribe a clientes en @orange.fr está afectado desde su primer presupuesto.',
      },
      {
        question: '¿Basta con DMARC en p=none?',
        answer:
          'Para ser aceptado, a menudo sí: Gmail y Outlook.com aceptan p=none para los grandes remitentes, y Orange pide un DMARC sin precisar la política. Pero p=none no detiene nada: un correo suplantado pasa como los tuyos. Es el punto de partida, con una dirección rua= para recibir los informes. Tras unas semanas sin fallos en tus envíos legítimos, pasa a p=quarantine (primero pct=10), y luego a p=reject.',
      },
      {
        question: 'Mi proveedor ya puso el SPF, ¿por qué mis correos siguen llegando a spam?',
        answer:
          'Porque el SPF solo ya no basta: Orange, laposte.net e iCloud quieren también DKIM y DMARC. Y el SPF puesto por el proveedor solo cubre su buzón: el software de presupuestos, la newsletter o el formulario de la web que envían en tu nombre no figuran en él, y sus correos fallan. Por último, la autenticación es solo una parte del filtrado: la reputación de la IP, el contenido y las quejas también cuentan.',
      },
      {
        question: 'La herramienta no encuentra mi clave DKIM: ¿de verdad no existe?',
        answer:
          'No necesariamente. La herramienta sondea los selectores documentados por tu proveedor y una veintena de selectores habituales. OVH (ovhmo<id>-selector1), Amazon SES (selectores aleatorios) y Zoho (selector elegido por ti) no se adivinan. Para comprobarlo: envíate un correo, abre la cabecera completa, busca la línea DKIM-Signature; el valor s= es tu selector, y d= el dominio firmante. Si esa línea no existe, el servicio no ha activado DKIM.',
      },
      {
        question: 'Gmail pone mis presupuestos en spam desde esta mañana, ¿qué hago?',
        answer:
          'Primero esta comprobación: un SPF roto, una clave DKIM revocada o un DMARC mal formado explican un cambio brusco. Luego envía un correo a un buzón de Gmail y abre «Mostrar original»: las líneas SPF, DKIM y DMARC dicen cuál falla. Si todo pasa, mira el contenido (enlace acortado, adjunto inusual, nuevo software de envío) y registra el dominio en Google Postmaster Tools para leer su reputación. Desde noviembre de 2025, Gmail rechaza de forma progresiva los mensajes no conformes.',
      },
      {
        question: 'mail-tester me da 10/10, ¿por qué mis correos siguen llegando a spam?',
        answer:
          'mail-tester puntúa un envío concreto, desde la herramienta que usaste para escribirle. No dice nada de los demás servicios que envían en tu nombre, ni del historial de tu dominio en cada proveedor de correo, ni de la reacción de los destinatarios. Un 10/10 con tu buzón no garantiza el software de facturas. Esta herramienta, en cambio, lee la configuración del dominio para todos los servicios listados en tu SPF. Las dos se complementan.',
      },
      {
        question: '¿Qué es un selector DKIM?',
        answer:
          'El nombre bajo el que se publica la clave pública en tu DNS: <selector>._domainkey.tudominio. Permite que un dominio tenga varias claves, una por servicio de envío, y las rote. Google usa google, Microsoft selector1 y selector2, o2switch y LWS default, Gandi gm1 a gm3, Mailjet mailjet, Brevo brevo1 y brevo2. Cada correo firmado indica su selector en la cabecera DKIM-Signature (s=).',
      },
      {
        question: '¿Cuánto cuesta que configuren SPF, DKIM y DMARC?',
        answer:
          'El diagnóstico es gratuito: esta herramienta, y luego mi lectura en 24 h si me envías tu dominio. La configuración se hace con presupuesto, según tu proveedor, el número de servicios que envían en tu nombre y el estado del SPF existente: en general unas horas de trabajo, y luego una o dos citas separadas por varias semanas para pasar DMARC a quarantine y luego a reject tras leer los informes.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro:
      'La vulnerabilidad PHP de octubre de 2026, las comprobaciones de una web WordPress hackeada, y lo que cambia la factura electrónica para un autónomo en Francia: tres lecturas para las mismas pequeñas empresas.',
  },
  contactCta: {
    title: '¿Necesitas que alguien se ocupe?',
    description:
      'Envíame tu nombre de dominio y tu proveedor. Pongo SPF, DKIM y DMARC en tu zona DNS, lo compruebo enviando correos de prueba y te escribo lo que se ha hecho. Diagnóstico gratuito en 24 h, presupuesto antes de cualquier intervención.',
    button: 'Que configuren mis correos',
  },
}
