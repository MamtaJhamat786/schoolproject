<template>
  <div>
    <b-container>
      <b-alert
        :show="dismissCountDown"
        variant="success"
        @dismissed="dismissCountDown = 0"
      >
        <p>signed up successfull .</p>
      </b-alert>
      <b-card class="mx-auto mt-4" style="max-width: 25rem">
        <h1>Sign Up</h1>
        <b-form class="mx-auto" style="max-width: 30rem" @submit.prevent="submit">
          <b-input-group class="mt-4">
            <b-form-input
              name="name"
              placeholder="Name"
              type="text"
              v-model="$v.form.name.$model" 
              :state="validateState('name')"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
              placeholder="Email address"
              type="email"
              v-model="$v.form.email.$model" 
              :state="validateState('email')"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
            id="password-input"
              autocomplete="on"
              placeholder="Password"
              type="password"
              v-model="$v.form.password.$model" 
              :state="validateState('password')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.password.minLength">Password must have at least {{ $v.form.password.$params.minLength.min }} characters.</b-form-invalid-feedback>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
              placeholder="Home Address"
              type="text"
              v-model="$v.form.homeAddress.$model" 
              :state="validateState('homeAddress')"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
              placeholder="Telephone Number"
              type="number"
              v-model="$v.form.telephoneNumber.$model" 
              :state="validateState('telephoneNumber')"
            ></b-form-input>
          </b-input-group>

          <b-dropdown text="Areas Interested" block class="mt-3">
            <b-form-group>
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="$v.form.selected.$model" 
              :state="validateState('selected')"
                :options="options"
                name="flavour-1"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>
          </b-dropdown>

          <b-input-group class="mt-3">
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.status"
              name="checkbox-1"
              value="true"
              unchecked-value="false">
              I am a beauty expert and i want to upload my data so that clients can approach me.
            </b-form-checkbox>
            </b-input-group>

          <b-button variant="primary" class="mt-3" @click="submit($event)"
            >Sign up</b-button
          >
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import{required, email, minLength} from 'vuelidate/lib/validators'

export default {
 name: 'Signup',
    beforeCreate: function() {
        document.body.className = 'about';
    },
  data() {

    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      form: {
        name: "",
        email: "",
        password: "",
        homeAddress: "",
        telephoneNumber: "",
        status: "",
        selected: [],
      },
      options: [
        { text: "Mehndi", value: "Mehndi" },
        { text: "Hair color", value: "Hair color" },
        { text: "Eyebrows", value: "Eyebrows" },
        { text: "Nail art", value: "Nail art" },
        { text: "Hair cutting", value: "Hair cutting" },
        { text: "Face cleansing", value: "Face cleansing" },
      ],
    };
  },
  validations:{
    form:{
      name:{
        required
      },
      email:{
        required,
        email
      },
      password:{
        required,
        minLength : minLength(8)
      },
      homeAddress:{
        required,
      },
      telephoneNumber:{
        required,
      },
      selected:{
        required,
      }
    }
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    submit(event) {
      this.$v.form.$touch();
      if(this.$v.$invalid){
        event.preventDefault();
      
      }else{
      const formData = {
        email: this.form.email,
        password: this.form.password,
        name: this.form.name,
        homeAddress: this.form.homeAddress,
        telephoneNumber: this.form.telephoneNumber,
        status: this.form.status,
        selected: this.form.selected
      };
       setTimeout(() => {
        this.dismissCountDown = this.dismissSecs;
      }, 700);
      this.$store.dispatch('signup', formData)
      setTimeout(() => {
        this.$router.push("/");
      }, 3000);
      this.submitStatus= 'OK'
      }
    },
  },
};
</script>

<style>
</style>