<template>
  <div class="inner">
    <Photo v-for="(photo, key) in photos" v-bind:key="key" :img-id="photo.imgId" :model="photo.model" :staff="photo.staff" />
  </div>
</template>

<script>
import Photo from '@/components/Photo'
export default {
  name: 'PageGallery',
  components: {Photo},
  data () {
    return {
      photos: [
        {imgId: '01', model: 'Hanaoka Aimi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
        {imgId: '02', model: 'Onishi Satsuki & Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato'},
        {imgId: '03', model: 'W2W (Adesso co., ltd)', staff: 'support by Sato Manato'},
        {imgId: '04', model: 'Kanzaki Marin (Adesso co., ltd)', staff: 'support by Sato Manato, Hachinohe Reira / hair&makeup by Shimamura Kiyomi'},
        {imgId: '05', model: 'Yoshinaga Ayuri (Adesso co., ltd)', staff: 'support by Sato Manato, Hachinohe Reira / hair&makeup by Shimamura Kiyomi'},
        {imgId: '06', model: 'Hanaoka Aimi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
        {imgId: '07', model: 'Yoshinaga Ayuri (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Kamijo Shinya'},
        {imgId: '08', model: 'Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
        {imgId: '09', model: 'Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
        {imgId: '10', model: 'Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
        {imgId: '11', model: 'Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
        {imgId: '12', model: 'Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},

        {imgId: '13', model: 'Yoshinaga Ayuri (Adesso co., ltd)', staff: 'support by Sato Manato, Hachinohe Reira / hair&makeup by Shimamura Kiyomi'},
        {imgId: '14', model: 'Watanabe Erena (Adesso co., ltd)', staff: 'support by Hachinohe Reira / hair&makeup by Shimamura Kiyomi'},
        {imgId: '15', model: 'Kikuchi Reina (Adesso co., ltd)', staff: 'support by moriq / hair&makeup by Kamino Shinya'},
        {imgId: '17', model: 'Kikuchi Reina (Adesso co., ltd)', staff: 'support by moriq / hair&makeup by Kamino Shinya'},
        {imgId: '18', model: 'Kanzaki Marin (Adesso co., ltd)', staff: 'support by Sato Manato, Hachinohe Reira / hair&makeup by Shimamura Kiyomi'},
        {imgId: '19', model: 'Natsume Aoi (Adesso co., ltd)', staff: 'support by Sato Manato / hair&makeup by Shimamura Kiyomi'},
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.inner {
  max-width: 1100px;
  margin: 0 auto;
}
.inner div {
  margin-bottom: 50px;
}
</style>
