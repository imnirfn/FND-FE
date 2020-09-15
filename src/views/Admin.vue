  <template>
  <div class="admin">
    <div class="box">
      <h1 class="title is-centered">Fact Checking</h1>
      <section class="hero">
        <BulmaAccordion
          dropdown
          :icon="'caret'"
          :caretAnimation="{duration: '.6s',timerFunc: 'ease-in-out'}"
          :slide="{duration: '.9s',timerFunc: 'ease'}"
          v-for="history in histories" :key="history.id"
        >
          <BulmaAccordionItem>
            <h4 slot="title">{{ history.url }} | {{ history.sentiment }}</h4>
            <p slot="content">
             {{ history.text }}
             <button class="button is-primary is-small" slot="content">Authentic</button>
             <button class="button is-danger is-small" slot="content">Fake</button>
            </p>
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
    const API_URL = 'http://13.212.22.139:5001/api/v1/dynamo/url-model';

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
