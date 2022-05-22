<template>
  <div id="app">
    <AllStudents />
  </div>
</template>

<script>
import AllStudents from "./components/AllStudents.vue";

export default {
  name: 'App',
  components: {
    AllStudents
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
  margin-top: 60px;
}
</style>
