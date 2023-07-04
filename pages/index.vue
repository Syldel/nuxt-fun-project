<script setup lang="ts">
useHead({
  title: 'Accueil',
  meta: [
    { name: 'description', content: 'My amazing website' },
  ],
})
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <p>
      <a href="/about">About</a>
    </p>
  </div>
</template>
