<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true" ref="orderModal">
    <div class="modal-dialog">
      <div class="modal-content border-0" v-if="propOrder">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="orderModalLabel">
            訂單編號: {{ tempOrder.id }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="text" readonly class="form-control-plaintext" id="staticEmail" v-model="this.propOrder.text">
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-danger" @click="hideModal()">Cancel</button>
        </div>
      </div>
      <div v-else>
        <p>PropOrder 未有資料</p>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from 'bootstrap/js/dist/modal'
import * as bootstrap from 'bootstrap'
export default {
  props: ['tempOrder'],
  data () {
    return {
      orderModal: null,
      propOrder: {
        text: 'Test Components Text'
      }
    }
  },
  methods: {
    showModal () {
      this.orderModal.show()
    },
    hideModal () {
      this.orderModal.hide()
    }
  },
  mounted () {
    this.orderModal = new bootstrap.Modal(this.$refs.orderModal, {
      keyboard: false,
      backdrop: 'static'
    })
    // console.log(this.useInfo)
  }
}
</script>
