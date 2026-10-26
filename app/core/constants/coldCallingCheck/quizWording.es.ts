import type { DibodevColdCallingCheckQuizWording } from '~/core/types/DibodevColdCallingCheckQuiz'

export const COLD_CALLING_CHECK_QUIZ_WORDING_ES: DibodevColdCallingCheckQuizWording = {
  quizName: 'Prospección telefónica prohibida en Francia: ¿puedo seguir llamando?',
  questions: [
    {
      id: 'targets',
      title: '¿A quién llamas para vender?',
      helpText: 'Las llamadas para ofrecer tus servicios o tus productos, en Francia.',
      leadMessageLabel: 'Personas llamadas',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'consumers', label: 'A particulares', unit: '', icon: 'Smile' },
        { id: 'businesses', label: 'A empresas y profesionales', unit: '', icon: 'Store' },
        { id: 'both', label: 'A ambos', unit: '', icon: 'Phone' },
      ],
    },
    {
      id: 'sector',
      title: '¿Qué les ofreces?',
      helpText: 'Tres sectores tienen reglas aparte, más estrictas.',
      leadMessageLabel: 'Actividad',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'housingWorks',
          label:
            'Renovación energética (aislamiento, bomba de calor, solar…) o adaptación de la vivienda a la vejez o la discapacidad',
          unit: '',
          icon: 'KeyRound',
        },
        {
          id: 'cpfTraining',
          label: 'Formaciones financiadas por el CPF (cuenta personal de formación francesa)',
          unit: '',
          icon: 'ClipboardCheck',
        },
        { id: 'other', label: 'Otra cosa: obras, servicios, productos, suscripciones…', unit: '', icon: 'Wrench' },
      ],
    },
    {
      id: 'relationship',
      title: '¿Estas personas ya son clientes tuyos?',
      helpText: 'El caso más frecuente entre las personas a las que llamas.',
      leadMessageLabel: 'Relación con estas personas',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'activeContract',
          label: 'Sí, con un contrato en curso (suscripción, contrato de mantenimiento, garantía comercial)',
          unit: '',
          icon: null,
        },
        {
          id: 'formerContract',
          label: 'Sí, pero el contrato ha terminado (obra acabada y pagada, solo la garantía legal)',
          unit: '',
          icon: null,
        },
        { id: 'notCustomers', label: 'No, todavía no', unit: '', icon: null },
      ],
    },
    {
      id: 'consent',
      title: '¿Aceptaron que las llamaras tú, antes de la llamada?',
      helpText:
        'Un acuerdo dado por escrito o con un gesto claro, nunca con el silencio ni con una casilla ya marcada.',
      leadMessageLabel: 'Consentimiento previo',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'documented',
          label: 'Sí, hace menos de un año, y guardo la prueba (casilla sin marcar de antemano, fecha y hora)',
          unit: '',
          icon: null,
        },
        { id: 'notDocumented', label: 'Sí, pero sin prueba, o hace más de un año', unit: '', icon: null },
        { id: 'none', label: 'No', unit: '', icon: null },
        { id: 'unsure', label: 'No lo sé', unit: '', icon: null },
      ],
    },
    {
      id: 'numberSources',
      title: '¿Dónde encuentras los números?',
      helpText: '',
      leadMessageLabel: 'Origen de los números',
      display: 'cards',
      selection: 'multiple',
      maxSelected: null,
      options: [
        { id: 'purchasedList', label: 'Un fichero comprado o alquilado', unit: '', icon: 'FileSpreadsheet' },
        {
          id: 'inboundRequests',
          label: 'Personas que me escribieron o me pidieron un presupuesto',
          unit: '',
          icon: 'Mail',
        },
        { id: 'directories', label: 'Directorios, Google Maps o anuncios', unit: '', icon: 'Search' },
        { id: 'other', label: 'Mis clientes, el boca a boca u otro', unit: '', icon: 'MessageCircle' },
      ],
    },
  ],
  verdicts: {
    sectorBanned: {
      title: 'En tu sector, está prohibido, incluso con consentimiento',
      explanation:
        'En Francia, para la renovación energética, la adaptación de la vivienda a la vejez o la discapacidad y las formaciones financiadas por el CPF, la prospección telefónica de un particular está prohibida, aunque esté de acuerdo, fuera de un contrato en curso. Es una regla propia de estos sectores, más estricta que la del consentimiento que se aplica a todos desde el 11 de agosto de 2026.',
      headline: 'Prohibido',
      headlineSuffix: 'incluso con el acuerdo de la persona, fuera de un contrato en curso',
      details: [
        { label: 'Llamadas', value: 'prohibidas' },
        { label: 'Aunque acepte', value: 'prohibidas' },
        { label: 'Contrato en curso', value: 'permitidas' },
      ],
      cardFootnote: 'Prohibición propia de tu sector, además de la regla del consentimiento del 11 de agosto de 2026.',
      ctaLabel: 'Atraer clientes sin llamar',
      leadBudget: 'Sector prohibido para la prospección',
    },
    consentRequired: {
      title: 'Sin consentimiento probado, ya no puedes llamarlos',
      explanation:
        'Desde el 11 de agosto de 2026, en Francia, llamar a un particular para venderle algo exige su consentimiento previo, y te toca a ti probarlo. Sin contrato en curso con él y sin ese consentimiento, la llamada está prohibida, la hagas tú o un proveedor por ti, y un contrato obtenido así es nulo.',
      headline: 'Prohibido sin acuerdo',
      headlineSuffix: 'previo y probado, desde el 11 de agosto de 2026',
      details: [
        { label: 'Llamadas', value: 'solo con acuerdo' },
        { label: 'Validez', value: '1 año como máximo' },
        { label: 'Contrato obtenido', value: 'nulo' },
        { label: 'Multa', value: '75 000 € / 375 000 €' },
      ],
      cardFootnote:
        'Multa de hasta 75 000 € para un empresario individual y 375 000 € para una sociedad, publicada a su costa.',
      ctaLabel: 'Atraer clientes sin llamar',
      leadBudget: 'Particulares: consentimiento por recoger',
    },
    allowedWithRules: {
      title: 'Puedes llamar, siguiendo las reglas',
      explanation:
        'Con un contrato en curso, puedes llamar a tus clientes por ese contrato y lo que lo complementa; con un consentimiento probado de menos de un año, por lo que este indica. Las llamadas siguen reguladas en Francia: días, horas, número de llamadas, número visible, presentación al inicio de la llamada. Y la persona solo se compromete tras firmar una confirmación por escrito.',
      headline: 'Permitido, regulado',
      headlineSuffix: 'por un contrato en curso o con un consentimiento probado',
      details: [
        { label: 'Días', value: 'de lunes a viernes' },
        { label: 'Horas', value: '10-13 h y 14-20 h' },
        { label: 'Llamadas', value: 'hasta 4 en 30 días' },
        { label: 'Número', value: 'nunca oculto' },
      ],
      cardFootnote:
        'Salvo días festivos. Una fecha y una hora elegidas por la persona son una excepción a los días y las horas, no al número de llamadas.',
      ctaLabel: 'Atraer más clientes sin llamar',
      leadBudget: 'Llamadas permitidas, reglas por seguir',
    },
    businessAllowed: {
      title: 'Entre profesionales, la llamada sigue permitida',
      explanation:
        'La ley francesa de 2025 protege a los consumidores: no se aplica a tus llamadas a empresas, como tampoco las reglas de días y horas. La CNIL, la autoridad francesa de protección de datos, admite la llamada a un profesional si tu oferta tiene relación con su oficio, si te presentas y si puede negarse de forma sencilla y gratuita.',
      headline: 'Permitido',
      headlineSuffix: 'si tu oferta tiene relación con su oficio',
      details: [
        { label: 'Llamadas', value: 'permitidas' },
        { label: 'Oferta', value: 'ligada a su oficio' },
        { label: 'Negativa', value: 'sencilla y gratuita' },
        { label: 'Días y horas', value: 'no regulados' },
      ],
      cardFootnote:
        'Reglas de la CNIL para la prospección de profesionales; la ley del 30 de junio de 2025 protege a los consumidores.',
      ctaLabel: 'Atraer clientes sin llamar',
      leadBudget: 'Prospección entre profesionales',
    },
  },
  cardEyebrow: 'La regla para ti',
  cardFootnoteLinkLabel: 'Ver los textos',
  cardFootnoteLinkHref: '#normas',
  adviceTitle: 'Lo que haría en tu lugar',
  advice: {
    housingCallback:
      'Única excepción: devolver la llamada a una persona que te pidió información, en los 5 días hábiles siguientes, solo sobre lo que pidió, guardando tres años la prueba de su solicitud.',
    housingMessages:
      'Nada de rodeos por SMS, e-mail o redes sociales: para estas obras, la prospección también está prohibida ahí, fuera de un contrato en curso.',
    cpfNoCallback:
      'Para las formaciones del CPF, la excepción de la llamada en 5 días prevista por el decreto no se aplica: solo cubre la renovación energética y la adaptación de la vivienda.',
    consentUnsure:
      'Sin prueba fechada (casilla marcada por la persona, fecha, hora), considera que no tienes su consentimiento: te toca a ti probarlo.',
    consentNotProven:
      'Un consentimiento sin prueba, o de hace más de un año, no cuenta: vale un año como máximo, sin renovación tácita, y su prueba se guarda tres años.',
    formerCustomers:
      'Un contrato terminado (obra acabada y pagada, solo la garantía legal) ya no está «en curso»: para llamar a estos antiguos clientes, necesitas su consentimiento.',
    collectConsent:
      'Recoge el consentimiento sin llamar: una casilla sin marcar de antemano en tu formulario o tu presupuesto, en tu tienda o al hacer una compra, con tu nombre, lo que ofreces y una duración de un año como máximo. Guarda la prueba tres años.',
    quoteRequests:
      'Las personas que te piden un presupuesto: ningún texto dice todavía con claridad si puedes devolverles la llamada sin su consentimiento. Añade a tu formulario una casilla «Acepto que me llamen», es lo más seguro.',
    purchasedList:
      'Un fichero comprado no basta: cada persona debe haber aceptado que la llames tú, por lo que vendes, y te toca a ti probarlo, aunque llame un proveedor por ti.',
    directoryNumbers:
      'Un número encontrado en un directorio, en Google Maps o en un anuncio no es un consentimiento: para un particular, necesitas su acuerdo previo.',
    contractScope:
      'Quédate dentro del contrato: la llamada debe tener relación con él. Lo que lo complementa o mejora su rendimiento está permitido; una oferta sin relación, no.',
    sectorContractOnly:
      'En tu sector, la llamada debe seguir ligada al contrato en curso: fuera de él, la prohibición vale incluso con consentimiento.',
    consentLimits:
      'Tu consentimiento vale para lo que indica, un año como máximo: anota su fecha de fin, y para en cuanto la persona lo retire, incluso de palabra.',
    duringTheCall:
      'Al inicio de la llamada, di quién eres, por cuenta de quién llamas y que la llamada es comercial. Si la persona se niega, la llamada termina y no vuelves a llamar.',
    sectorConsumersOnly:
      'Las prohibiciones de tu sector protegen a los particulares: en cuanto contactas a alguien por su propia vivienda o su propia formación, se aplican, incluso con consentimiento.',
    businessRelevance:
      'Llama con una oferta relacionada con el oficio de la persona, preséntate en cada llamada y anota cualquier negativa para no volver a llamarla.',
    personalPhoneGreyArea:
      'Prudencia con un artesano o un autónomo contactado en su móvil personal: ningún texto aclara si hay que tratarlo entonces como a un particular. En caso de duda, pide su consentimiento por escrito.',
    businessEmail:
      'Por e-mail, no hace falta consentimiento previo para una oferta relacionada con su actividad, con un enlace sencillo para negarse; una dirección genérica (contact@…) no está sujeta a estas reglas.',
    businessCallsAlso:
      'Para tus llamadas a profesionales, la ley de 2025 no se aplica: la CNIL admite la llamada si tu oferta tiene relación con su oficio, si te presentas y si pueden negarse de forma sencilla.',
    attractRequests:
      'Haz que te lleguen las solicitudes en lugar de llamar: una web que recibe solicitudes, una ficha de Google con tu zona de trabajo, un formulario con la casilla de consentimiento. Es lo que preparo para mis clientes.',
  },
  summaryTemplate: '{targets}, {sector}, {relationship}, {consent}; números: {numberSources}.',
  targetWords: {
    consumers: 'Llamadas a particulares',
    businesses: 'Llamadas a profesionales',
    both: 'Llamadas a particulares y a profesionales',
  },
  sectorWords: {
    housingWorks: 'renovación energética o adaptación de la vivienda',
    cpfTraining: 'formaciones financiadas por el CPF',
    other: 'otra actividad',
  },
  relationshipWords: {
    activeContract: 'clientes con un contrato en curso',
    formerContract: 'antiguos clientes',
    notCustomers: 'todavía no clientes',
  },
  consentWords: {
    documented: 'consentimiento probado',
    notDocumented: 'consentimiento sin prueba o demasiado antiguo',
    none: 'sin consentimiento',
    unsure: 'consentimiento incierto',
  },
  numberSourceWords: {
    purchasedList: 'un fichero comprado',
    inboundRequests: 'solicitudes recibidas',
    directories: 'directorios o anuncios',
    other: 'clientes o boca a boca',
  },
  numberSourcesNoneWord: 'no indicado',
  conjunction: 'y',
  disclaimer:
    'Resultado basado en tus respuestas y en las normas francesas vigentes a 26 de octubre de 2026. No sustituye la opinión de un abogado sobre tu caso.',
  leadFormTitle: 'Cuéntame cómo encuentras a tus clientes',
  leadFormIntro:
    'Te ayudo a que te lleguen las solicitudes en lugar de llamar: web, ficha de Google, formulario con consentimiento. Dime tu oficio y tu zona, te respondo en 24 h.',
}
