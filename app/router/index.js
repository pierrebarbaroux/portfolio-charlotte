import Vue from 'vue';
import Router from 'vue-router';

import About from 'pages/About';
import Home from 'pages/Home';
import PageNotFound from 'pages/PageNotFound';
import Works from 'pages/Works';
import WorksLayout from 'components/layouts/WorksLayout';
import WorksSingle from 'pages/WorksSingle';

Vue.use(Router);

const router = new Router({
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
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
