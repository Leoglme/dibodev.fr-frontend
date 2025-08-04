<template>
  <footer class="grid gap-10 border-t border-t-gray-400 bg-gray-800 p-8 px-4 py-8 sm:gap-x-8 sm:gap-y-8">
    <div class="grid gap-8 sm:grid-cols-2">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="grid gap-10 sm:gap-8">
          <DibodevLogo :large="true" :size="30" />
          <!--   SOCIALS       -->
          <div class="flex items-center gap-4">
            <NuxtLink
              v-for="social in socials"
              :key="social.name"
              :to="social.link"
              :title="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DibodevSquareButton :size="40" :backgroundColor="social.color" :backgroundHoverColor="social.hoverColor">
                <DibodevIcon :name="social.icon" :width="20" :height="20" mode="stroke" />
              </DibodevSquareButton>
            </NuxtLink>
          </div>
        </div>
        <div class="grid gap-4">
          <DibodevLink v-for="link in footerLinks" :key="link.title" :link="link.to">
            {{ link.title }}
          </DibodevLink>
        </div>
      </div>

      <div class="grid gap-8">
        <DibodevButton icon="Mail" class="w-full">Me contacter</DibodevButton>

        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center gap-4">
            <div class="justify-left flex items-center gap-1">
              <DibodevIcon name="Moon" mode="stroke" :width="20" :height="20" />
              <span class="text-base font-normal"> Thème sombre </span>
            </div>
            <DibodevSwitch v-model="isChecked" />
          </div>

          <div class="my-6 w-fit sm:my-0">
            <DibodevSelect id="language-select" :options="languages" v-model="selectedLanguage" />
          </div>
        </div>
      </div>
    </div>

    <div class="justify-left flex w-full flex-wrap items-center gap-2">
      <DibodevBadge v-if="tags.length > 0" v-for="tag in tags" :key="tag" backgroundColor="#35424D" textColor="#F5F4FB">
        {{ tag }}
      </DibodevBadge>
    </div>

    <DibodevDivider />

    <span class="text-base font-normal">
      © 2025
      <DibodevLink :externalLink="true" link="https://dibodev.fr"> dibodev.fr </DibodevLink>

      — Tous droits réservés.
    </span>
  </footer>
</template>
<script setup lang="ts">
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevSquareButton from '~/components/buttons/DibodevSquareButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevSwitch from '~/components/buttons/DibodevSwitch.vue'
import DibodevSelect from '~/components/core/DibodevSelect.vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { Ref } from 'vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevDivider from '~/components/decorators/DibodevDivider.vue'

type Socials = {
  name: string
  icon: string
  link: string
  color: string
  hoverColor: string
}

type FooterLink = {
  title: string
  to: string
}

const socials: Socials[] = [
  {
    name: 'GitHub',
    icon: 'Github',
    link: 'https://github.com/Leoglme/',
    color: '#1C2128',
    hoverColor: '#161B22',
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    link: 'https://www.linkedin.com/in/dibodev/',
    color: '#0A66C2',
    hoverColor: '#184D81',
  },
]

const footerLinks: FooterLink[] = [
  {
    title: 'Accueil',
    to: '/',
  },
  {
    title: 'Mes projets',
    to: '/projects',
  },
  {
    title: 'Page de contact',
    to: '/contact',
  },
]

const languages: DibodevSelectOption[] = [
  { label: 'Français', value: 'fr' },
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
]

const tags: string[] = [
  'Développeur web',
  'Mobile',
  'Logiciels',
  'Intelligence artificielle',
  'Rennes, Bretagne, France',
  'Freelance',
]

/* REFS */
const isChecked: Ref<boolean> = ref(false)
const selectedLanguage: Ref<DibodevSelectOption> = ref({ label: 'Français', value: 'fr' })
</script>
