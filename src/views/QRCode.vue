<template>
  <div class="container box">
    <h1 class="title is-size-3 has-text-centered">QR Code สำหรับลงทะเบียนเข้างาน</h1>
    <qrcode v-bind:value="$store.state.user.lineId"
            v-if="$store.state.user.lineId !== null"
            :options="{ width: 200 }"></qrcode>
  </div>
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