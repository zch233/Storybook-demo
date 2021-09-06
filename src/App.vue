<template>
  <div id="app">
    <ZchButton>1231234</ZchButton>
  </div>
</template>

<script>
import ZchButton from './components/Button';

export default {
  name: 'App',
  components: {
    ZchButton,
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
