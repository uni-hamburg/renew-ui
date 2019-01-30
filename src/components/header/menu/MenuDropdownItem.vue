<template>
  <div
    class="rnw-menu-dropdown-item"
    @click="emitClick($event)"
  >
    <span class="rnw-menu-dropdown-item-label">{{ label }}</span>
    <span class="rnw-menu-dropdown-item-shortcut">{{ shortcut }}</span>
  </div>
</template>

<script>
export default {
    name: 'MenuDropdownItem',
    props: ['label', 'shortcut'],
    data () {
        return {};
    },
    methods: {
        emitClick: function (e) {
            e.preventDefault();
            this.$emit('click');
        },
    },
};
</script>

<style lang="scss" scoped>
.rnw-menu-dropdown-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 16px 6px 38px;
  cursor: pointer;
  white-space: nowrap;
  color: #333;
  font-size: 14px;
  letter-spacing: .2px;
  line-height: 20px;
  text-decoration: none;
  min-width: 100px;

  &:hover, &:active, &.active {
    background-color: #eee;
  }
}
.rnw-menu-dropdown-item-shortcut {
  padding-left: 24px;
  color: #666;
  font-weight: 600;
}
</style>
