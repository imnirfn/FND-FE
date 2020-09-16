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
      <tr>
        <th>1</th>
        <td>russia strikes syria</td>
        <td><span><i class="fas fa-link"></i>{{ histories[0] }}</span></td>
        <td><span class="tag is-primary is-medium">Authentic</span></td>
      </tr>
      <tr>
        <th>2</th>
        <td>pizzas that are more indonesians</td>
        <td><span><i class="fas fa-link"></i>{{ histories[1]}}</span></td>
        <td><span class="tag is-primary is-medium">Authentic</span></td>
      </tr>
      <tr>
        <th>3</th>
        <td>fundamental of analysis</td>
        <td><span><i class="fas fa-link"></i>{{ histories[2] }}</span></td>
        <td><span class="tag is-danger is-medium">Fake</span></td>
      </tr>
      <tr>
        <th>4</th>
        <td>lgbtq commmunity rejects pedophiles</td>
        <td><span><i class="fas fa-link"></i>{{ histories[3] }}</span></td>
        <td><span class="tag is-primary is-medium">Authentic</span></td>
      </tr>
    </tbody>
  </table>
      </section>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';
import { getHistory } from '../api/history';

export default {
  setup() {
    const histories = ref([]);

    async function getHistories() {
      try {
        const response = await getHistory();
        histories.value = response.data.Items;
      } catch (err) {
        console.log(err);
      }
    }

    getHistories();

    return {
      histories,
    };
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
</style>
