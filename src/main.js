import { library } from '@fortawesome/fontawesome-svg-core';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import App from './App.vue';

Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faStar, regularStar);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
