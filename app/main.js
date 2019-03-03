import Vue from 'vue';
import ScrollReveal from 'scrollreveal';
import VueScrollTo from 'vue-scrollto';
import router from './router';
import titleMixin from './mixins/title';
import descriptionMixin from './mixins/description';
import App from './App';

import './assets/styles/app.scss';

Vue.mixin(titleMixin);
Vue.mixin(descriptionMixin);
Vue.config.productionTip = false;
Vue.use(VueScrollTo, {
  duration: 1000,
  offset: 0,
  easing: 'ease-in-out',
});

window.sr = ScrollReveal();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
