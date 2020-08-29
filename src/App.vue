<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1>
            <b>FND-FE</b>
          </h1>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">About</a>
          <a class="navbar-item">Analytics</a>
          <a class="navbar-item">History</a>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Scan</a>

            <div class="navbar-dropdown">
              <a class="navbar-item">Images</a>
              <a class="navbar-item">Documents</a>
              <a class="navbar-item">Text</a>
              <a class="navbar-item" href="/scan">Url</a>
              <hr class="navbar-divider" />
              <a class="navbar-item">Report an issue</a>
            </div>
          </div>-->
        </div>

        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>-->
      </div>
    </nav>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Fake News Detector</h1>
          <h2 class="subtitle">With Deeplearning</h2>
        </div>
      </div>
    </section>
    <router-view/>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Copyright TinggiTecc 2020</strong>
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: white;
}
</style>
