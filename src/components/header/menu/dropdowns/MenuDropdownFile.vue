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
    <MenuDropdownSeparator />
    <MenuDropdownItem
      label="Export Graphics…"
      @action="saveSVG"
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
    mounted: function () {
        Object.keys(this.$instances).forEach((instance) => {
            this.$instances[instance].on('export', (context) => {
                this.save(
                    context.payload,
                    context.mimeType,
                    context.fileExtension
                );
            });
            this.$instances[instance].on('import', (context) => {
                if (context.data && context.data.title !== undefined) {
                    this.$store.commit('setDrawingTitle', context.data.title);
                }
            });
        });
    },
    methods: {
        open: function () {
            const helperElement = this.$refs.fileInputHelper;

            helperElement.setAttribute('accept', '.json,.pnml');
            helperElement.click();
        },
        save: function (payload, mimeType, fileExtension) {
            payload = encodeURIComponent(payload);

            const title = this.drawingTitle || 'Untitled_Drawing';
            const fileName = title.replace(/\s+/g, '_').replace(/\W+/g, '');
            const href = 'data:' + mimeType + ';charset=utf-8,' + payload;
            const helperElement = this.$refs.fileOutputHelper;

            helperElement.setAttribute('href', href);
            helperElement.setAttribute('download', fileName + fileExtension);
            helperElement.click();
        },
        saveJSON: function () {
            const activeInstance = this.$instances[this.activeContext];
            activeInstance.fire('export.json', {
                additionalData: {
                    title: this.drawingTitle,
                },
            });
        },
        savePNML: function () {
            const activeInstance = this.$instances[this.activeContext];
            activeInstance.fire('export.meta', {
                model: 'pt',
                format: 'pnml',
                additionalData: {
                    title: this.drawingTitle,
                },
            });
        },
        saveSVG: function () {
            const activeInstance = this.$instances[this.activeContext];
            activeInstance.fire('export.svg');
        },
        handleFile: function (event) {
            const activeInstance = this.$instances[this.activeContext];

            const file = event.target.files[0];

            // We need to use extension because browsers don't know PNML MIME
            const fileType = file.name.split('.').slice(-1)[0];

            this.readFile(file).then((res) => {
                switch (fileType) {
                    case 'json':
                        activeInstance.fire('import.json', { data: res });
                        break;
                    case 'pnml':
                        activeInstance.fire('import.meta', {
                            model: 'pt',
                            format: 'pnml',
                            data: res,
                        });
                        break;
                    default:
                        throw new Error('Unsupported file type.');
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
