import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_BODIES_SOURCE,
  ATTENDANCE_LIST_TEMPLATE_PDF_PATH,
  ATTENDANCE_LIST_TEMPLATE_UPDATED_AT,
  ATTENDANCE_LIST_TEMPLATE_XLSX_PATH,
  CO_OWNERSHIP_MEETING_SOURCE,
  DATA_PROTECTION_PRINCIPLES_SOURCE,
  SARL_DECISIONS_SOURCE,
  SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE,
  WORKING_HOURS_COUNT_SOURCE,
} from '~/core/constants/freeTemplates/attendanceList/pageShared'

export const ATTENDANCE_LIST_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Hoja de asistencia: plantilla francesa gratis PDF y Excel',
    description:
      'Hoja de asistencia de reunión o junta (poderes, quórum) y lista de asistencia mensual: plantilla francesa gratis en PDF y Excel, totales calculados.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de hoja de asistencia de reunión y de lista de asistencia mensual',
  },
  breadcrumbLabel: 'Hoja de asistencia',
  shareImage: {
    titleLines: ['Hoja de asistencia', 'plantilla gratis'],
    highlight: 'Hoja de asistencia',
    subtitle: 'Hoja de reunión o de junta y lista de asistencia del mes, en PDF y Excel, totales calculados',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de hoja de asistencia gratis: hoja de reunión o de junta y lista de asistencia mensual en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Hoja de asistencia',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ lista de asistencia del mes)',
    reassurances: ['Reunión, junta o evento', 'Lista del mes con totales por código', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Dos documentos, escritos en francés para las organizaciones en Francia, para dos usos. La hoja de asistencia (feuille de présence) sirve para un día concreto: una reunión, una junta general, un consejo o un evento, con una firma por participante, los poderes de los miembros representados y el total que te dice si se alcanza el quórum. La lista de asistencia (liste de présence) sirve en el tiempo: un equipo, un club o un grupo durante un mes, un código por día (presente, ausente, vacaciones, baja por enfermedad) y los totales de cada persona. El Excel hace las cuentas.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí el Código de Comercio francés sobre las juntas, las fichas de Service-Public sobre las sociedades limitadas, las comunidades de propietarios y las asociaciones, y los principios de la CNIL, la autoridad francesa de protección de datos, para que cada casilla tenga su razón de ser.',
    updatedAt: ATTENDANCE_LIST_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para gerentes, secretarios de asociación, administradores voluntarios de comunidades de propietarios, jefes de equipo y responsables de club en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel cuenta los presentes, los poderes y los días.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: ATTENDANCE_LIST_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: ATTENDANCE_LIST_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tus estatutos y a tu organización. No sustituye el consejo de un jurista si se impugna una junta.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una hoja de asistencia, una lista de asistencia del mes y un resumen',
    intro:
      'El PDF ocupa dos páginas A4: la hoja de asistencia de una reunión o de una junta, en vertical, y luego la lista de asistencia del mes, en horizontal para que quepan los 31 días. El Excel recoge las dos, con más líneas, y añade un resumen del mes y de la última reunión.',
    documents: [
      {
        title: 'Hoja de asistencia de una reunión o de una junta',
        format: 'Página 1 del PDF, hoja «Feuille de réunion» del Excel',
        items: [
          'Organización (sociedad, asociación, comunidad de propietarios…) y tipo en 6 casillas: reunión de equipo, reunión con socios externos, junta general ordinaria o extraordinaria, consejo o comité, evento',
          'Objeto u orden del día, fecha, hora de inicio, lugar o enlace de la videollamada, organizador, presidente de la sesión',
          '14 líneas de participantes (30 en el Excel): apellido, nombre, entidad o cargo, hora de llegada, votos, firma; el Excel añade un estado a elegir, presente, representado, excusado o ausente',
          'Miembros representados: miembro, apoderado presente, votos, casilla «poder adjunto»; el Excel avisa de un poder sin apoderado, de un apoderado que no está en la lista de presentes o que tiene más poderes de los que permiten tus estatutos',
          'Totales: presentes, representados, votos presentes y representados, quórum alcanzado o no; en el Excel, el quórum de tus estatutos va en una casilla amarilla y la respuesta aparece sola',
          'Hoja cerrada a una hora dada y certificada por el presidente y el secretario de la sesión, recuadro de información a los participantes (quién guarda la hoja, hasta cuándo, a quién dirigirse)',
        ],
      },
      {
        title: 'Lista de asistencia del mes',
        format: 'Página 2 del PDF en horizontal, hoja «Liste du mois» del Excel',
        items: [
          'Mes, año, equipo, servicio o grupo, responsable que lleva la lista',
          '16 personas en filas (20 en el Excel), los 31 días en columnas; en el Excel, el primer día del mes en una casilla amarilla hace seguir las fechas, las iniciales de los días y los fines de semana en gris',
          'Un código por casilla: P presente, A ausente, C vacaciones, M baja por enfermedad, / día no trabajado; lista desplegable y un color por código en el Excel',
          'Al final de la fila, el total de P, A, C y M de cada persona, y en el Excel su tasa de asistencia: días P divididos entre P + A + M, sin contar las vacaciones',
          'Abajo, los presentes de cada día, y en el Excel los ausentes del día (A + M)',
          'Observaciones (sustituciones, cambios de equipo), visto bueno del responsable, recordatorio sobre las horas de trabajo y la baja por enfermedad',
        ],
      },
      {
        title: 'Resumen',
        format: 'Hoja «Récapitulatif» del Excel, sin equivalente en el PDF',
        items: [
          'Mes mostrado, días de lunes a viernes del mes, umbral de alerta en una casilla amarilla (3 días de ausencia por defecto)',
          'Por persona: P, A, C, M, tasa de asistencia, días de ausencia (A + M) y aviso «À suivre» (a seguir) en cuanto se alcanza el umbral',
          'Para el equipo, los totales por código, la tasa media de asistencia y el número de personas a seguir',
          'La última reunión de un vistazo, tomada de la hoja de reunión: objeto, fecha, presentes, representados, votos y quórum',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la hoja de asistencia en cuatro pasos',
    intro:
      'El PDF se rellena a mano y pasa de mano en mano por la sala. En el Excel solo se escriben las casillas blancas y amarillas: totales, votos, quórum y tasas de asistencia se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Antes de la reunión, la cabecera y el recuadro de información',
        description:
          'Marca el tipo, escribe el objeto, la fecha, el lugar y el presidente de la sesión. Para una junta, escribe en el Excel el número de votos, el quórum y el número de poderes que fijan tus estatutos, y después la lista de convocados. Rellena de una vez por todas el recuadro de información: quién guarda la hoja, hasta cuándo, a quién dirigirse.',
      },
      {
        label: 'Paso 2',
        title: 'Al llegar, una línea y una firma',
        description:
          'Cada uno escribe su nombre, su entidad o cargo, la hora de llegada, y firma. Un miembro ausente que ha dado poder va en la tabla de representados, con el nombre de su apoderado presente; para una junta, grapa el poder firmado a la hoja.',
      },
      {
        label: 'Paso 3',
        title: 'Antes de la primera votación, los totales',
        description:
          'Cuenta los presentes, los representados y los votos, y marca si se alcanza el quórum. Cierra la hoja a la hora indicada, tacha las líneas vacías y haz firmar al presidente y al secretario de la sesión: la hoja se archiva con el acta.',
      },
      {
        label: 'Paso 4',
        title: 'Cada día del mes, un código por persona',
        description:
          'En la lista del mes, el responsable escribe P, A, C o M en la casilla del día, y / los días no trabajados. Para una baja, basta con M, sin el motivo. A final de mes, los totales de cada fila ya están hechos en el Excel, y el resumen avisa de quién acumula ausencias.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exigen las normas francesas',
    title: 'Cuándo es obligatoria la hoja de asistencia en Francia, y qué no sustituye',
    intro:
      'La ley francesa exige una hoja de asistencia en algunas juntas, no en una reunión de equipo. Seis reglas dicen cuándo cuenta y qué se escribe en ella; la plantilla no sustituye el consejo de un jurista si se impugna una junta.',
    facts: [
      {
        contextLabel: 'SA, Código de Comercio francés, L225-114 y R225-95',
        title: 'Sociedad anónima: una hoja en cada junta, con los poderes adjuntos',
        text: 'Cada junta de accionistas tiene su hoja de asistencia, con los poderes dados a cada apoderado adjuntos; si no, los acuerdos pueden anularse. Recoge los accionistas presentes, representados o que votan a distancia, con su domicilio, sus acciones y sus votos; la firman los presentes y los apoderados, y la mesa de la junta la certifica. Una junta celebrada totalmente a distancia no necesita firmas.',
        sourceName: SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE.name,
        sourceUrl: SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE.url,
      },
      {
        contextLabel: 'SARL y SAS',
        title: 'El acta nombra a los socios presentes o representados',
        text: 'Las fichas de Service-Public sobre las decisiones de una SARL o una SAS no hablan de hoja de asistencia, pero el acta debe dar los nombres de los socios presentes o representados y el número de participaciones o acciones de cada uno. La hoja, firmada al llegar, es la forma sencilla de rellenar esa parte sin olvidar a nadie. En una SAS, los estatutos fijan el resto.',
        sourceName: SARL_DECISIONS_SOURCE.name,
        sourceUrl: SARL_DECISIONS_SOURCE.url,
      },
      {
        contextLabel: 'Comunidad de propietarios',
        title: 'Obligatoria en cada junta general de propietarios',
        text: 'En cada junta se lleva obligatoriamente una hoja de asistencia. Da el nombre y el domicilio de cada propietario y de cada apoderado, si está presente, representado, a distancia o si ha votado por correo, y el número de votos de cada uno. Se firma a mano o de forma electrónica, el presidente de la sesión la certifica y se adjunta al acta.',
        sourceName: CO_OWNERSHIP_MEETING_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MEETING_SOURCE.url,
      },
      {
        contextLabel: 'Asociación francesa (ley de 1901)',
        title: 'Deciden los estatutos',
        text: 'Los estatutos fijan libremente la composición de la junta general, qué miembros votan y las condiciones de convocatoria, de votación y de quórum. Si tus estatutos prevén un quórum o limitan los poderes, la hoja de asistencia es la prueba de que se han respetado: la plantilla cuenta los presentes, los representados y los poderes por apoderado.',
        sourceName: ASSOCIATION_BODIES_SOURCE.name,
        sourceUrl: ASSOCIATION_BODIES_SOURCE.url,
      },
      {
        contextLabel: 'Datos personales',
        title: 'Pocos datos, un plazo de conservación fijado, personas informadas',
        text: 'Para la CNIL, solo se recogen los datos estrictamente necesarios para el fin del fichero, se fija un plazo de conservación y solo las personas autorizadas tienen acceso. Una hoja de asistencia no necesita ni fecha de nacimiento ni domicilio particular, salvo que un texto lo exija, como en una SA o una comunidad de propietarios. El artículo 13 del RGPD obliga a informar a las personas en el momento de la recogida: es el recuadro de la plantilla.',
        sourceName: DATA_PROTECTION_PRINCIPLES_SOURCE.name,
        sourceUrl: DATA_PROTECTION_PRINCIPLES_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo francés, D3171-8',
        title: 'Una lista de asistencia no cuenta las horas de trabajo',
        text: 'Cuando los empleados de un equipo no tienen el mismo horario colectivo publicado, el empleador registra cada día sus horas de inicio y de fin, o el número de horas hechas, y suma cada semana las horas de cada uno. Una P en una casilla no dice nada de eso: para las horas, usa nuestra plantilla de hoja de fichaje (fiche de pointage), y deja la lista de asistencia como herramienta de organización.',
        sourceName: WORKING_HOURS_COUNT_SOURCE.name,
        sourceUrl: WORKING_HOURS_COUNT_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Hoja de asistencia: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de hoja de asistencia es realmente gratuita?',
        answer:
          'Sí. El PDF y el Excel se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» al pie de página, que puedes quitar.',
      },
      {
        question: 'Hoja de asistencia o lista de asistencia: ¿cuál es la diferencia?',
        answer:
          'La hoja de asistencia cubre un solo momento, una reunión o una junta: cada uno firma al llegar, y prueba quién estaba ese día. La lista de asistencia sigue a un grupo en el tiempo, aquí durante un mes: sin firma, un código por día y totales. En francés se dice también «fiche de présence» para una u otra.',
      },
      {
        question: '¿La hoja de asistencia es obligatoria en Francia?',
        answer:
          'En una junta de accionistas de una SA y en una junta de propietarios, sí, cada vez. En una SARL o una SAS, el acta debe nombrar a los socios presentes o representados, y la hoja sirve para rellenarla. En una asociación, depende de los estatutos. Para una reunión de equipo o un evento, no encontré ningún texto que la imponga: es una prueba útil, no un trámite.',
      },
      {
        question: '¿Cómo se cuentan los poderes y el quórum?',
        answer:
          'Un miembro representado no firma: su apoderado, presente, se anota a su lado, y el poder firmado se adjunta a la hoja. El quórum y el número de poderes por persona los fijan tus estatutos o las normas de tu forma jurídica. En el Excel, los escribes en casillas amarillas: la hoja compara con el quórum los votos presentes y representados, y avisa de un apoderado que supera el número permitido. Si tus estatutos solo cuentan a los presentes, compara con el total de presentes.',
      },
      {
        question: 'Hoja de asistencia y hoja de fichaje: ¿cuál es la diferencia?',
        answer:
          'La hoja de asistencia dice quién estaba; la hoja de fichaje dice cuánto tiempo. Cuando los empleados no tienen el mismo horario colectivo publicado, el Código de Trabajo francés exige al empleador registrar cada día sus horas de inicio y de fin, y sumarlas cada semana (artículo D3171-8): una lista de asistencia no basta. Para las horas y las horas extra, usa nuestra plantilla de hoja de fichaje (fiche de pointage).',
      },
      {
        question: '¿Y para una formación?',
        answer:
          'Usa mejor nuestra plantilla de hoja de firmas de formación (feuille d’émargement formation), en las plantillas gratuitas: está pensada para los organismos de formación en Francia, con una firma por media jornada, el número de declaración de actividad y las horas por alumno. La hoja de asistencia de esta página es para reuniones, juntas y eventos, y la lista del mes para equipos y grupos.',
      },
      {
        question: '¿Qué datos anotar y cuánto tiempo guardarlos?',
        answer:
          'Lo estrictamente necesario: apellido, nombre, entidad o cargo, hora de llegada y firma bastan para una reunión, más el domicilio y los votos en una junta de SA o de propietarios. Para una baja por enfermedad, escribe M, nunca la naturaleza de la enfermedad: la CNIL recuerda que el empleador no puede tener información médica sobre su personal. Fija un plazo de conservación, escríbelo en el recuadro de información y luego destruye la hoja; la de una junta sigue al acta.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Liste du mois»: escribes el primer día del mes en la casilla amarilla y un código por día, y se calculan los totales por código, la tasa de asistencia y los presentes de cada día. «Feuille de réunion»: das un estado a cada participante, y se calculan los presentes, los representados, los votos y el quórum, con avisos sobre los poderes. «Récapitulatif» resume el mes por persona, avisa de quién acumula ausencias y resume la última reunión. Las líneas «Exemple» muestran el cálculo: bórralas.',
      },
      {
        question: '¿Y cuando las listas se multiplican?',
        answer:
          'Una hoja en papel y un Excel bastan para unas pocas reuniones y un equipo. Más allá, copiar firmas, reclamar poderes y sumar meses lleva tiempo: una herramienta que guarda cada asistencia en un mismo sitio lo hace por ti. Si tus listas son para formaciones o clases, el test de la página de la herramienta te dice qué programa elegir.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description:
      'Cuando las hojas firmadas se acumulan, los poderes llegan por e-mail y las listas del mes se copian de un archivo a otro, una herramienta que guarda cada asistencia en un mismo sitio te devuelve horas. Descríbeme tu organización: te respondo en 24 horas, y si un programa del mercado basta, te lo digo.',
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para centros de formación',
  },
}
