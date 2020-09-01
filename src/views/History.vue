<template>
  <div class="history">
    <div class="box">
      <h1 class="title is-centered">Search History</h1>
      <section class="hero">
          <table class="table is-bordered is-striped is-narrow is-hoverable">
    <thead>
      <tr>
        <th><abbr title="Position">No.</abbr></th>
        <th>News Title</th>
        <th>Source</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody v-for="history in histories" :key="history.id">
      <tr>
        <th>{{ history.Id }}</th>
        <td>{{ history.FunctionName }}</td>
        <td><span><i class="fas fa-link"></i>{{ history.Handler }}</span></td>
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

export default {
  setup() {
    const histories = ref([]);
    const API_URL = 'http://localhost:5001/api/v1/lambda/listFunction';

    async function getHistory() {
      const response = await fetch(API_URL);
      const json = await response.json();
      console.log('here', json.Functions);
      histories.value = json.Functions;
    }

    getHistory();

    return {
      histories,
    };
  },
};
</script>
<style scoped>
.box {
  margin-top: 5%;
  margin-left: 27%;
  margin-right: 27%;
}
</style>
