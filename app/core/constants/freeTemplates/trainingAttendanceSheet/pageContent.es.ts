import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageShared'
import {
  IMMEDIATE_ADVANCE_PROVIDER_SOURCE,
  QUALITY_FRAMEWORK_DECREE_SOURCE,
  SELF_FUNDED_TRAINING_CONTRACT_SOURCE,
  TRAINING_ACTIVITY_DECLARATION_SOURCE,
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const TRAINING_ATTENDANCE_SHEET_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Hoja de firmas de formación: plantilla francesa PDF + Excel',
    description:
      'Hoja de firmas de formación: plantilla francesa gratis en PDF y Excel. Firma por media jornada, asistencia semanal, horas y saldos calculados. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de hoja de firmas y seguimiento de horas para centros de formación y academias',
  },
  breadcrumbLabel: 'Hoja de firmas de formación',
  shareImage: {
    titleLines: ['Hoja de firmas', 'de formación gratis'],
    highlight: 'Hoja de firmas',
    subtitle:
      'Firmas por media jornada y asistencia de la semana en PDF, horas y saldos calculados en Excel, en francés',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de hoja de firmas de formación gratis: firmas por media jornada y asistencia de la semana en PDF, seguimiento de horas en Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Hoja de firmas de formación',
    titleAfter: ': plantilla francesa gratis (+ seguimiento de horas)',
    reassurances: [
      'Hoja de firmas + asistencia de la semana',
      'Excel con horas y saldos calculados',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una hoja de firmas por media jornada, para un centro de formación o un formador autónomo, y una hoja de asistencia de la semana para las clases regulares de una academia de refuerzo escolar, de música o de idiomas, escritas en francés para el mercado francés. El PDF lleva el número de declaración de actividad (NDA), las casillas de mañana y tarde y la firma del formador. El Excel cuenta las horas: horario de las clases, saldo del bono de cada alumno, horas realizadas por participante para el certificado de realización y el BPF, el balance pedagógico y financiero anual.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí el referencial Qualiopi de 2026 y las normas francesas de la declaración de actividad para que las referencias de la hoja estén al día.',
    updatedAt: TRAINING_ATTENDANCE_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para centros de formación, formadores autónomos, academias de refuerzo escolar y escuelas de música que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se firma, el Excel cuenta las horas.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: TRAINING_CENTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: TRAINING_CENTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, horas y saldos calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu centro y a tus financiadores. No sustituye el certificado de realización del Ministerio de Trabajo francés.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Dos hojas para firmar en PDF, tres hojas de seguimiento en Excel',
    intro:
      'El PDF ocupa dos páginas A4: la hoja de firmas por media jornada y la asistencia de la semana para las clases regulares. El Excel no repite esas páginas: añade tres hojas de seguimiento donde las duraciones, los saldos y las horas por participante se calculan en cuanto escribes una clase.',
    documents: [
      {
        title: 'Hoja de firmas',
        format: 'Página 1 del PDF; sus horas se pasan a la hoja «Heures par stagiaire» del Excel',
        items: [
          'Centro de formación (nombre, dirección), número de declaración de actividad y prefecto de región, con la mención «Cet enregistrement ne vaut pas agrément de l’État» (el registro no equivale a una autorización del Estado)',
          'Título de la formación, sesión o grupo, formador, fechas, lugar (dirección, o herramienta para la distancia), horario de mañana y de tarde, modalidad presencial, a distancia o mixta',
          'Tabla de 12 líneas: participante (apellidos, nombre), una casilla de mañana y una de tarde para el día 1 y el día 2, con la fecha de cada día, y horas seguidas',
          'En cada casilla, dos marcas para tachar: A (ausente) y R (retraso o salida antes de la hora); abajo, el nombre y la firma del formador por cada media jornada',
          'Observaciones (retrasos, salidas anticipadas, conexión a distancia, incidentes) y referencias: costumbre de los financiadores, referencial Qualiopi, certificado de realización del Ministerio de Trabajo',
        ],
      },
      {
        title: 'Asistencia de la semana',
        format:
          'Página 2 del PDF, para las clases regulares; sus horas se pasan a la hoja «Heures par élève» del Excel',
        items: [
          'Estructura (nombre, dirección, teléfono), semana del, clase, nivel o grupo, profesor, aula o lugar',
          'Tabla de 14 líneas: alumno (apellidos, nombre), una casilla por día de lunes a sábado, horas de la semana, saldo del bono; iniciales del profesor bajo cada columna',
          'En cada casilla del día: la duración de la clase arriba (p. ej. 1 h 30), y luego P (presente), A (ausencia avisada) o N (ausencia no avisada)',
          'Dos recuadros, clases anuladas o aplazadas (fecha, alumno, motivo, nueva fecha) y mensajes a las familias (progresos, deberes, citas, documentos que aportar)',
          `Visto bueno del profesor (semana comprobada), fecha de paso al seguimiento de horas, referencias sobre el crédito fiscal del 50${NBSP}% de los servicios a domicilio y el anticipo inmediato`,
        ],
      },
      {
        title: 'Horario de la semana',
        format: '«Planning de la semaine», hoja 1 del Excel, sin equivalente en el PDF',
        items: [
          'Semana del, lugar de clase, responsable, y luego 24 líneas de clases: día (lista de lunes a domingo), inicio y fin en formato hh:mm, clase, profesor, aula, inscritos',
          'Duración de cada clase calculada a partir del inicio y del fin, correcta incluso para una clase que pasa de medianoche, y total de horas de clase de la semana',
          'Columna «Alerte» en rojo, «Salle déjà occupée» (aula ya ocupada) o «Prof déjà en cours» (profesor ya en clase), cuando dos clases se solapan el mismo día',
          'Horas por profesor (número de clases, horas de la semana) y ocupación de las aulas (horas ocupadas), 8 líneas cada una',
        ],
      },
      {
        title: 'Horas por alumno',
        format: '«Heures par élève», hoja 2 del Excel',
        items: [
          `Dos ajustes: el umbral de aviso del saldo (2${NBSP}h por defecto) y si las ausencias no avisadas se descuentan del bono (Oui o Non)`,
          'Diario de clases de 60 líneas: fecha, alumno, clase o materia, profesor, duración en horas decimales (1,5 para 1 h 30), estado «Présent», «Absent prévenu» o «Absent non prévenu», observación',
          'Bonos y saldos en 15 líneas: alumno, fórmula o bono, horas compradas, y luego horas hechas, ausencias, horas de ausencia descontadas y saldo calculados a partir del diario',
          `Aviso por alumno: «Forfait dépassé : à facturer» (bono superado, por facturar) si el saldo es negativo, «Moins de 2 h : prévenir la famille» (menos de 2${NBSP}h, avisar a la familia) bajo el umbral, con la línea en rojo`,
        ],
      },
      {
        title: 'Horas por participante',
        format: '«Heures par stagiaire», hoja 3 del Excel, en horizontal',
        items: [
          `Título de la formación, formador, fechas, número de declaración de actividad, financiador(es), y horas previstas por media jornada ajustables (3,5${NBSP}h por defecto)`,
          'Tabla de 12 líneas: participante, empresa o financiador, y luego mañana y tarde de los días 1 a 5 con la fecha de cada día; 0 = ausente (casilla en rojo), vacía = sin clase prevista',
          'Por participante: horas realizadas, horas previstas, asiduidad en % y medias jornadas de ausencia calculadas; abajo, los presentes por media jornada',
          'Bloque «Pour le certificat de réalisation et le BPF»: participantes de la sesión, horas realizadas y horas previstas, todos los participantes',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la hoja de firmas en cinco pasos',
    intro:
      'El PDF se rellena a mano y se firma en el momento. En el Excel, solo se escriben las casillas blancas: duraciones, saldos y totales se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tu centro y su número de declaración',
        description:
          'Rellena el nombre y la dirección del centro, el número de declaración de actividad y el prefecto de región que lo registró; la mención «ne vaut pas agrément de l’État» ya está impresa. Guarda esa copia como plantilla.',
      },
      {
        label: 'Paso 2',
        title: 'La sesión',
        description:
          'Título de la formación, sesión o grupo, formador, fechas, lugar (o la herramienta usada a distancia), horario de mañana y de tarde. Marca la modalidad: presencial, a distancia o mixta.',
      },
      {
        label: 'Paso 3',
        title: 'Los participantes y las fechas',
        description:
          'Una línea por participante, apellidos y nombre, hasta 12 por hoja. Escribe la fecha de cada día en la cabecera de las columnas; para una sesión más larga, imprime una hoja por cada dos días.',
      },
      {
        label: 'Paso 4',
        title: 'Una firma por media jornada',
        description:
          'Cada participante firma la casilla de la mañana y la de la tarde, no al final de la sesión. Marca A si está ausente, R si llega tarde o se va antes de la hora, y anota la hora en las observaciones. El formador firma abajo de cada columna.',
      },
      {
        label: 'Paso 5',
        title: 'El paso de las horas al Excel',
        description:
          'Pasa las horas seguidas de cada participante a la hoja «Heures par stagiaire» (0 para una ausencia, casilla vacía sin clase): horas realizadas, horas previstas, asiduidad y totales para el certificado de realización y el BPF se calculan solos. Para las clases regulares, el diario de la hoja «Heures par élève» cumple el mismo papel.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las referencias que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas de la formación y de las clases pasan por la hoja de firmas y el seguimiento de horas. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: 'En los 3 meses, y luego cada año',
        title: 'El número de declaración de actividad y el BPF anual',
        text: 'Declara tu actividad en los 3 meses siguientes al primer convenio o contrato de formación firmado; su número (NDA) figura después en tus convenios, presupuestos, facturas y contratos. Cada año, el balance pedagógico y financiero (BPF) la mantiene válida. La hoja de firmas lleva ese número, y el Excel suma las horas por participante para el BPF.',
        sourceName: TRAINING_ACTIVITY_DECLARATION_SOURCE.name,
        sourceUrl: TRAINING_ACTIVITY_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de noviembre de 2026',
        title: 'Qualiopi no cita las hojas de firmas: los financiadores, sí',
        text: 'El decreto del 1 de agosto de 2026 fija 7 criterios y 33 indicadores para Qualiopi, la certificación de calidad francesa de los centros de formación. El texto no cita las hojas de firmas: son la prueba de realización que piden los financiadores, y firmar por media jornada es su costumbre, no una obligación escrita. Para los módulos a distancia, el indicador 19 pide la prueba de que se siguen de verdad: la hoja prevé la casilla «À distance» y las observaciones de conexión.',
        sourceName: QUALITY_FRAMEWORK_DECREE_SOURCE.name,
        sourceUrl: QUALITY_FRAMEWORK_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Artículos L6353-3 a L6353-6',
        title: 'Un particular se paga la formación: 10 días para desistir',
        text: `El contrato se firma antes de la inscripción definitiva y de cualquier pago. El alumno tiene 10 días para desistir por carta certificada; no se cobra nada antes de que acabe ese plazo, y luego el 30${NBSP}% del precio como máximo, con el resto escalonado. La hoja de firmas guarda la prueba de las horas realmente seguidas que facturas después.`,
        sourceName: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.name,
        sourceUrl: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.url,
      },
      {
        contextLabel: 'Refuerzo escolar a domicilio',
        title: 'El anticipo inmediato exige un programa compatible',
        text: 'Para ofrecer a las familias el anticipo inmediato de su crédito fiscal, tu estructura debe estar declarada o autorizada como servicio a domicilio, al día de sus obligaciones sociales y fiscales, sin infracción por trabajo no declarado en 5 años, y usar un programa compatible con la API Tiers de prestation de la Urssaf, el organismo francés de cotizaciones sociales. La hoja de asistencia no hace el anticipo, pero sus horas sirven para facturar el mes y preparar el certificado fiscal del año.',
        sourceName: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.name,
        sourceUrl: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Hoja de firmas de formación: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de hoja de firmas es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Firmar por media jornada es obligatorio en Francia?',
        answer:
          'No, ningún texto lo dice. El referencial Qualiopi vigente desde el 1 de noviembre de 2026 no cita las hojas de firmas: son la prueba de realización que piden los financiadores, y la mayoría espera una firma por la mañana y otra por la tarde. El certificado de realización, en cambio, sigue el modelo publicado por el Ministerio de Trabajo francés: la hoja sirve para rellenarlo, no lo sustituye.',
      },
      {
        question: '¿La hoja sirve para el refuerzo escolar o una escuela de música?',
        answer: `Sí, es la página 2 del PDF: un alumno por línea, una casilla por clase de lunes a sábado, las horas de la semana y el saldo del bono, con las iniciales del profesor. En el Excel, el horario avisa de las reservas dobles de aula o de profesor, y el seguimiento por alumno te avisa cuando quedan menos de 2${NBSP}horas. En Francia, una escuela que da clases de ocio a particulares no tiene que hacer declaración de actividad.`,
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Planning de la semaine»: escribes el día, las horas de inicio y fin, el profesor y el aula; la duración, el total de la semana, las horas por profesor y los avisos de solapamiento se calculan. «Heures par élève»: llevas el diario de clases (duración, estado «Présent», «Absent prévenu» o «Absent non prévenu») y el saldo de cada bono se actualiza. «Heures par stagiaire»: anotas las horas de cada media jornada, y la hoja da las horas realizadas, la asiduidad y los totales para el certificado de realización y el BPF.',
      },
      {
        question: '¿Y cuando las sesiones se multiplican?',
        answer: `Una hoja de papel basta para unas cuantas sesiones al mes. Más allá, las firmas en línea de Edusign empiezan en 29${NBSP}€ al mes pagando el año, Digiforma gestiona sesiones, firmas digitales y BPF desde 49${NBSP}€ sin IVA al mes, y Platformeasy factura el refuerzo escolar con el anticipo inmediato desde 39${NBSP}€ sin IVA al mes. Si tu organización sale de su marco (formación y refuerzo escolar en la misma estructura, varios financiadores), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las hojas firmadas, el horario y las horas de cada participante se copian de un archivo a otro, una herramienta que los encadena te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para centros de formación',
  },
}
