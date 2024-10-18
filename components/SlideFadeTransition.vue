<script setup lang="ts">
const props = defineProps({
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
  <TransitionGroup appear name="slide-fade">
    <div v-if="displayWithDelay" class="transition-container">
      <slot />
    </div>
  </TransitionGroup>
</template>

<style lang="sass" scoped>
.slide-fade
  &-enter-active
    transition: all 0.3s ease-out
    &:nth-child(2)
      transition-delay: 0.6s

  &-leave-active
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)

  &-enter-from,
  &-leave-to
    transform: translateX(-20px)
    opacity: 0
</style>
