<template>
  <section class="section">
    <div class="container">
      <h2 class="title has-text-info">Welcome {{ user.profile.displayName }}</h2>
      <h2 class="subtitle">License ID: {{ user.licenseId }}</h2>

      <div class="media box">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://source.unsplash.com/random/128x128">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Registration</h3>
            ขั้นตอนการลงทะเบียนเข้างาน
          </div>
        </div>
      </div>

      <div class="media box">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://source.unsplash.com/random/128x128">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Account</h3>
            แก้ไขหมายเลขใบประกอบวิชาชีพ
          </div>
        </div>
      </div>

      <div class="media box">
        <figure class="media-left">
          <p class="image is-128x128">
            <img src="https://source.unsplash.com/random/128x128">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Programs</h3>
              รายการบรรยายและกิจกรรม
          </div>
        </div>
      </div>
    </div>

    <div class="media box">
      <figure class="media-left">
        <p class="image is-128x128">
          <img src="https://source.unsplash.com/random/128x128">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h3 class="title is-size-5">Survey</h3>
          แบบสำรวจความพึงพอใจ
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
    this.$liff.init({liffId: '1654917258-m2QqMz51'}).then(function () {
      if (!self.$liff.isLoggedIn()) {
        self.$liff.login()
      }
      self.$store.dispatch('fetchProfile')
      if (self.user.licenseId === null) {
        self.$router.push({ name: 'Register' })
      }
    })
  },
  methods: {
  }
}
</script>
