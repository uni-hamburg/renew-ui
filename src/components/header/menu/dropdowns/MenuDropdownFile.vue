<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="New Drawing…"
      :shortkey="['ctrl', 'n']"
    />
    <MenuDropdownItem
      label="Open Drawing…"
      :shortkey="['ctrl', 'o']"
      @action="openJSON"
    />
    <MenuDropdownItem
      label="Save Drawing…"
      :shortkey="['ctrl', 's']"
      @action="saveJSON"
    />
    <MenuDropdownSeparator />
    <MenuDropdownItem label="Import Drawing…" />
    <MenuDropdownItem label="Export Drawing…" />
    <input
      ref="fileInputHelper"
      type="file"
      class="hide"
      @change="handleFile"
    >
    <a
      ref="fileOutputHelper"
      class="hide"
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
    computed: mapState(['activeContext', 'drawingTitle']),
    methods: {
        open: function (fileEnding) {
            const helperElement = this.$refs.fileInputHelper;

            helperElement.setAttribute('accept', fileEnding);
            helperElement.click();
        },
        save: function (content, mimeType, fileEnding) {
            content = encodeURIComponent(content);

            const title = this.drawingTitle || 'Untitled_Drawing';
            const fileName = title.replace(/\s+/g, '_').replace(/\W+/g, '');
            const href = 'data:' + mimeType + ';charset=utf-8,' + content;
            const helperElement = this.$refs.fileOutputHelper;

            helperElement.setAttribute('href', href);
            helperElement.setAttribute('download', fileName + fileEnding);
            helperElement.click();
        },
        openJSON: function () {
            this.open('.json');
        },
        saveJSON: function () {
            const activeInstance = this.$instances[this.activeContext];
            const json = activeInstance.get('jsonExporter').getExport({
                title: this.drawingTitle,
            });
            this.save(json, 'application/json', '.json');
        },
        handleFile: function (event) {
            const activeInstance = this.$instances[this.activeContext];
            const file = event.target.files[0];

            this.readFile(file).then((res) => {
                let data;
                switch (file.type) {
                    case 'application/json':
                        data = activeInstance.get('jsonImporter').import(res);
                        this.$store.commit('setDrawingTitle', data.title);
                        break;
                    default:
                        console.log('Unsupported MIME type'); // TODO
                }
            }).catch((err) => {
                alert(err);
            });
        },
        readFile: function (file) {
            const reader = new FileReader();
            return new Promise((resolve, reject) => {
                reader.onload = (event) => {
                    const bytesRead = Math.round(event.total / 1024);
                    console.log('Read ' + bytesRead + 'KB');
                    resolve(reader.result);
                };
                reader.onloadstart = () => {
                    console.log('Reading ' + file.name);
                };
                reader.onerror = () => {
                    reject(new Error('Error reading ' + file.name));
                };
                reader.readAsText(file);
            });
        },
    },
};
</script>

<style scoped>
</style>
