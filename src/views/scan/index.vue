/* eslint-disable no-alert */
<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <button @click="inputType('url')" class="button is-rounded">URL</button>
          <button @click="inputType('text')" class="button is-rounded">Text</button>
          <button @click="inputType('image')" class="button is-rounded">Images</button>
          <button @click="inputType('document')" class="button is-rounded">Documents</button>
        </div>
      </div>
      <div class="container">
      <h1 class="title is-centered">Fake-O-Meter-Inator</h1>
      <VueSvgGauge
          class="mini-gauge"
          :start-angle="-90"
          :end-angle="90"
          :value="random"
          :separator-step="0"
          :gauge-color="[{ offset: 0, color: '#f4c009'}, { offset: 100, color: '#00afa8'}]"
          :scale-interval="0"
          :inner-radius="65"
          :easing="easing"
          base-color="#d0cdcd"
        >
          <div class="inner-text inner-text--2">
            <span>68%</span>
          </div>
        </VueSvgGauge>
    </div>
    </section>
    <div v-if="input_type === 'url'" class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">By URL</h2>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input is-info is-rounded" type="text" placeholder="Place URL Here!" />
        </div>
        <div class="control">
          <a class="button is-info is-rounded">
            Extract
            <span class="icon">
              <i class="fas search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div v-if="input_type === 'text'" class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">By Text</h2>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded">
          <textarea class="textarea is-info is-rounded" placeholder="e.g. Nuq gay"></textarea>
        </div>
        <div class="control">
          <a class="button is-info is-rounded">
            Extract
            <span class="icon">
              <i class="fas search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div v-if="input_type === 'image'" class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">By Image</h2>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded">
          <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Choose a file…</span>
              </span>
              <span class="file-name">No image is selected</span>
            </label>
          </div>
        </div>
        <div class="control">
          <a class="button is-info is-rounded">
            Upload
            <span class="icon">
              <i class="fas search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div v-if="input_type === 'document'" class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">By Article Documents</h2>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded">
          <div class="file has-name">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Choose a file…</span>
              </span>
              <span class="file-name">No document is selected</span>
            </label>
          </div>
        </div>
        <div class="control">
          <a class="button is-info is-rounded">
            Upload
            <span class="icon">
              <i class="fas search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueSvgGauge } from 'vue-svg-gauge';

export default {
  name: 'ScanNews',
  data() {
    return {
      dialog_visible: false,
      input_type: 'url',
    };
  },
  components: {
    VueSvgGauge,
  },
  methods: {
    // eslint-disable-next-line camelcase
    inputType(data) {
      if (data === 'url') {
        this.input_type = data;
      } else if (data === 'text') {
        this.input_type = data;
      } else if (data === 'image') {
        this.input_type = data;
      } else {
        this.input_type = data;
      }
    },
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
