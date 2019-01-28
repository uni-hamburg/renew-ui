<template>
  <a
    class="rnw-menu-dropdown-item"
    href="#"
    @click="emitClick($event)"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
    name: 'MenuDropdownItem',
    props: ['label'],
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
  display: block;
  padding: 4px 8px;
  cursor: pointer;
  white-space: nowrap;
  color: #333;
  text-decoration: none;
  min-width: 100px;

  &:hover, &:active, &.active {
    background-color: #eee;
  }
}
</style>
