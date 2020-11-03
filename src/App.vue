<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  beforeCreate: function() {
        document.body.className = 'intro';
    },
  components: {
    Header
  }
}
</script>

<style lang="scss">
 body.about {
    background: rgb(170, 186, 206)
}




#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

</style>
