<script setup lang="ts">
import type { Techno } from '@/types/gql'
import { slateSerialize } from '@/utils/slate'

const props = defineProps<{
  techno: Techno
}>()

const config = useRuntimeConfig()

function s3ImageUrl(id: string): string {
  // https://keystone-sylstudio-bucket.s3.eu-west-3.amazonaws.com/
  return `https://${config.public.S3_BUCKET_NAME}.s3.${config.public.S3_REGION}.amazonaws.com/${id}`
}

const s3Image40 = computed(() => {
  return props.techno?.image_40 ? s3ImageUrl(props.techno.image_40) : ''
})
</script>

<template>
  <div class="techno-list-item">
    <BlurHashLazyImage
      :blurhash="techno.blurhash!"
      :src="s3Image40"
      :width="40"
      :alt="techno.name!"
    />
    <div>{{ techno.name }}</div>
    <div v-html="slateSerialize(techno.content?.document)" />
  </div>
</template>

<style lang="sass" scoped>
//.techno-list-item
</style>
