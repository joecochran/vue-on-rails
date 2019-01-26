import Vue from 'vue';
import App from '../App.vue';
import store from '../store';
import router from '../router';

Vue.config.productionTip = false;

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#index');
});
