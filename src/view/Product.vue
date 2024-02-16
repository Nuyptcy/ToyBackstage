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
      <addProduct/>
    </div>
  </div>

</template>

<script>
import pagination from "@/components/pagination.vue";
import productItem from "@/components/productItem.vue";
import addProduct from "@/components/addProduct.vue";



export default {
  components: {
    pagination,
    productItem,
    addProduct,
  },

  data() {
    return {
      headers:['商品名稱','商品圖片','商品類型','價格','庫存','操作']
      // imgUrl: new URL("../assets/img/機械暴龍獸.jpg", import.meta.url),
      // newName: "",
      // newType: "",
      // newPrice: "",
      // newAmount: "",
      ,
    };
  },

  methods: {

    // addProduct() {
    //   let nameValue = this.newName.trim();
    //   let typeValue = this.newType.trim();
    //   let priceValue = this.newPrice.trim();
    //   let amountValue = this.newAmount.trim();
    //   if (!nameValue || !typeValue || !priceValue || !amountValue) {
    //     return;
    //   }
    //   this.productList.push({
    //     title: nameValue,
    //     type: typeValue,
    //     price: priceValue,
    //     amount: amountValue,
    //   });
    //   this.newName = "";
    //   this.newType = "";
    //   this.newPrice = "";
    //   this.newAmount = "";
    // },
    // removeProduct(key) {
    //   this.productList.splice(key, 1);
    // },
    // removeImg() {
    //   this;
    // },
    // fileSelected(e) {
    //   const file = e.target.files.item(0);
    //   const reader = new FileReader();
    //   reader.addEventListener("load", this.imageLoaded);
    //   reader.readAsDataURL(file);
    // },
    // imageLoaded(e) {
    //   this.image = e.target.result;
    // },
    // upload() {
    //   axios.post("/upload", { image: this.image });
    // },
  },
};
</script>

<style lang="scss" scoped>
 
  .plus-set {
    &:hover {
      background-color: var(--button-color1);
      color: #fff;
    }
  }


.modal-content {
  width: 950px;
  tbody {
    button {
      width: 80px;
      height: 30px;
      border: 1px solid gray;
      &:hover {
        background-color: #3e3e3e;
        color: #fff;
      }
    }
  }
  .btn-close {
    border: 0px solid #fff;
    cursor: pointer;
  }
  .beclose {
    @include delete-button;
  }
  .save-btn {
    @include orange-button;
  }
  button i {
    border: 0px #fff solid;
  }
  tr {
    td {
      &:nth-child(1) input {
        width: 240px;
        text-align: center;
      }
      &:nth-child(2) input,
      &:nth-child(3) input,
      &:nth-child(4) input,
      &:nth-child(5) input {
        width: 110px;
        text-align: center;
      }
    }
  }
}
</style>
