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
import MenuDropdownFillColor from './dropdowns/MenuDropdownFillColor';
import MenuDropdownLinewidth from './dropdowns/MenuDropdownLinewidth';
import MenuDropdownPenColor from './dropdowns/MenuDropdownPenColor.vue';
import MenuDropdownFillOpaqueness from './dropdowns/MenuDropdownFillOpaqueness.vue';
import MenuDropdownPenOpaqueness from './dropdowns/MenuDropdownPenOpaqueness.vue';
import MenuDropdownVisibility from './dropdowns/MenuDropdownVisibility.vue';
import MenuDropdownTextColor from './dropdowns/MenuDropdownTextColor.vue';
import MenuDropdownFontSize from './dropdowns/MenuDropdownFontSize.vue';
import MenuDropdownFontFamily from './dropdowns/MenuDropdownFontFamily.vue';


const menuBarItems = [
    { id: 'file', label: 'File', dropdown: MenuDropdownFile },
    { id: 'edit', label: 'Edit', dropdown: MenuDropdownEdit },
    { id: 'fillcolor', label: 'Fill Color', dropdown: MenuDropdownFillColor },
    { id: 'fillOpaqueness', label: 'Fill opacity', dropdown: MenuDropdownFillOpaqueness },
    { id: 'linewidth', label: 'LineWidth', dropdown: MenuDropdownLinewidth },
    { id: 'penColor', label: 'PenColor', dropdown: MenuDropdownPenColor },
    { id: 'penOpaqueness', label: 'Pen opacity', dropdown: MenuDropdownPenOpaqueness },
    //{ id: 'visibility', label: 'Visibility', dropdown: MenuDropdownVisibility },

    { id: 'textfont', label: 'Font', dropdown: MenuDropdownFontFamily },
    { id: 'textcolor', label: 'Text Color', dropdown: MenuDropdownTextColor },
    { id: 'fontsize', label: 'Font Size', dropdown: MenuDropdownFontSize },

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
    props: {
        drawing: {
            type: Object,
            required: true,
        },
    },
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
