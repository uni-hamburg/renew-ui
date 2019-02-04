<template>
  <div class="rnw-menu-bar">
    <MenuBarItem
      v-for="item in menuBarItems"
      :key="item.id"
      :item="item"
      :is-active="isActive(item.id)"
      @click="setActive(item.id)"
      @hover="changeActive(item.id)"
    />
  </div>
</template>

<script>
import MenuBarItem from './MenuBarItem';
import MenuDropdownFile from './dropdowns/MenuDropdownFile';
import MenuDropdownEdit from './dropdowns/MenuDropdownEdit';
import MenuDropdownView from './dropdowns/MenuDropdownView';
import MenuDropdownRun from './dropdowns/MenuDropdownRun';
import MenuDropdownHelp from './dropdowns/MenuDropdownHelp';
import MenuDropdownWindow from './dropdowns/MenuDropdownWindow';

const menuBarItems = [
    { id: 'file', label: 'File', dropdown: MenuDropdownFile },
    { id: 'edit', label: 'Edit', dropdown: MenuDropdownEdit },
    { id: 'view', label: 'View', dropdown: MenuDropdownView },
//    { id: 'layout', label: 'Layout' },
//    { id: 'attributes', label: 'Attributes' },
//    { id: 'net', label: 'Net' },
    { id: 'run', label: 'Run', dropdown: MenuDropdownRun },
//    { id: 'tools', label: 'Tools' },
    { id: 'window', label: 'Window', dropdown: MenuDropdownWindow },
    { id: 'help', label: 'Help', dropdown: MenuDropdownHelp },
];

export default {
    name: 'MenuBar',
    components: {
        MenuBarItem,
    },
    props: ['drawing'],
    data () {
        return {
            menuBarItems,
            activeItemId: null,
        };
    },
    mounted: function () {
        document.body.addEventListener('click', this.bodyClick.bind(this));
    },
    methods: {
        isActive: function (id) {
            return this.activeItemId == id;
        },
        setActive: function (id) {
            if (this.activeItemId === id) {
                this.activeItemId = null;
                return;
            }
            this.activeItemId = id;
        },
        changeActive: function (id) {
            if (this.activeItemId === null) {
                return;
            }
            this.activeItemId = id;
        },
        bodyClick: function (e) {
            this.activeItemId = null;
        },
    },
};
</script>

<style scoped>
.rnw-menu-bar {
  display: flex;
  margin: 2px;
}
</style>
