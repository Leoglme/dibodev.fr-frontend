import type { DibodevColdCallingCheckPageContent } from '~/core/types/DibodevColdCallingCheckPage'
import { COLD_CALLING_CHECK_SOURCES } from '~/core/constants/coldCallingCheck/pageShared'

export const COLD_CALLING_CHECK_PAGE_ES: DibodevColdCallingCheckPageContent = {
  meta: {
    title: 'Prospección telefónica prohibida en Francia: ¿puedo llamar?',
    description:
      'Desde el 11 de agosto de 2026, llamar a un particular en Francia exige su consentimiento. 5 preguntas para saber a quién puedes llamar y cómo captar clientes.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Prohibición de la prospección telefónica sin consentimiento en Francia desde el 11 de agosto de 2026: quién puede seguir llamando, y cómo',
  },
  breadcrumbLabel: 'Prospección telefónica: ¿puedo llamar?',
  shareImage: {
    titleLines: ['Prospección telefónica', 'prohibida en Francia:', '¿puedo seguir llamando?'],
    highlight: 'llamando',
    subtitle: 'Artesanos, pymes, autónomos: lo que sigue permitido',
    badge: 'Gratis · 5 preguntas · 1 minuto',
    alt: 'Prospección telefónica prohibida en Francia: ¿puedo seguir llamando? Test gratuito en dibodev.fr',
  },
  hero: {
    titleBefore: 'Prospección telefónica prohibida en Francia: ¿puedes seguir ',
    titleHighlight: 'llamando a tus clientes potenciales',
    titleAfter: '?',
    reassurances: [
      'Gratis, 5 preguntas, 1 minuto',
      'Resultado sin e-mail',
      'Textos oficiales releídos el 26 de octubre de 2026',
    ],
    description:
      'Desde el 11 de agosto de 2026, en Francia, llamar a un particular para venderle algo está prohibido si no ha dado su acuerdo antes. Bloctel ha desaparecido, y muchos artesanos, autónomos y pequeñas empresas ya no saben a quién tienen derecho a llamar: un cliente, un antiguo cliente, alguien que pidió un presupuesto, una empresa. Este test cruza a quién llamas, tu sector, tu relación con esas personas y su consentimiento, y te dice lo que está permitido.',
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador freelance cerca de Rennes. Creo webs que atraen solicitudes, con formulario, ficha de Google y seguimiento de contactos, para artesanos, autónomos y pequeñas empresas.',
  },
  mobileContactBar: {
    text: '¿Encontrar clientes sin llamar?',
    buttonLabel: 'Hablemos',
  },
  facts: {
    anchorId: 'normas',
    eyebrow: 'Lo que dicen los textos',
    title: 'Prospección telefónica en Francia: seis normas comprobadas',
    intro:
      'Las normas releídas el 26 de octubre de 2026 en Légifrance, la web de la DGCCRF (la autoridad francesa de protección del consumidor), la CNIL y Service-Public.',
    facts: [
      {
        contextLabel: 'Ley del 30 de junio de 2025 · desde el 11 de agosto de 2026',
        title: 'Se acabaron las llamadas comerciales a un particular sin su acuerdo previo',
        text: 'Un profesional ya no puede hacer prospección telefónica, por sí mismo o a través de un tercero, a un consumidor que no dio su acuerdo antes de la llamada. Ese acuerdo debe ser libre, específico, informado, inequívoco y revocable, dado mediante un acto positivo claro: el silencio o una casilla ya marcada no valen nada. Le toca al profesional probarlo, quien se beneficia de las llamadas se presume responsable, y todo contrato firmado tras una llamada prohibida es nulo.',
        sourceName: 'Légifrance, artículo L.223-1 del Código de consumo francés',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consumerCodeConsentArticle,
      },
      {
        contextLabel: 'Decreto del 23 de julio de 2026',
        title: 'Un acuerdo de un año como máximo, cuya prueba guardas tres años',
        text: 'La solicitud de acuerdo indica quién eres, lo que ofreces y su duración, de un año como máximo, sin renovación tácita. Guardas la prueba tres años (fecha, hora, información dada) y se la das gratis a la persona que la pida. Puede retirar su acuerdo en cualquier momento, incluso de palabra, de forma tan sencilla como lo dio.',
        sourceName: 'Légifrance, decreto n.º 2026-662 del 23 de julio de 2026',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consentDecree,
      },
      {
        contextLabel: 'Ficha de la DGCCRF del 27 de julio de 2026',
        title: 'Renovación energética, adaptación de la vivienda, CPF: prohibido incluso con acuerdo',
        text: 'En tres sectores, la prospección telefónica de un particular sigue prohibida aunque esté de acuerdo: la renovación energética (desde julio de 2020), la adaptación de la vivienda a la vejez o la discapacidad (añadida por la ley de 2025) y las formaciones financiadas por el CPF. Para estas obras, la prospección por SMS, e-mail y redes sociales también está prohibida, y solo queda permitido devolver la llamada a una persona que lo pidió, en los 5 días hábiles siguientes.',
        sourceName: 'DGCCRF, ficha práctica sobre las reglas de la prospección telefónica',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.dgccrfBusinessRules,
      },
      {
        contextLabel: '11 de agosto de 2026',
        title: 'Bloctel ya no existe: solo cuenta el acuerdo de la persona',
        text: 'La lista de oposición Bloctel desapareció el día en que la ley entró en vigor. Comprobar que un número no está inscrito ya no sirve de nada: la lógica se invierte, y es el acuerdo previo de la persona lo que permite llamarla, salvo contrato en curso.',
        sourceName: 'Entreprendre.Service-Public.gouv.fr, noticia actualizada el 11 de agosto de 2026',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Artículo L.242-16 del Código de consumo francés',
        title: 'Hasta 75 000 € de multa, 375 000 € para una sociedad',
        text: 'Una llamada prohibida expone a una multa administrativa de hasta 75 000 € para una persona física y 375 000 € para una persona jurídica, publicada a costa de la persona sancionada. La DGCCRF controla, sobre todo a partir de las denuncias de los particulares en SignalConso.',
        sourceName: 'Légifrance, artículo L.242-16 del Código de consumo francés',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consumerCodePenaltyArticle,
      },
      {
        contextLabel: 'CNIL · llamadas a profesionales',
        title: 'Llamar a una empresa sigue siendo posible, si la oferta tiene que ver con su oficio',
        text: 'La ley de 2025 protege al consumidor. Para un profesional, la CNIL, la autoridad francesa de protección de datos, admite la prospección telefónica sin acuerdo previo cuando la oferta tiene relación con su profesión, como un software ofrecido al director de informática de una empresa. Debe estar informado, poder oponerse de forma sencilla y gratuita, y saber en cada llamada quién le llama.',
        sourceName: 'CNIL, reglas de la prospección comercial por teléfono',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilPhoneProspecting,
      },
    ],
    calloutEmphasizedIntro: 'Lo que sigue permitido sin acuerdo:',
    calloutText:
      'llamar a un cliente en el marco de un contrato en curso (suscripción, contrato no rescindido, garantía comercial), por ese contrato y lo que lo complementa; ofrecer una suscripción a un periódico o una revista; hacer una llamada que no es comercial, como las de las asociaciones o los institutos de sondeo.',
  },
  cases: {
    anchorId: 'casos',
    eyebrow: 'Caso por caso',
    title: 'Artesano, comerciante, agencia inmobiliaria, autoescuela: quién puede llamar a quién',
    intro:
      'Seis situaciones habituales, con la norma que se aplica. Los casos que los textos no aclaran se señalan como tales.',
    items: [
      {
        title: 'Artesano de la construcción',
        description:
          'Llamar a un particular para ofrecerle obras exige su acuerdo previo y probado. Renovación energética o adaptación de la vivienda: prohibido incluso con acuerdo, fuera de un contrato en curso; solo queda permitido devolver la llamada que pidió, en los 5 días hábiles siguientes.',
      },
      {
        title: 'Empresa con contratos de mantenimiento o suscripciones',
        description:
          'A un cliente cuyo contrato sigue vigente se le puede llamar por ese contrato, y por lo que lo complementa o lo mejora. A un antiguo cliente, con la obra acabada y pagada o solo la garantía legal, no: necesitas su acuerdo.',
      },
      {
        title: 'Comerciante',
        description:
          'La DGCCRF cita la tienda y el momento de la compra para recoger el acuerdo, con una prueba fechada. Sin él, ninguna llamada comercial a un cliente particular. Un e-mail a un cliente sobre productos similares sigue siendo posible sin acuerdo previo, si puede oponerse de forma sencilla.',
      },
      {
        title: 'Agencia inmobiliaria',
        description:
          'Llamar a un propietario visto en un anuncio para proponerle un mandato es hacer prospección a un particular: necesitas su acuerdo previo, y un número publicado no lo es. A un cliente cuyo mandato sigue vigente se le puede llamar por ese mandato.',
      },
      {
        title: 'Autoescuela',
        description:
          'A un alumno cuya formación está en curso se le puede llamar por su formación y lo que la complementa. A un antiguo alumno, con la formación acabada y pagada, no: necesitas su acuerdo. Una formación financiada por el CPF no se puede ofrecer por teléfono, ni siquiera con acuerdo.',
      },
      {
        title: 'Autónomo o empresa que vende a profesionales',
        description:
          'La ley de 2025 no te afecta mientras llames a profesionales con una oferta relacionada con su oficio, presentándote y dejándoles negarse de forma sencilla. Zona gris: el artesano contactado en su móvil personal; ningún texto lo aclara, sé prudente.',
      },
    ],
  },
  timeline: {
    anchorId: 'calendario',
    eyebrow: 'El calendario',
    title: 'Seis fechas, de 2020 a hoy',
    intro: 'Las normas se han endurecido por etapas. Lo que se aplica hoy es la suma de estas fechas.',
    items: [
      {
        title: 'Julio de 2020: la renovación energética, cerrada a la prospección',
        description:
          'Desde el 26 de julio de 2020, llamar a un particular por obras de renovación energética está prohibido, incluso con su acuerdo, fuera de un contrato en curso.',
      },
      {
        title: '1 de marzo de 2023: días, horas y frecuencia regulados',
        description:
          'De lunes a viernes salvo festivos, de 10 a 13 h y de 14 a 20 h, y 4 llamadas como máximo por persona en 30 días.',
      },
      {
        title: '30 de junio de 2025: la ley contra el fraude en las ayudas públicas',
        description:
          'Fija el acuerdo previo para el 11 de agosto de 2026, añade la adaptación de la vivienda a los sectores prohibidos y prohíbe también, para estas obras, la prospección por SMS, e-mail y redes sociales.',
      },
      {
        title: '23 de julio de 2026: el decreto sobre el consentimiento',
        description:
          'Fija la duración del acuerdo, un año como máximo, la prueba que hay que guardar tres años y la retirada posible en cualquier momento, incluso de palabra.',
      },
      {
        title: '11 de agosto de 2026: acuerdo previo obligatorio, fin de Bloctel',
        description:
          'Sin contrato en curso ni acuerdo probado, se acabaron las llamadas comerciales a particulares. La lista Bloctel desaparece el mismo día.',
      },
      {
        title: 'Desde entonces: controles y multas',
        description:
          'La DGCCRF anuncia multas calculadas por llamada y su publicación sistemática; los particulares denuncian los abusos en SignalConso.',
      },
    ],
  },
  findingClientsWithoutCalling: {
    anchorId: 'sin-llamar',
    eyebrow: 'Encontrar clientes sin llamar',
    title: 'Que te lleguen las solicitudes, dentro de las normas',
    intro:
      'Las formas permitidas de encontrar clientes sin hacerles prospección telefónica, en Francia, con la fuente de cada norma.',
    ways: [
      {
        contextLabel: 'Formulario de contacto o de presupuesto',
        title: 'Una casilla «Acepto que me llamen», sin marcar de antemano',
        text: 'Una casilla propia, que la persona marca ella misma, que dice quién eres, lo que ofreces y por cuánto tiempo, un año como máximo. Guarda la fecha y la hora: es tu prueba de acuerdo para devolver la llamada, que hay que conservar tres años.',
        sourceName: 'CNIL, reglas de la prospección comercial por teléfono',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilPhoneProspecting,
      },
      {
        contextLabel: 'Ficha de Google',
        title: 'Tu zona de trabajo, tus horarios y tus reseñas',
        text: 'Una ficha completa, con tu zona de trabajo, tus horarios, fotos y reseñas de clientes, ayuda a la gente de la zona a encontrarte y a llamarte ella misma. Es un consejo de una cámara de comercio, no una obligación.',
        sourceName: 'CCI Savoie, ficha de empresa en Google',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cciGoogleListing,
      },
      {
        contextLabel: 'E-mail a profesionales',
        title: 'Un mensaje relacionado con su actividad, con un enlace para negarse',
        text: 'Para vender a empresas, un e-mail relacionado con su actividad no necesita acuerdo previo, si dice quién eres y permite negarse de forma sencilla y gratuita. A un particular, necesitas su acuerdo, salvo cliente existente y productos similares.',
        sourceName: 'CNIL, reglas de la prospección por e-mail y SMS',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilEmailProspecting,
      },
    ],
    calloutEmphasizedIntro: 'Lo más sencillo: una web que recibe solicitudes.',
    calloutText:
      'Una página por servicio y por zona, un formulario corto con la casilla de consentimiento, enlazados a tu ficha de Google: los clientes vienen a ti, por escrito. Es lo que hago para artesanos, autónomos y pequeñas empresas, cerca de Rennes y a distancia.',
    calloutFootnote: 'Sitio escaparate desde 1500 €, primer contacto gratuito.',
    freelanceRennesLinkLabel: 'Ver mis ofertas de desarrollador web en Rennes',
    homeLinkLabel: 'Descubrir Dibodev',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Prospección telefónica en Francia: las preguntas que me hacen',
    questions: [
      {
        question: '¿Sigue existiendo Bloctel?',
        answer:
          'No. Bloctel se suprimió el 11 de agosto de 2026. Comprobar que un número no está inscrito ya no sirve de nada: desde esa fecha, la lógica se invierte, y necesitas el acuerdo previo de la persona para llamarla, salvo si tienes un contrato en curso con ella.',
      },
      {
        question: '¿Puedo llamar a un cliente que me pidió un presupuesto?',
        answer:
          'Ningún texto ni ninguna ficha oficial lo aclara a día de hoy: la pregunta se hizo en un webinario de la CNIL y la DGCCRF, sin respuesta por escrito. Lo más seguro: añade a tu formulario de presupuesto una casilla sin marcar de antemano, «Acepto que me llamen por teléfono sobre mi solicitud», y guarda la fecha y la hora. Para la renovación energética y la adaptación de la vivienda, el decreto solo permite devolver la llamada a la persona en los 5 días hábiles siguientes a su solicitud, sobre lo que pidió, si puedes probar esa solicitud.',
      },
      {
        question: '¿Puedo volver a llamar a mis antiguos clientes?',
        answer:
          'Solo con su acuerdo, salvo si el contrato sigue en curso. Un contrato está en curso mientras sigue vigente una suscripción, un contrato no rescindido, un contrato de duración determinada o una garantía comercial. Cuando la obra está acabada y pagada, o solo cubierta por la garantía legal, ya no lo está: necesitas el acuerdo previo de la persona.',
      },
      {
        question: '¿Cómo recojo un acuerdo válido?',
        answer:
          'Nunca por teléfono: no puedes llamar a alguien para preguntarle si acepta que lo llamen. Hace falta un gesto claro por su parte, por ejemplo una casilla propia y sin marcar de antemano en tu formulario, tu presupuesto o en tu tienda, que indique tu nombre, lo que ofreces y una duración de un año como máximo, sin renovación tácita. Guarda la prueba tres años (fecha, hora, información dada) y deja que la persona retire su acuerdo de forma igual de sencilla, incluso de palabra.',
      },
      {
        question: '¿Puedo usar un fichero de números comprado?',
        answer:
          'Para particulares, solo si cada persona aceptó que la llamara tu empresa, por lo que vendes, y si puedes probarlo. La prospección hecha por un proveedor por tu cuenta también está incluida, y quien se beneficia de las llamadas se presume responsable. Un número encontrado en un directorio o un anuncio no vale como acuerdo. Para profesionales, se aplican las reglas de la CNIL.',
      },
      {
        question: '¿Y los SMS y los e-mails?',
        answer:
          'Siguen las reglas de la CNIL. A un particular: acuerdo previo, salvo cliente existente y productos o servicios similares. A un profesional: sin acuerdo previo si el mensaje tiene relación con su actividad, siempre que lo informes y le permitas negarse de forma sencilla; las direcciones genéricas (contact@…) no están sujetas a estas reglas. Para la renovación energética y la adaptación de la vivienda, la prospección por SMS, e-mail y redes sociales está prohibida, fuera de un contrato en curso.',
      },
      {
        question: '¿Qué días y a qué horas se puede seguir llamando?',
        answer:
          'Cuando la llamada está permitida (contrato en curso o acuerdo probado): de lunes a viernes salvo festivos, de 10 a 13 h y de 14 a 20 h, y 4 llamadas o intentos como máximo por persona en 30 días. Una fecha y una hora elegidas por la persona son una excepción a los días y las horas, no al número de llamadas. Tu número no debe estar oculto, dices quién eres y que la llamada es comercial, y si la persona se niega, la llamada termina y no vuelves a llamar. Solo se compromete tras firmar una confirmación por escrito.',
      },
      {
        question: '¿Qué se arriesga?',
        answer:
          'Una multa administrativa de hasta 75 000 € para una persona física y 375 000 € para una sociedad, publicada a costa de la persona sancionada; la DGCCRF anuncia multas calculadas por llamada. Todo contrato obtenido con una llamada prohibida es nulo. Y el abuso de debilidad cometido mediante prospección telefónica se castiga con 5 años de prisión y 500 000 € de multa.',
      },
      {
        question: '¿Afecta al B2B?',
        answer:
          'No la ley de 2025, que protege al consumidor, ni las reglas de días, horas y frecuencia. Para llamar a un profesional, la CNIL pide que la oferta tenga relación con su oficio (un software ofrecido al director de informática, por ejemplo), que te presentes en cada llamada y que pueda negarse de forma sencilla y gratuita. Zona gris: el artesano o el autónomo contactado en su móvil personal. Ningún texto lo aclara; en caso de duda, trátalo como a un particular.',
      },
      {
        question: '¿Siguen siendo válidos los acuerdos que recogí antes del 11 de agosto de 2026?',
        answer:
          'Ningún texto lo aclara a día de hoy. Lo más prudente: quedarte solo con los que ya cumplen las reglas del decreto (gesto claro, tu nombre, lo que ofreces, un año como máximo, prueba fechada), y volver a pedir los demás, por escrito, nunca por teléfono.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    intro: 'Tres artículos para que los clientes vengan a ti.',
  },
  contactCta: {
    title: '¿Y si fueran los clientes quienes te llamaran?',
    description:
      'Te ayudo a que te lleguen las solicitudes en lugar de llamar: web, ficha de Google, formulario con consentimiento. Descríbeme tu actividad, te respondo en 24 h.',
    button: 'Atraer clientes sin llamar',
  },
}
