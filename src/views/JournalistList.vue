<template>
  <div class="mt-6 container" >
      <h1 class="title">Our Hardworking Investigative Journalists</h1>
      <p class="mt-4 subtitle">
        These are the important people behind the semi-automated news &
        user-generated content validation process in Tinggitecc.
        They make sure our Machine Learning model trains only on
        fresh, quality and correct real world data everyday.
       </p>
    <div class="columns is-5 mt-5">
      <div
      v-for="journalist in journalists"
      :key="journalist"
      class="card column ml-2"
      >
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="Journalist Avatar">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ journalist.name }}</p>
            <p class="subtitle is-6">
              <fa icon="['fab', 'twitter']"/>
              {{ journalist.twitter }}
            </p>
          </div>
        </div>

        <div class="card-content">
          {{ journalist.details }}
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      journalists: [
        {
          name: 'Katie Sandars',
          details: 'Katie Sandars is the managing Investigative Journalist of TinggiTecc. Previously, she fact-checked talking heads and opinion-shapers for PunditFact as well as the Legislature and Gov. Rick Scott for PolitiFact Florida, reporting from the Tallahassee bureau of the Tampa Bay Times and Miami Herald. She is a graduate of the University of Florida, where she majored in English and journalism.',
          twitter: '@katie',
        },
        {
          name: 'Joe Dunn',
          details: 'Joe Dunn is a contributing fact-checker to TinggiTecc. He was most recently an editor at Automotive News, where he shared the 2015 Grand Neal Award for the publication’s coverage of General Motors’ ignition switch recall crisis and helped forge a partnership with Michigan State University to sustain scholastic journalism in Detroit.',
          twitter: '@joe',
        },
        {
          name: 'Tom Jerr',
          details: 'Tom Jerr is a contributing fact-checker for TinggiTecc. Previously, he was a fact-checker for PolitiFact Wisconsin.',
          twitter: '@tom',
        },
      ],
    };
  },
};
</script>
