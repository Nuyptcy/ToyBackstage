<template>
    <tbody>
        <tr class="bg-success" v-for="item in productList" :key="item">
            <th scope="row">{{ item.title }}</th>
            <td >
            <img :src="imgUrl" class="h-50 w-50" />
            </td>
            <td >{{ item.type }}</td>
            <td >{{ item.price }}</td>
            <td >{{ item.amount }}</td>
            <td >
            <button
                type="button"
                class="btn btn-warning text-white"
            >
                編輯
            </button>
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
                <button
                class="plus-set rounded-3"
                >
                <i class="fas fa-plus fa-1x"></i>
                </button>
            </td>
        </tr>
    </tbody>
    
</template>
<script>
export default{
    data(){
        return{
            productList:[
                {
                    title: "機械暴龍獸",
                    type: "模型",
                    price: "$1950",
                    amount: "10",
                }
            ]
        }
    }
}
</script>