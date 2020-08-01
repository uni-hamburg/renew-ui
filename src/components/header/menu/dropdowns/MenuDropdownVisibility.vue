<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="visible"
      @action="setVisibility('visible')"
    />
    <MenuDropdownItem
      label="invisible"
      @action="setVisibility('hidden')"
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
        setVisibility (attribute) {
            this.$instances[this.activeContext].fire('visibility.attribute',
              attribute);
        },
    },
};
</script>

<style>
</style>
