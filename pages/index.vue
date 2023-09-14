<script setup lang="ts">
import type Film from '@/types/gql'

useHead({
  title: 'Accueil',
  meta: [
    { name: 'description', content: 'My amazing website' },
  ],
})

const { data } = await useFetch('/api/hello')

const timerOK = ref(false)
setTimeout(() => timerOK.value = true, 4000)
setTimeout(() => timerOK.value = false, 6000)

const allFilmsData = await GqlGetAllFilms()
const films = allFilmsData.allFilms?.films as Film[]
</script>

<template>
  <section>
    <h1><span>Welcome</span> to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <p>
      <a href="/about">About</a>
    </p>

    <FloatingContainer :width="150" :height="150">
      <UnLazyImage
        blurhash="LgNdE+R*.TWB?bofkCof9uaeeTWB"
        src="assets/images/sdelescluse_photolemur_fix01_smaller_square.jpg"
      />
    </FloatingContainer>

    <AppProExperiences :items="films" />
    <p v-for="(entry, i) of films" :key="entry?.id">
      {{ i + 1 }}. Title: {{ entry?.title }} ({{
        entry?.releaseDate
      }})
    </p>

    <h2>useFetch /api/hello</h2>
    <pre>{{ data }}</pre>

    <h2>GraphQL allFilms</h2>
    <pre>{{ allFilmsData }}</pre>

    <p>timerOK: {{ timerOK }}</p>
    <UnLazyImage
      blurhash="LGF5?xYk^6#M@-5c,1J5@[or[Q6."
      src="https://images.unsplash.com/photo-1576158114254-3ba81558b87d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
      width="200" :lazy-load="timerOK"
    />
    <BlurHashLazyImage
      blurhash="LGF5?xYk^6#M@-5c,1J5@[or[Q6."
      src="https://images.unsplash.com/photo-1576158114254-3ba81558b87d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" :width="200" :enable-lazy="false"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan.
    </p>
    <p>
      Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia.
    </p>
    <p>
      Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan.
    </p>
    <p>
      Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia.
    </p>
    <p>
      Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan.
    </p>
    <p>
      Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia.
    </p>
    <p>
      Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec magna interdum, tincidunt neque ut, ultrices eros. Aliquam lobortis lacus ornare, ullamcorper nulla ac, commodo lacus. Nam consequat sapien vulputate scelerisque sodales. Suspendisse iaculis congue arcu id tristique. Nullam ullamcorper turpis sed tellus efficitur molestie. Sed vitae lectus ligula. Sed tempor neque libero, et luctus risus pellentesque eu. Nullam ut finibus velit. Aliquam erat volutpat. Aenean id felis eros. Vestibulum orci diam, varius quis consequat ac, ornare ac mauris. Aenean nec sapien lacinia, laoreet ante eget, porta mi. Vestibulum euismod ultrices risus. In vel eros a orci imperdiet accumsan.
    </p>
    <p>
      Cras congue ex vestibulum felis tristique porta. Suspendisse sed fringilla erat. Nullam semper ornare maximus. Sed bibendum urna non auctor aliquet. Nunc convallis lorem eu justo convallis, ultricies accumsan risus pretium. Curabitur nulla urna, scelerisque ut sem a, porta tempor ipsum. Integer hendrerit imperdiet leo, sagittis semper massa faucibus sed. Maecenas vitae enim felis. Donec sagittis elit nec fermentum lacinia.
    </p>
    <p>
      Curabitur finibus est nunc, vitae bibendum libero mollis non. Vivamus ut lacinia quam. Vestibulum malesuada aliquam neque, in gravida orci. Curabitur risus mauris, malesuada quis vestibulum vitae, condimentum ut dui. Duis mi leo, varius ut est id, porta ultrices ante. Aliquam molestie tellus ligula, non molestie odio condimentum sed. Proin tincidunt tortor et sapien rhoncus, id rhoncus ligula lobortis. Phasellus mattis rutrum varius. Nullam vulputate sed velit a fermentum. Pellentesque scelerisque viverra metus id fringilla. Nam hendrerit sem a bibendum sollicitudin. Vestibulum consequat dolor vel erat bibendum pretium. Ut vel dui sed nunc fringilla tempus.
    </p>
    <p>
      BlurHash Lazy Image examples:<br>
      <BlurHashLazyImage
        blurhash="LGF5?xYk^6#M@-5c,1J5@[or[Q6."
        src="https://nuxt.com/assets/design-kit/logo/full-logo-green-dark.png" :width="200"
      />
      <BlurHashLazyImage
        src="https://images.pexels.com/photos/5591708/pexels-photo-5591708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" :width="200" :height="200"
      />
    </p>
  </section>
</template>

<style lang="sass" scoped>
pre
  background-color: var(--bg-tertiary)
</style>
