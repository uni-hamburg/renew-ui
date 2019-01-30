import Vue from 'vue';
import Vuex from 'vuex';

import { contexts } from './App.vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        contexts,
        activeContext: contexts.drawing,
    },
    mutations: {
        changeContext: function (state, newContext) {
            state.activeContext = newContext;
        },
    },
    actions: {

    },
});
