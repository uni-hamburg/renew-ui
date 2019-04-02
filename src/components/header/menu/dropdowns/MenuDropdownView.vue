<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Zoom In"
      :shortkey="['ctrl', '+']"
    />
    <MenuDropdownItem
      label="Zoom Out"
      :shortkey="['ctrl', '-']"
    />
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
};
</script>

<style scoped>

</style>
