// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/js/common';
import './assets/scss/styles.sass';

Vue.config.productionTip = false;

Vue.component('features-slider', require('./components/FeaturesSlider.vue').default);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
