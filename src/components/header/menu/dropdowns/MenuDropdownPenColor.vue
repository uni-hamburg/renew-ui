<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Set Pen color Blue"
      @action="setPenColor('blue')"
    />
    <MenuDropdownItem
      label="Set Pen color Red "
      @action="setPenColor('red')"
    />
    <MenuDropdownItem
      label="Set Pen color Green"
      @action="setPenColor('green')"
    />
    <MenuDropdownItem
      label="Set Pen color Black"
      @action="setPenColor('#000')"
    />
    <MenuDropdownItem
      label="Set Pen color default"
      @action="setPenColor('#fff')"
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
        setPenColor (color) {
            console.log('inside fucntion setPenColor', color);
            this.$instances[this.activeContext].fire('setPenColor.color',
            color);
        },
    },
};
</script>

<style>
</style>
