<template>
  <div class="about">
  <v-card width='400px' class="mx-auto my-auto">
       <v-card-title class="pb-0">
       <h1 class="mx-auto mb-5">Login</h1>
       </v-card-title>
       <v-card-text>
         <v-form>
           <v-text-field label='Usuario' 
           prepend-icon='mdi-account-circle'
           v-model="user"
           />
           <v-text-field label='Contraseña' :type="showPassword ? 'text' : 'password'"
            prepend-icon='mdi-lock'
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            />
         </v-form>
       </v-card-text>
       <v-divider></v-divider>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color='info' @click="login">Login</v-btn>
       </v-card-actions>
     </v-card>

  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: 'App',

  data: () => ({
    user:'',
    password: '',
    showPassword: false
  }),
  methods:{
    login(){
      Firebase.auth().signInWithEmailAndPassword(this.user, this.password)
      .then(()=>{
        this.$router.push('/toys')
        alert (`Bienvenido ${this.user}`)
      }) .catch(() =>{
        alert ('NOOOOOO')
      })
    }
  }
};
</script>
