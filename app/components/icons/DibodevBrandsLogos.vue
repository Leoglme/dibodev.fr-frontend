<template>
  <div class="grid w-full grid-cols-2 place-items-center gap-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-16">
    <template v-for="techName in props.names" :key="techName">
      <div class="flex flex-col items-center justify-center gap-2">
        <DibodevBrandLogo :name="techName" />
        <span v-if="props.showLabels" class="text-center text-sm font-medium text-gray-200">
          {{ techName }}
        </span>
      </div>
    </template>
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
  showLabels: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})
</script>
