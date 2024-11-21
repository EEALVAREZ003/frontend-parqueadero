<template>
  <el-row class="tac">
    <el-col :span="12" class="sidebar">
      
      <el-menu

      router
        :default-active="1"
        
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
         
          
           <el-menu-item index="paises">Paises</el-menu-item>
           <el-menu-item index="cargos">Vehiculos</el-menu-item>
           <el-menu-item index="ejemplo">Centinela</el-menu-item>

           
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

}

.el-menu-vertical-demo {
  width: 250px;
min-height:100%;
}






</style>
