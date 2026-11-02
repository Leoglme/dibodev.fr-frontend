import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import {
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  PESTICIDE_BAN_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { HOME_SERVICES_PRICE_INFORMATION_SOURCE } from '~/core/constants/tradeWebsites/landscaper/pageShared'

export const LANDSCAPER_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para paisajista en Francia: tu demo en 2 minutos',
    description:
      'Mira tu web de paisajista a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para paisajistas',
    serviceDescription:
      'Web de paisajista con una plantilla pensada para el oficio, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con solicitudes de presupuesto en línea, para empresas en Francia.',
    serviceType: 'Creación de página web para paisajistas',
  },
  breadcrumbLabel: 'Paisajista',
  shareImage: {
    titleLines: ['Página web para', 'paisajistas en Francia'],
    highlight: 'paisajistas',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para paisajistas en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'paisajista',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'Tu nombre, tu ciudad, tu color, tu logo y las fotos de tus jardines: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web de paisajista en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con la plantilla Verdure de esta página, en línea en 48 horas. Una web a medida, con solicitudes de presupuesto en línea y una página por municipio, empieza en 1500 €. En los dos casos, tus servicios, tu zona de servicio y los avisos legales obligatorios en Francia están previstos, con el recuadro del crédito fiscal si estás declarado en servicios a domicilio.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos, y diseñé la plantilla de paisajista de arriba.',
  },
  atelier: {
    styleIntro: 'Una plantilla pensada para paisajistas. Colores, fotos y textos son tuyos.',
    templates: {
      'landscaper-verdure': {
        name: 'Verdure',
        description:
          'Fondo crema con halos verde agua, gran título verde abeto, botón verde lima y una amplia foto de jardín.',
      },
    },
    mediaIntro:
      'Un macizo, una terraza, un seto bien podado: tus propios jardines valen más que cualquier foto de banco de imágenes. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'garden-design', label: 'Creación de jardines', defaultSelected: true },
      { id: 'garden-maintenance', label: 'Mantenimiento y siega', defaultSelected: true },
      { id: 'patios-paths', label: 'Terrazas y caminos', defaultSelected: true },
      { id: 'hedge-trimming', label: 'Poda de setos', defaultSelected: false },
      { id: 'tree-work', label: 'Poda de árboles y tala', defaultSelected: false },
      { id: 'fences-gates', label: 'Vallas y portones', defaultSelected: false },
      { id: 'irrigation', label: 'Riego automático', defaultSelected: false },
    ],
    serviceDescription: 'Visita del terreno y presupuesto detallado antes de los trabajos.',
    requestTitle: 'Tu web de paisajista, a tu nombre',
  },
  examples: {
    title: 'Un ejemplo de página web para paisajista',
    imageAlt: 'Ejemplo de página web para paisajista, plantilla {name}',
  },
  contents: {
    eyebrow: 'Lo que trae solicitudes de presupuesto',
    title: 'Lo que debe tener la web de un paisajista',
    intro:
      'Seis elementos separan una web que da ganas de confiarte un jardín de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'Camera',
        title: 'Tus jardines en fotos',
        description:
          'Antes y después, temporada tras temporada: un paisajista se elige por sus fotos mucho más que por sus textos.',
      },
      {
        icon: 'Sprout',
        title: 'Creación y mantenimiento, por separado',
        description:
          'Una parte para crear o renovar un jardín, otra para el mantenimiento todo el año: no son los mismos clientes.',
      },
      {
        icon: 'MapPin',
        title: 'La zona de servicio',
        description: 'Los municipios que cubres, escritos con claridad. Google también los lee.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Los contratos de mantenimiento',
        description: 'Siega, poda, recogida de hojas, número de visitas al año: una tarifa clara da ganas de firmar.',
      },
      {
        icon: 'Euro',
        title: 'El crédito fiscal, si tienes derecho',
        description:
          '¿Declarado en servicios a domicilio en Francia? Anuncia el crédito fiscal del 50 % en la pequeña jardinería, aparte del precio y en letra más pequeña.',
      },
      {
        icon: 'MessageCircle',
        title: 'Reseñas y solicitud de presupuesto',
        description:
          'Tus reseñas de Google y un formulario donde el cliente describe su jardín y sus ideas: llegas a la visita sabiendo qué proponer.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu web y tus presupuestos en Francia',
    intro:
      'Una web de paisajista que anuncia el crédito fiscal sin estar declarada, o que promete un deshierbe químico en casa de particulares, no cumple la norma. Esto es lo que exigen los textos franceses, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: '50 %, hasta 5000 € al año',
        title: 'El crédito fiscal de tus clientes, si estás declarado',
        text: 'La pequeña jardinería en casa de un particular (mantenimiento, poda de setos y árboles, desbroce) le da un crédito fiscal del 50 %, con un límite de 5000 € de gasto al año, si tu empresa está declarada en servicios a domicilio (services à la personne).',
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Orden del 17 de marzo de 2015',
        title: 'Servicios, precios y presupuesto gratis, en la web',
        text: 'Pequeña jardinería para particulares: la web lista tus servicios y su modo de intervención, da todo precio sin IVA y con IVA con sus gastos extra, pone el crédito fiscal aparte y en letra menor, y anuncia el presupuesto gratis desde 100 € con IVA al mes.',
        sourceName: HOME_SERVICES_PRICE_INFORMATION_SOURCE.name,
        sourceUrl: HOME_SERVICES_PRICE_INFORMATION_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de julio de 2022',
        title: 'Sin productos fitosanitarios en casa de particulares',
        text: 'Están prohibidos en las viviendas privadas, jardín incluido, salvo productos de biocontrol, de bajo riesgo o ecológicos. Donde están permitidos, aplicarlos para un cliente exige en principio la autorización de la empresa (agrément) y el Certiphyto.',
        sourceName: PESTICIDE_BAN_SOURCE.name,
        sourceUrl: PESTICIDE_BAN_SOURCE.url,
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
      'Fuentes: Service-Public.fr y servicesalapersonne.gouv.fr (crédito fiscal, pequeña jardinería), Légifrance (orden del 17 de marzo de 2015, artículos 2 a 6; orden del 15 de enero de 2021 y artículo 14-3 de la orden del 4 de mayo de 2017; código rural, artículo L254-1), Entreprendre.Service-Public.fr (Certiphyto, menciones obligatorias en la web de una empresa, mediación de consumo). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla Verdure, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, solicitudes de presupuesto con fotos del jardín, una página por municipio para el posicionamiento local, y un programa detrás de la web para tus contratos de mantenimiento si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Ya en dibodev.fr para paisajistas',
    toolCard: {
      icon: 'Laptop',
      label: 'Test gratis, 6 preguntas',
      title: '¿Qué software para tu empresa de paisajismo?',
      description:
        'Presupuestos, contratos de mantenimiento, facturas: los precios 2026 de los programas del mercado francés, y cuándo merece la pena el desarrollo a medida.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Plantilla gratis',
      title: 'Contrato de mantenimiento de jardín: plantilla Excel y PDF',
      description:
        'En francés, con el presupuesto de paisajismo, el IVA al 10 o al 20 % línea a línea y los totales calculados.',
    },
  },
  faq: {
    title: 'Página web de paisajista en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un paisajista?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con solicitudes de presupuesto en línea o una página por municipio, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo modificar mi web yo mismo?',
        answer:
          'Sí. Cambias tus textos, las fotos de tus obras y tus servicios desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Mi web aparecerá en Google?',
        answer:
          'Está pensada para la búsqueda local: zona de servicio escrita con claridad, cada servicio descrito, ficha de Google conectada. Para apuntar a varios municipios, la opción a medida añade una página por ciudad.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un paisajista en Francia?',
        answer:
          'El aviso legal (nombre, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. Para la pequeña jardinería en casa de particulares, se añaden la lista de tus servicios y su modo de intervención, la frase sobre el presupuesto gratis, y precios sin IVA y con IVA cuando los muestras. Los preparo contigo antes de la puesta en línea.',
      },
      {
        question: '¿Puedo anunciar el crédito fiscal del 50 % en mi web?',
        answer:
          'Sí, si tu empresa está declarada en servicios a domicilio (services à la personne), y solo para la pequeña jardinería en casa de particulares: mantenimiento, siega, poda de setos y árboles, desbroce. La creación de un jardín, la poda en altura y los movimientos de tierra no dan derecho. La mención va aparte del precio, en letra más pequeña, y la plantilla Verdure tiene un recuadro previsto para ella.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de paisajista, lista para recibir solicitudes de presupuesto',
    description:
      'Una plantilla pensada para el oficio, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de paisajista a tu nombre, gratis de ver',
}
