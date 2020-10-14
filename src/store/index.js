import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedData: []
  },
  mutations: {
    setPosts(state, posts){
      state.loadedData = posts;
    }
  },
  actions: {
    serverInit(vuexContext, context){
      return axios.get('https://schoolproject-3bb31.firebaseio.com/user.json')
      .then(res => {
        const postsArray = []
        for (const key in res.data) {
          postsArray.push({ ...res.data[key], id: key})

        }
        vuexContext.commit('setPosts')
      })
      .catch(e =>context.error(e));
    }
  },
  // getters: {
  //   loadedData(state) {
  //     return loadedData
  //   }
  // }
})
