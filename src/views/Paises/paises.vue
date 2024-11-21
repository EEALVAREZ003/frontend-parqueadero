<template>

<LayoutMain>

  <template #slotLayout>
    <Header
    :titulo="'Paises ejemplo'"
    :tituloBoton="'crear pais'"
    :abrir= "abrirFormulario"
    />
   <!--componente-->

    <Formulario :titulo="'titulo para el formulario'" v-model:is-Open="mostrarFormulario">
      <template #slotFormulario>

        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <FormPaises v-model:is-open="mostrarFormulario"/>
          </el-col>

        </el-row>

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

