const app = Vue.createApp({
    //data:函式=>處理資料
    data: function () {
        console.log();
        return {
            countAll: 0,
            subtotal: 0,
            freight: 24.9,
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
    },
    computed: {
        allCount() {
            this.countAll = 0;
            console.log('this.countAll=>', this.countAll);
            this.product.forEach(item => {
                this.countAll += item.count;
            });
            return this.countAll;
        },
        Subtotal() {
            this.subtotal = 0;
            this.product.forEach(item => {
                this.subtotal += item.count * item.price;
                console.log(item.count);
            });
            return (this.subtotal).toFixed(2);
        },
        total() {
            return (this.subtotal + this.freight).toFixed(2)
        },
        Freight() {
            return this.freight.toFixed(2)
        }
    },
    //mounted 函式=>做初始化=>一開始的時候只執行一次
    mounted: function () {
        console.log(456);
    },
}).mount('#app');