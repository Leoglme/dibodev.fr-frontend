import type { DibodevGmailSendAsCheckPageContent } from '~/core/types/DibodevGmailSendAsCheckPage'
import { GMAIL_HELP_PAGE_URLS } from '~/core/constants/gmailSendAsCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

const THIRD_PARTY_CHANGES_URL: string = `${GMAIL_HELP_PAGE_URLS.thirdPartyChanges}?hl=es`
const GMAILIFY_AND_POP_URL: string = `${GMAIL_HELP_PAGE_URLS.gmailifyAndPop}?hl=es`
const THIRD_PARTY_CHANGES_SOURCE_NAME: string = 'Ayuda de Gmail, cuentas de correo de terceros'
const GMAILIFY_AND_POP_SOURCE_NAME: string = 'Ayuda de Gmail, Gmailify y POP'

export const GMAIL_SEND_AS_CHECK_PAGE_ES: DibodevGmailSendAsCheckPageContent = {
  meta: {
    title: 'Gmail «Enviar como»: fin en 2027, prueba gratuita',
    description:
      'A partir de enero de 2027, Gmail gratuito ya no envía con una dirección alojada en otro proveedor ni la recoge. Escribe tu dirección: veredicto y soluciones.',
    inLanguage: 'es',
    schemaAbout:
      'Fin de «Enviar como», de «Consultar el correo de otras cuentas» y de Gmailify en Gmail en enero de 2027',
  },
  breadcrumbLabel: 'Gmail, enero de 2027: ¿mi dirección está afectada?',
  shareImage: {
    titleLines: ['Gmail 2027: ¿mi dirección', 'está afectada?'],
    highlight: 'afectada',
    subtitle: 'Fin de «Enviar como»: prueba gratuita, veredicto y soluciones',
    badge: 'Prueba gratuita',
    alt: 'Gmail, enero de 2027: ¿mi dirección está afectada? Prueba gratuita de Dibodev',
  },
  hero: {
    titleBefore: 'Fin de «Enviar como» en Gmail: ¿tu dirección está ',
    titleHighlight: 'afectada',
    titleAfter: '?',
    reassurances: [
      'Gratis, sin registro',
      'Resultado en un minuto',
      'Páginas de Google revisadas el 19 de noviembre de 2026',
    ],
    description:
      'A partir de enero de 2027, según Google, una cuenta de Gmail gratuita ya no podrá enviar correos con una dirección alojada en otro proveedor (ajuste «Enviar como») ni recoger los correos de esa dirección (ajuste «Consultar el correo de otras cuentas»). Están afectadas las direcciones profesionales con tu nombre de dominio alojadas en OVHcloud, o2switch, IONOS u otro proveedor de hosting, y las direcciones de los operadores franceses Orange, Free y SFR, de Outlook o de Yahoo leídas en Gmail. Escribe tu dirección: la herramienta lee dónde está alojada, te hace tres preguntas y te dice qué deja de funcionar para ti y qué hacer.',
    authorIntro: 'Herramienta creada por',
    authorBio: `desarrollador freelance cerca de Rennes, Francia. Mi propia dirección profesional está alojada en o2switch y la leo en un Gmail gratuito: probé las soluciones el 19 de noviembre de 2026. Configuro el correo de pequeñas empresas a distancia y respondo en 24${NBSP}h.`,
  },
  checker: {
    addressLabel: 'Tu dirección de correo profesional',
    addressPlaceholder: 'contacto@miempresa.es',
    addressHint:
      'A la herramienta solo se le envía el nombre de dominio (lo que va después de la @), nunca el principio de la dirección. La herramienta lee los servidores de correo públicos de ese dominio: no se envía ningún correo ni se pide ninguna contraseña. Solo se guardan el dominio y su resultado, para estadísticas.',
    submit: 'Probar mi dirección',
    checking: 'Leyendo el dominio…',
    questionsTitle: 'Tres preguntas para terminar',
    questionsIntro:
      'Saber dónde está alojada tu dirección no dice cómo la usas. Responde a lo que sepas: «no lo sé» es una respuesta.',
    questions: {
      reading: {
        label: '¿Dónde lees los correos de esta dirección?',
        hint: '',
        options: {
          inGmail: 'En Gmail, con mi cuenta @gmail.com',
          elsewhere: 'En otro sitio (webmail, Outlook, Thunderbird…)',
        },
      },
      sending: {
        label: 'Cuando escribes desde Gmail, ¿qué dirección ven tus destinatarios?',
        hint: 'Es la dirección de la línea «De» de un mensaje nuevo.',
        options: {
          domainAddress: 'Mi dirección @{domain}',
          gmailAddress: 'Mi dirección @gmail.com',
          unknown: 'No lo sé',
        },
      },
      receiving: {
        label: 'En Gmail, ¿tu dirección aparece en la línea «Consultar el correo de otras cuentas»?',
        hint: 'En el ordenador: rueda dentada, «Ver todos los ajustes», pestaña «Cuentas e importación».',
        options: {
          listed: 'Sí, aparece',
          notListed: 'No, la línea está vacía',
          unknown: 'No lo he mirado',
        },
      },
    },
    resultLabel: 'Tu resultado',
    idleTitle: 'Escribe tu dirección para empezar',
    idleText:
      'La herramienta dice dónde están alojados tus correos, en Google o en otro proveedor, y luego, tras tres preguntas, qué deja de funcionar para ti a partir de enero de 2027: el envío, la recepción, los dos o nada.',
    loadingTitle: 'Leyendo el dominio…',
    loadingText: 'Leo los servidores de correo de este nombre de dominio. Unos segundos.',
    errorTitles: {
      invalid: 'Dirección a corregir',
      unreachable: 'Dominio inaccesible',
      rateLimited: 'Demasiadas comprobaciones',
      failed: 'Comprobación imposible',
    },
    errorTexts: {
      invalid:
        'Escribe una dirección de correo, como contacto@miempresa.es, o un nombre de dominio: solo se usa lo que va después de la @.',
      unreachable: 'Los servidores de {domain} no respondieron: inténtalo de nuevo en un momento.',
      rateLimited: 'Has lanzado muchas comprobaciones en poco tiempo. Inténtalo de nuevo en unos minutos.',
      failed: 'Algo ha fallado de mi lado. Inténtalo de nuevo en un momento, o escríbeme tu dirección.',
    },
    hostingTitle: 'Dónde están tus correos',
    hostingLines: {
      gmailAddress: '{domain} es una dirección de Gmail: está alojada en Google.',
      googleHosted: 'Los correos de {domain} están alojados en Google (Google Workspace).',
      consumerMailbox: '{domain} es un servicio de correo alojado fuera de Google.',
      thirdParty: 'Los correos de {domain} están alojados en {host}, no en Google.',
      noMailSetup: '{domain} no tiene ningún servidor de correo: este dominio no recibe correo.',
      invalidDomain: '',
    },
    unknownHostName: 'un proveedor que la herramienta no reconoce (servidor {mxHost})',
    pendingTitle: 'Dirección alojada fuera de Google',
    pendingText: 'Puede estar afectada, según cómo la uses. Responde a las tres preguntas: el veredicto aparece aquí.',
    verdictTitles: {
      bothAffected: 'Afectada: el envío y la recepción dejan de funcionar',
      sendingAffected: 'Afectada: el envío con esta dirección deja de funcionar',
      receivingAffected: 'Afectada: la recepción en Gmail deja de funcionar',
      notAffected: 'No afectada, con tus ajustes actuales',
      toCheck: 'Por comprobar en Gmail: un minuto',
      notInGmail: 'No afectada: no usas Gmail para esta dirección',
      googleHosted: 'No afectada: dirección alojada en Google',
      gmailAddress: 'No afectada: es una dirección de Gmail',
      noMailSetup: 'Ningún servicio de correo en este dominio',
      invalidDomain: 'Dominio no encontrado',
    },
    verdictTexts: {
      bothAffected:
        'A partir de enero de 2027, según Google, tu Gmail gratuito ya no podrá enviar con tu dirección @{domain} («Enviar como») ni recoger sus correos en {host} («Consultar el correo de otras cuentas»). Los correos que ya han llegado se quedan en Gmail. Hay que elegir una solución antes, para no perder ningún mensaje.',
      sendingAffected:
        'A partir de enero de 2027, según Google, tu Gmail gratuito ya no podrá enviar con tu dirección @{domain}: el ajuste «Enviar como» deja de funcionar para las direcciones alojadas fuera de Google. La recepción no cambia si tus correos llegan por un reenvío automático.',
      receivingAffected:
        'A partir de enero de 2027, según Google, Gmail ya no recogerá los correos de tu dirección @{domain} en {host}: el ajuste «Consultar el correo de otras cuentas» deja de funcionar. Los correos nuevos se quedarán en {host}, sin llegar a Gmail. Los que ya han llegado se quedan.',
      notAffected:
        'Tus correos llegan a Gmail por un reenvío automático configurado en {host}, y escribes con tu dirección @gmail.com: Google no toca ni lo uno ni lo otro. No hay nada que hacer, salvo que quieras escribir a tus clientes con tu dirección @{domain}.',
      toCheck:
        'Tu dirección está alojada en {host}: está afectada si aparece en los ajustes de Gmail. Abre Gmail en un ordenador, la rueda dentada, «Ver todos los ajustes», pestaña «Cuentas e importación», y lee las dos líneas de abajo.',
      notInGmail:
        'El cambio de enero de 2027 solo afecta a Gmail. Si lees y envías tus correos @{domain} en el webmail de tu proveedor, en Outlook, Thunderbird o Apple Mail, nada cambia para ti.',
      googleHosted:
        'Google lo escribe: el fin de «Enviar como» no afecta ni a las direcciones alojadas en Google ni a los alias de Google Workspace. No hay nada que hacer para {domain}.',
      gmailAddress:
        'Google lo escribe: enviar con otra dirección de Gmail sigue siendo posible. El cambio de enero de 2027 afecta a las direcciones alojadas en otros proveedores. Si también tienes una dirección con tu nombre de dominio, prueba esa.',
      noMailSetup:
        'Ninguna dirección @{domain} puede recibir correo. Comprueba lo que va después de la @ en tu dirección profesional y repite la prueba.',
      invalidDomain:
        'Ningún servidor responde para {domain}: el nombre está mal escrito, caducado o aún sin registrar. Comprueba lo que va después de la @ en tu dirección.',
    },
    checkSendingNote:
      'Envío por comprobar: si tu dirección aparece en la línea «Enviar como», el envío con esta dirección deja de funcionar.',
    checkReceivingNote:
      'Recepción por comprobar: si tu dirección aparece en la línea «Consultar el correo de otras cuentas», la recepción deja de funcionar. Si no aparece y tus correos llegan, es un reenvío: sigue funcionando.',
    stepsTitle: 'Qué hacer, en orden',
    verdictSteps: {
      bothAffected: [
        'Antes de enero: crea en {host} un reenvío automático de tu dirección a tu Gmail, para seguir recibiendo.',
        `Para seguir escribiendo con @{domain} desde Gmail: pasa ese Gmail a Google Workspace (de 6,80 a 8,10${NBSP}€ sin IVA al mes), o escribe desde el webmail de {host} o desde un programa de correo (gratis).`,
        'Después de cualquier cambio, envíate un correo de prueba y comprueba que no llega a spam.',
      ],
      sendingAffected: [
        `Para dejar Gmail tal cual: pásalo a Google Workspace (de 6,80 a 8,10${NBSP}€ sin IVA al mes y por buzón), y la dirección @{domain} se convierte en una dirección de Google.`,
        'O sigue con Gmail gratuito y escribe con @{domain} desde el webmail de {host}, un programa de correo o la aplicación Gmail del móvil.',
        'O escribe con tu dirección @gmail.com: gratis, pero tus clientes ven una dirección de Gmail.',
      ],
      receivingAffected: [
        'Crea en {host} un reenvío automático de tu dirección @{domain} a tu dirección de Gmail: Google confirma que el reenvío sigue funcionando.',
        'Envíate un correo de prueba desde otra dirección, y mira también la carpeta Spam de Gmail.',
        'Conserva el acceso al webmail de {host}: ahí se quedan los correos si el reenvío deja de funcionar algún día.',
      ],
      toCheck: [
        'Línea «Enviar como»: si tu dirección @{domain} aparece ahí, el envío deja de funcionar.',
        'Línea «Consultar el correo de otras cuentas»: si aparece ahí, la recepción deja de funcionar.',
        'Vuelve aquí y cambia tus dos respuestas: la herramienta te indica los pasos que seguir.',
      ],
    },
    hostGuideTitle: 'La guía para tu correo',
    disclaimer:
      'La herramienta lee dónde está alojado el dominio; no ve los ajustes de tu Gmail. El veredicto se basa en tus respuestas y en las páginas de ayuda de Google leídas el 19 de noviembre de 2026. Google no ha dado un día concreto.',
    idleCtaIntro: `¿Prefieres que lo mire yo? Envíame tu dirección: te digo en 24${NBSP}h qué está afectado y qué solución te conviene.`,
    idleCtaLabel: 'Pedir una opinión gratuita',
    ctaIntro: `Puedo ocuparme a distancia: reenvío, ajustes del nombre de dominio, paso a Google Workspace, pruebas de envío. Primera opinión gratuita en 24${NBSP}h, y si te basta con un ajuste gratuito, te lo digo.`,
    ctaLabel: 'Enviar mi resultado',
  },
  mobileContactBar: {
    text: '¿Necesitas ayuda con tu dirección?',
    buttonLabel: 'Pedir una opinión gratuita',
  },
  summary: {
    eyebrow: 'En resumen',
    text: 'A partir de enero de 2027, según Google, una cuenta de Gmail gratuita ya no puede enviar correos con una dirección alojada fuera de Google («Enviar como»), ni recoger los correos de otro buzón («Consultar el correo de otras cuentas»), y Gmailify se retira. El reenvío automático a Gmail, la aplicación Gmail del móvil y Google Workspace siguen funcionando. Una dirección profesional alojada en OVHcloud, o2switch o IONOS y leída en un Gmail gratuito está, por tanto, afectada; una dirección de Google Workspace no lo está.',
    dateLabel: 'Páginas de ayuda de Google revisadas el 19 de noviembre de 2026. Google no da un día concreto.',
  },
  facts: {
    anchorId: 'que-deja-de-funcionar',
    eyebrow: 'Lo que dice Google',
    title: 'Qué deja de funcionar en Gmail a partir de enero de 2027',
    intro: 'Seis hechos, cada uno leído el 19 de noviembre de 2026 en una página de ayuda de Google.',
    facts: [
      {
        contextLabel: 'Enero de 2027',
        title: '«Enviar como» deja de funcionar para las direcciones alojadas en otros proveedores',
        text: 'Google escribe: «Ya no podrás enviar correos desde cuentas de correo de terceros en Gmail en la Web ni en las aplicaciones móviles de Gmail». El ajuste se llama «Enviar como», en la pestaña «Cuentas e importación».',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Enero de 2027',
        title: '«Consultar el correo de otras cuentas» también deja de funcionar',
        text: 'Gmail ya no recogerá los correos de otro buzón: Google escribe que «ya no se podrá obtener correos de cuentas de terceros en tu cuenta de Gmail con POP». La opción desaparece de Gmail para ordenadores, y Gmailify se retira al mismo tiempo.',
        sourceName: GMAILIFY_AND_POP_SOURCE_NAME,
        sourceUrl: GMAILIFY_AND_POP_URL,
      },
      {
        contextLabel: 'Desde 2026',
        title: 'Los ajustes nuevos ya están cerrados',
        text: '«Después del primer trimestre del 2026, esta función dejará de admitir nuevos usuarios. Los usuarios que ya tengan la función podrán seguir utilizándola hasta enero del 2027». Un ajuste que funciona hoy funciona, por tanto, hasta esa fecha.',
        sourceName: GMAILIFY_AND_POP_SOURCE_NAME,
        sourceUrl: GMAILIFY_AND_POP_URL,
      },
      {
        contextLabel: 'Calendario',
        title: 'No se anuncia ningún día concreto',
        text: 'Google da tres etapas: anuncio y notificación en Gmail en el tercer trimestre de 2026, periodo de transición hasta finales de 2026, y luego la eliminación completa en «enero del 2027». Ninguna página da el día.',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Empresas',
        title: 'Google remite a los profesionales a tres soluciones',
        text: 'A la pregunta «¿Qué ocurre si en mi empresa dependemos de la función “Enviar como”?», Google responde: un programa de correo para ordenador, la interfaz de tu proveedor, o «utilizar Google Workspace para un dominio personalizado».',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
      {
        contextLabel: 'Advertencia',
        title: 'Google desaconseja las herramientas que prometen recrear la función',
        text: 'Las herramientas de terceros y las extensiones de navegador que ofrecen replicar «Enviar como» «suelen requerir acceso a tus credenciales de correo», escribe Google, que no garantiza ni su seguridad ni su fiabilidad.',
        sourceName: THIRD_PARTY_CHANGES_SOURCE_NAME,
        sourceUrl: THIRD_PARTY_CHANGES_URL,
      },
    ],
    calloutEmphasizedIntro: 'Lo que Google no escribe.',
    calloutText:
      'Los ejemplos de Google son direcciones de Yahoo y Hotmail. La dirección de un nombre de dominio alojado en un proveedor de hosting no se cita palabra por palabra. Pero Google escribe que el cambio «solo se aplica a cuentas de correo de terceros que no sean de Google» y responde «Google Workspace para un dominio personalizado» a las empresas: por eso la considero afectada, y corregiré esta página si Google lo aclara.',
  },
  unchanged: {
    anchorId: 'que-sigue-igual',
    eyebrow: 'Lo que sigue',
    title: 'Qué no cambia en enero de 2027',
    intro: 'Escrito por Google en las mismas páginas de ayuda, leídas el 19 de noviembre de 2026.',
    items: [
      {
        title: 'El reenvío automático a Gmail',
        description:
          'Un reenvío configurado en tu proveedor sigue llevando tus correos a Gmail. Google: «Puedes configurar tu proveedor externo para que reenvíe automáticamente los mensajes a tu dirección de Gmail».',
      },
      {
        title: 'Las direcciones alojadas en Google',
        description:
          'Una dirección de Google Workspace, un alias de Google Workspace u otra dirección de Gmail se pueden seguir usando en «Enviar como».',
      },
      {
        title: 'La aplicación Gmail del móvil',
        description:
          'En Android, iPhone y iPad, puedes seguir añadiendo la dirección de otro proveedor como una cuenta aparte, leerla y escribir con ella. La aplicación se conecta entonces directamente a tu proveedor: no es el ajuste «Enviar como».',
      },
      {
        title: 'Los correos que ya han llegado',
        description:
          '«Los mensajes que ya hayas importado de una cuenta de terceros a Gmail permanecerán en tu buzón».',
      },
      {
        title: 'Gmail en Outlook, Thunderbird o Apple Mail',
        description: 'Leer tu dirección de Gmail en un programa de correo sigue siendo posible, como hoy.',
      },
      {
        title: 'La importación puntual',
        description:
          '«Importar correo y contactos» sigue disponible para recuperar correos antiguos una sola vez, sin sincronización continua.',
      },
    ],
  },
  gmailSteps: {
    eyebrow: 'Compruébalo tú mismo',
    title: 'Cómo comprobarlo en Gmail en un minuto',
    intro: 'En un ordenador, no en el móvil: estos ajustes no están en la aplicación.',
    steps: [
      {
        label: 'Ajustes',
        title: 'Abre los ajustes de Gmail',
        description:
          'En Gmail en el ordenador, haz clic en la rueda dentada, arriba a la derecha, y luego en «Ver todos los ajustes».',
      },
      {
        label: 'Pestaña',
        title: 'Ve a «Cuentas e importación»',
        description: 'En algunas cuentas, la pestaña se llama «Cuentas».',
      },
      {
        label: 'Envío',
        title: 'Lee la línea «Enviar como»',
        description:
          'Si tu dirección profesional aparece ahí, debajo de tu dirección de Gmail, el envío con esa dirección deja de funcionar a partir de enero de 2027.',
      },
      {
        label: 'Recepción',
        title: 'Lee la línea «Consultar el correo de otras cuentas»',
        description:
          'Si tu dirección aparece ahí, Gmail recoge tus correos en tu proveedor: esa recepción deja de funcionar. Si la línea está vacía y tus correos llegan igualmente, vienen de un reenvío, que sigue funcionando.',
      },
      {
        label: 'Resultado',
        title: 'Traslada tus respuestas a la prueba',
        description: 'La prueba del principio de esta página te dice entonces qué hacer, y en qué orden.',
      },
    ],
  },
  solutions: {
    anchorId: 'soluciones',
    eyebrow: 'Las soluciones',
    title: `Cinco soluciones, desde gratis hasta 8,10${NBSP}€ al mes`,
    intro:
      'Qué conserva cada una, cuánto cuesta y a quién le conviene. Precios de Google para Francia, leídos el 19 de noviembre de 2026.',
    solutionColumnLabel: 'Solución',
    coverageColumnLabel: 'Lo que conservas',
    costColumnLabel: 'Coste',
    rows: [
      {
        name: 'Reenvío automático a Gmail',
        coverage:
          'Sigues recibiendo en Gmail. Respondes con tu dirección @gmail.com: tus clientes ya no ven tu dirección profesional.',
        price: `0${NBSP}€`,
        priceCondition: 'Ajuste en tu proveedor, solo recepción',
      },
      {
        name: 'Reenvío y webmail del proveedor',
        coverage:
          'Recibes en Gmail y escribes con tu dirección profesional desde la web de tu proveedor. Dos sitios que abrir.',
        price: `0${NBSP}€`,
        priceCondition: 'Incluido en tu hosting',
      },
      {
        name: 'Programa de correo',
        coverage:
          'Thunderbird, Outlook o Apple Mail leen y envían con tu dirección profesional. Dejas la pantalla de Gmail para esa dirección.',
        price: `0${NBSP}€`,
        priceCondition: 'Thunderbird y Apple Mail son gratuitos',
      },
      {
        name: 'Aplicación Gmail del móvil',
        coverage: 'Tu dirección añadida como una cuenta aparte: lectura y envío, solo en el móvil.',
        price: `0${NBSP}€`,
        priceCondition: 'Android, iPhone y iPad',
      },
      {
        name: 'Google Workspace',
        coverage:
          'Tu Gmail pasa a ser profesional: misma pantalla, mismos correos, envío y recepción con tu dirección profesional, en el ordenador y en el móvil.',
        price: `De 6,80 a 8,10${NBSP}€ sin IVA al mes`,
        priceCondition: `Por buzón: 6,80${NBSP}€ con un año de compromiso, 8,10${NBSP}€ sin él. Prueba de 14 días`,
      },
    ],
    calloutEmphasizedIntro: 'Mi opinión.',
    calloutText: `Si tus clientes nunca ven tu dirección, porque sobre todo recibes, el reenvío gratuito basta. Si escribes todos los días a clientes desde Gmail con tu dirección profesional, Google Workspace es la única solución que no cambia en nada tus costumbres, por 81,60 a 97,20${NBSP}€ sin IVA al año y por buzón.`,
  },
  hosts: {
    anchorId: 'proveedores',
    eyebrow: 'En tu proveedor',
    title: 'Dónde crear el reenvío a Gmail, proveedor por proveedor',
    intro:
      'El reenvío se configura en quien aloja la dirección, nunca en Gmail. Páginas oficiales (en francés, como los nombres de los menús) leídas el 19 de noviembre de 2026.',
    hostColumnLabel: 'Proveedor',
    detailColumnLabel: 'Dónde se configura',
    guideColumnLabel: 'Página oficial',
    // Menu labels stay in French: only the French interfaces of these hosts were read.
    rows: [
      {
        name: 'OVHcloud',
        detail:
          'Área de cliente, «Web Cloud», «Emails», pestaña «Redirections», botón «Créer une redirection», con la casilla «Conserver une copie locale».',
        linkLabel: 'Guía de las redirecciones, OVHcloud (en francés)',
        linkUrl:
          'https://docs.ovhcloud.com/fr/guides/web-cloud/email-and-collaborative-solutions/common-email-features/feature-redirections',
      },
      {
        name: 'o2switch',
        detail:
          'En cPanel, herramienta «Redirecteurs»; se queda una copia en el buzón de origen. El propio o2switch desaconseja redirigir a una dirección externa como Gmail, por el riesgo de spam, y recomienda un programa de correo.',
        linkLabel: 'Redirecciones de correo, o2switch (en francés)',
        linkUrl: 'https://faq.o2switch.fr/cpanel/emails/redirecteur-email/',
      },
      {
        name: 'IONOS',
        detail:
          'Área de cliente, sección «Email», la dirección, línea «Redirection», «Ajouter une redirection». El buzón de IONOS conserva el correo y una copia sale hacia Gmail.',
        linkLabel: 'Configurar una redirección, IONOS (en francés)',
        linkUrl:
          'https://www.ionos.fr/assistance/email/mail-basic-setup-configuration-de-base-de-la-messagerie/configurer-une-redirection-de-mails/',
      },
      {
        name: 'Orange',
        detail:
          'En Mail Orange: ajustes, «généralités», «transfert de mails», «Transférer tous les mails vers une autre boîte mail».',
        linkLabel: 'Redirigir tus correos, Orange (en francés)',
        linkUrl:
          'https://assistance.orange.fr/ordinateurs-peripheriques/installer-et-utiliser/l-utilisation-du-mail-et-services-associes/mail-orange/parametrer-la-boite-mail/mail-orange-rediriger-vos-emails-vers-une-autre-boite-mail_196861-741574',
      },
      {
        name: 'La Poste',
        detail:
          'Sin reenvío: La Poste indica que el correo de laposte.net no permite redirigir tus mensajes a otro buzón. Quedan su webmail, su aplicación y la aplicación Gmail del móvil.',
        linkLabel: 'Ayuda de laposte.net (en francés)',
        linkUrl:
          'https://aide.laposte.net/contents/comment-transferer-automatiquement-les-courriers-de-ma-boite-laposte-net-vers-une-autre-adresse-e-mail',
      },
      {
        name: 'Free',
        detail:
          'No he encontrado ningún reenvío automático en la asistencia oficial de Free. Quedan el webmail de Free, un programa de correo y la aplicación Gmail del móvil.',
        linkLabel: 'Ajustes del correo, Free (en francés)',
        linkUrl: 'https://assistance.free.fr/articles/609',
      },
      {
        name: 'SFR',
        detail:
          'No he encontrado ningún reenvío automático en la asistencia oficial de SFR. Quedan SFR Mail, un programa de correo y la aplicación Gmail del móvil.',
        linkLabel: 'Configurar tu correo, SFR (en francés)',
        linkUrl: 'https://assistance.sfr.fr/sfrmail-appli/sfrmail/configurer-messagerie-recevoir-email-sfr.html',
      },
    ],
    calloutEmphasizedIntro: '¿Tu proveedor no está en la lista?',
    calloutText:
      'El principio es el mismo en todas partes: el reenvío (o «redirección»; en francés, «transfert» o «faire suivre») se configura en el área de cliente del proveedor. La prueba del principio de la página también reconoce Infomaniak, Gandi, Hostinger, LWS, Microsoft 365, Zoho y Proton.',
  },
  pitfalls: {
    anchorId: 'trampas',
    eyebrow: 'Las trampas',
    title: 'Cuatro trampas que evitar al cambiar',
    intro: 'Encontradas o comprobadas el 19 de noviembre de 2026, al hacer el cambio en una cuenta de prueba.',
    pitfallLabel: 'El error frecuente',
    items: [
      {
        title: 'Tus correos llegan a spam después del cambio',
        text: 'Cuando una dirección cambia de servidor de envío, el nombre de dominio tiene que autorizarlo, con una línea llamada SPF en sus ajustes. Sin ella, mi primer correo enviado desde Google Workspace llegó a spam. Una vez añadida la línea, el siguiente llegó a la bandeja de entrada.',
        pitfall: 'Probar un minuto después del ajuste: hay que esperar unos minutos a que se lea en todas partes.',
      },
      {
        title: 'Las demás direcciones del dominio',
        text: 'Si pasas a Google Workspace, todo el correo del dominio se va a Google, que avisa de que tendrás que incluir todas las direcciones de correo ya configuradas con tu dominio. Cada dirección existente (contacto@, presupuestos@, facturacion@) tiene que volver a crearse antes del cambio, como buzón o como alias.',
        pitfall:
          'Olvidar una dirección que solo sirve para los formularios de la web o para las facturas: sus correos se pierden sin mensaje de error.',
      },
      {
        title: 'Un reenvío no es un buzón',
        text: 'Gmail puede rechazar un reenvío automático o clasificarlo como spam. Google lo escribe: «El reenvío de correo puede afectar a la autenticación de los mensajes». Conserva el buzón en tu proveedor y ten su webmail a mano.',
        pitfall: 'Eliminar el buzón del proveedor una vez creado el reenvío.',
      },
      {
        title: 'Las herramientas que te piden la contraseña',
        text: 'Hay extensiones y servicios que prometen recrear «Enviar como». Google advierte: suelen pedir las credenciales de tu buzón. Ninguna de las cinco soluciones de esta página las necesita.',
        pitfall: 'Dar la contraseña de tu correo a un servicio desconocido para ganar diez minutos.',
      },
    ],
  },
  experience: {
    eyebrow: 'Experiencia',
    title: 'Lo que probé el 19 de noviembre de 2026',
    emphasizedIntro: 'A mí también me afecta.',
    text: 'Mi dirección profesional está alojada en o2switch y la leo en un Gmail gratuito, con los dos ajustes que dejan de funcionar. Así que hice el cambio en una cuenta de Gmail de prueba: la opción de Google Workspace de mejorar la cuenta de Gmail que ya tienes («Mettre à niveau ce compte» en la página francesa) conservó el mismo buzón, la misma contraseña y las 1799 conversaciones, con la dirección antigua y la nueva en el mismo buzón. Desde la primera pantalla hasta que Gmail quedó activado, unos 40 minutos, ajustes del nombre de dominio incluidos. Lo que no he comprobado: la vuelta atrás.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Gmail y tu dirección profesional en 2027',
    questions: [
      {
        question: '¿Gmail elimina «Enviar como»?',
        answer:
          'Sí, para las direcciones alojadas fuera de Google. Según la página de ayuda de Google leída el 19 de noviembre de 2026, a partir de enero de 2027 una cuenta de Gmail ya no puede enviar correos desde una cuenta de correo de terceros, ni en la Web ni en las aplicaciones móviles. «Enviar como» sigue siendo posible con otra dirección de Gmail o con un alias de Google Workspace.',
      },
      {
        question: '¿En qué fecha exacta deja Gmail de ofrecer «Enviar como» y la recogida del correo de otras cuentas?',
        answer:
          'Google escribe «A partir de enero del 2027», sin dar el día. El calendario publicado prevé una notificación en Gmail en el tercer trimestre de 2026, un periodo de transición hasta finales de 2026, y luego la eliminación completa en enero de 2027. Esta página se actualiza si Google concreta o mueve la fecha.',
      },
      {
        question: '¿Mi dirección profesional de OVH, o2switch o IONOS está afectada?',
        answer:
          'Sí, si la lees o escribes con ella en una cuenta de Gmail gratuita. Una dirección con tu nombre de dominio alojada en OVHcloud, o2switch, IONOS u otro proveedor de hosting es, para Gmail, una cuenta de correo de terceros. No está afectada si la usas en el webmail del proveedor, en Outlook o Thunderbird, o si los correos del dominio están en Google Workspace.',
      },
      {
        question: '¿Voy a perder los correos que ya he recibido en Gmail?',
        answer:
          'No. Google escribe que los mensajes ya importados a Gmail desde una cuenta de terceros permanecen en el buzón. Lo que deja de funcionar es la llegada de los correos nuevos por «Consultar el correo de otras cuentas» y el envío con la dirección de terceros.',
      },
      {
        question: '¿Cómo sigo recibiendo en Gmail los correos de mi dirección profesional?',
        answer:
          'Creando un reenvío automático en tu proveedor, de tu dirección profesional a tu dirección de Gmail. Google confirma que esta solución sigue siendo posible y que no depende de «Enviar como». Conserva el buzón en tu proveedor: un reenvío puede ser rechazado o clasificado como spam.',
      },
      {
        question: '¿Cómo sigo enviando con mi dirección profesional desde Gmail?',
        answer: `En Gmail en el ordenador, solo una solución mantiene tus costumbres: pasar la cuenta a Google Workspace, donde la dirección de tu nombre de dominio se convierte en una dirección de Google (de 6,80 a 8,10${NBSP}€ sin IVA al mes y por buzón, precios leídos el 19 de noviembre de 2026). Gratis, puedes enviar desde el webmail de tu proveedor, desde un programa como Thunderbird o desde la aplicación Gmail del móvil, donde la dirección se añade como una cuenta aparte.`,
      },
      {
        question: '¿La aplicación Gmail del móvil está afectada?',
        answer:
          'El ajuste «Enviar como» también deja de funcionar en las aplicaciones móviles. En cambio, Google escribe que el acceso a las cuentas de terceros desde la aplicación Gmail para Android, iPhone y iPad no cambia: se puede añadir la dirección de otro proveedor como una cuenta aparte, leerla y escribir con ella.',
      },
      {
        question: '¿Mi dirección de Orange, Free, SFR o laposte.net leída en Gmail está afectada?',
        answer:
          'Sí, si Gmail recoge sus correos con el ajuste «Consultar el correo de otras cuentas»: esa recepción deja de funcionar en enero de 2027. Los correos que ya han llegado se quedan. Para después: un reenvío automático cuando el proveedor lo ofrece (Orange lo ofrece, laposte.net escribe que no), su webmail o la aplicación Gmail del móvil.',
      },
      {
        question: '¿Qué es Gmailify y qué cambia?',
        answer:
          'Gmailify aplica las funciones de Gmail (antispam, categorías, búsqueda) a un buzón de Yahoo, Outlook u otro conectado a Gmail. Google lo retira al mismo tiempo que la recogida del correo de otras cuentas, en enero de 2027.',
      },
      {
        question: '¿Cuánto cuesta Google Workspace para una sola dirección?',
        answer: `En la página de precios de Google para Francia, leída el 19 de noviembre de 2026: Business Starter a 6,80${NBSP}€ sin IVA por usuario y mes con un compromiso de un año, es decir, 81,60${NBSP}€ sin IVA al año. Sin compromiso, leí 8,10${NBSP}€ al mes en la consola de administración, es decir, 97,20${NBSP}€ sin IVA al año. Prueba gratuita de 14 días. Un buzón basta para una persona: las demás direcciones del dominio pueden ser alias suyos.`,
      },
      {
        question: '¿Pasar a Google Workspace hace perder los correos antiguos del Gmail gratuito?',
        answer:
          'No, en mi prueba del 19 de noviembre de 2026: con la opción de mejorar la cuenta de Gmail que ya tienes («Mettre à niveau ce compte» en la página francesa), la cuenta de Gmail gratuita se convirtió en una cuenta de Google Workspace conservando el mismo buzón, la misma contraseña y todos los correos. La dirección de inicio de sesión pasa a ser la del nombre de dominio, y Google Family, Google Fit y Google Nest dejan de estar disponibles en esa cuenta. No he comprobado la vuelta atrás.',
      },
      {
        question: '¿Puedes hacer el ajuste por mí?',
        answer: `Sí, a distancia: miro lo que hay en tu proveedor y en Gmail, te propongo la solución más sencilla, y luego hago los ajustes y las pruebas de envío contigo. El diagnóstico es gratuito, en 24${NBSP}h. Después, desde 90${NBSP}€ para conservar tu Gmail gratuito con un reenvío, desde 190${NBSP}€ para pasarlo a Google Workspace, con el precio anunciado antes de empezar. Y si te basta con un ajuste gratuito, te lo digo.`,
      },
    ],
  },
  relatedArticles: {
    title: 'Las guías de la serie',
    intro:
      'El paso a paso por proveedor, la solución de problemas si tus correos ya no salen, y el paso a Google Workspace contado etapa por etapa.',
  },
  nextTools: {
    eyebrow: 'Otras comprobaciones',
    title: 'Ya que estás',
  },
  contactCta: {
    title: 'Envíame tu dirección profesional',
    description: `Te digo en 24${NBSP}h qué está afectado y qué solución te conviene. Primera opinión gratuita.`,
    button: 'Pedir una opinión gratuita',
  },
}
