<template>
  <div class="home">
    <section class="hero is-fullheight">
      <ScanNews></ScanNews>
    </section>
  </div>
</template>

<script>
import ScanNews from '@/views/scan/index.vue';

export default {
  name: 'Home',
  components: {
    ScanNews,
  },
};
</script>
