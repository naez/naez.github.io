import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Catalog from '@/pages/Catalog';
import Projects from '@/pages/Projects';
import News from '@/pages/News';
import News_1 from '@/pages/News/News_1';
import Contacts from '@/pages/Contacts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    }, {
      path: '/about',
      name: 'About',
      component: About,
    }, {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
    }, {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
    }, {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    }, {
      path: '/news',
      name: 'News',
      component: News,
    }, {
      path: '/news/news_1',
      name: 'News_1',
      component: News_1,
    },
  ],
});
