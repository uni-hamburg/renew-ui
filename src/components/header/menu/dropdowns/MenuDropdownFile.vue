<template>
  <MenuDropdown>
    <MenuDropdownItem label="New Drawing…" shortcut="Ctrl+N" />
    <MenuDropdownItem label="Open Drawing…" shortcut="Ctrl+O" />
    <MenuDropdownItem label="Save Drawing…" shortcut="Ctrl+S" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Import Drawing…" />
    <MenuDropdownItem label="Export Drawing…" />
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
