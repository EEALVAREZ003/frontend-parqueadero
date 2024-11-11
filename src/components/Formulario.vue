<template>
   

   <div class="container_header">
    <h2 class="titulo">Modulo de {{titulo}}</h2>
    <el-row justify="center" align="middle">
    <el-button type="primary">Cancelar</el-button>
    <el-button type="succes">Guardar</el-button>
    </el-row>
    <slot name="slotFormulario"></slot>
</div>

</template>

<script setup>

defineProps({
  titulo: String,
})
</script>

<style scoped>
</style>