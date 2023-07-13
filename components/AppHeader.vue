<script setup lang="ts">
function darkModeChange(checked: boolean) {
  // eslint-disable-next-line no-console
  console.log('darkModeChange', checked)
  // TODO: Change "color mode"
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
          <NuxtLink to="/contact">
            Contact
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <DarkModeToggle @change="darkModeChange" />
    <div>Test</div>
  </header>
</template>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  gap: 10px
  background-color: #333

  flex-direction: row
  @include for-phone
    flex-direction: column

  nav
    width: 100%

  ul
    list-style-type: none
    margin: 0
    padding: 0
    overflow: hidden
    background-color: #333

    li
      &:first-child
        margin-left: 3px

      border-right: 1px solid #bbb
      &:last-child
        border-right: none

      float: left
      @include for-phone
        float: none
        width: 100%
        border-right: none
        margin-left: 0

      a
        display: block
        color: white
        text-align: center
        text-decoration: none
        padding: 14px 16px
        margin: 3px 0

        &:hover
          background-color: #111

      .router-link-active
        font-weight: bold
</style>
