import Vue from 'vue';
import Router from 'vue-router';
import PageHome from './components/PageHome.vue';
import PageContact from './components/PageContact.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: PageHome },
    { path: '/contact', component: PageContact },
  ],
});
