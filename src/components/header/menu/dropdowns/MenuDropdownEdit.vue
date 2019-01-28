<template>
  <MenuDropdown>
    <MenuDropdownItem label="Undo" />
    <MenuDropdownItem label="Redo" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Cut" />
    <MenuDropdownItem label="Copy" />
    <MenuDropdownItem label="Paste" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Select All" />
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
