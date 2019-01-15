<template>
  <div id="workspace">

  </div>
</template>

<script>
import PluginPT from 'renew-formalism-pt';
import Drawing from 'renew-lib';

export default {
    props: {
    },
    mounted () {
        let drawing = new Drawing('workspace');
        drawing.addFormalism(new PluginPT());
    },
};
</script>

<style>
  #workspace {
    height: 100%;
  }
</style>
