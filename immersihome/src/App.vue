<template>
  <Header />
  <DisplaySettings />
</template>

<script>
import DisplaySettings from './components/DisplaySettings.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
    DisplaySettings
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
