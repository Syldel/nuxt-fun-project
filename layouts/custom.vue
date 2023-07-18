<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="sass" scoped>
main
  margin: size(24)
  max-width: none
  @include until-breakpoint(small)
    margin: size(12)
  @include from-breakpoint(desktop)
    margin: size(24) auto
    max-width: size(1024)
</style>
