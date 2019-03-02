<template>
  <div class="rnw-toolbar">
    <div class="rnw-toolbar-tools">
      <div
        v-for="(tool, i) in tools"
        :key="i"
      >
        <div
          v-if="tool.type === 'separator'"
          class="rnw-toolbar-separator"
        />
        <div
          v-else
          class="rnw-toolbar-tool"
        >
          <i :class="tool.icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Toolbar',
    data () {
        return {
            tools: [
                { type: 'undo', icon: 'icon-undo' },
                { type: 'redo', icon: 'icon-redo' },
                { type: 'separator' },
                { type: 'bold', icon: 'icon-bold' },
                { type: 'italic', icon: 'icon-italic' },
                { type: 'underline', icon: 'icon-underline' },
                { type: 'separator' },
                { type: 'align-left', icon: 'icon-align-left' },
                { type: 'align-center', icon: 'icon-align-center' },
                { type: 'align-right', icon: 'icon-align-right' },
            ],
        };
    },
};
</script>

<style scoped>
  .rnw-toolbar {
    height: 32px;
    width: 100%;
    background-color: #fafafa;
    border-bottom: 1px solid #ccc;
  }

  .rnw-toolbar-tools {
    margin-left: 22px;
    display: flex;
    flex-direction: row;
  }

  .rnw-toolbar-tool {
    margin: 2px 1px;
    padding: 4px 2px;
    width: 28px;
    height: 28px;
    border-radius: 4px;
    color: #444;
    cursor: pointer;
  }

  .rnw-toolbar-tool:hover {
    background-color: #eee;
  }

  .rnw-toolbar-separator {
    border-left: 1px solid #ccc;
    margin: 7px 5px;
    height: 18px;
  }
</style>
