import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE, HOME_REPAIR_PRICE_DISPLAY_SOURCE } from '~/core/constants/tools/officialSources'
import { DECENNIAL_INSURANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE } from '~/core/constants/tradeWebsites/electrician/pageShared'

export const ELECTRICIAN_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para electricista en Francia: demo en 2 minutos',
    description:
      'Mira tu web de electricista a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para electricistas',
    serviceDescription:
      'Web de electricista con una de dos plantillas, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con solicitudes de reparación y de presupuesto en línea, para empresas en Francia.',
    serviceType: 'Creación de página web para electricistas',
  },
  breadcrumbLabel: 'Electricista',
  shareImage: {
    titleLines: ['Página web para', 'electricistas en Francia'],
    highlight: 'electricistas',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para electricistas en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'electricista',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'Tu nombre, tu ciudad, tu color, tu logo y las fotos de tus obras: tu web de electricista se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web de electricista en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con una de las dos plantillas de esta página, en línea en 48 horas. Una web a medida, con solicitudes de reparación o de presupuesto en línea, empieza en 1500 €. En los dos casos, el botón de llamada para las averías, tus tarifas, tu zona de servicio, tus cualificaciones y los avisos legales obligatorios en Francia están previstos.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos, y diseñé las dos plantillas de electricista de arriba.',
  },
  atelier: {
    styleIntro: 'Dos plantillas pensadas para electricistas. Todo sigue siendo modificable después.',
    templates: {
      'electrician-eclat': {
        name: 'Éclat',
        description:
          'Clara y sobria: fondo blanco, botones azul noche, tu ciudad en color en el título y tu nota de Google a la vista.',
      },
      'electrician-lumen': {
        name: 'Lumen',
        description:
          'Fondo noche y amarillo de alta visibilidad, gran botón de llamada, reparaciones 7 días a la semana e instalaciones conformes en una banda.',
      },
    },
    mediaIntro:
      'Tus cuadros renovados y tus obras valen más que cualquier foto de banco de imágenes. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'troubleshooting', label: 'Reparación de averías', defaultSelected: true },
      { id: 'compliance-upgrade', label: 'Adecuación a la normativa', defaultSelected: true },
      { id: 'electrical-panel', label: 'Cuadro eléctrico', defaultSelected: true },
      { id: 'make-safe', label: 'Puesta en seguridad', defaultSelected: false },
      { id: 'rewiring', label: 'Renovación eléctrica', defaultSelected: false },
      { id: 'ev-charging', label: 'Punto de recarga', defaultSelected: false },
      { id: 'lighting', label: 'Iluminación y domótica', defaultSelected: false },
    ],
    serviceDescription: 'Presupuesto gratis, instalación conforme a la norma NF C 15-100.',
    requestTitle: 'Tu web de electricista, a tu nombre',
  },
  examples: {
    title: 'Dos ejemplos de páginas web para electricista',
    imageAlt: 'Ejemplo de página web para electricista, plantilla {name}',
  },
  contents: {
    eyebrow: 'Lo que hace llamar',
    title: 'Lo que debe tener la web de un electricista',
    intro: 'Seis elementos separan una web que da confianza de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'Phone',
        title: 'El número en un gesto',
        description:
          'Un corte de luz se avisa desde el móvil, a veces con la linterna encendida: el botón de llamada se queda arriba en cada pantalla.',
      },
      {
        icon: 'MapPin',
        title: 'La zona de servicio',
        description: 'Los municipios que cubres, escritos con claridad. Google también los lee.',
      },
      {
        icon: 'AlertCircle',
        title: 'Las averías primero',
        description:
          'Diferencial que salta, corte de luz, enchufe que se calienta: las páginas que se buscan por la noche y el fin de semana.',
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
          'Qualifelec, IRVE para los puntos de recarga, seguro decenal: las menciones francesas que dan confianza antes de confiarte un cuadro o un punto de recarga.',
      },
      {
        icon: 'Camera',
        title: 'Fotos, reseñas y solicitud de presupuesto',
        description:
          'Tus cuadros de antes y después, tus reseñas de Google y un formulario de presupuesto: el cliente escribe por la noche y tú le llamas por la mañana.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas que conocer antes de publicar tu web en Francia',
    intro:
      'Una web de reparaciones que no muestra sus precios no cumple la norma, y da menos confianza. Esto es lo que los textos franceses exigen a un electricista, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Orden del 24 de enero de 2017',
        title: 'Tus tarifas en línea, un presupuesto antes de cada reparación',
        text: 'Precio por hora con IVA, cómputo del tiempo, tarifas fijas, desplazamiento, presupuesto gratuito o de pago: fáciles de encontrar en tu web. En casa de un particular, cada reparación o mantenimiento exige antes un presupuesto detallado, sea cual sea el importe.',
        sourceName: HOME_REPAIR_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HOME_REPAIR_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Con cada presupuesto y factura',
        title: 'El certificado del seguro decenal',
        text: 'Una instalación eléctrica empotrada entra en la garantía decenal. El certificado de tu seguro se adjunta a tus presupuestos y facturas, y mencionarlo en la web da confianza antes de la primera llamada.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: 'Código de la energía, artículo D353-2',
        title: 'Una cualificación para instalar puntos de recarga',
        text: 'Salvo puntos de 3,7 kW como máximo en una vivienda privada, los puntos de recarga los instala un profesional con una cualificación expedida por un organismo autorizado (IRVE). Si tu web ofrece puntos de recarga, muestra esa cualificación.',
        sourceName: CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_INSTALLER_QUALIFICATION_SOURCE.url,
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
      'Fuentes: Légifrance (orden del 24 de enero de 2017, artículos 2 a 4 y anexo 1, que cita la electricidad; código de la energía francés, artículo D353-2, en vigor desde el 1 de julio de 2024), Entreprendre.Service-Public.fr (seguro decenal, menciones obligatorias en la web de una empresa, mediación de consumo). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'Una de las dos plantillas, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, solicitudes de reparación o de presupuesto en línea conectadas a tu agenda, una página por municipio para el posicionamiento local, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Ya en dibodev.fr para electricistas',
    toolCard: {
      icon: 'Zap',
      label: 'Test gratis, 6 preguntas',
      title: '¿Qué software para un electricista?',
      description:
        'Presupuestos, intervenciones, certificados Consuel: los precios 2026 de los programas del mercado francés, y cuándo merece la pena el desarrollo a medida.',
    },
    freeTemplateCard: {
      icon: 'Download',
      label: 'Plantilla gratis',
      title: 'Acta de puesta en servicio de electricista: plantilla Excel y PDF',
      description:
        'Con el presupuesto, los controles del cuadro y de la tierra, y el seguimiento del certificado Consuel.',
    },
  },
  faq: {
    title: 'Página web de electricista en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un electricista?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con solicitudes de reparación o de presupuesto en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
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
          'Está pensada para la búsqueda local: zona de servicio escrita con claridad, servicios nombrados como los buscan tus clientes, ficha de Google conectada. Para apuntar a varios municipios, la opción a medida añade una página por ciudad.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un electricista en Francia?',
        answer:
          'Tus tarifas (precio por hora con IVA, desplazamiento, tarifas fijas, presupuesto gratuito o de pago), el aviso legal (nombre, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. Los preparo contigo antes de la puesta en línea, junto con tus cualificaciones y tu seguro decenal.',
      },
      {
        question: '¿Mi web puede destacar las urgencias 7 días a la semana?',
        answer:
          'Sí: el botón de llamada se queda arriba en cada pantalla, y tus días y horarios de urgencias están escritos con claridad. La plantilla Lumen los muestra desde la primera pantalla. Si no trabajas los fines de semana, también lo escribimos: así evitas llamadas que no puedes atender.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de electricista, lista para que suene el teléfono',
    description:
      'Dos plantillas, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de electricista a tu nombre, gratis de ver',
}
