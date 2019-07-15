<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Run Simulation"
      :shortkey="['ctrl', 'r']"
      :disabled="!formalisms || !formalisms.length"
      @action="runSimulation"
    />
    <MenuDropdownItem
      label="Simulation Step"
      :shortkey="['ctrl', 'i']"
      :disabled="!isSimulating"
      @action="step"
    />
    <MenuDropdownItem
      label="Halt Simulation"
      :shortkey="['ctrl', 'h']"
      :disabled="!isSimulating"
      @action="haltSimulation"
    />
    <MenuDropdownItem
      label="Terminate Simulation"
      :shortkey="['ctrl', 'alt', 't']"
      :disabled="!isSimulating"
      @action="terminateSimulation"
    />
    <MenuDropdownSeparator
      v-if="formalisms && formalisms.length"
    />
    <MenuDropdownItem
      v-for="formalism in formalisms"
      :key="formalism.id"
      :label="formalism.name"
      :icon="(formalism.id === activeFormalism) ? '✔' : ''"
      :disabled="isSimulating"
      @action="activateFormalism(formalism.id)"
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
    computed: {
        ...mapState([
            'activeContext',
            'formalisms',
            'activeFormalism',
        ]),
        isSimulating: function () {
            return this.activeContext === contexts.simulating;
        },
    },
    mounted: function () {
        const modelerInstance = this.$instances[contexts.modeling];
        const simulatorInstance = this.$instances[contexts.simulating];

        simulatorInstance.on('formalism.update', (context) => {
            // Make a copy so the object doesn't get reactive
            const formalisms = JSON.parse(JSON.stringify(context.formalisms));
            this.$store.commit('setFormalisms', formalisms);
            if (!this.activeFormalism) {
                this.activateFormalism(formalisms[0].id);
            }
        });

        simulatorInstance.on('attach.end', () => {
            const data = modelerInstance.get('exporter').getExport();
            if (!data.elements || !data.elements.length) {
                // TODO use statusbar for this
                alert('Nothing to simulate.');
                return;
            }
            simulatorInstance.fire('import', { data }, true);
            simulatorInstance.fire('simulation.init', {
                data,
                formalismId: this.activeFormalism,
            });
        });
    },
    methods: {
        activateFormalism: function (formalismId) {
            this.$store.commit('setActiveFormalism', formalismId);
        },
        runSimulation: function () {
            if (this.activeContext !== contexts.simulating) {
                this.$store.commit('setActiveContext', contexts.simulating);
            } else {
                this.$instances[contexts.simulating].fire('simulation.start');
            }
        },
        terminateSimulation: function () {
            this.$store.commit('setActiveContext', contexts.modeling);
            this.$instances[contexts.simulating].fire('simulation.terminate');
        },
        haltSimulation: function () {
            this.$instances[contexts.simulating].fire('simulation.stop');
        },
        step: function () {
            this.$instances[contexts.simulating].fire('simulation.step');
        },
    },
};
</script>

<style scoped>

</style>
