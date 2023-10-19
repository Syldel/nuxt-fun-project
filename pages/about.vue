<script setup lang="ts">
import { version as vueVersion } from 'vue/package.json'
import { version as nuxtVersion } from 'nuxt/package.json'
import { version as gqlVersion } from 'graphql/package.json'

import vueSvg from '@/assets/svg/vue.svg'
import nuxtSvg from '@/assets/svg/nuxt.svg'
import gqlSvg from '@/assets/svg/graphql.svg'

definePageMeta({
  layout: 'custom',
})
useHead({
  title: 'À propos',
  meta: [
    { name: 'description', content: 'À propos de ce site' },
  ],
})
</script>

<template>
  <section class="about">
    <h1><span>À propos</span></h1>
    <div>
      Ce site a été construit avec :
      <ul>
        <li>
          <BlurHashLazyImage :src="vueSvg" :width="18" :height="18" /> Vue v{{ vueVersion }}
        </li>
        <li>
          <BlurHashLazyImage :src="nuxtSvg" :width="18" :height="18" /> Nuxt v{{ nuxtVersion }}
        </li>
        <li>
          <BlurHashLazyImage :src="gqlSvg" :width="18" :height="18" /> GraphQL v{{ gqlVersion }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.about
  ul
    li
      display: flex
      align-items: center
      gap: size(12)
</style>
