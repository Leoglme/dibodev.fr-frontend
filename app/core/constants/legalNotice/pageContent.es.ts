import type { DibodevLegalNoticePageContent } from '~/core/types/DibodevLegalNoticePage'
import { GDPR_CNIL_RECOMMENDATION_SOURCE, GDPR_LEGAL_NOTICE_SOURCE } from '~/core/constants/gdprCookieCheck/pageShared'
import { LEGAL_NOTICE_GENERATOR_WORDING_ES } from '~/core/constants/legalNotice/generatorWording.es'
import {
  LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE,
  LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE,
  LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE,
  LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE,
  LEGAL_NOTICE_STATUS_ICONS,
} from '~/core/constants/legalNotice/pageShared'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const LEGAL_NOTICE_GENERATOR_PAGE_ES: DibodevLegalNoticePageContent = {
  meta: {
    title: 'Generador de aviso legal gratuito (web en Francia)',
    description:
      'Gratis, sin e-mail: aviso legal + política de privacidad para una web en Francia, según tu estatus, alojamiento ya rellenado, en Word.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Aviso legal (mentions légales) y política de privacidad de una web en Francia (ley francesa de economía digital, RGPD)',
  },
  applicationName: 'Generador de aviso legal y política de privacidad para una web en Francia',
  breadcrumbLabel: 'Generador de aviso legal',
  shareImage: {
    titleLines: ['Aviso legal', 'y privacidad'],
    highlight: 'Aviso legal',
    subtitle: 'Para una web gestionada en Francia, en francés',
    badge: 'Gratis · sin e-mail · Word',
    alt: 'Generador gratuito de aviso legal y política de privacidad para una web en Francia, de dibodev.fr',
  },
  hero: {
    titleBefore: 'Generador de ',
    titleHighlight: 'aviso legal',
    titleAfter: ' y política de privacidad para una web en Francia',
    reassurances: ['Gratis, sin e-mail', 'No se guarda nada', 'Word y copia en un clic'],
    aboutTitle: 'En resumen',
    description:
      'Toda web de empresa en Francia, autónomos incluidos, debe decir quién la edita, cómo contactarle, dónde está inscrito y quién la aloja. En cuanto recoge datos, también necesita una política de privacidad. Este generador redacta las dos en directo a partir de tus respuestas, según tu estatus: autónomo, sociedad, asociación, profesión regulada o particular. Las direcciones de los proveedores de alojamiento habituales (OVHcloud, o2switch, IONOS, Wix, Shopify…) ya están rellenadas, los plazos de conservación vienen de los textos de la CNIL y lo que falta queda marcado «por completar». Los documentos están en francés, para una web gestionada en Francia, para copiar o en Word.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes (Francia). Creo y pongo en orden webs de pequeñas empresas, y siempre encuentro las mismas páginas legales olvidadas: escribí el generador que me habría gustado darles.',
  },
  generator: LEGAL_NOTICE_GENERATOR_WORDING_ES,
  rules: {
    anchorId: 'lo-que-dice-la-ley',
    eyebrow: 'Lo que dice la ley francesa',
    title: 'Aviso legal y RGPD en Francia en 2026, texto por texto',
    intro:
      'Las reglas que aplica el generador, releídas el 8 de noviembre de 2026 en Légifrance, Service-public.fr y la web de la CNIL.',
    facts: [
      {
        contextLabel: 'Ley francesa de confianza en la economía digital, artículo 1-1',
        title: 'Quién edita la web y cómo contactarle',
        text: 'Una persona física muestra su nombre y apellidos, su dirección, su teléfono y, si está inscrita, su número en el registro mercantil o de artesanos. Una sociedad muestra su denominación, su domicilio social, su teléfono, su número de inscripción y su capital. En ambos casos, la web nombra a su director de la publicación.',
        sourceName: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.url,
      },
      {
        contextLabel: 'Misma ley, artículo 1-1, 4° y II',
        title: 'El proveedor de alojamiento, y el anonimato del particular',
        text: 'La web da el nombre, la dirección y el teléfono de su proveedor de alojamiento. Un particular que publica sin fines profesionales puede quedar en el anonimato: solo muestra el nombre y la dirección del proveedor, siempre que le haya dado su identidad.',
        sourceName: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_PUBLISHER_SOURCE.url,
      },
      {
        contextLabel: 'Misma ley, artículo 19',
        title: 'E-mail, IVA y profesiones reguladas',
        text: 'Quien vende en línea añade su e-mail y su número de IVA. Una profesión regulada indica además sus normas profesionales, su título, el Estado que lo otorgó y el colegio u organismo en el que está inscrita.',
        sourceName: LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_ECOMMERCE_SOURCE.url,
      },
      {
        contextLabel: 'Misma ley, artículo 1-2',
        title: `Hasta un año de prisión y 75${NBSP}000${NBSP}€`,
        text: `Es la pena prevista cuando falta esta información, para una persona física o el directivo de una sociedad. Para la sociedad, la multa es la del artículo 131-38 del código penal francés, es decir 375${NBSP}000${NBSP}€ según Service-public.fr.`,
        sourceName: LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_LCEN_SANCTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Service-public.fr, verificado el 13 de octubre de 2026',
        title: 'Una política de privacidad, enlazada en cada página',
        text: `En cuanto recoge datos, la web dice quién es el responsable, qué datos, por qué, con qué base legal, quién los recibe, cuánto tiempo se guardan, cuáles son tus derechos y cómo reclamar ante la CNIL. El enlace debe verse en cada página, separado de las condiciones de venta. Falta de información: 1500${NBSP}€ de multa.`,
        sourceName: GDPR_LEGAL_NOTICE_SOURCE.name,
        sourceUrl: GDPR_LEGAL_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Marco de referencia de la CNIL, 23 de septiembre de 2021',
        title: '3 años para un contacto que no compra',
        text: 'Los datos de un cliente potencial que no llegó a ser cliente se guardan 3 años desde su recogida o desde su último contacto. Los de un cliente se guardan mientras dura la relación y luego se archivan dentro del plazo de prescripción.',
        sourceName: LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE.name,
        sourceUrl: LEGAL_NOTICE_CNIL_COMMERCIAL_SOURCE.url,
      },
      {
        contextLabel: 'Recomendación de la CNIL, 17 de septiembre de 2020',
        title: 'Cookies: consentimiento antes, elección guardada 6 meses',
        text: 'Los rastreadores que no son indispensables esperan el consentimiento del visitante, y rechazar debe ser tan fácil como aceptar. La CNIL considera una buena práctica guardar la elección, aceptación o rechazo, durante 6 meses. Una medición de audiencia exenta guarda sus rastreadores 13 meses y sus datos 25 meses como máximo.',
        sourceName: GDPR_CNIL_RECOMMENDATION_SOURCE.name,
        sourceUrl: GDPR_CNIL_RECOMMENDATION_SOURCE.url,
      },
      {
        contextLabel: 'Código de consumo francés, artículos L612-1 y L616-1',
        title: '¿Vendes a particulares? Un mediador',
        text: `Todo profesional que vende a consumidores, sea cual sea su tamaño, ofrece un mediador de consumo y muestra sus datos en su web. Sin esta información: hasta 3000${NBSP}€ de multa para un empresario individual y 15${NBSP}000${NBSP}€ para una sociedad.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Este generador redacta una plantilla, no un consejo jurídico:',
    calloutText:
      'cubre una web de presentación o una pequeña tienda. No redacta ni condiciones de venta ni condiciones de uso. Para una web que trata datos de salud, hace publicidad segmentada o vende al extranjero, haz revisar el resultado por un abogado.',
  },
  statuses: {
    anchorId: 'estatus-por-estatus',
    eyebrow: 'Según tu estatus',
    title: 'Lo que debe contener tu aviso legal, estatus por estatus',
    intro:
      'La base es la misma para todos: quién edita, cómo contactarle, quién aloja. Lo que cambia es la inscripción.',
    cards: [
      {
        key: 'micro',
        icon: LEGAL_NOTICE_STATUS_ICONS.micro,
        iconTone: 'violet',
        eyebrow: 'Microempresa, empresario individual',
        title: 'Tu nombre, seguido de «EI»',
        text: 'Nombre y apellidos con «entrepreneur individuel» o «EI», dirección, teléfono, e-mail, SIREN, inscripción (RCS o RNE) y número de IVA o la mención de franquicia «TVA non applicable, article 293 B du CGI».',
        note: 'También eres el director de la publicación.',
        link: null,
      },
      {
        key: 'company',
        icon: LEGAL_NOTICE_STATUS_ICONS.company,
        iconTone: 'cyan',
        eyebrow: 'SARL, EURL, SAS, SASU, SA',
        title: 'Razón social, forma y capital',
        text: 'Denominación, forma jurídica y capital social, domicilio social, teléfono, e-mail, número RCS con la ciudad del registro, número de IVA intracomunitario y el nombre del director de la publicación, en general el gerente o el presidente.',
        note: '',
        link: null,
      },
      {
        key: 'association',
        icon: LEGAL_NOTICE_STATUS_ICONS.association,
        iconTone: 'green',
        eyebrow: 'Asociación ley 1901',
        title: 'Las mismas reglas que una persona jurídica',
        text: 'Nombre de la asociación, sede, teléfono y el director de la publicación, a menudo el presidente. La ley no exige el número RNA, pero ayuda a identificar la asociación: el generador lo añade si lo das.',
        note: '',
        link: null,
      },
      {
        key: 'liberal',
        icon: LEGAL_NOTICE_STATUS_ICONS.liberal,
        iconTone: 'amber',
        eyebrow: 'Profesión regulada',
        title: 'Tu título y tu colegio',
        text: 'Además de las menciones de tu estatus: el título profesional, el Estado que lo otorgó, el colegio u organismo en el que estás inscrito y tus normas profesionales, con dónde leerlas.',
        note: 'Abogado, arquitecto, contable colegiado, profesiones sanitarias…',
        link: null,
      },
    ],
  },
  privacyGuide: {
    anchorId: 'politica-de-privacidad',
    eyebrow: 'Política de privacidad',
    title: 'Lo que debe contener tu política de privacidad',
    intro:
      'El artículo 13 del RGPD fija la lista. El generador sigue este orden, que es también el orden en que un visitante busca una respuesta.',
    pitfallLabel: 'El error habitual',
    items: [
      {
        title: 'Quién es responsable de los datos',
        text: 'El nombre de la empresa o la asociación, su dirección y un e-mail para cualquier pregunta. El delegado de protección de datos, si lo hay.',
        pitfall: 'Una dirección «noreply» o la de la agencia que hizo la web.',
      },
      {
        title: 'Qué datos, por qué y con qué base legal',
        text: 'Una línea por uso: formulario de contacto, citas, boletín, cuenta de cliente, pago, estadísticas. Para cada uno, la base legal: contrato, interés legítimo, obligación legal o consentimiento.',
        pitfall: 'Escribir «recogemos tus datos para mejorar nuestros servicios» sin decir cuáles.',
      },
      {
        title: 'Quién los recibe',
        text: 'Tú y los proveedores que los tratan por tu cuenta: alojamiento, herramienta de envío de e-mails, proveedor de pago, herramienta de estadísticas.',
        pitfall: 'Olvidar la herramienta del boletín, que tiene toda la lista de suscriptores.',
      },
      {
        title: 'Las transferencias fuera de la Unión Europea',
        text: 'Google, Meta y muchos proveedores de pago pueden enviar datos a Estados Unidos. La política lo dice, con la garantía que enmarca la transferencia.',
        pitfall: 'Prometer que «los datos nunca salen de Francia» con Google Analytics instalado.',
      },
      {
        title: 'Cuánto tiempo los guardas',
        text: 'Un plazo por uso: 3 años después del último contacto para un cliente potencial, la relación y luego la prescripción para un cliente, 10 años para las facturas.',
        pitfall: '«El tiempo necesario», que no dice nada.',
      },
      {
        title: 'Los derechos del visitante, y la CNIL',
        text: 'Acceso, rectificación, supresión, limitación, oposición, portabilidad, retirada del consentimiento, la dirección a la que escribir y la posibilidad de reclamar ante la CNIL.',
        pitfall: 'Remitir a un formulario de contacto que ya no funciona.',
      },
      {
        title: 'Las cookies y el banner',
        text: 'Qué rastreadores necesitan consentimiento, con qué herramienta se recoge y el enlace «Gestionar mis cookies» para cambiar de opinión.',
        pitfall: 'Describir un banner que la web no tiene, o ya no tiene.',
      },
    ],
  },
  mistakes: {
    anchorId: 'errores-frecuentes',
    eyebrow: 'Sobre el terreno',
    title: 'Los errores que veo en las webs de pequeñas empresas',
    intro: 'Lo que encuentro más a menudo cuando abro la página de aviso legal de la web de una pequeña empresa.',
    cards: [
      {
        key: 'host',
        icon: 'Server',
        iconTone: 'violet',
        eyebrow: 'Alojamiento',
        title: 'Sin proveedor de alojamiento, o el equivocado',
        text: 'Ningún proveedor de alojamiento, o el registrador del dominio en lugar del que aloja la web. Una web hecha en Wix o Shopify la aloja Wix o Shopify, aunque el dominio se haya comprado en otro sitio.',
        note: '',
        link: null,
      },
      {
        key: 'registration',
        icon: 'ClipboardCheck',
        iconTone: 'cyan',
        eyebrow: 'Inscripción',
        title: 'Sin SIREN, sin RCS',
        text: 'Un nombre comercial y una dirección, pero ningún número. Y es lo que permite a un cliente comprobar que la empresa existe.',
        note: '',
        link: null,
      },
      {
        key: 'copied',
        icon: 'Copy',
        iconTone: 'amber',
        eyebrow: 'Copiar y pegar',
        title: 'Una política copiada de otra web',
        text: 'Aparece el nombre de otra empresa, una tienda en línea que la web no tiene o herramientas que no usa. El visitante ya no sabe qué es verdad.',
        note: '',
        link: null,
      },
      {
        key: 'cookies',
        icon: 'Eye',
        iconTone: 'pink',
        eyebrow: 'Cookies',
        title: 'Un banner que no bloquea nada',
        text: 'El banner aparece, pero Google Analytics o el vídeo de YouTube ya se han cargado antes de cualquier clic. El texto dice una cosa y la web hace otra.',
        note: '',
        link: null,
      },
      {
        key: 'webmaster',
        icon: 'Mail',
        iconTone: 'green',
        eyebrow: 'Contacto',
        title: 'El e-mail del webmaster de hace cinco años',
        text: 'La dirección de contacto para los datos es la de la agencia o del sobrino que hizo la web, y ya nadie la lee. Una solicitud de acceso a los datos se queda sin respuesta.',
        note: '',
        link: null,
      },
      {
        key: 'outdated',
        icon: 'CalendarCheck',
        iconTone: 'violet',
        eyebrow: 'Textos caducados',
        title: 'Referencias de otra época',
        text: '«Conforme al artículo 6-III de la LCEN…»: desde mayo de 2024, las menciones del editor dependen del artículo 1-1 de la ley. Una página legal que aún cita el antiguo artículo a menudo no se ha releído en años.',
        note: '',
        link: null,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Aviso legal y política de privacidad en Francia: tus preguntas',
    questions: [
      {
        question: '¿El aviso legal es obligatorio para un autónomo en Francia?',
        answer: `Sí. Un microempresario muestra su nombre seguido de «EI», su dirección, su teléfono, su e-mail, su número de inscripción y, si lo tiene, su número de IVA, además del proveedor de alojamiento. Sin él, la ley francesa prevé hasta un año de prisión y 75${NBSP}000${NBSP}€ de multa para una persona física.`,
      },
      {
        question: '¿Puedo quedar en el anonimato en mi web?',
        answer:
          'Solo si publicas sin fines profesionales, como particular. La ley te permite entonces mostrar solo el nombre y la dirección de tu proveedor de alojamiento, siempre que le hayas dado tu identidad. En cuanto hay una actividad profesional, aunque sea una microempresa, el anonimato no es posible.',
      },
      {
        question:
          '¿Qué diferencia hay entre aviso legal, condiciones de venta, condiciones de uso y política de privacidad?',
        answer:
          'El aviso legal dice quién edita la web y quién la aloja. Las condiciones de venta fijan las condiciones de compra: son obligatorias cuando vendes a consumidores. Las condiciones de uso fijan las reglas de un servicio, útiles cuando la web tiene cuentas o contenidos publicados por los visitantes. La política de privacidad explica qué haces con los datos personales y debe ir separada de las condiciones. Este generador redacta el primero y la última.',
      },
      {
        question: '¿Necesito un delegado de protección de datos (DPO)?',
        answer:
          'El RGPD lo exige en tres casos: un organismo público, una actividad que sigue a personas de forma regular y a gran escala, o que trata a gran escala datos sensibles o penales. Un artesano, un comercio o un despacho con una web de presentación no suele necesitarlo. Si has designado uno, sus datos van en la política de privacidad.',
      },
      {
        question: '¿Qué riesgo hay si falta el aviso legal?',
        answer: `Hasta un año de prisión y 75${NBSP}000${NBSP}€ de multa para una persona física o un directivo, y 375${NBSP}000${NBSP}€ para una sociedad. La falta de información sobre los datos personales se castiga con 1500${NBSP}€, y la ausencia del mediador de consumo con 3000${NBSP}€ (empresario individual) o 15${NBSP}000${NBSP}€ (sociedad). El riesgo más habitual es más sencillo: un cliente o un competidor que lo señala, y una web que inspira menos confianza.`,
      },
      {
        question: '¿Dónde pongo el enlace al aviso legal?',
        answer:
          'Al pie de cada página: la ley pide un acceso fácil, directo y permanente. Pon al lado el enlace a la política de privacidad, visible en cada página, y, si tienes un banner de cookies, un enlace «Gestionar mis cookies» para cambiar de opinión en cualquier momento.',
      },
      {
        question: '¿Una asociación necesita aviso legal?',
        answer:
          'Sí, como toda persona jurídica que edita una web: su nombre, su sede, un teléfono, el nombre del director de la publicación (a menudo el presidente) y el proveedor de alojamiento. La ley no exige el número RNA, pero da confianza. Si la asociación recoge afiliaciones o donaciones en línea, también necesita una política de privacidad.',
      },
      {
        question: '¿Necesito también el aviso legal en español o en inglés?',
        answer:
          'El generador redacta en francés, para una web gestionada en Francia. Si tu web tiene otra versión, puedes poner allí una traducción de las dos páginas, conservando la versión francesa. Las interfaces en español e inglés de esta herramienta producen los mismos documentos en francés.',
      },
      {
        question: '¿Cuánto cuesta un aviso legal con un abogado?',
        answer:
          'Depende del estatus, de lo que hace la web (venta en línea, cuentas de cliente, publicidad) y del tiempo de revisión: no doy ninguna cifra, pide un presupuesto a un abogado. Para una web de presentación sencilla, esta plantilla cubre lo esencial. Para una tienda, datos de salud o publicidad segmentada, la opinión de un profesional del derecho vale lo que cuesta.',
      },
      {
        question: '¿Basta con este generador?',
        answer:
          'No. Redacta una plantilla a partir de tus respuestas, con las reglas de la ley y los plazos de la CNIL, pero no es un consejo jurídico. Relee cada línea, completa lo que está marcado «por completar» y comprueba que el texto describe lo que hace de verdad tu web: un banner de cookies descrito pero ausente es peor que no tener texto.',
      },
      {
        question: 'Mi web está en Wix o Shopify: ¿quién es el proveedor de alojamiento?',
        answer:
          'La plataforma. Para Wix, el contrato francés designa a Wix.com Ltd., en Tel Aviv; para Shopify, Shopify International Limited, en Dublín; para WordPress.com, Automattic Inc., en San Francisco. El registrador de tu dominio (OVHcloud, Gandi, IONOS…) no es el proveedor de alojamiento si solo gestiona el dominio. El generador rellena estas direcciones.',
      },
      {
        question: '¿Tengo que poner mi dirección personal?',
        answer:
          'Un profesional debe dar la dirección de su empresa: si tu domicilio social está en tu casa, es tu dirección, salvo que uses una empresa de domiciliación o un local. Un particular que publica sin actividad profesional puede no mostrar nada más que su proveedor de alojamiento. El generador ofrece esa opción solo para el estatus «particular».',
      },
    ],
  },
  contactCta: {
    title: '¿Quieres que revise tu web?',
    description:
      'Envíame la dirección. Leo tus páginas legales, miro lo que carga la web antes del banner de cookies y te digo lo que falta, en menos de 24 horas.',
    button: 'Enviar mi web',
    gdprCheckLabel: 'Comprobar las cookies de mi web',
  },
  mobileBar: {
    text: '¿Una pregunta sobre tu aviso legal?',
    button: 'Contactarme',
  },
}
