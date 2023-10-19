<script setup lang="ts">
import type Film from '@/types/gql'

defineProps<{
  items?: Film[]
}>()

function getYear(date: string | number | Date | null | undefined): number {
  return new Date(date || '').getFullYear()
}

function displayDelay(index: number, items: any[]): number {
  return ((items.length - 1) - index) * 800
}
</script>

<template>
  <div class="pro-experiences">
    <section class="timeline">
      <TransitionGroup name="timeline-list">
        <AppTimelineElement
          v-for="(item, index) in items"
          :key="item.id"
          :start-year="getYear(item.releaseDate).toString()"
          :end-year="getYear(item.releaseDate).toString()"
          :display-delay="displayDelay(index, items!)"
        >
          <AppProExperience :data="item" />
        </AppTimelineElement>
      </TransitionGroup>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.pro-experiences
  .timeline-list-enter-from,
  .timeline-list-leave-to
    transform: translateY(20px)
</style>
