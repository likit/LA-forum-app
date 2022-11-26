<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <img src="../assets/LA-Forum-2022-logo.png">
        <br>
        <h1 class="title is-size-4">ยินดีต้อนรับ {{ user.title }}{{ user.firstname }} {{ user.lastname }}</h1>
        <h1 class="subtitle is-size-4 has-text-link">โปรดแจ้งหมายเลข <strong>{{ user.number }}</strong> เพื่อรับกระเป๋ากับเจ้าหน้าที่</h1>
        <p>เอกสารทั้งหมดของงานประชุมเป็นไฟล์ electronics ท่านสามารถเข้าถึงได้จาก application นี้</p>
      </div>
      <button class="button is-danger" @click="resetLineId">Reset Line ID</button>
      <br>
      <div class="media box" @click="$router.push({ name: 'RegistrationInfo'})">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Registration</h3>
            ขั้นตอนการลงทะเบียนเข้างาน
          </div>
        </div>
      </div>

      <div class="media box" @click="$router.push({ name: 'QRCode' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">QR Code</h3>
            QR Code สำหรับลงทะเบียนเข้างาน
          </div>
        </div>
      </div>

      <div class="media box" @click="$router.push({ name: 'Program' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Programs</h3>
            รายการบรรยายและกิจกรรม
          </div>
        </div>
      </div>

      <div class="media box" @click="$router.push({ name: 'Account' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Account</h3>
            ข้อมูลส่วนตัว
          </div>
        </div>
      </div>

      <div class="media box" @click="$router.push({ name: 'Survey'})">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Survey</h3>
            แบบสำรวจความพึงพอใจ
          </div>
        </div>
      </div>

      <div class="media box" style="background-color: orange"
           v-if="$store.state.user.admin == true"
           @click="$router.push({ name: 'Admin'})">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Admin</h3>
            Danger zone
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import {users} from '@/firebase'

export default {
  data () {
    return {
      // use this message for debugging
      message: '',
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    resetLineId: function () {
      this.$store.commit('set_line_id', null)
    }
  },
  async mounted() {
    const self = this
    await self.$liff.init({ liffId: '1657676192-qpme4gOz'}).then(()=>{
      if (!self.$liff.isLoggedIn() && !self.$liff.isInClient()) {
        self.$liff.login()
      }
    })
    if(self.user.lineId === null) {
      self.$liff.getProfile().then((profile) => {
        users.where('lineId', '==', profile.userId).get().then((snapshot) => {
          if (snapshot.docs.length > 0) {
            self.$store.commit('set_line_id', profile.userId)
            self.$store.dispatch('fetchUser')
          } else {
            self.$router.push({name: "Register"})
          }
        })
      }).catch((error) => {
        self.message = error.toString() + ' profile loading..'
      })
    }
  },
}
</script>
