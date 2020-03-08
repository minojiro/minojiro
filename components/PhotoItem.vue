<template>
  <div>
    <div class="photo" :class="{loaded}" ref="photo">
      <picture>
        <source type="image/webp" :srcset="webpSrcset">
        <img
          @load="startLoad"
          :srcset="srcset"
          :src="srcS" alt="">
      </picture>
    </div>
    <div class="caption" v-if="hasCaption" :class="{loaded}">
      <h2 class="model">{{model}}</h2>
      <p class="staff">{{staff}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoItem',
  props: ['src', 'model', 'staff'],
  data () {
    return {
      loaded: false,
      scrollTop: 0,
    }
  },
  computed: {
    srcS() {
      return `${this.src}?w=750`
    },
    srcset() {
      return `
        ${this.src}?w=750 640w,
        ${this.src}`
    },
    webpSrcset() {
      return `
        ${this.src}?fm=webp&w=750&fm=webp 640w,
        ${this.src}?fm=webp`
    },
    hasCaption() {
      return !!(this.model || this.staff)
    },
    backgroundImage() {
      return `url(${this.src})`
    },
  },
  methods: {
    startLoad () {
      this.loaded = true
    },
  },
}
</script>

<style scoped>
.photo {
  position: relative;
  border: 1px dashed #ccc;
  background: #fcfcfc;
  overflow: hidden;
  transition: border 1s ease;
}
.photo img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.photo.loaded {
  border-color: transparent;
}
.photo.loaded img {
  opacity: 1;
}
.photo:before {
  content:'';
  padding-top: 75%;
  display: block;
}
.photo:not(.loaded) .photo-inner {
  opacity: 0;
}
.photo-inner {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  transition: all 1s ease;
}
.caption {
  margin-top: 12px;
  align-items: center;
  color: #999;
  font-size: 10px;
}
.model {
  flex: 1;
}
.caption p {
  transition: all 0.5s ease;
}
.caption .model {
  transition-delay: 0.5s;
  margin-bottom: 7px;
}
.caption .staff {
  transition-delay: 1s;
  line-height: 1.3;
}
.caption:not(.loaded) p {
  opacity: 0;
}
@media screen and (min-width: 980px) {
  header {
    display: flex;
  }
  .caption {
    display: flex;
    margin-top: 10px;
  }
  .caption .model {
    margin-bottom: 0;
    font-size: 14px;
  }
}
</style>
