<template>
  <section
    id="business-software-tools"
    class="bg-surface-tint scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="t('businessSoftwarePage.tools.eyebrow')"
        :title="t('businessSoftwarePage.tools.title')"
        :intro="t('businessSoftwarePage.tools.intro')"
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <DibodevServiceItem
          v-for="(tool, index) in tools"
          :key="tool.title"
          :title="tool.title"
          :description="tool.description"
          :accentColor="getAccentPalette(index).color"
        >
          <template #icon>
            <DibodevServiceIcon :serviceIconName="tool.icon" />
          </template>
          <template v-if="tool.exampleProject" #footer>
            <NuxtLink
              :to="localePath(tool.exampleProject.route)"
              class="text-primary inline-flex items-center gap-1.5 text-[15px] font-medium hover:underline"
              @click="onExampleClick(tool.exampleProject)"
            >
              {{ t('businessSoftwarePage.tools.exampleLabel', { name: tool.exampleProject.name }) }}
              <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </NuxtLink>
          </template>
        </DibodevServiceItem>
      </div>

      <div class="mt-4 grid gap-8 border-t border-gray-300 pt-16 lg:mt-6 lg:gap-10 lg:pt-20">
        <div class="grid max-w-2xl gap-3">
          <h3 class="text-2xl leading-snug font-medium tracking-[-0.01em] text-balance text-gray-100 sm:text-[28px]">
            {{ t('businessSoftwarePage.tools.integrations.title') }}
          </h3>
          <p class="text-[17px] leading-7 text-pretty text-gray-200">
            {{ t('businessSoftwarePage.tools.integrations.intro') }}
          </p>
        </div>
        <ul class="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="integration in integrations"
            :key="integration.key"
            class="flex items-center gap-4 rounded-2xl border border-gray-300 bg-white p-5 sm:p-6"
          >
            <span
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
              :style="{ backgroundColor: integration.logoBackground }"
              aria-hidden="true"
            >
              <img
                :src="integration.logoSrc"
                alt=""
                width="28"
                height="28"
                class="h-7 w-7"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span class="grid min-w-0 gap-1">
              <span class="text-base leading-6 font-medium text-gray-100">{{ integration.name }}</span>
              <span class="text-muted text-sm leading-5">{{ integration.label }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type {
  DibodevBusinessSoftwareIntegration,
  DibodevBusinessSoftwareIntegrationConfig,
  DibodevBusinessSoftwareTool,
  DibodevBusinessSoftwareToolConfig,
  DibodevBusinessSoftwareToolExample,
} from '~/core/types/DibodevBusinessSoftwarePage'
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { BUSINESS_SOFTWARE_INTEGRATIONS } from '~/core/constants/businessSoftwareIntegrations'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Tools of the page (i18n `businessSoftwarePage.tools.*`), with a delivered example when one exists. */
const TOOLS: DibodevBusinessSoftwareToolConfig[] = [
  { key: 'planning', icon: 'apps', exampleSlug: null },
  { key: 'stock', icon: 'cloud-storage', exampleSlug: 'stockpme' },
  { key: 'quotes', icon: 'website-content', exampleSlug: null },
  { key: 'time', icon: 'cloud-computing', exampleSlug: 'gestion-temps' },
  { key: 'booking', icon: 'mobile', exampleSlug: 'izidoor' },
  { key: 'ai', icon: 'ai', exampleSlug: 'goupixdex' },
]

/** Separates the short project name from its tagline in the Storyblok name. */
const PROJECT_NAME_SEPARATOR_REGEX: RegExp = /\s[—–-]\s/

const { t } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

/**
 * Finds the delivered project illustrating a tool.
 * @param {string | null} slug - Project slug, or null when no example exists.
 * @returns {DibodevBusinessSoftwareToolExample | null} The example link, or null.
 */
function findExampleProject(slug: string | null): DibodevBusinessSoftwareToolExample | null {
  if (!slug) return null
  const project: DibodevProject | undefined = (storyblokProjectsData.value ?? []).find(
    (candidate: DibodevProject): boolean => candidate.route.endsWith(`/${slug}`),
  )
  if (!project) return null
  const [name = project.name] = project.name.split(PROJECT_NAME_SEPARATOR_REGEX)
  return { name, route: project.route }
}

const tools: ComputedRef<DibodevBusinessSoftwareTool[]> = computed((): DibodevBusinessSoftwareTool[] =>
  TOOLS.map(
    (tool: DibodevBusinessSoftwareToolConfig): DibodevBusinessSoftwareTool => ({
      title: t(`businessSoftwarePage.tools.${tool.key}.title`),
      description: t(`businessSoftwarePage.tools.${tool.key}.description`),
      icon: tool.icon,
      exampleProject: findExampleProject(tool.exampleSlug),
    }),
  ),
)

const integrations: ComputedRef<DibodevBusinessSoftwareIntegration[]> = computed(
  (): DibodevBusinessSoftwareIntegration[] =>
    BUSINESS_SOFTWARE_INTEGRATIONS.map(
      (integration: DibodevBusinessSoftwareIntegrationConfig): DibodevBusinessSoftwareIntegration => ({
        ...integration,
        name: t(`businessSoftwarePage.tools.integrations.items.${integration.key}.name`),
        label: t(`businessSoftwarePage.tools.integrations.items.${integration.key}.label`),
      }),
    ),
)

/**
 * Tracks a click on an example project before the link navigates.
 * @param {DibodevBusinessSoftwareToolExample} example - The clicked example.
 * @returns {void}
 */
function onExampleClick(example: DibodevBusinessSoftwareToolExample): void {
  track(TRACKING_EVENTS.projectCardClicked, { project: example.name, route: example.route, source: 'business_tools' })
}
</script>
