<template>
  <MenuDropdown>
    <MenuDropdownItem label="Zoom In" shortcut="Ctrl++" />
    <MenuDropdownItem label="Zoom Out" shortcut="Ctrl+-" />
  </MenuDropdown>
</template>

<script>
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
};
</script>

<style scoped>

</style>
