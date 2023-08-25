<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    default: 35,
  },
  height: {
    type: Number,
    default: 35,
  },
  fontSize: {
    type: Number,
    default: 22,
  },
})

const styleObject = reactive({
  width: `${props.width}px`,
  height: `${props.height}px`,
  fontSize: `${props.fontSize}px`,
})
</script>

<template>
  <div class="bubble-icon" :style="styleObject">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.bubble-icon
  display: flex
  flex: 1 0 auto
  align-items: center
  justify-content: center
  cursor: pointer
  width: 45px
  height: 45px
  border-radius: 50%
  text-align: center
  position: relative
  z-index: 1
  background: var(--color)
  transition: background 0.2s, color 0.2s
  font-size: 24px
  color: var(--bg)

  &:after
    pointer-events: none
    position: absolute
    width: 100%
    height: 100%
    border-radius: 50%
    content: ''
    top: -4px
    left: -4px
    padding: 4px
    box-shadow: 0 0 0 3px var(--color-primary)
    transition: transform 0.2s, opacity 0.2s
    transform: scale(.7)
    opacity: 0

  &:hover
    background: var(--color-primary)
    color: var(--bg)
    text-decoration: none

    &:after
      transform: scale(1)
      opacity: 1
</style>
