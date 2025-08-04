<template>
  <section class="flex h-screen w-screen max-w-screen items-center justify-center p-8 sm:h-screen">
    <div class="z-1 mx-auto grid max-w-xl gap-8">
      <div class="grid gap-6">
        <h1 class="text-[32px] font-semibold text-gray-100 sm:text-[54px]">
          Lorem <span class="text-primary-light">Ipsum</span> Dolor
        </h1>
        <p class="text-base leading-7 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a elementum nibh, eget pellentesque
          metus. Morbi sed justo rutrum
        </p>
      </div>
      <div class="justify-left flex items-center">
        <DibodevButton class="w-full sm:max-w-xs">
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

    <img
      src="/images/blur-vector.png"
      alt="Blur vector background"
      class="pointer-events-none absolute right-0 bottom-0 z-0 select-none"
      width="1440"
      height="810"
    />

    <!--    <img-->
    <!--        src="/images/blur-vector.png"-->
    <!--        alt="Blur vector background"-->
    <!--        class="absolute bottom-0 right-0 z-0 pointer-events-none select-none w-full h-full object-cover"-->
    <!--        width="1440"-->
    <!--        height="810"-->
    <!--    />-->
  </section>
</template>
<script lang="ts" setup>
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
</script>
