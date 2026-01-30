<template>
  <footer class="grid gap-10 border-t border-t-gray-400 bg-gray-800 p-8 px-4 py-8 sm:gap-x-8 sm:gap-y-8 sm:px-6">
    <div class="grid gap-8 sm:grid-cols-2">
      <div class="grid gap-6 sm:grid-cols-2">
        <div class="grid gap-10 sm:gap-8">
          <DibodevLogo :large="true" :size="30" />
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
          <div class="w-full sm:hidden">
            <DibodevButton v-if="!isContactPage" :to="localePath('/contact')" icon="Mail" class="w-full">
              {{ $t('footer.contactMe') }}
            </DibodevButton>
          </div>
        </div>
        <div class="grid gap-4">
          <DibodevLink v-for="link in footerLinks" :key="link.to" :link="link.to">
            {{ link.title }}
          </DibodevLink>
        </div>
      </div>

      <div class="flex flex-wrap items-center justify-end gap-8">
        <div class="hidden w-full sm:block sm:w-fit">
          <DibodevButton v-if="!isContactPage" :to="localePath('/contact')" icon="Mail" class="w-full">
            {{ $t('footer.contactMe') }}
          </DibodevButton>
        </div>
        <div class="w-full sm:w-fit">
          <DibodevLanguageSwitcher id="language-switcher" :options="languages" />
        </div>
      </div>
    </div>

    <div class="flex w-full flex-wrap items-center justify-start gap-x-2 gap-y-3">
      <DibodevBadge v-for="tag in tags" :key="tag" backgroundColor="#35424D" textColor="#F5F4FB">
        {{ tag }}
      </DibodevBadge>
    </div>

    <DibodevDivider />

    <div class="flex w-full flex-wrap items-center justify-between gap-10">
      <span class="text-base font-normal text-gray-200">
        © 2025
        <DibodevLink :externalLink="true" link="https://dibodev.fr" color="#e5e7eb"> dibodev.fr </DibodevLink>
        — {{ $t('footer.allRightsReserved') }}
      </span>
      <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
        <DibodevLink v-for="legal in legalLinks" :key="legal.to" :link="legal.to">
          {{ legal.title }}
        </DibodevLink>
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
import DibodevLanguageSwitcher from '~/components/core/DibodevLanguageSwitcher.vue'
import type { DibodevSelectOption } from '~/core/types/DibodevSelect'
import type { ComputedRef } from 'vue'
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

/* I18N */
const { t } = useI18n()
const localePath = useLocalePath()

/* DATAS */
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

const languages: DibodevSelectOption[] = [
  { label: 'FR', value: 'fr' },
  { label: 'EN', value: 'en' },
  { label: 'ES', value: 'es' },
]

const footerLinks: ComputedRef<FooterLink[]> = computed((): FooterLink[] => [
  { title: t('footer.home'), to: localePath('/') },
  { title: t('footer.myProjects'), to: localePath('/projects') },
  { title: t('footer.contactPage'), to: localePath('/contact') },
])

const legalLinks: ComputedRef<FooterLink[]> = computed((): FooterLink[] => [
  { title: t('footer.legal'), to: localePath('/legal') },
  { title: t('footer.privacy'), to: localePath('/privacy') },
])

const tags: ComputedRef<string[]> = computed((): string[] => [
  t('footer.tags.webDeveloper'),
  t('footer.tags.mobile'),
  t('footer.tags.software'),
  t('footer.tags.ai'),
  t('footer.tags.rennesFrance'),
  t('footer.tags.freelance'),
])

/* REFS */
const route = useRoute()

const isContactPage: ComputedRef<boolean> = computed(
  (): boolean => route.path === '/contact' || route.path.endsWith('/contact'),
)
</script>
