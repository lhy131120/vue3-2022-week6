<template>
  <h1 class="text-center my-3">後台頁面</h1>
  <nav class="navbar navbar-expand bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><router-link class="nav-link" to="/admin/products">後台產品列表</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/admin/orders">後台訂單列表</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/">返回前台首頁</router-link></li>
            <li class="nav-item"><a href="javascript:;" class="nav-link" @click.prevent="logout">登出</a></li>
          </ul>
        </div>
      </div>
    </nav>
  <div class="container">
    <!-- 此router view 是 display 各個children components -->
    <div class="row py-3">
      <router-view />
    </div>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
const { VITE_URL } = import.meta.env

export default {
  components: {
    RouterView,
    RouterLink
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    logout () {
      document.cookie = `customCookieName=; expires=${new Date()};`
      this.$router.push('/login')
    },
    checkLogin () {
      const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('customCookieName='))?.split('=')[1]
      this.$http.defaults.headers.common.Authorization = cookieValue

      const url = `${VITE_URL}api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login')
          }
        })
        .catch((err) => {
          // alert(err.data.message)
          console.log(err.message)
        })
    }
  }
}
</script>
