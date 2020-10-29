<template>
  <div>
    <b-container>
      
      <b-card class="mx-auto mt-4" style="max-width: 25rem;">
        
      <b-form class="mx-auto" style="max-width: 30rem">
        <h1>Login</h1>
        <b-alert :show="wrong" variant="danger"> Enter valid password and email</b-alert>
        <b-input-group class="mt-5">
          <b-form-input placeholder="Email address" type="email" v-model="form.email" ></b-form-input>
          </b-input-group>
        <b-input-group class="mt-3">
          <b-form-input placeholder="Password" type="password" v-model="form.password" autocomplete="on"></b-form-input>
        </b-input-group>

        <b-button variant="primary" class="mt-5" @click="submit()">Login</b-button>
      <p class=" mt-5">Don't have an account? Sign Up  <b-link to="/signup">here</b-link>  </p>
     
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
      form: {
        email: '',
        password:''
      } 
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    submit() {
      const formData = {
        email: this.form.email,
        password: this.form.password
      }
         this.$store.dispatch('login', {email: formData.email, password: formData.password})
    }
  }
,
computed: {
  wrong() {
    return this.$store.getters.error
  }
}
}
</script>

<style>
</style>