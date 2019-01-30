<template>
  <div
    class="rnw-menu-dropdown-item"
    v-shortkey="shortkey"
    @shortkey="emitAction($event)"
    @click="emitAction($event)"
  >
    <span class="rnw-menu-dropdown-item-label">{{ label }}</span>
    <span class="rnw-menu-dropdown-item-shortkey">{{ shortkeyHint }}</span>
  </div>
</template>

<script>
export default {
    name: 'MenuDropdownItem',
    props: ['label', 'shortkey'],
    data () {
        return {};
    },
    methods: {
        emitAction: function (e) {
            e.preventDefault();
            this.$emit('action');
        },
    },
    computed: {
        shortkeyHint: function () {
            if (Array.isArray(this.shortkey)) {
                return this.shortkey.join('+');
            }
            return '';
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
  line-height: 20px;
  text-decoration: none;
  min-width: 100px;

  &:hover, &:active, &.active {
    background-color: #eee;
  }
}
.rnw-menu-dropdown-item-shortkey {
  font-family: 'Source Code Pro', monospace;
  padding-left: 24px;
  font-size: 12px;
  color: #999;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
