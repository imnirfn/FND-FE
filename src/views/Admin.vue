 <!-- eslint-disable no-alert -->
<template>
  <div class="admin">
    <div class="box">
      <h1 class="title">Fact Checking</h1>
      <section class="hero">
        <BulmaAccordion
          dropdown
          :icon="'caret'"
          :caretAnimation="{duration: '.6s',timerFunc: 'ease-in-out'}"
          :slide="{duration: '.9s',timerFunc: 'ease'}"
          v-for="history in histories" :key="history.id"
        >
          <BulmaAccordionItem>
            <h4 class="column is-four-fifths" slot="title">
              <a :href="history.url">
                {{ history.url }}
              </a>
             </h4>
            <h4
              :class="{'has-text-success': history.sentiment === 'POSITIVE',
              'has-text-warning': history.sentiment === 'NEUTRAL',
              'has-text-danger': history.sentiment === 'NEGATIVE'}"
              class="column"
              slot="title"
             >
              {{ history.sentiment }}
             </h4>
            <p class="column has-text-primary" slot="title">
              {{ (100 * (1 - (history.prediction).toFixed(0))) }}
             </p>
            <p class="row" slot="content">
             {{ history.text }}
            </p>
             <div class="row" slot="content">
                <button class="button is-danger is-small" slot="content">Fake</button>
                <button class="button is-primary is-small" slot="content">Authentic</button>
             </div>
          </BulmaAccordionItem>
        </BulmaAccordion>
      </section>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion';

export default {
  setup() {
    const histories = ref([]);
    const API_URL = 'http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001/api/v1/dynamo/url-model';

    async function getHistory() {
      const response = await fetch(API_URL);
      const json = await response.json();
      console.log('here', json);
      histories.value = json.Items;
      console.log('his.val', histories);
    }

    getHistory();

    return {
      histories,
    };
  },

  data() {
    return {

    };
  },

  methods: {

  },

  components: {
    BulmaAccordion,
    BulmaAccordionItem,
  },
};
</script>
<style scoped>
.box {
  margin-top: 5%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 5%;
}

.table {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
}

.pagination {
  margin-top: 5%;
}

.hero {
  margin-bottom: 1%;
}
</style>
