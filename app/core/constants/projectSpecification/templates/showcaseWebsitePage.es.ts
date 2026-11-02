import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_SHOWCASE_WEBSITE_PAGE_ES: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'showcaseWebsite',
  meta: {
    title: 'Pliego de condiciones web corporativa: plantilla Word y PDF',
    description:
      'Plantilla de pliego de condiciones de web corporativa en Word y ejemplo relleno en PDF: páginas, funciones, presupuesto, ley francesa. Gratis, sin e-mail.',
    inLanguage: 'es-ES',
    schemaAbout: 'Pliego de condiciones de una web corporativa',
  },
  breadcrumbLabel: 'Web corporativa',
  shareImage: {
    titleLines: ['Pliego de condiciones', 'web corporativa'],
    highlight: 'web corporativa',
    subtitle: 'Plantilla Word y ejemplo relleno en PDF',
    badge: 'Gratis · sin e-mail',
    alt: 'Plantilla gratuita de pliego de condiciones para una web corporativa, en Word, con un ejemplo relleno en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Pliego de condiciones web corporativa',
    titleAfter: ': plantilla gratis en Word y PDF, con un ejemplo relleno',
    reassurances: ['Plantilla + ejemplo relleno', 'Word editable', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un pliego de condiciones de web corporativa en nueve partes, listo para rellenar, y el mismo documento relleno para un fontanero y calefactor de Bruz, en Francia. Ocupa pocas páginas: suficiente para recibir presupuestos comparables y lo bastante corto para leerse entero. Ya incluye las páginas de la web, las funcionalidades clasificadas por prioridad, el presupuesto y la propiedad del dominio.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Son las preguntas que hago antes de presupuestar una web corporativa.',
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para un artesano, un comercio o un autónomo que prepara su web. El Word se rellena y se modifica; el PDF muestra el mismo documento relleno de principio a fin.',
    templateLabel: 'Descargar la plantilla Word',
    templateMeta: 'Word, 9 partes que rellenar',
    exampleLabel: 'Descargar el ejemplo relleno',
    exampleMeta: 'PDF, un fontanero en Bruz',
    generatorText: 'Más rápido: responde a cinco preguntas y el documento se redacta solo, a tu nombre.',
    generatorLinkLabel: 'Rellenarlo en 5 minutos con el generador',
    footnote: 'Plantilla de uso libre, para adaptar a tu proyecto y enviar a cualquier proveedor.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una plantilla para rellenar y un ejemplo completo',
    intro:
      'El Word recoge las nueve partes con, bajo cada título, una indicación en gris que sustituir por tu texto. El PDF es el mismo documento relleno, para ver el nivel de detalle esperado.',
    documents: [
      {
        title: 'La plantilla para rellenar',
        format: 'Word, editable en Word, LibreOffice, Google Docs o Pages',
        items: [
          'Presentación de la empresa y del proyecto, nuevo o rediseño',
          'Objetivos, cada uno con su indicador, y clientes objetivo',
          'Las páginas tipo de una web corporativa, para tachar o completar',
          'Diez funcionalidades que clasificar en imprescindible o deseable',
          'Contenidos e identidad visual, requisitos técnicos y legales',
          'Presupuesto, plazo, mantenimiento y lo que debe incluir cada presupuesto',
        ],
      },
      {
        title: 'El ejemplo relleno',
        format: 'PDF, Plomberie Martin en Bruz (empresa ficticia)',
        items: [
          'Una empresa de 2 a 10 personas, sin web hoy, que quiere llamadas y solicitudes de presupuesto',
          'Tres objetivos, cada uno con la forma de medirlo',
          'Ocho páginas, entre ellas una página por servicio',
          'Siete funcionalidades clasificadas en imprescindibles y deseables',
          'Un presupuesto de 1500 a 5000 €, una puesta en línea en un plazo de tres meses, el mantenimiento presupuestado aparte',
          'La lista de lo que debe incluir cada presupuesto para compararlo con los demás',
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Ejemplo de pliego de condiciones',
    title: 'El ejemplo relleno, para leer aquí',
    intro:
      'La web corporativa de un fontanero y calefactor en Bruz, tal como la redacta el generador a partir de cinco respuestas.',
    expandLabel: 'Leer todo el ejemplo',
    collapseLabel: 'Contraer el ejemplo',
    generatorLinkLabel: 'Hacer uno igual a mi nombre',
    answers: {
      projectType: 'showcaseWebsite',
      kind: 'creation',
      companyName: 'Plomberie Martin',
      activity: 'fontanero y calefactor: reparaciones, calderas y cuartos de baño',
      city: 'Bruz',
      companySize: 'small',
      goals: ['google', 'quotes', 'calls'],
      audience: 'consumers',
      features: ['contactForm', 'callButton', 'servicePages', 'gallery', 'reviews', 'booking', 'photoQuote'],
      contentSource: 'together',
      budget: 'from1500to5000',
      launchDate: 'threeMonths',
    },
  },
  sitemap: {
    eyebrow: 'Estructura de la web',
    title: 'Las páginas de una web corporativa',
    intro:
      'Es la parte que fija el precio. Parte de este esquema, tacha lo que no te afecta y añade una página por servicio.',
    ariaLabel:
      'Esquema de una web corporativa: el inicio, luego los servicios con una página por servicio, los trabajos realizados, las reseñas de clientes, la página quiénes somos y el contacto; en el pie de página, el aviso legal y la privacidad.',
    rootLabel: 'Inicio',
    branches: [
      { label: 'Servicios', children: ['Reparaciones y fugas', 'Caldera y calefacción', 'Cuarto de baño'] },
      { label: 'Trabajos realizados', children: [] },
      { label: 'Reseñas de clientes', children: [] },
      { label: 'Quiénes somos', children: [] },
      { label: 'Contacto', children: [] },
    ],
    footerNote: 'En el pie de página: aviso legal, privacidad y cookies',
    notes: [
      {
        title: 'Una página por servicio',
        text: 'Es lo que Google lee primero: «reparación de calderas Bruz» encuentra una página que habla de ello.',
      },
      {
        title: 'De seis a diez páginas bastan',
        text: 'Es el tamaño de la mayoría de las webs de artesanos. Un blog se prevé aparte, si hay alguien para escribirlo.',
      },
      {
        title: 'Las páginas legales, abajo',
        text: 'El aviso legal y la privacidad son obligatorios, pero no tienen su sitio en el menú.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la plantilla en cuatro pasos',
    intro: 'Cuenta una hora a mano. Sustituye cada indicación gris por tu texto y borra lo que no te afecta.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Empieza por la empresa y los objetivos',
        description: 'Cinco líneas sobre ti, tres objetivos con su indicador. El resto del documento sale de ahí.',
      },
      {
        label: 'Paso 2',
        title: 'Enumera las páginas y clasifica las funcionalidades',
        description:
          'Conserva la estructura tipo, tacha lo que no te afecta y añade una página por servicio. Luego clasifica cada funcionalidad: imprescindible el día de la puesta en línea, o deseable más adelante.',
      },
      {
        label: 'Paso 3',
        title: 'Di quién aporta qué',
        description: 'Textos, fotos, logo, acceso al dominio: quién se encarga, y para cuándo.',
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
    title: 'Cuatro obligaciones que escribir en el pliego de condiciones',
    intro:
      'Afectan a todas las webs de empresa en Francia, incluso de una sola página. La plantilla las prevé en la parte «requisitos», para que se incluyan en el presupuesto desde el principio.',
    facts: [
      {
        contextLabel: 'Toda web profesional',
        title: 'El aviso legal',
        text: 'Nombre o denominación, dirección, número SIREN o SIRET, medio de contacto y proveedor de alojamiento de la web, en una página accesible desde todas las demás.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37351',
      },
      {
        contextLabel: 'Antes de cualquier rastreador',
        title: 'Las cookies',
        text: 'Ningún rastreador publicitario sin el consentimiento del visitante, y un rechazo tan sencillo como la aceptación. Algunas mediciones de audiencia están exentas.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F31228',
      },
      {
        contextLabel: 'Formulario de contacto',
        title: 'Los datos personales',
        text: 'Decir para qué sirven los datos enviados, cuánto tiempo los conservas, y remitir a tu política de privacidad.',
        sourceName: 'CNIL',
        sourceUrl: 'https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence',
      },
      {
        contextLabel: 'Clientes particulares',
        title: 'El mediador de consumo',
        text: 'Si trabajas para particulares, la web indica el mediador al que tus clientes pueden acudir en caso de litigio.',
        sourceName: 'economie.gouv.fr',
        sourceUrl: 'https://www.economie.gouv.fr/mediation-conso',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Pliego de condiciones de web corporativa: tus preguntas',
    questions: [
      {
        question: '¿Qué incluir en el pliego de condiciones de una web corporativa?',
        answer:
          'Nueve partes: la empresa, el proyecto, los objetivos y el público, las páginas, las funcionalidades, los contenidos, los requisitos técnicos y legales, el presupuesto y el plazo, y lo que debe incluir cada presupuesto. La plantilla las recoge en este orden.',
      },
      {
        question: '¿Cuántas páginas debe tener una web corporativa?',
        answer:
          'De seis a diez páginas en general: el inicio, una página por servicio, los trabajos realizados, la página quiénes somos y el contacto, más el aviso legal y la privacidad en el pie de página.',
      },
      {
        question: '¿Cuánto cuesta una web corporativa?',
        answer:
          'En Dibodev, 290 € una sola vez con plantilla, dominio y alojamiento incluidos, o desde 1500 € a medida. El barómetro del precio de una página web compara las tarifas publicadas por 20 proveedores franceses.',
      },
      {
        question: '¿Sirve de algo un pliego de condiciones para una web de 290 €?',
        answer:
          'No. Para una web con plantilla, basta con una llamada de 30 minutos. El pliego de condiciones sirve cuando pides varios presupuestos o una web a medida.',
      },
      {
        question: '¿Word o PDF?',
        answer:
          'El Word se rellena y se modifica en Word, LibreOffice, Google Docs o Pages. El PDF es el ejemplo relleno, para leer o imprimir.',
      },
      {
        question: '¿La plantilla es gratis de verdad?',
        answer: 'Sí, sin registro ni e-mail. Puedes enviarla a cualquier proveedor, no solo a mí.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Las otras plantillas',
    title: '¿Tu proyecto no es una web corporativa?',
    generatorCard: {
      projectType: 'showcaseWebsite',
      eyebrow: 'Generador gratuito',
      title: 'El tuyo en 5 minutos',
      text: 'Cinco preguntas, y el documento se redacta a tu nombre mientras respondes. Word o PDF, sin e-mail.',
      note: 'Web corporativa, tienda online, software de gestión o app móvil',
    },
    generatorLinkLabel: 'Abrir el generador',
  },
  contactCta: {
    title: '¿Ya has rellenado tu pliego de condiciones?',
    description:
      'Envíamelo: te respondo en 24 horas, con un precio o con mis preguntas. Si te basta con una web con plantilla de 290 €, te lo digo.',
    button: 'Pedir un presupuesto',
    generatorLinkLabel: 'Rellenarlo con el generador',
  },
  mobileBar: {
    text: 'Plantilla gratis, sin e-mail',
    button: 'Descargar la plantilla Word',
  },
}
