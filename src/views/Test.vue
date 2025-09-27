

<template>
<el-row>
    <el-col :span="8" style="text-align: center;">
        <el-button @click="router.push('/his')"><Icon icon="healthicons:doctor-male" width="24" height="24" />医院信息系统</el-button>
    </el-col>
    <el-col :span="8"  style="text-align: center;">
        <el-button><Icon icon="healthicons:money-bag" width="24" height="24" />收银系统</el-button>
    </el-col>
    <el-col :span="8" style="text-align: center;">
        <el-button><Icon icon="mingcute:music-line" width="24" height="24" />音乐平台</el-button>
    </el-col>
    <el-col :span="8" style="text-align: center;margin-top: 10px;">
        <el-button><Icon icon="tabler:video" width="24" height="24" />视频平台</el-button>
    </el-col>
    <el-col :span="8" style="text-align: center;margin-top: 10px;">
        <el-button @click="router.push('/shopping')"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><defs><mask id="SVGIVU7Qcgm"><g fill="none"><path fill="#555555" d="M39 32H13L8 12h36z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"/><circle cx="13" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><circle cx="39" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#SVGIVU7Qcgm)"/></svg>购物平台</el-button>
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
    ])
})

</script>