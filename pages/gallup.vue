<script setup lang="ts">
useHead({
  title: 'Gallup',
  meta: [
    { name: 'description', content: 'CliftonStrengths Gallup' },
  ],
})
</script>

<!-- Keep only ONE DOM child element inside "template" for good transitions -->
<template>
  <div class="gallup">
    <section>
      <h1><span>CliftonStrengths</span> Gallup</h1>
      <p>Les entreprises qui parviennent à mettre à contribution les talents de leurs employés connaissent un plus grand succès. Elles sont notamment plus productives et rentables que les entreprises qui utilisent moins les talents de leurs employés. Par ailleurs, le personnel de ces entreprises est plus engagé au travail et a tendance à rester en poste plus longtemps.</p>
      <p>
        Pour définir les 34 talents du StrengthsFinder, l’institut Gallup a interrogé plus de 2 millions de personnes (dont plus de 80000 managers) sur ce qui faisait leur réussite.
        De cette recherche est née une liste des 34 talents les plus fréquemment rencontrés, classés dans 4 catégories :
        <ul>
          <li>les talents relatifs aux efforts</li>
          <li>les talents relatifs à la réflexion</li>
          <li>les talents relatifs aux rapports aux autres</li>
          <li>les talents relatifs à l’influence sur les autres</li>
        </ul>
      </p>
    </section>
    <section>
      <h2>Mes top 5 CliftonStrengths</h2>
      <h3>1. Studieux <span>(Talent relatif à la réflexion)</span></h3>
      <p>Les personnes à dominante « Studieux » possèdent une soif d'apprendre et veulent sans cesse s'améliorer. C'est le processus d'apprentissage, plutôt que le résultat, qui les motive tout particulièrement.</p>
      <h3>2. Harmonie <span>(Talent relatif au rapport aux autres)</span></h3>
      <p>Les personnes à dominante « Harmonie » recherchent le consensus. Elles n'aiment pas le conflit et cherchent davantage les terrains d'entente.</p>
      <h3>3. Input <span>(Talent relatif à la réflexion)</span></h3>
      <p>Les personnes à dominante « Input » éprouvent le besoin de recueillir et d'archiver des informations. Elles peuvent accumuler des informations, des idées, des artefacts ou même des relations.</p>
      <h3>4. Analyste <span>(Talent relatif à la réflexion)</span></h3>
      <p>Les personnes à dominante « Analyste » recherchent les motifs et les causes. Elles sont capables d'envisager tous les facteurs pouvant avoir des conséquences sur une situation donnée.</p>
      <h3>5. Prudent <span>(Talent relatif aux efforts)</span></h3>
      <p>Les personnes à dominante « Prudent » ne prennent des décisions et n'opèrent des choix qu'après mûre réflexion. Elles anticipent les obstacles.</p>
    </section>
  </div>
</template>

<style lang="sass" scoped>
.gallup
  section
    &:first-child
      @include from-to-breakpoint(phone, large)
        margin-right: 200px

  h3 span
    font-weight: normal
    font-style: italic
    font-size: size(12)
</style>
