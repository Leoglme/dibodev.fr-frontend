<template>
  <section id="project-details" class="w-full px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
      <div class="mx-auto grid w-full max-w-3xl gap-6 lg:mx-0">
        <h2
          class="text-[28px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[36px] lg:text-[40px]"
        >
          {{ $t('project.about.descriptionTitle') }}
        </h2>
        <div
          v-if="descriptionHtml"
          class="project-long-description text-left text-[17px] leading-7 text-gray-200"
          v-html="descriptionHtml"
        />
        <p v-else class="text-[17px] leading-7 text-gray-200">{{ props.project.shortDescription }}</p>
      </div>

      <aside class="grid gap-6 lg:sticky lg:top-24">
        <div class="grid gap-5 rounded-lg border border-gray-300 bg-white p-6">
          <h3 class="text-lg font-medium text-gray-100">{{ $t('project.facts.title') }}</h3>
          <dl class="grid gap-4">
            <div v-if="props.formattedDate" class="grid gap-1.5">
              <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ $t('project.facts.year') }}</dt>
              <dd class="text-[15px] text-gray-100">{{ props.formattedDate }}</dd>
            </div>
            <div v-if="props.project.categories.length > 0" class="grid gap-1.5">
              <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ $t('project.facts.type') }}</dt>
              <dd class="flex flex-wrap gap-1.5">
                <NuxtLink
                  v-for="category in props.project.categories"
                  :key="category"
                  :to="getCategoryHref(category)"
                  class="inline-flex no-underline"
                >
                  <DibodevCategoryBadge :category="category" size="sm" />
                </NuxtLink>
              </dd>
            </div>
            <div v-if="(props.project.sectors ?? []).length > 0" class="grid gap-1.5">
              <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">
                {{ $t('project.facts.sector') }}
              </dt>
              <dd class="flex flex-wrap gap-1.5">
                <NuxtLink
                  v-for="sector in props.project.sectors ?? []"
                  :key="sector"
                  :to="getSectorHref(sector)"
                  class="inline-flex no-underline"
                >
                  <DibodevBadge backgroundColor="#f0f0ee" textColor="#141414" size="sm">
                    {{ $t('projects.sectors.' + sector) }}
                  </DibodevBadge>
                </NuxtLink>
              </dd>
            </div>
            <div v-if="props.project.stack.length > 0" class="grid gap-1.5">
              <dt class="text-muted text-xs font-medium tracking-[0.08em] uppercase">
                {{ $t('project.facts.technologies') }}
              </dt>
              <dd class="flex flex-wrap gap-1.5">
                <DibodevBadge
                  v-for="technology in props.project.stack"
                  :key="technology"
                  backgroundColor="#f0f0ee"
                  textColor="#141414"
                  size="sm"
                >
                  {{ technology }}
                </DibodevBadge>
              </dd>
            </div>
          </dl>
          <div v-if="props.project.siteUrl || props.project.repoUrl" class="grid gap-3 border-t border-gray-300 pt-5">
            <DibodevLink
              v-if="props.project.siteUrl"
              :link="props.project.siteUrl"
              externalLink
              @click="
                track(TRACKING_EVENTS.projectSiteVisited, {
                  project: props.project.name,
                  siteUrl: props.project.siteUrl,
                  location: 'project_facts',
                })
              "
            >
              <span>{{ $t('project.landing.viewSite') }}</span>
              <DibodevIcon name="ExternalLink" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </DibodevLink>
            <DibodevLink
              v-if="props.project.repoUrl"
              :link="props.project.repoUrl"
              externalLink
              @click="track(TRACKING_EVENTS.projectRepoVisited, { repoUrl: props.project.repoUrl })"
            >
              <DibodevIcon name="Github" mode="stroke" :width="16" :height="16" aria-hidden="true" />
              <span>{{ $t('project.about.githubButton') }}</span>
            </DibodevLink>
          </div>
        </div>

        <DibodevContactAsideCard
          :title="$t('project.asideCta.title')"
          :description="$t('project.asideCta.description')"
          :buttonLabel="$t('project.asideCta.button')"
          trackingLocation="project_facts"
          class="hidden lg:block"
        />
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevProjectDetailsSectionProps } from '~/core/types/DibodevProjectDetailsSection'
import type { CategoryKey, SectorKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevCategoryBadge from '~/components/ui/DibodevCategoryBadge.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import DibodevContactAsideCard from '~/components/cards/DibodevContactAsideCard.vue'
import { categoryToSlug } from '~/core/constants/categorySlugs'
import { sectorToSlug } from '~/core/constants/sectorSlugs'
import { stringToDescriptionHtml } from '~/core/utils/projectLongDescriptionHtml'
import { StoryblokRichtextUtils } from '~/core/utils/StoryblokRichtextUtils'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Case-study body: the long description next to a sticky facts card (year, type, sector, technologies, links)
 * and a contact card.
 */
const props: DibodevProjectDetailsSectionProps = defineProps({
  project: {
    type: Object as PropType<DibodevProject>,
    required: true,
  },
  formattedDate: {
    type: String as PropType<string>,
    default: '',
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

const descriptionHtml: ComputedRef<string> = computed((): string => {
  const long: DibodevProject['longDescription'] = props.project.longDescription
  if (typeof long === 'string') {
    return stringToDescriptionHtml(long)
  }
  return StoryblokRichtextUtils.toHtml(long)
})

/**
 * Localized route of a category listing page.
 * @param {CategoryKey} category - The category key.
 * @returns {string} The route.
 */
function getCategoryHref(category: CategoryKey): string {
  const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
  return localePath({ name: 'projects-category-slug', params: { slug: categoryToSlug(currentLocale, category) } })
}

/**
 * Localized route of a sector listing page.
 * @param {SectorKey} sector - The sector key.
 * @returns {string} The route.
 */
function getSectorHref(sector: SectorKey): string {
  const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
  return localePath({ name: 'projects-sector-slug', params: { slug: sectorToSlug(currentLocale, sector) } })
}
</script>

<style scoped>
.project-long-description :deep(p) {
  margin-bottom: 1.5rem;
}
.project-long-description :deep(p:last-child) {
  margin-bottom: 0;
}
.project-long-description :deep(h2) {
  font-size: 22px;
  font-weight: 500;
  color: var(--color-gray-100);
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
}
.project-long-description :deep(h3) {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-gray-100);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.project-long-description :deep(strong) {
  font-weight: 500;
  color: var(--color-gray-100);
}
.project-long-description :deep(a) {
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.project-long-description :deep(ul),
.project-long-description :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  list-style-position: outside;
}
.project-long-description :deep(ul) {
  list-style-type: disc;
}
.project-long-description :deep(ul li::marker) {
  color: var(--color-muted);
}
.project-long-description :deep(ol) {
  list-style-type: decimal;
}
.project-long-description :deep(li) {
  margin-bottom: 0.5rem;
}
.project-long-description :deep(li:last-child) {
  margin-bottom: 0;
}
.project-long-description :deep(li > p) {
  margin-bottom: 0;
  display: inline;
}
.project-long-description :deep(blockquote) {
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  font-style: italic;
  background-color: var(--color-gray-800);
  border-left: 3px solid var(--color-primary);
  color: var(--color-gray-200);
}
.project-long-description :deep(blockquote p) {
  margin-bottom: 0;
}
</style>
