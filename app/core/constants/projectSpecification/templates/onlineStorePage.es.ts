import type { DibodevProjectSpecificationTemplatePageContent } from '~/core/types/DibodevProjectSpecificationPage'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_ONLINE_STORE_PAGE_ES: DibodevProjectSpecificationTemplatePageContent = {
  projectType: 'onlineStore',
  meta: {
    title: 'Pliego de condiciones de tienda online: plantilla gratis',
    description:
      'Pliego de condiciones para un e-commerce: plantilla Word gratis y ejemplo rellenado en PDF, con pago, envíos y devoluciones. Sin registro ni e-mail.',
    inLanguage: 'es-ES',
    schemaAbout: 'Pliego de condiciones de una tienda online (e-commerce)',
  },
  breadcrumbLabel: 'Tienda online',
  shareImage: {
    titleLines: ['Pliego de condiciones', 'de tienda online'],
    highlight: 'tienda online',
    subtitle: 'Plantilla Word y ejemplo rellenado en PDF',
    badge: 'Gratis · sin e-mail',
    alt: 'Plantilla gratis de pliego de condiciones para una tienda online, en Word, con un ejemplo rellenado en PDF',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Pliego de condiciones de tienda online',
    titleAfter: ': plantilla gratis en Word y PDF para tu e-commerce, con un ejemplo rellenado',
    reassurances: ['Plantilla + ejemplo rellenado', 'Word editable', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un pliego de condiciones de tienda online en nueve partes, listo para rellenar, y el mismo documento rellenado para una tienda gourmet de Rennes, en Francia. Está pensado para comercios, artesanos y productores que quieren vender online y recibir presupuestos comparables. Las páginas de la tienda, las funcionalidades ordenadas por prioridad, el pago, los envíos y las condiciones de venta ya están previstos. También deja claro que la tienda, el fichero de clientes y el dominio quedan a tu nombre.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Son las preguntas que hago antes de presupuestar una tienda online.',
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para comercios, artesanos y productores que preparan su tienda online. El Word se rellena y se modifica, el PDF muestra el mismo documento rellenado de principio a fin.',
    templateLabel: 'Descargar la plantilla Word',
    templateMeta: 'Word, 9 partes para rellenar',
    exampleLabel: 'Descargar el ejemplo rellenado',
    exampleMeta: 'PDF, una tienda gourmet en Rennes',
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
          'Presentación de la empresa y del proyecto, creación o rediseño',
          'Objetivos, cada uno con su medida, y clientes a los que te diriges',
          'Las nueve páginas típicas de una tienda online, para tachar o completar',
          'Diez funcionalidades para ordenar por prioridad, del pago con tarjeta a la conexión con la caja',
          'Fichas de producto y fotos, requisitos técnicos y legales (pago seguro, condiciones de venta, desistimiento)',
          'Presupuesto, plazo, mantenimiento y lo que debe incluir cada oferta',
        ],
      },
      {
        title: 'El ejemplo rellenado',
        format: 'PDF, Épicerie fine Lemoine en Rennes (empresa ficticia)',
        items: [
          'Una tienda gourmet de 2 a 10 personas que empieza a vender online, para particulares en Francia',
          'Tres objetivos con su medida: vender todos los días, vender más allá de Rennes, ofrecer la recogida en tienda',
          'Nueve páginas típicas, entre ellas la cuenta de cliente y las condiciones generales de venta',
          'Cuatro funcionalidades imprescindibles (catálogo, pago con tarjeta, stock, envío y recogida) y dos deseadas (códigos promocionales, cuentas de cliente)',
          'Fichas de producto y fotos aportadas por la tienda, maquetadas por el proveedor',
          `Un presupuesto de 1500 a 5000${NBSP}€, un lanzamiento en un plazo de seis meses y el mantenimiento presupuestado aparte`,
        ],
      },
    ],
  },
  example: {
    eyebrow: 'Ejemplo de pliego de condiciones',
    title: 'El ejemplo rellenado, para leer aquí',
    intro:
      'La tienda online de un comercio gourmet de Rennes, tal como el generador la redacta a partir de cinco respuestas.',
    expandLabel: 'Leer todo el ejemplo',
    collapseLabel: 'Plegar el ejemplo',
    generatorLinkLabel: 'Hacer lo mismo a mi nombre',
    answers: {
      projectType: 'onlineStore',
      kind: 'creation',
      companyName: 'Épicerie fine Lemoine',
      activity: 'tienda gourmet: productos bretones, cestas y cajas regalo',
      city: 'Rennes',
      companySize: 'small',
      goals: ['sell', 'reach', 'pickup'],
      audience: 'consumers',
      features: ['catalog', 'cardPayment', 'stock', 'shipping', 'promoCodes', 'customerAccounts'],
      contentSource: 'client',
      budget: 'from1500to5000',
      launchDate: 'sixMonths',
    },
  },
  sitemap: {
    eyebrow: 'Mapa del sitio',
    title: 'Las páginas de una tienda online',
    intro:
      'Es la parte que fija el precio. Toma este plan como base, tacha lo que no te afecta y añade una página por categoría de productos.',
    ariaLabel:
      'Plan de una tienda online: la página de inicio, luego el catálogo con una página por categoría, las cajas regalo, el carrito y el pago, la cuenta de cliente y el contacto; en el pie de página, las condiciones generales de venta, los envíos y devoluciones, el aviso legal, la privacidad y las cookies.',
    rootLabel: 'Inicio',
    branches: [
      { label: 'Catálogo', children: ['Galletas y caramelos', 'Conservas de mar', 'Sidras y bebidas'] },
      { label: 'Cajas regalo', children: [] },
      { label: 'Carrito y pago', children: [] },
      { label: 'Cuenta de cliente', children: [] },
      { label: 'Contacto', children: [] },
    ],
    footerNote:
      'En el pie de página: condiciones generales de venta, envíos y devoluciones, aviso legal, privacidad y cookies',
    notes: [
      {
        title: 'Una página por categoría',
        text: 'Cada categoría tiene su página y cada producto su ficha: una búsqueda como «caramelo de mantequilla salada» encuentra una página que habla de ello.',
      },
      {
        title: 'Lo que da confianza antes de comprar',
        text: 'Gastos de envío, plazos de entrega, devoluciones y formas de pago: el cliente los busca antes de pagar. Dales una página, enlazada desde el carrito.',
      },
      {
        title: 'El resto, en el pie de página',
        text: 'Las condiciones generales de venta, el aviso legal y la política de privacidad son obligatorios en Francia. Con la página de envíos y devoluciones, van al pie de cada página, no en el menú.',
      },
    ],
  },
  howToFill: {
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la plantilla en cuatro pasos',
    intro:
      'Sustituye cada indicación en gris por tu texto y borra lo que no te afecta. Mantén el orden de las partes: es el orden en que lo lee un proveedor.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Empieza por la empresa y los objetivos',
        description:
          'Cinco líneas sobre ti y tus productos, tres objetivos con su medida. El resto del documento sale de ahí.',
      },
      {
        label: 'Paso 2',
        title: 'Enumera las páginas y ordena las funcionalidades',
        description:
          'Quédate con la estructura típica y añade una página por categoría de productos. Luego ordena las funcionalidades: catálogo, pago, stock y envíos primero, lo demás puede esperar.',
      },
      {
        label: 'Paso 3',
        title: 'Di quién prepara las fichas de producto',
        description:
          'Descripciones, fotos, precios, peso para los gastos de envío: quién se encarga, y para cuántos productos.',
      },
      {
        label: 'Paso 4',
        title: 'Indica un presupuesto y una fecha',
        description: 'Una horquilla y una fecha de lanzamiento, y luego el mismo documento a dos o tres proveedores.',
      },
    ],
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro obligaciones que escribir en el pliego de condiciones',
    intro:
      'En Francia, se aplican a toda tienda online que vende a particulares, sea cual sea su tamaño. La plantilla ya las incluye, para que se presupuesten desde la primera oferta.',
    facts: [
      {
        contextLabel: 'Antes del pedido',
        title: 'La información y las condiciones de venta',
        text: 'Las características de los productos, el precio total con IVA, el plazo de entrega y las condiciones generales de venta están en la web antes del pedido. El botón final lleva la mención «Commande avec obligation de paiement» (pedido con obligación de pago).',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F23455',
      },
      {
        contextLabel: `14${NBSP}días`,
        title: 'El derecho de desistimiento',
        text: `Un particular que compra a distancia tiene 14${NBSP}días para desistir, sin tener que justificarse, y la web debe informarle de ello. Algunos productos quedan excluidos, como los alimentos que caducan rápido.`,
        sourceName: 'Service-Public.fr',
        sourceUrl: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F10485',
      },
      {
        contextLabel: 'Clientes particulares',
        title: 'El mediador de consumo',
        text: 'Si vendes a particulares, la web indica el mediador de consumo al que tus clientes pueden acudir en caso de litigio.',
        sourceName: 'economie.gouv.fr',
        sourceUrl: 'https://www.economie.gouv.fr/mediation-conso',
      },
      {
        contextLabel: 'Fichero de clientes',
        title: 'Los datos personales',
        text: 'Direcciones, pedidos, cuentas de cliente: recoge solo lo que necesitas, explica para qué sirven los datos y cuánto tiempo los guardas, y protégelos.',
        sourceName: 'Entreprendre.Service-Public.fr',
        sourceUrl: 'https://entreprendre.service-public.gouv.fr/vosdroits/F24270',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Pliego de condiciones de tienda online: tus preguntas',
    questions: [
      {
        question: '¿Qué poner en el pliego de condiciones de una tienda online?',
        answer:
          'Nueve partes: la empresa, el proyecto, los objetivos y los clientes a los que te diriges, las páginas de la tienda, las funcionalidades, las fichas de producto y las fotos, los requisitos técnicos y legales, el presupuesto y el plazo, y lo que debe incluir cada oferta. La plantilla las recoge en ese orden, con el pago, los envíos y las condiciones de venta ya previstos.',
      },
      {
        question: '¿Cuántos productos y qué páginas hay que prever?',
        answer:
          'Indica el número de productos al abrir, el número de categorías y si un producto existe en varias versiones (peso, sabor, talla): es lo que hace variar el trabajo en el catálogo. En cuanto a las páginas, la plantilla prevé la página de inicio, el catálogo con una página por categoría, las fichas de producto, el carrito y el pago, la cuenta de cliente, los envíos y devoluciones, las condiciones generales de venta y el contacto, más el aviso legal y la privacidad en el pie de página.',
      },
      {
        question: '¿Cuánto cuesta una tienda online?',
        answer: `En Dibodev, una tienda online se hace a medida, desde 1500${NBSP}€. El precio depende de tu pliego de condiciones: número de productos, pago, envíos, cuentas de cliente. El barómetro del precio de una página web compara las tarifas publicadas por 20 proveedores franceses, de la web de una página a la tienda online.`,
      },
      {
        question: '¿Hay que elegir la plataforma en el pliego de condiciones?',
        answer:
          'No necesariamente. Describe lo que debe hacer la tienda: Shopify, WooCommerce, PrestaShop o un desarrollo a medida son decisiones técnicas que cada proveedor propone y justifica en su oferta. Si ya tienes una plataforma, o quieres una en concreto, escríbelo en el pliego.',
      },
      {
        question: 'Pago, envíos, devoluciones: ¿qué hay que precisar?',
        answer:
          'Las formas de pago aceptadas, los modos de entrega (transportista, recogida en tienda), los gastos de envío y la forma de gestionar una devolución. La plantilla ya prevé un pago seguro mediante un proveedor reconocido (3-D Secure), una página de envíos y devoluciones, y la información sobre el derecho de desistimiento.',
      },
      {
        question: '¿La plantilla es gratis de verdad?',
        answer:
          'Sí. La plantilla Word y el ejemplo en PDF se descargan sin registro ni e-mail, y puedes enviar el documento a cualquier proveedor, no solo a mí.',
      },
    ],
  },
  otherTemplates: {
    eyebrow: 'Las otras plantillas',
    title: '¿Otro proyecto que no sea una tienda online?',
    generatorCard: {
      projectType: 'onlineStore',
      eyebrow: 'Generador gratis',
      title: 'El tuyo en 5 minutos',
      text: 'Cinco preguntas, y el documento se redacta a tu nombre mientras respondes. Word o PDF, sin e-mail.',
      note: 'Web corporativa, tienda online, software de gestión o app móvil',
    },
    generatorLinkLabel: 'Abrir el generador',
  },
  contactCta: {
    title: '¿Ya has rellenado tu pliego de condiciones?',
    description: `Envíamelo: lo leo yo mismo y te respondo en 24${NBSP}h, con un precio o con mis preguntas. Si una solución del mercado te basta, te lo digo.`,
    button: 'Pedir un presupuesto',
    generatorLinkLabel: 'Rellenarlo con el generador',
  },
  mobileBar: {
    text: 'Plantilla gratis, sin e-mail',
    button: 'Descargar la plantilla Word',
  },
}
