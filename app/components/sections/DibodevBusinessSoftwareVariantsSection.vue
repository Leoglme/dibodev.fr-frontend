<template>
  <section id="business-software-variants" class="scroll-mt-24 bg-white px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="t('businessSoftwarePage.variants.eyebrow')"
        :title="t('businessSoftwarePage.variants.title')"
        :intro="t('businessSoftwarePage.variants.intro')"
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <DibodevServiceItem
          v-for="(variant, index) in variants"
          :key="variant.key"
          :title="variant.title"
          :description="variant.description"
          :accentColor="getAccentPalette(index).color"
        >
          <template #icon>
            <DibodevServiceIcon :serviceIconName="variant.icon" />
          </template>
          <template #footer>
            <NuxtLink
              :to="variant.to"
              class="text-primary inline-flex items-center gap-1.5 text-[15px] font-medium hover:underline"
            >
              {{ variant.linkLabel }}
              <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </NuxtLink>
          </template>
        </DibodevServiceItem>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type {
  DibodevBusinessSoftwareVariant,
  DibodevBusinessSoftwareVariantConfig,
} from '~/core/types/DibodevBusinessSoftwarePage'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'

/** The three ways customers phrase the request (i18n `businessSoftwarePage.variants.items.*`), each with its next step. */
const VARIANTS: DibodevBusinessSoftwareVariantConfig[] = [
  { key: 'webApp', icon: 'apps', link: 'tools' },
  { key: 'customTool', icon: 'website-content', link: '#estimator' },
  { key: 'redesign', icon: 'cloud-computing', link: '/contact' },
]

const { t } = useI18n()
const localePath = useLocalePath()

/**
 * Resolves the link of a variant: an anchor of the page stays as it is, a route is localized.
 * @param {string} link - Anchor, route name or path.
 * @returns {string} The destination.
 */
function resolveVariantLink(link: string): string {
  return link.startsWith('#') ? link : localePath(link)
}

const variants: ComputedRef<DibodevBusinessSoftwareVariant[]> = computed((): DibodevBusinessSoftwareVariant[] =>
  VARIANTS.map(
    (variant: DibodevBusinessSoftwareVariantConfig): DibodevBusinessSoftwareVariant => ({
      key: variant.key,
      icon: variant.icon,
      title: t(`businessSoftwarePage.variants.items.${variant.key}.title`),
      description: t(`businessSoftwarePage.variants.items.${variant.key}.description`),
      linkLabel: t(`businessSoftwarePage.variants.items.${variant.key}.link`),
      to: resolveVariantLink(variant.link),
    }),
  ),
)
</script>
