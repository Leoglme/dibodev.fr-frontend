import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_POST_MEETING_DECLARATION_SOURCE,
  ASSOCIATION_STATUTES_SOURCE,
  CO_OWNERSHIP_MINUTES_SOURCE,
  CSE_MINUTES_SOURCE,
  MEETING_MINUTES_TEMPLATE_DOCX_PATH,
  MEETING_MINUTES_TEMPLATE_PDF_PATH,
  MEETING_MINUTES_TEMPLATE_UPDATED_AT,
  MEETING_MINUTES_TEMPLATE_XLSX_PATH,
  SARL_MINUTES_CONTENT_SOURCE,
  SARL_MINUTES_OBLIGATION_SOURCE,
} from '~/core/constants/freeTemplates/meetingMinutes/pageShared'

export const MEETING_MINUTES_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Acta de reunión: plantilla gratis (PDF, Word, Excel)',
    description:
      'Plantilla francesa de acta de reunión gratis en PDF, Word y Excel: puntos tratados, registro de decisiones, plan de acción y retrasos calculados.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de acta de reunión con registro de decisiones y plan de acción',
  },
  breadcrumbLabel: 'Acta de reunión',
  shareImage: {
    titleLines: ['Acta de reunión', 'plantilla gratis'],
    highlight: 'Acta de reunión',
    subtitle: 'Puntos tratados, registro de decisiones y plan de acción, en PDF, Word y Excel, retrasos calculados',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de acta de reunión gratis: puntos tratados, registro de decisiones y plan de acción en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Acta de reunión',
    titleAfter: ': plantilla francesa gratis, PDF, Word y Excel (+ registro de decisiones y plan de acción)',
    reassurances: [
      'Reunión de equipo, de obra o de junta',
      'Acciones seguidas de una reunión a otra',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una reunión se juzga por lo que queda de ella al día siguiente. Esta plantilla, escrita en francés para las organizaciones en Francia, guarda tres cosas: lo que se dijo en cada punto, lo que se decidió y quién hace qué y para cuándo. La primera página es el acta (compte rendu) que envías a los participantes. La segunda es el registro de decisiones y el plan de acción, la que vuelves a leer al empezar la reunión siguiente para ver qué ha avanzado. El Excel calcula los retrasos.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí el Código de Comercio francés sobre las SARL, el Código del Trabajo francés sobre el comité social y económico (CSE), el decreto de 1967 sobre la copropiedad y las fichas de Service-Public sobre las asociaciones, para saber cuándo basta un acta y cuándo la ley francesa exige un acta formal (procès-verbal).',
    updatedAt: MEETING_MINUTES_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para gerentes, jefes de equipo, jefes de obra, jefes de proyecto y secretarios de asociación en Francia. Tres archivos en francés, sin formulario: el PDF se imprime para tomar notas en la reunión, el Word se rellena y se envía, el Excel sigue las acciones y señala lo que se ha retrasado.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: MEETING_MINUTES_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: MEETING_MINUTES_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, retrasos calculados, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: MEETING_MINUTES_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu organización. No sustituye el acta formal cuando un texto la exige, ni el consejo de un jurista.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un acta, un registro de decisiones y un plan de acción con seguimiento',
    intro:
      'El PDF y el Word ocupan dos páginas A4: el acta de la reunión, y luego el registro de decisiones y el plan de acción. El Excel recoge el acta, guarda todas las acciones de una reunión a otra en una sola lista y añade una síntesis.',
    documents: [
      {
        title: 'Acta de reunión',
        format: 'Página 1 del PDF y del Word, hoja «Compte rendu» del Excel',
        items: [
          'Organización y tipo de reunión en 6 casillas: reunión de equipo, reunión de obra, cliente o socio, comité de dirección, junta o consejo, otro',
          'Objeto, fecha, hora de inicio y de fin, lugar o videollamada, quién dirige, quién redacta',
          'Presentes con su función (8 líneas), excusados o ausentes, y difusión: las personas que reciben el acta sin haber asistido; en el Excel, un estado a elegir para 15 personas',
          'Puntos tratados, uno por línea: tema, lo que se dijo (información, opiniones, cifras), decisión o seguimiento; en el Excel, 12 puntos y un seguimiento a elegir, decisión, para información o aplazado',
          'Próxima reunión (fecha, hora, lugar, puntos ya previstos), fecha de envío del acta y fecha límite para las observaciones',
          'Firmas de quien redacta y de quien revisa, y un recordatorio de los casos en que se exige un acta formal',
        ],
      },
      {
        title: 'Registro de decisiones y plan de acción',
        format: 'Página 2 del PDF y del Word, hoja «Suivi des actions» del Excel',
        items: [
          'Reunión a la que se refiere, número del registro, responsable del seguimiento de las acciones',
          'Decisiones numeradas de D1 a D5: texto exacto, punto del que viene, cómo se tomó (acuerdo, votación, arbitraje), fecha de efecto',
          'Plan de acción en 10 líneas (40 en el Excel): acción, un solo responsable, fecha límite, decisión vinculada, estado, comentario',
          'Cinco estados que se arrastran de una reunión a otra: por hacer, en curso, hecho, aplazado, abandonado',
          'En el Excel, una fecha de referencia (hoy por defecto) y, para cada acción, el retraso en días y su situación: a tiempo, vence en 7 días, con retraso, hecha a tiempo o hecha con retraso',
          'Puntos aplazados o preguntas pendientes, para el orden del día siguiente, y validación del registro',
        ],
      },
      {
        title: 'Síntesis',
        format: 'Hoja «Synthèse» del Excel, sin equivalente en el PDF',
        items: [
          'La reunión en cifras: duración, presentes, excusados, ausentes, puntos tratados, puntos con decisión, puntos aplazados, fecha de la siguiente',
          'Las acciones: abiertas, con retraso, que vencen en 7 días, retraso medio, hechas, parte hecha a tiempo, abandonadas',
          'Para cada participante, sus acciones abiertas, con retraso, a punto de vencer, hechas y hechas con retraso',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Redactar un acta de reunión en cuatro pasos',
    intro:
      'El acta se escribe en dos tiempos: notas rápidas durante la reunión y la versión limpia justo después. En el Excel, solo se escriben las celdas blancas y la celda amarilla: los recuentos, los retrasos y la síntesis se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Antes de empezar, el encabezado y quién redacta',
        description:
          'Anota el objeto, la fecha, la hora y el lugar, y elige quién redacta: no la persona que dirige, o uno de los dos papeles queda mal cubierto. Abre la página 2 con las acciones aún abiertas de la reunión anterior y repásalas primero.',
      },
      {
        label: 'Paso 2',
        title: 'Durante la reunión, un punto por línea',
        description:
          'Para cada tema, escribe lo esencial de lo que se dijo, las cifras y las opiniones que pesaron, no los intercambios palabra por palabra. En cuanto se toma una decisión, léela en voz alta y escríbela tal como se aceptó: es la que pasa al registro.',
      },
      {
        label: 'Paso 3',
        title: 'Antes de despedirse, quién hace qué y para cuándo',
        description:
          'Cada acción lleva un verbo, un solo responsable y una fecha. «Ver con el proveedor» no es una acción; «Sarah pide un tercer presupuesto antes del día 4» sí lo es. Lo que no se pudo tratar va a los puntos aplazados, y la fecha de la próxima reunión se fija mientras todos están presentes.',
      },
      {
        label: 'Paso 4',
        title: 'Después de la reunión, el envío y el seguimiento',
        description:
          'Pasa el acta a limpio, haz que alguien la revise y envíala a los presentes, a los excusados y a las personas de la difusión, con una fecha límite para las observaciones. En el Excel, copia las acciones en el seguimiento: en la reunión siguiente, la columna «Situation» muestra lo que va con retraso antes incluso de empezar.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exigen las normas francesas',
    title: 'Acta o acta formal: cuándo la ley francesa fija la forma',
    intro:
      'Para una reunión de equipo, de obra o con un cliente, no encontré ningún texto francés que fije la forma de un acta. En cambio, algunos órganos deben llevar un acta formal (procès-verbal), cuyo contenido, firmantes y a veces plazo están escritos en la ley; en esos casos, la plantilla no sustituye el consejo de un jurista.',
    facts: [
      {
        contextLabel: 'Acta o acta formal',
        title: 'El acta es libre, el acta formal es obligatoria',
        text: 'Ninguno de los textos que leí define el acta (compte rendu): es un documento de trabajo que cada uno organiza a su manera. El acta formal (procès-verbal) la exige la ley para algunos órganos. La ficha de Service-Public sobre las decisiones de una SARL solo usa esa palabra: un acta formal después de cada junta de socios y de cada consulta escrita, firmada por el o los gerentes y luego incluida en el libro de actas de la sociedad.',
        sourceName: SARL_MINUTES_OBLIGATION_SOURCE.name,
        sourceUrl: SARL_MINUTES_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'SARL, Código de Comercio francés, R223-24 y R221-3',
        title: 'El acta de la junta tiene un contenido fijado',
        text: 'Indica la fecha y el lugar, el presidente de la sesión, los socios presentes o representados con sus participaciones, los documentos presentados, un resumen de los debates, el texto de las resoluciones y el resultado de las votaciones. Los gerentes la redactan y la firman, con el presidente de la sesión si lo hay. Se anota en un libro especial guardado en el domicilio social, numerado y rubricado por un juez o por el alcalde, o llevado en formato electrónico con firma electrónica avanzada.',
        sourceName: SARL_MINUTES_CONTENT_SOURCE.name,
        sourceUrl: SARL_MINUTES_CONTENT_SOURCE.url,
      },
      {
        contextLabel: 'CSE, Código del Trabajo francés, L2315-34 y D2315-26',
        title: 'El secretario del CSE redacta, el empleador responde en la sesión siguiente',
        text: 'Las deliberaciones del comité social y económico se recogen en un acta formal redactada por su secretario, y las declaraciones se anotan en ella. El plazo y la forma se fijan por acuerdo. A falta de acuerdo, el acta se envía al empleador en los 15 días siguientes a la reunión y contiene al menos el resumen de las deliberaciones y la decisión motivada del empleador sobre las propuestas de la reunión anterior.',
        sourceName: CSE_MINUTES_SOURCE.name,
        sourceUrl: CSE_MINUTES_SOURCE.url,
      },
      {
        contextLabel: 'Copropiedad, decreto del 17 de marzo de 1967, art. 17',
        title: 'El resultado de cada votación, los opositores con su nombre',
        text: 'El acta de la junta general da, bajo cada punto del orden del día, el resultado de la votación, el nombre y los votos de quienes votaron en contra o se abstuvieron, y las reservas sobre la regularidad de las decisiones. La firman el presidente, el secretario y los escrutadores, al final de la sesión o como máximo en los 8 días siguientes, y luego se anota en el libro. El administrador notifica las decisiones en el plazo de un mes, y quienes votaron en contra o no asistieron tienen 2 meses para impugnarlas.',
        sourceName: CO_OWNERSHIP_MINUTES_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MINUTES_SOURCE.url,
      },
      {
        contextLabel: 'Asociación francesa (ley de 1901)',
        title: 'Los estatutos deciden cómo se deja constancia',
        text: 'Los estatutos fijan libremente la composición y las funciones de la asamblea general, y el funcionamiento del consejo de administración y de la junta directiva; un reglamento interno puede completarlos. Si tus estatutos piden un acta formal firmada por el presidente y el secretario, síguelos al pie de la letra. Si no, un acta clara con un registro de decisiones basta para las reuniones corrientes.',
        sourceName: ASSOCIATION_STATUTES_SOURCE.name,
        sourceUrl: ASSOCIATION_STATUTES_SOURCE.url,
      },
      {
        contextLabel: 'Asociación, después de la asamblea',
        title: 'Algunas decisiones se declaran en 3 meses',
        text: 'En principio, no hay nada que declarar a la prefectura después de cada asamblea general. Pero un cambio de nombre o de objeto, de domicilio social, de dirigentes o de estatutos, la apertura o el cierre de un lugar de actividad, la compra o la venta de un inmueble se declaran en los 3 meses siguientes. El registro de decisiones sirve entonces de lista: qué hay que declarar, quién lo hace y antes de qué fecha.',
        sourceName: ASSOCIATION_POST_MEETING_DECLARATION_SOURCE.name,
        sourceUrl: ASSOCIATION_POST_MEETING_DECLARATION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Acta de reunión: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de acta de reunión es de verdad gratis?',
        answer:
          'Sí. El PDF, el Word y el Excel se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. La única contrapartida: una línea «plantilla de Dibodev» en el pie de página, que puedes quitar.',
      },
      {
        question: 'Acta o acta formal: ¿cuál es la diferencia?',
        answer:
          'El acta (compte rendu) es un documento de trabajo: ningún texto francés que leí fija su forma, sirve para informar y para seguir las decisiones. El acta formal (procès-verbal) la exige la ley para algunos órganos, con un contenido, unos firmantes y a veces un libro y un plazo fijados. En una SARL, por ejemplo, recoge los socios presentes o representados, un resumen de los debates, el texto de las resoluciones y el resultado de las votaciones, y la firma el gerente.',
      },
      {
        question: '¿Cuándo es obligatoria un acta formal en Francia?',
        answer:
          'Entre los casos que comprobé: la junta de socios de una SARL y sus consultas escritas, las reuniones del CSE, la junta general de copropietarios. En una asociación, lo dicen los estatutos. Para una reunión de equipo, de obra o con un cliente, no encontré ninguna obligación: el acta es una buena costumbre, no un trámite. Si dudas en un caso concreto, lee los estatutos o consulta a un jurista.',
      },
      {
        question: '¿Qué hay que escribir en un acta de reunión?',
        answer:
          'El encabezado (objeto, fecha, lugar, presentes, excusados) y, para cada punto, lo útil de lo que se dijo y lo que se decidió. No los intercambios palabra por palabra ni quién tenía razón: hechos, cifras, decisiones. Y sobre todo, al final, las acciones con un responsable y una fecha, si no el acta se lee una vez y se olvida.',
      },
      {
        question: '¿Y para un acta de reunión de obra?',
        answer:
          'Sirve la misma plantilla: marca «Réunion de chantier» (reunión de obra), anota la empresa de cada persona junto a su nombre y trata un gremio o una zona por línea. El plan de acción se convierte en la lista de lo que cada empresa debe hacer antes de la reunión siguiente, con su fecha límite. Las fotos y los planos se adjuntan como anexos, numerados en la columna «lo que se dijo».',
      },
      {
        question: '¿En qué plazo hay que enviar el acta?',
        answer:
          'Para una reunión corriente, no encontré ningún plazo fijado por un texto francés: envíala mientras todos recuerdan la reunión, en los días siguientes, para que las acciones arranquen. Para un acta formal obligatoria, el plazo está escrito: en el CSE, a falta de acuerdo, se envía al empleador en los 15 días siguientes; en una copropiedad, se firma al final de la sesión o en los 8 días siguientes, y las decisiones se notifican en el mes.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Compte rendu»: el encabezado, los participantes con un estado y los puntos con su seguimiento (decisión, para información, aplazado). «Suivi des actions»: una línea por acción, un responsable elegido entre los participantes, una fecha límite y un estado; el retraso y la situación se calculan respecto a la fecha de referencia, hoy por defecto. «Synthèse» cuenta los presentes, las decisiones, las acciones abiertas y con retraso, y la carga de cada uno. Las líneas «Exemple» muestran el cálculo: bórralas.',
      },
      {
        question: '¿Hay que firmar el acta?',
        answer:
          'Para una reunión corriente, no encontré ningún texto francés que lo exija. Normalmente basta con que otro participante la revise y con una fecha límite para las observaciones: pasada esa fecha, la versión enviada pasa a ser la de referencia para el equipo. Las casillas de firma de la plantilla sirven cuando quieres una constancia más sólida. Para un acta formal obligatoria, los firmantes los fija el texto: el gerente en una SARL, el presidente, el secretario y los escrutadores en una copropiedad.',
      },
      {
        question: '¿Y cuando las actas se acumulan?',
        answer:
          'Un Excel basta para un equipo y una reunión al mes. Más allá, encontrar una decisión entre veinte archivos, perseguir a cada uno por sus acciones y copiar las acciones abiertas de un acta a otra lleva tiempo: una herramienta que guarda reuniones, decisiones y acciones en un mismo sitio lo hace por ti. Si tus reuniones giran en torno a formaciones o clases, el test de la página de la herramienta te dice qué software elegir.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description:
      'Cuando las actas se pierden en los correos, las mismas acciones vuelven «en curso» de una reunión a otra y ya nadie sabe qué decisión se tomó y cuándo, una herramienta que guarda todo en un mismo sitio te devuelve horas. Descríbeme tu organización: te respondo en 24 horas, y si un software del mercado basta, te lo digo.',
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para centros de formación',
  },
}
