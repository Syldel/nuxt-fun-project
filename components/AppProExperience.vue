<script setup lang="ts">
import type Film from '@/types/gql'

defineProps<{
  data: Film
}>()
</script>

<template>
  <div v-if="data" class="pro-experience">
    <span />
    <div>{{ data.title }}</div>
    <div>> by {{ data.director }}</div>
    <div class="year">
      <!-- <span>{{ data.yearEnd }}</span>
      <span>{{ data.yearStart }}</span> -->
    </div>
  </div>
</template>

<style lang="sass" scoped>
.pro-experience
  background-color: #911
  margin: size(10) 0
</style>
