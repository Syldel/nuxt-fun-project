<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  srcSet: {
    type: String,
    default: '',
  },
  autoSizes: {
    type: Boolean,
    default: false,
  },
  blurhash: {
    type: String,
    default: 'L0NdO8?bfQ?b~qj[fQj[fQfQfQfQ',
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  alt: {
    type: String,
    default: '',
  },
  enableLazy: {
    type: Boolean,
    default: true,
  },
})

const isIntersecting = ref(false)

function onIntersectionChange(data: IntersectionObserverEntry) {
  isIntersecting.value = data.isIntersecting
}

const computedAlt = computed(() => {
  let alt = ''
  if (props.alt) {
    alt = props.alt.trim().toLowerCase()
  }
  else {
    const regexResult = (/([^\/]+?)(\.|\?\w+)[^\/]*$/gi).exec(props.src)
    if (regexResult && regexResult.length > 1)
      alt = regexResult[1].replace(/[_]+/gi, ' ').replace(/[-]+/gi, ' ')
  }
  return alt
})
</script>

<template>
  <AppIntersectionObserver @change="onIntersectionChange">
    <UnLazyImage
      :blurhash="blurhash"
      :src="src"
      :src-set="srcSet"
      :auto-sizes="autoSizes"
      :width="width"
      :height="height"
      :alt="computedAlt"
      :lazy-load="enableLazy ? isIntersecting : true"
    />
  </AppIntersectionObserver>
</template>
