import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  DENTIST_COMMUNICATION_GUIDANCE_SOURCE,
  DENTIST_COMMUNICATION_SOURCE,
  DENTIST_FEES_ON_WEBSITE_SOURCE,
  DENTIST_QUOTE_RULES_SOURCE,
} from '~/core/constants/tradeWebsites/dentist/pageShared'

export const DENTIST_WEBSITE_PAGE_ES: DibodevTradeWebsitePageContent = {
  meta: {
    title: 'Página web para dentista en Francia: tu demo en 2 minutos',
    description:
      'Mira tu web de dentista a tu nombre en 2 minutos: 290 € en un solo pago, dominio y alojamiento incluidos, en línea en 48 h. A medida desde 1500 €.',
    inLanguage: 'es-ES',
    serviceName: 'Creación de página web para clínicas dentales',
    serviceDescription:
      'Web de clínica dental con una plantilla, a tu nombre, con tu color y tus fotos, dominio y alojamiento incluidos, o web a medida con reservas en línea, dentro del código deontológico de los dentistas en Francia.',
    serviceType: 'Creación de página web para dentistas',
  },
  breadcrumbLabel: 'Dentista',
  shareImage: {
    titleLines: ['Página web para', 'dentistas en Francia'],
    highlight: 'dentistas',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web para dentistas en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titleBefore: 'Página web para ',
    titleHighlight: 'dentista',
    titleAfter: ' en Francia: mira la tuya en 2 minutos',
    intro:
      'El nombre de tu clínica, tu ciudad, tu color, tu logo y tus fotos: la web se construye ante tus ojos mientras respondes. 290 € en un solo pago con plantilla, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    reassurances: ['2 minutos', 'Sin registro', 'Resultado inmediato'],
  },
  summary: {
    text: 'En Dibodev, una web de clínica dental en Francia cuesta 290 € en un solo pago, dominio y alojamiento incluidos, con la plantilla de esta página, en línea en 48 horas. Una web a medida, con reservas en línea, empieza en 1500 €. En los dos casos, la página de honorarios, las urgencias y los avisos legales obligatorios en Francia están previstos, dentro del código deontológico de los dentistas.',
    authorBio:
      'desarrollador independiente cerca de Rennes, en Francia. Creo webs y programas para profesionales independientes y pequeñas empresas, y diseñé la plantilla de clínica dental de arriba.',
  },
  atelier: {
    styleIntro: 'Una plantilla pensada para clínicas dentales. Colores, fotos y textos son tuyos.',
    templates: {
      dental: {
        name: 'Family Care',
        description:
          'Fondo blanco y grandes títulos elegantes, horario y teléfono en la cabecera, gran botón para pedir cita.',
      },
    },
    mediaIntro:
      'Tu clínica, tu sala de tratamiento, tu equipo: las fotos reales dan confianza antes de la primera cita. Nunca un paciente reconocible. Sin fotos, la web conserva las de la plantilla.',
    serviceOptions: [
      { id: 'dental-care', label: 'Revisiones y limpieza', defaultSelected: true },
      { id: 'prosthetics', label: 'Coronas y prótesis', defaultSelected: true },
      { id: 'dental-emergencies', label: 'Urgencias dentales', defaultSelected: true },
      { id: 'implants', label: 'Implantes', defaultSelected: false },
      { id: 'orthodontics', label: 'Ortodoncia', defaultSelected: false },
      { id: 'teeth-whitening', label: 'Blanqueamiento', defaultSelected: false },
      { id: 'children-dentistry', label: 'Odontopediatría', defaultSelected: false },
    ],
    serviceDescription: 'Explicaciones claras y honorarios anunciados antes del tratamiento.',
    requestTitle: 'Tu web de clínica dental, a tu nombre',
  },
  contents: {
    eyebrow: 'Lo que buscan los pacientes',
    title: 'Lo que debe tener la web de un dentista',
    intro: 'Seis elementos separan una web que informa y da confianza de una simple tarjeta de visita en línea.',
    cards: [
      {
        icon: 'CalendarCheck',
        title: 'La cita en un gesto',
        description: 'Un botón de llamada y un enlace para pedir cita, visibles en cada pantalla de móvil, sin buscar.',
      },
      {
        icon: 'AlertCircle',
        title: 'Las urgencias, claras',
        description:
          'Dolor, diente roto, absceso: cómo contactarte con urgencia, y qué hacer un domingo o un día festivo.',
      },
      {
        icon: 'Euro',
        title: 'Tus honorarios y formas de pago',
        description:
          'Los honorarios de tus 5 a 10 tratamientos más habituales, como recomienda el Colegio de dentistas francés, y las formas de pago aceptadas.',
      },
      {
        icon: 'Info',
        title: 'Los tratamientos, bien explicados',
        description:
          'Una página por tratamiento: limpieza, implantes, ortodoncia, odontopediatría. Explicaciones claras, sin prometer resultados.',
      },
      {
        icon: 'ShieldCheck',
        title: 'Quién atiende a tus pacientes',
        description:
          'Cada profesional con su foto, sus títulos reconocidos y su número RPPS, el registro francés de profesionales de la salud: una presentación verificable.',
      },
      {
        icon: 'MapPin',
        title: 'Acceso, horario, accesibilidad',
        description:
          'Dirección, transporte, aparcamiento, horario y acceso en silla de ruedas: todo lo que se busca antes de venir.',
      },
    ],
  },
  rules: {
    eyebrow: 'Lo que exige la ley francesa',
    title: 'Cuatro reglas para tu web y tus presupuestos en Francia',
    intro:
      'Desde el decreto del 22 de diciembre de 2020, un dentista en Francia puede presentar su actividad en una web, dentro de un marco preciso. Esto es lo que exigen los textos franceses y el Colegio de dentistas, leídos el 2 de noviembre de 2026.',
    facts: [
      {
        contextLabel: 'Artículo R. 4127-215-1',
        title: 'Informar, sin testimonios ni comparaciones',
        text: 'Tus competencias, tu trayectoria, tus tratamientos y tus condiciones de ejercicio, sí. Pero con información leal y honesta: sin testimonios de pacientes, sin compararte con otros dentistas, sin empujar a tratamientos innecesarios.',
        sourceName: DENTIST_COMMUNICATION_SOURCE.name,
        sourceUrl: DENTIST_COMMUNICATION_SOURCE.url,
      },
      {
        contextLabel: 'Recomendaciones del 19 de junio de 2026',
        title: 'Ni reseñas, ni antes y después, ni prioridad en Google',
        text: 'Para el Colegio de dentistas francés, las notas y reseñas de pacientes no caben en la web, y las fotos de antes y después pueden sugerir un resultado seguro. Cualquier método, de pago o no, para salir primero en Google o en un directorio está prohibido.',
        sourceName: DENTIST_COMMUNICATION_GUIDANCE_SOURCE.name,
        sourceUrl: DENTIST_COMMUNICATION_GUIDANCE_SOURCE.url,
      },
      {
        contextLabel: 'Artículo R. 4127-240',
        title: 'Tus honorarios, en la web',
        text: 'Una web que presenta tu actividad indica tus honorarios, las formas de pago aceptadas y las reglas de acceso a la atención sin discriminación, además del cartel en la clínica. La información es clara, honesta, precisa y no comparativa.',
        sourceName: DENTIST_FEES_ON_WEBSITE_SOURCE.name,
        sourceUrl: DENTIST_FEES_ON_WEBSITE_SOURCE.url,
      },
      {
        contextLabel: 'Orden del 30 de mayo de 2018',
        title: 'Un presupuesto antes de cualquier prótesis',
        text: 'Corona, puente, prótesis removible: se entrega un presupuesto normalizado antes del tratamiento, y uno escrito en cuanto el suplemento de honorarios alcanza 70 €. Para una prótesis, indica dónde se fabrica y, salvo excepción, una opción 100% Santé.',
        sourceName: DENTIST_QUOTE_RULES_SOURCE.name,
        sourceUrl: DENTIST_QUOTE_RULES_SOURCE.url,
      },
    ],
    footnote:
      'Fuentes: Légifrance (código de salud pública francés, artículos R. 4127-215-1, R. 4127-217 y R. 4127-240, del decreto n.º 2020-1658 del 22 de diciembre de 2020), recomendaciones del Colegio de dentistas francés sobre la comunicación profesional (versión del 19 de junio de 2026), DGCCRF (cuidados dentales y presupuestos, según la orden del 30 de mayo de 2018), Entreprendre.Service-Public.fr (menciones obligatorias en la web de una empresa, mediación de consumo). Leídas el 2 de noviembre de 2026.',
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla de clínica dental, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, reservas en línea conectadas a tu agenda, una página por tratamiento y por profesional, la web en varios idiomas, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  resources: {
    title: 'Para ir más lejos en dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: 'Página web de dentista en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un dentista?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos. Una web a medida, con reservas en línea, empieza en 1500 €. El barómetro de precios de una página web, que compara 20 fuentes francesas, da los órdenes de magnitud del mercado.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Un dentista puede tener página web en Francia?',
        answer:
          'Sí. El código deontológico de los dentistas franceses, flexibilizado por el decreto del 22 de diciembre de 2020, te permite presentar en una web tus competencias, tu trayectoria y tus condiciones de ejercicio. La web sigue siendo informativa: ni testimonios ni notas de pacientes, ni comparaciones con otros dentistas.',
      },
      {
        question: '¿Puedo modificar mi web yo mismo?',
        answer:
          'Sí. Cambias tus textos, tus fotos y tus honorarios desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: '¿En cuánto tiempo está la web en línea?',
        answer:
          '48 horas después de recibir tus textos y tus fotos para una web con plantilla. De dos a cuatro semanas para una web a medida.',
      },
      {
        question: '¿Mi web aparecerá en Google?',
        answer:
          'Está hecha para que la encuentren: nombre de la clínica, dirección, tratamientos y horario escritos con claridad, legibles para Google. En cambio, ni anuncios de pago ni trucos para pasar por delante de otros dentistas: el código deontológico francés prohíbe a los dentistas cualquier posicionamiento prioritario.',
      },
      {
        question: '¿Puedo ver una web real antes de pagar?',
        answer:
          'Sí, es el principio de esta página: compones tu web en el taller y recibes una demo a tu nombre en 24 horas laborables, antes de decidir nada.',
      },
      {
        question: '¿Qué menciones son obligatorias en la web de un dentista en Francia?',
        answer:
          'Tus honorarios y las formas de pago aceptadas, el aviso legal (identidad, dirección, contacto, número de registro, alojamiento), tu título de cirujano dentista, el Colegio en el que estás inscrito y las normas profesionales aplicables. Sin mediador de consumo: la atención sanitaria está excluida de la mediación. Lo preparo todo contigo antes de la puesta en línea.',
      },
    ],
  },
  contactCta: {
    title: 'Tu web de clínica dental, lista para que te pidan cita',
    description:
      'Una plantilla pensada para clínicas dentales, una demo a tu nombre en 24 horas laborables y un precio conocido de antemano. Si te basta una web con plantilla, te lo digo.',
  },
  mobileBarText: 'Una web de dentista a tu nombre, gratis de ver',
}
