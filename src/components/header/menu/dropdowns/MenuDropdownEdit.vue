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
      disabled="true"
    />
    <MenuDropdownItem
      label="Copy"
      :shortkey="['ctrl', 'c']"
      disabled="true"
    />
    <MenuDropdownItem
      label="Paste"
      :shortkey="['ctrl', 'v']"
      disabled="true"
    />
    <MenuDropdownSeparator />
    <MenuDropdownItem
      label="Select All"
      :shortkey="['ctrl', 'a']"
      @action="selectAll"
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
        selectAll () {
            this.$instances.modeler.fire('select.all');
        },
    },
};
</script>

<style scoped>

</style>
