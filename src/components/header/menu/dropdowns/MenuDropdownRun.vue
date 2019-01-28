<template>
  <MenuDropdown>
    <MenuDropdownItem label="Run Simulation" @click="runSimulation" />
    <MenuDropdownItem label="Simulation Step" />
    <MenuDropdownItem label="Halt Simulation" />
    <MenuDropdownItem label="Stop Simulation" />
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
            console.log(window.drawing);
        },
    },
};
</script>

<style scoped>

</style>
