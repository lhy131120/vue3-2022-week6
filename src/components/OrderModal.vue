<script>

import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['id'],
  data () {
    return {
      orderModal: null,
      orderId: ''
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
    this.orderModal = new Modal(this.$refs.orderModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>

<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="orderModalLabel" aria-hidden="true" ref="orderModal">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="orderModalLabel">訂單編號:</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          這是modal
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
