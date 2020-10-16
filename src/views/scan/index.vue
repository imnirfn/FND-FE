/* eslint-disable no-alert */
<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <button @click="inputType('url')" class="button is-rounded">URL</button>
          <button @click="inputType('text')" class="button is-rounded">Text</button>
          <button @click="inputType('document')" class="button is-rounded">Documents/Images</button>
        </div>
      </div>
      <div class="container">
      <div class="columns">
        <h1 class="title is-centered column">Fake-O-Meter-Inator</h1>
      </div>
      <VueSvgGauge
          class="mini-gauge"
          :start-angle="-90"
          :end-angle="90"
          :value="gaugemeter"
          :separator-step="25"
          :separator-thickness="1"
          :gauge-color="[{ offset: 0, color: '#B22222'}, { offset: 100, color: '#32CD32'}]"
          :scale-interval="10"
          :inner-radius="65"
          base-color="#d0cdcd"
        >
          <div class="inner-text ">
            <span class="has-text-white" v-if="executed">START</span>
            <span class="has-text-white" v-else>{{gaugemeter}}%</span>
          </div>
        </VueSvgGauge>
        </div>
        <div class="container" style="width: 62vh">
          <div class="columns is-centered" >
            <p class="subtitle has-text-centered has-text-danger column">Fake</p>
            <p class="subtitle has-text-centered has-text-primary column">Authentic</p>
          </div>
        </div>
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
          <textarea class="textarea is-info is-rounded"
          placeholder="Article text goes here"
          v-model="articleText"></textarea>
        </div>
        <div class="control">
          <a class="button is-info is-rounded" @click="sendText">
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

    <div :class="{'is-active': loading}" class="pageloader">
      <span class="title">Fetching results..</span>
    </div>

  </div>
</template>
<script>
import { VueSvgGauge } from 'vue-svg-gauge';
import { ref } from '@vue/composition-api';
import { useRouter } from '@u3u/vue-hooks';
import { sendURL, sendDoc, sendText } from '../../api/scan';

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { router } = useRouter();
    const url = ref('http://13.212.137.199:5001');
    const extracted = ref('');

    async function sendurl() {
      try {
        this.loading = true;
        const response = await sendURL(url.value);
        console.log(response);

        const pred = response.data.data.predictions.toFixed(2);
        this.gaugemeter = parseFloat((100 * (1 - pred)).toFixed(2));

        this.executed = false;
        console.log(pred);
        console.log(this.gaugemeter);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }

    async function senddoc() {
      const formData = new FormData();
      formData.append('filename', this.file, this.file.name);

      try {
      // eslint-disable-next-line no-unused-vars
        const response = await sendDoc(formData);
      } catch (err) {
        console.log(err);
      }
    }

    function onChangeFileUpload() {
      this.uploaded = false;
      [this.file] = this.$refs.file.files;
    }

    return {
      extracted,
      url,
      sendurl,
      senddoc,
      onChangeFileUpload,
    };
  },
  name: 'ScanNews',
  data() {
    return {
      dialog_visible: false,
      uploaded: true,
      input_type: 'url',
      gaugemeter: 0,
      executed: true,
      pred: 0,
      loading: false,
      articleText: '',
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
    async sendText() {
      this.articleText = this.articleText.replace(/["“‘”]/g, "'");
      this.articleText = this.articleText.replace(/(\r\n|\n|\r)/gm, '');
      console.log(this.articleText);
      try {
        this.loading = true;
        const response = await sendText(this.articleText);
        console.log(response);

        const pred = response.data.data.predictions.toFixed(2);
        this.gaugemeter = parseFloat((100 * (1 - pred)).toFixed(2));

        this.executed = false;
        console.log(pred);
        console.log(this.gaugemeter);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
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

.inner-text {
  height: 100%;
  color: 100%;
  span {
    max-width: 100px;
    color: red;
  }}
</style>
