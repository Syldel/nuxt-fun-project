<script setup lang="ts">
definePageMeta({
  layout: 'custom',
})
useHead({
  title: 'À propos',
  meta: [
    { name: 'description', content: 'À propos de ce site' },
  ],
})
</script>

<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <p><a href="/">Home</a></p>
  </section>
</template>
