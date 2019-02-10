import Vue from 'vue';
import VueShortkey from 'vue-shortkey';

import { Drawing, Simulation } from 'renew-lib';

import App from './App.vue';
import store from './store';

Vue.use(VueShortkey);

Vue.config.productionTip = false;

Vue.prototype.$drawing = new Drawing();
Vue.prototype.$simulation = new Simulation();

window.vm = new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
