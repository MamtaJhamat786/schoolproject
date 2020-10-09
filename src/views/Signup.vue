<template>
  <div>
    <b-container>
      <h1>Sign Up</h1>
      <b-form class="mx-auto mt-5" style="max-width: 30rem">
        <b-input-group class="mt-1">
          <!-- mt - margin top -->
          <b-form-input placeholder="Name" type="text"></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <!-- mt - margin top -->
          <b-form-input placeholder="Email address" type="email"></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <b-form-input placeholder="Password" type="password"></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <b-form-input placeholder="Home Address" type="text"></b-form-input>
        </b-input-group>

        <b-input-group class="mt-3">
          <b-form-input
            placeholder="Telephone Number"
            type="number"
          ></b-form-input>
        </b-input-group>
      
      <div>
        <b-dropdown text="Areas Interested" block class="mt-3">
          <b-dropdown-item>Eyebrows</b-dropdown-item>
          <b-dropdown-item>Hair cutting, Coloring</b-dropdown-item>
          <b-dropdown-item>Nail Art</b-dropdown-item>
          <b-dropdown-item>Mehndi</b-dropdown-item>
          <b-dropdown-item>Facial</b-dropdown-item>
        </b-dropdown>
      </div>

      <b-button variant="primary" class="mt-3">Sign up</b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
</script>

<style>
</style>