Vue.createApp({
    //data:函式=>處理資料
    data:function() {
        console.log(123);
        return{
            
        }
    },
    //methods:方法=>物件
    methods:{

    },
    //mounted 函式=>做初始化=>一開始的時候只執行一次
    mounted:function(){
        console.log(456);
    },
}).mount('#app');