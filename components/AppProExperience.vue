<script setup lang="ts">
import type { Experience } from '@/types/gql'
import { slateSerialize } from '@/utils/slate'

defineProps<{
  data: Experience
}>()

const config = useRuntimeConfig()

function s3ImageUrl(id: string): string {
  return `https://${config.public.S3_BUCKET_NAME}.s3.${config.public.S3_REGION}.amazonaws.com/${id}`
}

function s3Image(imgId: string | null | undefined): string {
  return imgId ? s3ImageUrl(imgId) : ''
}
</script>

<template>
  <div v-if="data" class="pro-experience">
    <div class="pro-experience__image-container">
      <BlurHashLazyImage
        v-if="data.image_40"
        :blurhash="data.blurhash!"
        :src="s3Image(data.image_40)"
        :width="40"
        :alt="data.title!"
      />
    </div>
    <div>
      <div class="pro-experience__text pro-experience__text--title">
        {{ data.title }}
      </div>
      <div class="pro-experience__text pro-experience__text--job">
        {{ data.job }}
      </div>
      <div class="pro-experience__text pro-experience__text--content" v-html="slateSerialize(data.content?.document)" />
      <div class="pro-experience__text pro-experience__technos">
        <div v-for="entry of data.technos" :key="entry?.id" class="pro-experience__techno">
          <BlurHashLazyImage
            :blurhash="entry.blurhash!"
            :src="s3Image(entry.image_40)"
            :width="20"
            :alt="entry.name!"
          />
          <div>{{ entry?.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.pro-experience
  display: flex
  flex-direction: row
  align-items: flex-start
  gap: 15px

  &__image-container
    width: 40px

  &__text
    font-size: 1em
    &--title
      font-size: 1.3em
      font-style: unset
      margin-top: -5px

    &--job
      font-size: 1em
      font-style: italic
      color: var(--color-secondary)

  &__technos,
  &__techno
    height: 20px
    display: flex
    flex-direction: row
    align-items: center
    gap: 7px
    line-height: 20px

    > *
      &:nth-child(1)
        height: 20px

  &__technos
    gap: 20px
</style>
