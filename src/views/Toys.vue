<template>
  <div class="home"> 
    <app-bar> </app-bar>
    <v-main>
      <v-btn depressed large color="warning font-weight-black" class="mt-6 mx-8" @click="displayToyForm">Nuevo juguete</v-btn>
      <toys-list> </toys-list>
      <toys-form> </toys-form>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import ToysList from '../components/ToysList'
import ToysForm from '../components/ToysForm'
import { mapActions } from 'vuex'
export default {
  components: {
    AppBar,
    ToysList,
    ToysForm
  },
  methods: {
    ...mapActions ([ 'displayToyForm' ])
  }
}
</script>
