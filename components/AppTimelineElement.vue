<script setup lang="ts">
const props = defineProps({
  startYear: {
    type: String,
    default: '',
  },
  endYear: {
    type: String,
    default: '',
  },
  displayDelay: {
    type: Number,
    default: 0,
  },
})

const displayWithDelay = ref(false)
let timeoutId: NodeJS.Timeout
onMounted(() => {
  timeoutId = setTimeout(() => displayWithDelay.value = true, props.displayDelay)
})

onUnmounted(() => clearInterval(timeoutId))
</script>

<template>
  <div v-if="displayWithDelay" class="timeline-element">
    <div class="line-with-points">
      <div class="top-year" />
      <div class="line" />
      <div class="bottom-year" />
    </div>
    <div class="slot-container">
      <slot />
    </div>
    <div class="years">
      <span>{{ endYear }}</span>
      <span>{{ startYear }}</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@mixin init-anim
  opacity: 0
  animation-fill-mode: forwards
  animation-name: fade-in-animation
  animation-duration: 0.5s

.timeline-element
  position: relative
  margin: 60px 85px
  line-height: 25px

  .line-with-points
    content: ''
    position: absolute
    top: 0
    left: -25px
    height: 100%

    .line
      height: 100%
      border: 2px solid var(--color)
      border-radius: 4px
      @include init-anim
      animation-delay: 0.15s

    .top-year,
    .bottom-year
      content: ''
      position: absolute
      z-index: 1
      top: 0
      width: 14px
      height: 14px
      border: 3px solid var(--color)
      border-radius: 50%
      left: size(-8)
      background: var(--title-start)
      @include init-anim

    .top-year
      top: -15px
      animation-delay: 0.3s

    .bottom-year
      top: 100%
      animation-delay: 0s

  .years span
    position: absolute
    font-size: 1em
    left: -85px
    width: 40px
    line-height: 20px
    text-align: right
    @include init-anim

    &:first-child
      top: -16px
      animation-delay: 0.3s

    &:last-child
      top: 100%
      animation-delay: 0s

  .slot-container
    @include init-anim
    animation-delay: 0.35s
</style>
