<template>
  <div id="rnw-app">
    <Header />
    <div
      id="rnw-workspace"
      ref="workspace"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PluginPT from 'renew-formalism-pt';

import Header from './components/header/Header';

export const contexts = {
    drawing: 'draw',
    simulation: 'simulate',
};

export default {
    components: {
        Header,
    },
    computed: mapState(['activeContext']),
    watch: {
        activeContext: function (context) {
            switch (context) {
                case contexts.drawing:
                    this.$simulator.detach();
                    this.$modeler.attachTo(this.$refs.workspace);
                    break;
                case contexts.simulation:
                    this.$modeler.detach();
                    this.$simulator.attachTo(this.$refs.workspace);
                    break;
            }
        },
    },
    mounted: function () {
        // Initialize Drawing
        this.$modeler.addFormalism(new PluginPT());
        this.$store.commit('changeContext', contexts.drawing);
    },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Source+Code+Pro:400,600');
</style>

<style lang="scss">
html, body, #rnw-app, .rnw-container {
  height: 100%;
  width: 100%;
  margin: 0;
}
#rnw-app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
#rnw-workspace {
  flex-grow: 1;
}
#rnw-simulation .djs-container {
  background-color: lavender;
}
</style>
