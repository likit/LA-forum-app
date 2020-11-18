<template>
  <section class="section">
    <div class="container box">
      <h1 class="title is-size-4 has-text-info has-text-centered">QR Code</h1>
      <h1 class="subtitle is-size-6 has-text-centered">สำหรับลงทะเบียนเข้างานและรับกระเป๋า</h1>
      <qrcode v-bind:value="$store.state.user.lineId"
              v-if="$store.state.user.lineId !== null"
              :options="{ width: 250 }"></qrcode>
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
  }
}
</script>

<style scoped>

</style>