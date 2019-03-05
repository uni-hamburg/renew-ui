<template>
  <MenuDropdown>
    <MenuDropdownItem
      label="New Drawing…"
      :shortkey="['ctrl', 'n']"
    />
    <MenuDropdownItem
      label="Open Drawing…"
      :shortkey="['ctrl', 'o']"
      @action="open"
    />
    <MenuDropdownItem
      label="Save Drawing…"
      :shortkey="['ctrl', 's']"
      @action="saveJSON"
    />
    <MenuDropdownSeparator />
    <MenuDropdownItem
      label="Export Drawing…"
      :shortkey="['ctrl', 'shift', 's']"
      @action="savePNML"
    />
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
    computed: mapState([ 'activeContext', 'drawingTitle' ]),
    methods: {
        open: function (fileEnding) {
            const helperElement = this.$refs.fileInputHelper;

            helperElement.setAttribute('accept', '.json,.pnml');
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
        saveJSON: function () {
            const activeInstance = this.$instances[this.activeContext];

            const json = activeInstance.get('jsonExporter').getExport({
                title: this.drawingTitle,
            });
            this.save(json, 'application/json', '.json');
        },
        savePNML: function () {
            const activeInstance = this.$instances[this.activeContext];
            const pnmlExporter = activeInstance.get('pnmlExporter');

            const pnml = pnmlExporter.getExport(this.drawingTitle);
            this.save(pnml, 'application/xml', '.pnml');
        },
        handleFile: function (event) {
            const activeInstance = this.$instances[this.activeContext];

            const file = event.target.files[0];

            // We need to use extension because browsers don't know PNML MIME
            const fileType = file.name.split('.').slice(-1)[0];

            this.readFile(file).then((res) => {
                let data;
                switch (fileType) {
                    case 'json':
                        data = activeInstance.get('jsonImporter').import(res);
                        break;
                    case 'pnml':
                        data = activeInstance.get('pnmlImporter').import(res);
                        break;
                    default:
                        throw new Error('Unsupported file type.');
                }
                if (data && data.title) {
                    this.$store.commit('setDrawingTitle', data.title);
                }
            }).catch((err) => {
                alert(err); // TODO error modal
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
