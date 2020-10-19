<template>
  <div>
      <b-container>
      <h1>Detailed View</h1>
      
<h4>{{ loadedData.name }}</h4>
<h6 class="mt-3">{{ loadedData.email }}</h6>
<h6 class="mt-3">{{ loadedData.homeAddress }}</h6>
<h6 class="mt-3">{{ loadedData.telephoneNumber }}</h6>
    
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
import axios from 'axios'
export default {
name: 'Detailed',
data(){
    return {
        loadedData: []
    }
},
created() {
    axios.get('https://schoolproject-3bb31.firebaseio.com/user.json')
    .then(result =>{
         const data = result.data
        const users = []
        for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)

        }
        this.loadedData = users[this.$store.state.index]
    })
      .catch( e =>console.log(e))
    }
}
</script>

<style>

</style>