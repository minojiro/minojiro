<template>
  <div>
    <div class="photo" :class="{loaded: loaded}" ref="photo">
      <div class="photo-inner" :style="background"></div>
    </div>
    <div class="caption" v-if="hasCaption" :class="{loaded: loaded}">
      <p class="model">{{model}}</p>
      <p class="staff">{{staff}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props: ['img-id', 'model', 'staff', 'fname'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      // imageUrl: 'http://minojiro.com/img/teaser1.jpg',
      loaded: false,
      scrollTop: 0,
      startLoading: false,
    }
  },
  mounted() {
    console.log('created!');
    window.addEventListener('scroll', this.scrollTopChanged);
    this.scrollTopChanged();
  },
  watch: {
    // scrollTop () {
    //   console.log(this.$refs.photo.getBoundingClientRect().top)
    // },
  },
  computed: {
    hasCaption() {
      return !!this.model || !!this.staff;
    },
    imagePath() {
      if(this.fname) {
        return require(`../assets/${this.fname}`);
      } else {
        const size = window.innerWidth >= 320 ? 'l' : 'm';
        return require(`../assets/photos/${size}/${this.imgId}.jpg`);
      }
    },
    background() {
      return this.loaded ? {backgroundImage: `url(${this.imagePath})`} : null;
      // return this.loaded ? {backgroundImage: `url(${this.imageUrl})`} : null;
    }
  },
  methods: {
    scrollTopChanged () {
      let app = this;
      setTimeout(function(){
        if(!app.startLoading && (app.$refs.photo.getBoundingClientRect().top - window.innerHeight < 0)){
          app.startLoad()
        }
      },1000)
    },
    startLoad () {
      let img = new Image();
      img.onload=()=>{
        this.loaded = true;
      }
      img.src = this.imagePath;
      this.startLoading = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.photo {
  position: relative;
  border: 1px dashed #ccc;
  background: #fcfcfc;
  overflow: hidden;
  transition: border 1s ease;
}
.photo.loaded {
  border-color: transparent;
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
  margin-top: 10px;
  align-items: center;
  color: #999;
}
.model {
  font-size: 14px;
  flex: 1;
}
.staff {
  font-size: 10px;
}
.caption p {
  transition: all 0.5s ease;
}
.caption .model {
  transition-delay: 0.5s;
  margin-bottom: 5px;
}
.caption .staff {
  transition-delay: 1s;
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
    
  }
  .caption .model {
    margin-bottom: 0;
  }
}
</style>
