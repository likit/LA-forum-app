<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-Forum-2022-logo.png" width="100">
    </div>
    <h1 class="title is-size-4 has-text-info has-text-centered">Account</h1>
    <div class="columns">
      <div class="column">
        <h1 class="title is-size-5"><strong>ข้อมูลส่วนตัว</strong></h1>
        <table class="table is-bordered is-fullwidth">
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
      </div>
      <h1 class="title is-size-5">ข้อมูลการลงทะเบียนเข้างาน</h1>
      <table class="table is-bordered is-fullwidth">
        <tr v-for="ch in checkins" :key="ch.id">
          <td><span class="icon"><i class="fas has-text-success fa-check-circle"></i></span>{{ ch.checkedAt.toDate().toLocaleString('th-TH', {'timezone': 'Asia/Bangkok'}) }}</td>
        </tr>
      </table>
      <p>ผู้เข้าร่วมต้องลงทะเบียนเข้างานวันละครั้งเท่านั้น หากลงทะเบียนมากกว่าหนึ่งครั้ง จะใช้เฉพาะครั้งแรกของวัน</p>
    </div>
    <div class="columns">
      <div class="column">
        <div class="buttons is-centered">
        <a class="button is-info is-rounded" @click="$router.push({name: 'Home'})">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>หน้าหลัก</span>
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
import {checkins} from "@/firebase";

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
    if (!self.user.lineId) {
      self.$router.back()
    }
    checkins.where('number', '==', self.user.number).get().then(snapshot=>{
      snapshot.docs.forEach(d=>{
        self.checkins.push(d.data())
      })
    })
  },
}
</script>

<style scoped>

</style>