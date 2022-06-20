Vue.createApp({
    //data:函式=>處理資料
    data: function () {
        return {
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
                    name:'Breakfast',
                    num: '#86577',
                    count: 0,
                    price: 10.5,
                    pay: 0,
                },
            ]
        }
        console.log(this.product.count1);
    },
    //methods:方法=>物件
    methods: {
        singlePay() {
            return (this.product.pay = this.product.count * this.product.price).toFixed(2)
        },
        
        allCount() {
            return (this.product.count)
        },
        warn() {
            if (this.count < 0) {
                alert('請勿輸入負數')
            }
        },
       
    },
    //mounted 函式=>做初始化=>一開始的時候只執行一次
    mounted: function () {
        console.log(456);
    },
}).mount('#app');