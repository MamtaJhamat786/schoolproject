<template>
  <div>
    <b-navbar toggleable="lg" type="light" id="header">
      <b-navbar-brand to="/">
         <img :src="image" alt="Logo" class="logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="viewport-center">
          <b-nav-item to="/" >Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="!isAuth" to="/login">Login</b-nav-item>
          <b-nav-item v-if="!isAuth" to="/signup">Signup</b-nav-item>
          <b-nav-item v-if="isAuth" @click="logout">Log out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import image from "../assets/logo.png"
export default {
  name: "Header",
  data() {
    return {
      image: image
    }
  },
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

<style >
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');
#header{
  background-color: pink;
}
a.router-link-exact-active {
  color: black !important;
}
@media (min-width: 992px) {
    .viewport-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}
.logo{
   width: 100px;
   position: absolute;
   margin-top: -15px;
}
a.nav-link {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
}
</style>