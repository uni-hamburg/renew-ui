import Vue from 'vue';
import VueShortkey from 'vue-shortkey';

import { Modeler, Simulator } from 'renew-lib';
import PluginBase from 'renew-formalism-base';
import PluginPT from 'renew-formalism-pt';

import App from './App.vue';
import store from './store';

const modeler = new Modeler();
modeler.addFormalism(PluginBase);
modeler.addFormalism(PluginPT);

const simulator = new Simulator();
simulator.addFormalism(PluginBase);
simulator.addFormalism(PluginPT);

Vue.prototype.$instances = {
    modeler,
    simulator,
};

Vue.use(VueShortkey);

Vue.config.productionTip = false;

window.vm = new Vue({
    store,
    render: (h) => h(App),
}).$mount('#rnw-app');
