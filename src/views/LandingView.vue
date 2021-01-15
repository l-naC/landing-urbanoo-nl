<template>
  <Header/>
  <Home/>
  <Footer/>
</template>

<script>
import Home from '../components/Home.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'landing-view',
  components: {
    Home,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
