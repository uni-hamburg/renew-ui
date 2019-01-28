<template>
  <div
    class="rnw-menu-dropdown"
    :class="{'active': isActive}"
  >
    <slot />
  </div>
</template>

<script>
export default {
    name: 'MenuDropdown',
    props: ['isActive'],
};
</script>

<style lang="scss">
.rnw-menu-dropdown {
  display: none;
  position: absolute;
  z-index: 1000;
  border-radius: 2px;
  border-top-left-radius: 0;
  background: #fff;
  border: 1px solid #ccc;
}
.rnw-menu-bar-item.active .rnw-menu-dropdown {
  display: block;
}
</style>
