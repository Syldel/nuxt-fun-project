<script setup lang="ts">
import type { Techno } from '@/types/gql'

useHead({
  title: 'Technologies web',
  meta: [
    { name: 'description', content: 'Technologies web' },
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
    <AppTechnoListItem v-for="(techno, index) of technos" :key="techno?.id" :techno="techno" :class="[index === 0 ? 'technos__item--withMarginRight' : '']" />
  </section>
</template>

<style lang="sass" scoped>
.technos
  &__item
    &--withMarginRight
      @include from-to-breakpoint(phone, large)
        margin-right: 200px
</style>
