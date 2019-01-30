<template>
  <MenuDropdown>
    <MenuDropdownItem
        label="Undo"
        :shortkey="['ctrl', 'z']"
        @action="undo"
    />
    <MenuDropdownItem label="Redo" :shortkey="['ctrl', 'y']" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Cut" :shortkey="['ctrl', 'x']" />
    <MenuDropdownItem label="Copy" :shortkey="['ctrl', 'c']" />
    <MenuDropdownItem label="Paste" :shortkey="['ctrl', 'p']" />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Select All" :shortkey="['ctrl', 'a']" />
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
    methods: {
        undo: function () {
            console.log('undo');
        },
    },
};
</script>

<style scoped>

</style>
