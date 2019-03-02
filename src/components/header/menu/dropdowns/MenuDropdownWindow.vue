<template>
  <MenuDropdown>
    <MenuDropdownItem
        :label="fullscreenLabel"
        :shortkey="['f11']"
        @action="requestFullscreen"
    />
  </MenuDropdown>
</template>

<script>
import MenuDropdown from '../MenuDropdown';
import MenuDropdownItem from '../MenuDropdownItem';
import MenuDropdownSeparator from '../MenuDropdownSeparator';

export default {
    name: 'MenuDropdownView',
    data () {
        return {
            fullscreenLabel: 'Fullscreen'
        }
    },
    components: {
        MenuDropdown,
        MenuDropdownItem,
        MenuDropdownSeparator,
    },
    methods: {
        requestFullscreen () {
            if (document.fullscreenEnabled) {
                if (this.isFullscreen()) {
                    document.exitFullscreen();
                    this.fullscreenLabel = 'Fullscreen';
                } else {
                    document.body.requestFullscreen().then(() => {
                        this.fullscreenLabel = 'Exit Fullscreen';
                    });
                }
            }
        },
        isFullscreen () {
            // TODO: replace deprecated property
            return document.fullscreen;
        }
    }
};
</script>

<style scoped>

</style>
