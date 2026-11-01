import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  BODY_SHOP_PAGE_PROJECT_SLUG,
  BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  BODY_SHOP_PAGE_SCREENSHOT_URL,
  BODY_SHOP_PAGE_UPDATED_AT,
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
  CIRCULAR_ECONOMY_PARTS_SOURCE,
  COURTESY_CAR_SOURCE,
  FREE_CHOICE_OF_REPAIRER_SOURCE,
  GARAGE_RULES_SOURCE,
  PAINT_BOOTH_ICPE_SOURCE,
  VEHICLE_APPRAISAL_SOURCE,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BODY_SHOP_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para taller de carrocería en Francia: precios 2026',
    description:
      'Software de carrocería en Francia: precios 2026 (Gest’Garage, TDV, AutoProGestion, EBP…), qué hacen con un siniestro y test gratuito en 6 preguntas.',
    inLanguage: 'es',
    schemaAbout: 'Programa de gestión para talleres de carrocería en Francia',
  },
  breadcrumbLabel: 'Software para taller de carrocería',
  shareImage: {
    titleLines: ['¿Qué software para', 'tu carrocería?'],
    highlight: 'carrocería',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas de taller en Francia y una plantilla gratuita de presupuesto y seguimiento de siniestro',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'wrench',
    alt: '¿Qué software para tu taller de carrocería? Test gratuito en 6 preguntas, precios 2026 de los programas de taller en Francia y plantilla de presupuesto de carrocería con hoja de seguimiento de siniestro, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'taller de carrocería',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tu taller, tus expedientes y lo que te quita tiempo. Siniestros cubiertos por aseguradoras, presupuestos directos, flotas o rotura de lunas, a partir del mercado francés el test te dice qué tipo de programa elegir para valorar, seguir cada expediente desde el perito hasta el cobro y mantener la cabina en marcha, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En Kodeva creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: BODY_SHOP_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para talleres de carrocería en Francia y de sus precios',
    intro:
      'Las tarifas que muestran en su web los editores de programas de taller, y lo que cada uno dice de la carrocería. Ninguno sustituye al valorador normalizado (Sidexa, GT Estimate, DAT…) ni al acceso a Darva, la plataforma de intercambio de las aseguradoras francesas: los dos van bajo presupuesto, y un taller que trabaja con aseguradoras suele acumular dos o tres suscripciones.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Gest’Garage',
        coverage:
          'Presupuestos firmados en línea, órdenes de reparación, facturas, una tarifa horaria de pintura distinta, SMS y e-mails; el editor precisa que no tiene baremos de tiempos del fabricante, ni valoración de pintura, ni expedientes de siniestro, ni fotos en la orden',
        price: `19${NBSP}€ con IVA al mes`,
        priceCondition: `O 180${NBSP}€ al año, hasta 5 colaboradores, taller adicional 10${NBSP}€ al mes; 14 días de prueba sin tarjeta, sin compromiso`,
      },
      {
        name: 'TDV Agent (grupo Asttas)',
        coverage:
          'Vuelta al vehículo con 6 fotos antes de la recepción, mapa de daños, firma del cliente, presupuestos, facturas Factur-X, stock, «seguimiento de seguros para carroceros» y facturas a la aseguradora (Pro); ni valoración, ni Darva, ni vehículo de cortesía',
        price: `19,90 a 79${NBSP}€ con IVA al mes`,
        priceCondition: `Solo Essentiel 19,90${NBSP}€ (solo agenda), Solo Complet 24,90${NBSP}€, Essentiel 39${NBSP}€ (1 centro, usuarios ilimitados), Pro 79${NBSP}€ (hasta 3 centros); 14 días sin tarjeta, sin compromiso`,
      },
      {
        name: 'AutoProGestion',
        coverage:
          'Presupuestos, órdenes de reparación con inventario de estado, facturas, fichas de clientes y vehículos, stock; firma a distancia e inspección por vídeo (Pro), vehículos de cortesía con contrato e inventario de estado (plan no precisado); ni valoración, ni aseguradoras',
        price: `29 o 59${NBSP}€ sin IVA al mes`,
        priceCondition: `24 o 49${NBSP}€ sin IVA pagando el año; Starter 100 clientes y 2 usuarios, Pro ilimitado, Entreprise bajo presupuesto; 14 días, sin cargo en la tarjeta`,
      },
      {
        name: 'Kwixéo',
        coverage: 'Vehículos y órdenes de reparación, presupuestos, facturas, stock; la carrocería no se menciona',
        price: `18,33 a 89${NBSP}€ sin IVA al mes`,
        priceCondition: `Essentiel, Pro o Expert a 22, 59 y 89${NBSP}€ sin IVA al mes, más 6, 8 y 10${NBSP}€ por usuario adicional; pagando el año, 18,33 a 74,17${NBSP}€ y 5 a 8,33${NBSP}€ por usuario el primer año (2 meses gratis, luego 1); 14 días sin tarjeta`,
      },
      {
        name: 'WinMotor Next (Solware Auto)',
        coverage:
          'DMS para talleres independientes, agentes de marca y carroceros: expedientes, gestión del taller, facturación a varios pagadores y planificación de vehículos de cortesía (Premium); valoración, Darva y Sidexa ausentes de la página de precios; solo Windows 10 Pro',
        price: `68${NBSP}€ sin IVA al mes para 1 usuario`,
        priceCondition: `Starter 44${NBSP}€ sin IVA por usuario a partir de 2, Premium 87${NBSP}€ sin IVA para 1 o 57${NBSP}€ por usuario; puesta en marcha, migración de datos y mantenimiento sin tarifa; ni prueba ni compromiso indicados`,
      },
      {
        name: 'ProGarage (BH Atelier)',
        coverage:
          'Presupuestos, órdenes de reparación, facturas, stock, valoración de parabrisas Glasscheck y «gestión de seguros» desde Essentiel; sin módulo de carrocería como tal',
        price: `99 a 499${NBSP}€ sin IVA al mes`,
        priceCondition: `Starter 99${NBSP}€ (1 usuario), Essentiel 199${NBSP}€ (3), Performance 299${NBSP}€ (5), Intégral 499${NBSP}€ (ilimitado); 3 meses gratis pagando el año; 7 días de prueba, sin compromiso`,
      },
      {
        name: 'EBP MéCa PRO + módulo Carrosserie, Fiducial (V-Mobility, Vulcain), Repair Soft, Cilea Mastercar, 3Dsoft MecaPlanning',
        coverage:
          'DMS con expedientes de siniestro: intercambios Darva, interfaces con valoradores (Sidexa, Qapter, ETAI), aviso de siniestro rellenado con los datos de la aseguradora, reparto aseguradora / cliente, cesión de crédito, vehículos de sustitución, planificación por competencias y golpes leve / medio / grave (3Dsoft), según el editor; Darva se contrata aparte',
        price: 'Bajo presupuesto',
        priceCondition: 'Tarifas no publicadas; demostración gratuita',
      },
      {
        name: 'Valoradores: Sidexa Qapter, GT Estimate, DAT, Lacour Diva, Atelio Chiffrage',
        coverage:
          'Valoración normalizada a partir de los datos del fabricante (tiempos, piezas, pintura), aceptada por el perito y la aseguradora; Qapter detecta los daños en foto. Un valorador no hace ni la orden de reparación, ni la factura, ni la planificación',
        price: 'Bajo presupuesto',
        priceCondition: 'Sin tarifa pública; GT Estimate ofrece 15 días de prueba',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar un expediente real por el programa. Las fotos del vehículo en recepción, la valoración enviada al perito, su conformidad de vuelta en el expediente con la diferencia, una pieza pendiente que retrasa el pase por cabina, el vehículo de cortesía entregado y devuelto, y luego la factura dividida entre la aseguradora y el cliente, sin volver a teclear nada.',
    calloutFootnote:
      'Tarifas consultadas el 1 de noviembre de 2026 en las páginas de precios de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title:
      'Tarifas expuestas, piezas reutilizadas, perito, vehículo de cortesía: lo que tu programa debe seguir en Francia en 2026',
    intro:
      'En Francia, un expediente de carrocería es más que un presupuesto: las tarifas de chapa y pintura expuestas, la elección del cliente sobre las piezas reutilizadas, la libre elección del reparador recordada por la aseguradora, la conformidad del perito, el vehículo prestado y la cabina de pintura tienen cada uno su norma. Tus documentos y tu seguimiento de expedientes tienen que reflejarlas.',
    facts: [
      {
        contextLabel: 'Orden del 27 de marzo de 1987',
        title: 'Una tarifa de chapa y una de pintura, cada una expuesta con IVA',
        text: `Cuando tus tarifas horarias difieren (mecánica, carrocería, pintura), cada una se expone con IVA en el exterior y en la recepción, con el método de cálculo (tiempo empleado o baremo consultable). Multa administrativa de hasta 3000${NBSP}€, 15${NBSP}000${NBSP}€ para una sociedad.`,
        sourceName: GARAGE_RULES_SOURCE.name,
        sourceUrl: GARAGE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de octubre de 2024',
        title: 'La elección del cliente sobre las piezas reutilizadas, registrada y conservada 2 años',
        text: 'Piezas de carrocería desmontables, cristales no pegados, ópticas, tapizados: el cliente elige entre pieza nueva y pieza de economía circular, en un soporte duradero, antes de aceptar el presupuesto, con disponibilidad, plazo y precio. La copia se conserva 2 años, y la información se muestra también en tu web.',
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Código de seguros, art. L211-5-1',
        title: 'La libre elección del reparador, recordada desde la declaración',
        text: 'El asegurado elige a su reparador, y la aseguradora se lo recuerda con claridad desde el primer contacto para declarar el siniestro, por escrito si el recordatorio es oral (orden del 17 de junio de 2016). Desde diciembre de 2020, una cláusula que le prohíba cederte su derecho a la indemnización es nula (art. L211-5-2).',
        sourceName: FREE_CHOICE_OF_REPAIRER_SOURCE.name,
        sourceUrl: FREE_CHOICE_OF_REPAIRER_SOURCE.url,
      },
      {
        contextLabel: 'Sin plazo legal para el informe',
        title: 'La aseguradora elige al perito «de media en los 15 días»',
        text: 'La aseguradora elige al perito, de media en los 15 días siguientes a la declaración, y el perito interviene en el taller o sobre fotos para los siniestros leves; ningún texto fija el plazo del informe. No repares antes de su visita, salvo urgencia. Vehículo económicamente irreparable: la aseguradora propone una indemnización en los 15 días siguientes al informe (artículo L327-1 del código de circulación francés).',
        sourceName: VEHICLE_APPRAISAL_SOURCE.name,
        sourceUrl: VEHICLE_APPRAISAL_SOURCE.url,
      },
      {
        contextLabel: 'Tribunal de Casación, 25 de noviembre de 2003',
        title: 'Vehículo de cortesía: informar al cliente sobre su seguro',
        text: 'Nada te obliga a prestar un vehículo. Si lo haces, debes informar al cliente sobre las garantías de seguro que lo cubren, y el vehículo está como mínimo asegurado a terceros. El contrato de préstamo y los inventarios de estado a la entrega y a la devolución son una práctica habitual, que conviene guardar en el expediente.',
        sourceName: COURTESY_CAR_SOURCE.name,
        sourceUrl: COURTESY_CAR_SOURCE.url,
      },
      {
        contextLabel: 'ICPE, rúbrica 2930',
        title: `Cabina de pintura: declaración por encima de 10${NBSP}kg de productos al día`,
        text: `Los talleres de carrocería entran en la rúbrica 2930 de las instalaciones clasificadas francesas: la aplicación de pintura, barniz o aparejo está sujeta a declaración con control por encima de 10${NBSP}kg de productos al día, y a registro por encima de 100${NBSP}kg. Seguir las cantidades que pasan por la cabina te dice de qué lado del umbral estás.`,
        sourceName: PAINT_BOOTH_ICPE_SOURCE.name,
        sourceUrl: PAINT_BOOTH_ICPE_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu valorador, cuyos tiempos y piezas del fabricante están bajo licencia, ni Darva, que exigen las aseguradoras, ni tu contabilidad. Sigue el expediente entre esas herramientas (fotos, conformidad del perito, piezas, cabina, préstamo, parte de la aseguradora y del cliente, recordatorios) y luego exporta a tu DMS o a tu contable.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title:
      'Un presupuesto de carrocería con inventario fotográfico y una hoja de seguimiento de siniestro listos para rellenar',
    description:
      'El presupuesto con las tarifas de chapa y pintura, el inventario de daños foto a foto, la naturaleza de cada pieza (nueva, reutilizada, calidad equivalente, intercambio estándar), la parte de la aseguradora y la del cliente; la hoja de seguimiento de un expediente, desde la entrada del vehículo hasta el pago de la aseguradora. En francés, en PDF para imprimir o en Excel con los totales, los días de inmovilización, la diferencia presupuesto / conformidad y el saldo pendiente de las aseguradoras calculados.',
    items: [
      'Presupuesto de carrocería: siniestro (aseguradora, n.º de siniestro, perito, tipo de peritación), inventario fotográfico por zona con decisión reparar / sustituir y pieza reutilizada propuesta, líneas de valoración con horas de chapa y pintura, parte aseguradora / parte cliente, cesión de crédito, conformidades del cliente',
      'Hoja de seguimiento de siniestro: fotos y presupuesto enviados, conformidad del perito e importe, piezas pedidas, recibidas o pendientes, chapa, franja de cabina, vehículo de cortesía, entrega, factura, pago de la aseguradora y recordatorios',
      'En el Excel: días de inmovilización, diferencia presupuesto / conformidad, saldo pendiente de las aseguradoras, expedientes a la espera de piezas o de conformidad y tasa de ocupación de la cabina calculados, más una planificación de cabina y un registro de vehículos de cortesía',
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: BODY_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: BODY_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales y plazos calculados, en francés',
      },
    ],
    footnote: 'De uso libre, para adaptar a tu taller. No sustituye ni al valorador ni a la opinión de tu contable.',
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
            text: `18 a 499${NBSP}€ al mes por el programa de taller; valorador y Darva aparte, bajo presupuesto`,
          },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Valoración normalizada e intercambios Darva',
        cells: [
          { state: 'partial', text: 'A través del valorador y de un DMS socio de Darva, los dos bajo presupuesto' },
          { state: 'yes', text: 'Se quedan en tus herramientas actuales' },
          { state: 'partial', text: 'Se quedan en tu valorador y en Darva, conectados a la herramienta' },
        ],
      },
      {
        label: 'Seguimiento del siniestro (conformidad, piezas, cabina, cortesía, pago)',
        cells: [
          {
            state: 'partial',
            text: `Completo en los DMS con módulo de carrocería, ausente de los programas de menos de 100${NBSP}€`,
          },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñado en torno a tu circuito, del inventario fotográfico al cobro' },
        ],
      },
      {
        label: 'Cliente informado (etapas del expediente, fotos, vehículo de cortesía)',
        cells: [
          { state: 'partial', text: 'A menudo un SMS o un portal del editor, con sus colores' },
          { state: 'yes', text: 'En tu web, con tus colores' },
          { state: 'yes', text: 'En tu web, con tus colores' },
        ],
      },
      {
        label: 'Puesta en marcha',
        cells: [
          { state: 'yes', text: 'Unos días' },
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
    rowsShownOnSmallScreens: BODY_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: BODY_SHOP_PAGE_PROJECT_SLUG,
    screenshotUrl: BODY_SHOP_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de seguimiento de horas por obra, ya en producción',
    description:
      'Gest-Time es el programa de tiempo de trabajo que creé desde cero en Kodeva, durante mis años de formación dual. Los equipos registran sus horas por proyecto o por obra en una tableta, y los responsables las validan cada semana. No es un programa de carrocería, pero el principio es el mismo que contar las horas de chapa y pintura dedicadas a cada expediente, para conocer su rentabilidad frente al importe aprobado por el perito.',
    highlights: [
      'Horas registradas por obra, pensadas para la tableta',
      'Validación semanal, alertas por horas que faltan',
      'Informes por proyecto y exportaciones a Excel y PDF',
    ],
    linkLabel: 'Ver el proyecto Gest-Time',
    imageAlt:
      'Informe Gest-Time: horas, ausencias y desplazamientos por empleado y por semana, con exportación a Excel',
    browserBarCaption: 'Gest-Time · informe de horas por empleado',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para taller de carrocería: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa de carrocería en Francia?',
        answer: `Por el programa de taller: Gest’Garage 19${NBSP}€ con IVA al mes, TDV Agent 19,90 a 79${NBSP}€ con IVA, AutoProGestion 29 o 59${NBSP}€ sin IVA, Kwixéo 22 a 89${NBSP}€ sin IVA al mes (18,33 a 74,17${NBSP}€ el primer año pagando el año), WinMotor Next 68${NBSP}€ sin IVA para un usuario (44${NBSP}€ por usuario a partir de dos), ProGarage 99 a 499${NBSP}€ sin IVA. Los DMS con módulo de carrocería (EBP MéCa PRO, Fiducial, Repair Soft, Cilea, 3Dsoft) y los valoradores (Sidexa, GT Estimate, DAT, Lacour, Atelio) van bajo presupuesto, y el acceso a Darva se contrata aparte (tarifas consultadas el 1 de noviembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Hace falta un valorador (Sidexa, GT Estimate, DAT) además del programa de taller?',
        answer: `Sí, en cuanto tus expedientes pasan por las aseguradoras: el valorador produce, a partir de los tiempos y las piezas del fabricante bajo licencia, una valoración que el perito y la aseguradora aceptan. Ningún programa de taller de menos de 100${NBSP}€ al mes lo incluye, y Gest’Garage lo dice él mismo: ni baremos de tiempos del fabricante, ni valoración de pintura. Los DMS con módulo de carrocería (EBP MéCa PRO, Fiducial, Repair Soft) se conectan con esos valoradores para evitar volver a teclear, tras abrir una cuenta en cada plataforma. Sidexa Qapter va más allá y detecta los daños en foto. Para clientes que pagan ellos mismos, un programa de taller con una tarifa de pintura distinta suele bastar.`,
      },
      {
        question: '¿Qué es Darva, y cuánto cuesta?',
        answer:
          'Darva es la plataforma francesa de intercambio entre aseguradoras, peritos y reparadores, creada en 1988 cerca de Niort y participada en su mayoría por aseguradoras; su página de presentación habla de 9 millones de expedientes de siniestro. El encargo de la aseguradora, el aviso de siniestro, las fotos, la conformidad del perito, la factura y el pago pasan por ella. No es un programa de gestión: se accede a través de un DMS socio (EBP, Fiducial, Solware, Cilea, Repair Soft…) o del portal Sinapps Auto, con una suscripción aparte cuya tarifa no se publica. Su servicio Flash envía al asegurado un enlace por SMS para que fotografíe él mismo los daños. No confundir con Alpha Scale, que no es un valorador sino una central de compras de piezas creada por Prefikar, filial de Axa.',
      },
      {
        question: '¿Se pueden seguir los siniestros sin un programa especializado, o con un programa gratuito?',
        answer:
          'Los programas consultados son todos de pago, pero la mayoría se prueban gratis: 14 días sin tarjeta en Gest’Garage, TDV Agent y Kwixéo, 14 días en AutoProGestion (sin cargo en la tarjeta), 7 días en ProGarage, 15 días para el valorador GT Estimate. Para un taller pequeño, la hoja de seguimiento gratuita de esta página, una fila por expediente en Excel, basta para ver en qué punto está cada vehículo y lo que te debe cada aseguradora. Lo que una hoja de cálculo no hace: vincular las fotos al expediente, reclamar sola al perito o al proveedor, y aguantar más allá de una treintena de expedientes abiertos a la vez.',
      },
      {
        question: '¿Qué piezas reutilizadas debe proponer un taller de carrocería en Francia?',
        answer: `Las categorías del código de consumo francés (art. R224-25) apuntan directamente a tu taller: piezas de carrocería desmontables, tapizados, cristales no pegados, ópticas, y algunas piezas mecánicas o electrónicas salvo trenes de rodaje, dirección, frenos y suspensión. Puedes no proponerlas si la prestación es gratuita, está en garantía o forma parte de una llamada a revisión, si la pieza no está disponible en un plazo compatible con la inmovilización del vehículo, o si hay riesgo para la seguridad (art. R224-24), anotando el motivo. La elección del cliente se recoge en un soporte duradero antes de su conformidad, con la disponibilidad, el plazo y el precio, y la copia se conserva 2 años; la información se expone en el exterior y en tu web. Sanción: hasta 3000${NBSP}€, 15${NBSP}000${NBSP}€ para una sociedad. Las piezas de calidad equivalente no tienen norma propia; desde el 1 de enero de 2023, el cristal está libre de derechos de diseño y las demás piezas visibles pueden venir del fabricante del equipo original (art. L513-6 del código francés de la propiedad intelectual).`,
      },
      {
        question: '¿Qué decirle al cliente sobre la libre elección del reparador?',
        answer:
          'Que su póliza lo menciona y que su aseguradora debe recordárselo desde el primer contacto para declarar el siniestro, por escrito si fue oral (art. L211-5-1 del código francés de seguros, orden del 17 de junio de 2016): puede reparar en tu taller aunque la aseguradora lo oriente hacia su red concertada. La aseguradora conserva la elección del perito, al que designa de media en los 15 días, y ningún texto fija el plazo de su informe. La plantilla de presupuesto de esta página tiene una casilla «libre elección del reparador recordada al cliente», útil si el expediente se discute después.',
      },
      {
        question: '¿Cómo funciona la cesión de crédito?',
        answer:
          'El cliente te cede su derecho a la indemnización: facturas directamente a la aseguradora su parte, y el cliente solo te paga su franquicia y la posible depreciación. Desde la ley francesa del 3 de diciembre de 2020, una cláusula de la póliza que prohíba esta cesión es nula (art. L211-5-2 del código de seguros). Haz firmar un documento de cesión junto al presupuesto y guárdalo en el expediente; EBP MéCa PRO la gestiona con una interfaz Mobilians, y la plantilla gratuita de esta página tiene su línea «cesión de crédito: sí / no» y sus dos partes, aseguradora y cliente.',
      },
      {
        question: 'Vehículo de cortesía: ¿quién lo asegura, y qué guardar en el expediente?',
        answer:
          'No estás obligado a prestar un vehículo. Si lo haces, debes informar al cliente sobre las garantías de seguro que lo cubren (Tribunal de Casación, 25 de noviembre de 2003), y el vehículo está como mínimo asegurado a terceros: comprueba que la póliza de tu taller cubre los vehículos prestados a clientes. Guarda en el expediente un contrato de préstamo, los inventarios de estado a la entrega y a la devolución, el kilometraje y las fechas. En cuanto a programas, AutoProGestion gestiona el contrato y el inventario de estado, WinMotor Next (Premium) y 3Dsoft la planificación de los vehículos de cortesía, Repair Soft los vehículos de sustitución; el Excel gratuito de esta página tiene un registro de préstamos.',
      },
      {
        question: 'Cabina de pintura: ¿soy una instalación clasificada, y qué hago con los residuos?',
        answer: `Los talleres de carrocería entran en la rúbrica 2930 de las instalaciones clasificadas francesas: la aplicación de pintura, barniz o aparejo está sujeta a declaración con control por encima de 10${NBSP}kg de productos al día y a registro por encima de 100${NBSP}kg; la reparación en sí, por encima de 2000${NBSP}m² de taller. Lleva la cuenta de las cantidades que pasan por la cabina para saber de qué lado del umbral estás. Pinturas, disolventes, aerosoles, aceites y baterías son residuos peligrosos: el documento de seguimiento está desmaterializado en Trackdéchets desde el 1 de enero de 2022, y el registro cronológico se declara allí desde el 5 de mayo de 2025, en 7 días. Un vehículo al final de su vida útil va a un centro autorizado, con certificado de destrucción.`,
      },
      {
        question: 'Factura electrónica y facturas a las aseguradoras: ¿qué cambia?',
        answer:
          'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026, y las pymes deberán emitirlas a partir del 1 de septiembre de 2027. Tus facturas a las aseguradoras y a las flotas son facturas entre profesionales: pasarán por una plataforma homologada, en formato Factur-X o equivalente; las facturas a particulares entran en el e-reporting. Comprueba, pues, que tu programa sabe dividir una factura entre la parte de la aseguradora y la del cliente (TDV Agent en su plan Pro, WinMotor Next con su facturación a varios pagadores, EBP MéCa PRO con su reparto seguro / cliente) y que ya produce Factur-X, como TDV Agent desde el plan Essentiel.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, vehículos, expedientes y facturas a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor, y pregunta qué pasa con las fotos.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: BODY_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu taller de carrocería?',
    description:
      'Cuéntame tu taller y tus expedientes en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
