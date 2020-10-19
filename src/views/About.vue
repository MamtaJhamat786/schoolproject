<template>
  <div id="about">
    <b-container>
      <h1>Wecome to Beauty Expert</h1>
      <br />
      <b-row>
        <b-col sm="6">
          <p class="text-justify font-italic" style="fontsize: 1.4rem">
            Here you can find beauty expert in different field like eyebrows,
            Hair color, Nail art, Waxing, Mehndi or dress designing etc. and if
            you are a beauty expert then you can find customers who are looking
            for something special to be done and then you can contact.
          </p>
        </b-col>
        <b-col sm="6">
          <b-img
            src="https://www.hellomagazine.com/imagenes/healthandbeauty/makeup/2018020546051/beauty-courses/0-231-574/beauty-courses-t.jpg"
            fluid-grow
          >
          </b-img>
        </b-col>
      </b-row> </b-container
    >
  </div>
</template>

<script>
export default {
    name: 'About',
    beforeCreate: function() {
        document.body.className = 'about';
    },
    data() {
        return{
            
        }
    }
}
</script>

<style scoped>

</style>
