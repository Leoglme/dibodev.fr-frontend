import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE, HOME_REPAIR_PRICE_DISPLAY_SOURCE } from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { RGE_LABEL_CLIENT_INFORMATION_SOURCE } from '~/core/constants/tradeWebsites/carpenter/pageShared'

export const CARPENTER_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para carpintero en Francia: tu demo en 2 minutos',
    description:
      'Mira tu web de carpintero a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para carpinteros y ebanistas',
    serviceDescription:
      'Web de carpintero con la plantilla Édito, a tu nombre, con tu color y las fotos de tus trabajos, dominio y alojamiento incluidos, o web a medida con galería de trabajos y solicitud de presupuesto en línea, para empresas en Francia.',
    serviceType: 'Creación de página web para carpinteros',
  },
  breadcrumbLabel: 'Carpintero',
  shareImage: {
    titleLines: ['Página web para', 'carpinteros en Francia'],
    highlight: 'carpinteros',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para carpinteros en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'carpintero',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'Tu nombre, tu ciudad, tu color, tu logo y tus trabajos: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web de carpintero o de instalador de ventanas en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con la plantilla Édito de esta página, en línea en 48 horas. Una web a medida, con galería de trabajos por tipo de obra y solicitud de presupuesto en línea, empieza en 1500 €. En los dos casos, la galería de tus trabajos, tu zona de instalación, tu seguro decenal y los avisos legales obligatorios en Francia están previstos.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos, y diseñé la plantilla Édito de arriba.',
  },
  atelier: {
    styleIntro:
      'Una plantilla sobria, estilo revista, que deja todo el espacio a tus trabajos. Los colores, las fotos y los textos son tuyos.',
    templates: {
      'artisan-edito': {
        name: 'Édito',
        description:
          'Papel crema, tipografía grande y un toque ámbar, tu nombre como titular y un recuadro con zona, teléfono y presupuesto: el aire de una revista.',
      },
    },
    mediaIntro:
      'Una cocina instalada, una escalera, una ventana: tus trabajos terminados valen más que cualquier foto de banco de imágenes. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'custom-joinery', label: 'Carpintería a medida', defaultSelected: true },
      { id: 'windows-doors', label: 'Ventanas y puertas', defaultSelected: true },
      { id: 'staircases', label: 'Escaleras', defaultSelected: true },
      { id: 'fitted-wardrobes', label: 'Armarios y vestidores', defaultSelected: false },
      { id: 'kitchens', label: 'Cocinas', defaultSelected: false },
      { id: 'shutters-gates', label: 'Persianas y portones', defaultSelected: false },
      { id: 'flooring-decking', label: 'Parquet y terrazas de madera', defaultSelected: false },
    ],
    serviceDescription: 'Medición en casa y presupuesto gratis.',
    requestTitle: 'Tu web de carpintero, a tu nombre',
  },
  examples: {
    title: 'Un ejemplo de página web para carpintero',
    imageAlt: 'Ejemplo de página web para carpintero, plantilla {name}',
  },
  contents: {
    eyebrow: 'Lo que hace pedir presupuesto',
    title: 'Lo que debe tener la web de un carpintero',
    intro:
      'Seis elementos separan una web que da ganas de confiarte una obra de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'Image',
        title: 'Tus trabajos y tus reseñas',
        description:
          'Cocinas, escaleras, vestidores, ventanas instaladas: tus trabajos terminados en fotos, ordenados por tipo, con tus reseñas de Google al lado. Es lo primero que mira un cliente.',
      },
      {
        icon: 'Armchair',
        title: 'Cada servicio con su nombre',
        description:
          'Fabricación a medida, instalación de ventanas, mobiliario, escaleras: cada servicio escrito con claridad, con las maderas y los materiales que trabajas. Google también los lee.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Una solicitud de presupuesto que prepara la medición',
        description:
          'Tipo de obra, medidas aproximadas, fotos de la habitación, municipio: llegas a casa del cliente con lo esencial.',
      },
      {
        icon: 'MapPin',
        title: 'El taller y la zona de instalación',
        description:
          'La dirección del taller, el horario de visitas y los municipios donde instalas, escritos con claridad.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Seguro y sellos',
        description:
          'Seguro decenal, sello RGE para ventanas y puertas de entrada: lo que el cliente comprueba antes de firmar, y de lo que dependen sus ayudas.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Los plazos, dichos de antemano',
        description:
          'Plazo de fabricación en el taller, plazo de instalación, temporadas cargadas: el cliente planifica su obra y te llama en el momento justo.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu web y tus presupuestos en Francia',
    intro:
      'Tarifas de reparación, seguro decenal, sello RGE, aviso legal: lo que debe figurar en tu web, tus presupuestos y tus contratos. Esto es lo que exigen los textos franceses, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Orden del 24 de enero de 2017',
        title: 'Tarifas en línea, presupuesto antes de los trabajos',
        text: 'Carpintería, cerrajería, cristalería, puertas de garaje: en reparación o mantenimiento, precio por hora con IVA, tarifas fijas y gastos de desplazamiento se encuentran fácilmente en tu web, y un presupuesto detallado precede al trabajo, aunque sea pequeño.',
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Con cada presupuesto y factura',
        title: 'El certificado del seguro decenal',
        text: 'Para instalar ventanas y puertas, cuyos marcos entran en la garantía decenal, el certificado de tu seguro se adjunta a tus presupuestos y facturas. Mencionarlo en la web da confianza antes de la primera llamada.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 2 de julio de 2025',
        title: 'Sello RGE: decirlo antes de firmar',
        text: 'Ventanas, persianas aislantes, puerta de entrada: antes de firmar, dices por escrito si tienes el sello RGE para esos trabajos (con justificante) o, si no, qué cambia para las ayudas del cliente, como el ecopréstamo a tipo cero. Sin ello, el contrato es nulo.',
        sourceName: RGE_LABEL_CLIENT_INFORMATION_SOURCE.name,
        sourceUrl: RGE_LABEL_CLIENT_INFORMATION_SOURCE.url,
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
      'Fuentes: Légifrance (orden del 24 de enero de 2017, artículos 1 a 4 y anexo 1; Código de consumo francés, artículo L224-114), Entreprendre.Service-Public.fr (seguro decenal, sello RGE, menciones obligatorias en la web de una empresa, mediación de consumo), Service-Public.fr (ecopréstamo a tipo cero). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla Édito, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos y las fotos de tus trabajos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, galería de trabajos por tipo de obra, solicitud de presupuesto con medidas y fotos, una página por municipio para el posicionamiento local, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Ya en dibodev.fr para carpinteros',
    toolCard: {
      icon: 'Hammer',
      label: 'Test gratis, 6 preguntas',
      title: '¿Qué software para tu carpintería?',
      description:
        'Presupuestos con mediciones, hojas de despiece, planificación del taller y de las instalaciones: los precios 2026 de los programas del mercado francés, y cuándo merece la pena el desarrollo a medida.',
    },
    freeTemplateCard: {
      icon: 'FileSpreadsheet',
      label: 'Plantilla gratis',
      title: 'Lista de corte de carpintería: plantilla gratis en Excel',
      description:
        'Más un presupuesto con mediciones, un plan de corte y un acta de recepción, con el coste del material y los totales calculados.',
    },
  },
  faq: {
    title: 'Página web de carpintero en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un carpintero?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con galería de trabajos y solicitud de presupuesto en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo modificar mi web yo mismo?',
        answer:
          'Sí. Añades tus últimos trabajos y cambias tus textos y tus fotos desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Mi web aparecerá en Google?',
        answer:
          'Está pensada para la búsqueda local: zona de instalación escrita con claridad, cada servicio nombrado, ficha de Google conectada. Para apuntar a varios municipios, la opción a medida añade una página por ciudad.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un carpintero en Francia?',
        answer:
          'Tus tarifas de reparación (precio por hora con IVA, desplazamiento, tarifas fijas, presupuesto gratuito o de pago), el aviso legal (nombre, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. Tu seguro decenal y, si lo tienes, tu sello RGE también dan confianza. Lo preparo todo contigo antes de la puesta en línea.',
      },
      {
        question: '¿Tengo que mostrar mis precios si todo es a medida?',
        answer:
          'Para un trabajo a medida, el precio sale del presupuesto, después de la medición. La orden francesa del 24 de enero de 2017 se aplica a las reparaciones y al mantenimiento en casa de un particular: para eso, tu precio por hora con IVA, tus tarifas fijas y tus gastos de desplazamiento deben ser fáciles de encontrar en la web.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de carpintero, lista para recibir peticiones de presupuesto',
    description:
      'La plantilla Édito, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de carpintero a tu nombre, gratis de ver',
}
