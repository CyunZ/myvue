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

const houZhenList = [
    {name:'陈某1',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某2',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某3',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某4',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某5',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某6',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
    {name:'陈某',time:'2025-09-19 15:45:01',genber:'男',age:'18'},
]

const emit=defineEmits(['goToBreadcrumbItems'])

onMounted(()=>{
    emit('goToBreadcrumbItems',[
        {title:'首页',path:'/test'},
        {title:'医院信息系统',path:'/his'},
        {title:'门诊工作站'},
    ])
})

import { ElNotification } from 'element-plus';
function jieZhen(row){
    ElNotification({
        title:'接诊',message:row
    })
}

</script>