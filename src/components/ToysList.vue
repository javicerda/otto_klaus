<template>
    <div class="mt-6">
        <v-simple-table class="mt-6">
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Código</th>
                <th class="text-left">Precio</th>
                <th class="text-left">Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="toy in toys" :key="toy.id">
                <td>{{ toy.data.name }}</td>
                <td>{{ toy.data.code }}</td>
                <td>{{ toy.data.price }}</td>
                <td>{{ toy.data.stock }}</td>
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
        ...mapActions([ 'setToys' ])
    },
    computed:{
        ...mapState([ 'toys' ])
    },
    created() {
        this.setToys()
    }
}
</script>

<style>
    
</style>