<template>
  <div class="flex w-full flex-wrap items-center justify-center gap-8">
    <DibodevBrandLogo v-for="name in props.names" :key="name" :name="name" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevBrandsLogosProps } from '~/core/types/DibodevBrandsLogos'
import DibodevBrandLogo from '~/components/icons/DibodevBrandLogo.vue'

/* PROPS */
const props: DibodevBrandsLogosProps = defineProps({
  names: {
    type: Array as PropType<string[]>,
    required: true,
  },
})
</script>
