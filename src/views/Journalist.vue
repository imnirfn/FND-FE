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
            <p
              :class="{'has-text-danger': (100 * (1 - (history.prediction).toFixed(2))) < 65,
              'has-text-success': (100 * (1 - (history.prediction).toFixed(2))) >= 65 }"
              class="column"
              slot="title"
             >
              {{ formatPercentage(100 * (1 - (history.prediction).toFixed(1))) }}
             </p>
            <h1 class="row" slot="content"><strong>Scraped data</strong></h1>
            <p v-html="newLine(history.text)" class="row" slot="content">
             {{ newLine(history.text) }}
            </p>
             <div class="row" slot="content">
                <button class="button is-danger is-small" slot="content">Fake</button>
                <button class="button is-primary is-small" slot="content">Authentic</button>
             </div>
          </BulmaAccordionItem>
        </BulmaAccordion>
      </section>
    </div>
    <div :class="{'is-active': loading}" class="pageloader">
      <span class="title">Fetching results..</span>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion';
import { getHistory } from '../api/history';

export default {
  setup() {
    const histories = ref([]);

    async function getHistories() {
      try {
        const response = await getHistory();
        histories.value = response.data.Items;
        console.log('histories', histories.value);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }

    getHistories();

    return {
      histories,
    };
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    newLine(data) {
      this.after = data.split('\\n').join('<br />');
      this.after = this.after.split('\\u201c').join('');
      this.after = this.after.split('\\u2019').join("'");
      this.after = this.after.split('\\u2018').join("'");
      this.after = this.after.split('\\u201d').join('');
      this.after = this.after.split('\\u2013').join('-');
      return this.after;
    },
    formatPercentage(data) {
      const arr = data.toString().split('.');
      if (arr.length === 2) {
        arr[1] = arr[1].slice(0, 2);
      } else {
        arr[1] = '00';
      }
      return arr.join('.');
    },
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
