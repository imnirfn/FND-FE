<template>
  <div class="admin">
    <div class="box">
      <h1 class="title is-centered">Fact Checking</h1>
      <section class="hero">
        // TODO :
        // Make dropdown for display texts
        <table class="table is-bordered is-striped is-narrow is-hoverable is-large">
          <thead>
            <tr>
              <th>
                <abbr title="Position">No.</abbr>
              </th>
              <th>News Title</th>
              <th>Source Text</th>
              <th>Sentiment</th>
              <th>Fact Check</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Covid-19 Killed Kim Jong Un</td>
              <td>
                <span>
                  <i class="fas fa-link"></i>www.google.com
                </span>
              </td>
              <td>Positive</td>
              <td>
                <span class="button is-warning is-small">Check</span>
              </td>
            </tr>
            <tr>
              <th>2</th>
              <td>Covid-19 Killed John Cena</td>
              <td>
                <span>
                  <i class="fas fa-link"></i>www.yahoo.com
                </span>
              </td>
              <td>Neutral</td>
              <td>
                <span class="button is-success is-small">Checked</span>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
          <a class="pagination-previous">Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link" aria-label="Goto page 1">1</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 45">45</a>
            </li>
            <li>
              <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 47">47</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 86">86</a>
            </li>
          </ul>
        </nav>
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
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 5%;
}

.table {
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
}
</style>
