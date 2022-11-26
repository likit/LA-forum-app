<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-Forum-2022-logo.png" width="100">
      <h1 class="title is-size-4 has-text-info has-text-centered">QR Code</h1>
      <h1 class="subtitle is-size-6 has-text-centered">หมายเลขลงทะเบียน</h1>
    </div>
    <div class="container has-text-centered">
      <h1 class="title is-size-4">{{ $store.state.user.number }}</h1>
      <qrcode v-bind:value="$store.state.user.lineId" :options="{ width: 250 }"
              v-if="$store.state.user.lineId"></qrcode>
    </div>
    <div class="buttons is-centered">
      <router-link :to="{ name: 'Home' }">
        <button class="button is-info is-rounded">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
import {users} from '@/firebase'

export default {
  name: "QRCode",
  mounted() {
    const self = this
    if(!this.$store.state.user.lineId) {
      self.$buefy.toast.open({ message: 'fetching line ID', type: 'is-warning'})
      if (!self.$liff.isLoggedIn() && self.$liff.isInClient()) {
        self.$liff.login()
      }
      self.$liff.getProfile().then((profile)=>{
        users.where('lineId', '==', profile.userId).get().then((snapshot)=>{
          if (snapshot.docs.length > 0) {
            self.$store.commit('set_line_id', profile.userId)
            self.$store.dispatch('fetchUser')
          } else {
            self.$router.push({ name: "Register"})
          }
        })
      })
    }
  }
}
</script>

<style scoped>

</style>