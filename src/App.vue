<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <br>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
    <HelloWorld msg="Welcome to Your Vue.js ..."/>
    <router-link to="/copy" tag="a">index</router-link>
    <router-link to="/hello" tag="a">hello</router-link>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      value: ''
    }
  },
}
</script>

<style lang="scss">
$yellowGreen: yellowgreen;
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: $yellowGreen
}
</style>
