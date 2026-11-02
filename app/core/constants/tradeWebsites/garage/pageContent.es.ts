import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { GARAGE_PRICE_DISPLAY_SOURCE } from '~/core/constants/tradeWebsites/garage/pageShared'
import { AUTO_REPAIR_RULES_SOURCE } from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { CIRCULAR_ECONOMY_PARTS_SOURCE } from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'

export const GARAGE_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para taller mecánico en Francia: tu demo gratis',
    description:
      'Mira tu web de taller mecánico a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para talleres mecánicos',
    serviceDescription:
      'Web de taller mecánico con una plantilla pensada para talleres, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con citas y presupuestos en línea, para empresas en Francia.',
    serviceType: 'Creación de página web para talleres mecánicos',
  },
  breadcrumbLabel: 'Taller mecánico',
  shareImage: {
    titleLines: ['Página web para', 'talleres mecánicos'],
    highlight: 'talleres mecánicos',
    subtitle: 'En Francia: mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para talleres mecánicos en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'taller mecánico',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'El nombre de tu taller, tu ciudad, tu color, tu logo y tus fotos: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web para un taller mecánico o un mecánico autónomo en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con la plantilla de esta página, en línea en 48 horas. Una web a medida, con citas en línea conectadas a tu agenda o presupuestos en línea, empieza en 1500 €. En los dos casos, la solicitud de cita, tus tarifas, la información sobre las piezas de la economía circular y los avisos legales obligatorios en Francia están previstos.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos, y diseñé la plantilla de taller de arriba.',
  },
  atelier: {
    styleIntro: 'Una plantilla pensada para talleres mecánicos. Los colores, las fotos y los textos son tuyos.',
    templates: {
      'mechanic-pitlane': {
        name: 'Pitlane',
        description:
          'Negro asfalto y rojo carreras, una foto grande, botones de llamada y de cita en lo alto de la página.',
      },
    },
    mediaIntro:
      'Una foto de tu taller y de tu equipo da más confianza que cualquier foto de banco de imágenes. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'servicing', label: 'Revisión y mantenimiento', defaultSelected: true },
      { id: 'diagnostics', label: 'Diagnóstico electrónico', defaultSelected: true },
      { id: 'brakes', label: 'Frenos', defaultSelected: true },
      { id: 'tyres', label: 'Neumáticos y alineación', defaultSelected: false },
      { id: 'timing-belt', label: 'Distribución y embrague', defaultSelected: false },
      { id: 'air-conditioning', label: 'Aire acondicionado', defaultSelected: false },
      { id: 'bodywork', label: 'Carrocería', defaultSelected: false },
    ],
    serviceDescription: 'Precio anunciado antes de intervenir, ningún trabajo sin acuerdo previo.',
    requestTitle: 'Tu web de taller mecánico, a tu nombre',
  },
  contents: {
    eyebrow: 'Lo que hace pedir cita',
    title: 'Lo que debe tener la web de un taller mecánico',
    intro: 'Seis elementos separan una web que da confianza de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'Phone',
        title: 'El número en un gesto',
        description:
          'Un botón de llamada visible en cada pantalla de móvil: se enciende un testigo y el cliente te llama sin buscar.',
      },
      {
        icon: 'CalendarCheck',
        title: 'La solicitud de cita',
        description:
          'Matrícula, modelo, servicio y fecha deseada: preparas el hueco y las piezas antes de que llegue el coche.',
      },
      {
        icon: 'Euro',
        title: 'Tus tarifas, sin sorpresas',
        description:
          'Precio por hora, paquetes de cambio de aceite o revisión, precio del diagnóstico: expuestos en el taller, también dan confianza en línea.',
      },
      {
        icon: 'MapPin',
        title: 'Dirección, mapa y horarios',
        description: 'La dirección, un mapa y el horario de apertura: lo que se comprueba antes de dejar el coche.',
      },
      {
        icon: 'ClipboardCheck',
        title: 'Las piezas de la economía circular',
        description:
          'Obligatorio en la web en Francia: la posibilidad de elegirlas, las piezas afectadas y los casos en que no estás obligado a ofrecerlas.',
      },
      {
        icon: 'Star',
        title: 'Reseñas y fotos del taller',
        description:
          'Tus reseñas de Google, tu equipo y tu taller de verdad: se confía el coche más fácilmente a caras que ya se han visto.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu taller y tu web en Francia',
    intro:
      'En 2024, la autoridad francesa de consumo (DGCCRF) controló más de 1600 talleres, centros del automóvil y concesionarios: 4 de cada 10 controles acabaron en medidas correctoras o sanciones, sobre todo por precios incompletos o ilegibles. Esto es lo que exigen los textos franceses, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Orden del 27 de marzo de 1987',
        title: 'Precios con IVA expuestos en el taller',
        text: 'Precios por hora y de los paquetes con IVA, en la entrada y en la recepción, con su forma de cálculo (tiempo real o baremo del fabricante); el detalle de cada paquete, a petición. El texto no habla de la web, pero mostrarlos en ella da confianza.',
        sourceName: GARAGE_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: GARAGE_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Antes de cada reparación',
        title: 'Presupuesto a petición, orden de reparación firmada',
        text: 'El presupuesto no es obligatorio, pero no puedes negárselo a quien lo pide; si es de pago, se avisa antes. La orden de reparación, muy recomendada, indica la fecha, el vehículo y su kilometraje, los trabajos, su coste probable y el plazo de inmovilización.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Código de consumo francés, art. D224-25-2',
        title: 'Las piezas de la economía circular',
        text: 'El cliente puede elegir piezas de la economía circular (carrocería desmontable, ópticas, lunas no pegadas…). Esta opción, las piezas afectadas y las excepciones se exponen en la recepción y deben figurar también en tu web.',
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'En la propia web',
        title: 'Aviso legal y mediador',
        text: 'Razón social y forma jurídica (o nombre con la mención EI), dirección, teléfono, correo, número de registro y alojamiento de la web; y el nombre, la dirección y la web del mediador de consumo al que pueden acudir tus clientes.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote:
      'Fuentes: DGCCRF (ficha sobre la orden de reparación, que recoge la orden del 27 de marzo de 1987, y encuesta publicada el 4 de junio de 2026), Instituto Nacional del Consumo francés (INC, los talleres en 20 preguntas y respuestas), Légifrance (código de consumo, artículos L224-67 y R224-22 a D224-25-5), Entreprendre.Service-Public.fr (menciones obligatorias en la web de una empresa, mediación de consumo). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla, a tu nombre y con tu color, con su formulario de solicitud de cita. Dominio y alojamiento incluidos. Tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, citas en línea conectadas a tu agenda, presupuestos en línea, una página por servicio y por municipio para el posicionamiento local, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Ya en dibodev.fr para talleres mecánicos',
    toolCard: {
      icon: 'Wrench',
      label: 'Test gratis, 6 preguntas',
      title: '¿Qué software para tu taller mecánico?',
      description:
        'Presupuestos, órdenes de reparación, facturación: los precios 2026 de los programas de taller del mercado francés, y cuándo merece la pena el desarrollo a medida.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Plantilla gratis',
      title: 'Orden de reparación de taller: plantilla francesa en PDF y Excel',
      description: 'Con el presupuesto, el kilometraje, las piezas de reutilización y los totales calculados.',
    },
  },
  faq: {
    title: 'Página web de taller mecánico en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un taller mecánico?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con citas o presupuestos en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo modificar mi web yo mismo?',
        answer:
          'Sí. Cambias tus textos, tus fotos, tus servicios y tus tarifas desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Pueden mis clientes pedir cita en la web?',
        answer:
          'Sí. La plantilla incluye un formulario de solicitud de cita: matrícula, marca y modelo, servicios deseados y fecha, enviados a tu correo. Una agenda en línea con huecos reservables forma parte de la opción a medida, desde 1500 €.',
      },
      {
        question: '¿Mi web aparecerá en Google?',
        answer:
          'Está pensada para la búsqueda local: tu ciudad y tu dirección escritas con claridad, cada servicio nombrado, un mapa y tus reseñas de Google. Para apuntar a varios municipios, la opción a medida añade una página por ciudad y por servicio.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en la parte de arriba y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un taller en Francia?',
        answer:
          'La información sobre las piezas de la economía circular (la opción del cliente, las piezas afectadas, las excepciones), el aviso legal (nombre, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. Tus precios por hora y tus paquetes con IVA, expuestos en el taller, también tienen su sitio en la web. Lo preparo todo contigo antes de la puesta en línea.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de taller mecánico, lista para que suene el teléfono',
    description:
      'Una plantilla pensada para talleres, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de taller a tu nombre, gratis de ver',
}
