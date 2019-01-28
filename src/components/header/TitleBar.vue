<template>
  <div class="rwn-title-bar">
    <input
      class="rnw-title-input"
      type="text"
      placeholder="Untitled Diagram"
    >
  </div>
</template>

<script>
export default {
    name: 'TitleBar',
};
</script>

<style scoped>
.rwn-title-bar {
  padding-top: 8px;
  height: 32px;
}
.rnw-title-input {
  border: 1px solid transparent;
  background-color: inherit;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
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
  border: 2px solid #333;
  margin: -1px;
}
</style>
