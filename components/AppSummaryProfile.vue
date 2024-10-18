<script setup lang="ts">
import profileImage from '@/assets/images/sdelescluse_photolemur_fix01_smaller_square.jpg'
</script>

<template>
  <div class="summary-profile">
    <FloatingContainer :width="150" :height="150">
      <UnLazyImage
        blurhash="LgNdE+R*.TWB?bofkCof9uaeeTWB"
        :src="profileImage"
        alt="profile picture"
      />
      <template #content>
        <div class="summary-profile__name">
          Sylvain DELESCLUSE
        </div>
        <div class="summary-profile__job">
          Développeur Javascript
        </div>
      </template>
    </FloatingContainer>
  </div>
</template>

<style lang="sass" scoped>
.summary-profile

  &__name
    text-align: center
    font-weight: bold
    font-size: size(17)
    margin-top: size(14)
    margin-bottom: size(2)

  &__job
    text-align: center
    font-style: italic
    font-size: size(14)
</style>
