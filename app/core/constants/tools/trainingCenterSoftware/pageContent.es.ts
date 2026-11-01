import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  IMMEDIATE_ADVANCE_PROVIDER_SOURCE,
  QUALITY_FRAMEWORK_DECREE_SOURCE,
  SELF_FUNDED_TRAINING_CONTRACT_SOURCE,
  TRAINING_ACTIVITY_DECLARATION_SOURCE,
  TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  TRAINING_CENTER_PAGE_PROJECT_SLUG,
  TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS,
  TRAINING_CENTER_PAGE_SCREENSHOT_URL,
  TRAINING_CENTER_PAGE_UPDATED_AT,
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
  VAT_EXEMPT_E_INVOICING_SOURCE,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const TRAINING_CENTER_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para centros de formación en Francia: precios 2026',
    description:
      'Refuerzo escolar, clases particulares, escuelas de música: precios 2026 de Digiforma, Dendreo, Platformeasy, test gratuito en 6 preguntas y hoja de firmas.',
    inLanguage: 'es',
    schemaAbout: 'Programa de gestión para centros de formación, refuerzo escolar y escuelas de música en Francia',
  },
  breadcrumbLabel: 'Software para centros de formación',
  shareImage: {
    titleLines: ['¿Qué software para', 'tus formaciones?'],
    highlight: 'formaciones',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas de formación y de clases en Francia y una hoja de firmas gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'graduation',
    alt: '¿Qué software para tu centro de formación o tu academia? Test gratuito en 6 preguntas, precios 2026 de los programas en Francia y hoja de firmas para descargar, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'centro de formación',
    titleAfter: ' o tu academia?',
    description:
      'Seis preguntas sobre tus formadores o profesores, tus lugares de clase y sobre todo sobre quién te paga: el CPF (la cuenta personal de formación francesa), un OPCO (operador que financia la formación de los empleados), familias con crédito fiscal o socios. Formación certificada Qualiopi (la certificación de calidad francesa de los centros de formación), refuerzo escolar, clases particulares, escuela de música o de danza: a partir del mercado francés, el test te dice qué familia de programas elegir, qué normas se te aplican y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Durante mi formación en Epitech diseñé una aplicación de gestión de autoescuela: horario de las clases, alumnos, profesores y horas restantes.',
    updatedAt: TRAINING_CENTER_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas de formación, refuerzo escolar y escuelas de música en Francia',
    intro:
      'Tres mundos que no se cruzan: los programas para centros de formación (Qualiopi; el BPF, el balance pedagógico y financiero anual; el CPF), los del refuerzo escolar y las clases particulares (anticipo inmediato del crédito fiscal, certificados fiscales) y los de las escuelas de música, danza o idiomas (inscripciones, tarifas familiares). Estos son los precios que muestran los editores; suben con el número de alumnos, de horas-alumno, de usuarios o de firmas.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Digiforma',
        coverage:
          'Centros de formación: sesiones, firma de asistencia digital, BPF, conformidad de calidad, presupuestos, facturas y factura electrónica; CPF y EDOF no descritos en la página de precios',
        price: `Desde 49${NBSP}€ sin IVA al mes`,
        priceCondition: `Indep 49${NBSP}€ con compromiso anual o 59${NBSP}€ sin él (200 alumnos al año, 1 usuario), hasta Leader desde 699 o 839${NBSP}€; opciones desde 29${NBSP}€ al mes; 15 días gratis`,
      },
      {
        name: 'Dendreo',
        coverage:
          'Centros de formación: firmas de asistencia ilimitadas, BPF automático, guía Qualiopi, exportación a EDOF (conector mediante una suscripción a Wedof aparte), factura electrónica',
        price: `225 a 992${NBSP}€ sin IVA al mes`,
        priceCondition: `Starter: 10${NBSP}000${NBSP}horas-alumno al año, 2 usuarios; puesta en marcha de 1490 a 3990${NBSP}€ sin IVA; Platine bajo presupuesto; prueba de 14 días, sin compromiso`,
      },
      {
        name: 'Edusign',
        coverage:
          'Solo firmas de asistencia en línea: alumnos y cuestionarios ilimitados, de 200 a 1000 firmas al mes según la oferta; Qualiopi citado en la oferta Organisme Pro',
        price: `29 a 119${NBSP}€ al mes`,
        priceCondition: `Con o sin IVA no precisado; Indépendant 29${NBSP}€ pagando el año o 39${NBSP}€ al mes, Organisme 59 o 75${NBSP}€, Organisme Pro 99 o 119${NBSP}€, y luego 0,25 a 0,50${NBSP}€ por firma por encima de la cuota; prueba gratuita`,
      },
      {
        name: 'Platformeasy (antes Ogustine)',
        coverage:
          'Refuerzo escolar y clases a domicilio: horario, facturas desde el horario, anticipo inmediato (interfaz Urssaf) y certificados fiscales desde Solo, factura electrónica',
        price: `39 a 109${NBSP}€ sin IVA al mes`,
        priceCondition: `Solo 39${NBSP}€, Standard 69${NBSP}€ (+29${NBSP}€ por cuenta), Pro 109${NBSP}€ (+39${NBSP}€ por cuenta); app móvil 1750${NBSP}€ más 35${NBSP}€ sin IVA al mes; 30 días por 1${NBSP}€, sin compromiso`,
      },
      {
        name: 'Kadrella',
        coverage:
          'Clases particulares: alumnos y profesores ilimitados, clases recurrentes, certificado fiscal; facturas en la oferta Complet; anticipo inmediato no mencionado',
        price: `Gratis, y luego 29 o 49${NBSP}€ al mes`,
        priceCondition: `Con o sin IVA no precisado; Essentiel 29${NBSP}€ (319${NBSP}€ al año), Complet 49${NBSP}€ (539${NBSP}€ al año); prueba de 14 días, sin compromiso`,
      },
      {
        name: 'MyScol',
        coverage:
          'Refuerzo escolar, música y danza: horario por alumno, asistencias y ausencias, facturas y pagos de los padres, cuaderno de tareas',
        price: `84 a 360${NBSP}€ sin IVA al mes`,
        priceCondition: `De 50 a 500 alumnos; pagando el año, 504 a 2160${NBSP}€ sin IVA; sin prueba, un mes sin compromiso en mensual`,
      },
      {
        name: 'Viviarto',
        coverage:
          'Escuelas de música y de danza: horario, inscripciones en línea, tarifas familiares, asistencias, código QR',
        price: `Desde 19${NBSP}€ al mes`,
        priceCondition: `Con o sin IVA no precisado; Autonomie desde 19${NBSP}€, Sérénité desde 38${NBSP}€, Tout compris desde 52${NBSP}€, tarifa adaptada al tamaño de la escuela, suscripción por temporada`,
      },
      {
        name: 'Alcuin, Belami, Accès SAP, Ogust',
        coverage:
          'Horario de las sesiones y BPF (Alcuin), facturas y domiciliaciones SEPA de las familias (Belami), anticipo inmediato para el refuerzo escolar (Accès SAP, Ogust)',
        price: 'Bajo presupuesto',
        priceCondition: `Tarifas no publicadas; en Accès SAP, programa incluido en la cuota de socio de la cooperativa; en Ogust, Standard y Entreprise bajo presupuesto, Essentiel desde 50${NBSP}€ al mes (con o sin IVA no precisado)`,
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar una semana real por el programa. Un profesor de baja sustituido esa misma mañana, una sesión en la que cada media jornada se firma en línea, el certificado de realización enviado al financiador, una familia facturada con el anticipo inmediato, y luego el total de horas listo para el BPF. Y mira lo que hace subir la factura: alumnos, horas-alumno, usuarios o firmas.',
    calloutFootnote:
      'Tarifas consultadas el 1 de noviembre de 2026 en las páginas de precios de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Qualiopi, BPF, anticipo inmediato: las normas francesas según quién te paga',
    intro: `En Francia, todo depende de quién paga tus clases. Para el CPF, un OPCO o una empresa, eres un centro de formación: declaración de actividad, BPF cada año, Qualiopi para el CPF. Para familias, el refuerzo escolar a domicilio entra en los servicios a domicilio (services à la personne): IVA del 10${NBSP}% si solo prestas esos servicios, y un crédito fiscal del 50${NBSP}% para ellas. Una escuela de música, de danza o de idiomas que da clases de ocio no tiene que hacer declaración de actividad.`,
    facts: [
      {
        contextLabel: 'En los 3 meses, y luego cada año',
        title: 'La declaración de actividad y el BPF anual',
        text: 'Declara tu actividad en los 3 meses siguientes al primer convenio o contrato de formación firmado; su número (NDA) figura después en tus convenios, presupuestos, facturas y contratos. Cada año, el balance pedagógico y financiero (BPF) la mantiene válida: sin él, la declaración caduca. Las clases de ocio dadas a particulares no están afectadas.',
        sourceName: TRAINING_ACTIVITY_DECLARATION_SOURCE.name,
        sourceUrl: TRAINING_ACTIVITY_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de noviembre de 2026',
        title: 'Qualiopi: un referencial de 33 indicadores',
        text: 'El decreto del 1 de agosto de 2026 fija 7 criterios y 33 indicadores, frente a 32 antes. Varios tratan del seguimiento: evaluación a la entrada, seguimiento adaptado, abandonos y, para los módulos a distancia, la prueba de que se siguen de verdad (indicador 19). El texto no cita las hojas de firmas: son la prueba de realización que piden los financiadores.',
        sourceName: QUALITY_FRAMEWORK_DECREE_SOURCE.name,
        sourceUrl: QUALITY_FRAMEWORK_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Artículos L6353-3 a L6353-6',
        title: 'Un particular se paga la formación: 10 días para desistir',
        text: `El contrato se firma antes de la inscripción definitiva y de cualquier pago. El alumno tiene 10 días para desistir por carta certificada; no se cobra nada antes de que acabe ese plazo, y luego el 30${NBSP}% del precio como máximo, con el resto escalonado.`,
        sourceName: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.name,
        sourceUrl: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.url,
      },
      {
        contextLabel: 'Refuerzo escolar a domicilio',
        title: 'El anticipo inmediato exige un programa compatible',
        text: 'Para ofrecer a las familias el anticipo inmediato de su crédito fiscal, tu estructura debe estar declarada o autorizada como servicio a domicilio, al día de sus obligaciones sociales y fiscales, sin infracción por trabajo no declarado en 5 años, y usar un programa compatible con la API Tiers de prestation de la Urssaf (el organismo francés de cotizaciones sociales).',
        sourceName: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.name,
        sourceUrl: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.url,
      },
      {
        contextLabel: 'Factura electrónica',
        title: 'Formación exenta de IVA: recibir, no emitir',
        text: 'Para las operaciones exentas de IVA (artículos 261 a 261 E del código tributario francés, donde figura la formación profesional), impots.gouv.fr indica que no estás afectado en la emisión. En cambio, tu centro debe recibir las facturas electrónicas de sus proveedores. Algunos editores dicen lo contrario: pide confirmación a tu gestor contable.',
        sourceName: VAT_EXEMPT_E_INVOICING_SOURCE.name,
        sourceUrl: VAT_EXEMPT_E_INVOICING_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'El calendario de la factura electrónica',
        text: 'Todas las empresas francesas afectadas por la reforma deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes deberán emitirlas a partir del 1 de septiembre de 2027, para las operaciones que entran en su ámbito.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'la certificación Qualiopi, ni tus trámites en Mon activité formation, en EDOF o ante la Urssaf. Es tu centro el que se audita y el que declara; la herramienta ordena las pruebas, prepara las cifras del BPF y se conecta a tu contabilidad.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Hoja de firmas de formación y seguimiento de horas, en PDF y en Excel',
    description:
      'Una hoja de firmas por media jornada para tus formaciones, con el número de declaración de actividad y las firmas del alumno y del formador; su versión semanal para las clases regulares de refuerzo escolar, música o idiomas. En francés, en PDF para imprimir o en Excel, donde el horario de las clases, el saldo de horas de cada alumno y el total de horas por participante se calculan solos.',
    items: [
      'Hoja de firmas por media jornada: título, fechas, horario, presencial o a distancia, lugar, NDA, firmas del alumno y del formador, ausencia o retraso',
      'Asistencia de la semana: un alumno por línea, una casilla por clase, el bono y el saldo de horas, para el refuerzo escolar, la música o los idiomas',
      `Versión Excel: horario de clases, profesores y aulas con aviso de reserva doble, saldo de horas por alumno con aviso por debajo de 2${NBSP}horas, total por participante para el certificado de realización y el BPF`,
      'Referencias útiles: firmar por media jornada es una costumbre que piden la mayoría de los financiadores franceses, no una obligación escrita; el certificado de realización sigue el modelo del Ministerio de Trabajo francés',
    ],
    downloads: [
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
    footnote: 'De uso libre, para adaptar a tu centro y a tus financiadores.',
  },
  comparison: {
    eyebrow: 'Las tres opciones',
    title: '¿Programa del mercado, complemento o a medida?',
    intro:
      'Cada una tiene su lugar. El test te orienta; esta tabla muestra lo que ganas y lo que aceptas con cada una.',
    criterionLabel: 'Criterio',
    columns: ['Programa del mercado', 'Programa del mercado + complemento', 'Herramienta a medida'],
    rows: [
      {
        label: 'Precio',
        cells: [
          {
            state: 'yes',
            text: `Ofertas de entrada de 39 a 225${NBSP}€ sin IVA al mes, y luego según el volumen`,
          },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Firmas de asistencia, BPF, anticipo inmediato',
        cells: [
          {
            state: 'partial',
            text: 'Según el editor: el BPF en los programas de formación, el anticipo inmediato en los de refuerzo escolar, no los dos en las ofertas consultadas',
          },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          {
            state: 'yes',
            text: 'Reunidos en una sola herramienta; el anticipo inmediato pasa por la API de la Urssaf, tras la habilitación',
          },
        ],
      },
      {
        label: 'Tus reglas: bonos, financiadores, varias actividades',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Espacio para alumnos, familias o participantes',
        cells: [
          { state: 'partial', text: 'A menudo una extranet del editor, con sus colores' },
          { state: 'yes', text: 'En tu web, con tus colores' },
          { state: 'yes', text: 'En tu web, con tus colores' },
        ],
      },
      {
        label: 'Puesta en marcha',
        cells: [
          { state: 'yes', text: 'Unos días; más para los programas muy configurables' },
          { state: 'partial', text: '2 a 6 semanas' },
          { state: 'partial', text: '5 a 20 semanas, por etapas' },
        ],
      },
      {
        label: 'Tus datos',
        cells: [
          { state: 'partial', text: 'En el editor, exportación según el programa' },
          { state: 'partial', text: 'Repartidos entre las dos herramientas' },
          { state: 'yes', text: 'Tuyos, código incluido' },
        ],
      },
    ],
    rowsShownOnSmallScreens: TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: TRAINING_CENTER_PAGE_PROJECT_SLUG,
    screenshotUrl: TRAINING_CENTER_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un horario de clases con el saldo de horas de cada alumno, ya desarrollado',
    description:
      'Driving School es una aplicación web de gestión de autoescuela que diseñé durante mi formación en Epitech. Una clase de conducir y una clase de refuerzo tienen el mismo esqueleto: un alumno, un profesor, una franja horaria, un bono de horas que se va gastando. Es ese núcleo el que retomo para una academia o un centro de formación, añadiendo tus aulas, tus financiadores y tus hojas de firmas.',
    highlights: [
      'Un horario para consultar por día, por semana o por mes',
      'Una ficha por alumno y por profesor, con los permisos de cada uno',
      'El saldo de cada alumno: horas realizadas, horas restantes',
    ],
    linkLabel: 'Ver el proyecto Driving School',
    imageAlt: 'Driving School: el horario del mes, con el nombre del alumno en cada clase',
    browserBarCaption: 'Driving School · horario de las clases',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Programa de formación, refuerzo escolar o escuela: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa para centros de formación en Francia?',
        answer: `Digiforma empieza en 49${NBSP}€ sin IVA al mes con compromiso anual (59${NBSP}€ sin él) para 200 alumnos al año, Dendreo en 225${NBSP}€ sin IVA al mes más una puesta en marcha desde 1490${NBSP}€ sin IVA, hop3team en 39${NBSP}€ sin IVA al mes pagando el año (49${NBSP}€ sin compromiso), Qualiobee en 49${NBSP}€ sin IVA al mes para 100 alumnos al año y SmartOF en 75${NBSP}€ sin IVA al mes. Solo para las firmas de asistencia, Edusign cuesta 29${NBSP}€ al mes pagando el año (con o sin IVA no precisado). Los precios suben con los alumnos, las horas-alumno, los usuarios o las firmas (tarifas consultadas el 1 de noviembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Cuál es el programa de gestión de formación más usado?',
        answer:
          'No he encontrado ninguna cifra pública fiable sobre el número de usuarios de cada programa. El 1 de noviembre de 2026, la primera página de Google en Francia para «logiciel organisme de formation» mostraba Digiforma, Wedof, Qualiobee, SmartOF y Dendreo; para «logiciel soutien scolaire» (programa de refuerzo escolar), Platformeasy, MyScol, Ogust, Accès SAP y Gestio. Son dos familias de herramientas distintas: elige primero la tuya según quién te paga, que es lo que hace el test al principio de esta página.',
      },
      {
        question: '¿Qué programa para el refuerzo escolar o las clases particulares en Francia?',
        answer: `Mira primero el anticipo inmediato: con él, la familia solo paga el 50${NBSP}% del coste (dentro del límite del crédito fiscal), y solo puedes ofrecerlo si estás declarado o autorizado como servicio a domicilio, con un programa compatible con la API Tiers de prestation de la Urssaf. Platformeasy lo incluye desde su oferta Solo a 39${NBSP}€ sin IVA al mes, Ogust también lo ofrece (oferta Essentiel desde 50${NBSP}€ al mes, con o sin IVA no precisado) y Accès SAP incluye su programa en la cuota de socio de su cooperativa. Kadrella (gratis, y luego 29 o 49${NBSP}€ al mes) emite los certificados fiscales sin mencionar el anticipo inmediato, y MyScol (84${NBSP}€ sin IVA al mes para 50 alumnos) gestiona el horario, las asistencias y las facturas de los padres. Tarifas consultadas el 1 de noviembre de 2026.`,
      },
      {
        question: '¿Qué programa de gestión para una escuela de música o de danza?',
        answer: `Las herramientas de las escuelas de ocio gestionan las inscripciones, las tarifas familiares y las asistencias: Viviarto empieza en 19${NBSP}€ al mes (con o sin IVA no precisado, suscripción por temporada), Liberfit en 79${NBSP}€ sin IVA al mes con compromiso (99${NBSP}€ sin él, más gastos de puesta en marcha), AssoConnect es gratis y luego de 23 a 109${NBSP}€ con IVA al mes para asociaciones, MyScol empieza en 84${NBSP}€ sin IVA al mes y Belami va bajo presupuesto (tarifas consultadas el 1 de noviembre de 2026). En Francia, una escuela que da clases de ocio a particulares no tiene que hacer declaración de actividad de formación. En danza clásica, contemporánea o jazz, el profesor remunerado debe tener el diploma estatal, una equivalencia o una dispensa, y cada alumno aporta un certificado médico cada año (código de educación francés, artículos L362-1 y R362-2).`,
      },
      {
        question: '¿Existe un programa gratuito para centros de formación o clases particulares?',
        answer: `Sí, para empezar: Kadrella tiene una oferta gratuita para las clases particulares, AssoConnect una oferta gratuita para asociaciones, y Teachizy una oferta Découverte gratuita para vender cursos en línea (9${NBSP}% de comisión, 3 formaciones, 70 alumnos). Los programas para centros de formación consultados son de pago, pero se pueden probar gratis: hop3team abre una cuenta gratuita completa sin tarjeta bancaria, Digiforma ofrece 15 días, Dendreo y Qualiobee 14 días. La plantilla gratuita de esta página (hoja de firmas en PDF, seguimiento de horas en Excel) saca de un apuro a una estructura pequeña, sin firma en línea ni BPF automático.`,
      },
      {
        question: 'Hoja de firmas de formación: ¿por media jornada, en papel o en línea?',
        answer: `El referencial Qualiopi no cita las hojas de firmas: son la prueba de realización que piden los financiadores, junto con el certificado de realización cuyo modelo publica el Ministerio de Trabajo francés. Firmar por media jornada, por la mañana y por la tarde, es una costumbre que piden la mayoría de los financiadores, no una obligación escrita en un texto. En línea, Edusign empieza en 29${NBSP}€ al mes pagando el año (200 firmas al mes, y luego 0,50${NBSP}€ por firma), hop3team cobra 0,15${NBSP}€ sin IVA por firma y Dendreo incluye las firmas ilimitadas. En papel, la hoja gratuita de esta página prevé las dos medias jornadas, el número de declaración de actividad y las firmas del alumno y del formador.`,
      },
      {
        question: 'Qualiopi: ¿qué cambia desde el 1 de noviembre de 2026?',
        answer:
          'Desde el 1 de noviembre de 2026, el referencial nacional de calidad tiene 7 criterios y 33 indicadores, frente a 32 antes (decreto n.º 2026-728 del 1 de agosto de 2026). Varios indicadores tratan del seguimiento de los alumnos: posicionamiento y evaluación de los conocimientos a la entrada (8), seguimiento adaptado (10), logro de los objetivos (11), compromiso, abandonos, violencia y acoso (12), y seguimiento efectivo de los módulos a distancia (19). Comprueba que tu programa ya ha pasado a los 33 indicadores: el 1 de noviembre de 2026, al menos una página de precios de un editor seguía hablando de 32. Un programa no te certifica: es tu centro el que se audita.',
      },
      {
        question: '¿Cuándo hay que enviar el balance pedagógico y financiero (BPF)?',
        answer:
          'Cada año, en Mon activité formation, en la fecha que fija el Ministerio de Trabajo francés: en 2026, la campaña fue del 1 de abril al 31 de mayo (Centre Inffo). Todo centro declarado lo envía, formadores independientes incluidos; sin BPF, la declaración de actividad caduca. Un programa que lleva las firmas de asistencia y las horas por alumno te evita volver a contarlo todo al rellenarlo.',
      },
      {
        question: 'Un particular se paga su formación: ¿qué debe prever el contrato?',
        answer: `El contrato se firma antes de la inscripción definitiva y de cualquier pago (artículo L6353-3 del Código del Trabajo francés). El alumno puede desistir en un plazo de 10 días por carta certificada; no se puede exigir ninguna cantidad antes de que acabe ese plazo, y luego el 30${NBSP}% del precio como máximo, con el resto escalonado (artículos L6353-5 y L6353-6). Estas normas se refieren a la persona que emprende una formación a título individual y a su cargo.`,
      },
      {
        question: '¿Qué IVA para una formación, refuerzo escolar o clases a domicilio en Francia?',
        answer: `Una formación profesional solo está exenta de IVA con el certificado de la Dreets (la administración regional de trabajo), y la factura lleva la mención «article 261-4-4° du CGI» (Centre Inffo). El refuerzo escolar a domicilio va al 10${NBSP}% si solo prestas servicios a domicilio; las demás clases a domicilio van al 20${NBSP}% (Entreprendre.Service-Public.fr). Las familias recuperan luego el 50${NBSP}% de sus gastos como crédito fiscal, con un límite de 12${NBSP}000${NBSP}€ al año más 1500${NBSP}€ por hijo a cargo (15${NBSP}000${NBSP}€ como máximo), y el presupuesto es obligatorio a partir de 100${NBSP}€ con IVA al mes.`,
      },
      {
        question: 'Mi centro hace formación y refuerzo escolar: ¿basta con un solo programa?',
        answer: `No con las ofertas que he consultado: el 1 de noviembre de 2026, ninguna página leída de un programa para centros de formación mencionaba el anticipo inmediato, y ninguna página leída de un programa de servicios a domicilio mencionaba el BPF o Qualiopi. Sueles pagar entonces dos suscripciones, por ejemplo Digiforma desde 49${NBSP}€ sin IVA y Platformeasy desde 39${NBSP}€ sin IVA al mes, y vuelves a teclear de uno a otro. Es el caso en que una herramienta a medida se justifica: un solo horario y un solo seguimiento de horas, con las firmas y el BPF por un lado, el anticipo inmediato y el certificado fiscal por el otro. Se puede añadir IA si te sirve: BPF prerrellenado a partir de las asistencias, convenios y certificados preparados, resumen de los progresos para los padres.`,
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus alumnos, tus sesiones, tus firmas de asistencia y tus facturas a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor, y guarda tus hojas de firmas: son tu prueba de realización ante los financiadores.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tus formaciones o tus clases?',
    description:
      'Cuéntame en unas líneas quién te paga, tus lugares de clase y tus profesores. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
