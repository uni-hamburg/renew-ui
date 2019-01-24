<template>
  <div class="rnw-logo">
    <div class="rnw-logo-img"></div>
  </div>
</template>

<script>
    import HeaderLogo from './Logo';

    export default {
        name: 'Logo',
        components: {
            HeaderLogo
        },
    };
</script>

<style>
  .rnw-logo {
    padding: 8px;
  }
  .rnw-logo-img {
    margin: 4px 0 4px 8px;
    width: 42px;
    height: 42px;
    content: url("../../assets/rnw-logo.svg");
  }
</style>
