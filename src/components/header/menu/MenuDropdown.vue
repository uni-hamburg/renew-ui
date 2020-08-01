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
    props: {
        isActive: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss">
.rnw-menu-dropdown {
  display: none;
  position: absolute;
  z-index: 1000;
  border-radius: 0 2px 2px 2px;
  margin-top: 2px;
  background: #fff;
  border: 1px solid #ccc;
}
.rnw-menu-bar-item.active .rnw-menu-dropdown {
  display: flex;
  flex-direction: column;
}
</style>
