<template>
  <div class="mt-5">
    <table class="table bg-light rounded text-center"> 
      <thead>
        <tr>
          <th scope="col" v-for="item in headers" :key="item"> {{item}} </th>   
        </tr>
      </thead>
      <productItem/>
    </table>
    <div class="d-flex justify-content-center">
      <pagination />
    </div>
  </div>
</template>

<script>
import pagination from "@/components/pagination.vue";
import productItem from "@/components/productItem.vue";


export default {
  components: {
    pagination,
    productItem
  },

  data() {
    return {
      headers:['商品名稱','商品圖片','商品類型','價格','庫存','操作']

      ,
    };
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
  button i {
    border: 0px #fff solid;
  }
</style>
  <!-- <div class="modal-cover d-flex justify-content-center align-items-center" v-if="showModal">
            <div class="card">
                <div class="border d-flex justify-content-between  align-items-center p-3">
                    <div class="bordor fs-20">編輯商品</div>
                    <button type="button" class="btn close" aria-label="Close">x 
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
                    <tr v-for="item in productList" :key="item" class="">
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
                <div class="d-flex justify-content-center align-items-center border mt-3 p-3">
                <button type="button" class="btn ">儲存</button>
                </div>
            </div>
        </div> -->