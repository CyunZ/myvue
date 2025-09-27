<template>
<el-row>
    <el-col :span="8" style="text-align: center;">
        <el-button @click="router.push('/shopping/zeroshop')"><Icon icon="mingcute:run-fill" width="24" height="24" />零元购</el-button>
    </el-col>
    <el-col :span="8"  style="text-align: center;">
        <el-button @click="router.push('/shopping/subsidy')"><Icon icon="icon-park-outline:coupon" width="24" height="24" />补贴专场</el-button>
    </el-col>
</el-row>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

import { onMounted } from 'vue';

const emit=defineEmits(['goToBreadcrumbItems'])

onMounted(()=>{
    emit('goToBreadcrumbItems',[
        {title:'首页',path:'/test'},
        {title:'购物平台'},
    ])
})

</script>