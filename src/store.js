import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeContext: null,
        drawingTitle: null,
        simulators: [],
    },
    mutations: {
        setActiveContext: function (state, context) {
            state.activeContext = context;
        },
        setDrawingTitle: function (state, title) {
            state.drawingTitle = title;
        },
        setSimulators: function (state, simulators) {
            state.simulators = simulators;
        },
    },
    actions: {

    },
    getters: {

    },
});
