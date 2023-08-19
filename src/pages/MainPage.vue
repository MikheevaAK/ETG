<template>
    <div>
      <BaseHero />
      <TextBlock />
      <BlockCards v-on:update:showBigCard="showBigCard = $event" />
    </div>
  </template>
  
  <script>
  import BaseHero from '@/components/BaseHero.vue';
  import TextBlock from '@/components/TextBlock.vue';
  import BlockCards from '@/components/Cards.vue';
  
  export default {
    name: 'MainPage',
    components: {
      BaseHero,
      TextBlock,
      BlockCards,
    }
  }
  </script>
  