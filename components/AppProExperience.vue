<script setup lang="ts">
import type Film from '@/types/gql'

defineProps<{
  data: Film
}>()
</script>

<template>
  <div v-if="data" class="pro-experience">
    <div>{{ data.title }}</div>
    <div>> by {{ data.director }}</div>
  </div>
</template>

<style lang="sass" scoped>
.pro-experience
  div
    &:nth-child(1)
      font-size: 1.3em
      font-style: unset

    font-size: 1em
    font-style: italic
    color: var(--color-secondary)
</style>
