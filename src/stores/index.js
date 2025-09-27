import { defineStore } from "pinia";

export const useTestStore = defineStore('test',{
    state:()=>{
        return {
            nickname:''
        }
    },
    actions:{
        setNickName(name){
            this.nickname = name;
        }
    }
})