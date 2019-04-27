<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="Undo"
      :shortkey="['ctrl', 'z']"
      @action="undoCommand"
    />
    <MenuDropdownItem
      label="Redo"
      :shortkey="['ctrl', 'y']"
      @action="redoCommand"
    />
    <MenuDropdownSeparator />
    <MenuDropdownItem
      label="Cut"
      :shortkey="['ctrl', 'x']"
    />
    <MenuDropdownItem
      label="Copy"
      :shortkey="['ctrl', 'c']"
    />
    <MenuDropdownItem
      label="Paste"
      :shortkey="['ctrl', 'v']"
    />
    <MenuDropdownSeparator />
    <MenuDropdownItem
      label="Select All"
      :shortkey="['ctrl', 'a']"
    />
  </MenuDropdown>
</template>

<script>
import { mapState } from 'vuex';
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
    computed: mapState([ 'activeContext' ]),
    methods: {
        undoCommand () {
            this.$instances[this.activeContext].fire('command.undo');
        },
        redoCommand () {
            this.$instances[this.activeContext].fire('command.redo');
        },
    },
};
</script>

<style scoped>

</style>
