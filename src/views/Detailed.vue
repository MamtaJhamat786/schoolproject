<template>
  <div>
      <b-container>
      <h1>Detailed View</h1>
      
<h4>{{ loadedData.name }}</h4>
<h6 class="mt-3">{{ loadedData.email }}</h6>
<h6 class="mt-3">{{ loadedData.homeAddress }}</h6>
<h6 class="mt-3">{{ loadedData.telephoneNumber }}</h6>
<h6>{{ loadedData.password }}</h6>
    
     <h6 class="mt-3">Expert in :</h6>
      <div class="d-inline-flex justify-content-center flex-column">  
          
<ul class=" d-flex align-content-center " v-for="(options, index) in loadedData.selected" :key="index">

<li >
    {{ options }}
</li>
</ul>
        
  </div>
  </b-container>
  </div>
</template>

<script>

export default {
  beforeCreate: function() {
        document.body.className = 'intro';
    },
name: 'Detailed',
data(){
    return {
       
    }
},
computed: {
    loadedData() {
      return this.$store.getters.single
    }
  },
      
}
</script>

<style>

</style>