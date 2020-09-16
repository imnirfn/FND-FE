<template>
  <div class="history">
    <div class="box is-centered">
      <h1 class="title is-centered">Search History</h1>
      <section class="hero is-centered">
          <table class="table is-bordered is-striped is-narrow is-hoverable is-large">
    <thead>
      <tr>
        <th><abbr title="Position">No.</abbr></th>
        <th>News Title</th>
        <th>Source</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody v-if="histories">
      <tr
        v-for="(history, index) in histories"
        :key="index"
      >
        <th>{{ index + 1 }}</th>
        <td>
          <tooltip :label="checkedBy(history.journalist)" placement="top-right">
            <div class="has-text-centered dotted-underline">
              <span>{{ getTitle(history.url) }}</span>
            </div>
          </tooltip>
        </td>
        <td>
          <span><i class="fas fa-link"></i><a :href="history.url">{{ history.url }}</a></span>
        </td>
        <td style="vertical-align: middle">
          <span
          class="is-medium tag"
          :class="{
            'is-danger': history.authenticity === 'Fake',
            'is-primary': history.authenticity === 'Authentic',
             }"
             style="width: 100%"
          >
            {{ history.authenticity }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
      </section>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';
import Tooltip from 'vue-bulma-tooltip';
import { getHistory } from '../api/history';

export default {
  components: {
    Tooltip,
  },
  setup() {
    const histories = ref([]);

    async function getHistories() {
      const authenticity = ['Authentic', 'Fake'];
      const journalists = ['Katie Sandars', 'Joe Dunn', 'Tom Jerr'];
      try {
        const response = await getHistory();
        const data = response.data.Items;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < data.length; i++) {
          data[i].authenticity = authenticity[Math.floor(Math.random() * authenticity.length)];
          data[i].journalist = journalists[Math.floor(Math.random() * journalists.length)];
        }
        console.log(data);
        histories.value = data;
      } catch (err) {
        console.log(err);
      }
    }

    getHistories();

    return {
      histories,
    };
  },
  methods: {
    getTitle(url) {
      let arr = [];
      let title = url.replace(/\/$/, '');
      [title] = title.split('/').slice(-1);
      title = title.split('-');
      title.forEach((word) => {
        // eslint-disable-next-line no-restricted-globals
        if (isNaN(parseInt(word, 10)) && word) {
          arr.push(word[0].toUpperCase() + word.slice(1));
        }
      });
      arr = arr.join(' ');

      return arr;
    },
    checkedBy(journalist) {
      return `Checked by ${journalist}`;
    },
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
  margin-left: auto;
  margin-right: auto;
}

.dotted-underline {
  border-bottom: 1px dashed #999;
  text-decoration: none;
}
</style>
