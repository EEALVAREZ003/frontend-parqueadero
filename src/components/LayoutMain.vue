<script setup>
import NavBar from "./NavBar.vue"
import SideBarMenu from "./SideBarMenu.vue"

</script>

<template>

<el-container style="height: 100vh;">

<el-header>
<NavBar />
</el-header>

<el-container>

<el-aside width="250px">
<SideBarMenu />

</el-aside>

<el-main class="main-content">
<slot name="slotLayout"> </slot>
</el-main>
</el-container>


</el-container>  
</template>



<style scoped>

.el-header{

    padding:0;
}

.el-aside {
background-color: #27484f;

}

.main-content{
    position:relative;
}


</style>