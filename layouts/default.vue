<template>
  <div class="container">
    <AppHeader />
    <div class="content-wrap">
      <transition name="fade">
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  components: {
    AppHeader,
  },
  head () {
    return {
      title: 'Photographer minoJiro (みのじろー)',
      htmlAttrs: {
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        { hid: 'description', name: 'description', content: 'みのじろーのポートレート写真集。' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Photographer minoJiro (みのじろー)' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://minojiro.com' },
        { hid: 'og:title', property: 'og:title', content: 'Photographer minoJiro (みのじろー)' },
        { hid: 'og:description', property: 'og:description', content: 'みのじろーのポートレート写真集。' },
        // { hid: 'og:image', property: 'og:image', content: 'https://minojiro.com/ogp.jpg' },
      ],
    }
  },
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
.container {
  margin: 0 auto;
  max-width: 1100px;
}
.content-wrap {
  padding: 150px 0;
}
@media screen and (min-width: 980px) {
  .content-wrap {
    padding: 300px 0;
  }
}
</style>
