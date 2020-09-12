<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2 class="title has-text-info">Registration</h2>
        <b-field>
          ยินดีต้อนรับ <strong>{{ user.lineName }}</strong> เข้าสู่งาน LA forum 2020 กรุณากรอกข้อมูลหมายเลขใบอนุญาตเพื่อลงทะเบียนในระบบ
          ท่านจะไม่สามารถลงชื่อเข้างานได้ด้วยระบบ QR Code หากยังไม่ได้ลงทะเบียนในระบบ App นี้
        </b-field>
        <b-field>
          <b-input type="number" v-model="user.licenseId"
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
import { mapState } from 'vuex'

export default {
  name: 'Register',
  computed: {
    ...mapState(['user'])
  },
  methods: {
    submitLicenseId: function() {
      const self = this
      if (self.user.lineId !== null && self.user.licenseId !== null) {
        users.where('lineId', '==', self.user.lineId).get().then((snapshot) => {
          if (snapshot.docs.length > 0) {
            let doc = snapshot.docs[0]
            self.user.licenseId = doc.data().licenseId
            users.doc(doc.id).update({ lineId: doc.data().lineId, licenseId: doc.data().licenseId })
          } else {
            users.add({ lineId: self.user.lineId, licenseId: self.user.licenseId}).then((docRef)=>{
              console.log(docRef)
            })
          }
          self.$router.push({ name: 'About'})
        })
      }
    }
  },
  mounted() {
    const self = this
    self.$liff.init({ liffId: '1654917258-m2QqMz51'}).then(function() {
        if (!self.$liff.isLoggedIn()) {
          self.$liff.login()
        }
        if (self.$liff.isLoggedIn()) {
          console.log('about to fetch profile...')
          self.$liff.getProfile().then((profile)=>{
            self.user.profile = profile
            self.user.lineId = profile.userId
            users.where('lineId', '==', self.user.lineId).get().then((snapshot) => {
              if (snapshot.docs.length > 0) {
                let user = snapshot.docs[0].data()
                console.log(user)
                self.user.licenseId = user.licenseId
                self.$router.push({ name: 'About'})
              }
            })
          })
        }
      }).catch((err)=>{
      console.log(err.code, err.message)
    })
  }
}
</script>
