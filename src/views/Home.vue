<template>
  <section class="section">
    <div class="container">
      <div class="">
        <h2 class="title has-text-info">Welcome</h2>
        <b-field>
          ยินดีต้อนรับ <strong>{{ lineName }}</strong> เข้าสู่งาน LA forum 2020 กรุณากรอกข้อมูลหมายเลขใบอนุญาตเพื่อลงทะเบียนในระบบ
          ท่านจะไม่สามารถลงชื่อเข้างานได้ด้วยระบบ QR Code หากยังไม่ได้ลงทะเบียนในระบบ App นี้
        </b-field>
        <b-field>
          <b-input type="number" v-model="licenseId"
                   placeholder="หมายเลขท.น." rounded></b-input>
        </b-field>
        <b-field class="has-text-centered">
          <button class="is-info button is-rounded" @click="submitLicenseId">
            <b-icon pack="far" icon="user"></b-icon>
            <span>ลงทะเบียน</span>
          </button>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
import { users } from '../firebase'

export default {
  name: 'Register',
  data() {
    return {
      lineName: '',
      lineId: '',
      licenseId: null
    }
  },
  methods: {
    submitLicenseId: function() {
      if (this.lineId.length > 0 && this.licenseId !== null) {
        users.add({ lineId: this.lineId, licenseId: this.licenseId}).then((docRef)=>{
          console.log(docRef)
        })
      }
    }
  },
  mounted() {
    const self = this
    this.$liff.init({ liffId: '1654917258-m2QqMz51'}).then(function() {
        if (!self.$liff.isLoggedIn()) {
          self.$liff.login()
        }
        self.$liff.getProfile().then((profile)=>{
          self.lineName = profile.displayName
          self.lineId = profile.userId
        })
      }).catch((err)=>{
      console.log(err.code, err.message)
    })
  }
}
</script>
