<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Set Line Width 4"
      @action="setLineWidth('4px')"
    />
    <MenuDropdownItem
      label="Set Line Width 6"
      @action="setLineWidth('6px')"
    />
    <MenuDropdownItem
      label="Set Line Width 8"
      @action="setLineWidth('8px')"
    />
    <MenuDropdownItem
      label="Set Line Width 10"
      @action="setLineWidth('10px')"
    />
    <MenuDropdownItem
      label="set default"
      @action="setLineWidth('2px')"
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
        MenuDropdownSeparator,
    },
    computed: mapState([ 'activeContext' ]),
    methods: {
        setLineWidth (width) {
            console.log('inside fucntion setLineWidth', width);
            this.$instances[this.activeContext].fire('setLineWidth.width',
              width);
        },
    },
};
</script>

<style>
</style>
