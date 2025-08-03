<template>
  <footer class="border-t border-t-gray-400 bg-gray-800 p-8">
    <div class="grid grid-cols-2 gap-8">
      <div class="grid grid-cols-2 gap-6">
        <div class="grid gap-8">
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
        <DibodevButton icon="Mail" class="w-full"> Me contacter </DibodevButton>

        <div class="flex flex-wrap items-center gap-40">
          <div class="flex flex-wrap items-center gap-4">
            <DibodevSwitch v-model="isChecked" />
            <DibodevSwitch v-model="isChecked" disabled />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import DibodevLogo from '~/components/branding/DibodevLogo.vue'
import DibodevSquareButton from '~/components/buttons/DibodevSquareButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevSwitch from '~/components/buttons/DibodevSwitch.vue'

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

/* REFS */
const isChecked = ref(false)
</script>
