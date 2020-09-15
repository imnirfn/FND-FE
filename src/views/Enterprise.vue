<template>
  <div class="" style="width: 100%">
    <section class="section py-8">
        <div class="container">
        <h1 class="title has-text-left">DETECTOR <br/>INTELLIGENCE</h1>
        <section class="subtitle columns">
            <h2 class="column">
                A simple container to divide your page into,
                like the one you're currently reading
            </h2>
            <h1 class="column">test</h1>
        </section>

        <section class="hero is-light" style="width: 100%">
            <div class="container">
                <h1 class="title mt-5">Market insights</h1>
                <div class="subtitle mt-5 rows">
                    <h2 class="row">Gain a quick glimpse into your
                        market standings or investigate your
                        overall<br/> performance. With market-wide views, our data allows you to:
                    </h2>
                    <div class="row mt-5">
                        <span class="icon mr-3">
                            <i class="fas fa-home">dads</i>
                        </span>
                        <span class="icon mr-3">
                            <i class="fas fa-home">dads</i>
                        </span>
                        <span class="icon">
                            <i class="fas fa-home">dads</i>
                        </span>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </section>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const histories = ref([]);
    const API_URL = 'http://ec2-54-255-128-152.ap-southeast-1.compute.amazonaws.com:5001/api/v1/dynamo/url-model';

    async function getHistory() {
      const response = await fetch(API_URL);
      const json = await response.json();
      console.log('here', json.Items);
      histories.value = json.Items;
    }

    getHistory();

    return {
      histories,
    };
  },
};
</script>
<style scoped>

</style>
