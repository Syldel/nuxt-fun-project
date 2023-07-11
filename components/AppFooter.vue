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
      <div class="footer__line">
        Copyright © {{ currentYear }}. All rights reserved.
      </div>
      <div class="footer__line">
        <div class="footer__sub">
          <BlurHashLazyImage :src="githubSvg" :width="18" :height="18" class="footer__img" /> GitHub by <a href="https://github.com/Syldel" class="footer__link">@Syldel</a>.
        </div>
        <div class="footer__sub">
          Using <BlurHashLazyImage :src="vueSvg" :width="18" :height="18" class="footer__img" /> Vue v{{ vueVersion }} and <BlurHashLazyImage :src="nuxtSvg" :width="18" :height="18" class="footer__img" /> Nuxt v{{ nuxtVersion }}
        </div>
      </div>
    </div>
    <div>
      <BlurHashLazyImage :src="vueSvg" :width="18" :height="18" class="footer__img" />
      <BlurHashLazyImage :src="nuxtSvg" :width="18" :height="18" class="footer__img" />
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
    &:last-child
      display: flex

  &__line,
  &__sub
    display: flex
    align-items: center
    margin: 0

  &__line
    flex-wrap: wrap
    &:first-child
      margin-bottom: 3px

  &__sub
    &:first-child
      margin-right: 5px
      .footer__img
        &:first-child
          margin-left: 0

  &__link
    margin-left: 3px

  &__img
    margin-right: 3px
    margin-left: 5px
    width: 18px
    height: 18px
</style>
