<script setup lang="ts">
import type { Experience } from '@/types/gql'

useHead({
  title: 'Accueil',
  meta: [
    { name: 'description', content: 'Mon expérience professionnelle' },
  ],
})

const { data } = await useAsyncGql({
  operation: 'GetAllExperiences',
})
const experiences = ref<Experience[]>(data?.value?.experiences || [])
const sortedExperiences = computed(() => {
  return experiences.value.sort((a, b) => new Date(b.startDate || '').getTime() - new Date(a.startDate || '').getTime())
})
</script>

<template>
  <section>
    <h1><span>Bienvenue</span> sur mon CV</h1>

    <h2>Mon expérience professionnelle</h2>

    <AppProExperiences :items="sortedExperiences" />
    <!-- <pre>{{ experiences }}</pre> -->
  </section>
</template>

<style lang="sass" scoped>
// pre
//   background-color: var(--bg-tertiary)
</style>
