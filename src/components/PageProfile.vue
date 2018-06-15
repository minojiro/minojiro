<template>
  <div class="inner">
    <div class="movie">
      <Photo fname="minojiro.jpg" />
    </div>
    <div class="text">
      <p class="head">みのじろー / minoJiro</p>
      <p class="sentence">写真家、デザイナー。1990年生まれ。愛知県出身。<br>東京ビジュアルアーツ写真学科コマーシャルフォト専攻卒業後、主に広告やエディトリアルの分野でポートレートを中心に撮影しています。撮影のご依頼などは<router-link v-bind:to="{ name : 'PageContact'}">お問い合わせページ</router-link>からどうぞ。</p>
    </div>
  </div>
</template>

<script>
import Photo from '@/components/Photo'
export default {
  name: 'PageProfile',
  components: {Photo},
  mounted () {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inner {
  max-width: 650px;
  margin: 0 auto;
}
.movie {
  margin-bottom: 50px;
}
.text p.head {
  font-family: 'Cochin', serif;
}
.text p.sentence {
  font-family: sans-serif;
  margin-top: 20px;
  font-size: 14px;
  text-align: justify;
  line-height: 2;
  letter-spacing: 0.05em;
}
</style>
