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
    />
    <MenuDropdownItem
      label="Halt Simulation"
      :shortkey="['ctrl', 'h']"
    />
    <MenuDropdownItem
      label="Stop Simulation"
      :shortkey="['ctrl', 't']"
      @action="stopSimulation"
    />
  </MenuDropdown>
</template>

<script>
import { contexts } from '../../../../App.vue';
import MenuDropdown from '../MenuDropdown';
import MenuDropdownItem from '../MenuDropdownItem';

export default {
    name: 'MenuDropdownView',
    components: {
        MenuDropdown,
        MenuDropdownItem,
    },
    methods: {
        runSimulation: function () {
            this.$store.commit('changeContext', contexts.simulation);
        },
        stopSimulation: function () {
            this.$store.commit('changeContext', contexts.drawing);
        },
    },
};
</script>

<style scoped>

</style>
