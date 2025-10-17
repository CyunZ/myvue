

<template>
    <div style="text-align: center;">
        <div style="font-size:30px;margin-top:10px;">登录</div>
        <div>
            <el-input style="width: 200px;margin-top:10px;" v-model="username" placeholder="用户名"/>
        </div>
        <div>
            <el-input style="width: 200px;margin-top:10px;" v-model="password" type="password" placeholder="密码"/>
        </div>
        <div style="margin-top:10px;">
            <el-button @click="login()" type="primary">登录</el-button>
            <el-button @click="router.push('/signup')" type="success">注册</el-button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useTestStore } from '@/stores';

const testStore = useTestStore();

const router = useRouter();

const username = ref('')
const password = ref('')

function login(){
    axios.post('/user/login',{
        uname:username.value,
        pwd:password.value
    }).then(response =>{
        let result = response.data;
        if(result.code === 0){
            testStore.setNickName(result.nickname);
            router.push('/test');
        }else{
            alert(result.msg);
        }
    })
}

</script>