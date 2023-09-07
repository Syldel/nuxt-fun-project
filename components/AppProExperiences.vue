<script setup lang="ts">
import type Film from '@/types/gql'

defineProps<{
  items?: Film[]
}>()
</script>

<template>
  <div class="pro-experiences">
    <h3>Timeline</h3>
    <section class="timeline">
      <AppProExperience
        v-for="item in items"
        :key="item.id"
        :data="item"
      />
    </section>
  </div>
</template>

<style lang="sass" scoped>
.pro-experiences
  background-color: #111
</style>
