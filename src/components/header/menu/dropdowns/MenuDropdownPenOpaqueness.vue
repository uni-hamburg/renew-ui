<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="100%"
      @action="setPenOpaqueness('1')"
    />
    <MenuDropdownItem
      label="90%"
      @action="setPenOpaqueness('0.9')"
    />
     <MenuDropdownItem
      label="80%"
      @action="setPenOpaqueness('0.8')"
    />
    <MenuDropdownItem
      label="70%"
      @action="setPenOpaqueness('0.7')"
    />
     <MenuDropdownItem
      label="60%"
      @action="setPenOpaqueness('0.6')"
    />
    <MenuDropdownItem
      label="50%"
      @action="setPenOpaqueness('0.5')"
    />
     <MenuDropdownItem
      label="40%"
      @action="setPenOpaqueness('0.4')"
    />
    <MenuDropdownItem
      label="30%"
      @action="setPenOpaqueness('0.3')"
    />
     <MenuDropdownItem
      label="20%"
      @action="setPenOpaqueness('0.2')"
    />
    <MenuDropdownItem
      label="10%"
      @action="setPenOpaqueness('0.1')"
    />
    <MenuDropdownItem
      label="0%"
      @action="setPenOpaqueness('0')"
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
        setPenOpaqueness (attribute) {
            this.$instances[this.activeContext].fire('penOpaqueness.opacity',
              attribute);
        },
    },
};
</script>

<style>
</style>
