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
    <MenuDropdownSeparator
      v-if="formalisms && formalisms.length"
    />
    <MenuDropdownItem
      v-for="formalism in formalisms"
      :key="formalism.id"
      :label="formalism.name"
    />
  </MenuDropdown>
</template>

<script>
import { mapState } from 'vuex';

import { contexts } from '../../../../App.vue';
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
    computed: mapState([
        'activeContext',
        'formalisms',
    ]),
    mounted: function () {
        const modelerInstance = this.$instances[contexts.modeling];
        const simulatorInstance = this.$instances[contexts.simulating];

        simulatorInstance.on('formalisms.updated', (context) => {
            this.$store.commit('setFormalisms', context.formalisms);
        });

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
