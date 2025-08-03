<template>
  <div class="border-primary-light grid max-w-6xl grid-cols-2 gap-10 rounded-2xl border-2 bg-gray-400 px-8 py-6">
    <div class="grid gap-8">
      <div class="grid gap-4">
        <h4 class="text-3xl font-medium">Mon tarif de développeur freelance</h4>
        <p class="text-sm font-normal">
          Ce prix est essentiellement établi grâce à un taux journalier moyen (TJM). Une journée de travail est égale à
          <span class="text-primary-light">7H</span>.
        </p>
      </div>

      <DibodevButton icon="Mail" class="w-full"> Demander un devis </DibodevButton>
    </div>

    <div class="flex flex-col items-center justify-center gap-2">
      <h5 class="text-5xl font-medium"><span class="text-primary-light">350€ TTC</span>/Jour.</h5>
      <p class="text-base font-normal">Soit 291,67€ HT/Jour (TVA 20%).</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import DibodevButton from '~/components/core/DibodevButton.vue'
</script>
