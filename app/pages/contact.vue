<template>
  <DibodevContactLandingSection />
  <DibodevContactFormSection />
</template>
<script setup lang="ts">
import DibodevContactLandingSection from '~/components/sections/DibodevContactLandingSection.vue'
import DibodevContactFormSection from '~/components/sections/DibodevContactFormSection.vue'

const CONTACT_META = {
  title: 'Contactez Léo Guillaume — Développeur Freelance Web & Mobile à Rennes',
  description:
    'Vous avez un projet web, mobile ou IA ? Léo Guillaume, développeur freelance à Rennes, vous répond sous 24h. Décrivez votre projet, obtenez un devis gratuit.',
  ogTitle: 'Contactez Léo Guillaume — Développeur Freelance à Rennes',
  ogDescription: 'Projet web, mobile ou IA ? Réponse sous 24h et devis gratuit. Parlons de votre projet.',
} as const

useHead(() => ({
  title: CONTACT_META.title,
  meta: [
    { name: 'description', content: CONTACT_META.description },
    { property: 'og:title', content: CONTACT_META.ogTitle },
    { property: 'og:description', content: CONTACT_META.ogDescription },
  ],
}))
</script>
