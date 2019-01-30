<template>
  <MenuDropdown>
    <MenuDropdownItem label="Undo" shortcut="Ctrl+Z" />
    <MenuDropdownItem label="Redo" shortcut="Ctrl+Y" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Cut" shortcut="Ctrl+X" />
    <MenuDropdownItem label="Copy" shortcut="Ctrl+C" />
    <MenuDropdownItem label="Paste" shortcut="Ctrl+P" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Select All" shortcut="Ctrl+A" />
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
