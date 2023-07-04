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
    <p class="footer__line">
      Copyright © {{ currentYear }}. All rights reserved.
    </p>
    <p class="footer__line">
      <img :src="githubSvg" alt="github" class="footer__img">
      GitHub by <a href="https://github.com/Syldel" class="footer__link">@Syldel</a>. Using <img :src="vueSvg" alt="vue" class="footer__img"> Vue v{{ vueVersion }} and <img :src="nuxtSvg" alt="nuxt" class="footer__img"> Nuxt v{{ nuxtVersion }}
    </p>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  margin-top: 10px
  font-size: 12px

  &__line
    display: flex
    align-items: center
    margin: 0
    &:first-child
      margin-bottom: 3px

  &__link
    margin-left: 3px

  &__img
    &:first-child
      margin-left: 0
    margin-left: 5px
    margin-right: 3px
    width: 18px
    height: 18px
</style>
