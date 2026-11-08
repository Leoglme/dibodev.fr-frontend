import type { DibodevWebAccessibilityScopeQuizWording } from '~/core/types/DibodevWebAccessibilityScopeQuiz'

export const WEB_ACCESSIBILITY_SCOPE_QUIZ_WORDING_ES: DibodevWebAccessibilityScopeQuizWording = {
  quizName: 'Accesibilidad web en Francia: ¿mi web está afectada?',
  questions: [
    {
      id: 'organization',
      title: '¿Quién eres?',
      helpText: 'La estructura que publica la web.',
      leadMessageLabel: 'Estructura',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        {
          id: 'public',
          label: 'Organismo público, o estructura con una misión de servicio público',
          unit: '',
          icon: 'Flag',
        },
        { id: 'company', label: 'Empresa (sociedad, comercio, pyme…)', unit: '', icon: 'Store' },
        { id: 'association', label: 'Asociación', unit: '', icon: 'Smile' },
        { id: 'freelance', label: 'Autónomo o microempresario', unit: '', icon: 'Laptop' },
      ],
    },
    {
      id: 'size',
      title: 'El tamaño de tu estructura',
      helpText:
        'Una microempresa tiene menos de 10 empleados y como mucho 2 M€ de volumen de negocio o de balance anual.',
      leadMessageLabel: 'Tamaño',
      display: 'tiles',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'micro', label: 'Menos de 10', unit: 'empleados, 2 M€ de facturación como mucho', icon: null },
        { id: 'small', label: '10 o más', unit: 'empleados, o más de 2 M€ de facturación', icon: null },
        { id: 'large250', label: 'Más de 250 M€', unit: 'de facturación en Francia', icon: null },
      ],
    },
    {
      id: 'website',
      title: '¿Qué hace tu web?',
      helpText: 'Su uso principal.',
      leadMessageLabel: 'Uso de la web',
      display: 'cards',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'showcase', label: 'Web corporativa, sin venta online', unit: '', icon: 'Monitor' },
        {
          id: 'ecommerce',
          label: 'Venta online de productos o servicios (tienda, reserva de pago)',
          unit: '',
          icon: 'Euro',
        },
        {
          id: 'regulated',
          label: 'Banca, transporte de viajeros, telecomunicaciones, vídeo o libros electrónicos',
          unit: '',
          icon: 'ShieldCheck',
        },
        { id: 'service', label: 'Área de cliente o aplicación para tus clientes', unit: '', icon: 'KeyRound' },
        { id: 'internal', label: 'Intranet o herramienta interna', unit: '', icon: 'Server' },
      ],
    },
    {
      id: 'customers',
      title: '¿A quién se dirige?',
      helpText: '',
      leadMessageLabel: 'Clientes',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'consumers', label: 'A particulares', unit: '', icon: null },
        { id: 'businesses', label: 'Solo a profesionales', unit: '', icon: null },
        { id: 'both', label: 'A ambos', unit: '', icon: null },
      ],
    },
    {
      id: 'timing',
      title: '¿Y la web en sí?',
      helpText: '',
      leadMessageLabel: 'Web',
      display: 'list',
      selection: 'single',
      maxSelected: null,
      options: [
        { id: 'existing', label: 'En línea antes del 28 de junio de 2025', unit: '', icon: null },
        { id: 'new', label: 'Creada o rehecha desde el 28 de junio de 2025', unit: '', icon: null },
        { id: 'planned', label: 'En proyecto', unit: '', icon: null },
      ],
    },
  ],
  verdicts: {
    publicSector: {
      title: 'Afectado: la obligación ya se aplica',
      explanation:
        'Según tus respuestas, estás sujeto al artículo 47 de la ley francesa del 11 de febrero de 2005, sea cual sea tu tamaño: tus webs, intranets y aplicaciones deben ser accesibles. También publicas una declaración de accesibilidad, un plan plurianual de tres años como máximo con su plan de acción del año, y una mención clara en la página de inicio. Los plazos ya han pasado: 2019 o 2020 para las webs, 2021 para las aplicaciones.',
      headline: 'Ya en vigor',
      headlineSuffix: 'desde 2019-2020 para las webs, 2021 para las aplicaciones móviles',
      lawValue: 'ley de 2005, art. 47',
      standardValue: 'RGAA 4.1.2',
      publicationValue: 'declaración, plan, mención',
      controlValue: 'Arcom, hasta 50 000 €',
      ctaLabel: 'Revisar mi web',
      leadBudget: 'Organismo público (art. 47)',
    },
    largeCompany: {
      title: 'Afectado: artículo 47, desde 2019-2020',
      explanation:
        'Por encima de 250 millones de euros de facturación en Francia (media de los tres últimos ejercicios), una empresa está sujeta al artículo 47 de la ley de 2005. Sus webs deben ser accesibles desde el 1 de octubre de 2019 o 2020, sus aplicaciones desde el 1 de julio de 2021. Publica una declaración de accesibilidad, un plan plurianual y una mención en la página de inicio: es lo que controla el Arcom.',
      headline: 'Ya en vigor',
      headlineSuffix: 'desde el 1 de octubre de 2019 o 2020 para las webs, julio de 2021 para las aplicaciones',
      lawValue: 'ley de 2005, art. 47',
      standardValue: 'RGAA 4.1.2 o WCAG 2.1 AA',
      publicationValue: 'declaración, plan, mención',
      controlValue: 'Arcom, hasta 25 000 €',
      ctaLabel: 'Revisar mi web',
      leadBudget: 'Empresa de más de 250 M€ (art. 47)',
    },
    eaaInScope: {
      title: 'Afectado: ley europea, desde el 28 de junio de 2025',
      explanation:
        'Según tus respuestas, tu web vende a particulares y no eres una microempresa: desde el 28 de junio de 2025, tu servicio de comercio electrónico debe cumplir los requisitos de accesibilidad del Código de consumo francés (transposición de la directiva europea 2019/882). También publicas información que explica cómo el servicio los cumple. La DGCCRF controla, sobre todo tras una denuncia.',
      headline: '28 de junio de 2025',
      headlineSuffix: 'obligación ya en vigor, sin periodo de gracia para una web',
      lawValue: 'Código de consumo',
      standardValue: 'orden del 9 oct. 2023',
      publicationValue: 'información de accesibilidad',
      controlValue: 'DGCCRF',
      ctaLabel: 'Revisar mi web',
      leadBudget: 'Venta online a particulares (ley europea)',
    },
    recommended: {
      title: 'Ninguna obligación legal identificada',
      explanation:
        'Según tus respuestas, ni el artículo 47 de la ley de 2005 ni la ley europea de accesibilidad se aplican a tu web. Hacerla accesible sigue siendo recomendable: ayuda a los visitantes con discapacidad visual, a quienes navegan con el teclado y a todos los que leen en una pantalla pequeña. Las reglas WCAG 2.1 nivel AA son una buena referencia. Si tu situación cambia (tamaño, venta a particulares), vuelve a hacer el test.',
      headline: 'Sin obligación',
      headlineSuffix: 'identificada según tus respuestas, pero recomendable',
      lawValue: 'ningún texto identificado',
      standardValue: 'WCAG 2.1 AA, como referencia',
      publicationValue: 'opcional',
      controlValue: 'ninguno',
      ctaLabel: 'Tener una primera opinión',
      leadBudget: 'Ninguna obligación identificada',
    },
    checkNeeded: {
      title: 'A comprobar: tu caso depende de un detalle',
      explanation:
        'Tu situación está en el límite de dos textos: el artículo 47 de la ley de 2005 y la ley europea de accesibilidad, aplicable desde el 28 de junio de 2025. El test no puede decidirlo solo: el punto a comprobar está justo debajo. Mientras tanto, los gestos básicos no cuestan nada y sirven en todos los casos.',
      headline: 'A comprobar',
      headlineSuffix: 'un detalle de tu actividad decide si se aplica una obligación',
      lawValue: 'art. 47 o Código de consumo',
      standardValue: 'RGAA 4.1.2 si te afecta',
      publicationValue: 'según el texto',
      controlValue: 'Arcom o DGCCRF',
      ctaLabel: 'Describir mi caso',
      leadBudget: 'Caso a comprobar',
    },
  },
  cardEyebrow: 'Tus obligaciones',
  lawLabel: 'Texto',
  standardLabel: 'Referencia',
  publicationLabel: 'A publicar',
  controlLabel: 'Control',
  cardFootnote:
    'Ley del 11 de febrero de 2005 (art. 47 y 47-1) y Código de consumo francés, releídos el 8 de noviembre de 2026. El RGAA 5 está anunciado para finales de 2026.',
  cardFootnoteLinkLabel: 'Ver las fechas',
  cardFootnoteLinkHref: '#fechas',
  adviceTitle: 'Lo que yo haría en tu lugar',
  advice: {
    publicDeclaration:
      'Publica una página «Accesibilidad» accesible desde todas las páginas, con la declaración en el formato de la DINUM, el plan plurianual y el plan de acción del año, y muestra «Accesibilidad: totalmente, parcialmente o no conforme» en la página de inicio.',
    largeCompanyDeclaration:
      'La declaración de accesibilidad, el plan plurianual y la mención en la página de inicio son lo que el Arcom controla en una empresa: empieza por ellos, antes incluso de terminar las correcciones.',
    rgaaAudit:
      'Haz auditar una muestra de páginas representativas según los 106 criterios del RGAA 4.1.2: la tasa obtenida da el estado de conformidad (100 % totalmente, al menos 50 % parcialmente) y la lista de correcciones, por orden de importancia.',
    accessibilityInformation:
      'Añade a tus condiciones generales (o a una página dedicada) la información que explica cómo tu servicio cumple los requisitos de accesibilidad, en un formato también accesible: es una obligación en sí misma.',
    noTransitionForWebsites:
      'Sin plazo para una web existente: la DGCCRF precisa que una web o una aplicación no es un «producto» y no se beneficia del periodo transitorio hasta 2030. Solo los contratos firmados antes del 28 de junio de 2025 pueden seguir hasta su fin.',
    contractsTransition:
      'Los contratos de servicio celebrados con particulares antes del 28 de junio de 2025 pueden aplicarse sin cambios hasta su fin, y como muy tarde hasta el 28 de junio de 2030. Los contratos nuevos ya siguen las reglas.',
    disproportionateBurden:
      'Si una parte de la web no puede hacerse accesible sin una carga desproporcionada, documéntalo (coste, recursos, beneficio para los usuarios) y prevé una alternativa: la falta de tiempo o de prioridad no es un motivo admitido.',
    alsoEuropeanLaw:
      'También vendes a particulares: desde el 28 de junio de 2025, la ley europea de accesibilidad se suma al artículo 47, con información de accesibilidad a publicar y control de la DGCCRF.',
    subtitles:
      'Subtitula los vídeos con sonido (criterio 4.3 del RGAA) y añade una transcripción a los contenidos de audio: suele ser el defecto más visible, y el más fácil de corregir en los vídeos nuevos.',
    microExemption:
      'Una microempresa (menos de 10 empleados y como mucho 2 M€ de facturación o de balance) que presta servicios está exenta de la ley europea. Si superas esos umbrales, la obligación se aplicará: mejor prepararlo ya.',
    businessCustomersOnly:
      'La ley europea apunta a la venta online a particulares. Si abres tu web a particulares (tienda, reserva, suscripción), vuelve a hacer el test: la respuesta cambiará.',
    showcaseRecommended:
      'Una web corporativa no tiene obligación legal, pero una web accesible se lee mejor para todos, Google incluido: textos alternativos de las imágenes, títulos jerarquizados y enlaces explícitos también ayudan al SEO.',
    internalTools:
      'La intranet de una empresa privada no está afectada, pero la solicitud de adaptación del puesto de un empleado con discapacidad puede exigirlo: una herramienta usable con el teclado y legible por un lector de pantalla evita rehacerlo todo ese día.',
    associationEssentialServices:
      'Una asociación está fuera del artículo 47, salvo si presta servicios esenciales al público o destinados a personas con discapacidad, o si tiene una misión de servicio público o una financiación mayoritariamente pública. En ese caso, vuelve a hacer el test eligiendo «Organismo público».',
    regulatedSector:
      'La banca para particulares, el transporte de viajeros, la telefonía, el acceso a vídeos y los libros electrónicos están cubiertos por la ley europea, pero solo para algunos elementos (web, aplicación, billetes, información). Comprueba cuáles con la autoridad de tu sector (DGCCRF, Arcom, ARCEP, Banque de France).',
    customerAreaCommerce:
      'Si tus clientes particulares pueden comprar, reservar o suscribirse desde esa área, es comercio electrónico según la ley europea: vuelve a hacer el test eligiendo «Venta online». Un simple seguimiento de pedido o de expediente no está cubierto.',
    accessibleFromSpecification:
      'La web es nueva o está en proyecto: escribe «conforme RGAA 4.1.2 / WCAG 2.1 AA» en el pliego de condiciones o el presupuesto, con una auditoría antes de publicarla. Previsto desde el principio, cuesta mucho menos que una corrección a posteriori.',
    sixGestures:
      'Haz los seis gestos del método más abajo: textos alternativos, idioma de la página, títulos, contrastes, teclado, etiquetas de los formularios. Se comprueban sin herramientas y detectan los defectos más frecuentes.',
  },
  summaryTemplate: '{organization}, {size}, {website}, para {customers}; {timing}.',
  organizationWords: {
    public: 'Organismo público o con misión de servicio público',
    company: 'Empresa',
    association: 'Asociación',
    freelance: 'Autónomo o microempresario',
  },
  sizeWords: {
    micro: 'menos de 10 empleados y 2 M€ como mucho',
    small: '10 empleados o más, o más de 2 M€',
    large250: 'más de 250 M€ de facturación en Francia',
  },
  websiteWords: {
    showcase: 'web corporativa',
    ecommerce: 'venta online',
    regulated: 'banca, transporte, telecomunicaciones, vídeo o libros electrónicos',
    service: 'área de cliente o aplicación',
    internal: 'intranet o herramienta interna',
  },
  customerWords: {
    consumers: 'particulares',
    businesses: 'profesionales',
    both: 'particulares y profesionales',
  },
  timingWords: {
    existing: 'web en línea antes del 28 de junio de 2025',
    new: 'web creada o rehecha desde el 28 de junio de 2025',
    planned: 'web en proyecto',
  },
  disclaimer:
    'Resultado basado en tus respuestas y en los textos franceses vigentes a 8 de noviembre de 2026. Este test no sustituye un asesoramiento jurídico.',
  leadFormTitle: 'Cuéntame cómo está tu web',
  leadFormIntro:
    'La dirección de la web, lo que hace, lo que te preocupa: te respondo en 24 horas con una primera opinión y los pasos a seguir, y un presupuesto solo si hay correcciones que prever.',
}
