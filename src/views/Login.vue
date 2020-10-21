<template>
  <div>
    <b-container>
      
      <b-card class="mx-auto mt-4" style="max-width: 25rem;">
      <b-form class="mx-auto" style="max-width: 30rem">
        <h1>Login</h1>
        <b-input-group class="mt-5">
          <!-- mt - margin top -->
          <b-form-input placeholder="Email address" type="email" v-model="email"></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <b-form-input placeholder="Password" type="password" v-model="password" autocomplete="on"></b-form-input>
        </b-input-group>

        <b-button variant="primary" class="mt-5" @click="submit">Login</b-button>
      <p class=" mt-5">Don't have an account? Sign Up  <b-link to="/Signup">here</b-link>  </p>
     
      </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>

export default {
  beforeCreate: function() {
        document.body.className = 'intro';
    },
  data() {
    return{
      email: '',
      password:''
      
    }
  },
  methods: {
    submit(){
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
         this.$store.dispatch('login', {email: formData.email, password: formData.password})
    }
  }
}
</script>

<style>
</style>