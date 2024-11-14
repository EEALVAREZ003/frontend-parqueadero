<template>

<div class="container">

    <div class="container_header">
    <h2 class="titulo">Modulo de {{titulo}}</h2>
    <el-row justify="center" align="middle">
    <el-button type="primary" @click="abrir">{{tituloBoton}}</el-button>
    </el-row>
</div>
</div>

</template>

<script setup>

// in <script setup>
defineProps({
  titulo: String,
  tituloBoton: String,
  abrir:{
    type:Function
 }
})

</script>

<style scoped>

.container{
    margin-bottom: 10px;
}

.container_header{

    display: flex;
    justify-content: space-between

}

</style>