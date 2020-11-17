<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>


<script>

  import Navbar from './components/Navbar.vue';

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }

</script>



<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}


</style>
