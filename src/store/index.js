import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function emptyToy() {
  return {
   id: null,
   data: {
     name: '',
     code: '',
     price: 0,
     stock: 0
   }
 }
}
export default new Vuex.Store({
  state: {
      toys: [],
      showForm: false,
      currentToy: emptyToy(),
      overlay: false
  },
  mutations: {
    SET_EMPTY_TOY(state) {
      state.currentToy.id = null;
      const empty = emptyToy()
      Object.keys(empty.data).forEach(key => {
        state.currentToy.data[key] = empty.data[key]
      })
    },
    SET_TOYS(state, data) { state.toys = data },
    DISPLAY_TOY_FORM(state) { state.showForm = true },
    HIDE_TOY_FORM(state) { state.showForm = false },
    UPDATE_NAME(state, name) { state.currentToy.data.name = name},
    UPDATE_CODE(state, code) { state.currentToy.data.code = code},
    UPDATE_PRICE(state, price) { state.currentToy.data.price = price},
    UPDATE_STOCK(state, stock) { state.currentToy.data.stock = stock},
    SET_CURRENT_TOY(state, toy){ state.currentToy = toy },
    LOADING_OVERLAY(state) { state.overlay = true},
    LOADING_OVERLAY_BYE(state) { state.overlay = false}
  },
  actions: {
    setToys({ commit }){
      commit('LOADING_OVERLAY')
      axios.get('https://us-central1-ottoklauss-b4ef0.cloudfunctions.net/toys/toys')
      .then(response => {
        commit('SET_EMPTY_TOY')
        commit('SET_TOYS', response.data)
        commit('LOADING_OVERLAY_BYE')
      }) 
    },
    displayToyForm ({ commit }) { commit('DISPLAY_TOY_FORM')},
    hideToyForm ({ commit }) { commit('HIDE_TOY_FORM')},
    updateName ({ commit }, name) { commit('UPDATE_NAME', name)},
    updateCode ({ commit }, code) { commit('UPDATE_CODE', code)},
    updatePrice ({ commit }, price) { commit('UPDATE_PRICE', price)},
    updateStock ({ commit }, stock) { commit('UPDATE_STOCK', stock)},
    postToy({ dispatch, state }){
      axios.post('https://us-central1-ottoklauss-b4ef0.cloudfunctions.net/toys/toy' , state.currentToy.data)
      .then(() =>{
      dispatch('setToys')
      })

    },
    deleteToy({ dispatch, commit }, id)
    {commit('LOADING_OVERLAY')
      axios.delete(`https://us-central1-ottoklauss-b4ef0.cloudfunctions.net/toys/toy/${id}`)
      .then(() => {
        dispatch('setToys')
        commit('LOADING_OVERLAY_BYE')
      })
    },
    setCurrentToy({ commit }, id){
      commit('LOADING_OVERLAY')
      axios.get(`https://us-central1-ottoklauss-b4ef0.cloudfunctions.net/toys/toy/${id}`)
      .then((response) => {
        commit('SET_CURRENT_TOY', response.data)
        commit('LOADING_OVERLAY_BYE')
      })
    },
    updateToy({ state, dispatch, commit }, id) {
      commit('LOADING_OVERLAY')
      axios.put(`https://us-central1-ottoklauss-b4ef0.cloudfunctions.net/toys/toy/${id}`, state.currentToy.data)
      .then(() => {
        dispatch('setToys')
        commit('LOADING_OVERLAY_BYE')
      })
    },
    loadingOverlay({ commit }){
      commit('LOADING_OVERLAY')
    },
    closeForm({ commit }) {
      commit('SET_EMPTY_TOY')
      commit('HIDE_TOY_FORM')
    }
  },
  modules: {
  }
})
