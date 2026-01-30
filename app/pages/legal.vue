<template>
  <section
    class="relative z-2 mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-14 px-6 py-24 sm:px-8 sm:py-32"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <h1 class="text-left text-3xl font-semibold sm:text-4xl">Mentions légales</h1>

    <div class="flex flex-col gap-12 text-left text-base leading-relaxed">
      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">Éditeur du site</h2>
        <p class="text-gray-200">Le site <strong>Dibodev</strong> (dibodev.fr) est édité par :</p>
        <p class="text-gray-200">
          <strong>Léo Guillaume</strong><br />
          Entrepreneur individuel (micro-entreprise)<br />
          13 Rue Roger-Henri Guerrand<br />
          35000 Rennes<br />
          France
        </p>
        <p class="text-gray-200">
          Contact :
          <a href="mailto:contact@dibodev.fr" class="font-medium text-[#bdb3ff] underline">contact@dibodev.fr</a>
        </p>
        <p class="text-gray-200">SIRET : 988 307 906 00012</p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">Hébergeur</h2>
        <p class="text-gray-200">Le site est hébergé par :</p>
        <p class="text-gray-200">
          <strong>OVH SAS</strong><br />
          2 rue Kellermann<br />
          59100 Roubaix<br />
          France
        </p>
      </section>

      <section class="flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-gray-100">Activité</h2>
        <p class="text-gray-200">Développeur full-stack web, IA et mobile en freelance.</p>
      </section>
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({
  title: 'Mentions légales — Dibodev',
  meta: [
    {
      name: 'description',
      content: 'Mentions légales du site Dibodev — Léo Guillaume, développeur freelance à Rennes.',
    },
  ],
})
</script>
