<template>
  <section
    class="relative z-2 mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-14 px-6 py-24 sm:px-8 sm:py-32"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <h1 class="text-left text-3xl font-semibold sm:text-4xl">
      Politique de confidentialité
    </h1>

    <div class="flex flex-col gap-12 text-left text-base leading-relaxed">
      <p class="text-gray-200">
        Cette politique décrit comment je collecte et traite vos données personnelles sur le site Dibodev (dibodev.fr). Je cible principalement la France ; le site pourra être proposé en d’autres langues à l’avenir.
      </p>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">
          Responsable du traitement
        </h2>
        <p class="text-gray-200">
          Léo Guillaume — 13 Rue Roger-Henri Guerrand, 35000 Rennes, France. Contact : <a href="mailto:contact@dibodev.fr" class="font-medium text-[#bdb3ff] underline">contact@dibodev.fr</a>.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">
          Données collectées via le formulaire de contact
        </h2>
        <p class="text-gray-200">
          Lorsque vous m’écrivez via le formulaire, je reçois : type de projet, fourchette de pages, budget, nom et prénom, adresse email et message. Ces informations sont utilisées uniquement pour traiter votre demande et vous répondre.
        </p>
        <p class="text-gray-200">
          Je ne stocke pas ces données dans une base de données. Elles sont transmises par email (via le prestataire Mailjet) et figurent dans ma messagerie le temps de notre échange. Je m’engage à supprimer les données personnelles contenues dans ces échanges dans un délai de 2 ans après le dernier contact, sauf obligation légale de conservation.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">
          Sous-traitant pour l’envoi d’emails
        </h2>
        <p class="text-gray-200">
          J’utilise <strong>Mailjet</strong> (13bis rue de l’Aubrac, 75012 Paris, France) pour l’envoi des emails (notification de contact et accusé de réception). Mailjet agit en tant que sous-traitant pour la transmission des messages.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">
          Mesure d’audience (Umami)
        </h2>
        <p class="text-gray-200">
          Le site utilise <strong>Umami</strong>, hébergé sur umami.dibodev.fr, pour mesurer l’audience (nombre de visites, pages vues). Umami est configuré sans cookies. Aucune revente de données, aucun cookie publicitaire. Les données servent uniquement à comprendre l’usage du site de manière agrégée.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">
          Vos droits
        </h2>
        <p class="text-gray-200">
          Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation du traitement, de portabilité et d’opposition concernant vos données personnelles. Pour les exercer, contactez-moi à <a href="mailto:contact@dibodev.fr" class="font-medium text-[#bdb3ff] underline">contact@dibodev.fr</a>. Vous pouvez également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" class="font-medium text-[#bdb3ff] underline">CNIL</a>.
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">
          Droit applicable
        </h2>
        <p class="text-gray-200">
          Le traitement des données est soumis au droit français et au Règlement général sur la protection des données (RGPD).
        </p>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Politique de confidentialité — Dibodev',
  meta: [
    {
      name: 'description',
      content: 'Politique de confidentialité du site Dibodev — Données personnelles, formulaire de contact, Umami, RGPD.',
    },
  ],
})
</script>
