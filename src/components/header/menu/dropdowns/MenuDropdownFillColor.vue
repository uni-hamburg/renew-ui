
<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Fill Blue color"
      @action="fillBlackColor('blue')"
    />
    <MenuDropdownItem
      label="Fill Red color"
      @action="fillBlackColor('red')"
    />
    <MenuDropdownItem
      label="Fill Green color"
      @action="fillBlackColor('green')"
    />
    <MenuDropdownItem
      label="Fill Black color"
      @action="fillBlackColor('#000')"
    />
    <MenuDropdownItem
      label="No Fill(default)"
      @action="fillBlackColor('#fff')"
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
        fillBlackColor (color) {
            console.log('inside fucntion fillBlackColor', color);
            this.$instances[this.activeContext].fire('fillColor.color',
            color);
        },
    },
};
</script>

<style>
</style>
