import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Firebase from 'firebase'
import firebaseConfig from '../config/firebase.js'

Firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

let app= ''
Firebase.auth().onAuthStateChanged(()=>{
 if(!app){
  app = new Vue({
   vuetify,  
   router,
   store,
   render: h => h(App)
  }).$mount('#app')
 } 
})