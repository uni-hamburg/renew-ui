import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeContext: null,
        drawingTitle: null,
        formalisms: [],
    },
    mutations: {
        setActiveContext: function (state, context) {
            state.activeContext = context;
        },
        setDrawingTitle: function (state, title) {
            state.drawingTitle = title;
        },
        setFormalisms: function (state, formalisms) {
            state.formalisms = formalisms;
        },
    },
    actions: {

    },
    getters: {

    },
});
