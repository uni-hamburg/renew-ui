<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Run Simulation"
      :shortkey="['ctrl', 'r']"
      @action="runSimulation"
    />
    <MenuDropdownItem
      label="Simulation Step"
      :shortkey="['ctrl', 'i']"
      disabled="true"
    />
    <MenuDropdownItem
      label="Halt Simulation"
      :shortkey="['ctrl', 'h']"
      disabled="true"
    />
    <MenuDropdownItem
      label="Stop Simulation"
      :shortkey="['ctrl', 'alt', 't']"
      @action="stopSimulation"
    />
  </MenuDropdown>
</template>

<script>
import { mapState } from 'vuex';

import { contexts } from '../../../../App.vue';
import MenuDropdown from '../MenuDropdown';
import MenuDropdownItem from '../MenuDropdownItem';


export default {
    name: 'MenuDropdownView',
    components: {
        MenuDropdown,
        MenuDropdownItem,
    },
    computed: mapState([ 'activeContext' ]),
    mounted: function () {
        const modelerInstance = this.$instances[contexts.modeling];
        const simulatorInstance = this.$instances[contexts.simulating];

        simulatorInstance.on('attach.end', () => {
            const data = modelerInstance.get('exporter').getExport();
            if (!data.elements || !data.elements.length) {
                // TODO use statusbar for this
                alert('Nothing to simulate.');
                return;
            }
            simulatorInstance.fire('import', { data }, true);
        });
    },
    methods: {
        runSimulation: function () {
            this.$store.commit('setActiveContext', contexts.simulating);
        },
        stopSimulation: function () {
            this.$store.commit('setActiveContext', contexts.modeling);
        },
    },
};
</script>

<style scoped>

</style>
