<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
    default: 150,
  },
  height: {
    type: Number,
    default: 150,
  },
})

const styleObject = reactive({
  width: `${props.width}px`,
  height: `${props.height}px`,
})
</script>

<template>
  <div class="floating-container">
    <SlideFadeTransition :display-delay="250">
      <div class="floating-container__animated" :style="styleObject">
        <slot />
      </div>
    </SlideFadeTransition>
    <SlideFadeTransition :display-delay="230">
      <div>
        <slot name="content" />
      </div>
    </SlideFadeTransition>
  </div>
</template>

<style lang="sass" scoped>
$floatingDelta: 20

.floating-container
  padding-top: size($floatingDelta)
  min-width: max-content

  &__animated
    margin: 0 auto
    box-sizing: border-box
    border: 5px white solid
    border-radius: 50%
    overflow: hidden
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6)
    transform: translatey(0px)
    animation: float 6s ease-in-out infinite

    :slotted(img)
      object-fit: cover
      width: 100%
      height: 100%

    @keyframes float
      0%
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6)
        transform: translatey(0px)

      50%
        box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2)
        transform: translatey(size(-$floatingDelta))

      100%
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6)
        transform: translatey(0px)
</style>
