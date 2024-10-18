<script setup lang="ts">
import type { Experience } from '@/types/gql'

defineProps<{
  items?: Experience[]
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
          :start-year="getYear(item.startDate).toString()"
          :end-year="getYear(item.endDate).toString()"
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

  :global(.timeline-element:first-child .pro-experience__text--content)
    @include from-to-breakpoint(phone, large)
      margin-right: 100px
</style>
