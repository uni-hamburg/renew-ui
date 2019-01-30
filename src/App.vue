<template>
  <div id="rnw-app">
    <Header />
    <div id="rnw-workspace">
      <div
        id="rnw-drawing"
        class="rnw-canvas"
        v-show="isDrawing"
      />
      <div
        id="rnw-simulation"
        class="rnw-canvas"
        v-show="isSimulating"
      />
    </div>
  </div>
</template>

<script>
import PluginPT from 'renew-formalism-pt';
import { Drawing, Simulation } from 'renew-lib';

import Header from './components/header/Header';

const contexts = {
    drawing: 'draw',
    simulating: 'simulate',
};

export default {
    components: {
        Header,
    },
    data () {
        return {
            contexts,
            activeContext: contexts.drawing,
        };
    },
    mounted: function () {
        // Initialize Drawing
        const drawing = new Drawing('rnw-drawing');
        drawing.addFormalism(new PluginPT());
        window.drawing = drawing;

        // Initialize Simulation
        const simulation = new Simulation('rnw-simulation');
        window.drawing = simulation;
    },
    computed: {
        isDrawing: function () {
            return this.activeContext === contexts.drawing;
        },
        isSimulating: function () {
            return this.activeContext === contexts.simulating;
        },
    },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i|Source+Code+Pro:400,600');
</style>

<style lang="scss">
html, body, #rnw-app, .rnw-canvas {
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
