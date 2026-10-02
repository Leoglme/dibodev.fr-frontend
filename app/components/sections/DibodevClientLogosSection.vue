<template>
  <section id="clients" class="bg-surface-tint px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12">
      <DibodevSectionHeading
        :eyebrow="$t('home.clients.eyebrow')"
        :title="$t('home.clients.title')"
        :intro="$t('home.clients.intro')"
        align="center"
      />
      <ul class="flex w-full flex-wrap items-center justify-center gap-y-7 sm:gap-y-8 lg:gap-x-10 xl:justify-between">
        <li
          v-for="client in CLIENT_LOGOS"
          :key="client.name"
          class="flex basis-1/2 justify-center px-2 sm:basis-1/4 lg:basis-auto lg:px-0"
        >
          <component
            :is="client.projectRoute ? NuxtLinkComponent : 'span'"
            :to="client.projectRoute ? localePath(client.projectRoute) : undefined"
            :title="client.projectRoute ? $t('home.clients.projectLinkLabel', { name: client.name }) : undefined"
            class="flex items-center gap-3.5 rounded-lg"
            :class="
              client.projectRoute
                ? 'transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-80 focus-visible:-translate-y-0.5 focus-visible:opacity-80 motion-reduce:transition-none motion-reduce:hover:translate-y-0'
                : ''
            "
            @click="onLogoClick(client)"
          >
            <img
              :src="client.src"
              :alt="client.showName ? '' : client.name"
              :width="client.width"
              :height="client.height"
              loading="lazy"
              decoding="async"
              class="w-auto"
              :class="client.height === 32 ? 'h-7 sm:h-8' : 'h-10 sm:h-11'"
            />
            <span v-if="client.showName" class="text-[17px] font-medium text-gray-100">{{ client.name }}</span>
          </component>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'
import type { Component } from 'vue'
import type { DibodevClientLogo } from '~/core/types/DibodevClientLogosSection'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Logos in their real colours, 44px high (wordmark 32px), linked to the project page made for the client when there is one. */
const CLIENT_LOGOS: DibodevClientLogo[] = [
  {
    name: 'LEXIAL',
    src: '/images/clients/lexial.png',
    width: 44,
    height: 44,
    showName: true,
    projectRoute: '/project/signdex',
  },
  { name: 'PrePeers', src: '/images/clients/prepeers.svg', width: 44, height: 44, showName: true, projectRoute: null },
  {
    name: 'Izidoor',
    src: '/images/clients/izidoor.png',
    width: 173,
    height: 32,
    showName: false,
    projectRoute: '/project/izidoor',
  },
  { name: 'Kodeva', src: '/images/clients/kodeva.png', width: 44, height: 44, showName: true, projectRoute: null },
  {
    name: 'A2M',
    src: '/images/clients/a2m.png',
    width: 44,
    height: 44,
    showName: true,
    projectRoute: '/project/a2m-orizon-solution',
  },
  {
    name: 'Gest-Time',
    src: '/images/clients/gest-time.png',
    width: 44,
    height: 44,
    showName: true,
    projectRoute: '/project/gestion-temps',
  },
  {
    name: 'StockPME',
    src: '/images/clients/stockpme.png',
    width: 38,
    height: 44,
    showName: true,
    projectRoute: '/project/stockpme',
  },
]

const NuxtLinkComponent: string | Component = resolveComponent('NuxtLink')

const localePath = useLocalePath()
const { track } = useTracking()

/**
 * Track the click on a linked client logo before the link opens the project page.
 * @param {DibodevClientLogo} client - The clicked logo.
 * @returns {void}
 */
function onLogoClick(client: DibodevClientLogo): void {
  if (!client.projectRoute) {
    return
  }
  track(TRACKING_EVENTS.projectCardClicked, {
    project: client.name,
    route: client.projectRoute,
    source: 'client_logos',
  })
}
</script>
