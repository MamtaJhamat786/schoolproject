import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import router from '../router'

Vue.use(Vuex)
Vue.use(Vuelidate)

export default new Vuex.Store({
  state: {
    index: '',
    idToken: null,
    userId: null,
    loadedData: [],
    singleDetail: [],
    error: null

  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    data (state, payload) {
      state.loadedData = payload
    },
    single(state, payload) {
      state.singleDetail = payload
    },
    clearToken (state) {
      state.idToken = null,
      state.userId = null
    },
    loginError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    signup({commit}, authData) {
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxTI8XNy5pqtKv2x5a3CRnGVPCy3Ozw4o",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((result) => {
          console.log(result)
          commit('authUser', {
            token: result.data.idToken,
            userId: result.data.localId
        })
        if (authData.status === 'true') {
          axios.post('https://schoolproject-3bb31.firebaseio.com/user.json', authData)
        .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            if (error.response) {
              console.log(error.response.data);
            } else if (error.request) {
              console.log(error.request);
            } else {
              console.log("Error", error.message);
            }
          });
        } else {
          return
        }
      })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
    logout({commit}) {
      commit('clearToken')
      router.replace('/login')
    },
    login({commit}, authData) {
      axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxTI8XNy5pqtKv2x5a3CRnGVPCy3Ozw4o',
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
 
      }).then(result =>{ 
        console.log(result)
        commit('authUser', {
          token: result.data.idToken,
          userId: result.data.localId
      })
      this.state.error = null
      router.replace('/')
        })
   .catch( error => {
     commit('loginError', {
     error: error.response.data.error
  })
})
    },
    fetchData({commit}) {
      axios.get('https://schoolproject-3bb31.firebaseio.com/user.json')
    .then((result) => {
      commit('data', result.data)
    })
      .catch( e =>console.log(e))
    },
    singleView({commit,state}) {
      const views = []
      for(let key in state.loadedData) {
          const view = state.loadedData[key]
          view.id = key
        views.push(view)
      }
      commit('single', views[state.index])
    }
  },

  getters: {
    data (state) {
      return state.loadedData
    },
    single (state) {
      return state.singleDetail
    },
    isAuth(state) {
      return state.idToken !== null
    },
    error(state) {
      return state.error !== null
    }
  }

})
