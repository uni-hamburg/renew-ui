import Vue from 'vue';
import VueShortkey from 'vue-shortkey';

import { Modeler, Simulator } from 'renew-lib';

import App from './App.vue';
import store from './store';

Vue.use(VueShortkey);

Vue.config.productionTip = false;

Vue.prototype.$modeler = new Modeler();
Vue.prototype.$simulator = new Simulator();

window.vm = new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
