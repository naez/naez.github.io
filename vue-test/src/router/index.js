import Vue from 'vue';
import Router from 'vue-router';
import Features from '@/pages/Features';
import About from '@/pages/About';
import ContactSupport from '@/pages/ContactSupport';
import UserGuide from '@/pages/UserGuide';
import PrivacyPolicy from '@/pages/PrivacyPolicy';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Features',
      component: Features,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/contact-support',
      name: 'ContactSupport',
      component: ContactSupport,
    }, {
      path: '/user-guide',
      name: 'UserGuide',
      component: UserGuide,
    }, {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy,
    },
  ],
});
