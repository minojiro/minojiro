import Vue from 'vue'
import Router from 'vue-router'
import PageGallery from '@/components/PageGallery'
import PageProfile from '@/components/PageProfile'
import PageContact from '@/components/PageContact'
import Page404 from '@/components/Page404'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'PageGallery',
      component: PageGallery,
      meta: { title: 'Photographer minoJiro (みのじろー)' },
    },
    {
      path: '/profile',
      name: 'PageProfile',
      component: PageProfile,
      meta: { title: 'Profile | Photographer minoJiro (みのじろー)' },
    },
    {
      path: '/contact',
      name: 'PageContact',
      component: PageContact,
      meta: { title: 'Contact | Photographer minoJiro (みのじろー)' },
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404,
      meta: { title: 'not found' },
    },
    { path: '*', redirect: '404' },
  ],
})

router.beforeEach((to, from, next)=>{
  document.title = to.meta.title;
  next();
})

export default router