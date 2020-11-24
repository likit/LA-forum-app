<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
      <h1 class="title is-size-4 has-text-info has-text-centered">QR Scanner</h1>
      <h1 class="subtitle is-size-6 has-text-centered">Scan รับกระเป๋าและเอกสาร</h1>
    </div>
    <div class="container">
      <div class="buttons is-centered">
        <button class="is-success is-rounded" @click="scan">Scan</button>
        <router-link :to="{ name: 'Admin' }">
          <button class="button is-info is-rounded">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
            <span>Admin</span>
          </button>
        </router-link>
      </div>
    </div>
  </section>

</template>

<script>
import {registers} from "@/firebase";

export default {
  name: "RegistrationScan",
  methods: {
    scan: function() {
      if (this.$liff.scanCode) {
        this.$liff.scanCode().then(result => {
          registers.where('lineId', '==', result.value).get().then(snapshot => {
            if (snapshot.docs.length == 0) {
              registers.add({
                lineId: result.value,
                created_at: new Date()
              }).then(() => {
                this.$buefy.toast.open({message: 'บันทึกข้อมูลเรียบร้อยแล้ว', type: 'is-success'})
              })
            } else {
              this.$buefy.toast.open({message: 'QR Code ผ่านการแสกนแล้ว', type: 'is-warning'})
            }
          })
        })
      } else {
        this.$buefy.toast.open({message: 'ไม่สามารถเปิด QR Scanner ได้', type: 'is-warning'})
      }
    }
  },
  mounted() {
    this.scan()
  }
}
</script>

<style scoped>

</style>