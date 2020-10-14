<template>
  <div id="app">
    <Header></Header>
    <router-view class="mt-3"/>
  </div>
</template>

<script>
// @ is an alias to /src
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
    background: rgb(125, 161, 150);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
