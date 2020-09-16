<template>
  <div class="box">
    <h1 class="title mt-6">Analytics Overview</h1>
    <div class="columns">
        <div class="column small">
            <line-chart style="width: 120%" :chart-data="reuters"></line-chart>
        </div>
        <div class="column is-one-quarter">
            <h1>es</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column small">
            <line-chart style="width: 120%" :chart-data="reuters"></line-chart>
        </div>
        <div class="column is-one-quarter">
            <h1>es</h1>
        </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/extensions
import LineChart from './Chart.js';
import { getHistory } from '../api/history';

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: {},
      res: [],
      reuters: {},
    };
  },
  created() {
    this.getHistory();
  },
  methods: {
    async getHistory() {
      this.res = await getHistory();

      this.reuters = {
        labels: [],
        datasets: [],
      };
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < this.res.data.Items.length; i++) {
        if (this.res.data.Items[i].url.includes('reuters')) {
          this.reuters.datasets.push({
            label: this.res.data.Items[i].url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0],
            backgroundColor: '#f87979',
            data: [0, ((1 - this.res.data.Items[i].prediction) * 100)],
          });
        }
      }

      this.datacollection = {
        labels: [],
        datasets: [],
      };

      this.datacollection.labels.push('Label');
      this.res.data.Items.forEach((r) => {
        this.datacollection.datasets.push({
          label: r.url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0],
          backgroundColor: '#f87979',
          data: [0, ((1 - r.prediction) * 100)],

        });
      });

      // this.datacollection.labels = this.datacollection.labels.slice(0, 5);
      // this.datacollection.datasets = this.datacollection.datasets.slice(0, 5);
    },
  },
};
</script>

<style>
.small {
max-width: 600px;
margin:  10px auto;
}

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
