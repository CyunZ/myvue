<template>
<Icon icon="fluent-emoji-flat:police-officer-medium-light" width="100" height="100" />
<Icon icon="noto:police-car" width="100" height="100" />
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { onMounted } from 'vue';

const emit=defineEmits(['goToBreadcrumbItems'])

onMounted(()=>{
    emit('goToBreadcrumbItems',[
        {title:'首页',path:'/test'},
        {title:'购物平台',path:'/shopping'},
        {title:'零元购'},
    ])
})
</script>