import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_BUSINESS_SOFTWARE_PAGE_ES: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'businessSoftware',
  meta: {
    title: 'Pliego de condiciones de software de gestión: modelo gratis',
    description:
      'Plantilla Word de pliego de condiciones para un software de gestión a medida, con ejemplo rellenado en PDF: pantallas, roles, presupuesto. Gratis, sin e-mail.',
    inLanguage: 'es-ES',
    schemaAbout: 'Pliego de condiciones de un software de gestión a medida',
  },
  breadcrumbLabel: 'Software de gestión',
  shareImage: {
    titleLines: ['Pliego de condiciones', 'de software de gestión'],
    highlight: 'software de gestión',
    subtitle: 'Plantilla Word y ejemplo rellenado en PDF',
    badge: 'Gratis · sin e-mail',
    alt: 'Plantilla gratis de pliego de condiciones para un software de gestión, en Word, con un ejemplo rellenado en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Pliego de condiciones de software de gestión',
    titleAfter: ': plantilla gratis en Word y PDF, con un ejemplo rellenado',
    reassurances: ['Plantilla + ejemplo rellenado', 'Word editable', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un pliego de condiciones de software de gestión en nueve partes, listo para rellenar, y el mismo documento rellenado para una empresa de limpieza de Cesson-Sévigné, cerca de Rennes, en Francia. Sirve si tu empresa quiere sustituir sus archivos Excel, o su programa de gestión actual, por un software a medida. Las pantallas, los roles de los usuarios, los datos que hay que migrar, el presupuesto y la propiedad del código ya están previstos.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Son las preguntas que hago antes de presupuestar un software de gestión.',
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para tu empresa, si quieres sustituir tus archivos Excel o tu programa de gestión. El Word se rellena y se modifica, el PDF muestra el mismo documento rellenado de principio a fin.',
    templateLabel: 'Descargar la plantilla Word',
    templateMeta: 'Word, 9 partes para rellenar',
    exampleLabel: 'Descargar el ejemplo rellenado',
    exampleMeta: 'PDF, una empresa de limpieza',
    generatorText: 'Más rápido: responde a cinco preguntas y el documento se redacta solo, a tu nombre.',
    generatorLinkLabel: 'Rellenarlo en 5 minutos con el generador',
    footnote: 'Plantilla de uso libre, para adaptar a tu proyecto y enviar a cualquier proveedor.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una plantilla para rellenar y un ejemplo completo',
    intro:
      'El Word recoge las nueve partes con, bajo cada título, una indicación en gris que sustituyes por tu texto. El PDF es el mismo documento rellenado, para ver el nivel de detalle esperado.',
    documents: [
      {
        title: 'La plantilla para rellenar',
        format: 'Word, editable en Word, LibreOffice, Google Docs o Pages',
        items: [
          'Presentación de la empresa y del proyecto: proyecto nuevo o rediseño, herramientas que usas hoy',
          'Objetivos, cada uno con su medida, y usuarios previstos',
          'Las seis pantallas típicas de un software de gestión, para tachar o completar',
          'Diez funcionalidades para clasificar en imprescindible o deseable',
          'Los datos que hay que migrar (archivos Excel u otro software), los requisitos técnicos y legales',
          'Presupuesto, plazo, mantenimiento y lo que debe incluir cada presupuesto que recibas',
        ],
      },
      {
        title: 'El ejemplo rellenado',
        format: 'PDF, Propreté Bernard en Cesson-Sévigné (empresa ficticia)',
        items: [
          'Una empresa de limpieza de 11 a 50 personas, que crea una herramienta para la oficina y los equipos de campo',
          'Tres objetivos, cada uno con su medida: sustituir los archivos Excel, planificar los equipos, tener cifras fiables',
          'Cinco pantallas: inicio de sesión, cuadro de mando, clientes, planificación, ajustes y usuarios',
          'Siete funcionalidades clasificadas en imprescindible y deseable, entre ellas el modo sin conexión y la firma en el móvil',
          `Los archivos Excel actuales que hay que migrar, un presupuesto de 5000 a 15${NBSP}000${NBSP}€ y una puesta en línea en un plazo de seis meses`,
          'El código fuente y los datos a nombre de la empresa, algo que cada presupuesto debe confirmar',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Ejemplo de pliego de condiciones',
    title: 'El ejemplo rellenado, para leer aquí',
    intro:
      'El software de gestión de una empresa de limpieza en Cesson-Sévigné, en Francia, tal como lo redacta el generador a partir de cinco respuestas.',
    expandLabel: 'Leer todo el ejemplo',
    collapseLabel: 'Plegar el ejemplo',
    generatorLinkLabel: 'Hacer lo mismo a mi nombre',
    answers: {
      projectType: 'businessSoftware',
      kind: 'creation',
      companyName: 'Propreté Bernard',
      activity: 'empresa de limpieza: oficinas, comunidades de propietarios y cristales',
      city: 'Cesson-Sévigné',
      companySize: 'medium',
      goals: ['planning', 'spreadsheets', 'figures'],
      audience: 'both',
      features: ['roles', 'dashboard', 'spreadsheetImport', 'exports', 'planning', 'offline', 'signature'],
      contentSource: 'client',
      budget: 'from5000to15000',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Mapa de pantallas',
    title: 'Las pantallas de un software de gestión',
    intro:
      'Es la parte que fija el precio. Parte de este plano, tacha lo que no te afecte y añade una pantalla por cada tarea que el software deba asumir.',
    ariaLabel:
      'Plano de un software de gestión: el cuadro de mando, luego la planificación por equipo y por centro, los clientes y centros con sus contratos, las intervenciones con la hoja de visita y la firma del cliente, los equipos, y los ajustes y usuarios; detrás de cada pantalla, una cuenta por persona, con permisos según su rol.',
    rootLabel: 'Cuadro de mando',
    branches: [
      { label: 'Planificación', children: ['Por equipo', 'Por centro'] },
      { label: 'Clientes y centros', children: ['Contratos'] },
      { label: 'Intervenciones', children: ['Hoja de visita', 'Firma del cliente'] },
      { label: 'Equipos', children: [] },
      { label: 'Ajustes y usuarios', children: [] },
    ],
    footerNote: 'Detrás de cada pantalla: una cuenta por persona, con permisos según su rol',
    notes: [
      {
        title: 'Una pantalla por tarea real',
        text: 'Parte de lo que tus equipos hacen cada semana: la planificación, la visita a un cliente, la firma. Una pantalla por tarea, con las palabras de tu oficio.',
      },
      {
        title: 'Los roles: quién ve qué',
        text: 'La oficina gestiona los clientes y la planificación; un equipo de campo ve sus intervenciones del día. Escribe estos roles en el pliego: son ellos los que fijan los permisos.',
      },
      {
        title: 'Qué se migra de los archivos Excel',
        text: 'Enumera los archivos que hay que migrar (clientes, centros, contratos) y sus columnas útiles. Una columna que nadie rellena no hace falta migrarla.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la plantilla en cuatro pasos',
    intro:
      'Sustituye cada indicación gris por tu texto y borra lo que no te afecte. Rellénala con quienes usarán el software: son ellos los que conocen las tareas reales.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Empieza por la empresa y los objetivos',
        description:
          'Cinco líneas sobre ti, lo que usas hoy (archivos Excel, software) y tres objetivos con su medida.',
      },
      {
        label: 'Paso 2',
        title: 'Enumera las pantallas y clasifica las funcionalidades',
        description:
          'Mantén las pantallas típicas y añade una pantalla por tarea real. Luego clasifica cada funcionalidad, imprescindible desde el primer día o deseable más adelante, y añade los roles: quién ve qué, quién modifica qué.',
      },
      {
        label: 'Paso 3',
        title: 'Describe los datos que hay que migrar',
        description: 'Qué archivos Excel o qué software, cuántas filas más o menos, y quién los aporta.',
      },
      {
        label: 'Paso 4',
        title: 'Da un presupuesto y una fecha',
        description:
          'Una horquilla y una fecha de puesta en línea, y luego el mismo documento a dos o tres proveedores.',
      },
    ],
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro obligaciones para escribir en el pliego de condiciones',
    intro:
      'Un software de gestión guarda datos de clientes y de empleados, y a veces facturas. La plantilla ya prevé el acceso con cuenta y las copias de seguridad: añade el resto en la parte «requisitos», para que se presupueste desde la primera oferta.',
    facts: [
      {
        contextLabel: 'Clientes y empleados',
        title: 'La protección de datos (RGPD)',
        text: 'Nombres, direcciones, teléfonos, horarios de los empleados: son datos personales, y el RGPD impone obligaciones a la empresa que los guarda. El pliego indica qué datos registra el software y quién puede verlos.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
      {
        contextLabel: 'Cada tratamiento de datos',
        title: 'El registro de actividades de tratamiento',
        text: 'Archivo de clientes, horarios de los empleados: lo que el software hace con estos datos se inscribe en el registro de actividades de tratamiento de la empresa. La lista de datos escrita en el pliego sirve para tenerlo al día.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/RGPD-le-registre-des-activites-de-traitement',
      },
      {
        contextLabel: 'Acceso y copias de seguridad',
        title: 'La seguridad de los datos',
        text: 'Acceso con cuenta, permisos según el rol, copia de seguridad diaria: la plantilla ya escribe estos puntos en los requisitos. Consérvalos, para que cada presupuesto los incluya.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/cybersecurite/securite-des-donnees',
      },
      {
        contextLabel: 'Desde el 1 de septiembre de 2026',
        title: 'La factura electrónica',
        text: 'La facturación electrónica está en vigor en Francia desde el 1 de septiembre de 2026. Si el software debe emitir facturas, escríbelo ya en el pliego, para que cada presupuesto lo tenga en cuenta.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/actualites/A18953',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Pliego de condiciones de software de gestión: tus preguntas',
    questions: [
      {
        question: '¿Qué poner en el pliego de condiciones de un software de gestión?',
        answer:
          'Nueve partes: la empresa, el proyecto, los objetivos y los usuarios, las pantallas, las funcionalidades, los datos que hay que migrar, los requisitos técnicos y legales, el presupuesto con el plazo y el mantenimiento, y por último lo que debe incluir cada presupuesto que recibas. Lo más útil para un proveedor: la lista de pantallas, el rol de cada persona y los archivos que hay que migrar. La plantilla sigue ese orden.',
      },
      {
        question: '¿Software a medida o programa del mercado?',
        answer:
          'Un programa del mercado basta cuando se adapta a tu forma de trabajar: está listo enseguida y suele pagarse por suscripción. Un software a medida tiene sentido cuando ninguno se adapta y tus equipos acaban rehaciéndolo todo en archivos Excel. El pliego sirve en los dos casos: envíalo también a los editores de software, para comparar. Si un programa del mercado te basta, te lo digo desde la primera conversación.',
      },
      {
        question: '¿Cuánto cuesta un software de gestión a medida?',
        answer: `En Dibodev, de 5000 a 15${NBSP}000${NBSP}€ a precio cerrado, fijado en el presupuesto tras una primera conversación gratuita. El precio depende del número de pantallas, de usuarios y de conexiones con tus otros programas. El mantenimiento se presupuesta aparte. El barómetro de precios del software a medida compara las tarifas publicadas por otros proveedores franceses.`,
      },
      {
        question: '¿Hay que migrar mis archivos Excel?',
        answer:
          'Sí, si todavía se usan: clientes, centros, contratos o tarifas se importan en el software, para que nadie empiece de cero. En el generador, la migración de los archivos Excel viene marcada por defecto como imprescindible. Indica en el pliego qué archivos migrar y cuáles dejar de lado.',
      },
      {
        question: '¿A quién pertenece el código del software?',
        answer:
          'A tu empresa, si el pliego y el presupuesto lo dicen. La plantilla lo escribe dos veces: en los requisitos y en lo que cada presupuesto debe confirmar. En Dibodev, el código fuente y los datos son tuyos.',
      },
      {
        question: '¿La plantilla es realmente gratis?',
        answer: 'Sí, sin registro ni e-mail. Puedes enviarla a cualquier proveedor o editor de software, no solo a mí.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Las otras plantillas',
    title: '¿Otro proyecto que no sea un software de gestión?',
    generatorCard: {
      projectType: 'businessSoftware',
      eyebrow: 'Generador gratis',
      title: 'El tuyo en 5 minutos',
      text: 'Cinco preguntas, y el documento se redacta a tu nombre mientras respondes. Word o PDF, sin e-mail.',
      note: 'Web corporativa, tienda online, software de gestión o app móvil',
    },
    generatorLinkLabel: 'Abrir el generador',
  },
  contactCta: {
    title: '¿Ya has rellenado tu pliego de condiciones?',
    description: `Envíamelo: te respondo en 24${NBSP}h, con un precio o con mis preguntas. Si un programa del mercado te basta, te lo digo.`,
    button: 'Pedir un presupuesto',
    generatorLinkLabel: 'Rellenarlo con el generador',
  },
  mobileBar: {
    text: 'Plantilla gratis, sin e-mail',
    button: 'Descargar la plantilla Word',
  },
}
