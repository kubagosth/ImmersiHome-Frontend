<template>
  <OpenMap />
</template>

<script>
import OpenMap from './components/OpenMap.vue';

export default {
  name: 'App',
  components: {
    OpenMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
