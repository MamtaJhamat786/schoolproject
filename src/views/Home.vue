<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   <b-container>
      <b-card-group columns>
         <div v-for="(data, index, idx) in loadedData" :key="index">
        <b-card
      :title="data.name"> 
      <div class="d-flex justify-content-center">
      <b-card-text class="text-center" >  Expert In :
        <ul class=" d-flex align-content-center mt-3" v-for="(options, index) in data.selected" :key="index">
        <li> {{ options }}</li>
        </ul>
      </b-card-text>
      </div>
          <b-button to="/detailed" @click="openDetail(idx)" >More Info</b-button>
       </b-card>
          </div> 
      
      </b-card-group>
      </b-container>
  </div>
</template>

<script>
export default {
  beforeCreate: function() {
        document.body.className = 'intro';
    },
  name: 'Home',
  data() {
    return {
      
    }
  },
  methods: {
      openDetail(index) {
        this.$store.state.index = index
        this.$store.dispatch('singleView')
      }
  },
  computed: {
    loadedData() {
      return this.$store.getters.data
    }
  },
  created() {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style lang="scss" scoped>

</style>