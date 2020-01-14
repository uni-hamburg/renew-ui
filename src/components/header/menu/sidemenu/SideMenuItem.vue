<template>
  <div
    class="rnw-menu-bar-item"
    :class="{'active': isActive}"
  >
    <a
      class="rnw-menu-bar-item-label"
      href="#"
      @click="handleClick($event)"
      @mouseover="handleHover($event)"
    >
      {{ item.label }}
    </a>
    <component :is="item.dropdown" />
  </div>
</template>

<script>
export default {
    name: 'SideMenuItem',
    props: [ 'item', 'isActive' ],
    methods: {
        handleClick: function (e) {
            e.preventDefault();
            e.stopPropagation();
            this.$emit('click', this.item.id);
        },
        handleHover: function () {
            this.$emit('hover', this.item.id);
        },
    },
};
</script>

<style lang="scss" scoped>
.rnw-menu-bar-item {
  position: relative;
  font-size: 14px;
  user-select: none;

  .rnw-menu-bar-item-label {
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    outline: none;
    padding: 2px 8px;
  }
  &:hover, &:active, &.active {
    .rnw-menu-bar-item-label {
      background-color: #eee;
    }
  }
  &:active, &.active {
    .rnw-menu-bar-item-label {
      background-color: #eee;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}
</style>
