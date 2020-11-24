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
          <td class="title is-size-6">หมายเลขลงทะเบียน</td>
          <td>
            {{ user.number }}
          </td>
        </tr>
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
      <h1 class="title is-size-5">Registration Records</h1>
      <table class="table is-narrow">
        <tr v-for="ch in checkins" :key="ch.toDate().toLocaleString()">
          <td>{{ ch.toDate().toLocaleString() }}</td>
        </tr>
      </table>
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
import {users, checkins} from "@/firebase";

export default {
name: "Account",
  data() {
    return {
      checkins: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
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
            self.$store.dispatch('fetchUser')
            checkins.where('lineId', '==', profile.userId).get().then(snapshot=>{
              snapshot.docs.forEach(d=>{
                self.checkins.push(d.data())
              })
            })
          } else {
            self.$router.push({ name: "Register"})
          }
        })
      })
    }
  },
}
</script>

<style scoped>

</style>