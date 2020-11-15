<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <h2 class="title is-size-4 has-text-info">Welcome</h2>
        <h2 class="subtitle is-size-6">{{ user.title }}{{ user.firstname }} {{ user.lastname }}</h2>
        <p>{{ user.profile.displayName }}</p>
      </div>
      <br>
      <div class="media box" @click="$router.push({ name: 'RegistrationInfo'})">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/random/64x64">
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
            <img src="https://source.unsplash.com/random/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">QR Code</h3>
            QR Code สำหรับลงทะเบียนเข้างาน
          </div>
        </div>
      </div>

      <div class="media box" @click="$router.push({ name: 'Account' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/random/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Account</h3>
            ข้อมูลส่วนตัว
          </div>
        </div>
      </div>

      <div class="media box">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/random/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Programs</h3>
              รายการบรรยายและกิจกรรม
          </div>
        </div>
      </div>
      <div class="media box" @click="$router.push({ name: 'Opening' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/random/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Opening Ceremony</h3>
            พิธีเปิด
          </div>
        </div>
      </div>
      <div class="media box">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/random/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Survey</h3>
            แบบสำรวจความพึงพอใจ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    const self = this
    this.$liff.init({ liffId: '1654917258-m2QqMz51'}).then(function() {
      if (self.$liff.isLoggedIn()) {
        self.$store.dispatch('fetchProfile')
        self.$store.dispatch('fetchUser')
        // self.$liff.login()
      } else {
        // self.$liff.login()
        // self.$store.dispatch('fetchProfile')
      }
    })
    if (this.user.activated === false || this.user.lineId === null) {
      this.$router.push({ name: 'Register' })
    }
  },
  methods: {
  }
}
</script>
