import type { DibodevEInvoicingCheckPageContent } from '~/core/types/DibodevEInvoicingCheckPage'
import { E_INVOICING_SOURCES } from '~/core/constants/eInvoicingCheck/pageShared'

export const E_INVOICING_CHECK_PAGE_ES: DibodevEInvoicingCheckPageContent = {
  meta: {
    title: 'Factura electrónica: ¿tu software está homologado?',
    description:
      'Escribe el nombre de tu software de facturación: plataforma homologada, conectado, o nada. Lista oficial de la DGFiP del 13 de octubre de 2026. Gratis.',
    inLanguage: 'es-ES',
    schemaAbout:
      'La reforma de la facturación electrónica en Francia: plataformas homologadas y soluciones compatibles',
  },
  breadcrumbLabel: 'Factura electrónica: mi software',
  shareImage: {
    titleLines: ['Factura electrónica:', '¿tu software está', 'homologado?'],
    highlight: 'homologado',
    subtitle: 'Lista oficial de la DGFiP del 13 de octubre de 2026, programas habituales revisados',
    badge: 'Gratis · resultado inmediato',
    alt: 'Factura electrónica en Francia: ¿tu software está homologado? Comprobador gratuito en dibodev.fr',
  },
  hero: {
    titleBefore: 'Factura electrónica en Francia: ¿tu software está ',
    titleHighlight: 'homologado o conectado',
    titleAfter: '?',
    reassurances: [
      'Gratis, sin registro',
      'Lista oficial de la DGFiP del 13 de octubre de 2026',
      'Fuentes revisadas el 23 de octubre de 2026',
    ],
    description:
      'Desde el 1 de septiembre de 2026, toda empresa en Francia debe poder recibir sus facturas a través de una plataforma homologada; las pequeñas empresas también tendrán que emitirlas así a partir del 1 de septiembre de 2027. La DGFiP registra las plataformas, pero la mayoría de los programas de facturación no lo son: pasan por un socio, lo nombren o no. Esta herramienta cruza la lista oficial con las páginas de los editores y te dice en qué punto estás.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes. Conecto software de gestión y herramientas propias a plataformas homologadas, y automatizo presupuestos y facturas de pequeñas empresas, a distancia.',
  },
  checker: {
    softwareLabel: 'Tu software de facturación',
    softwarePlaceholder: 'Ej.: EBP, Henrri, Pennylane, Excel…',
    softwareHint:
      'Escribe el nombre de la herramienta que hace tus facturas. No se envía nada: la lista se lee dentro de la página.',
    submit: 'Comprobar mi software',
    suggestionsLabel: 'Quizá buscas',
    suggestionPlatformDetail: 'plataforma homologada',
    suggestionPendingDetail: 'expediente pendiente',
    resultLabel: 'Resultado',
    idleTitle: '¿Tu software está listo para la factura electrónica?',
    idleText:
      'Escribe su nombre: sabrás si es plataforma homologada, si está conectado a una, o si te falta algo antes del 1 de septiembre de 2027.',
    verdictTitles: {
      accredited: '{name} es una plataforma homologada',
      pending: '{name} espera su registro definitivo',
      connected: '{name} está conectado a {platform}',
      compatibleUnnamed: '{name} se declara compatible, sin nombrar su plataforma',
      announced: '{name} no está en la lista oficial',
      none: 'Te falta una plataforma homologada',
      publicSector: 'Chorus Pro solo sirve para el sector público',
      ppf: 'El portal público ya no transmite facturas',
      unknown: '«{query}» no está ni en la lista oficial ni en mi relevamiento',
    },
    verdictTexts: {
      accredited:
        '{name} figura en la lista de plataformas homologadas publicada por la DGFiP (lista del {listDate}). Puedes recibir, y emitir cuando te toque, sin otra herramienta: queda activar la facturación electrónica en el software y comprobar tu dirección en el directorio.',
      pending:
        '{name} ha presentado un expediente completo y conforme, pero aún no ha superado las pruebas de interoperabilidad que condicionan el registro definitivo (lista de la DGFiP del {listDate}). Pide una fecha al editor y mantén una plataforma de respaldo para la recepción.',
      connected:
        '{name} no es una plataforma homologada: es una solución compatible que pasa por {platform}, plataforma homologada de la lista oficial. Es un montaje normal, previsto por la reforma. Comprueba que la conexión está activa en tu cuenta, y a qué precio.',
      compatibleUnnamed:
        '{name} anuncia que pasa por una plataforma homologada, pero no dice cuál en su página. No es necesariamente un problema: pide el nombre de la plataforma por escrito y compruébalo en la lista oficial (campo de arriba).',
      announced:
        '{name} anuncia su llegada, pero el nombre no aparece ni entre las {registeredCount} plataformas registradas ni entre los {pendingCount} expedientes pendientes de la lista del {listDate}. Mientras tanto, no tienes plataforma para recibir tus facturas.',
      none: 'Excel, Word, una plantilla PDF o el papel no hacen facturas electrónicas. Para recibir las de tus proveedores, obligatorio desde el 1 de septiembre de 2026, necesitas una plataforma homologada: varias tienen un plan gratuito. Para emitir, tienes hasta el 1 de septiembre de 2027.',
      publicSector:
        'Chorus Pro sigue siendo el paso obligado para facturar al Estado francés, a las administraciones locales y a los hospitales. Para tus clientes privados necesitas una plataforma homologada o un programa conectado a una.',
      ppf: 'El portal público de facturación ya no emite ni recibe facturas: lleva el directorio de empresas y transmite los datos a la administración. No hay opción pública gratuita; elige una plataforma homologada.',
      unknown:
        'No he encontrado «{query}» ni entre las {registeredCount} plataformas registradas de la lista de la DGFiP del {listDate}, ni entre los expedientes pendientes, ni entre los {softwareCount} programas cuya página he revisado. O el editor pasa por una plataforma asociada sin anunciarlo, o no está listo.',
    },
    detailsTitle: 'Lo que debes saber',
    registrationDateLine: 'Número de registro expedido por la DGFiP el {date}.',
    registrationDateUnknownLine: 'Registrada por la DGFiP (fecha no legible en la lista oficial).',
    pendingLine: 'Expediente completo y conforme, a la espera del registro definitivo.',
    partnerPlatformLine: 'Plataforma homologada asociada: {platform}, registrada el {platformDate}.',
    partnerPlatformDateUnknownLine: 'Plataforma homologada asociada: {platform}, en la lista oficial.',
    includedLine: 'La facturación electrónica se anuncia incluida en la suscripción.',
    notIncludedLine: 'Todo o parte del servicio se vende aparte: revisa tu plan.',
    publisherSourceLabel: 'Página del editor, consultada el {readAt}',
    publisherSourceDatedLabel: 'Página del editor fechada el {sourceDate}, consultada el {readAt}',
    officialSourceLabel: 'Lista oficial de plataformas homologadas, DGFiP, {listDate}',
    stepsTitle: 'Lo que haría en tu lugar',
    steps: {
      accredited: [
        'Activa la facturación electrónica en los ajustes del software, con la cuenta del representante legal.',
        'Comprueba en el directorio que tu SIREN tiene una dirección de recepción activa.',
        'Avisa a tus principales proveedores del canal a utilizar, y prueba una factura recibida.',
      ],
      pending: [
        'Pide al editor una fecha para el registro definitivo, por escrito.',
        'Mientras tanto, designa una plataforma homologada para recibir, aunque cambies después.',
        'Guarda la respuesta del editor: es lo que demuestra una gestión seria en caso de control.',
      ],
      connected: [
        'En tu cuenta, comprueba que la conexión a la plataforma está activada y que la inscripción en el directorio está hecha.',
        'Lee lo que incluye tu plan: algunos editores cobran la sincronización aparte.',
        'Prueba una factura recibida de un proveedor antes de fin de año.',
      ],
      compatibleUnnamed: [
        'Escribe al editor: «¿Qué plataforma homologada utilizáis para mis facturas, y desde cuándo?»',
        'Comprueba el nombre obtenido en el campo de arriba, o en la lista oficial.',
        'Sin respuesta clara en quince días, designa tú mismo una plataforma homologada para la recepción.',
      ],
      announced: [
        'No cuentes con un anuncio: designa ya una plataforma homologada para recibir tus facturas.',
        'Pide al editor un calendario por escrito y qué pasará con tus facturas mientras tanto.',
        'Vuelve a comprobar el nombre en la lista oficial en cada actualización.',
      ],
      none: [
        'Elige una plataforma homologada con plan gratuito para la recepción (lista más abajo en esta página).',
        'Inscribe tu empresa en el directorio con la cuenta del representante legal.',
        'Antes de septiembre de 2027, pasa tus presupuestos y facturas a una herramienta que emita en formato electrónico.',
      ],
      publicSector: [
        'Mantén Chorus Pro para tus clientes públicos.',
        'Elige una plataforma homologada, o un programa conectado, para tus clientes privados.',
        'Comprueba que ambas direcciones figuran en el directorio.',
      ],
      ppf: [
        'Elige una plataforma homologada de la lista oficial; varias son gratuitas para la recepción.',
        'Inscribe tu empresa en el directorio a través de esa plataforma.',
        'Si ya emites, comprueba que tu software está conectado a esa plataforma o a otra.',
      ],
      unknown: [
        'Pregunta al editor, por escrito: «¿Sois plataforma homologada, o conectados a cuál?»',
        'Comprueba el nombre que te dé en el campo de arriba.',
        'Mientras tanto, designa una plataforma homologada para la recepción: es obligatorio desde el 1 de septiembre de 2026.',
      ],
    },
    disclaimer:
      'Veredicto basado en la lista oficial de la DGFiP del 13 de octubre de 2026 y en las páginas de los editores revisadas el 23 de octubre de 2026. Un editor puede cambiar de socio u obtener su registro después de esa fecha: la lista oficial prevalece.',
    idleCtaIntro:
      '¿Tus facturas salen de una herramienta propia, de un software de gestión o de una hoja de cálculo, y no sabes cómo conectarla? Descríbeme tu caso, respondo en 24 horas.',
    idleCtaLabel: 'Describir mi caso',
    ctaIntro:
      '¿Quieres que alguien se encargue? Compruebo tu situación, conecto tu herramienta y automatizo el envío. Primera conversación gratuita, respuesta en 24 horas.',
    ctaLabels: {
      accredited: 'Que revisen mi configuración',
      pending: 'Que me aconsejen una plataforma',
      connected: 'Que revisen mi conexión',
      compatibleUnnamed: 'Que me ayuden a aclararlo',
      announced: 'Que me aconsejen una plataforma',
      none: 'Equiparme antes de 2027',
      publicSector: 'Que me aconsejen una plataforma',
      ppf: 'Que me aconsejen una plataforma',
      unknown: 'Que me ayuden a aclararlo',
    },
    serviceLinkLabel: 'Conectar un software de gestión o una herramienta propia: cómo trabajo',
  },
  mobileContactBar: {
    text: '¿Dudas sobre tu software o tu herramienta propia?',
    buttonLabel: 'Describir mi caso',
  },
  facts: {
    anchorId: 'reforma',
    eyebrow: 'Lo que es cierto hoy',
    title: 'La factura electrónica en Francia, en seis hechos comprobados',
    intro:
      'El calendario se fijó y luego se confirmó: sin aplazamiento. Esto es lo que dicen las fuentes oficiales, revisadas el 23 de octubre de 2026.',
    facts: [
      {
        contextLabel: '1 de septiembre de 2026',
        title: 'Recibir facturas electrónicas es obligatorio para todas las empresas',
        text: 'Desde el 1 de septiembre de 2026, toda empresa establecida en Francia y sujeta al IVA, microempresas incluidas, debe poder recibir facturas electrónicas a través de una plataforma homologada. La emisión es obligatoria desde la misma fecha para las grandes y medianas empresas, y desde el 1 de septiembre de 2027 para las pymes, las pequeñas empresas y las microempresas.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, noticia del 1 de septiembre de 2026',
        sourceUrl: E_INVOICING_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Comunicado del 1 de septiembre de 2026',
        title: 'Ninguna sanción en 2026, pero ni aplazamiento ni suspensión',
        text: 'El Gobierno anunció que en 2026 no se aplicaría ninguna sanción a las empresas con una dificultad real, documentada y seguida de acciones correctivas. La guía de arranque de la DGFiP (julio de 2026) lo precisa: esta tolerancia «no es ni un aplazamiento ni una suspensión de la obligación». Una empresa que no ha iniciado nada no está cubierta.',
        sourceName: 'Compta Online, 5 de octubre de 2026, según el comunicado y la guía de la DGFiP',
        sourceUrl: E_INVOICING_SOURCES.comptaOnlineTolerance,
      },
      {
        contextLabel: '142 registradas, 14 pendientes',
        title: 'La lista oficial, y solo ella, da fe',
        text: 'La DGFiP publica la lista de plataformas homologadas en impots.gouv.fr: a 13 de octubre de 2026, 142 operadores cumplen todas las condiciones, pruebas de interoperabilidad incluidas, y 14 han presentado un expediente completo pendiente de registro definitivo. Un logotipo de «plataforma homologada» en la web de un editor no prueba nada; los programas que no son plataforma llevan la etiqueta «solución compatible» y pasan por un socio.',
        sourceName:
          'impots.gouv.fr, «Je consulte la liste des plateformes agréées», actualización del 13 de octubre de 2026',
        sourceUrl: E_INVOICING_SOURCES.officialList,
      },
      {
        contextLabel: 'Directorio',
        title: 'Tu dirección de recepción debe existir en el directorio',
        text: 'Abierto en septiembre de 2025, el directorio de la facturación electrónica recoge las empresas sujetas y, para cada una, su plataforma homologada y sus direcciones de facturación. Sin plataforma designada no tienes dirección activa: tus proveedores no pueden enviarte una factura electrónica, y la administración recomienda iniciar el trámite sin esperar.',
        sourceName: 'economie.gouv.fr, «Qu’est-ce que l’annuaire de la facturation électronique ?»',
        sourceUrl: E_INVOICING_SOURCES.economieGouvDirectory,
      },
      {
        contextLabel: 'Portal público',
        title: 'El portal público ya no transmite facturas',
        text: 'El portal público de facturación ya no emite ni recibe facturas: lleva el directorio y concentra los datos para la administración. Por tanto no existe una opción pública gratuita para emitir. En cambio, varias plataformas homologadas anuncian un plan gratuito, entre ellas Abby, Indy, Tiime y Dougs para las pequeñas empresas.',
        sourceName:
          'Compta Online, 5 de octubre de 2026; planes gratuitos según las páginas de los editores, relevamiento del 20 de octubre de 2026',
        sourceUrl: E_INVOICING_SOURCES.comptaOnlineTolerance,
      },
      {
        contextLabel: 'Multas previstas',
        title: 'Multas con tope, suspendidas en 2026',
        text: 'No emitir una factura electrónica: 50 € por factura, con un tope de 15 000 € al año. Recepción fuera de una plataforma homologada: requerimiento, luego 500 €, luego 1000 € por cada nuevo periodo de tres meses. Datos de transacción y de pago no transmitidos: 500 €, con un tope de 15 000 € al año. Ninguna de estas sanciones se aplica en 2026.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, noticia del 1 de septiembre de 2026',
        sourceUrl: E_INVOICING_SOURCES.servicePublicNews,
      },
    ],
    calloutEmphasizedIntro: 'Lo que hago por ti:',
    calloutText:
      'compruebo tu situación (software, directorio, plan), conecto tu software de gestión o tu herramienta propia a una plataforma homologada, y automatizo la salida de presupuestos y facturas. A distancia, primera conversación gratuita.',
  },
  timeline: {
    anchorId: 'calendario',
    eyebrow: 'El calendario',
    title: 'Del directorio a la última fecha límite, las fechas que cuentan',
    intro:
      'Seis fechas, desde la apertura del directorio hasta la obligación de emitir para las empresas más pequeñas.',
    items: [
      {
        title: 'Septiembre de 2025: abre el directorio',
        description: 'Las empresas pueden declarar su plataforma homologada y sus direcciones de facturación.',
      },
      {
        title: 'Diciembre de 2025: primeros registros',
        description:
          'Pennylane el 11, Qonto, Tiime y Cegid el 18, Sage el 22 y Sellsy el 24 de diciembre obtienen su número (lista de la DGFiP).',
      },
      {
        title: 'Verano de 2026: las «PDP» pasan a ser «plataformas homologadas»',
        description:
          'Nuevo nombre, mismas obligaciones; la DGFiP publica los logotipos «plataforma homologada» y «solución compatible».',
      },
      {
        title: '1 de septiembre de 2026: recepción para todos, emisión para las grandes empresas',
        description: 'Toda empresa sujeta debe poder recibir; las grandes y medianas empresas emiten.',
      },
      {
        title: 'Hasta finales de 2026: tolerancia en las sanciones',
        description: 'Ninguna sanción para una empresa con dificultad real y comprometida con una gestión seria.',
      },
      {
        title: '1 de septiembre de 2027: emisión y e-reporting para pymes, pequeñas empresas y microempresas',
        description:
          'Todas las facturas a clientes profesionales pasan por una plataforma; las ventas a particulares se declaran.',
      },
    ],
  },
  concerned: {
    anchorId: 'afectados',
    eyebrow: 'Quién está afectado',
    title: 'Artesanos, comercios, microempresas, asociaciones: quién tiene que actuar',
    intro:
      'La reforma afecta a las empresas sujetas al IVA establecidas en Francia, sea cual sea su tamaño. Tres casos se repiten en las preguntas que recibo.',
    items: [
      {
        title: 'Artesanos, comerciantes, autónomos',
        description:
          'Recibir a través de una plataforma homologada desde el 1 de septiembre de 2026; emitir las facturas a clientes profesionales a través de una plataforma desde el 1 de septiembre de 2027.',
      },
      {
        title: 'Microempresas exentas de IVA',
        description:
          'También afectadas: la exención evita cobrar el IVA, no la facturación electrónica. Recepción desde 2026, emisión en 2027 para los clientes profesionales.',
      },
      {
        title: 'Ventas a particulares y clientes públicos',
        description:
          'Sin factura electrónica para un particular: un e-reporting de las ventas a partir de 2027. Para el Estado y las administraciones locales, Chorus Pro sigue siendo el canal.',
      },
    ],
  },
  softwareTable: {
    anchorId: 'programas',
    eyebrow: 'Programa por programa',
    title: 'Los programas de facturación habituales y su estado',
    intro:
      'Veinticuatro herramientas usadas por pequeñas empresas y artesanos en Francia, con lo que dice la lista oficial o, en su defecto, la página del editor. Estado revisado el 23 de octubre de 2026.',
    softwareColumnLabel: 'Software',
    statusColumnLabel: 'Estado',
    platformColumnLabel: 'Plataforma homologada',
    statusLabels: {
      accredited: 'Plataforma homologada',
      connected: 'Solución compatible, conectada',
      compatibleUnnamed: 'Solución compatible, plataforma sin nombrar',
      announced: 'Anunciado, no está en la lista',
      none: 'No es un programa de factura electrónica',
      publicSector: 'Solo sector público',
      ppf: 'Portal público',
    },
    noPlatformLabel: 'sin precisar',
    officialSourceTemplate: 'lista de la DGFiP del {listDate}',
    publisherSourceTemplate: 'página del editor, {sourceDate}',
    calloutEmphasizedIntro: '¿Tu software no está en la lista?',
    calloutText:
      'Escribe su nombre en el comprobador de arriba: también busca entre las 142 plataformas registradas. Si no lo encuentra, pregunta al editor por escrito y comprueba aquí su respuesta.',
  },
  guides: {
    anchorId: 'guias',
    eyebrow: 'Qué hacer, según tu software',
    title: 'El paso a paso, programa por programa',
    intro:
      'Lo que dice el propio editor, y lo que te queda por hacer. Primero las soluciones compatibles, porque es ahí donde hay algo que comprobar.',
    accreditedTemplate:
      '{name} es plataforma homologada desde el {date}: activa la facturación electrónica en el software con la cuenta del representante legal, comprueba tu dirección en el directorio, y no tienes nada más que comprar.',
    accreditedDateUnknownTemplate:
      '{name} figura en la lista oficial de plataformas homologadas: activa la facturación electrónica en el software, comprueba tu dirección en el directorio, y no tienes nada más que comprar.',
    connectedPlatformTemplate: ' Plataforma homologada: {platform}, registrada el {platformDate}.',
  },
  freePlatforms: {
    anchorId: 'gratuitas',
    eyebrow: 'Sin software hoy',
    title: 'Las plataformas homologadas que anuncian un plan gratuito',
    intro:
      'Si facturas en Excel o en papel, estas son las plataformas de la lista oficial que se dirigen a las pequeñas empresas y anuncian un plan gratuito (páginas de los editores, relevamiento del 20 de octubre de 2026). Compruébalo al inscribirte: un plan gratuito puede cambiar.',
    itemTemplate: 'Registrada el {date}. Plan gratuito anunciado por el editor.',
    itemDateUnknownTemplate: 'En la lista oficial. Plan gratuito anunciado por el editor.',
  },
  method: {
    eyebrow: 'Mi método',
    title: 'Cuatro pasos para cumplir sin dedicarle las noches',
    intro:
      'La misma secuencia que con mis clientes, solo si tu software está homologado, conmigo si hay que conectar una herramienta.',
    steps: [
      {
        label: 'Comprobar',
        title: 'El nombre, en la lista oficial',
        description: 'El comprobador de arriba, o la lista de la DGFiP. Un logotipo en una web comercial no basta.',
      },
      {
        label: 'Designar',
        title: 'Una plataforma para recibir',
        description:
          'Activación en el software, o alta en una plataforma gratuita. Siempre con la cuenta del representante legal.',
      },
      {
        label: 'Controlar',
        title: 'El directorio y una primera factura',
        description:
          'Tu SIREN debe tener una dirección activa; pide a un proveedor que te envíe una factura por ese canal.',
      },
      {
        label: 'Conectar',
        title: 'Tus presupuestos y facturas propios',
        description:
          'Si tus facturas salen de un software de gestión o de una herramienta a medida, la conecto a una plataforma homologada y automatizo el envío.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Tus preguntas sobre la factura electrónica y tu software',
    questions: [
      {
        question: 'Soy microempresario exento de IVA: ¿estoy afectado?',
        answer:
          'Sí. La reforma se aplica a las empresas sujetas al IVA establecidas en Francia, y la exención no quita la condición de sujeto: solo evita cobrar el impuesto. Debes poder recibir facturas electrónicas desde el 1 de septiembre de 2026 y emitir las de tus clientes profesionales a través de una plataforma homologada desde el 1 de septiembre de 2027. Tus ventas a particulares no dan lugar a una factura electrónica, sino a un e-reporting a partir de 2027.',
      },
      {
        question: 'Hago mis facturas en Excel, Word o una plantilla PDF: ¿qué debo hacer?',
        answer:
          'Para la recepción, nada espera a 2027: elige una plataforma homologada, varias son gratuitas (Abby, Indy, Tiime y Dougs anuncian un plan sin suscripción), date de alta con la cuenta del representante legal, y tu SIREN tendrá una dirección en el directorio. Para la emisión, tienes hasta el 1 de septiembre de 2027 para pasar tus presupuestos y facturas a una herramienta que produzca el formato electrónico. Un archivo Excel o un PDF enviado por correo electrónico ya no será una factura válida entre profesionales.',
      },
      {
        question: '¿Qué diferencia hay entre una plataforma homologada y una solución compatible?',
        answer:
          'La plataforma homologada está registrada por la DGFiP: es ella quien transmite las facturas y los datos a la administración, y aparece en la lista oficial. La solución compatible es un programa que prepara las facturas en el formato correcto y las confía a una plataforma homologada asociada; no está registrada pero puede llevar una etiqueta oficial. EBP, Evoliz, Henrri, Tolteck, Obat o Batappli están en ese caso. Los dos montajes son conformes; lo que importa es saber qué plataforma homologada hay detrás.',
      },
      {
        question: '¿Existe una plataforma homologada gratuita?',
        answer:
          'Sí, varias plataformas de la lista oficial anuncian un plan gratuito, en general para la recepción y un volumen limitado de emisión: Abby, Indy, Tiime, Dougs (facturación gratuita), Macompta.fr, y actores más técnicos como B2BRouter o Super PDP. La lista de esta página los recoge. Lee bien lo que está incluido: la emisión a partir de cierto número de facturas, el archivo o la contabilidad suelen ser de pago.',
      },
      {
        question: 'Solo emito en septiembre de 2027: ¿tengo que elegir una plataforma ahora de todos modos?',
        answer:
          'Sí, para la recepción, obligatoria desde el 1 de septiembre de 2026. Sin plataforma designada, tu empresa no tiene dirección activa en el directorio, y tus proveedores, incluidas las grandes empresas ya obligadas a emitir, no pueden enviarte sus facturas por el circuito oficial. La tolerancia de 2026 protege a las empresas comprometidas con el trámite, no a las que no han hecho nada.',
      },
      {
        question: 'Mi software dice «compatible» pero no está en la lista: ¿es un problema?',
        answer:
          'No, si el editor nombra la plataforma homologada que utiliza y ese nombre figura en la lista oficial: es el caso de Evoliz (Chaintrust), Obat (Iopole), Batappli (Cecurity) o EBP (Shine). Sí, si nadie puede decirte cuál. Pídelo por escrito, comprueba el nombre en el comprobador y guarda la respuesta.',
      },
      {
        question: '¿Puedo usar dos plataformas, una para recibir y otra para emitir?',
        answer:
          'Sí. El directorio permite declarar una plataforma para la recepción y otra para la emisión, y el proveedor y el cliente pueden estar en plataformas distintas: están obligadas a interoperar. Es práctico cuando tu programa de presupuestos emite a través de un socio y prefieres recibir en una plataforma gratuita.',
      },
      {
        question: '¿Qué arriesga una empresa que no ha hecho nada?',
        answer:
          'En 2026, nada: el Gobierno anunció que no se aplicaría ninguna sanción a las empresas con dificultad real y comprometidas con el trámite. Después, la ley prevé 50 € por factura no emitida en formato electrónico (tope de 15 000 € al año), un requerimiento y luego 500 € y 1000 € por periodo de tres meses por la recepción fuera de plataforma, y 500 € por incumplimiento del e-reporting. El riesgo más concreto sigue siendo comercial: clientes que ya no pueden pagarte con una factura no conforme.',
      },
      {
        question: '¿Qué es el directorio, y cómo compruebo mi dirección?',
        answer:
          'Es el registro central, llevado por la administración, que indica para cada empresa sujeta su plataforma homologada y sus direcciones de facturación. Tu plataforma te inscribe en él cuando activas el servicio; la mayoría muestra después tu dirección en los ajustes. La prueba más sencilla: pedir a un proveedor ya equipado que te envíe una factura por el circuito oficial.',
      },
      {
        question:
          'Mis facturas salen de un software de gestión a medida o de una herramienta propia: ¿cómo lo conecto?',
        answer:
          'Es mi trabajo. Una herramienta propia no necesita convertirse en plataforma homologada: debe producir las facturas en uno de los formatos previstos (Factur-X, UBL o CII) y confiarlas a una plataforma homologada a través de su API, que se encarga de la transmisión, del directorio y del e-reporting. Empiezo con una auditoría de lo que hace tu herramienta, luego conecto la plataforma más adecuada a tu volumen, y automatizo el envío y el seguimiento de los estados. Descríbeme tu caso, respondo en 24 horas.',
      },
      {
        question: '¿Basta con Chorus Pro?',
        answer:
          'No. Chorus Pro es el portal de las facturas dirigidas al Estado francés, a las administraciones locales y a los organismos públicos, y lo sigue siendo. Para tus clientes privados necesitas una plataforma homologada o un programa conectado a una. Los dos canales coexisten.',
      },
      {
        question: '¿Por qué se ha leído la lista oficial en una copia archivada?',
        answer:
          'Porque impots.gouv.fr muestra una página de mantenimiento desde el 21 de octubre de 2026, tras el fallo de PHP corregido ese día (ver mi comprobador del fallo de PHP). La lista de esta página es la que la DGFiP actualizó el 13 de octubre, leída el 23 de octubre en la copia del 16 de octubre conservada por Internet Archive. En cuanto vuelva el sitio, releo la lista y actualizo la fecha de esta página.',
      },
      {
        question: '¿Qué hace exactamente esta herramienta, y qué no ve?',
        answer:
          'Busca el nombre que escribes en la lista oficial de plataformas homologadas (142 registradas y 14 expedientes pendientes a 13 de octubre de 2026) y en mi relevamiento de 24 programas habituales, cuya página sobre facturación electrónica leí el 23 de octubre de 2026. No se conecta a nada, no guarda nada y no envía lo que escribes. No ve tu plan de suscripción, el estado real de tu conexión ni tu inscripción en el directorio: solo tu cuenta, o el editor, lo dicen.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro: 'Tres lecturas sobre la factura electrónica y las herramientas de presupuestos y facturación.',
  },
  contactCta: {
    title: '¿Tu herramienta hace tus facturas y no sabes si pasará en 2027?',
    description:
      'Descríbemela en tres líneas: software del mercado, herramienta propia, hoja de cálculo. En 24 horas te digo qué hay que hacer, y qué puedo conectar o automatizar.',
    button: 'Describir mi caso',
  },
}
