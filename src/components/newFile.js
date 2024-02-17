/* __placeholder__ */
export default (await import('vue')).defineComponent({
props: {
productList: {
type: Array,
required: true
},
showAddModal: {
type: Boolean,
required: true
},
showEditModal: {
type: Boolean,
required: true
}
},
methods: {
closeModal() {
this.$emit('close-modal'); // 發出事件通知父組件關閉模態
}
},
});
