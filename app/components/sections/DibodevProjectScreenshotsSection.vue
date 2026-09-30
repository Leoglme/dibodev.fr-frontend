<template>
  <section
    v-if="projectScreenshots.length > 0"
    id="project-screenshots"
    class="bg-surface-tint px-6 py-20 sm:px-8 lg:py-28"
    data-aos="fade-up"
  >
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.description">
        <template v-if="props.seeAllLabel" #action>
          <DibodevLink :link="localePath('projects')">
            <span>{{ props.seeAllLabel }}</span>
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </DibodevLink>
        </template>
      </DibodevSectionHeading>

      <ul class="grid auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-3 lg:gap-5">
        <li
          v-for="(projectScreenshot, index) in projectScreenshots"
          :key="projectScreenshot.route"
          :class="{
            'col-span-2 row-span-2': index === 0,
            'col-span-2 lg:col-span-1': index > 0 && index === projectScreenshots.length - 1,
          }"
        >
          <NuxtLink
            :to="localePath(projectScreenshot.route)"
            class="group focus-visible:outline-primary relative block h-full overflow-hidden rounded-lg border border-gray-300 bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4"
            @click="
              track(TRACKING_EVENTS.projectCardClicked, {
                project: projectScreenshot.name,
                route: projectScreenshot.route,
                source: props.trackingSource,
              })
            "
          >
            <img
              :src="projectScreenshot.imageUrl"
              :srcset="projectScreenshot.imageSrcset || undefined"
              :sizes="index === 0 ? FEATURED_IMAGE_SIZES : IMAGE_SIZES"
              :alt="projectScreenshot.name"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition-transform duration-300 ease-out motion-safe:group-hover:scale-105"
            />
            <div
              class="absolute inset-x-0 bottom-0 grid gap-1 bg-linear-to-t from-black/80 via-black/50 to-transparent px-4 pt-10 pb-4"
            >
              <span class="text-sm font-medium text-white sm:text-base">{{ projectScreenshot.brand }}</span>
              <span v-if="projectScreenshot.tagline" class="line-clamp-2 hidden text-sm text-white/80 sm:block">
                {{ projectScreenshot.tagline }}
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type {
  DibodevProjectScreenshot,
  DibodevProjectScreenshotsSectionProps,
} from '~/core/types/DibodevProjectScreenshotsSection'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'

const props: DibodevProjectScreenshotsSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    default: '',
  },
  seeAllLabel: {
    type: String as PropType<string>,
    default: '',
  },
  projectSlugs: {
    type: Array as PropType<string[]>,
    required: true,
  },
  trackingSource: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()
const { data: projectsData } = await useProjectsWithTranslations()

const IMAGE_WIDTHS: number[] = [480, 800, 1200]
const FALLBACK_IMAGE_WIDTH: number = 800
const FEATURED_IMAGE_SIZES: string = '(min-width: 1024px) 832px, 100vw'
const IMAGE_SIZES: string = '(min-width: 1024px) 416px, 50vw'
const PROJECT_NAME_SEPARATOR_REGEX: RegExp = /\s[—–]\s/

const projectScreenshots: ComputedRef<DibodevProjectScreenshot[]> = computed((): DibodevProjectScreenshot[] =>
  props.projectSlugs
    .map((slug: string): DibodevProject | undefined =>
      (projectsData.value ?? []).find((project: DibodevProject): boolean => project.route.endsWith(`/${slug}`)),
    )
    .filter((project: DibodevProject | undefined): project is DibodevProject => project !== undefined)
    .map(buildProjectScreenshot),
)

/**
 * Builds the screenshot tile of a project, split into brand and tagline, with a resized image.
 * @param {DibodevProject} project - The project to showcase.
 * @returns {DibodevProjectScreenshot} The screenshot tile data.
 */
function buildProjectScreenshot(project: DibodevProject): DibodevProjectScreenshot {
  const [brand = project.name, tagline = ''] = project.name.split(PROJECT_NAME_SEPARATOR_REGEX)
  const imageAssetUrl: string = project.media1 || project.media2 || project.logoUrl
  return {
    name: project.name,
    brand,
    tagline,
    route: project.route,
    imageUrl: StoryblokImageUtils.getResizedUrl(imageAssetUrl, FALLBACK_IMAGE_WIDTH),
    imageSrcset: StoryblokImageUtils.getSrcset(imageAssetUrl, IMAGE_WIDTHS),
  }
}
</script>
