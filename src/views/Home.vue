<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <img src="../assets/LA-logo-small.png">
        <p>{{ user.title }}{{ user.firstname }} {{ user.lastname }}</p>
        <hr>
        <p>Version 0.99</p>
      </div>
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

      <div class="media box" @click="$router.push({ name: 'Opening' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Opening Ceremony</h3>
            พิธีเปิด
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

      <div class="media box">
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

      <div class="media box" @click="$router.push({ name: 'Gallery' })">
        <figure class="media-left">
          <p class="image is-64x64">
            <img src="https://source.unsplash.com/collection/83970216/64x64">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <h3 class="title is-size-5">Photo Gallery</h3>
            อัลบั้มภาพกิจกรรม
          </div>
        </div>
      </div>

      <div class="media box" style="background-color: orange" @click="$router.push({ name: 'Admin'})">
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
  computed: {
    ...mapState(['user'])
  },
  mounted() {
    const self = this
    this.$liff.init({ liffId: '1654917258-m2QqMz51'}).then(function() {
      if (!self.$liff.isLoggedIn()) {
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
    })
  }
}
</script>
