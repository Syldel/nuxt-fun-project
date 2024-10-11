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
  position: relative

  @include until-breakpoint(small)
    margin: size(12)
    max-width: none

    :global(.layout__abs-left)
      display: flex
      align-items: center
      justify-content: center

  @include from-to-breakpoint(small, desktop)
    margin: size(24)
    max-width: none

    :global(.layout__abs-left)
      position: absolute
      top: size(0)
      right: size(0)

  @include from-breakpoint(desktop)
    margin: size(24) auto
    max-width: size(1024)

    :global(.layout__abs-left)
      position: absolute
      top: size(0)
      left: size(0)

    :global(.layout__abs-left > *)
      position: absolute
      top: size(0)
      right: size(48)

    @include until-breakpoint(large)
      :global(.layout__abs-left)
        top: size(0)
        right: size(0)
        left: unset

      :global(.layout__abs-left > *)
        top: size(0)
        right: size(0)
        left: unset
</style>
