
<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Arial"
      @action="setFontFamily('arial')"
    />
    <MenuDropdownItem
      label="Monospace"
      @action="setFontFamily('monospace')"
    />
    <MenuDropdownItem
      label="Cursive"
      @action="setFontFamily('cursive')"
    />
    <MenuDropdownItem
      label="Default"
      @action="setFontFamily('sans-serif')"
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
        setFontFamily (font) {
            this.$instances[this.activeContext].fire('textstyle.fontfamily',
            font);
        },
    },
};
</script>

<style>
</style>
