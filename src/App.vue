<template>
  <div id="app">
    <registration-page></registration-page>
  </div>
</template>

<script>
import RegistrationPage from './components/RegistrationPage.vue'

export default {
  name: 'app',
  components: {
      RegistrationPage,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
