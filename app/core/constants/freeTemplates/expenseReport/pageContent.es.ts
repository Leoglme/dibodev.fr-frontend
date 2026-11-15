import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BUSINESS_PURCHASES_VAT_SOURCE,
  EXPENSE_REPORT_TEMPLATE_PDF_PATH,
  EXPENSE_REPORT_TEMPLATE_UPDATED_AT,
  EXPENSE_REPORT_TEMPLATE_XLSX_PATH,
  MILEAGE_ALLOWANCE_SCALE_SOURCE,
  PROFESSIONAL_EXPENSES_SOURCE,
} from '~/core/constants/freeTemplates/expenseReport/pageShared'
import { DOCUMENT_RETENTION_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const EXPENSE_REPORT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Nota de gastos: plantilla francesa gratis, PDF y Excel',
    description:
      'Nota de gastos: plantilla francesa gratis en PDF y Excel, subtotales de comidas, hotel y transporte, registro de kilometraje y resumen anual. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de nota de gastos mensual y de registro de kilometraje',
  },
  breadcrumbLabel: 'Nota de gastos',
  shareImage: {
    titleLines: ['Nota de gastos', 'plantilla gratis'],
    highlight: 'Nota de gastos',
    subtitle: 'Nota de gastos del mes y registro de trayectos en vehículo propio, en PDF y Excel, totales calculados',
    badge: 'Gratis, sin registro',
    icon: 'receipt',
    alt: 'Plantilla francesa de nota de gastos gratis: nota de gastos del mes y registro de kilometraje en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Nota de gastos',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ registro de kilometraje)',
    reassurances: ['Nota del mes + registro de km', 'Excel con subtotales por tipo', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una nota de gastos mensual (note de frais) y un registro de los trayectos hechos con un vehículo propio, listos para rellenar, escritos en francés para las empresas en Francia, para un empleado o un directivo que adelanta gastos por cuenta de la empresa: la comida camino de una obra, la noche de hotel antes de una feria, el billete de tren, el peaje, los kilómetros hechos con su propio coche. Cada línea remite a un justificante numerado, los totales se hacen por tipo y se descuenta el anticipo ya recibido. Ningún baremo está escrito en la plantilla: escribes tú la tarifa por kilómetro del año, y esta página te dice dónde leerla.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las páginas de la Urssaf sobre los gastos profesionales y las indemnizaciones por kilometraje, y las de la administración tributaria francesa sobre el IVA recuperable, para que los apartados y las menciones sean exactos.',
    updatedAt: EXPENSE_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para los empleados y directivos en Francia que adelantan gastos, y para quien los valida y los reembolsa. Dos archivos en francés, sin formulario: el PDF se imprime y se rellena a mano, el Excel hace los totales y el resumen del año.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: EXPENSE_REPORT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: EXPENSE_REPORT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales calculados, en francés',
      },
    ],
    footnote: 'Plantilla de uso libre, para adaptar a tu empresa. No sustituye el consejo de tu asesor contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una nota de gastos, un registro de kilometraje y un resumen del año',
    intro:
      'El PDF cabe en dos páginas A4: la nota de gastos del mes, y después el registro de los trayectos hechos con un vehículo propio y la lista de justificantes adjuntos. El Excel recoge las dos en dos hojas y añade una tercera, el resumen del año mes a mes, con el cálculo de fin de año de las indemnizaciones por kilometraje.',
    documents: [
      {
        title: 'Nota de gastos del mes',
        format: 'Página 1 del PDF, hoja «Note de frais» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, SIREN o SIRET), departamento u obra imputada, n.º de la nota, mes, periodo cubierto, fecha de entrega',
          'El solicitante: nombre, puesto, y su situación en tres casillas (empleado, directivo asimilado a empleado, directivo no asalariado), porque las reglas de reembolso no son las mismas',
          '16 líneas de gastos (20 en el Excel): n.º del justificante, fecha, tipo (comidas, alojamiento, transporte, otros), proveedor, motivo profesional, importe sin IVA, IVA, importe con IVA',
          'Subtotales con IVA por tipo, más la línea de indemnizaciones por kilometraje traída de la página 2; en el Excel, el IVA y el importe sin IVA también se suman por tipo',
          'Pago: total de la nota, anticipo recibido, saldo a reembolsar o exceso a devolver, fecha y forma de pago',
          'Firmas del solicitante, que certifica los gastos, y de quien valida, con la mención «bon pour remboursement» (conforme para reembolso); en el Excel, una columna «Contrôle» avisa de una línea sin motivo, sin fecha o con fecha fuera del mes',
        ],
      },
      {
        title: 'Registro de trayectos en vehículo propio',
        format: 'Página 2 del PDF, hoja «Trajets véhicule perso» del Excel',
        items: [
          'El vehículo: marca y modelo, matrícula, potencia fiscal, titular del permiso de circulación, tipo (coche de gasolina, diésel o híbrido, coche eléctrico, moto, ciclomotor)',
          '14 líneas de trayectos (25 en el Excel): fecha, salida, llegada, motivo profesional, ida y vuelta, kilómetros; el Excel duplica solo los kilómetros de una ida y vuelta',
          'Total de kilómetros del mes y acumulado desde el 1 de enero, porque el baremo fiscal francés se lee sobre la distancia de todo el año',
          'Tarifa por kilómetro que escribes tú, según el baremo del año: la indemnización del mes se calcula y pasa a la nota',
          'Lista de justificantes adjuntos (tipo, concepto, importe con IVA, factura a nombre de la empresa o no, original o copia digital) y casilla «copia del permiso de circulación adjunta»',
        ],
      },
      {
        title: 'Resumen anual',
        format: 'Hoja «Récap annuel» del Excel',
        items: [
          'Una línea por mes: comidas, alojamiento, transporte, otros, IVA, kilómetros profesionales, indemnizaciones por kilometraje pagadas, total reembolsado',
          'Un recordatorio de los totales de la nota en curso, para copiar en el mes correcto una vez validada la nota',
          'Total del año por columna, útil para el cierre y para seguir lo que cuestan los desplazamientos',
          'Cálculo de fin de año: escribes el coeficiente y el importe fijo del tramo del baremo que corresponde a tus kilómetros del año, y el Excel da la diferencia con las indemnizaciones ya pagadas',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la nota de gastos en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas y las amarillas. El importe sin IVA, los subtotales, la indemnización por kilometraje y el saldo a reembolsar se calculan solos. Borra las líneas de ejemplo antes de empezar.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Numerar cada justificante',
        description:
          'Durante el mes, guarda cada tique y cada factura, y escribe en ellos un número: 1, 2, 3… Es el número que recoge la línea de la nota. Un gasto sin justificante no tiene sitio aquí, salvo si la empresa paga dietas a tanto alzado.',
      },
      {
        label: 'Paso 2',
        title: 'Una línea por gasto, con su motivo',
        description:
          'Fecha, tipo, proveedor, y luego el motivo profesional claro: «comida, obra Le Goff en Vannes», no «comida». Copia el importe con IVA y el IVA tal como figuran en el tique. Los peajes y el aparcamiento van en transporte.',
      },
      {
        label: 'Paso 3',
        title: 'Los trayectos con tu propio vehículo',
        description:
          'Apunta cada desplazamiento profesional el mismo día, con sus kilómetros. A fin de mes, escribe en la casilla amarilla la tarifa por kilómetro del baremo del año, leída en la página «Indemnités kilométriques» de la Urssaf para tu tipo de vehículo y su potencia fiscal.',
      },
      {
        label: 'Paso 4',
        title: 'Firmar, validar, reembolsar',
        description:
          'Indica el anticipo recibido, firma y entrega la nota con sus justificantes. Quien valida comprueba, firma «bon pour remboursement» y paga el saldo. Después copia los totales del mes en el resumen anual.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las normas que la plantilla ya sigue',
    intro:
      'Seis normas de la Urssaf (el organismo francés de cotizaciones sociales) y de la administración tributaria francesa pasan por una nota de gastos. La plantilla les reserva una columna, una casilla o una mención; los importes y los topes cambian cada año, así que esta página te remite a la fuente en vez de copiarlos. Para un caso particular, pregunta a tu asesor contable.',
    facts: [
      {
        contextLabel: 'Urssaf, gastos profesionales',
        title: 'Con justificantes, o con una dieta a tanto alzado',
        text: 'La empresa reembolsa los gastos por su importe real, con justificantes, o con una asignación a tanto alzado. Por el importe real no hay tope, pero hay que probar que el trabajo obligaba al gasto y presentar el justificante. A tanto alzado, el importe se compara con límites revalorizados cada año por la Urssaf: por debajo, no hace falta justificante, solo demostrar que el gasto es profesional.',
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'Directivos',
        title: 'Sin tanto alzado para la mayoría de los directivos',
        text: 'Las asignaciones a tanto alzado no se aplican a los directivos del régimen de no asalariados, ni a los gerentes minoritarios o paritarios de una SARL, ni a los presidentes-directores generales de una SA, ni a los presidentes y directivos de una SAS. Sus gastos se valoran por su importe real: de ahí la casilla de la situación en la cabecera de la nota, y un justificante para cada línea.',
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'Vehículo propio',
        title: 'El kilometraje sigue el baremo fiscal francés',
        text: 'Un empleado obligado a usar su propio vehículo para un desplazamiento profesional puede recibir indemnizaciones por kilometraje, exentas de cotizaciones dentro del baremo fiscal publicado cada año. El baremo depende del tipo de vehículo, de su potencia fiscal y de los kilómetros profesionales del año, con una tabla propia para los vehículos eléctricos. La Urssaf lo recoge en su página «Indemnités kilométriques»: ahí lees la tarifa que debes escribir.',
        sourceName: MILEAGE_ALLOWANCE_SCALE_SOURCE.name,
        sourceUrl: MILEAGE_ALLOWANCE_SCALE_SOURCE.url,
      },
      {
        contextLabel: 'Prueba de los kilómetros',
        title: 'Un registro día a día y el permiso de circulación',
        text: 'Para justificar las indemnizaciones por kilometraje, la empresa debe probar cada desplazamiento profesional y los kilómetros recorridos, y presentar el permiso de circulación del vehículo. La Urssaf menciona un estado de kilómetros por día. Sin esos documentos, las indemnizaciones cotizan: es el papel de la página 2 de la plantilla.',
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'IVA',
        title: 'IVA recuperable: una factura, y no en todo',
        text: 'Una empresa sujeta al IVA solo lo recupera con una factura que indique el tipo y el importe del IVA. El IVA del alojamiento de directivos y personal no se recupera, como tampoco el del transporte de personas (Service-Public cita los taxis y los VTC). Una empresa en franquicia de IVA, como muchos microempresarios, no recupera nada de IVA.',
        sourceName: BUSINESS_PURCHASES_VAT_SOURCE.name,
        sourceUrl: BUSINESS_PURCHASES_VAT_SOURCE.url,
      },
      {
        contextLabel: '10 años',
        title: 'Los justificantes se guardan diez años',
        text: 'Las facturas y demás justificantes se conservan 10 años desde el cierre del ejercicio; la administración tributaria puede inspeccionar durante 6 años. Guarda la nota firmada con sus tiques, o su copia digital, ordenada por mes. La lista de justificantes de la página 2 sirve para comprobar que no falta ninguno.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Nota de gastos: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de nota de gastos es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Qué debe contener una nota de gastos en Francia?',
        answer:
          'Ninguna página oficial que haya leído impone un formulario. Lo que pide la Urssaf es poder probar que cada gasto era profesional y presentar su justificante. La nota sirve para eso: quién gastó, cuándo, dónde, para qué cliente u obra, cuánto sin IVA, IVA y con IVA, y el número del tique o la factura adjunta. La situación del solicitante, el anticipo recibido y las dos firmas lo completan.',
      },
      {
        question: 'Tique o factura: ¿cuál guardar?',
        answer:
          'Para el reembolso, la Urssaf habla de justificantes: el tique prueba el gasto. Para recuperar el IVA, la administración tributaria francesa es más exigente: solo una factura, con el tipo y el importe del IVA, justifica la deducción. En el restaurante o el hotel, pide una factura a nombre de la empresa; la columna «factura a nombre de la empresa» de la página 2 sirve para comprobarlo.',
      },
      {
        question: '¿Cómo se calculan las indemnizaciones por kilometraje en Francia?',
        answer:
          'Suma los kilómetros profesionales hechos con tu propio vehículo y aplica el baremo kilométrico fiscal del año, según el tipo de vehículo y su potencia fiscal. La Urssaf lo publica en su página «Indemnités kilométriques», e impots.gouv.fr ofrece un simulador. El baremo se lee sobre la distancia de todo el año, en tres tramos, uno de los cuales añade un importe fijo: una tarifa simple aplicada cada mes es un anticipo, que el resumen anual del Excel permite ajustar a fin de año.',
      },
      {
        question: '¿Por qué el Excel no trae ninguna tarifa por kilómetro?',
        answer:
          'Porque el baremo cambia con el año y depende de tu vehículo: una tarifa escrita en la plantilla sería falsa para parte de los usuarios, o desde el año siguiente. La escribes en una casilla amarilla, y mientras está vacía el Excel te lo recuerda en vez de calcular un importe inventado. Lo mismo para las comidas: los límites de las dietas a tanto alzado se revalorizan cada año, consúltalos en urssaf.fr.',
      },
      {
        question: '¿Se puede recuperar el IVA de una nota de gastos?',
        answer: `Sí para una empresa sujeta al IVA, con dos condiciones: el gasto se hace para la actividad, y una factura indica el IVA. Algunos gastos están excluidos: el alojamiento de directivos y personal, y el transporte de personas sea cual sea el medio (tren, avión, taxi, VTC). Para el carburante, impots.gouv.fr indica un IVA recuperable al 80${NBSP}% para un turismo y al 100${NBSP}% para un vehículo comercial. En franquicia de IVA, no se recupera nada.`,
      },
      {
        question: '¿Un gerente de SARL o un presidente de SAS puede hacer una nota de gastos?',
        answer:
          'Sí, pero por el importe real. La Urssaf excluye de las dietas a tanto alzado a los directivos no asalariados, a los gerentes minoritarios o paritarios de SARL, a los presidentes-directores generales de SA y a los presidentes y directivos de SAS: sus gastos se valoran por su importe real. En la práctica, cada línea de su nota tiene su justificante, y la casilla de la situación en la cabecera de la plantilla se lo recuerda a quien valida.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Note de frais»: eliges el mes y escribes los gastos con su importe con IVA y su IVA; el importe sin IVA, los subtotales por tipo y el saldo a reembolsar se calculan, y la columna «Contrôle» avisa de una línea incompleta o con fecha fuera del mes. «Trajets véhicule perso»: los trayectos, el total de kilómetros y, una vez escrita la tarifa, la indemnización del mes, que pasa a la nota. «Récap annuel»: un mes por línea, el total del año y la diferencia con el baremo anual. Cada hoja se imprime en una página A4.',
      },
      {
        question: '¿Y cuando las notas de gastos se multiplican?',
        answer:
          'Una plantilla Excel basta para unas cuantas notas al mes. Con varios técnicos en la carretera, los tiques se pierden en las furgonetas, los kilómetros se reconstruyen de memoria y las notas llegan todas el último día: ahí es donde una herramienta en la que el técnico fotografía su tique y apunta el trayecto desde la intervención ahorra tiempo. Si tus equipos intervienen en casa de los clientes, el test de la página de la herramienta te dice qué programa de gestión de intervenciones elegir.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los tiques llegan arrugados a fin de mes, los kilómetros se recuentan en Google Maps y cada nota necesita tres idas y vueltas antes de validarse, una herramienta que guarda la foto del tique y el trayecto con la intervención te devuelve horas. Descríbeme tu organización: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de gestión de intervenciones',
  },
}
