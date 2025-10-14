

<template>
    <div style="text-align: center;">
        <div style="font-size:30px;margin-top:10px;">注册</div>
        <div>
            <el-input style="width: 200px;margin-top:10px;" v-model="username" placeholder="用户名"/>
        </div>
        <div>
            <el-input style="width: 200px;margin-top:10px;" v-model="password" type="password" placeholder="密码"/>
        </div>
        <div>
            <el-input style="width: 200px;margin-top:10px;" v-model="password2" type="password" placeholder="确认密码"/>
        </div>
        <div>
            <el-input style="width: 200px;margin-top:10px;" v-model="nickname" placeholder="昵称"/>
        </div>
        <div style="margin-top:10px;">
            <el-button @click="signup()" type="primary">确认</el-button>
            <el-button @click="router.push('/')">返回</el-button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter();
const username = ref('')
const password = ref('')
const password2 = ref('')
const nickname = ref('')

function signup(){
    if(username.value === ''){
        ElMessage.warning('用户名不能为空');
        return;
    }
    if(password.value === '' || password2.value === ''){
        ElMessage.warning('密码不能为空');
        return;
    }
    if(nickname.value === ''){
        ElMessage.warning('昵称不能为空');
        return;
    }
    if(password.value !==  password2.value ){
        ElMessage.warning('两次密码不一致，请重新输入');
        return;
    }
    axios.post('/user/signup',{
        username:username.value,
        pwd:password.value,
        nickname:nickname.value
    }).then(response =>{
        let result = response.data;
        if(result.code === 0){
            ElMessage.success('注册成功')
            router.push('/');
        }else{
            ElMessage.error(result.msg);
        }
    })
}

</script>