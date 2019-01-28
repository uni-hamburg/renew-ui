<template>
  <div class="rnw-menubar">
    <div
      v-for="item in menuItems"
      :key="item.name"
      class="rnw-menu-item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
    name: 'MenuBar',
    data () {
        return {
            menuItems: [
                { name: 'File' },
                { name: 'Edit' },
                { name: 'View' },
                { name: 'Layout' },
                { name: 'Attributes' },
                { name: 'Net' },
                { name: 'Run' },
                { name: 'Tools' },
                { name: 'Window' },
                { name: 'Help' },
            ],
        };
    },
};
</script>

<style scoped>
.rnw-menubar {
  height: 32px;
  display: flex;
  margin: 2px 0 2px 2px;
}
.rnw-menu-item {
  border: 1px solid transparent;
  border-radius: 4px;
  color: #202124;
  font-size: 14px;
  letter-spacing: 0.15pt;
  padding: 4px 6px;
  cursor: pointer;
}
.rnw-menu-item:hover {
  background-color: #e3e7e9;
}
.rnw-menu-item-opened {

}
</style>
