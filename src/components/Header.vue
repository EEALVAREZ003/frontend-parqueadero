<template>

<div class="container">

    <div class="container_header">
    <h2>Modulo de {{titulo}}</h2>
    <el-button type="primary">{{tituloBoton}}</el-button>

</div>
</div>

</template>

<script setup>

// in <script setup>
defineProps({
  titulo: String,
  tituloBoton: String,
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