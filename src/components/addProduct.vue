<template>
    <div class="d-flex justify-content-center">
        <div class="modal-header">
        <h5>編輯商品</h5>
        <button
            type="button"
            class="btn btn-close"
        ></button>
        </div>
        <div class="modal-body">
        <table class="table">
            <thead>
            <tr class="text-center">
                <th scope="col">商品名稱</th>
                <th scope="col">商品圖片</th>
                <th scope="col">商品類型</th>
                <th scope="col">價格</th>
                <th scope="col">庫存</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center" v-for="item in productList" :key="item">
                <td scope="row">
                <input type="text" v-model="item.title" />
                </td>
                <td>
                <div class="d-flex justify-content-center">
                    <div class="mr-10 btn-close" aria-label="Close"></div>
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
        </div>
        <div class="modal-footer">
        <button type="button" class="btn beclose" data-bs-dismiss="modal">
            關閉
        </button>
        <button type="button" class="btn save-btn">儲存</button>
        </div> 
    </div>
</template>
<script setup>
//  <!----------------------------- 編輯Modal ---------------------------------->
//<!----------------------------- 新增Modal ---------------------------------->
//  <div
//     class="modal fade"
//     id="plus"
//     tabindex="-1"
//     aria-labelledby="exampleModalLabel"
//     aria-hidden="true"
//   >
//     <div class="modal-dialog ml-550 mt-130">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title fw-bold">新增商品</h5>
//           <button
//             type="button"
//             class="btn-close"
//             data-bs-dismiss="modal"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div class="modal-body">
//           <table class="table">
//             <thead>
//               <tr class="text-center">
//                 <th scope="col" class="product">商品名稱</th>
//                 <th scope="col">商品圖片</th>
//                 <th scope="col">商品類型</th>
//                 <th scope="col">價格</th>
//                 <th scope="col">庫存</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr class="text-center">
//                 <td scope="row">
//                   <input
//                     type="text"
//                     placeholder="請輸入名稱"
//                     v-model="newName"
//                   />
//                 </td>
//                 <td class="d-flex">
//                   <div class="d-flex flex-column">
//                     <input type="file" @change="fileSelected" />
//                     <img v-if="image" :src="image" width="100" height="100" />
//                     <button @click="upload">上傳</button>
//                   </div>
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     placeholder="請輸入類型"
//                     v-model="newType"
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     placeholder="請輸入價格"
//                     v-model="newPrice"
//                   />
//                 </td>
//                 <td>
//                   <input
//                     type="text"
//                     placeholder="請輸入庫存"
//                     v-model="newAmount"
//                   />
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn beclose" data-bs-dismiss="modal">
//             關閉
//           </button>
//           <button
//             type="button"
//             class="btn save-btn"
//             @click="addProduct"
//             @keyup.enter="addProduct"
//           >
//             新增
//           </button>
//         </div>
//       </div>
//     </div>
//   </div> 

</script>