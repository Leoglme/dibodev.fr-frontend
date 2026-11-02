import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  CONSUMER_MEDIATION_SOURCE,
  HOME_REPAIR_PRICE_DISPLAY_SOURCE,
  HOME_REPAIR_QUOTE_RULES_SOURCE,
} from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'

export const PLUMBER_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para fontanero en Francia: tu demo en 2 minutos',
    description:
      'Mira tu web de fontanero a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para fontaneros y calefactores',
    serviceDescription:
      'Web de fontanero con una de tres plantillas, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con reservas y presupuestos en línea, para empresas en Francia.',
    serviceType: 'Creación de página web para fontaneros',
  },
  breadcrumbLabel: 'Fontanero y calefactor',
  shareImage: {
    titleLines: ['Página web para', 'fontaneros en Francia'],
    highlight: 'fontaneros',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para fontaneros en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'fontanero',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'Tu nombre, tu ciudad, tu color, tu logo y tus fotos: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web de fontanero en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con una de las tres plantillas de esta página, en línea en 48 horas. Una web a medida, con reservas o presupuestos en línea, empieza en 1500 €. En los dos casos, preparo contigo las tarifas de reparación, la zona de servicio y los avisos legales obligatorios en Francia.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos, y diseñé las tres plantillas de fontanero de arriba.',
  },
  atelier: {
    styleIntro: 'Tres plantillas pensadas para fontaneros. Todo sigue siendo modificable después.',
    templates: {
      'plumber-signature': {
        name: 'Signature',
        description: 'Banda de urgencias arriba, gran botón de llamada, galería de obras con antes y después.',
      },
      'plumber-atelier': {
        name: 'Atelier',
        description:
          'Papel cálido y tipografía elegante, ficha de intervención al principio: el estilo de un artesano consolidado.',
      },
      'plumber-cuivre': {
        name: 'Source',
        description:
          'Azul agua y blanco, tu nombre en grande, recuadro de urgencias: clara y tranquilizadora, incluso sin fotos.',
      },
    },
    mediaIntro:
      'Tus obras de antes y después valen más que cualquier foto de banco de imágenes. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'leaks', label: 'Reparaciones y fugas', defaultSelected: true },
      { id: 'heating', label: 'Caldera y calefacción', defaultSelected: true },
      { id: 'bathroom', label: 'Cuarto de baño', defaultSelected: true },
      { id: 'heat-pump', label: 'Bomba de calor', defaultSelected: false },
      { id: 'unblocking', label: 'Desatascos', defaultSelected: false },
      { id: 'boiler-servicing', label: 'Mantenimiento anual', defaultSelected: false },
      { id: 'water-softener', label: 'Descalcificador', defaultSelected: false },
    ],
    serviceDescription: 'Presupuesto gratis, tarifas anunciadas antes de la intervención.',
    requestTitle: 'Tu web de fontanero, a tu nombre',
  },
  examples: {
    title: 'Tres ejemplos de páginas web para fontanero',
    imageAlt: 'Ejemplo de página web para fontanero, plantilla {name}',
  },
  contents: {
    eyebrow: 'Lo que hace llamar',
    title: 'Lo que debe tener la web de un fontanero',
    intro: 'Seis elementos separan una web que da confianza de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'Phone',
        title: 'El número en un gesto',
        description: 'Un botón de llamada visible en cada pantalla de móvil, arriba, sin buscar.',
      },
      {
        icon: 'MapPin',
        title: 'La zona de servicio',
        description: 'Los municipios que cubres, escritos con claridad. Google también los lee.',
      },
      {
        icon: 'Flame',
        title: 'Las urgencias primero',
        description: 'Fuga, caldera averiada, inodoro atascado: las tres páginas que se buscan a las 22 h.',
      },
      {
        icon: 'Euro',
        title: 'Las tarifas de reparación',
        description:
          'Precio por hora, desplazamiento, tarifas fijas: obligatorias en Francia, y tranquilizadoras cuando se muestran.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Cualificaciones y seguros',
        description:
          'PG, RGE, seguro decenal: las menciones francesas que cuentan para una instalación de gas o una bomba de calor.',
      },
      {
        icon: 'Camera',
        title: 'Fotos, reseñas y solicitud de presupuesto',
        description:
          'Tus obras de antes y después, tus reseñas de Google y un formulario de presupuesto: el cliente escribe a las 22 h y tú le llamas por la mañana.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu web y tus presupuestos en Francia',
    intro:
      'Una web de reparaciones que no muestra sus precios no cumple la norma, y da menos confianza. Esto es lo que exigen los textos franceses, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Orden del 24 de enero de 2017',
        title: 'Tus tarifas, fáciles de encontrar en línea',
        text: 'Precio por hora con IVA, forma de contar el tiempo, precios de las tarifas fijas, gastos de desplazamiento, presupuesto gratuito o de pago: expuestos en tu local, también deben ser fáciles de encontrar en tu web.',
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto detallado antes de cualquier intervención',
        text: 'Sea cual sea el importe: el umbral de 150 € que eximía las pequeñas reparaciones ha desaparecido. El presupuesto detalla los trabajos, el precio por hora, los gastos de desplazamiento y su plazo de validez.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Con cada presupuesto y factura',
        title: 'El certificado del seguro decenal',
        text: 'El certificado de tu seguro de responsabilidad civil decenal se adjunta a tus presupuestos y facturas. Mencionarlo en la web da confianza antes de la primera llamada.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'En la propia web',
        title: 'Aviso legal y mediador',
        text: 'Nombre con la mención EI, dirección, teléfono, correo, número de registro y alojamiento de la web; y el nombre, la dirección y la web del mediador de consumo al que pueden acudir tus clientes.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote:
      'Fuentes: Légifrance (orden del 24 de enero de 2017, artículos 2 a 4), Instituto Nacional del Consumo francés (INC), Entreprendre.Service-Public.fr (seguro decenal, menciones obligatorias en la web de una empresa, mediación de consumo). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'Una de las tres plantillas, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, reservas o presupuestos en línea conectados a tu agenda, una página por municipio para el posicionamiento local, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Ya en dibodev.fr para fontaneros',
    toolCard: {
      icon: 'Flame',
      label: 'Test gratis, 6 preguntas',
      title: '¿Qué programa para un fontanero y calefactor?',
      description:
        'Presupuestos, intervenciones, contratos de mantenimiento: los precios 2026 de los programas del mercado francés, y cuándo merece la pena el desarrollo a medida.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Plantilla gratis',
      title: 'Presupuesto de fontanero: plantilla Excel y PDF',
      description: 'Con el parte de intervención, las menciones obligatorias en Francia y los totales calculados.',
    },
  },
  faq: {
    title: 'Página web de fontanero en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un fontanero?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con reservas o presupuestos en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo modificar mi web yo mismo?',
        answer:
          'Sí. Cambias tus textos, tus fotos y tus tarifas desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Mi web aparecerá en Google?',
        answer:
          'Está pensada para la búsqueda local: zona de servicio escrita con claridad, cada servicio nombrado, ficha de Google conectada. Para apuntar a varios municipios, la opción a medida añade una página por ciudad.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un fontanero en Francia?',
        answer:
          'Tus tarifas (precio por hora con IVA, desplazamiento, tarifas fijas, presupuesto gratuito o de pago), el aviso legal (nombre, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. Los preparo contigo antes de la puesta en línea.',
      },
      {
        question: '¿Y si no tengo ni logo ni fotos?',
        answer:
          'Ningún problema: sin logo, tu nombre aparece como título, y la web conserva las fotos de la plantilla hasta que envíes las tuyas. Las fotos de tus obras reales dan más confianza, aunque estén hechas con el móvil.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de fontanero, lista para que suene el teléfono',
    description:
      'Tres plantillas, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de fontanero a tu nombre, gratis de ver',
}
