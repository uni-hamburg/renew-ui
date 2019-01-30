<template>
  <MenuDropdown>
    <MenuDropdownItem
        label="Run Simulation"
        :shortkey="['ctrl', 'r']"
        @action="runSimulation"
    />
    <MenuDropdownItem label="Simulation Step" :shortkey="['ctrl', 'i']" />
    <MenuDropdownItem label="Halt Simulation" :shortkey="['ctrl', 'h']" />
    <MenuDropdownItem label="Stop Simulation" :shortkey="['ctrl', 't']" />
  </MenuDropdown>
</template>

<script>
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
            console.log(window.drawing._definitions);
        },
    },
};
</script>

<style scoped>

</style>
