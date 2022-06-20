const app = Vue.createApp({
    //data:函式=>處理資料
    data: function () {
        console.log();
        return {
            countAll: 0,
            product: [
                {
                    img: './img/checkout/Chicken.jpg',
                    name: 'Chicken momo',
                    num: '#41551',
                    count: 0,
                    price: 10.5,
                    pay: 0,
                },
                {
                    img: './img/checkout/potatoes.jpg',
                    name: 'Spicy Mexican potatoes',
                    num: '#66999',
                    count: 0,
                    price: 10.5,
                    pay: 0,
                },
                {
                    img: './img/checkout/Breakfast.jpg',
                    name: 'Breakfast',
                    num: '#86577',
                    count: 0,
                    price: 10.5,
                    pay: 0,
                },
            ]
        }
    },
    //methods:方法=>物件
    methods: {
        singlePay(item) {
            // console.log(item);
            return (item.pay = item.count * item.price).toFixed(2)
        },
        Reduce(item) {
            if (item.count <= 0) {
                alert('請勿輸入負數')

            } else {
                item.count--;
            }
            // console.log(item.count);
            // item.count > 0 ? item.count-- : item.count;
        },
        Increase(item) {
            item.count++;
            // console.log(item.count);
            // item.count < 99 ? item.count++ : item.count;
        },
        allCount(product) {
            console.log(product);
            for(var i=0; i<product.length; i++){
                this.countAll += product[i].count;
            }
            console.log(product.length);
            console.log(product[1].count);
            return this.countAll
        },
        
    },
    //mounted 函式=>做初始化=>一開始的時候只執行一次
    mounted: function () {
        console.log(456);
    },
}).mount('#app');