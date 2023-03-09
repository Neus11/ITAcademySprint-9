import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

export default createStore({
  state: {
    user: null,
    weatherList: [],
    blogHTML: "Empieza a escribir aqui...",
    blogTitle: "",
    blogPhotoName:"",
    blogPhotoFileURL: ""
  },
  getters: {
  },
  mutations: {
    //User Items:
    SET_USER(state, user){
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    },
    //Wether Items:
    loadWeatherData(state, weatherData) {
      state.weatherList = weatherData
    },
    // Blog items:
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    updateBlogTitle (state, payload) {
      state.blogTitle = payload;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    }
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        alert("Ops! Algo ha fallado" + error.message)
      }
        commit('SET_USER', auth.currentUser)
        router.push('/')
    },

    async register({ commit }, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword (auth, email, password)
      } catch (error) {
        alert("Ops! Algo ha fallado" + error.message)
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },

    async logout({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/')
    },

    fetchUser ({commit}) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login'){
            router.push('/')
          }
        }
      })
    },
  },
})
