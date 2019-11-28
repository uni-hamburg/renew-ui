<template>
  <div
    class="rnw-menu-sidemenu"
    :class="{'active': isActive}"
  >
    <slot />
  </div>
</template>

<script>
export default {
    name: 'MenuSidemenu',
    props: [ 'isActive' ],
};
</script>

<style lang="scss">
.rnw-menu-sidemenu {
  display: none;
  position: absolute;
  z-index: 1000;
  border-radius: 0 2px 2px 2px;
  margin-top: 2px;
  background: #fff;
  border: 1px solid #ccc;
}
.rnw-menu-bar-item.active .rnw-menu-sidemenu {
  display: flex;
  flex-direction: column;
}
</style>
