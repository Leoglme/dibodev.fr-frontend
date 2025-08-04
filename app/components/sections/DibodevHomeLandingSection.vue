<template>
  <section class="flex h-screen w-screen max-w-screen items-center justify-center">
    <div class="mx-auto grid max-w-xl gap-8">
      <div class="grid gap-6">
        <h1 class="text-[54px] font-semibold text-gray-100">
          Lorem <span class="text-primary-light">Ipsum</span> Dolor
        </h1>
        <p class="text-base leading-7 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a elementum nibh, eget pellentesque
          metus. Morbi sed justo rutrum
        </p>
      </div>
      <div class="justify-left flex items-center">
        <DibodevButton class="w-full max-w-xs">
          Découvrir
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
  </section>
</template>
<script lang="ts" setup>
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
</script>
