<template>
  <el-row class="tac">
    <el-col :span="12" class="sidebar">
      
      <el-menu
        default-active="1"
        
        class="el-menu-vertical-demo"
        background-color="#27484f"
        text-color="#ffffff"
        collapse-transition
    >
  
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Administrador</span>
          </template>
         
          
           <el-menu-item index="1-2">Personas</el-menu-item>
           <el-menu-item index="1-3">Vehiculos</el-menu-item>
           <el-menu-item index="1-4">Centinela</el-menu-item>

           
        </el-sub-menu>

         <el-sub-menu index="2">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>Configuracion</span>
          </template>
         
          
           <el-menu-item index="2-1">Historial</el-menu-item>
           <el-menu-item index="2-2">Usuarios</el-menu-item>
                      
        </el-sub-menu>
        
      </el-menu>
    </el-col>
    
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

</script>

<style scoped>

html, body{
margin:0;
padding:0;
height: 100%;
}

.sidebar {
height:100vh;
overflow: auto;
}

.el-menu-vertical-demo {
height:100%;
}






</style>
