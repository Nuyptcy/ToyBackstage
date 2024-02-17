<template>
    <div class="modal-cover d-flex justify-content-center align-items-center" >
        <div class="card" >
            <div class="border d-flex justify-content-between  align-items-center p-3">
                <div class="bordor fs-20">編輯商品</div>
                <button type="button" class="btn" @click="closeModal">x 
                </button>
                
            </div>
            <table class="table">
                <thead>
                <tr class="text-center border-bottom">
                    <th scope="col">商品名稱</th>
                    <th scope="col">商品圖片</th>
                    <th scope="col">商品類型</th>
                    <th scope="col">價格</th>
                    <th scope="col">庫存</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in productList" :key="item.title">
                    <td>
                    <input type="text" v-model="item.title" />
                    </td>
                    <td>
                    <div class="d-flex justify-content-center">
                        <img
                        src="../assets/img/機械暴龍獸.jpg"
                        alt=""
                        class="w-75"
                        />
                    </div>
                    </td>
                    <td>
                    <input type="text" v-model="item.type" />
                    </td>
                    <td>
                    <input type="text" v-model="item.price" />
                    </td>
                    <td>
                    <input type="text" v-model="item.amount" />
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-center align-items-center mt-3 p-3">
            <button type="button" class="btn ">儲存</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
},
props: {
    productList: {
        type: Array, 
        required: true 
    }
},
methods:{
    closeModal(){
        this.showAddModal = false
    },

    }

};
</script>

<style scoped>

.modal-cover {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); 
z-index: 999; 

}
.card{
z-index: 888;
background-color: #fff;
width: 80%;
height: 80vh;
}

.close{
color: #999EA2,
}


.close:hover {
color: #000;
}
</style>
