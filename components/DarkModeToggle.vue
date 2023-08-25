<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    default: 'dark-mode-toggle',
  },
  ariaLabel: {
    type: String,
    default: 'color mode',
  },
  checked: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change'])

const checkedRef = ref(props.checked)

function handleSpace() {
  checkedRef.value = !checkedRef.value
  emit('change', checkedRef.value)
}

function handleClick() {
  emit('change', !checkedRef.value)
}
</script>

<template>
  <label :tabindex="disabled ? undefined : 0" :class="{ disabled }" :htmlFor="id" @keypress.space.prevent="handleSpace">
    <input :id="id" v-model="checkedRef" type="checkbox" :disabled="disabled" role="switch">
    <span class="slider" @click="handleClick" />
    <span class="text">{{ ariaLabel }}</span>
  </label>
</template>

<style lang="sass" scoped>
$ratioSize: 0.33

label
  position: relative
  display: block
  width: calc(200px * $ratioSize)
  min-width: calc(200px * $ratioSize)
  height: calc(100px * $ratioSize)
  background-color: var(--bg)
  border-radius: 50px
  cursor: pointer

  &.disabled
    opacity: 0.3

input
  position: absolute
  display: none

  &:checked ~ .slider
    background-color: var(--color)

    &::before
      transform: translateX(calc(95px* $ratioSize))
      background-color: var(--bg)
      box-shadow: none

.slider
  position: absolute
  width: 100%
  height: 100%
  border-radius: calc(50px * $ratioSize)
  transition: 0.3s

  &::before
    content: ""
    position: absolute
    top: calc(13px * $ratioSize)
    left: calc(16px * $ratioSize)
    width: calc(75px * $ratioSize)
    height: calc(75px * $ratioSize)
    border-radius: 50%
    box-shadow: inset calc(28px* $ratioSize) calc(-4px* $ratioSize) 0px 0px var(--color)
    background-color: var(--bg)
    transition: 0.3s

.text
  color: #ffffff00
  font-size: 12px
</style>
