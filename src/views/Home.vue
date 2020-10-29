<template>
  <div class="home pt-3 pb-4" >
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
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
          <b-button to="/detailed" @click="openDetail(idx)" class="btnn" >More Info</b-button>
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
@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap');

.home {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/6/62/Starsinthesky.jpg');
}

p {
  font-family: 'Dancing Script', cursive;
  font-size: 1.4rem;
}
h4 {
  font-family: 'Henny Penny', cursive;
  font-size: 2rem;
}
.btnn{
  border: none !important;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
}
.card-body{
  background-color: rgb(190, 194, 214) !important;
    border: 3px solid rgb(190, 194, 214) !important;
  border-radius: 1rem !important;
  
}
.card{
    background-color: rgb(190, 194, 214) !important;
  border: 3px solid rgb(190, 194, 214) !important;
  border-radius: 1rem !important;
}
</style>