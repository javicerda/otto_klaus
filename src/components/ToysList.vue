<template>
    <div class="mt-6 mx-8">
        <v-simple-table class="mt-6">
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Código</th>
                <th class="text-left">Precio</th>
                <th class="text-left">Stock</th>
                <th class="text-left">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="toy in toys" :key="toy.id">
                <td>{{ toy.data.name }}</td>
                <td>{{ toy.data.code }}</td>
                <td>{{ toy.data.price }}</td>
                <td>{{ toy.data.stock }}</td>
                <td> 
                <v-btn text @click="removeToy(toy.id)">
                <v-icon>mdi-delete</v-icon> </v-btn>
                <v-btn text @click="editToy(toy.id)">
                <v-icon>mdi-pencil</v-icon> </v-btn>
                    
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([ 'setToys', 'deleteToy', 'setCurrentToy', 'displayToyForm']),
        removeToy(id){
            let confirmation = confirm('¿Estás seguro que deseas eliminar este juguete?')
            if (confirmation) {
                this.deleteToy(id)
            }
        },
        editToy(id){
            this.displayToyForm()
        //establecer el juguete actual, en base al id entregado
        this.setCurrentToy(id)
        //desplegar el formulario con el juguete actual
        
        }
    },
    computed:{
        ...mapState([ 'toys' ])
    },
    created() {
        this.setToys()
        

    }

    //acción que me debuelva la lista ordenada.
}
</script>

<style>
    
</style>