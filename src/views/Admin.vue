<template>
  <div class="admin">
    <div class="box">
      <h1 class="title is-centered">Fact Checking</h1>
      <section class="hero">
          <table class="table is-bordered is-striped is-narrow is-hoverable">
    <thead>
      <tr>
        <th><abbr title="Position">No.</abbr></th>
        <th>News Title</th>
        <th>Source</th>
        <th>Fact Check</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Covid-19 Killed Kim Jong Un</td>
        <td><span><i class="fas fa-link"></i>www.google.com</span></td>
        <td><span class="button is-warning is-medium">Check</span></td>
      </tr>
       <tr>
        <th>2</th>
        <td>Covid-19 Killed John Cena</td>
        <td><span><i class="fas fa-link"></i>www.yahoo.com</span></td>
        <td><span class="button is-success is-medium">Checked</span></td>
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
    const API_URL = 'http://ec2-54-255-174-221.ap-southeast-1.compute.amazonaws.com:5001/api/v1/lambda/listFunction';

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
