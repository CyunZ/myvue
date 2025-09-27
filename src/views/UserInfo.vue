

<template>
<div>个人详情</div>
<div>{{ userInfo }}</div>
<el-button @click="router.push('/')">返回首页</el-button>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
const router = useRouter();
const userInfo = ref({});

function getUserInfo(){
    axios.get('/test/getUserInfo').then(response =>{
        let result = response.data;
        if(result.code ===0){
            userInfo.value = result.userInfo;
        }else{
            ElMessage.warning(result.msg)
        }
    })
}

onMounted( ()=>{
    getUserInfo();
})

</script>