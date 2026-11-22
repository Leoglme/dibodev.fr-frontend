import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_BODIES_SOURCE,
  SARL_DECISIONS_SOURCE,
} from '~/core/constants/freeTemplates/attendanceList/pageShared'
import {
  CO_OWNERSHIP_MEETING_NOTICE_SOURCE,
  CSE_AGENDA_NOTICE_SOURCE,
  CSE_AGENDA_SETTING_SOURCE,
  MEETING_AGENDA_TEMPLATE_DOCX_PATH,
  MEETING_AGENDA_TEMPLATE_PDF_PATH,
  MEETING_AGENDA_TEMPLATE_UPDATED_AT,
  MEETING_AGENDA_TEMPLATE_XLSX_PATH,
  SMALL_CSE_WRITTEN_REQUESTS_SOURCE,
} from '~/core/constants/freeTemplates/meetingAgenda/pageShared'

export const MEETING_AGENDA_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Orden del día de reunión: plantilla gratis PDF, Word, Excel',
    description:
      'Orden del día con horarios y convocatoria de reunión: plantilla francesa gratis en PDF, Word y Excel, hora de cada punto calculada, respuestas seguidas.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de orden del día de reunión con horarios y de convocatoria',
  },
  breadcrumbLabel: 'Orden del día',
  shareImage: {
    titleLines: ['Orden del día', 'y convocatoria gratis'],
    highlight: 'Orden del día',
    subtitle: 'Orden del día con horarios y convocatoria de reunión, en PDF, Word y Excel, horas calculadas',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de orden del día gratis: orden del día con horarios y convocatoria en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Orden del día',
    titleAfter: ': plantilla francesa gratis, PDF, Word y Excel (+ convocatoria de reunión)',
    reassurances: [
      'Puntos con horario, horas calculadas',
      'Convocatoria con cupón de respuesta',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un orden del día (ordre du jour) que cabe en una página, escrito en francés para las organizaciones en Francia, y la convocatoria (convocation) que va con él. Cada punto tiene su hora, su duración, la persona que lo presenta y lo que se espera de la sala: una información, un debate o una decisión. La convocatoria dice dónde, cuándo, para qué, con qué documentos, y pide una respuesta antes de una fecha. En el Excel escribes la hora de inicio y las duraciones: la hora de cada punto y la hora de fin se calculan.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Antes de escribir esta plantilla, leí en Légifrance y Service-Public las normas francesas de convocatoria de una junta de socios de SARL, de un comité social y económico (CSE) y de una junta de propietarios, para que la convocatoria te diga qué plazo comprobar.',
    updatedAt: MEETING_AGENDA_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para gerentes, jefes de proyecto, secretarios de CSE o de asociación y administradores voluntarios de comunidades de propietarios en Francia. Tres archivos en francés, sin formulario: el PDF se imprime, el Excel calcula los horarios y sigue las respuestas, el Word se modifica libremente.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: MEETING_AGENDA_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: MEETING_AGENDA_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, horarios calculados, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: MEETING_AGENDA_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tus estatutos y a tu organización. No sustituye el consejo de un jurista cuando está en juego la validez de una junta o de una reunión del CSE.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un orden del día con horarios, una convocatoria y el seguimiento de los convocados',
    intro:
      'El PDF ocupa dos páginas A4: el orden del día y luego la convocatoria que lo acompaña. El Excel recoge el orden del día con las horas calculadas, añade la lista de convocados y un resumen que te dice si todo está listo.',
    documents: [
      {
        title: 'Orden del día con horarios',
        format: 'Página 1 del PDF, hoja «Ordre du jour» del Excel',
        items: [
          'Tipo de reunión en 6 casillas: reunión de equipo, reunión de proyecto o con un cliente, comité de dirección, junta directiva o consejo, CSE, junta general',
          'Objeto, fecha, hora de inicio y hora de fin prevista, lugar o enlace de la videollamada, moderador, secretario de la sesión que toma las notas',
          'Una línea «objetivo»: lo que la reunión debe haber logrado cuando termine',
          '10 puntos (15 en el Excel): hora, tema, quién lo presenta, duración en minutos y una casilla para decir si el punto es informativo, de debate o de decisión',
          'Una columna «leer antes» para el documento que cada uno debe haber abierto, con la apertura y los ruegos y preguntas ya colocados al principio y al final',
          'Duración total, hora de fin y un recuadro «puntos aplazados» para lo que no cabe en el tiempo',
        ],
      },
      {
        title: 'Convocatoria',
        format: 'Página 2 del PDF',
        items: [
          'Remitente, destinatario, lugar y fecha de envío, medio de envío a marcar (e-mail, carta simple, certificada con acuse de recibo, carta certificada electrónica, entrega en mano contra firma)',
          'Asunto y texto de la convocatoria a completar: tipo de reunión, fecha, hora, lugar o enlace',
          '8 líneas para copiar el orden del día, cada una marcada como información o decisión',
          'Documentos adjuntos a marcar: orden del día detallado, propuestas de acuerdo, cuentas o informes, presupuestos, formulario de poder, formulario de voto por correo',
          'Fecha límite de respuesta, firma y un cupón de respuesta para recortar: presente, representado por, excusado',
          'Una tabla de plazos de referencia: junta de socios de SARL, CSE de 50 empleados o más, CSE de menos de 50, comunidad de propietarios, asociación',
        ],
      },
      {
        title: 'Seguimiento de los convocados y resumen',
        format: 'Hojas «Convoqués» y «Synthèse» del Excel, sin equivalente en el PDF',
        items: [
          'Plazo mínimo de convocatoria en una casilla amarilla, y la fecha límite de envío que resulta de él',
          '30 convocados: nombre, condición, dirección o e-mail, medio de envío, fecha de envío, respuesta (presente, representado, excusado, sin respuesta), apoderado',
          'Por línea, el número de días entre el envío y la reunión, y un aviso si la convocatoria salió tarde o si falta la respuesta',
          'Resumen de la reunión y de los envíos, con la parte del tiempo dedicada a las decisiones y las convocatorias enviadas con retraso',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Preparar el orden del día y la convocatoria en cuatro pasos',
    intro:
      'El PDF se rellena a mano o se copia en un e-mail. En el Excel solo se escriben las casillas blancas y amarillas: las horas, los totales y los avisos se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Partir de lo que la reunión debe lograr',
        description:
          'Escribe primero el objetivo en una frase: «al terminar, habremos elegido al proveedor y fijado el calendario». Después enumera los puntos que llevan a él. Yo pongo las decisiones pronto, cuando todos siguen ahí y atentos; un tema que no sirve al objetivo va a los puntos aplazados.',
      },
      {
        label: 'Paso 2',
        title: 'Una duración y un nombre para cada punto',
        description:
          'Para cada punto, anota quién lo presenta, cuántos minutos necesita y qué se espera de la sala: información, debate o decisión. En el Excel, la hora de cada punto se ajusta sola, y la hoja te avisa si el final supera la hora que te has fijado.',
      },
      {
        label: 'Paso 3',
        title: 'Comprobar el plazo y enviar',
        description:
          'Busca el plazo que se aplica: tus estatutos, tu reglamento o la ley francesa para una SARL, un CSE o una comunidad de propietarios. Escríbelo en la hoja de convocados, adjunta los documentos que hay que leer y envía antes de la fecha límite que aparece. Anota la fecha y el medio de envío de cada uno: es tu prueba.',
      },
      {
        label: 'Paso 4',
        title: 'Seguir las respuestas hasta el día',
        description:
          'Anota las respuestas a medida que llegan: presente, representado, excusado. El Excel avisa de quién no ha respondido. En la reunión, el orden del día es el hilo: el moderador anuncia el punto y su tiempo, y pasa al siguiente cuando llega la hora prevista.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exigen las normas francesas',
    title: 'Quién fija el orden del día en Francia y con qué plazo convocar',
    intro:
      'Para una reunión de equipo o de proyecto, no encontré ningún texto francés que imponga un orden del día ni un plazo. Para una junta de SARL, un CSE o una comunidad de propietarios, la ley francesa los fija; en una asociación, lo hacen los estatutos. Seis referencias, para contrastar con tus propios estatutos: esta plantilla no es un consejo jurídico.',
    facts: [
      {
        contextLabel: 'SARL (sociedad limitada francesa)',
        title: 'Junta de socios: 15 días, el orden del día en la carta',
        text: 'Los socios se convocan por carta certificada al menos 15 días antes de la junta, salvo plazo más largo en los estatutos, y la carta indica el orden del día. El e-mail es posible para los socios que lo aceptaron al menos 20 días antes de la junta siguiente, con el mismo plazo de 15 días. El texto de los acuerdos propuestos y el informe del gerente se les envían en ese plazo, más las cuentas anuales para la junta que las aprueba.',
        sourceName: SARL_DECISIONS_SOURCE.name,
        sourceUrl: SARL_DECISIONS_SOURCE.url,
      },
      {
        contextLabel: 'CSE de 50 empleados o más, Código de Trabajo francés, L2315-29',
        title: 'El orden del día se escribe entre dos',
        text: 'El orden del día de cada reunión del CSE lo fijan el presidente y el secretario. Las consultas obligatorias por ley, reglamento o convenio colectivo se inscriben de pleno derecho, por el presidente o por el secretario. La columna «presentado por» de la plantilla sirve también para dejar constancia de quién pidió cada punto.',
        sourceName: CSE_AGENDA_SETTING_SOURCE.name,
        sourceUrl: CSE_AGENDA_SETTING_SOURCE.url,
      },
      {
        contextLabel: 'CSE de 50 empleados o más, Código de Trabajo francés, L2315-30',
        title: 'Al menos tres días antes de la reunión',
        text: 'El presidente comunica el orden del día a los miembros del comité al menos tres días antes de la reunión, y en el mismo plazo al agente de control de la inspección de trabajo y al agente de los servicios de prevención de los organismos de seguridad social. Añade estos dos destinatarios a la lista de convocados del Excel: la fecha de envío queda anotada junto a su nombre.',
        sourceName: CSE_AGENDA_NOTICE_SOURCE.name,
        sourceUrl: CSE_AGENDA_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'CSE de menos de 50 empleados, Código de Trabajo francés, L2315-22',
        title: 'Las peticiones de los representantes, por escrito, dos días hábiles antes',
        text: 'Salvo circunstancias excepcionales, los miembros de la delegación del personal entregan al empleador una nota escrita con el objeto de sus peticiones dos días hábiles antes de la reunión. El empleador responde por escrito como muy tarde seis días hábiles después de la reunión. Escribe esa fecha límite en la convocatoria para que las peticiones lleguen a tiempo.',
        sourceName: SMALL_CSE_WRITTEN_REQUESTS_SOURCE.name,
        sourceUrl: SMALL_CSE_WRITTEN_REQUESTS_SOURCE.url,
      },
      {
        contextLabel: 'Comunidad de propietarios',
        title: '21 días naturales, una pregunta por votación',
        text: 'La convocatoria sale al menos 21 días naturales antes de la junta, salvo plazo más largo en el reglamento de la comunidad o urgencia. Indica el lugar, la fecha y la hora, y un orden del día en el que cada pregunta está redactada con claridad, sometida a una votación separada, con la mayoría requerida. Un tema que no figura en el orden del día puede debatirse, no votarse; una pregunta pedida demasiado tarde pasa a la junta siguiente.',
        sourceName: CO_OWNERSHIP_MEETING_NOTICE_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MEETING_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Asociación francesa (ley de 1901)',
        title: 'Los estatutos fijan la convocatoria',
        text: 'Para una asociación, Service-Public remite a los estatutos o al reglamento interno: son ellos los que fijan las condiciones de convocatoria, de votación y de quórum de la junta general. Relee el artículo de tus estatutos antes de enviar (plazo, forma, quién convoca, documentos que adjuntar) y escribe ese plazo en el Excel para obtener la fecha límite de envío.',
        sourceName: ASSOCIATION_BODIES_SOURCE.name,
        sourceUrl: ASSOCIATION_BODIES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Orden del día: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de orden del día es realmente gratuita?',
        answer:
          'Sí. El PDF, el Excel y el Word se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» al pie de página, que puedes quitar.',
      },
      {
        question: 'Orden del día y convocatoria: ¿cuál es la diferencia?',
        answer:
          'El orden del día es la lista de temas, en el orden en que se tratarán. La convocatoria es la invitación: dice a quién se espera, dónde, cuándo, y lleva el orden del día. Para una junta de SARL o de propietarios en Francia, la convocatoria debe contener el orden del día; por eso la plantilla los pone uno detrás de otro.',
      },
      {
        question: '¿Cuántos puntos poner en el orden del día?',
        answer:
          'Ningún texto fija un número. El límite real es el tiempo: suma las duraciones, compáralas con la hora de fin y quita lo que sobra. Un punto equivale a una pregunta, redactada para que se sepa qué se espera de la sala. Lo que no cabe va a los puntos aplazados, con una fecha.',
      },
      {
        question: '¿Se puede votar un punto añadido en «ruegos y preguntas»?',
        answer:
          'En una comunidad de propietarios en Francia, no: Service-Public lo dice claramente, un tema que no figura en el orden del día puede debatirse, no votarse. Para otra junta, revisa tus estatutos; en caso de duda, inscribe el punto con la decisión esperada en lugar de contar con los ruegos y preguntas. En una reunión de equipo, es cuestión de costumbre.',
      },
      {
        question: '¿Con qué plazo enviar una convocatoria en Francia?',
        answer:
          'Al menos 15 días para una junta de socios de SARL, al menos 21 días naturales para una junta de propietarios, al menos tres días para el orden del día de un CSE de 50 empleados o más. En una asociación, deciden los estatutos. Estatutos y reglamentos pueden alargar esos plazos. Para una reunión de equipo, ningún texto: deja a cada uno tiempo para leer los documentos.',
      },
      {
        question: '¿Hay que enviar la convocatoria por carta certificada?',
        answer:
          'Para una SARL, sí, salvo para los socios que aceptaron el e-mail. En una comunidad de propietarios, la convocatoria se envía por vía electrónica, salvo si el propietario pidió la carta certificada con acuse de recibo, o en mano contra firma. Para el CSE, el artículo sobre el orden del día que leí no fija la forma. En todos los casos, guarda la fecha y el medio de envío de cada uno: la hoja de convocados está hecha para eso.',
      },
      {
        question: 'Orden del día, hoja de asistencia, acta: ¿en qué orden?',
        answer:
          'El orden del día y la convocatoria salen antes de la reunión. La hoja de asistencia se firma al llegar. El acta se escribe después, retomando los puntos en el mismo orden, con lo que se decidió. Las tres están en las plantillas gratuitas del sitio: nuestra plantilla de hoja de asistencia (feuille de présence) y nuestra plantilla de acta de reunión (compte rendu de réunion) completan esta.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Ordre du jour»: escribes la hora de inicio en la casilla amarilla y luego una duración por punto, y se calculan la hora de inicio y de fin de cada punto, con un aviso si la reunión supera la hora de fin que quieres. «Convoqués»: escribes el plazo de convocatoria, la fecha de envío y la respuesta de cada uno, y la hoja avisa de los envíos tardíos y de las respuestas que faltan. «Synthèse» resume las dos. Las líneas «Exemple» muestran el cálculo: bórralas.',
      },
      {
        question: '¿Y cuando las reuniones se encadenan?',
        answer:
          'Un orden del día en papel y un Excel bastan para unas pocas reuniones al mes. Más allá, copiar los puntos de una reunión a otra, insistir a los convocados y encontrar quién respondió lleva tiempo: una herramienta que lo guarda todo en un mismo sitio lo hace por ti. Si tus reuniones son para formaciones o clases, el test de la página de la herramienta te dice qué programa elegir.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description:
      'Cuando las reuniones se suceden, las convocatorias salen a treinta personas y las respuestas llegan por e-mail, por SMS y en el pasillo, una herramienta que guarda órdenes del día, convocados y respuestas en un mismo sitio te devuelve horas. Descríbeme tu organización: te respondo en 24 horas, y si un programa del mercado basta, te lo digo.',
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para centros de formación',
  },
}
