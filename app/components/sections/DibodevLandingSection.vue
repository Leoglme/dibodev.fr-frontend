<template>
  <section
    id="landing"
    class="relative flex h-screen w-screen max-w-screen items-center justify-center overflow-hidden p-8"
  >
    <div class="z-10 mx-auto grid max-w-2xl gap-8">
      <div class="grid gap-6">
        <h1
          class="text-[30px] font-semibold text-gray-100 sm:text-[54px]"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="800"
        >
          <span v-if="!props.title">
            {{ $t('home.hero.titleBefore') }}<span class="text-primary-light">{{ $t('home.hero.titleHighlight') }}</span
            >{{ $t('home.hero.titleAfter') }}
            <br />
            {{ $t('home.hero.subtitleBefore')
            }}<span class="text-primary-light">{{ $t('home.hero.subtitleHighlight') }}</span
            >{{ $t('home.hero.subtitleAfter') }}
          </span>
          <span v-else>{{ props.title }}</span>
        </h1>
        <p class="text-base leading-7 font-medium" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          {{ props.description }}
        </p>
      </div>
      <div
        class="justify-left flex flex-wrap items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <DibodevButton v-if="props.ctaPrimaryTo" :to="props.ctaPrimaryTo" class="w-full sm:max-w-xs">
          {{ props.ctaText }}
        </DibodevButton>
        <DibodevButton v-else @click="scrollToTargetSection(props.ctaTarget)" class="w-full sm:max-w-xs">
          {{ props.ctaText }}
          <DibodevIcon
            name="DoubleChevronsDown"
            mode="stroke"
            :width="24"
            :height="24"
            class="animate-bounce-pulse ml-2"
          />
        </DibodevButton>
        <DibodevButton
          v-if="props.secondaryCta"
          :outlined="true"
          @click="scrollToTargetSection(props.secondaryCta.target)"
          class="w-full sm:max-w-xs"
        >
          {{ props.secondaryCta.text }}
          <DibodevIcon
            name="DoubleChevronsDown"
            mode="stroke"
            :width="24"
            :height="24"
            class="animate-bounce-pulse ml-2"
          />
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
/* TYPES */
interface SecondaryCta {
  text: string
  target: string
}

/* PROPS */
const props = defineProps({
  title: {
    type: String as PropType<string>,
    default: null,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  ctaText: {
    type: String as PropType<string>,
    default: 'Découvrir',
  },
  ctaTarget: {
    type: String as PropType<string>,
    required: true,
  },
  ctaPrimaryTo: {
    type: String as PropType<string | null>,
    default: null,
  },
  secondaryCta: {
    type: Object as PropType<SecondaryCta | null>,
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
const scrollToTargetSection = (target: string): void => {
  const targetSection: HTMLElement | null = document.querySelector(target)
  if (targetSection) {
    const offset: number = 170
    const top: number = targetSection.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  } else {
    console.warn(`Target section ${target} not found.`)
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
