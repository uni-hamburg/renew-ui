<template>
  <div id="rnw-workspace">

  </div>
</template>

<script>
import PluginPT from 'renew-formalism-pt';
import Drawing from 'renew-lib';

export default {
    props: {
    },
    mounted () {
        let drawing = new Drawing('rnw-workspace');
        drawing.addFormalism(new PluginPT());
    },
};
</script>

<style>
  #rnw-workspace {
    height: 100%;
  }
</style>
