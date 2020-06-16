<template>
  <div class="home"> 
    <app-bar> </app-bar>
    <v-main>
      <v-btn depressed large color="warning font-weight-black" class="mt-6 mx-8" @click="displayToyForm">Nuevo juguete</v-btn>
      <toys-list> </toys-list>
      <toys-form> </toys-form>
      <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import ToysList from '../components/ToysList'
import ToysForm from '../components/ToysForm'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    AppBar,
    ToysList,
    ToysForm
  },
  methods: {
    ...mapActions ([ 'displayToyForm' ])
  },
   computed:{
        ...mapState([ 'overlay' ])
    },
}
</script>

    