<template>
  <div class="rnw-menu-bar">
    <SideMenuItem
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
import SideMenuItem from '../sidemenu/SideMenuItem' ;
import MenuDropdownFillColor from './MenuDropdownFillColor';
import MenuDropdownFile from './MenuDropdownFile';
import MenuDropdownEdit from './MenuDropdownEdit';
import PluginBase from 'renew-formalism-base/src/core/PluginBase';
import PluginPT from 'renew-formalism-pt/src/core/PluginPT';
import Modeler from 'renew-lib/src/Modeler';
import Simulator from 'renew-lib/src/Simulator';
import { contexts } from '../../../../App.vue';
import { mapState } from 'vuex';
import MenuDropdown from '../MenuDropdown';
import MenuDropdownItem from '../MenuDropdownItem';
import MenuDropdownSeparator from '../MenuDropdownSeparator';

const menuBarItems = [    
   { id: 'fillcolor', label: 'Fill Color', dropdown: MenuDropdownFillColor },    
];

export default {
  name: 'Attributes',
    components: {
        SideMenuItem,
    },
    props: [ 'drawing' ],
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
