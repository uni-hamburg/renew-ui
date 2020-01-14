<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Set Line Width 4"
      @action="setLineWidth('4px')"
    />
    <MenuDropdownItem
      label="Set Line Width 6"
      @action="setLineWidth('6px')"
    />
    <MenuDropdownItem
      label="Set Line Width 8"
      @action="setLineWidth('8px')"
    />
    <MenuDropdownItem
      label="Set Line Width 10"
      @action="setLineWidth('10px')"
    />
    <MenuDropdownItem
      label="set default"
      @action="setLineWidth('2px')"
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
      setLineWidth (width) {
        console.log('inside fucntion setLineWidth',width);
        this.$instances[this.activeContext].fire('setLineWidth.width',width);
      },    
  },
};
</script>

<style>
</style>
