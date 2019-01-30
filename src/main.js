import Vue from 'vue';
import VueShortkey from 'vue-shortkey';

import App from './App.vue';
import store from './store';

Vue.use(VueShortkey);

Vue.config.productionTip = false;

window.vm = new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
