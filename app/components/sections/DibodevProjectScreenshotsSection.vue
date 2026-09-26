<template>
  <section
    v-if="projectScreenshots.length > 0"
    id="project-screenshots"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-24 sm:px-8 sm:py-32"
  >
    <div class="grid w-full max-w-7xl gap-10 sm:gap-12">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div class="grid max-w-3xl gap-4">
          <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ props.title }}</h2>
          <p v-if="props.description" class="text-left text-base leading-8 text-gray-200">{{ props.description }}</p>
        </div>
        <DibodevLink v-if="props.seeAllLabel" :link="localePath('projects')">
          <span>{{ props.seeAllLabel }}</span>
          <DibodevIcon name="ArrowRight" mode="stroke" :width="20" :height="20" aria-hidden="true" />
        </DibodevLink>
      </div>

      <ul class="grid auto-rows-[170px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-3 lg:gap-6">
        <li
          v-for="(projectScreenshot, index) in projectScreenshots"
          :key="projectScreenshot.route"
          :class="{
            'col-span-2 row-span-2': index === 0,
            'col-span-2 lg:col-span-1': index > 0 && index === projectScreenshots.length - 1,
          }"
          data-aos="zoom-in"
          :data-aos-delay="index * 80"
        >
          <NuxtLink
            :to="localePath(projectScreenshot.route)"
            class="group focus-visible:outline-primary-light relative block h-full overflow-hidden rounded-2xl border border-gray-600 bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-4"
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
              class="absolute inset-x-0 bottom-0 grid gap-1 bg-linear-to-t from-gray-900 via-gray-900/80 to-transparent px-4 pt-10 pb-4"
            >
              <span class="text-sm font-semibold text-gray-100 sm:text-base">{{ projectScreenshot.brand }}</span>
              <span v-if="projectScreenshot.tagline" class="line-clamp-2 hidden text-sm text-gray-200 sm:block">
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
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'

const props: DibodevProjectScreenshotsSectionProps = defineProps({
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
