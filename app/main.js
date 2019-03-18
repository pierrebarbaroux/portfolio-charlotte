import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

import App from './App';
import titleMixin from './mixins/title';
import descriptionMixin from './mixins/description';
import router from './router';
import './assets/styles/app.scss';

Vue.mixin(titleMixin);
Vue.mixin(descriptionMixin);
Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  duration: 1000,
  offset: 0,
  easing: 'ease-in-out',
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
