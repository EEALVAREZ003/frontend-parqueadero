<template>
   

   <div class="container_header" v-if="isVisible">
    
    <h2 class="titulo">Modulo de {{titulo}}</h2>
        
    <el-row justify="center" align="middle">
    <el-button type="primary">Cancelar</el-button>
    <el-button type="succes">Guardar</el-button>
    </el-row>
    <slot name="slotFormulario"></slot>
</div>

</template>

<script setup>
import {ref} from 'vue';

defineProps({
  titulo: String,
})

const isVisible = ref (false)

</script>

<style scoped>
</style>