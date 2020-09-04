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
          <a class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/admin">Journalist</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/history">History</router-link>
          </a>
        </div>
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

.a {
  color: inherit;
  text-decoration: none;
}
</style>
