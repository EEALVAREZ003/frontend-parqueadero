<template>
   <el-container v-show="isVisible" class="form-container">

    <el-row :gutter="5" class="form-container_row">

      <el-col :xs="18" :sm="18" :md="18" :lg="22" :xl="22" class="form-container_title-col">

        <el-button text class="form-container_title-button" size="large">
          {{titulo}}
        </el-button>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="2" :xl="2" class="form-container_button-group">
        <el-button size="large" class="form-container_button-cancel" @click="irAtras">Cancelar</el-button>
        <el-button type="primary" size="large" class="form-container_button-submit" @click="submit">Guardar</el-button>

      </el-col>

    </el-row>

    <el-main class="form-container_main">
      <slot name="slotForm"></slot>

    </el-main>
   </el-container>

   <!--div class="container_header" v-if="isVisible"-->

    <!--Se puede utilizar de estas dos maneras la propiedad de titulo
    
    <h2 class="titulo">Modulo de {{titulo}}</h2>
    <h2 class="titulo">Modulo de {{propiedad.titulo}}</h2>
    -->

    <!--h2 class="titulo">Modulo de {{titulo}}</h2-->
    
    <!--h1 v-if="prueba">{{nombre}}</h1-->
        
    <!--el-row justify="center" align="middle">
    <el-button type="primary">Cancelar</el-button>
    <el-button type="succes">Guardar</el-button>
    </el-row>
    <slot name="slotFormulario"></slot>
</div-->

</template>

<script setup>
import {computed} from 'vue';


const propiedad=defineProps({
  titulo: String,
  isEdit: Boolean,
  isOpen: Boolean,
})

const isVisible = computed (()=>propiedad.isOpen);

const $emit=defineEmits(['update:is-open']);

const irAtras=() =>{
$emit('update:is-open',false);

}

</script>

<style scoped>
</style>