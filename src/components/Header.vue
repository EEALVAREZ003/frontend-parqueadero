<template>

<div class="container">
    <h2>Modulo de {{titulo}}</h2>
    <el-button type="primary">Nuevo</el-button>
</div>

</template>

<script setup>

// in <script setup>
defineProps({
  titulo: String
})

</script>

<style scoped>

</style>