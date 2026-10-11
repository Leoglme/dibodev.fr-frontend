import type { DibodevPublicAidPageContent } from '~/core/types/DibodevPublicAidPage'

const RENNES_SOURCE: string = 'https://les-aides.fr/aide/doU_3w/rennes-metropole/le-pass-commerce-et-artisanat.html'
const REGION_SOURCE: string = 'https://les-aides.fr/aide/UIEv3w/region-bretagne/pass-commerce-et-artisanat.html'
const PORTE_DE_LOIRE_SOURCE: string =
  'https://entreprendre.bretagneportedeloire.fr/pass-commerce-artisanat-volet-numerique/'

export const PUBLIC_AID_PAGE_ES: DibodevPublicAidPageContent = {
  meta: {
    title: 'Ayudas para financiar tu web o tu software en Bretaña: el simulador por municipio',
    description:
      'En Bretaña, tu mancomunidad puede financiar del 30 al 50 % de una web o de un software. El simulador aplica las reglas de las 18 mancomunidades de Ille-et-Vilaine, verificadas en octubre de 2026.',
    inLanguage: 'es-ES',
    schemaAbout: 'Ayudas públicas para la web o el software de una pequeña empresa francesa',
  },
  breadcrumbLabel: 'Ayudas para tu web o software',
  numberLocale: 'es-ES',
  hero: {
    titleBefore: '¿Qué ',
    titleHighlight: 'ayudas',
    titleAfter: ' pueden financiar tu web o tu software?',
    reassurances: [
      'Gratis, sin registro',
      '18 mancomunidades de Ille-et-Vilaine verificadas',
      'Reglas leídas el 11 de octubre de 2026',
    ],
    description:
      'En Bretaña (Francia), el Pass Commerce et Artisanat devuelve del 30 al 50 % de una web, de un módulo de venta en línea y a veces de un software, pero cada mancomunidad fija su mínimo, su tope y su lista. Este simulador aplica las reglas publicadas por las 18 mancomunidades de Ille-et-Vilaine, el marco regional en el resto de Bretaña, y dice lo que existe de verdad a nivel nacional. Da el importe de la ayuda, lo que queda por pagar, los puntos a confirmar y a quién llamar.',
    authorIntro: 'Simulador realizado por',
    authorBio:
      'desarrollador web freelance cerca de Rennes. Preparo la parte digital de los expedientes de mis clientes: presupuestos conformes, carta de intención antes de cualquier pedido, documentos para la cámara de comercio o de oficios.',
  },
  simulator: {
    communeLabel: 'Tu municipio',
    communePlaceholder: 'Nombre o código postal, por ejemplo Saint-Erblon o 35230',
    communeHint: 'Todos los municipios de Bretaña. El simulador encuentra tu mancomunidad y aplica sus reglas.',
    noMatch: 'Ningún municipio bretón coincide. Revisa la ortografía o marca la casilla de abajo.',
    outsideBrittanyLabel: 'Mi empresa está fuera de Bretaña',
    selectedTemplate: '{commune} ({postcode}) · {epci} · {population} habitantes',
    changeCommune: 'Cambiar',
    projectLabel: 'Tu proyecto',
    projectOptions: {
      website: 'Web (creación o rediseño)',
      onlineSales: 'Venta o pedidos en línea',
      software: 'Software o aplicación de gestión',
    },
    amountLabel: 'Importe del proyecto, sin IVA',
    amountHint: 'El presupuesto del proveedor, sin alojamiento ni mantenimiento, que nunca se subvencionan.',
    employeesLabel: 'Empleados fijos, sin contar al gerente',
    employeesHint:
      'En equivalente a tiempo completo. La mayoría de las mancomunidades se detienen en 7, Rennes Métropole en 10.',
    turnoverLabel: '¿Tu facturación es inferior a 1 millón de euros sin IVA?',
    businessLabel: '¿Eres un comercio o un artesano independiente con clientes sobre todo particulares?',
    businessHint:
      'Comercio de proximidad, café, restaurante, peluquería, construcción, taller mecánico… Las profesiones liberales, lo médico, las agencias inmobiliarias y el comercio mayorista quedan excluidos.',
    yes: 'Sí',
    no: 'No',
    resultLabel: 'Tu resultado',
    statusTitles: {
      incomplete: 'Elige tu municipio',
      eligible: 'Tu proyecto entra en el dispositivo',
      check: 'Elegible, a reserva de algunos puntos',
      notEligible: 'Tu proyecto no entra en el dispositivo',
      frame: 'Estimación sobre el marco regional',
      national: 'Sin subvención nacional, pero con pistas',
    },
    statusTexts: {
      incomplete:
        'Escribe el nombre o el código postal de tu municipio. El resultado aparece aquí, con la ayuda y lo que queda por pagar.',
      eligible: 'En {territory}, el Pass Commerce et Artisanat financia el {rate} % de tu proyecto, hasta {maxAid}.',
      check:
        'En {territory}, el Pass Commerce et Artisanat financia el {rate} % de tu proyecto, hasta {maxAid}, si se confirman los puntos de abajo.',
      notEligible:
        'Con tus respuestas, el Pass Commerce et Artisanat de {territory} no se aplica. Aquí tienes por qué, y lo que sigue siendo posible.',
      frame:
        'Todavía no he leído el reglamento de {territory}. El marco regional prevé el {rate} % de tu proyecto, hasta {maxAid}; tu mancomunidad fija el mínimo y la lista de gastos.',
      national:
        'En 2026, ninguna subvención nacional financia una web o un software en Francia. El cheque France Num terminó en 2021 y el Préstamo Transformación Digital a finales de 2023. Quedan ayudas locales, préstamos y un crédito fiscal reservado a los productos nuevos.',
    },
    aidLabel: 'Ayuda estimada',
    remainingLabel: 'Queda a tu cargo',
    rateTemplate: '{rate} % de {amount} sin IVA, con tope de {maxAid}',
    reasonsTitle: 'Lo que bloquea',
    reasons: {
      businessType:
        'El Pass se dirige a comercios y artesanos independientes cuyos clientes son sobre todo particulares.',
      employees: 'Superas el número de empleados admitido por esta mancomunidad.',
      turnover: 'La facturación debe quedar por debajo de 1 millón de euros sin IVA.',
      belowFloor:
        'El expediente debe alcanzar {floor} sin IVA de inversión. Añade otra inversión elegible (equipamiento, obras, una herramienta) o agrupa tus proyectos.',
      communeTooLarge:
        'En Rennes Métropole, solo se cubren los municipios de menos de 5 000 habitantes y los barrios prioritarios de Rennes.',
      projectExcluded:
        'Esta mancomunidad no incluye este tipo de proyecto en su apartado digital: solo se financian la web, su rediseño, el módulo de comercio electrónico y el posicionamiento.',
    },
    checksTitle: 'A confirmar antes de comprometerte',
    checks: {
      qpvOnly:
        'En Rennes, solo se cubren los barrios prioritarios: Villejean, Le Blosne, Cleunay, Clôteaux–Champs Manceaux y Maurepas, dentro de sus perímetros oficiales.',
      centralityForShops:
        'Un comercio o un artesano con escaparate debe estar en el centro definido por el plan urbanístico. Un artesano de producción no tiene esa restricción.',
      centrality:
        'Por encima de 5 000 habitantes, el proyecto debe estar dentro del perímetro de centralidad acordado con la mancomunidad, o en un barrio prioritario.',
      outsideBusinessPark:
        'Entre 2 000 y 5 000 habitantes, el proyecto debe estar fuera de un polígono de actividades.',
      projectUnclear:
        'El reglamento no menciona este tipo de proyecto. Un software de gestión a veces pasa como «herramienta de relación con el cliente» o «software de caja»: pide una respuesta escrita a tu asesor antes de firmar.',
      floorUnknown: 'Esta mancomunidad no publica su mínimo de inversión. El más habitual es 6 000 € sin IVA.',
      belowAssumedFloor:
        'Esta mancomunidad no publica su mínimo. El más habitual es 6 000 € sin IVA, que tu proyecto no alcanza: pregúntalo antes de montar un expediente.',
      zonesOnly: 'En Brest métropole, el dispositivo solo cubre los sectores Haut de Jaurès, Recouvrance y Kerinou.',
    },
    notes: {
      rseInvestment:
        'El expediente debe incluir la autoevaluación RSE y al menos una inversión que reduzca el impacto ambiental.',
      subscriptionsExcluded: 'Suscripciones, alojamiento, mantenimiento y posicionamiento de pago no se financian.',
      validUntil2028: 'Dispositivo abierto hasta el 31 de marzo de 2028.',
      digitalListedWithoutDetail: 'La página habla de «digitalización» sin detallar: haz validar el presupuesto.',
      noRecentRulesPublished:
        'No hay ningún reglamento reciente publicado en línea: las cifras vienen del marco regional y de documentos anteriores.',
      floorUnknown: 'Mínimo de inversión no publicado.',
      agreementUntil2026: 'El convenio con la Región cubre 2024-2026: comprueba su renovación.',
      energyInterviewRequired:
        'El expediente incluye el acta de una entrevista gratuita con un asesor de la agencia local de la energía y del clima.',
      rulesInPdfNotRead: 'El reglamento está en una ficha PDF del 4 de febrero de 2026 que no pude leer.',
      digitalStrandOnly:
        'Apartado digital aparte, acumulable con el Pass de obras y equipamiento hasta 7 500 € en dos años.',
      cumulTwoYears: '7 500 € de ayuda como máximo en dos años, todos los apartados incluidos.',
      twelveMonthsToInvest:
        'Doce meses tras la notificación para realizar las inversiones, luego seis meses para los justificantes.',
      threeYearsBetweenRequests: 'Tres años como mínimo entre dos solicitudes.',
      listingNotOfficial: 'Cifras tomadas de un directorio de ayudas, no de la web de la mancomunidad: a confirmar.',
      creditsConsumed2025: 'Los créditos 2025 se agotaron: pregunta si la partida 2026 está abierta.',
      endDateToConfirm:
        'El reglamento 2026 indicaba un fin el 14 de septiembre de 2026: pregunta si el dispositivo se renovó.',
      brestZonesOnly: 'Ayuda con tope de 5 000 € para al menos 6 000 € sin IVA de inversión.',
    },
    nationalPoints: [
      'Tu mancomunidad o tu región quizá tenga su propia ayuda: busca tu municipio en la base oficial aides-entreprises.fr, usada por France Num.',
      'Bpifrance ofrece el Prêt Boost Transformation numérique, un préstamo sin garantía de 5 000 a 100 000 € para sociedades de más de tres años, no una subvención.',
      'El crédito fiscal a la innovación devuelve el 20 % de los gastos de un prototipo de producto nuevo, con un proveedor homologado: no cubre una herramienta interna.',
      'En todos los casos, presenta la solicitud antes de firmar un presupuesto.',
    ],
    stepsTitle: 'Los pasos',
    steps: [
      'Llama a la cámara de comercio (CCI) o de oficios (CMA) de tu departamento para presentar el proyecto.',
      'Presenta la carta de intención en la plataforma regional antes de cualquier presupuesto firmado.',
      'Monta el expediente con el asesor en seis meses, con presupuestos fechados después de la carta.',
      'Realiza el proyecto, envía las facturas pagadas, la ayuda se abona después.',
    ],
    contactTitle: 'A quién llamar',
    contactFallback: 'Tu mancomunidad, o la CCI y la CMA de tu departamento, que montan los expedientes.',
    sourceTemplate: 'Reglas leídas el 11 de octubre de 2026 en {source}',
    cta: 'Pedir presupuesto para mi proyecto',
    ctaNational: 'Hablar de mi proyecto',
    disclaimer:
      'Simulación orientativa, a partir de las reglas publicadas. Solo la mancomunidad decide, tras examinar el expediente.',
  },
  rules: {
    anchorId: 'reglas',
    eyebrow: 'Antes de firmar',
    title: 'Las reglas que hacen ganar o perder la ayuda',
    intro:
      'Los expedientes rechazados lo son casi siempre por una cuestión de calendario o de mínimo, no de proyecto. Esto es lo que dicen los reglamentos.',
    facts: [
      {
        contextLabel: 'Antes de cualquier presupuesto firmado',
        title: 'Primero la carta de intención',
        text: 'En Rennes Métropole como en el resto de Bretaña, el acuse de recibo de la carta de intención presentada en la plataforma regional marca el inicio de los gastos elegibles. Un presupuesto firmado antes no se subvenciona, aunque el proyecto lo fuera.',
        sourceName: 'les-aides.fr, Rennes Métropole',
        sourceUrl: RENNES_SOURCE,
      },
      {
        contextLabel: '6 000 € sin IVA',
        title: 'Un mínimo de inversión',
        text: 'Rennes Métropole, Saint-Malo, Liffré-Cormier, Côte d’Émeraude, Bretagne Romantique y Pays de Dol exigen al menos 6 000 € sin IVA de inversión por expediente. Una web de escaparate sola rara vez pasa; una web con una herramienta o un equipamiento, sí. Bretagne Porte de Loire y Roche aux Fées empiezan en 2 000 € en su apartado digital.',
        sourceName: 'les-aides.fr, Rennes Métropole',
        sourceUrl: RENNES_SOURCE,
      },
      {
        contextLabel: 'Del 30 al 50 %',
        title: 'Un porcentaje y un tope fijados por la mancomunidad',
        text: 'El marco regional prevé el 30 % de 25 000 € sin IVA como máximo, es decir 7 500 € de ayuda. Rennes Métropole se detiene en 20 000 € sin IVA (6 000 € de ayuda), Pays de Dol en 16 666 € (5 000 €), y Bretagne Porte de Loire o Roche aux Fées suben al 50 % en su apartado digital.',
        sourceName: 'les-aides.fr, Región de Bretaña',
        sourceUrl: REGION_SOURCE,
      },
      {
        contextLabel: 'Nunca financiados',
        title: 'Suscripciones, alojamiento, mantenimiento',
        text: 'Los reglamentos financian la creación o el rediseño de una web, un módulo de venta en línea, la formación en la herramienta, a veces un software de caja o una herramienta de relación con el cliente. Nunca una suscripción mensual, el alojamiento, el mantenimiento, la publicidad ni el posicionamiento de pago.',
        sourceName: 'Bretagne Porte de Loire Communauté',
        sourceUrl: PORTE_DE_LOIRE_SOURCE,
      },
    ],
    calloutEmphasizedIntro: 'Lo que hago en tu expediente:',
    calloutText:
      'un presupuesto fechado después de tu carta de intención, detallado partida por partida como pide la cámara, sin suscripción mezclada con el desarrollo, y las respuestas técnicas a tu asesor. Tú mantienes el control de la presentación y de los documentos administrativos.',
  },
  territories: {
    anchorId: 'mancomunidades',
    eyebrow: 'Ille-et-Vilaine, reglamento por reglamento',
    title: 'El Pass Commerce et Artisanat en las 18 mancomunidades de Ille-et-Vilaine',
    intro:
      'Mismo dispositivo, 18 reglamentos. Porcentaje, tope, mínimo y proyectos digitales admitidos, tal como los publica cada mancomunidad y releídos el 11 de octubre de 2026.',
    territoryColumnLabel: 'Mancomunidad',
    coverageColumnLabel: 'Proyectos digitales admitidos',
    aidColumnLabel: 'Ayuda',
    coverageTemplate: 'Web: {website} · Venta en línea: {onlineSales} · Software: {software}',
    eligibilityLabels: {
      eligible: 'sí',
      unclear: 'a confirmar',
      excluded: 'no',
    },
    aidTemplate: '{rate} %, hasta {maxAid}',
    conditionTemplate: 'Desde {floor} sin IVA de inversión',
    floorUnknownCondition: 'Mínimo no publicado, a menudo 6 000 € sin IVA',
    partialSuffix: ' (reglamento parcial)',
    calloutEmphasizedIntro: '«A confirmar» significa:',
    calloutText:
      'el reglamento publicado no menciona este tipo de proyecto. No es una negativa. Pide una respuesta escrita a tu asesor de la CCI o de la CMA antes de firmar, y adjunta el presupuesto.',
    calloutFootnote:
      'Fuentes: páginas y fichas de las mancomunidades, ficha de la Región de Bretaña en les-aides.fr, nota de Rennes Métropole. Lista no exhaustiva de condiciones: cada mancomunidad decide expediente por expediente.',
  },
  beyond: {
    anchorId: 'fuera',
    eyebrow: 'Fuera de Ille-et-Vilaine',
    title: 'En el resto de Bretaña, y a nivel nacional',
    intro:
      'El simulador cubre todos los municipios bretones. Fuera de Ille-et-Vilaine, aplica el marco regional mientras se lee cada reglamento.',
    items: [
      {
        title: 'Resto de Bretaña: el marco regional',
        description:
          'El 30 % de los gastos, 25 000 € sin IVA como máximo, 7 500 € de ayuda como tope, cofinanciados por la Región y la mancomunidad. Cada una de las 59 mancomunidades fija su mínimo y su lista de gastos digitales: el simulador te remite a la tuya.',
      },
      {
        title: 'Nacional: sin subvención en 2026',
        description:
          'El cheque France Num de 500 € terminó en 2021 y el Préstamo Transformación Digital a finales de 2023, aunque muchas webs sigan citándolos. Quedan el Prêt Boost de Bpifrance (un préstamo), el crédito fiscal a la innovación (20 %, solo productos nuevos) y las ayudas locales recogidas en aides-entreprises.fr.',
      },
      {
        title: 'Pymes de producción: el PASS Transitions',
        description:
          'La Región de Bretaña devuelve el 50 % de una prestación de consultoría de al menos 6 000 € (ayuda de 3 000 a 10 000 €) a las pymes de menos de 50 empleados de la producción o de los servicios a la producción, para sus transiciones, incluida la digital. Los comercios y artesanos de proximidad no tienen derecho.',
      },
    ],
  },
  method: {
    eyebrow: 'En orden',
    title: 'Cómo obtener la ayuda, en cuatro pasos',
    intro: 'El mismo recorrido en toda Bretaña, en la plataforma de la Región. La cámara te acompaña en cada paso.',
    steps: [
      {
        label: 'Verificar',
        title: 'Simular, luego llamar a la CCI o a la CMA',
        description:
          'El simulador da el importe y los puntos a confirmar. El asesor de la CCI o de la CMA verifica la elegibilidad de tu local y de tu proyecto, y a menudo organiza una visita.',
      },
      {
        label: 'Carta de intención',
        title: 'Presentar la carta antes de cualquier presupuesto',
        description:
          'Creas tu espacio en la plataforma regional y presentas una carta de intención: proyecto, tipos de gastos, importe estimado. El acuse de recibo autoriza los gastos, sin garantizar la ayuda.',
      },
      {
        label: 'Expediente',
        title: 'Montar el expediente en seis meses',
        description:
          'Presupuestos fechados después de la carta, extracto registral, datos bancarios, certificado del contable, plan de financiación, declaración de minimis. En Rennes Métropole, la autoevaluación RSE y una inversión responsable.',
      },
      {
        label: 'Pago',
        title: 'Realizar, justificar, cobrar',
        description:
          'La junta comunitaria decide, luego realizas el proyecto. La ayuda se abona con facturas pagadas, en proporción a los gastos realmente efectuados. Prevé la tesorería mientras tanto.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Tus preguntas sobre las ayudas a la web y al software',
    questions: [
      {
        question: 'Mi comercio está en el centro de Rennes: ¿tengo derecho al Pass Commerce et Artisanat?',
        answer:
          'No, salvo en uno de los cinco barrios prioritarios (Villejean, Le Blosne, Cleunay, Clôteaux–Champs Manceaux, Maurepas). En Rennes Métropole, el dispositivo se dirige a los 23 municipios de menos de 5 000 habitantes y a esos barrios. Cesson-Sévigné, Bruz o Saint-Jacques-de-la-Lande tampoco entran.',
      },
      {
        question: '¿Se subvenciona una web de escaparate de 1 500 €?',
        answer:
          'Rara vez sola: la mayoría de las mancomunidades exigen 6 000 € sin IVA de inversión por expediente. Una web puede entrar en un expediente más amplio (equipamiento, obras, herramienta de gestión), o beneficiarse de los apartados digitales que empiezan en 2 000 €, como en Bretagne Porte de Loire o Roche aux Fées.',
      },
      {
        question: '¿Es elegible un software de gestión a medida?',
        answer:
          'Depende de la mancomunidad. Rennes Métropole incluye las herramientas de relación con el cliente y los softwares de caja, Montfort Communauté los softwares de caja, Bretagne Porte de Loire solo la web y la venta en línea. Cuando el reglamento no lo zanja, el simulador muestra «a confirmar»: pide una respuesta escrita antes de firmar.',
      },
      {
        question: '¿Puedo acumular el Pass con otra ayuda?',
        answer:
          'El total de ayudas públicas sobre los mismos gastos no puede superar el 50 %, y la ayuda entra en el tope de minimis. Algunas mancomunidades imponen además tres años entre dos solicitudes. Tu asesor verifica la acumulación.',
      },
      {
        question: '¿Cuánto tarda un expediente?',
        answer:
          'Cuenta de uno a tres meses de instrucción tras presentar el expediente completo, que a su vez debe llegar en los seis meses siguientes a la carta de intención. Las inversiones se realizan después, a menudo en doce meses, y la ayuda se abona con facturas pagadas.',
      },
      {
        question: '¿Tengo que pasar por la CCI o la CMA?',
        answer:
          'Sí. Los reglamentos prevén que la cámara ayude a montar el expediente y emita un dictamen motivado. También es la persona que conoce los casos límite de tu territorio. La llamada es gratuita.',
      },
      {
        question: '¿Y si mi empresa está fuera de Bretaña?',
        answer:
          'No existe subvención nacional para una web o un software en 2026, pero muchas regiones y mancomunidades tienen su propia ayuda (Grand Est, Hauts-de-France, Nouvelle-Aquitaine…). Busca tu municipio en aides-entreprises.fr, la base usada por France Num, y presenta la solicitud antes de firmar un presupuesto.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro:
      'La guía del Pass Commerce et Artisanat en Rennes Métropole, y lo que cuesta de verdad un software a medida.',
  },
  contactCta: {
    title: '¿Un proyecto que financiar?',
    description:
      'Descríbelo en unas líneas con tu municipio. En 24 horas te digo lo que se puede financiar, y preparo un presupuesto conforme al expediente.',
    button: 'Hablar de mi proyecto',
  },
}
