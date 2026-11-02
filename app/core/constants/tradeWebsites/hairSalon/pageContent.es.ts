import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import {
  HAIR_SALON_BILL_SOURCE,
  HAIR_SALON_PRICE_DISPLAY_SOURCE,
  HAIR_SALON_QUALIFICATION_SOURCE,
} from '~/core/constants/tradeWebsites/hairSalon/pageShared'

export const HAIR_SALON_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para peluquería en Francia: tu demo en 2 minutos',
    description:
      'Mira la web de tu peluquería a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para peluquerías y barberías',
    serviceDescription:
      'Web de peluquería con una plantilla, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con reservas en línea, para peluquerías en Francia.',
    serviceType: 'Creación de página web para peluquerías',
  },
  breadcrumbLabel: 'Peluquería',
  shareImage: {
    titleLines: ['Página web para', 'peluquerías en Francia'],
    highlight: 'peluquerías',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para peluquerías en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'peluquería',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'El nombre de tu peluquería, tu ciudad, tu color, tu logo y tus fotos: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web de peluquería o de barbería en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con la plantilla de esta página, en línea en 48 horas. Una web a medida, con reservas en línea, empieza en 1500 €. En los dos casos, la carta de precios, los horarios, la dirección del salón y los avisos legales obligatorios en Francia están previstos.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para artesanos y comercios de barrio, y desarrollé la plantilla de peluquería de arriba.',
  },
  atelier: {
    styleIntro:
      'Una plantilla pensada para barberías y peluquerías mixtas. Los colores, las fotos y los servicios son tuyos.',
    templates: {
      barber: {
        name: 'Charbon',
        description:
          'Tonos carbón, foto del salón a pantalla completa, grandes títulos en mayúsculas y botón de cita: el aire de una barbería de barrio.',
      },
    },
    mediaIntro:
      'Empieza por una foto del salón: la primera se muestra en grande arriba de la web, la segunda en la presentación. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'womens-cut', label: 'Corte de mujer', defaultSelected: true },
      { id: 'mens-cut', label: 'Corte de hombre', defaultSelected: true },
      { id: 'colour', label: 'Color', defaultSelected: true },
      { id: 'highlights', label: 'Mechas y balayage', defaultSelected: false },
      { id: 'blow-dry', label: 'Peinado y tratamiento', defaultSelected: false },
      { id: 'beard', label: 'Barba', defaultSelected: false },
      { id: 'wedding', label: 'Peinado de novia', defaultSelected: false },
    ],
    serviceDescription: 'Consejo personalizado, precio anunciado antes de empezar.',
    requestTitle: 'Tu web de peluquería, a tu nombre',
  },
  examples: {
    title: 'Un ejemplo de página web para peluquería',
    imageAlt: 'Ejemplo de página web para peluquería, plantilla {name}',
  },
  contents: {
    eyebrow: 'Lo que hace reservar',
    title: 'Lo que debe tener la web de una peluquería',
    intro: 'Seis elementos separan una web que hace reservar de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'CalendarCheck',
        title: 'La cita en un gesto',
        description:
          'Un botón de cita en cada pantalla de móvil: una llamada, un mensaje o tu agenda en línea si tienes una.',
      },
      {
        icon: 'Euro',
        title: 'La carta de precios',
        description:
          'Cortes, colores, packs: los mismos precios con IVA que en el escaparate. El cliente sabe lo que pagará antes de venir.',
      },
      {
        icon: 'MapPin',
        title: 'Dirección y horarios',
        description:
          'La dirección, el mapa, los horarios y los días de cierre: lo que se mira antes de venir. Google también los lee.',
      },
      {
        icon: 'Camera',
        title: 'El salón y tus trabajos',
        description:
          'Tus cortes y tus colores en fotos, con el permiso de tus clientes, y un enlace a tu Instagram: lo justo para que entren con ganas.',
      },
      {
        icon: 'Star',
        title: 'Las reseñas de tus clientes',
        description:
          'Tu nota y tus últimas reseñas de Google, bien a la vista: dan confianza antes de una primera visita.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Oficio y productos',
        description:
          'Tu título de peluquería (BP), tus formaciones y las marcas que usas: lo que da confianza antes de un color o un alisado.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu salón y tu web en Francia',
    intro:
      'Los inspectores franceses de consumo controlan con regularidad las peluquerías y las barberías para verificar la exhibición de precios y la cualificación profesional. Esto es lo que exigen los textos franceses, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Orden del 27 de marzo de 1987',
        title: 'Tus precios en el escaparate y en la caja',
        text: 'En el escaparate, legibles desde fuera: al menos 10 precios con IVA de los servicios más habituales, 20 en un salón mixto, packs detallados. La misma lista donde se paga, y la carta completa de precios en la caja, a la vista de los clientes.',
        sourceName: HAIR_SALON_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HAIR_SALON_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Desde 25 € con IVA',
        title: 'Una nota antes del pago',
        text: 'Por duplicado, antes del pago: fecha, nombre y dirección del salón, nombre del cliente, servicios y productos detallados, total sin IVA y con IVA. Por debajo de 25 €, solo si el cliente la pide. Guardas la copia dos años.',
        sourceName: HAIR_SALON_BILL_SOURCE.name,
        sourceUrl: HAIR_SALON_BILL_SOURCE.url,
      },
      {
        contextLabel: 'Código de la artesanía, art. R121-2',
        title: 'Un título profesional para trabajar en un salón',
        text: 'En un salón, la peluquería exige el brevet professionnel, el brevet de maîtrise o un título de peluquería de nivel igual o superior, o el control efectivo y permanente de alguien que lo tenga. Sin título: tres años de experiencia en el oficio.',
        sourceName: HAIR_SALON_QUALIFICATION_SOURCE.name,
        sourceUrl: HAIR_SALON_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: 'En la propia web',
        title: 'Aviso legal y mediador',
        text: 'Nombre o razón social (con la mención EI si eres empresario individual), dirección, teléfono, correo, número de registro y alojamiento de la web; y el nombre, la dirección y la web del mediador de consumo al que pueden acudir tus clientes.',
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote:
      'Fuentes: Légifrance (orden del 27 de marzo de 1987 sobre la publicidad de las tarifas de peluquería, artículos 1 y 2; orden n.º 83-50/A del 3 de octubre de 1983, artículos 1, 3 y 4; código francés de la artesanía, artículos L121-1 y R121-2 a R121-4), Asamblea Nacional francesa (respuesta del Gobierno publicada el 31 de marzo de 2026 a la pregunta escrita n.º 12555), Entreprendre.Service-Public.fr (menciones obligatorias en la web de una empresa, mediación de consumo). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla Charbon, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos, tu carta de precios y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, reservas en línea conectadas a tu agenda, una página por servicio para el posicionamiento local, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Para ir más lejos en dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: 'Página web de peluquería en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para una peluquería?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con reservas en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos, tu carta de precios y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo cambiar mis precios y mis horarios por mi cuenta?',
        answer:
          'Sí. Cambias tus precios, tus horarios, tus textos y tus fotos desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Mi peluquería aparecerá en Google?',
        answer:
          'La web está pensada para la búsqueda local: dirección, horarios y servicios escritos con claridad, ficha de Google conectada. Para apuntar a cada servicio (color, novias, barba), la opción a medida añade una página por servicio.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de una peluquería en Francia?',
        answer:
          'El aviso legal (nombre o razón social, dirección, número de registro, alojamiento) y los datos de tu mediador de consumo. Los precios, en cambio, son obligatorios en el escaparate y en la caja: mostrarlos también en la web evita sorpresas. Lo preparo todo contigo antes de la puesta en línea.',
      },
      {
        question: '¿La plantilla sirve para una peluquería de mujeres?',
        answer:
          'Viene del mundo de la barbería: tonos oscuros, letras mayúsculas y un titular de bienvenida que habla de corte y de barba. Tus colores, tus fotos y tus servicios sustituyen a los de la demo, y el taller te muestra el resultado. Si tu salón tiene un ambiente muy distinto, la opción a medida parte del tuyo.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de peluquería, lista para llenar tu agenda',
    description:
      'Una plantilla lista para usar, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de peluquería a tu nombre, gratis de ver',
}
