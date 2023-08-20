<template>
  <div>
    <BaseHero />
    <TextBlock />
    <BlockCards v-on:update:allPara="allPara = $event" />
    <WinPage v-if="allPara" />
  </div>
</template>
  
<script>
import BaseHero from '@/components/BaseHero.vue';
import TextBlock from '@/components/TextBlock.vue';
import BlockCards from '@/components/Cards.vue';
import WinPage from './WinPage.vue';

export default {
  name: 'MainPage',
  components: {
    BaseHero,
    TextBlock,
    BlockCards,
    WinPage
  },
  data() {
    return {
      allPara: false
    }
  }
}
</script>
  