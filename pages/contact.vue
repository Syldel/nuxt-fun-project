<script setup lang="ts">
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Contactez-moi ! Ce sera fun !' },
  ],
})
</script>

<template>
  <section class="contact">
    <h1><span>Contact</span></h1>
    <p>Contactez-moi de préférence via LinkedIn :</p>
    <div class="contact__liens">
      <a href="https://fr.linkedin.com/comm/in/sylvain-delescluse-30b42886" target="_blank">
        <BubbleIcon :font-size="18">
          <nuxt-icon name="linkedin" />
        </BubbleIcon>
      </a>
      <a href="https://fr.linkedin.com/comm/in/sylvain-delescluse-30b42886" target="_blank">https://fr.linkedin.com/comm/in/sylvain-delescluse-30b42886</a>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.contact
  @include from-to-breakpoint(phone, large)
    margin-right: 200px

  &__liens
    display: flex
    align-items: center
    justify-content: center
    gap: size(12)
</style>
