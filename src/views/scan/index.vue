<template>
    <div class="box">
      <div class="tags is-centered are-large">
        <span class="tag is-dark">Images</span>
        <span class="tag is-dark">Text</span>
        <span class="tag is-dark">URL</span>
    </div>
    <div class="field has-addons ">
  <div class="control is-expanded">
    <input class="input" type="text" placeholder="Place URL Here!">
  </div>
  <div class="control">
    <a class="button is-info">
      search
      <span class="icon">
        <i class="fas search"></i>
      </span>
    </a>
  </div>
</div>
  </div>
</template>
<script>
export default {
  name: 'ScanNews',
};

</script>
<style scoped>
.box {
  margin-top: 5%;
  margin-left:27%;
  margin-right:27%;
  background-color: rgb(56, 101, 131);
}
</style>
