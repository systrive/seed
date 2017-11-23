<template>
    <div id="app">
        <router-view/>
        <tab></tab>
    </div>
</template>

<script>
    import Tab from 'components/tab/tab'

    export default {
        name: 'app',
        components: {
            Tab
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
