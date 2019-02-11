import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeContext: null,
    },
    mutations: {
        changeContext: function (state, newContext) {
            state.activeContext = newContext;
        },
    },
    actions: {

    },
});
