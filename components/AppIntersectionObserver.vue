<script setup lang="ts">
const props = defineProps({
  root: {
    type: typeof HTMLElement !== 'undefined' ? HTMLElement : Object,
    default: null,
  },
  rootMargin: {
    type: String,
    default: '0px',
  },
  threshold: {
    type: Array<number>,
    default: () => [0, 0.2],
  },
})

const emit = defineEmits(['change'])

const target = ref()

let observer: IntersectionObserver

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    emit('change', entries[0])
  }, props)

  observer.observe(target.value)
})

onBeforeUnmount(() => {
  if (!observer)
    return

  observer.unobserve(target.value)
})
</script>

<template>
  <div ref="target">
    <slot />
  </div>
</template>
