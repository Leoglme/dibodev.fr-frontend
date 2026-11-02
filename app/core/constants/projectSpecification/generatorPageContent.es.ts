import type { DibodevProjectSpecificationGeneratorPageContent } from '~/core/types/DibodevProjectSpecificationPage'

export const PROJECT_SPECIFICATION_GENERATOR_PAGE_ES: DibodevProjectSpecificationGeneratorPageContent = {
  meta: {
    title: 'Pliego de condiciones: generador gratis, modelos Word y PDF',
    description:
      '5 preguntas y tu pliego de condiciones se redacta solo: web corporativa, tienda online, software de gestión o app móvil. Gratis, sin registro, Word o PDF.',
    inLanguage: 'es-ES',
    schemaAbout: 'Pliego de condiciones de una página web, una tienda online o una aplicación',
  },
  applicationName: 'Generador de pliego de condiciones',
  breadcrumbLabel: 'Pliego de condiciones',
  shareImage: {
    titleLines: ['Pliego de condiciones', 'en 5 minutos'],
    highlight: 'Pliego de condiciones',
    subtitle: 'Web corporativa, tienda online, software de gestión o app móvil',
    badge: 'Gratis · Word y PDF',
    alt: 'Generador gratuito de pliegos de condiciones de dibodev.fr: web corporativa, tienda online, software de gestión o app móvil',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Pliego de condiciones',
    titleAfter: ' en 5 minutos: web corporativa, tienda online, software de gestión o app móvil',
    reassurances: ['5 preguntas, 5 minutos', 'Sin registro ni e-mail', 'Word y PDF'],
    aboutTitle: 'En resumen',
    description:
      'Un pliego de condiciones ocupa de cuatro a ocho páginas: la empresa, el proyecto, los objetivos y el público, las páginas o las pantallas, las funcionalidades, los contenidos, los requisitos, el presupuesto y el plazo. Este generador lo redacta en cinco minutos a partir de tus respuestas, para una web corporativa, una tienda online, un software de gestión o una app móvil. Es gratis, sin registro, en Word o en PDF, y el documento es neutro: puedes enviarlo a cualquier proveedor. Los requisitos legales que incluye siguen la normativa francesa.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. El generador hace las preguntas que yo mismo hago antes de presupuestar una web o una aplicación.',
  },
  guide: {
    eyebrow: 'Lo que contiene el documento',
    title: 'Las nueve partes de un buen pliego de condiciones',
    intro:
      'El generador las rellena por ti. Si lo escribes a mano, mantén este orden: es el orden en que lo lee un proveedor.',
    pitfallLabel: 'El error frecuente',
    items: [
      {
        title: 'Presentación de la empresa',
        text: 'Quién eres, qué vendes, a quién y dónde. Bastan cinco líneas.',
        pitfall: 'Contar la historia de la empresa en una página entera.',
      },
      {
        title: 'El proyecto',
        text: 'Proyecto nuevo o rediseño, lo que existe hoy (web, archivos, herramientas) y por qué cambiar ahora.',
        pitfall: 'Olvidar la dirección de la web o el nombre del software actual.',
      },
      {
        title: 'Objetivos y público',
        text: 'Tres objetivos como máximo, cada uno con su indicador, y los clientes o los usuarios a los que te diriges.',
        pitfall: '«Tener visibilidad», sin decir ante quién.',
      },
      {
        title: 'Las páginas o las pantallas',
        text: 'La lista de las páginas de la web, o de las pantallas de la aplicación, y lo que contiene cada una. Es la parte que fija el precio.',
        pitfall: 'Añadir páginas sobre la marcha.',
      },
      {
        title: 'Las funcionalidades',
        text: 'Formulario, citas, pago, área de clientes, modo sin conexión, clasificados en imprescindible y deseable.',
        pitfall: 'Clasificarlo todo como imprescindible.',
      },
      {
        title: 'Contenidos e identidad',
        text: 'Quién escribe los textos, de dónde salen las fotos, el logo y los colores, o los datos que migrar en el caso de una aplicación.',
        pitfall: 'Descubrir al final que nadie ha escrito los textos.',
      },
      {
        title: 'Requisitos técnicos y legales',
        text: 'Móvil, seguridad, posicionamiento, aviso legal, cookies, propiedad del dominio y del código.',
        pitfall: 'Dejar el dominio o el código a nombre del proveedor.',
      },
      {
        title: 'Presupuesto, plazo y mantenimiento',
        text: 'Una horquilla, una fecha de puesta en línea y el mantenimiento presupuestado aparte.',
        pitfall: 'Ocultar el presupuesto «para ver los precios».',
      },
      {
        title: 'Lo que debe incluir cada presupuesto',
        text: 'Un presupuesto detallado, un calendario, ejemplos, el mantenimiento y la propiedad de la web o de la aplicación.',
        pitfall: 'Comparar presupuestos que no valoran lo mismo.',
      },
    ],
  },
  templates: {
    eyebrow: 'Plantillas gratuitas',
    title: 'Cuatro plantillas para descargar, con un ejemplo relleno',
    intro:
      '¿Prefieres rellenar un documento Word? Cada plantilla recoge las nueve partes, adaptadas al tipo de proyecto, con un ejemplo completo para ver el nivel de detalle esperado.',
    linkLabel: 'Ver la plantilla',
    cards: [
      {
        projectType: 'showcaseWebsite',
        eyebrow: 'Word + ejemplo en PDF',
        title: 'Pliego de condiciones web corporativa',
        text: 'Inicio, servicios, trabajos realizados, contacto: la plantilla de los artesanos, los comercios y los autónomos.',
        note: 'Ejemplo relleno: un fontanero en Bruz',
      },
      {
        projectType: 'onlineStore',
        eyebrow: 'Word + ejemplo en PDF',
        title: 'Pliego de condiciones tienda online',
        text: 'Catálogo, pago, envío, devoluciones y condiciones de venta: lo que hay que decidir antes del primer presupuesto.',
        note: 'Ejemplo relleno: una tienda gourmet en Rennes',
      },
      {
        projectType: 'businessSoftware',
        eyebrow: 'Word + ejemplo en PDF',
        title: 'Pliego de condiciones software de gestión',
        text: 'Las pantallas, los roles, los datos que migrar y los archivos Excel que sustituir.',
        note: 'Ejemplo relleno: una empresa de limpieza',
      },
      {
        projectType: 'mobileApp',
        eyebrow: 'Word + ejemplo en PDF',
        title: 'Pliego de condiciones app móvil',
        text: 'iPhone y Android, cuentas, notificaciones, modo sin conexión y publicación en las tiendas de aplicaciones.',
        note: 'Ejemplo relleno: un gimnasio',
      },
    ],
  },
  pitfalls: {
    eyebrow: 'Visto desde el lado del proveedor',
    title: 'Tres errores que impiden comparar los presupuestos',
    intro: 'Los veo a menudo en las solicitudes de presupuesto. Las preguntas del generador los evitan.',
    cards: [
      {
        key: 'competitor-reference',
        icon: 'Eye',
        iconTone: 'amber',
        eyebrow: '',
        title: '«Una web como la de mi competidor»',
        text: 'Una referencia sin lista de páginas da presupuestos que no hablan del mismo proyecto. Conserva el ejemplo y añade las páginas y las funciones que quieres de verdad.',
        note: '',
        link: null,
      },
      {
        key: 'everything-essential',
        icon: 'ClipboardCheck',
        iconTone: 'cyan',
        eyebrow: '',
        title: 'Todo «imprescindible»',
        text: 'Si todo es prioritario, el proveedor lo presupuesta todo al precio más alto. Separa lo que debe estar el día de la puesta en línea de lo que puede esperar tres meses.',
        note: '',
        link: null,
      },
      {
        key: 'hidden-budget',
        icon: 'SlidersHorizontal',
        iconTone: 'green',
        eyebrow: '',
        title: 'Sin presupuesto «para ver los precios»',
        text: 'Sin horquilla, cada proveedor presupuesta la versión que imagina. Una horquilla sincera te trae presupuestos a tu medida, y opciones cuando el presupuesto es ajustado.',
        note: '',
        link: null,
      },
    ],
  },
  pricing: {
    eyebrow: 'Precios',
    title: '¿Cuánto cuesta el proyecto que describes?',
    intro:
      'El generador no da precios: tu documento es el mismo para todos los proveedores. Aquí tienes mis precios públicos, y los del mercado francés recogidos en 2026.',
    offers: [
      {
        title: 'Web con plantilla',
        price: '290 € una sola vez',
        description:
          'Dominio y alojamiento incluidos. Para esta web no hace falta pliego de condiciones: basta con una llamada de 30 minutos.',
        isHighlighted: false,
      },
      {
        title: 'Web a medida',
        price: 'Desde 1500 €',
        description:
          'Diseño único, reserva de citas, presupuestos o tienda online: el precio depende de tu pliego de condiciones.',
        isHighlighted: true,
      },
      {
        title: 'IA y automatización',
        price: 'Desde 2500 €',
        description:
          'Una tarea repetitiva en manos de la IA: clasificación de solicitudes, documentos que se rellenan solos, asistente.',
        isHighlighted: false,
      },
      {
        title: 'Software de gestión',
        price: '5000 a 15 000 €',
        description:
          'A precio cerrado, tras una primera conversación gratuita. Una app móvil se presupuesta aparte, a partir de tu pliego de condiciones.',
        isHighlighted: false,
      },
    ],
    notes: [
      'Mantenimiento de 100 a 300 € al mes, si lo quieres.',
      'Precios netos: IVA no aplicable (artículo 293 B del Código General de Impuestos francés).',
      'Eres propietario de la web, del código y del dominio.',
    ],
    ctaLabel: 'Pedir un presupuesto',
    secondaryLinkLabel: 'Precio de una página web en 2026',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Pliego de condiciones: tus preguntas',
    questions: [
      {
        question: '¿Qué es un pliego de condiciones?',
        answer:
          'Es el documento que describe tu proyecto antes de pedir presupuestos: tu empresa, tus objetivos, las páginas o las pantallas, las funcionalidades, los contenidos, el presupuesto y el plazo. Sirve para recibir presupuestos comparables y, después, como referencia durante todo el proyecto, ya sea una web corporativa, una tienda online o una aplicación.',
      },
      {
        question: '¿Cuántas páginas debe tener un pliego de condiciones?',
        answer:
          'De cuatro a ocho páginas para una web corporativa o una tienda online, más para un software de gestión o una app móvil. Si es más largo, rara vez se lee entero: una lista clara de páginas y de funcionalidades vale más que un texto largo.',
      },
      {
        question: '¿Hace falta un pliego de condiciones para una web corporativa pequeña?',
        answer:
          'Para una web con plantilla de 290 €, no: basta con una llamada de 30 minutos. En cuanto pides varios presupuestos o una web a medida, sí: es la única forma de comparar los precios sobre la misma base.',
      },
      {
        question: 'Pliego de condiciones funcional o técnico: ¿qué diferencia hay?',
        answer:
          'El funcional dice lo que la web o la aplicación debe hacer, con tus palabras. El técnico dice cómo hacerlo (lenguaje, alojamiento, seguridad): suele escribirlo el proveedor. El generador redacta el funcional, con los requisitos técnicos que te afectan.',
      },
      {
        question: '¿Por qué no pedírselo a ChatGPT?',
        answer:
          'Puedes hacerlo. Una IA redacta rápido, pero rellena los huecos con generalidades y no te pregunta ni tu presupuesto ni a quién pertenecerán el dominio y el código. El generador hace esas preguntas. Los dos se complementan: descarga el Word y, si quieres, pide a una IA que lo reformule.',
      },
      {
        question: '¿Se guardan mis respuestas?',
        answer:
          'No. El documento se genera en tu navegador. No se envía nada mientras no hagas clic en «Pedir un presupuesto a Léo», y en ese caso solo me llegan el documento y tus datos de contacto.',
      },
      {
        question: '¿A quién enviar mi pliego de condiciones?',
        answer:
          'A dos o tres proveedores, por ejemplo una agencia, un freelance y, si tu proyecto es sencillo, un creador de webs. Da a cada uno el mismo documento y la misma fecha de respuesta.',
      },
      {
        question: '¿Cuánto cuesta crear una web o una aplicación?',
        answer:
          'En Dibodev, 290 € una sola vez por una web con plantilla, dominio y alojamiento incluidos, desde 1500 € por una web a medida y de 5000 a 15 000 € por un software de gestión. Los barómetros del precio de una página web y del precio de un software a medida comparan las tarifas publicadas por otros proveedores franceses.',
      },
    ],
  },
  related: {
    linkLabel: 'Abrir la página',
    eyebrow: 'Para ir más lejos',
    title: 'Antes de pedir tus presupuestos',
    links: [
      {
        key: 'website-price-barometer',
        routeName: 'website-price-barometer',
        icon: 'FileSpreadsheet',
        eyebrow: 'Barómetro 2026',
        title: 'Precio de una página web',
        text: 'Las tarifas publicadas por 20 proveedores franceses, de la web de una sola página a la tienda online.',
      },
      {
        key: 'custom-software-price-barometer',
        routeName: 'custom-software-price-barometer',
        icon: 'SlidersHorizontal',
        eyebrow: 'Barómetro 2026',
        title: 'Precio de un software a medida',
        text: 'Herramienta sencilla, software de gestión o plataforma: las horquillas de 14 proveedores franceses.',
      },
      {
        key: 'website-health-check',
        routeName: 'tools-website-health-check',
        icon: 'ShieldCheck',
        eyebrow: 'Herramienta gratis',
        title: 'Probar mi web actual',
        text: 'Para un rediseño: ocho comprobaciones en diez segundos, para adjuntar a tu pliego de condiciones.',
      },
    ],
  },
  contactCta: {
    title: '¿Ya tienes tu pliego de condiciones? Envíamelo',
    description:
      'Lo leo yo mismo y te respondo en 24 horas, con un precio o con mis preguntas. Si te basta con una herramienta del mercado, te lo digo.',
    button: 'Pedir un presupuesto',
  },
  mobileBar: {
    text: '¿Ya tienes tu pliego de condiciones? Te respondo en 24 horas',
    button: 'Pedir un presupuesto',
  },
}
