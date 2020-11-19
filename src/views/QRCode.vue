<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
      <h1 class="title is-size-4 has-text-info has-text-centered">QR Code</h1>
      <h1 class="subtitle is-size-6 has-text-centered">สำหรับลงทะเบียนเข้างานและรับกระเป๋า</h1>
    </div>
    <div class="container has-text-centered">
      <qrcode v-bind:value="$store.state.user.lineId" :options="{ width: 250 }"></qrcode>
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
export default {
  name: "QRCode",
  mounted() {
    console.log(this.$store.state.user.lineId)
    if(!this.$store.state.user.lineId) {
      this.$router.push({ name: 'Register'})
    }
  }
}
</script>

<style scoped>

</style>