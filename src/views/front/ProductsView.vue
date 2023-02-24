<template>
  <vue-loading :active="isLoading"></vue-loading>
  <div class="text-center">
    <h2 class="mb-5 text-danger">產品頁面</h2>
  </div>
  <hr>
  <div class="table-responsive">
    <table class="table">
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td width="250">{{ product.title }}</td>
          <td><img :src="product.imageUrl" width="200" alt=""></td>
          <td>
            <div class="btn-group" role="group" aria-label="Basic example">
              <router-link :to="`/product/${product.id}`" class="btn btn-outline-secondary">詳細資料</router-link>
              <button @click="addToCart(product.id)" type="button" class="btn btn-outline-success">加入購物車</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_API } = import.meta.env

export default {
  data () {
    return {
      isLoading: false,
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProduct () {
      this.isLoading = true
      this.$http.get(`${VITE_URL}/api/${VITE_API}/products/all`)
        .then(res => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch(err => {
          alert(err.message)
          this.isLoading = false
        })
    },
    addToCart (id, qty = 1) {
      const data = { product_id: id, qty }
      this.$http.post(`${VITE_URL}/api/${VITE_API}/cart`, { data })
        .then(res => { alert(res.data.message) })
        .catch(err => { alert(err) })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
