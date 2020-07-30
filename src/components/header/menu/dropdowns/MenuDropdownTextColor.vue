
<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Blue"
      @action="setTextColor('blue')"
    />
    <MenuDropdownItem
      label="Red"
      @action="setTextColor('red')"
    />
    <MenuDropdownItem
      label="Green"
      @action="setTextColor('green')"
    />
    <MenuDropdownItem
      label="Black"
      @action="setTextColor('#000')"
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
        setTextColor (color) {
            this.$instances[this.activeContext].fire('textstyle.textcolor',
            color);
        },
    },
};
</script>

<style>
</style>
