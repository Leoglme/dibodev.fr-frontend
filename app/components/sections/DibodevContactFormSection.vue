<template>
  <section
    id="contact-form"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex h-full min-h-screen w-screen max-w-screen items-center justify-center px-6 pt-12 pb-40 sm:px-8 sm:pt-20 sm:pb-80"
  >
    <div class="grid w-full max-w-7xl items-start gap-32 lg:grid-cols-[1fr_auto]">
      <DibodevContactForm />

      <div class="grid gap-6 py-6 sm:gap-8 sm:pl-8">
        <div class="flex items-center justify-start gap-4">
          <DibodevLink externalLink link="mailto:contact@dibodev.fr">
            <DibodevSquareButton backgroundColor="#35424D" backgroundHoverColor="#35424D">
              <DibodevIcon name="Mail" :width="20" :height="20" mode="stroke" />
            </DibodevSquareButton>
          </DibodevLink>

          <DibodevLink class="text-base font-normal" externalLink link="mailto:contact@dibodev.fr">
            contact@dibodev.fr
          </DibodevLink>
        </div>

        <div class="flex items-center justify-start gap-4">
          <DibodevLink externalLink link="tel:+33642193812">
            <DibodevSquareButton backgroundColor="#35424D" backgroundHoverColor="#35424D">
              <DibodevIcon name="Phone" :width="20" :height="20" mode="stroke" />
            </DibodevSquareButton>
          </DibodevLink>

          <DibodevLink class="text-base font-normal" externalLink link="tel:+33642193812"> 06 42 19 38 12 </DibodevLink>
        </div>

        <div class="flex items-center justify-start gap-4">
          <DibodevSquareButton class="pointer-events-none" backgroundColor="#35424D" backgroundHoverColor="#35424D">
            <DibodevIcon name="MapPin" :width="20" :height="20" mode="stroke" />
          </DibodevSquareButton>

          <span class="text-base font-normal"> Rennes, France </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import DibodevContactForm from '~/forms/DibodevContactForm.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevSquareButton from '~/components/buttons/DibodevSquareButton.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
</script>
