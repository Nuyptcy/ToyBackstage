<template>
  <div class="mt-5">
    <table class="table bg-light rounded text-center">
      <thead>
        <tr>
          <th scope="col" v-for="item in headers" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productList" :key="item.title">
          <th scope="row">{{ item.title }}</th>
          <td>
            <img class="h-50 w-50" />
          </td>
          <td>{{ item.type }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <button
              type="button"
              class="btn btn-warning text-white"
              @click="openEditModal(item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-danger m-lg-3"
              @click="deleteProduct(item)"
            >
              刪除
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="6" class="text-center">
            <button class="plus-set rounded-3" @click="openEditModal">
              <i class="fas fa-plus fa-1x"></i>
            </button>
          </td>
        </tr>

        <editProduct
          v-if="showEditModal"
          :productListLength="productList.length"
          :eidtProductDetail="eidtProductDetail"
          @closeModal="showEditModal = false"
          @addProduct="addProductHandle"
          @cleanEditProduct="eidtProductDetail = null"
        />
      </tbody>
    </table>
    <div class="d-flex justify-content-center">
      <pagination />
    </div>
  </div>
</template>

<script>
import pagination from "@/components/pagination.vue";
import editProduct from "@/components/editProduct.vue";

export default {
  components: {
    pagination,
    editProduct,
  },

  data() {
    return {
      eidtProductDetail: null,
      headers: ["商品名稱", "商品圖片", "商品類型", "價格", "庫存", "操作"],
      showEditModal: false,
      productList: [
        {
          id: 1,
          title: "機械暴龍獸",
          type: "模型",
          price: 1950,
          stock: 10,
        },
        {
          id: 2,
          title: "胖胖星球獸",
          type: "模型",
          price: 10,
          stock: 10,
        },
        {
          id: 3,
          title: "貓貓星球獸",
          type: "模型",
          price: 10,
          stock: 10,
        },
        {
          id: 4,
          title: "咪咪星球獸",
          type: "模型",
          price: 10,
          stock: 10,
        },
      ],
    };
  },

  methods: {
    openEditModal(item) {
      // 傳item給子層
      this.eidtProductDetail = item;
      this.showEditModal = true;
      console.log(item);
      // 編輯
    },
    // 刪除
    deleteProduct(item) {
      const index = this.productList.indexOf(item);
      console.log(index);
      if (index !== -1) {
        this.productList.splice(index, 1);
      }
    },
    addProductHandle(newProduct) {
      this.productList.push(newProduct);
    },
    //編輯
    updateProduct(updatedProduct) {
      //
      const index = this.productList.findIndex(
        (item) => item.id === updatedProduct.id
      );

      if (index !== -1) {
        this.productList.splice(index, 1, updatedProduct);
        console.log(this.productList);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
button i {
  border: 0px #fff solid;
}
.modal-cover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
.card {
  z-index: 888;
  background-color: #fff;
  width: 80%;
  height: 80vh;
}

.close {
  color: #999ea2;
}

.close:hover {
  color: #000;
}
</style>
