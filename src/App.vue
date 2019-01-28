<template>
  <div id="rnw-app">
    <Header />
    <div id="rnw-workspace" />
  </div>
</template>

<script>
import PluginPT from 'renew-formalism-pt';
import Drawing from 'renew-lib';

import Header from './components/header/Header';

export default {
    components: {
        Header,
    },
    mounted: function () {
        const drawing = new Drawing('rnw-workspace');
        drawing.addFormalism(new PluginPT());
        window.drawing = drawing;
    },
};
</script>

<style>
html, body, #rnw-app, #rnw-workspace {
  height: 100%;
  margin: 0;
}
#rnw-app {
  font-family: Noto Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
