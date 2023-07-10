<script setup lang="ts">
import { version as vueVersion } from 'vue/package.json'
import { version as nuxtVersion } from 'nuxt/package.json'

import githubSvg from '@/assets/svg/github.svg'
import vueSvg from '@/assets/svg/vue.svg'
import nuxtSvg from '@/assets/svg/nuxt.svg'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div>
      <p class="footer__p">
        Copyright © {{ currentYear }}. All rights reserved.
      </p>
      <p class="footer__p">
        <span class="footer__span"><img :src="githubSvg" alt="github" class="footer__img"> GitHub by <a href="https://github.com/Syldel" class="footer__link">@Syldel</a>.</span>
        <span class="footer__span">Using <img :src="vueSvg" alt="vue" class="footer__img"> Vue v{{ vueVersion }} and <img :src="nuxtSvg" alt="nuxt" class="footer__img"> Nuxt v{{ nuxtVersion }}</span>
      </p>
    </div>
    <div>
      <img :src="vueSvg" alt="vue" class="footer__img">
      <img :src="nuxtSvg" alt="nuxt" class="footer__img">
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  margin-top: 10px
  font-size: 12px
  display: flex
  align-items: center
  flex-wrap: wrap

  flex-direction: row
  @include for-very-small-screen
    flex-direction: column
    gap: 15px

  > div
    &:first-child
      flex: 1

  &__p,
  &__span
    display: flex
    align-items: center
    margin: 0

  &__p
    flex-wrap: wrap
    &:first-child
      margin-bottom: 3px

  &__span
    &:first-child
      margin-right: 5px

  &__link
    margin-left: 3px

  &__img
    margin-right: 3px
    margin-left: 5px
    &:first-child
      margin-left: 0
    width: 18px
    height: 18px
</style>
