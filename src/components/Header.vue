<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Beauty Expert</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/About">About</b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!isAuth" to="/Login">Login</b-nav-item>
          <b-nav-item v-if="!isAuth" to="/Signup">Signup</b-nav-item>
          <b-nav-item v-if="isAuth" @click="logout">Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
</style>