<template>
  <div
    v-shortkey="shortkey"
    class="rnw-menu-dropdown-item"
    :class="{ 'rnw-menu-dropdown-item-disabled': disabled }"
    @shortkey="emitAction($event)"
    @click="emitAction($event)"
  >
    <span class="rnw-menu-dropdown-item-icon">
      {{ icon }}
    </span>
    <span class="rnw-menu-dropdown-item-label">
      {{ label }}
    </span>
    <span class="rnw-menu-dropdown-item-shortkey">
      {{ shortkeyHint }}
    </span>
  </div>
</template>

<script>
export default {
    name: 'MenuDropdownItem',
    props: [
        'label',
        'icon',
        'shortkey',
        'disabled',
    ],
    data () {
        return {};
    },
    computed: {
        shortkeyHint: function () {
            if (Array.isArray(this.shortkey)) {
                return this.shortkey.join('+');
            }
            return '';
        },
    },
    methods: {
        emitAction: function (e) {
            e.preventDefault();
            if (!this.disabled) {
                this.$emit('action');
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.rnw-menu-dropdown-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 16px;
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
.rnw-menu-dropdown-item-icon {
  flex-shrink: 0;
  width: 22px;
  padding-right: 6px;
  text-align: center;
}
.rnw-menu-dropdown-item-label {
  flex-grow: 1;
}
.rnw-menu-dropdown-item-shortkey {
  font-family: 'Source Code Pro', monospace;
  padding-left: 24px;
  font-size: 12px;
  color: #999;
  font-weight: 600;
  text-transform: uppercase;
}

.rnw-menu-dropdown-item-disabled {
  pointer-events: none;
  color: #999;
}
</style>
