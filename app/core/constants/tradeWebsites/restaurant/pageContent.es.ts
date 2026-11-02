import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  HOMEMADE_DISH_MENTION_SOURCE,
  RESTAURANT_ALLERGENS_SOURCE,
  RESTAURANT_MEAT_ORIGIN_SOURCE,
  RESTAURANT_PRICE_DISPLAY_SOURCE,
} from '~/core/constants/tradeWebsites/restaurant/pageShared'

export const RESTAURANT_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para restaurante en Francia: tu demo en 2 minutos',
    description:
      'Mira tu web de restaurante a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para restaurantes',
    serviceDescription:
      'Web de restaurante con plantilla, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con reserva de mesa y pedidos en línea, para restaurantes en Francia.',
    serviceType: 'Creación de página web para restaurantes',
  },
  breadcrumbLabel: 'Restaurante',
  shareImage: {
    titleLines: ['Página web para', 'restaurantes en Francia'],
    highlight: 'restaurantes',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para restaurantes en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'restaurante',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'El nombre de tu restaurante, tu ciudad, tu color, tu logo y tus platos: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web para un restaurante, un bistró o un food truck en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con la plantilla de esta página, en línea en 48 horas. Una web a medida, con reserva de mesa o pedidos en línea, empieza en 1500 €. En los dos casos, la carta, los horarios, el acceso y los avisos obligatorios en Francia están previstos.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos y comercios, y desarrollé la plantilla de restaurante de arriba.',
  },
  atelier: {
    styleIntro:
      'Una plantilla pensada para la restauración, del bistró al food truck. Colores, fotos y textos son tuyos.',
    templates: {
      food: {
        name: 'Arche',
        description: 'Fondo crema, gran título verde bosque, foto en arco y botón de menú en la parte superior.',
      },
    },
    mediaIntro:
      'Tus platos, tu sala y tu fachada valen más que cualquier foto de banco de imágenes. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'daily-menu', label: 'Menú del día', defaultSelected: true },
      { id: 'table-booking', label: 'Reserva de mesa', defaultSelected: true },
      { id: 'takeaway', label: 'Para llevar', defaultSelected: true },
      { id: 'delivery', label: 'Entrega a domicilio', defaultSelected: false },
      { id: 'private-hire', label: 'Privatización', defaultSelected: false },
      { id: 'catering', label: 'Catering', defaultSelected: false },
      { id: 'terrace', label: 'Terraza', defaultSelected: false },
    ],
    serviceDescription: 'Información y reservas por teléfono.',
    requestTitle: 'Tu web de restaurante, a tu nombre',
  },
  examples: {
    title: 'Un ejemplo de página web para restaurante',
    imageAlt: 'Ejemplo de página web para restaurante, plantilla {name}',
  },
  contents: {
    eyebrow: 'Lo que hace reservar',
    title: 'Lo que debe tener la web de un restaurante',
    intro: 'Seis elementos marcan la diferencia entre una web que se mira y una mesa reservada.',
    cards: [
      {
        icon: 'Utensils',
        title: 'La carta y sus precios, al día',
        description:
          'La carta y el menú del día en texto real, no en PDF ni en foto borrosa: legibles en el móvil, y Google también los lee.',
      },
      {
        icon: 'CalendarCheck',
        title: 'Reservar sin buscar',
        description: 'Un botón de reserva en cada pantalla, y el teléfono justo al lado para quien prefiere llamar.',
      },
      {
        icon: 'MapPin',
        title: 'Horarios y acceso',
        description:
          'Servicios de mediodía y de noche, días de cierre, dirección y aparcamiento: los mismos que en tu ficha de Google.',
      },
      {
        icon: 'Camera',
        title: 'Tus platos en foto',
        description:
          'Fotos de tus platos reales y de tu sala, aunque las hagas con el móvil: dan más ganas que las de un banco de imágenes.',
      },
      {
        icon: 'Star',
        title: 'Las reseñas a la vista',
        description:
          'Tu nota de Google y algunas reseñas recientes: a menudo es lo que decide entre dos restaurantes vecinos.',
      },
      {
        icon: 'Bike',
        title: 'Para llevar, a domicilio, privatizar',
        description:
          'Para llevar, entrega a domicilio, grupos y catering: cada servicio presentado con sus condiciones y un contacto directo.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu carta y tu web en Francia',
    intro:
      'Precios, alérgenos, origen de la carne, platos caseros: la carta de un restaurante está muy regulada en Francia, y tu web la muestra. Esto es lo que exigen los textos franceses, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Orden del 27 de marzo de 1987',
        title: 'Precios expuestos fuera, servicio incluido',
        text: 'Menús o carta del día y precios de al menos cinco vinos, legibles desde fuera durante el servicio, como mínimo desde las 11:30 al mediodía y las 18:00 por la noche. Precios con impuestos y servicio, bebida incluida o no. Un código QR por sí solo no basta.',
        sourceName: RESTAURANT_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: RESTAURANT_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de julio de 2015',
        title: 'Los 14 alérgenos, por escrito',
        text: 'Gluten, leche, huevos, frutos de cáscara…: los 14 alérgenos regulados presentes en cada plato se indican por escrito, expuestos en la sala o en un documento de libre consulta. En un pedido en línea, la información se da antes de confirmarlo.',
        sourceName: RESTAURANT_ALLERGENS_SOURCE.name,
        sourceUrl: RESTAURANT_ALLERGENS_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 19 de febrero de 2025',
        title: 'El origen de cada carne',
        text: 'El porcino, el ovino y las aves se suman al vacuno: para la carne comprada cruda, el país de origen, o los países de cría y sacrificio, en la carta o en un cartel. Restaurante sin sala: el origen se indica antes del pedido, también en línea.',
        sourceName: RESTAURANT_MEAT_ORIGIN_SOURCE.name,
        sourceUrl: RESTAURANT_MEAT_ORIGIN_SOURCE.url,
      },
      {
        contextLabel: 'En la carta y en línea',
        title: 'La mención «fait maison» (casero), plato por plato',
        text: 'Un plato «fait maison» se cocina en el local a partir de productos brutos. La mención o su logo acompaña a cada plato afectado, en la carta y en tu web, o aparece una sola vez si toda la carta es casera.',
        sourceName: HOMEMADE_DISH_MENTION_SOURCE.name,
        sourceUrl: HOMEMADE_DISH_MENTION_SOURCE.url,
      },
    ],
    footnote:
      'Fuentes: DGCCRF (ficha práctica sobre restaurantes, 10 de febrero de 2025), Légifrance (orden del 27 de marzo de 1987, artículos 1, 4 y 5; código de consumo francés, artículos R. 412-12 a R. 412-14 y D. 122-1 a D. 122-3; decreto n.º 2002-1465 modificado el 13 de febrero de 2025; decreto n.º 2023-492), EUR-Lex (reglamento UE n.º 1169/2011, artículos 14 y 44, anexo II). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla de esta página, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tu carta, tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, reserva de mesa en línea con tus franjas horarias, pedidos para llevar o a domicilio, carta en varios idiomas, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Para ir más lejos en dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: 'Página web de restaurante en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un restaurante?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con reservas o pedidos en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento, con un formulario de solicitud de reserva. Tú aportas tu carta, tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo cambiar mi carta yo mismo?',
        answer:
          'Sí. Cambias tus platos, tus textos, tus horarios y tus fotos desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Mi restaurante aparecerá en Google?',
        answer:
          'La web está pensada para la búsqueda local: dirección, horarios y carta escritos en texto, ficha de Google conectada. Cuando alguien busca «restaurante» y tu ciudad, a menudo aparece primero tu ficha de Google: la web la completa con tu carta y tus fotos.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un restaurante en Francia?',
        answer:
          'El aviso legal (nombre, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. En la carta en línea, la mención «fait maison» (casero) acompaña a los platos afectados, y si aceptas pedidos, los alérgenos se muestran antes de confirmarlos. Los preparo contigo antes de la puesta en línea.',
      },
      {
        question: '¿Un código QR hacia mi web puede sustituir la carta expuesta?',
        answer:
          'No. La DGCCRF, la autoridad francesa de consumo, lo recuerda: un código QR por sí solo no basta para la información obligatoria expuesta, como los menús y los precios visibles desde fuera. La web es un complemento: da a conocer tu carta antes de la visita, y el código QR de la mesa puede llevar a ella.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de restaurante, lista para recibir reservas',
    description:
      'Una plantilla pensada para la restauración, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de restaurante a tu nombre, gratis de ver',
}
