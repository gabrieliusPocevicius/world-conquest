<script setup>
  import Person from './components/Person.vue'


</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div v-for="person in 20" key="person">
    <Person hp='100'/>
  </div>
</template>

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
