<template>
   <div class="text-center">
    <v-dialog :value="showForm" width="500" persistent>
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Ingresa Nuevo Juguete
        </v-card-title>

        <v-form>
        <v-text-field label="Nombre" type="text" :value="currentToy.data.name" @input="updateName" single-line/>
        <v-text-field label="Código" type="text" :value="currentToy.data.code" @input="updateCode" single-line/>
        <v-text-field label="Precio" prefix="$" :value="currentToy.data.price" @input="updatePrice" single-line/>
        <v-text-field label="stock" suffix="unidades" :value="currentToy.data.stock" @input="updateStock" single-line/>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submitForm">Crear</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions([ 'hideToyForm', 'updateName', 'updateCode', 'updatePrice', 'updateStock', 'postToy']),
        submitForm(){
            this.postToy(),
            this.hideToyForm()
        }
    },
    computed:{
        ...mapState([ 'showForm', 'currentToy' ])
    },
}
</script>