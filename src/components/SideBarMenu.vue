<template>
  <el-row class="tac">
    <el-col :span="12">
      
      <el-menu
        default-active="1"
        
        class="el-menu-vertical-demo"
        background-color="#26b6d3"
        text-color="#010c0e"
        collapse-transition
    >
  
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
         
          
           <el-menu-item index="1-1">Personas</el-menu-item>
           <el-menu-item index="1-2">Vehiculos</el-menu-item>
           <el-menu-item index="1-3">Centinela</el-menu-item>

           
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
