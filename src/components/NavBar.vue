<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#26b6d3"
    text-color="#010c0e"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img
        style="width: 200px"
        
        alt="APP-PARKINGRACO"
      />
    </el-menu-item>
    
    <el-sub-menu index="1">
      <template #title>Edisson Alvarez
    
    </template>
      <el-menu-item index="1-1">Pefil</el-menu-item>
      <el-menu-item index="1-2">Cerrar Sesión</el-menu-item>
      
      
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>

.el-menu-demo{

  position:relative;
  top: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
}

</style>
