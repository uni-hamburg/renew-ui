<template>
  <div class="rwn-title-bar">
    <input
      class="rnw-title-input"
      type="text"
      :placeholder="placeholder"
      v-model="title"
      @input="updateTitle"
    >
  </div>
</template>

<script>
export default {
    name: 'TitleBar',
    data () {
        return {
            title: '',
            placeholder: 'Untitled Drawing',
        };
    },
    mounted () {
        this.updateTitle();
    },
    methods: {
        updateTitle () {
            document.title = (this.title || this.placeholder) +' - Renew';
        },
    },
};
</script>

<style scoped>
.rwn-title-bar {
  margin-top: 4px;
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
