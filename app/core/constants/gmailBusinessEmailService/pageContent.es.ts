import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import { NBSP } from '~/core/constants/typography'

// Gmail labels are the wording of the Spanish Google help pages, as in `gmailSendAsCheck/pageContent.es.ts`.
export const GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_ES: DibodevUpdateServicePageContent = {
  meta: {
    title: `Correo profesional en Gmail: ajuste a distancia desde 90${NBSP}€`,
    description: `Gmail gratuito elimina «Enviar como» en enero de 2027. Configuro tu dirección profesional a distancia: diagnóstico gratuito, desde 90${NBSP}€.`,
    serviceName: 'Configuración de la dirección de correo profesional en Gmail y paso a Google Workspace',
  },
  breadcrumbLabel: 'Dirección de correo profesional en Gmail',
  shareImage: {
    titleLines: ['Tu correo profesional en Gmail', 'después de enero de 2027'],
    highlight: 'después de enero de 2027',
    subtitle: 'Reenvío a Gmail o paso a Google Workspace, a distancia',
    badge: 'Desde 90 €, diagnóstico gratuito',
    alt: 'Tu dirección de correo profesional en Gmail después de enero de 2027: ajuste a distancia desde 90 €, diagnóstico gratuito',
  },
  hero: {
    titlePart1: 'Tu dirección de correo profesional en Gmail después de enero de 2027: ',
    titleHighlight1: 'hago los ajustes',
    titlePart2: ' a distancia',
    description: `A partir de enero de 2027, según Google, una cuenta de Gmail gratuita ya no podrá enviar con una dirección alojada en otro proveedor («Enviar como») ni recoger los correos de esa dirección («Consultar el correo de otras cuentas»). Si lees tu dirección profesional en Gmail, hay un ajuste que hacer antes. Me ocupo a distancia: diagnóstico gratuito en 24${NBSP}h, y luego o bien un reenvío a tu Gmail, o bien el paso de tu Gmail a Google Workspace, con las pruebas de envío y de recepción. El precio se anuncia antes de empezar.`,
    ctaText: 'Enviar mi dirección',
    secondaryCtaText: 'Ver los precios',
    reassurances: [`Respuesta en 24${NBSP}h`, 'Ningún correo perdido', 'Precio anunciado antes de empezar'],
  },
  offers: {
    anchorId: 'precios',
    eyebrow: 'Ofertas y precios',
    title: 'Dos soluciones, un precio conocido antes de empezar',
    intro:
      'El diagnóstico es gratuito y sin compromiso. Después, dos intervenciones distintas: la primera mantiene tu Gmail gratuito, la segunda lo convierte en profesional. Te digo cuál te conviene.',
    cards: [
      {
        title: 'Diagnóstico',
        price: 'Gratis',
        description: `Me envías tu dirección profesional. En 24${NBSP}h te digo por escrito dónde está alojada, qué deja de funcionar para ti en enero de 2027, qué solución te conviene y su precio. Sin compromiso.`,
        isHighlighted: false,
      },
      {
        title: 'Mantener tu Gmail gratuito',
        price: `Desde 90${NBSP}€`,
        description:
          'Creo en tu proveedor de hosting el reenvío de tu dirección profesional a tu Gmail, compruebo que los correos llegan y no acaban en spam, y te enseño desde dónde escribir con tu dirección profesional. Sin suscripción. Recibes como antes; desde Gmail, escribes con tu dirección @gmail.com.',
        isHighlighted: false,
      },
      {
        title: 'Pasar tu Gmail a Google Workspace',
        price: `Desde 190${NBSP}€`,
        description: `Tu Gmail pasa a ser profesional: mismo buzón, mismos correos, y sigues escribiendo con tu dirección profesional. Valido tu nombre de dominio, vuelvo a crear tus direcciones, paso la recepción a Google, configuro la autenticación de los envíos y hago las pruebas. La suscripción de Google (de 6,80 a 8,10${NBSP}€ sin IVA al mes y por buzón) se paga a Google, a tu nombre.`,
        isHighlighted: true,
      },
    ],
    notes: [
      '«Desde»: el precio de partida vale para una dirección, en un nombre de dominio del que tienes los accesos. Sube con el número de direcciones, los correos que envía tu web (formularios, tienda) y los ajustes que haya que corregir. El precio definitivo se anuncia después del diagnóstico, antes de cualquier modificación.',
      'Precios netos, IVA no aplicable (art. 293 B del CGI francés). Intervención a distancia, en toda Francia.',
    ],
    ctaLabel: 'Enviar mi dirección',
    highlightLabel: 'Para no cambiar tus costumbres',
    toolLinkText: 'Probar primero mi dirección gratis',
  },
  included: {
    anchorId: 'incluido',
    eyebrow: 'En cada intervención',
    title: 'Qué está incluido, sea cual sea la solución',
    intro: 'Un correo que deja de funcionar son clientes que se quedan sin respuesta. De ahí estas precauciones.',
    items: [
      {
        title: 'No se modifica nada sin tu acuerdo',
        description: 'El diagnóstico es una lectura. Los ajustes empiezan cuando has dicho sí al precio.',
      },
      {
        title: 'Ningún correo perdido',
        description:
          'Cada dirección existente del dominio se apunta en una lista y se vuelve a crear antes del cambio, y el buzón de tu proveedor se conserva.',
      },
      {
        title: 'Envío y recepción probados',
        description:
          'Correos de prueba en los dos sentidos, hacia varios servicios de correo, con un vistazo a la carpeta Spam.',
      },
      {
        title: 'Autenticación de los envíos comprobada',
        description:
          'Se revisan las líneas SPF, DKIM y DMARC de tu nombre de dominio: sin ellas, un correo bien enviado llega a spam.',
      },
      {
        title: 'Tú mantienes el control de tu cuenta',
        description:
          'No te pido la contraseña de tu Gmail: los pasos del lado de Google se hacen contigo, por videollamada o paso a paso por escrito.',
      },
      {
        title: 'Informe escrito',
        description: 'Qué se ha hecho, dónde están los ajustes y qué habrá que vigilar, en un lenguaje claro.',
      },
    ],
  },
  audiences: {
    anchorId: 'para-quien',
    eyebrow: 'Para quién',
    title: 'Direcciones, proveedores y casos cubiertos',
    intro: 'Cualquier dirección alojada fuera de Google y usada en un Gmail gratuito.',
    items: [
      {
        title: 'Artesanos, autónomos, profesiones liberales',
        description:
          'Una dirección contacto@tu-empresa.fr leída en tu Gmail personal, configurada en su día por ti o por tu webmaster.',
      },
      {
        title: 'OVHcloud, o2switch, IONOS y los demás',
        description:
          'Infomaniak, Gandi, Hostinger, LWS, Plesk o cPanel en un proveedor pequeño: el principio es el mismo en todas partes.',
      },
      {
        title: 'Varias direcciones en el mismo nombre de dominio',
        description:
          'contacto@, presupuestos@, facturacion@: cada una se traslada, como buzón o como alias, para que no se pierda nada en el cambio.',
      },
      {
        title: 'Correos de la web que llegan a spam',
        description:
          'Formularios de contacto, confirmaciones de pedido, recordatorios de cita: también configuro el envío de los correos de tu web.',
        link: { label: 'Comprobar si tus correos llegan a spam', to: '/es/herramientas/correos-llegan-a-spam' },
      },
      {
        title: 'Dirección de Orange, Free, SFR o laposte.net',
        description:
          'El buen momento para pasar a una dirección con tu nombre de dominio, que te acompaña si cambias de operador de internet.',
      },
      {
        title: 'Webmasters y agencias',
        description:
          'Has montado esta configuración para tus clientes: puedes enviármelos para la parte técnica, lo trato directamente con ellos.',
      },
    ],
  },
  method: {
    eyebrow: 'Cómo va',
    title: 'Cinco pasos, de tu mensaje al informe',
    intro: 'Nada que instalar por tu parte. Basta un acceso a tu proveedor de hosting, que recuperas al final.',
    steps: [
      {
        label: 'Dirección',
        title: 'Me envías tu dirección profesional',
        description: 'Por el formulario, con el nombre de tu proveedor si lo conoces. Si no, lo averiguo yo.',
      },
      {
        label: 'Diagnóstico',
        title: `Respuesta escrita en 24${NBSP}h`,
        description:
          'Dónde está alojada tu dirección, qué deja de funcionar para ti, la solución que te conviene y su precio. Gratis, sin compromiso.',
      },
      {
        label: 'Preparación',
        title: 'Lista de las direcciones y de los ajustes',
        description: 'Todas las direcciones del dominio, los correos que envía tu web, los accesos necesarios.',
      },
      {
        label: 'Ajustes',
        title: 'Reenvío o paso a Google, a una hora acordada',
        description: 'Tus correos siguen llegando durante los ajustes. Los pasos del lado de Google se hacen contigo.',
      },
      {
        label: 'Informe',
        title: 'Pruebas, y luego lo que se ha hecho, por escrito',
        description: 'Y qué habrá que vigilar. La factura llega después, no antes.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Antes de escribirme',
    questions: [
      {
        question: '¿Quién puede configurar mi dirección de correo profesional en Gmail antes de enero de 2027?',
        answer: `Tres personas pueden hacerlo: tú mismo, con la guía de tu proveedor (las guías de OVHcloud, o2switch e IONOS están en este sitio); el webmaster que configuró tu dirección; o un desarrollador como yo, que mira lo que hay, te propone la solución más sencilla, hace los ajustes en el proveedor y prueba el envío y la recepción. El diagnóstico es gratuito, y conoces el precio antes de la intervención: desde 90${NBSP}€ para mantener tu Gmail gratuito, desde 190${NBSP}€ para pasarlo a Google Workspace.`,
      },
      {
        question: '¿Por qué dos precios?',
        answer: `Porque son dos intervenciones distintas. Desde 90${NBSP}€, tu Gmail sigue siendo gratuito: creo un reenvío de tu dirección profesional a Gmail, recibes como antes, pero desde Gmail escribes con tu dirección @gmail.com. Desde 190${NBSP}€, tu Gmail se convierte en una cuenta de Google Workspace: sigues recibiendo y escribiendo con tu dirección profesional, como hoy, y pagas a Google una suscripción de 6,80 a 8,10${NBSP}€ sin IVA al mes y por buzón (precios leídos el 19 de noviembre de 2026).`,
      },
      {
        question: '¿Por qué «desde»?',
        answer:
          'Porque el trabajo depende de lo que tengas montado. El precio de partida vale para una dirección, en un nombre de dominio del que tienes los accesos. Varias direcciones, correos enviados por tu web, ajustes de autenticación que corregir o un proveedor sin acceso requieren más tiempo. El diagnóstico gratuito lo dice, y el precio definitivo se anuncia antes de cualquier modificación.',
      },
      {
        question: '¿Tengo que pagar a Google además?',
        answer: `Solo si eliges Google Workspace. En la página de precios de Google para Francia, leída el 19 de noviembre de 2026: Business Starter a 6,80${NBSP}€ sin IVA por usuario y mes con un compromiso de un año, 8,10${NBSP}€ sin compromiso, con una prueba gratuita de 14 días. Un buzón basta para una persona: las demás direcciones del dominio pueden ser alias suyos. La suscripción está a tu nombre y se paga a Google, no a mí. Con el reenvío a un Gmail gratuito, no hay ninguna suscripción.`,
      },
      {
        question: '¿Hay que hacerlo antes de enero de 2027?',
        answer:
          'Es más cómodo. Google escribe que los ajustes actuales funcionan hasta enero de 2027 y no da un día concreto. Hacer el cambio antes es hacerlo a una hora elegida, con pruebas, en lugar de una mañana en la que los correos ya no salen. Si ya te ha pasado, no se ha perdido nada: los correos esperan en tu proveedor, y empiezo por ahí.',
      },
      {
        question: '¿Voy a perder correos durante el cambio?',
        answer:
          'No, para eso está la preparación. Antes de un paso a Google Workspace, cada dirección del dominio se apunta en una lista y se vuelve a crear en Google, y después se pasa la recepción a Google; el buzón de tu proveedor se conserva. Los correos que ya están en tu Gmail se quedan ahí: lo escribe Google. Con un reenvío, los correos siguen llegando al buzón del proveedor además de a Gmail.',
      },
      {
        question: '¿Cuánto dura la intervención?',
        answer:
          'Un reenvío se configura en una sesión corta. Para un paso a Google Workspace, tardé unos 40 minutos en una cuenta de prueba el 19 de noviembre de 2026, para una dirección; hay que contar con más tiempo si hay varias direcciones y correos de la web. Google avisa de que la llegada de los correos nuevos puede tardar hasta 24 horas después del cambio.',
      },
      {
        question: '¿Con qué proveedores de hosting trabajas?',
        answer:
          'Con todos los que dan acceso a las direcciones y a los ajustes del nombre de dominio: OVHcloud, o2switch, IONOS, Infomaniak, Gandi, Hostinger, LWS, y los alojamientos con Plesk o cPanel. Mi propia dirección profesional está alojada en o2switch.',
      },
      {
        question: '¿Y si me basta con un ajuste gratuito?',
        answer:
          'Te lo digo en el diagnóstico. Si sobre todo recibes y tus clientes nunca ven tu dirección, basta un reenvío que puedes crear tú mismo en tu proveedor, y las guías de este sitio muestran dónde hacer clic.',
      },
      {
        question: '¿Trabajas con webmasters y agencias?',
        answer:
          'Sí. Si has configurado direcciones profesionales en el Gmail de tus clientes, puedes enviármelos: lo trato directamente con ellos, solo para el correo. La web, el diseño y los contenidos, por supuesto, siguen en tus manos.',
      },
      {
        question: '¿Cómo se paga?',
        answer:
          'Un diagnóstico gratuito, un precio anunciado antes de la intervención y una factura al terminar, pagada por transferencia. Precios netos, IVA no aplicable. La suscripción de Google Workspace, si la contratas, está a tu nombre y se paga directamente a Google.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para hacerlo tú, o entender qué cambia',
    intro:
      'El paso a paso por proveedor, la solución de problemas, y el paso a Google Workspace contado etapa por etapa.',
  },
  contactCta: {
    title: 'Envíame tu dirección profesional',
    description: `Diagnóstico gratuito en 24${NBSP}h, y luego un precio anunciado antes de cualquier intervención.`,
    button: 'Enviar mi dirección',
  },
  mobileContactBar: {
    text: '¿Tu correo profesional en Gmail?',
    buttonLabel: 'Enviar mi dirección',
  },
}
