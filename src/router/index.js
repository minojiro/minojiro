import Vue from 'vue'
import Router from 'vue-router'
import PageGallery from '@/components/PageGallery'
import PageProfile from '@/components/PageProfile'
import PageContact from '@/components/PageContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageGallery',
      component: PageGallery
    },
    {
      path: '/profile',
      name: 'PageProfile',
      component: PageProfile
    },
    {
      path: '/contact',
      name: 'PageContact',
      component: PageContact
    },
  ]
})
