<template>
  <section
    id="project-landing"
    class="relative flex h-screen w-screen max-w-screen items-center justify-center overflow-hidden p-8"
  >
    <div class="z-10 mx-auto grid max-w-2xl gap-8">
      <div class="grid gap-6">
        <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="800" class="flex items-center gap-6">
          <div
            class="flex h-24 w-24 items-center justify-center rounded-2xl border-1 border-gray-200 p-3"
            :style="{ backgroundColor: props.secondaryColor }"
          >
            <img
              :src="props.logoUrl"
              :alt="props.title + ' logo'"
              class="h-16 w-16 object-contain"
              width="64"
              height="64"
            />
          </div>

          <h1 class="text-[32px] font-semibold text-gray-100 sm:text-[48px]">
            <span>{{ props.title }}</span>
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" class="flex items-center gap-6">
          <p class="text-sm font-normal text-gray-200">
            {{ props.date }}
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <DibodevCategoryBadge v-for="category in props.categories" :key="category" :category="category" />
          </div>
        </div>

        <p class="text-base leading-7 font-medium" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
          {{ props.description }}
        </p>
      </div>
      <div
        class="flex items-center justify-between gap-6"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
      >
        <DibodevButton @click="scrollToTargetSection" class="w-full sm:max-w-xs" outlined>
          Découvrir
          <DibodevIcon
            name="DoubleChevronsDown"
            mode="stroke"
            :width="24"
            :height="24"
            class="animate-bounce-pulse ml-2"
          />
        </DibodevButton>

        <DibodevButton :to="props.siteUrl" :backgroundColor="props.primaryColor" class="w-full sm:max-w-xs">
          Voir le site
          <DibodevIcon name="ExternalLink" mode="stroke" :width="24" :height="24" class="ml-2" />
        </DibodevButton>
      </div>
    </div>

    <img
      src="/images/blur-vector.png"
      alt="Blur vector background"
      class="pointer-events-none absolute right-0 bottom-0 z-0 h-[600px] transition-transform duration-300 ease-out select-none sm:h-[850px]"
      width="1440"
      height="810"
      :style="{ transform: `translateY(${parallaxY}px)` }"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Ref, PropType } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevCategoryBadge from '~/components/ui/DibodevCategoryBadge.vue'
/* PROPS */
const props = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  primaryColor: {
    type: String as PropType<string>,
    required: true,
  },
  secondaryColor: {
    type: String as PropType<string>,
    default: '#35424d',
  },
  logoUrl: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  categories: {
    type: Array as PropType<string[]>,
    required: true,
  },
  date: {
    type: String as PropType<string>,
    required: true,
  },
  siteUrl: {
    type: String as PropType<string>,
    default: null,
  },
})
/* REFS */
const parallaxY: Ref<number> = ref(0)

/* METHODS */
/**
 * Function to scroll to the target section.
 * @returns {void}
 */
const scrollToTargetSection: () => void = (): void => {
  const ctaTarget: string = '#project-about'
  const targetSection: HTMLElement | null = document.querySelector(ctaTarget)
  if (targetSection) {
    const offset: number = 170
    const top: number = targetSection.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  } else {
    console.warn(`Target section ${ctaTarget} not found.`)
  }
}

/**
 * Function to update the parallax effect based on scroll position.
 * @returns {void}
 */
const updateParallax: () => void = (): void => {
  parallaxY.value = window.scrollY * 0.9
}

onMounted(() => {
  window.addEventListener('scroll', updateParallax)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateParallax)
})
</script>
