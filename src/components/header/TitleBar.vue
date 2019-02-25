<template>
  <div class="rwn-title-bar">
    <input
      class="rnw-title-input"
      type="text"
      :value="title"
      :placeholder="placeholder"
      @input="updateTitle"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TitleBar',
    data () {
        return {
            placeholder: 'Untitled Drawing',
        };
    },
    computed: {
        ...mapState({
            title: (state) => state.drawingTitle,
        }),
    },
    mounted () {
        this.updateTitle();
    },
    methods: {
        updateTitle (event) {
            const title = event ? event.target.value : '';
            this.$store.commit('setDrawingTitle', title);
            document.title = (title || this.placeholder) +' - Renew';
        },
    },
};
</script>

<style scoped>
.rwn-title-bar {
  margin-top: 8px;
}
.rnw-title-input {
  border: 2px solid transparent;
  background-color: inherit;
  border-radius: 2px;
  font-size: 18px;
  line-height: 22px;
  min-width: 1px;
  padding: 2px 8px;
}
.rnw-title-input:hover {
  border-color: #e5e5e5;
}
.rnw-title-input:focus {
  background-color: white;
  border-color: #333;
}
</style>
