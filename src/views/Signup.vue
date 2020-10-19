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
        <b-form class="mx-auto" style="max-width: 30rem">
          <b-input-group class="mt-4">
            <!-- mt - margin top -->
            <b-form-input
              placeholder="Name"
              type="text"
              v-model="form.name"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <!-- mt - margin top -->
            <b-form-input
              placeholder="Email address"
              type="email"
              v-model="form.email"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
              autocomplete="on"
              placeholder="Password"
              type="password"
              v-model="form.password"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
              placeholder="Home Address"
              type="text"
              v-model="form.homeAddress"
            ></b-form-input>
          </b-input-group>

          <b-input-group class="mt-3">
            <b-form-input
              placeholder="Telephone Number"
              type="number"
              v-model="form.telephoneNumber"
            ></b-form-input>
          </b-input-group>

          <b-dropdown text="Areas Interested" block class="mt-3">
            <b-form-group>
              <b-form-checkbox-group
                id="checkbox-group-1"
                v-model="form.selected"
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
              value="accepted"
              unchecked-value="not_accepted">
              I am a beauty expert and i want to upload my data so that clients can approach me.
            </b-form-checkbox>
            </b-input-group>

          <b-button variant="primary" class="mt-3" @click="submit"
            >Sign up</b-button
          >
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  beforeCreate: function() {
        document.body.className = 'intro';
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
        { text: "Mehndi", value: "mehndi" },
        { text: "Hair color", value: "hair color" },
        { text: "Eyebrows", value: "eyebrows" },
        { text: "Nail art", value: "nail art" },
        { text: "Hair cutting", value: "hair cutting" },
        { text: "Face cleansing", value: "face cleansing" },
      ],
    };
  },
  methods: {
    submit() {
      const formData = {
        email: this.form.email,
        password: this.form.password,
      };
      console.log(formData);
      this.dismissCountDown = this.dismissSecs;
        if  (this.form.status === 'accepted'){
          axios.post('https://schoolproject-3bb31.firebaseio.com/user.json', this.form)
      .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
        }
      
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxTI8XNy5pqtKv2x5a3CRnGVPCy3Ozw4o",
          {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
      setTimeout(() => {
        this.$router.push("/");
      }, 3000);
    },
  },
};
</script>

<style>
</style>