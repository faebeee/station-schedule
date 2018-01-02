import Vue from 'vue';
import Router from 'vue-router';
// eslint-disable-next-line
import MainPage from '@/components/MainPage/MainPage.vue';
import SettingsPage from '@/components/SettingsPage/Page.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },{
      path: '/setting',
      name: 'setting',
      component: SettingsPage,
    },
  ],
});
