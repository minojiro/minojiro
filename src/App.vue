<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  mounted () {
  },
  name: 'App',
  components: {Header},
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition-property: opacity, transform;
  transition-duration: .75s;
}

.fade-enter-active {
  transition-delay: .75s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(40px);
}

#app {
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 150px;
  margin-bottom: 50px;
}
body {
  margin: 0;
  padding: 0 20px;
  font-family: 'Cochin', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.02em;
}
h1, h2, h3,h4,h5 {
  font-size: 1em;
  font-weight: normal;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
}
a {
  color: inherit;
}
@media screen and (min-width: 980px) {
  #app {
    padding-top: 300px;
  }
}
</style>
