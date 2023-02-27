<template>
  <h2 class="text-center text-danger">後台產品訂單列表</h2>
  <hr>
  <div class="table-responsive">
    <table class="table">
      <tbody>
        <tr>
          <td>訂單號碼</td>
          <td>訂單狀態</td>
          <td>訂單建立日期</td>
          <td>訂單客戶資訊</td>
        </tr>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>
            <span :class="{'text-success': order.is_paid, 'text-danger': !order.is_paid}">{{ order.is_paid ? '已付' : '未付'}}</span>
          </td>
          <td>{{ order.create_at }}</td>
          <td>
            客戶名: {{ order.user.name }} <br>
            客戶mail: {{ order.user.email }} <br>
            客戶tel: {{ order.user.tel }} <br>
            客戶address: {{ order.user.address }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const { VITE_URL, VITE_API } = import.meta.env

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
          this.orders = res.data.orders
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
