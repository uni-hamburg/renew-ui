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

export default {
    name: 'MenuDropdownView',
    components: {
        MenuDropdown,
        MenuDropdownItem,
    },
    data () {
        return {
            fullscreenLabel: 'Fullscreen',
        };
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
        },
    },
};
</script>

<style scoped>

</style>
