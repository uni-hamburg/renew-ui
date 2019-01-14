<template>
  <div id="workspace">

  </div>
</template>

<script>
import Drawing from 'renew-lib';

export default {
    props: {
    },
    mounted() {
        new Drawing();
    },
};
</script>

<style scoped>

</style>
