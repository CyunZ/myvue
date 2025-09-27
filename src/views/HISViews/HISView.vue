<template>
<el-row>
    <el-col :span="8" style="text-align: center;">
        <el-button @click="router.push('/his/clinic')"><Icon icon="healthicons:ambulatory-clinic" width="24" height="24" />门诊工作站</el-button>
    </el-col>
    <el-col :span="8"  style="text-align: center;">
        <el-button @click="router.push('/his/inpatient')"><Icon icon="medical-icon:i-inpatient" width="24" height="24" />住院工作站</el-button>
    </el-col>
</el-row>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';


const router = useRouter();
const emit=defineEmits(['goToBreadcrumbItems'])

onMounted(()=>{
    emit('goToBreadcrumbItems',[
        {title:'首页',path:'/test'},
        {title:'医院信息系统'},
    ])
})


</script>