<template>
  <div id="app">
    <Workspace/>
  </div>
</template>

<script>
import Workspace from './components/Workspace.vue';

export default {
    components: {
        Workspace,
    },
};
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
