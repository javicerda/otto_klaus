<template>
   <div class="text-center">
    <v-dialog :value="showForm" width="500" persistent>
      <v-card>
        <v-card-title
        class="headline blue white--text"
        dark
        >
          Ingresa Nuevo Juguete
        <v-btn color="warning" fab dark small class="ml-15" @click="hideToyForm">
          <v-icon dark>mdi-close</v-icon>
        </v-btn>
        </v-card-title>

        <v-form class="mx-10">
        <v-text-field label="Nombre" type="text" :value="currentToy.data.name" @input="updateName" single-line/>
        <v-text-field label="Código" type="text" :value="currentToy.data.code" @input="updateCode" single-line/>
        <v-text-field label="Precio" prefix="$" :value="currentToy.data.price" @input="updatePrice" single-line/>
        <v-text-field label="stock" suffix="unidades" :value="currentToy.data.stock" @input="updateStock" single-line/>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn depressed color="warning" class="mr-8 font-weight-black" @click="submitForm">{{ !!currentToy.id ? 'Actualizar' : 'Crear' }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions([ 'hideToyForm', 'updateName', 'updateCode', 'updatePrice', 'updateStock', 'postToy', 'updateToy']),
        submitForm(){
          if(this.currentToy.id) {
            // si tiene id, llama a la función que actualiza los datos
            this.updateToy(this.currentToy.id)
          } else {
            this.postToy()
          }
          this.hideToyForm()
        }
    },
    computed:{
        ...mapState([ 'showForm', 'currentToy' ])
    },
}
</script>