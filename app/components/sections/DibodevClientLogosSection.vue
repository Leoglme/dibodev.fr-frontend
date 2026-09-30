<template>
  <section id="clients" class="bg-surface-tint px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12">
      <DibodevSectionHeading
        :eyebrow="$t('home.clients.eyebrow')"
        :title="$t('home.clients.title')"
        :intro="$t('home.clients.intro')"
        align="center"
      />
      <ul class="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14 xl:justify-between">
        <li v-for="client in CLIENT_LOGOS" :key="client.name" class="flex items-center gap-3.5">
          <img
            :src="client.src"
            :alt="client.showName ? '' : client.name"
            :width="client.width"
            :height="client.height"
            loading="lazy"
            decoding="async"
            class="w-auto"
            :class="client.height === 32 ? 'h-8' : 'h-11'"
          />
          <span v-if="client.showName" class="text-[17px] font-medium text-gray-100">{{ client.name }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DibodevClientLogo } from '~/core/types/DibodevClientLogosSection'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'

/** Logos in their real colours, rendered 44px high (wordmark 32px); widths are the intrinsic widths at that height. */
const CLIENT_LOGOS: DibodevClientLogo[] = [
  { name: 'LEXIAL', src: '/images/clients/lexial.png', width: 44, height: 44, showName: true },
  { name: 'PrePeers', src: '/images/clients/prepeers.svg', width: 44, height: 44, showName: true },
  { name: 'Izidoor', src: '/images/clients/izidoor.png', width: 173, height: 32, showName: false },
  { name: 'Kodeva', src: '/images/clients/kodeva.png', width: 44, height: 44, showName: true },
  { name: 'A2M', src: '/images/clients/a2m.png', width: 44, height: 44, showName: true },
  { name: 'Gest-Time', src: '/images/clients/gest-time.png', width: 44, height: 44, showName: true },
  { name: 'StockPME', src: '/images/clients/stockpme.png', width: 38, height: 44, showName: true },
]
</script>
