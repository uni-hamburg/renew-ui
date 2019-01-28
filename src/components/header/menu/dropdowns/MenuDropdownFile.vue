<template>
  <MenuDropdown>
    <MenuDropdownItem label="New Drawing …" />
    <MenuDropdownItem label="Open Drawing …" />
    <MenuDropdownItem label="Save Drawing …" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Import Drawing …" />
    <MenuDropdownItem label="Export Drawing …" />
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
