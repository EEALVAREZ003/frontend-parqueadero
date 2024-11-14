<template>

<LayoutMain>

  <template #slotLayout>
    <Header
    :titulo="'Paises ejemplo'"
    :tituloBoton="'crear pais'"
    :abrir="abrirFormulario"
    >
    </Header>
<!--componente-->

    <Formulario :titulo="'titulo para el formulario'" v-model:mostrar="mostrarFormulario">
      <template #slotFormulario>
<FormPaises

>

</FormPaises>
      </template>
    </Formulario>

  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Nombre" width="180" />
    <el-table-column prop="name" label="Placa" width="180" />
    <el-table-column prop="address" label="Conductor" />
    <el-table-column fixed="right" label="Operacion" min-width="120">
      <template #default>
        <el-button link type="primary" :icon="Edit"></el-button>
        <el-button link type="primary" :icon="Delete" ></el-button>
      </template>
    </el-table-column>
  </el-table>


  </template>
  
</LayoutMain>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import LayoutMain from '../../components/LayoutMain.vue';
import Header from '../../components/Header.vue';
import {Delete,Edit} from '@element-plus/icons-Vue';
import Formulario from '../../components/Formulario.vue';
import FormPaises from './components/formPaises.vue';
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'

const mostrarFormulario = ref(false)

//esta es otra manera para hacer una funcion aparte del function
const abrirFormulario =()=>{
mostrarFormulario.value=true
} 
console.log(mostrarFormulario)


const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

