<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Zoom In"
      :shortkey="['ctrl', '+']"
      @action="zoomIn"
    />
    <MenuDropdownItem
      label="Zoom Out"
      :shortkey="['ctrl', '-']"
      @action="zoomOut"
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
        zoomIn () {
            this.$instances[this.activeContext].fire('zoom.in');
        },
        zoomOut () {
            this.$instances[this.activeContext].fire('zoom.out');
        },
    },
};
</script>

<style scoped>

</style>
