<template>
  <div id="app">
    <Header />
    <Workspace />
  </div>
</template>

<script>
import Workspace from './components/Workspace';
import Header from './components/header/Header';

export default {
    components: {
        Workspace,
        Header,
    },
};
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}
#app {
  font-family: Noto Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
