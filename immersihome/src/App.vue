<template>
  <Header />
  <OpenMap />
</template>

<script>
import Header from './components/Header.vue';
import OpenMap from './components/OpenMap.vue';

export default {
  name: 'App',
  components: {
    Header,
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

body,
html {
  margin: 0;
  padding: 0;
}
</style>
