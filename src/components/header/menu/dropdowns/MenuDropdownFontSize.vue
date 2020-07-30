<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="10"
      @action="setFontSize('10px')"
    />
    <MenuDropdownItem
      label="12"
      @action="setFontSize('12px')"
    />
    <MenuDropdownItem
      label="14"
      @action="setFontSize('14px')"
    />
    <MenuDropdownItem
      label="16"
      @action="setFontSize('16px')"
    />
    <MenuDropdownItem
      label="18"
      @action="setFontSize('18px')"
    />
  </MenuDropdown>
</template>

<script>
import { mapState } from 'vuex';
import MenuDropdown from '../MenuDropdown';
import MenuDropdownItem from '../MenuDropdownItem';

export default {
    name: 'MenuDropdownView',
    components: {
        MenuDropdown,
        MenuDropdownItem,
    },
    computed: mapState([ 'activeContext' ]),
    methods: {
        setFontSize (fontsize) {
            this.$instances[this.activeContext].fire('textstyle.fontsize',
              fontsize);
        },
    },
};
</script>

<style>
</style>
