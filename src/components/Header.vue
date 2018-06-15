<template>
  <div class="header-wrap" :class="{'pos-down': posDown}">
    <header>
      <h1><router-link v-bind:to="{ name : 'PageGallery'}">minoJiro</router-link></h1>
      <nav>
        <ul>
          <li><router-link v-bind:to="{ name : 'PageGallery'}">gallery</router-link></li>
          <li><router-link v-bind:to="{ name : 'PageProfile'}">introduction</router-link></li>
          <li><router-link v-bind:to="{ name : 'PageContact'}">contact</router-link></li>
          <li><a href="https://twitter.com/the_minojiro" target="_blank">twitter</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      posDown: true,
    }
  },
  mounted () {
    window.onscroll = () => {
      this.posDown = document.documentElement.scrollTop < 50;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap {
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  padding: 0 20px;
  width: 100%;
  z-index: 1;
  transform: translateY(50px);
  transition: transform 1s ease;
}

header {
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;
  /* text-align: center; */
}

h1 {
  flex: 1;
  font-size: 20px;
  margin-bottom: 10px;
}

ul:hover a:not(:hover) {
  opacity: 0.5;
}

li {
  font-size: 12px;
  display: inline-block;
}

li:nth-last-child(n+2) {
  margin-right: 10px;
}

a {
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.2s ease;
}

@media screen and (min-width: 980px) {
  .header-wrap.pos-down {
    transform: translateY(150px);
  }

  header {
    display: flex;
  }

  h1 {
    margin-bottom: 0px;
    font-size: 30px;
  }

  ul {
    display: flex;
  }

  li {
    font-size: 14px;
  }
}
</style>
