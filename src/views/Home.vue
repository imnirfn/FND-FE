<template>
  <div class="home">
    <p class="title is-1">Fake News Detector</p>
   <div class="tabs is-toggle is-centered is-toggle-rounded is-large">
  <ul>
    <li class="is-active">
      <a>
        <span>Scan</span>
      </a>
    </li>
    <li>
      <a>
        <span>History</span>
      </a>
    </li>
    <li>
      <a>
        <span>Analytics</span>
      </a>
    </li>
    <li>
      <a>
        <span>About</span>
      </a>
    </li>
  </ul>
</div>
    <section class="hero is-info is-fullheight">
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
