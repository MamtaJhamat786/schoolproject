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
              value="true"
              unchecked-value="false">
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
        name: this.form.name,
        homeAddress: this.form.homeAddress,
        telephoneNumber: this.form.telephoneNumber,
        status: this.form.status,
        selected: this.form.selected
      };
      console.log(formData);
      this.dismissCountDown = this.dismissSecs;
      
      this.$store.dispatch('signup', formData)
      setTimeout(() => {
        this.$router.push("/");
      }, 3000);
    },
  },
};
</script>

<style>
</style>