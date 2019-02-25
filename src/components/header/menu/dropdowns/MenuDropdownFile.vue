<template>
  <MenuDropdown>
    <MenuDropdownItem label="New Drawing…" :shortkey="['ctrl', 'n']" />
    <MenuDropdownItem label="Open Drawing…" :shortkey="['ctrl', 'o']" />
    <MenuDropdownItem
      label="Save Drawing…"
      :shortkey="['ctrl', 's']"
      @action="save"
    />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Import Drawing…" />
    <MenuDropdownItem label="Export Drawing…" />
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
    computed: mapState(['activeContext', 'drawingTitle']),
    methods: {
        save: function () {
            const json = this.$instances[this.activeContext].exportJSON();
            const title = this.drawingTitle || 'untitled';
            const fileName = title.replace(/\s+/g, '_').replace(/\W+/g, '');
            const mimeType = 'application/json';
            this.createDownload(json, fileName + '.json', mimeType);
        },
        createDownload: function (content, fileName, mimeType) {
            content = encodeURIComponent(content);
            mimeType = mimeType || 'text/plain';

            const element = document.createElement('a');
            const href = 'data:' + mimeType + ';charset=utf-8,' + content;
            element.setAttribute('href', href);
            element.setAttribute('download', fileName);
            element.style.display = 'none';

            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        },
    },
};
</script>

<style scoped>

</style>
