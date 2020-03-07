<template>
  <div class="page">
    <div class="photo-wrap">
      <PhotoItem src="/minojiro.jpg" />
    </div>
    <h2 class="name">みのじろー / minoJiro</h2>
    <p class="desc">写真家。1990年生まれ。愛知県出身。<br>東京ビジュアルアーツ写真学科コマーシャルフォト専攻卒業後、主に広告やエディトリアルの分野でポートレートを中心に撮影しています。撮影のご依頼などはお問い合わせページからどうぞ。</p>
  </div>
</template>

<script>
import PhotoItem from '@/components/PhotoItem'

export default {
  components: {
    PhotoItem,
  },
  head () {
    return {
      title: 'みのじろーについて | Photographer minoJiro (みのじろー)',
    }
  },
}
</script>

<style scoped>
.page {
  max-width: 640px;
  margin: 0 auto;
}
.photo-wrap {
  margin-bottom: 55px;
}
.name {
  margin-bottom: 20px;
}
.desc {
  font-family: sans-serif;
  font-size: 14px;
  line-height: 2;
}
</style>
