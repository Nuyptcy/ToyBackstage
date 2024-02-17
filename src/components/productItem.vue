<template>
    <tbody>
        <tr v-for="item in productList" :key="item.title">
            <th scope="row">{{ item.title }}</th>
            <td >
                <img class="h-50 w-50" /> 
            </td>
            <td >{{ item.type }}</td>
            <td >{{ item.price }}</td>
            <td >{{ item.amount }}</td>
            <td >
                <button
                    type="button"
                    class="btn btn-warning text-white"
                    @click="showEditModal = !showEditModal"
                >
                    編輯
                </button>
            
                <addProduct v-if="showEditModal"/>
                <button
                    type="button"
                    class="btn btn-danger m-lg-3"
                >
                    刪除
                </button> 
            </td>
        </tr>
        <tr>
            <td colspan="6" class="text-center">
                <button class="plus-set rounded-3" @click="showAddModal =!showAddModal">
                    <i class="fas fa-plus fa-1x"></i>
                </button>
            </td>
        </tr>
        <addProduct v-if="showAddModal" :productList="productList"/>
        <editProduct v-if="showEditModal" :productList="productList" @close-modal="showEditModal = false" />   
        </tbody>
</template>

<script>
import addProduct from "@/components/addProduct.vue";
import editProduct from "@/components/editProduct.vue";


export default {
    components:{
        addProduct,
        editProduct
    },
    data() {
        return {
            showAddModal: false,
            showEditModal: false,
            productList: [
                {
                    title: "機械暴龍獸",
                    type: "模型",
                    price: "$1950",
                    amount: "10",
                },
                {
                    title: "胖胖星球獸",
                    type: "模型",
                    price: "$10",
                    amount: "10",
                },
                {
                    title: "星球獸",
                    type: "模型",
                    price: "$10",
                    amount: "10",
                }
            ]
        }
    },


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
