<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
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
    };
  },
  mounted() {
    this.fillData();
  },
  created() {
    this.getHistory();
  },
  methods: {
    async getHistory() {
      this.res = await getHistory();
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
    margin:  150px auto;
  }
</style>
