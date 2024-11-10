<script setup>
import NavBar from "./NavBar.vue"
import SideBarMenu from "./SideBarMenu.vue"

</script>

<template>

    <div>


    </div>
<el-container style="height: 100vh">

<el-header>
<NavBar />
</el-header>

<el-container>

<el-aside width="400px">
<SideBarMenu />

</el-aside>

<el-main>
<slot name="slotLayout">

    hola
</slot>

</el-main>

</el-container>


</el-container>  
</template>



<style scoped>

.el-container{

flex:1;
display: flex;

}
</style>