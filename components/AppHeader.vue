<script setup lang="ts">
const colorMode = useColorMode()

const darkModeChecked = ref(colorMode.value === 'light')

function darkModeChange(checked: boolean) {
  colorMode.value = checked ? 'light' : 'dark'
}
</script>

<template>
  <header>
    <div style="background-color: #ccc">
      Logo
    </div>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/gallup">
            Gallup
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <DarkModeToggle :checked="darkModeChecked" class="dark-mode-toggle" @change="darkModeChange" />
    <div class="social-icons">
      <a href="https://fr.linkedin.com/comm/in/sylvain-delescluse-30b42886" target="_blank">
        <BubbleIcon :font-size="18">
          <nuxt-icon name="linkedin" />
        </BubbleIcon>
      </a>
      <a href="http://twitter.com/GeekSpaceMaster" target="_blank">
        <BubbleIcon><nuxt-icon name="twitter" /></BubbleIcon>
      </a>
    </div>
  </header>
</template>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  gap: 10px
  background-color: var(--bg-tertiary)

  flex-direction: row
  @include until-breakpoint(phone)
    flex-direction: column

  nav
    width: 100%

  ul
    list-style-type: none
    margin: 0
    padding: 0
    overflow: hidden
    background-color: var(--bg-tertiary)

    li
      &:first-child
        margin-left: 3px

      border-right: 1px solid #bbb
      &:last-child
        border-right: none

      float: left
      @include until-breakpoint(phone)
        float: none
        width: 100%
        border-right: none
        margin-left: 0

        border-bottom: 1px solid #bbb
        &:last-child
          border-bottom: none

      a
        display: block
        text-align: center
        text-decoration: none
        padding: 14px 16px
        margin: 3px

        &:hover
          background-color: var(--bg)

      .router-link-active
        font-weight: bold

  .dark-mode-toggle
    opacity: 0
    animation-fill-mode: forwards
    animation-name: fade-in-animation
    animation-duration: 0.9s
    animation-delay: 1.2s

  .social-icons
    display: flex
    gap: size(12)
    margin: 0 size(24)
    @include until-breakpoint(phone)
      margin: size(12) 0

    > div
      opacity: 0
      animation-fill-mode: forwards
      animation-name: fade-in-animation
      animation-duration: 0.9s
      animation-delay: 1.5s
      &:last-child
        animation-delay: 1.75s
</style>
