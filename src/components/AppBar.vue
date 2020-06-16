<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
    
      <v-toolbar-title>OTTO KLAUS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="logout">
          <span class="mr-2">Cerrar sesión</span>
        <v-icon>mdi-lock</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
    methods:{
        logout(){
            Firebase.auth().signOut().then(()=> {
                this.$router.push('/login')
            })
        }
    }
}
</script>