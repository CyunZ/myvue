

<template>
    <div v-if="testStore.nickname !== '' " style="display: inline-block;width: 57%;">
        <el-breadcrumb v-if="testStore.nickname !== '' ">
            <el-breadcrumb-item v-for="item in breadcrumbItems" :to="item.path">{{ item.title }}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div v-if="testStore.nickname !== '' "  style="text-align: end;display: inline-block;width: 43%;">
        <el-avatar @click="router.push('/userinfo')" style="vertical-align: middle;" />
        <el-link @click="router.push('/userinfo')">{{ testStore.nickname }}</el-link>
        <el-link @click="logout()" style="margin-left: 10px;" type="info">退出登录</el-link>
    </div>
    <el-divider v-if="testStore.nickname !== '' " style="margin: 4px 0;"/>
    <RouterView @goToBreadcrumbItems="setBreadcrumbItems"/>
 
</template>


<script setup>
import { useTestStore } from './stores';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { ref } from 'vue';

const breadcrumbItems = ref([
    {title:'首页',path:'/test'},
    {title:'购物平台',path:'/shopping'},
    {title:'零元购'},
])

const router = useRouter();
const testStore = useTestStore();

function autoLogin(){
    axios.get('/test/autoLogin').then(response=>{
        let result = response.data;
        if (result.code === 0){
            testStore.setNickName(result.nickname);
            router.push('/test');
        }
    })
}

onMounted(()=>{
    autoLogin();
})

function logout(){
    axios.get('/test/logout').then(response=>{
        let result = response.data;
        if (result.code === 0){
            testStore.setNickName('');
            router.push('/');
            ElMessage.success('退出登录成功');
        }else{
            ElMessage.warning(result.msg);
        }
    })
}

function setBreadcrumbItems(items){
    breadcrumbItems.value = items;
}

</script>

<style scoped>

</style>
