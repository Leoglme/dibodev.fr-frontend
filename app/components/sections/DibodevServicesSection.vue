<template>
  <section id="services" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading
        :eyebrow="$t('home.services.eyebrow')"
        :title="$t('home.services.title')"
        :intro="$t('home.services.intro')"
      >
        <template #action>
          <DibodevLink :link="estimatorRoute">
            <span>{{ $t('home.services.estimatorLink') }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </DibodevLink>
        </template>
      </DibodevSectionHeading>

      <div class="grid gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
        <DibodevServiceItem
          v-for="service in services"
          :key="service.key"
          :title="service.title"
          :description="service.description"
          :price="service.price"
          :accentColor="service.palette.color"
          :linkTo="service.pageRoute"
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
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevAccentPalette } from '~/core/types/DibodevAccentPalette'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevServiceItem from '~/components/data-displays/DibodevServiceItem.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'

type HomeService = {
  key: string
  title: string
  description: string
  price: string
  icon: DibodevServiceIconName
  palette: DibodevAccentPalette
  pageRoute: string
}

/** Service keys (i18n `home.services.items.*`) paired with their icon. */
const SERVICE_ICONS: Record<string, DibodevServiceIconName> = {
  software: 'apps',
  website: 'website-content',
  mobile: 'mobile',
  aiAutomation: 'ai',
}
/** Services presented on a page of their own: the card title links to it. */
const SERVICE_PAGE_ROUTE_NAMES: Record<string, string> = {
  software: 'custom-business-software',
}

/* I18N */
const { t } = useI18n()
const localePath = useLocalePath()

/* DATAS */
const services: ComputedRef<HomeService[]> = computed((): HomeService[] =>
  Object.entries(SERVICE_ICONS).map(
    ([key, icon]: [string, DibodevServiceIconName], index: number): HomeService => ({
      key,
      title: t(`home.services.items.${key}.title`),
      description: t(`home.services.items.${key}.description`),
      price: t(`home.services.items.${key}.price`),
      icon,
      palette: getAccentPalette(index),
      pageRoute: SERVICE_PAGE_ROUTE_NAMES[key] ? localePath(SERVICE_PAGE_ROUTE_NAMES[key]) : '',
    }),
  ),
)

/** Budget estimator of the business software page, where every kind of project gets a price range. */
const estimatorRoute: ComputedRef<string> = computed(
  (): string => `${localePath('custom-business-software')}#estimator`,
)
</script>
