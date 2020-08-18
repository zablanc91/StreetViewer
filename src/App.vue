<template>
  <div id="app">
    <h1>Testing Vuex</h1>
    <p>You currently have {{$store.getters.score}} points.</p>

    <hr>
    <div>
      <label for="points">Input points to add.</label>
      <input @input="addPoints" name="points">
    </div>
    <Map />
  </div>
</template>

<script>
import Map from './components/Map'

export default {
  name: 'App',
  components: {
    Map
  },
  methods: {
    addPoints(event){
      this.$store.commit('updateScore', event.target.value === '' ? 0 : event.target.value)
    }
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
