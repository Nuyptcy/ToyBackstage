<template>
  <div class="modal-cover d-flex justify-content-center align-items-center">
    <div class="wrap">
      <div class="border d-flex justify-content-between align-items-center p-3">
        <div class="bordor fs-20 p-2">編輯商品</div>
        <button type="button" class="btn close" @click="closeModal">x</button>
      </div>
      <form class="form">
        <div class="form-group row mt-3">
          <label for="productName" class="col-sm-2 col-form-label"
            >商品名稱</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="productName"
              v-model="productDetail.title"
            />
          </div>
        </div>
        <div class="form-group row mt-3">
          <label for="productImg" class="col-sm-2 col-form-label" 
            >商品圖片</label
          >
          <div class="col-sm-10">   
            <input type="file" id="productImgInput" @click="handleFileInput">
            <img  :src="previewUrl" style="max-width: 200px; height: 100px" alt="Preview">
          </div>
        </div>

        <div class="form-group row mt-3">
          <label for="productType" class="col-sm-2 col-form-label"
            >商品類型</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="productType"
              v-model="productDetail.type"
            />
          </div>
        </div>

        <div class="form-group row mt-3">
          <label for="productPrice" class="col-sm-2 col-form-label">價格</label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="productPrice"
              v-model="productDetail.price"
            />
          </div>
        </div>

        <div class="form-group row mt-3">
          <label for="productStone" class="col-sm-2 col-form-label">庫存</label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="productStone"
              v-model="productDetail.stock"
            />
          </div>
        </div>
      </form>

      <div class="d-flex justify-content-center align-items-center mt-3 p-3">
        <button type="button" @click="submit" class="btn btn-green text-white">
          儲存
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    productListLength: {
      type: Number,
      required: true,
    },
    eidtProductDetail: {
      type: Object,
    },
  },
  emits: ["closeModal", "addProduct", "cleanEditProduct"],
  data() {
    return {
      //預設上傳圖片
      previewUrl: "../assets/img/defaultImg.jpg",
      productDetail: {
        title: "",
        type: "",
        price: "",
        stock: "",
      },
    };
  },
  methods: {
    handleFileInput(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.previewUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    closeModal() {
      this.$emit("closeModal");
    },
    submit() {
      if (this.eidtProductDetail) {
        this.$emit("updateProduct", this.productDetail);
      } else {
        this.productDetail.id = this.productListLength + 1;
        this.$emit("addProduct", this.productDetail);
      }
      this.closeModal();
    },
  },
  mounted() {
    // this.productDetail = {
    //   ...this.eidtProductDetail
    // }
    if (this.eidtProductDetail) {
      Object.assign(this.productDetail, this.eidtProductDetail);
    }
  },
  unmounted() {
    this.$emit("cleanEditProduct");
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
.wrap {
  z-index: 888;
  background-color: #fff;
  width: 80%;
  height: 80vh;
}

.form {
  max-height: 380px;
  overflow-y: auto;
}

.close {
  color: #999ea2;
}

.close:hover {
  color: #000;
}

.btn-green {
  background-color: #73d355;
}

.btn-green:hover {
  background-color: #5bc53b;
}

file-input {
  position: relative;
  display: inline-block;
}

.file-input input[type="file"] {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
}


</style>
