<template>
  <div class="list">
    <article v-for="photo in photos" :key="photo.id">
      <PhotoItem :src="photo.src" :model="photo.model" :staff="photo.staff" />
    </article>
  </div>
</template>

<script>
import PhotoItem from '@/components/PhotoItem'
import apiPhotos from '@/api/photos'

export default {
  components: {
    PhotoItem,
  },
  async asyncData(context) {
    return {
      photos: await apiPhotos.getPhotos(),
    }
  },
  head () {
    return {
      title: 'Photographer minoJiro (みのじろー)',
    }
  },
}
</script>

<style scoped>
.list > article:nth-last-child(n + 2) {
  margin-bottom: 50px;
}
</style>
