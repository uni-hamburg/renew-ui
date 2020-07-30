<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="100%"
      @action="setFillOpaqueness('1')"
    />
    <MenuDropdownItem
      label="90%"
      @action="setFillOpaqueness('0.9')"
    />
     <MenuDropdownItem
      label="80%"
      @action="setFillOpaqueness('0.8')"
    />
    <MenuDropdownItem
      label="70%"
      @action="setFillOpaqueness('0.7')"
    />
     <MenuDropdownItem
      label="60%"
      @action="setFillOpaqueness('0.6')"
    />
    <MenuDropdownItem
      label="50%"
      @action="setFillOpaqueness('0.5')"
    />
     <MenuDropdownItem
      label="40%"
      @action="setFillOpaqueness('0.4')"
    />
    <MenuDropdownItem
      label="30%"
      @action="setFillOpaqueness('0.3')"
    />
     <MenuDropdownItem
      label="20%"
      @action="setFillOpaqueness('0.2')"
    />
    <MenuDropdownItem
      label="10%"
      @action="setFillOpaqueness('0.1')"
    />
    <MenuDropdownItem
      label="0%"
      @action="setFillOpaqueness('0')"
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
        setFillOpaqueness (attribute) {
            this.$instances[this.activeContext].fire('fillOpaqueness.opacity',
              attribute);
        },
    },
};
</script>

<style>
</style>
