<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Outer circle -->
    <path
      d="M64 32C64 49.6731 49.6731 64 32 64C14.3269 64 0 49.6731 0 32C0 14.3269 14.3269 0 32 0C49.6731 0 64 14.3269 64 32ZM3.2 32C3.2 47.9058 16.0942 60.8 32 60.8C47.9058 60.8 60.8 47.9058 60.8 32C60.8 16.0942 47.9058 3.2 32 3.2C16.0942 3.2 3.2 16.0942 3.2 32Z"
      fill="#F5F4FB"
      opacity="0.1"
    />
    <!-- Animated internal part -->
    <g class="animate-spin" style="transform-origin: center">
      <path
        d="M64 32C64 37.0499 62.8048 42.0282 60.5122 46.5277C58.2196 51.0272 54.8946 54.9203 50.8091 57.8885C46.7236 60.8568 41.9937 62.816 37.0059 63.606C32.0181 64.396 26.9142 63.9943 22.1115 62.4338L23.1003 59.3904C27.4228 60.7949 32.0163 61.1564 36.5053 60.4454C40.9943 59.7344 45.2513 57.9711 48.9282 55.2997C52.6051 52.6282 55.5976 49.1245 57.661 45.0749C59.7243 41.0254 60.8 36.5449 60.8 32L64 32Z"
        fill="#BDB3FF"
      />
    </g>
  </svg>
</template>

<script lang="ts" setup>
import type { DibodevSpinnerProps } from '~/core/types/DibodevSpinner'

const props: DibodevSpinnerProps = withDefaults(defineProps<DibodevSpinnerProps>(), {
  size: 40,
})
</script>
