<script setup>
useHead({
  htmlAttrs: {
    lang: 'fr',
  },
  titleTemplate: '%s - Mon super site',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="sass">
@import '@/assets/style/main.sass'

/* Page transitions */
.page-enter-active,
.page-leave-active
  transition: all 0.4s

.page-enter-from,
.page-leave-to
  opacity: 0
  filter: blur(1rem)

/* Layout transitions */
.layout-enter-active,
.layout-leave-active
  transition: all 0.4s

.layout-enter-from,
.layout-leave-to
  filter: blur(1rem)
</style>
