<template>
  <MenuDropdown>
    <MenuDropdownItem label="New Drawing…" :shortkey="['ctrl', 'n']" />
    <MenuDropdownItem label="Open Drawing…" :shortkey="['ctrl', 'o']" />
    <MenuDropdownItem label="Save Drawing…" :shortkey="['ctrl', 's']" />
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
