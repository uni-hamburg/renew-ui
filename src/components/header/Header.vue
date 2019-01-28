<template>
  <div class="rnw-header">
    <Logo />
    <div class="rnw-header-bars">
      <TitleBar />
      <MenuBar :drawing="drawing" />
    </div>
  </div>
</template>

<script>
import Logo from './Logo';
import MenuBar from './menu/MenuBar';
import TitleBar from './TitleBar';

export default {
    name: 'Header',
    components: {
        MenuBar,
        Logo,
        TitleBar,
    },
    props: ['drawing'],
};
</script>

<style>
.rnw-header {
  background: #fafafa;
  border-bottom: solid 1px #ccc;
  display: flex;
}
.rnw-header-bars {
  flex-grow: 2;
}
</style>
