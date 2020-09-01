<template>
  <div class="history">
    <div class="box" v-for="history in histories" :key="history.id">
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
    <tbody>
      <tr>
        <th>1</th>
        <td>{{ history.FunctionName }}</td>
        <td><span><i class="fas fa-link"></i></span></td>
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
      console.log('test', histories.value[0].FunctionName);
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
