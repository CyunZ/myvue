<template>
    <div>候诊病人列表</div>
    <el-table :data="houZhenList" height="300">
        <el-table-column prop="name" label="姓名"/>
        <el-table-column prop="time" label="挂号时间"/>
        <el-table-column prop="genber" label="性别"/>
        <el-table-column prop="age" label="年龄"/>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button @click="jieZhen(scope.row)">接诊</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import axios from 'axios';

const houZhenList = ref([])

function getHouZhenList(){
       axios.get('/clinic/getHouZhenList').then(response =>{
        let result = response.data;
        if(result.code === 0){
            houZhenList.value = result.data;
        }
    })
}

const emit=defineEmits(['goToBreadcrumbItems'])

onMounted(()=>{
    emit('goToBreadcrumbItems',[
        {title:'首页',path:'/test'},
        {title:'医院信息系统',path:'/his'},
        {title:'门诊工作站'},
    ])
    getHouZhenList();
})

import { ElNotification } from 'element-plus';
function jieZhen(row){
    ElNotification({
        title:'接诊',message:row
    })
}

</script>