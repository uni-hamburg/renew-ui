<template>
  <MenuDropdown>
    <MenuDropdownItem label="About" @action="openHelp" />
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
        openHelp () {
            const url = 'https://github.com/renew-js/renew-js';
            window.open(url, '_blank').focus();
        }
    }
};
</script>

<style scoped>

</style>
