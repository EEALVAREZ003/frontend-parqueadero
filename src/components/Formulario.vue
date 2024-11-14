<template>
   

   <div class="container_header" v-if="isVisible">

    <!--Se puede utilizar de estas dos maneras la propiedad de titulo
    
    <h2 class="titulo">Modulo de {{titulo}}</h2>
    <h2 class="titulo">Modulo de {{propiedad.titulo}}</h2>
    -->

    <h2 class="titulo">Modulo de {{titulo}}</h2>
    
    <!--h1 v-if="prueba">{{nombre}}</h1-->
        
    <el-row justify="center" align="middle">
    <el-button type="primary">Cancelar</el-button>
    <el-button type="succes">Guardar</el-button>
    </el-row>
    <slot name="slotFormulario"></slot>
</div>

</template>

<script setup>
import {computed, ref} from 'vue';


const propiedad=defineProps({
  titulo: String,
  mostrar: Boolean,
})
console.log('estado.Form',propiedad.mostrar);
const isVisible = computed (()=>propiedad.mostrar)

</script>

<style scoped>
</style>