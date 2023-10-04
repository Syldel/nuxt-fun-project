<script setup lang="ts">
import type { Techno } from '@/types/gql'

useHead({
  title: 'Technos',
  meta: [
    { name: 'description', content: 'technos' },
  ],
})

const { data } = await useAsyncGql({
  operation: 'GetAllTechnos',
})
const technos = ref<Techno[]>(data.value?.technos || [])
</script>

<template>
  <section class="technos">
    <h1><span>Technologies</span> Web</h1>
    <AppTechnoListItem v-for="techno of technos" :key="techno?.id" :techno="techno" />
  </section>
</template>

<style lang="sass" scoped>
// .technos
</style>
