<template>
  <HeaderBar />
  <DisplaySettings/>
  <FooterBar/>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';
import DisplaySettings from './components/DisplaySettings.vue';

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar,
    DisplaySettings
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
.content {
  flex: 1;
  padding: 1rem;
}

footer {
  margin-top: auto;
}
</style>
