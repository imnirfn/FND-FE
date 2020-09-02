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
      <!-- <div class="container">
      <h1 class="title is-centered">Fake-O-Meter-Inator</h1>
      <VueSvgGauge
          class="mini-gauge"
          :start-angle="-90"
          :end-angle="90"
          :value="20"
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
        </div> -->
    </section>
    <div v-if="input_type === 'url'" class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">By URL</h2>
      </div>
      <form @submit.prevent="sendurl">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            class="input is-info is-rounded"
            type="text"
            placeholder="Place URL Here!"
            v-model="url"
          />
        </div>
        <div class="control">
          <button type="submit" class="button is-rounded is-info">Extract</button>
        </div>
      </div>
      </form>
    </div>

    <div v-if="input_type === 'text'" class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">By Text</h2>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded">
          <textarea class="textarea is-info is-rounded" placeholder="e.g. Muaz gay"></textarea>
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
          <form @submit.prevent="senddoc" enctype="multipart/form-data">
            <div class="file has-name">
              <label class="file-label">
                <input
                  class="file-input"
                  type="file"
                  id="file"
                  ref="file"
                  @change="onChangeFileUpload"
                />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Choose a file…</span>
                </span>
                <span v-if="uploaded" class="file-name">No document is selected</span>
                 <span v-else class="file-name">{{file.name}}</span>
              </label>
            </div>
          </form>
        </div>
        <div class="control">
          <a class="button is-info is-rounded" @click="senddoc">
            Upload
            <span class="icon">
              <i class="fas search"></i>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div class="box">
      <div class="tags is-centered are-large">
        <h2 class="is-large">Extracted Text</h2>
      </div>
      <div class="field has-addons">
        <div class="control is-expanded">
          <p class="is-medium"> {{ extracted.Payload }}</p>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { VueSvgGauge } from 'vue-svg-gauge';
import { ref } from '@vue/composition-api';
import { useRouter } from '@u3u/vue-hooks';

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { router } = useRouter();
    const url = ref('');
    const file = ref('');
    let extracted = ref('');
    // http://ec2-54-255-174-221.ap-southeast-1.compute.amazonaws.com
    const BASE_URL = 'http://ec2-54-169-217-226.ap-southeast-1.compute.amazonaws.com:5001';
    const API_URL = `${BASE_URL}/api/v1/predict/with_url `;
    const API_DOC = `${BASE_URL}/api/v1/predict/with_document `;
    // eslint-disable-next-line no-unused-vars
    const API_TEXT = `${BASE_URL}api/v1/predict/with_text `;
    async function sendurl() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          data: url.value,
        }),
      });
      extracted = await response.json();
      console.log('data', extracted.data.predictions[0][0]);
    }
    async function senddoc() {
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch(API_DOC, {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
        },
        body: JSON.stringify({
          filename: file.name,
        }),
      });
      extracted = await response.json();
      console.log(extracted);
    }
    senddoc();
    sendurl();

    return {
      extracted,
      url,
      sendurl,
      senddoc,
    };
  },
  name: 'ScanNews',
  data() {
    return {
      dialog_visible: false,
      uploaded: true,
      input_type: 'url',
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueSvgGauge,
  },
  methods: {
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
    onChangeFileUpload() {
      this.uploaded = false;
      console.log(this.file);
      const index = 0;
      [this.file] = this.$refs.file.files;
      this.file = this.$refs.file.files[index];
      console.log(this.file);
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
