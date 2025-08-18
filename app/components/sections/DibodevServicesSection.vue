<template>
  <section
    id="services"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 py-36 sm:px-8 sm:py-60"
  >
    <div class="grid w-full max-w-7xl gap-16 sm:gap-20">
      <div class="grid justify-center gap-4 sm:gap-8">
        <h2 class="text-left text-2xl font-semibold sm:text-center sm:text-[32px]">Mes services</h2>
        <p class="text-left text-sm leading-7 text-gray-200 sm:max-w-3xl sm:text-base">
          Je vous accompagne dans la conception de solutions digitales sur mesure, qu’il s’agisse de simplifier vos
          processus, d’optimiser votre présence en ligne, de créer une interface métier performante ou de connecter
          intelligemment vos outils existants.
        </p>
      </div>

      <div class="grid gap-x-20 gap-y-18 pt-4 sm:grid-cols-2">
        <DibodevServiceItem
          v-for="(service, index) in services"
          :key="service.title"
          :title="service.title"
          :description="service.description"
          :color="service.color"
          data-aos="fade-right"
          :data-aos-delay="index * 100"
        >
          <template #icon>
            <DibodevServiceIcon :serviceIconName="service.icon" />
          </template>
        </DibodevServiceItem>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'
type DibodevServiceItem = {
  title: string
  description: string
  color: string
  icon: DibodevServiceIconName
}

/* DATAS */
const services: DibodevServiceItem[] = [
  {
    title: 'Lancement de projet',
    description: 'Un accompagnement complet pour transformer votre idée en projet digital concret.',
    color: '#E2F3FF',
    icon: 'seo',
  },
  {
    title: 'Site internet',
    description: 'Création de sites vitrines ou professionnels, modernes, performants et adaptés à tous les écrans.',
    color: '#EFEAFF',
    icon: 'website-content',
  },
  {
    title: 'Applications mobiles',
    description: 'Développement d’applications iOS et Android sur mesure pour toucher vos utilisateurs partout.',
    color: '#F1E8FF',
    icon: 'mobile',
  },
  {
    title: 'Interfaces métier',
    description: 'Conception d’outils internes simples et efficaces pour améliorer votre quotidien professionnel.',
    color: '#FFF2F2',
    icon: 'apps',
  },
  {
    title: 'API & connecteurs',
    description: 'Connexion de vos outils entre eux pour automatiser les échanges et gagner du temps.',
    color: '#FFE7FB',
    icon: 'cloud-computing',
  },
  {
    title: 'Référencement SEO',
    description: 'Améliorez votre visibilité sur Google pour attirer plus de visiteurs qualifiés.',
    color: '#ECFFDA',
    icon: 'seo-tag',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Hébergement, déploiement automatisé et stabilité assurée pour vos projets en ligne.',
    color: '#DBF7F5',
    icon: 'cloud-storage',
  },
  {
    title: 'Intelligence artificielle',
    description: 'Exploitez vos données et automatisez des actions grâce à des solutions IA sur mesure.',
    color: '#EDEAFF',
    icon: 'ai',
  },
]
</script>
