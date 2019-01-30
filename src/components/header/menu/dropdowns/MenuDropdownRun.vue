<template>
  <MenuDropdown>
    <MenuDropdownItem label="Run Simulation" shortcut="Ctrl+R" @click="runSimulation" />
    <MenuDropdownItem label="Simulation Step" shortcut="Ctrl+I" />
    <MenuDropdownItem label="Halt Simulation" shortcut="Ctrl+H" />
    <MenuDropdownItem label="Stop Simulation" shortcut="Ctrl+T" />
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
