
<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Fill Blue color"
      @action="fillShapeColor('blue')"
    />
    <MenuDropdownItem
      label="Fill Red color"
      @action="fillShapeColor('red')"
    />
    <MenuDropdownItem
      label="Fill Green color"
      @action="fillShapeColor('green')"
    />
    <MenuDropdownItem
      label="Fill Black color"
      @action="fillShapeColor('#000')"
    />
    <MenuDropdownItem
      label="No Fill(default)"
      @action="fillShapeColor('#fff')"
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
        fillShapeColor (color) {
            this.$instances[this.activeContext].fire('fillColor.color',
            color);
        },
    },
};
</script>

<style>
</style>
