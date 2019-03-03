import Vue from 'vue';
import Router from 'vue-router';
import Home from 'pages/Home';
import About from 'pages/About';
import WorksLayout from 'components/layouts/WorksLayout';
import Works from 'pages/Works';
import WorksSingle from 'pages/WorksSingle';
import PageNotFound from 'pages/PageNotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/works',
      component: WorksLayout,
      children: [
        {
          path: '/',
          name: 'Works',
          component: Works,
        },
        {
          path: ':slug',
          name: 'WorksSingle',
          component: WorksSingle,
        },
      ],
    },
    {
      path: '*',
      name: 'Not Found',
      component: PageNotFound,
      title: 'Not Found',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
