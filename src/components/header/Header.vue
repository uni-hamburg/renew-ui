<template>
  <div class="rnw-header">
    <Logo />
    <div class="rnw-header-bars">
      <TitleBar />
      <MenuBar />
    </div>
  </div>
</template>

<script>
    import Logo from './Logo';
    import MenuBar from './MenuBar';
    import TitleBar from './TitleBar';

    export default {
        name: 'Header',
        components: {
            MenuBar,
            Logo,
            TitleBar
        },
    };
</script>

<style>
  .rnw-header {
    background: #FAFAFA;
    border-bottom: solid 1px #CCC;
    display: flex;
  }
  .rnw-header-bars {
    flex-grow: 2;
  }
</style>
