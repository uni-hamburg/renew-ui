import Vue from 'vue';
import VueShortkey from 'vue-shortkey';

import { Modeler, Simulator } from 'renew-lib';
import PluginBase from 'renew-formalism-base';
import PluginPT from 'renew-formalism-pt';

import App from './App.vue';
import store from './store';

import './assets/styles/helpers.scss';

const modeler = new Modeler();
modeler.addFormalism(new PluginBase());
modeler.addFormalism(new PluginPT());

const simulator = new Simulator();

Vue.prototype.$instances = {
    modeler,
    simulator,
};

Vue.use(VueShortkey);

Vue.config.productionTip = false;

window.vm = new Vue({
    store,
    render: (h) => h(App),
}).$mount('#app');
