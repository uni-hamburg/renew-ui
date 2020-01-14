
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
import PluginBase from 'renew-formalism-base/src/core/PluginBase';
import PluginPT from 'renew-formalism-pt/src/core/PluginPT';
import Modeler from 'renew-lib/src/Modeler';
import Simulator from 'renew-lib/src/Simulator';
import { contexts } from '../../../../App.vue';
import { mapState } from 'vuex';
import MenuDropdown from '../MenuDropdown';
import MenuDropdownItem from '../MenuDropdownItem';
import MenuDropdownSeparator from '../MenuDropdownSeparator';

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
        console.log('inside fucntion fillBlackColor',color);
          this.$instances[this.activeContext].fire('fillColor.color',color);
      },    
  },
};
</script>

<style>
</style>
