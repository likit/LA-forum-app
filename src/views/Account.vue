<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
    </div>
    <div class="has-text-centered">
      <h1 class="title is-size-4 has-text-info">Account</h1>
      <h1 class="subtitle is-size-6"><strong>ข้อมูลส่วนตัว</strong></h1>
      <br>
    </div>
    <div class="container">
      <table class="table is-striped is-narrow">
        <tr>
          <td class="title is-size-6">ชื่อ นามสกุล</td>
          <td>
            {{ user.title }} {{ user.firstname }} {{ user.lastname }}
          </td>
        </tr>
        <tr v-if="user.licenseId">
          <td class="title is-size-6">
            หมายเลขใบอนุญาตประกอบวิชาชีพ
          </td>
          <td>
            {{ user.licenseId }}
          </td>
        </tr>
        <tr>
          <td class="title is-size-6">โทรศัพท์</td>
          <td>{{ user.phone }}</td>
        </tr>
        <tr>
          <td class="title is-size-6">E-mail</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
      <br>
    </div>
    <div class="columns">
      <div class="column has-text-centered">
        <div class="buttons is-centered">
        <a class="button is-info is-rounded" @click="$router.push({name: 'Home'})">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </a>
        <router-link :to="{ name: 'QRCode' }">
          <button class="button is-rounded is-link">
            <b-icon pack="fas" icon="qrcode"></b-icon>
            <span>Your QR</span>
          </button>
        </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";

export default {
name: "Account",
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    if (this.$store.state.user.number === null) {
      this.$router.push({ name: 'Register' })
    }
  },
}
</script>

<style scoped>

</style>