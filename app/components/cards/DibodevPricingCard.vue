<template>
  <div
    class="border-primary-light grid max-w-6xl gap-12 rounded-2xl border-2 bg-gray-400 px-6 py-6 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-6"
  >
    <div class="grid gap-8">
      <div class="grid gap-3 sm:gap-4">
        <h4 class="text-2xl font-medium sm:text-3xl">Mon tarif de développeur freelance</h4>
        <p class="text-sm font-normal">
          Ce prix est essentiellement établi grâce à un taux journalier moyen (TJM). Une journée de travail est égale à
          <span class="text-primary-light">7H</span>.
        </p>
      </div>

      <DibodevButton to="/contact" icon="Mail" class="hidden! w-full sm:block!">Demander un devis</DibodevButton>
    </div>

    <div class="justify-left flex flex-col items-center gap-3 sm:justify-center">
      <h5 class="w-full text-left text-[32px] font-medium sm:text-center sm:text-5xl">
        <span class="text-primary-light">350€ TTC</span>/Jour.
      </h5>
      <p class="w-full text-left text-base font-normal sm:text-center">Soit 291,67€ HT/Jour (TVA 20%).</p>
    </div>

    <DibodevButton to="/contact" icon="Mail" class="w-full sm:hidden">Demander un devis</DibodevButton>
  </div>
</template>
<script setup lang="ts">
import DibodevButton from '~/components/core/DibodevButton.vue'
</script>
