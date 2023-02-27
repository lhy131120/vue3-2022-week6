<template>
  <h2 class="text-center text-danger">後台產品訂單列表</h2>
  <hr>
</template>

<script>
const { VITE_URL, VITE_API } = import.meta.env
// console.log(axios, VueAxios);

export default {
  data () {
    return {
      orders: []
    }
  },
  methods: {
    getOrders () {
      this.$http.get(`${VITE_URL}/api/${VITE_API}/admin/orders`)
        .then(res => {
          console.log(res.data.orders)
        })
        .catch(err => {
          console.log('admin orders error: ' + err)
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
