<template>
    <!--对话内容区域-->
    <el-scrollbar ref="scrollbarRef" style="height: 400px;">
        <div v-for="content in contentList"> 
            <div v-if="content.role == 'assistant'" class="assistant">{{ content.thinkContent }}</div>
            <div :class="content.role">{{ content.content }}</div>
        </div>
        <el-progress v-if="loading" :percentage="100" :indeterminate="true" status="success" style="margin-top: 10px;">
            <el-text>AI正在思考中，请稍等......</el-text>
        </el-progress>
    </el-scrollbar>
    <!--发送消息区域-->
    <div style="margin-top: 10px;">
        <el-input v-model="msg" type="textarea" :rows="3" style="width: 80%;"></el-input>
        <el-button @click="chat()" :loading="loading" type="primary" style="margin-left: 10px;">发送</el-button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import axios from 'axios';

const scrollbarRef=ref(null);
const router = useRouter();
const emit=defineEmits(['goToBreadcrumbItems'])
const msg = ref('')
const contentList = ref([
    // {'role':'assistant','thinkContent':'AI的思考内容','content':'你好，有什么可以帮你？'},
    // {'role':'user','content':'帮我查一下天气'}
])
const loading = ref(false)

onMounted(()=>{
    emit('goToBreadcrumbItems',[
        {title:'首页',path:'/test'},
        {title:'AI聊天'},
    ])
    getChatContent();
})

function getChatContent(){
    axios.get('/aichat/getChatContent').then(response =>{
        let result = response.data;
        if(result.code === 0){
            contentList.value= result.data;
            const scrollbar = scrollbarRef.value;
            setTimeout(()=>{
                scrollbar.setScrollTop(scrollbar.wrapRef.scrollHeight);
            },0)
        }
    })
}

function chat(){
    if(msg.value === ''){
        ElMessage.warning('发送的内容不能为空');
        return;
    }
    loading.value = true;
    contentList.value.push({'role':'user','content':msg.value});
    const scrollbar = scrollbarRef.value;
    setTimeout(()=>{
        scrollbar.setScrollTop(scrollbar.wrapRef.scrollHeight);
    },0)
    axios.post('/aichat/chat',{
        content:msg.value,
    }).then(response =>{
        let result = response.data;
        if(result.code === 0){
            contentList.value.push({'role':'assistant','content':result.content,'thinkContent':result.thinkContent});
            const scrollbar = scrollbarRef.value;
            setTimeout(()=>{
                scrollbar.setScrollTop(scrollbar.wrapRef.scrollHeight);
            },0)
        }else{
            ElMessage.error(result.msg);
        }
        loading.value = false;
    })
    msg.value = '';
}

</script>

<style scoped>
.assistant{margin-top:5px;padding: 5px;background-color: rgb(222, 223, 224);border-radius: 10px;}
.user{text-align:end;margin-top:5px;padding: 5px;background-color: rgb(198, 226, 255);border-radius: 10px;}
</style>