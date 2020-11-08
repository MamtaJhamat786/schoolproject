<template>
  <div class="pt-4 pb-4">
      <b-container>
      
      <h1>Detailed View</h1>
      <b-row>
        <b-col sm="6">
          <div id="data">
            <h4>User name: <strong class="color">{{ loadedData.name }} </strong></h4>
                  <h4 class="mt-3">Email: <strong class="color">{{ loadedData.email }}</strong></h4>
                  <h4 class="mt-3">Address: <strong class="color">{{ loadedData.homeAddress }}</strong></h4>
                  <h4 class="mt-3">Phone: <strong class="color">{{ loadedData.telephoneNumber }}</strong></h4>
              <h4 class="mt-3 color font-weight-bold">Expert in :</h4>
                <div class="d-inline-flex justify-content-center flex-column">      
          <ul class=" d-flex align-content-center " v-for="(options, index) in loadedData.selected" :key="index">
          <li class="list" >
              {{ options }}
          </li>
          </ul>
           </div>
          </div> 
        </b-col>
        <b-col sm="6">
            <b-img :src="chosenImg" alt="Images" fluid-grow>
            </b-img>
        </b-col>
      </b-row>
  </b-container>
  </div>
</template>

<script>
import image from "../assets/mehndi.jpg"
export default {
  beforeCreate: function() {
        document.body.className = 'about';
    },
name: 'Detailed',
data()  {
    return {
       images: [
              'https://www.fabmood.com/inspiration/wp-content/uploads/2019/12/winter-nails-40.jpg',
              'https://i.pinimg.com/474x/7a/ae/98/7aae981dbe834127d840ad2f3b7ea24c.jpg',
              'https://i.pinimg.com/originals/c9/28/81/c92881fb4c4220d2c6c2212261a699ac.jpg',
              image,
              'https://i.pinimg.com/originals/16/b4/0b/16b40bcb68dacf94c2f9e8ce809ff702.png'
           ],
      chosenImg: null
    }
},
computed: {
    loadedData() {
      return this.$store.getters.single
    }
  },
 methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  created() {
    this.chosenImg = this.randomItem(this.images)
  }
      
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Henny+Penny&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

h1{
  font-family: 'Henny Penny', cursive;
  font-weight: bolder;
}

#data{
  font-family: 'Dancing Script', cursive;
}
.color{
  color: black;
}
.list{
  font-size: 1.4rem
}
</style>