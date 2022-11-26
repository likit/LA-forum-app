<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
      <h2 class="title has-text-info">Activation</h2>
      <h2 class="subtitle is-size-4">เปิดใช้งานแอพพลิเคชั่น</h2>
    </div>
    <div class="container">
      <div class="box">
        <b-field>
          ยินดีต้อนรับเข้าสู่งาน LA forum 2022 กรุณากรอกข้อมูลหมายเลขลงทะเบียนและรหัสผ่านเพื่อเปิดการใช้งานระบบ
          ท่านจะไม่สามารถลงชื่อเข้างานได้ด้วยระบบ QR Code หากยังไม่ได้ลงทะเบียนในระบบ App นี้ หากไม่ทราบหมายเลขลงทะเบียนและรหัสผ่าน กรุณาตรวจสอบอีเมลหรือสอบถามจากจุดลงทะเบียน
        </b-field>
        <b-field message="กรุณาตรวจสอบหมายเลขลงทะเบียนในอีเมลที่ท่านได้รับ" type="is-danger">
          <b-input type="number" v-model="number" placeholder="หมายเลขลงทะเบียน"></b-input>
        </b-field>
        <b-field message="กรุณาตรวจสอบรหัสผ่านในอีเมลที่ท่านได้รับ" type="is-danger">
          <b-input type="number" v-model="passcode" placeholder="รหัสผ่าน"></b-input>
        </b-field>
        <b-field class="has-text-centered" v-if="showHomeButton">
          <button class="button is-light is-rounded" @click="goHome">
            <b-icon pack="fas" icon="chevron-left"></b-icon>
            <span>หน้าหลัก</span>
          </button>
        </b-field>
        <b-field class="has-text-centered" v-else>
          <button class="is-info button is-rounded" @click="submit">
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
  data() {
    return {
      showHomeButton: false,
      number: null,
      passcode: null
    }
  },
  computed: {
    ...mapState(['opening', 'user'])
  },
  methods: {
    goHome: function() {
      this.$router.push({ name: 'Home' })
    },
    submit: function() {
      const self = this
      users.where('number', '==', parseInt(this.number)).get().then((snapshot) => {
        if (snapshot.docs.length > 0) {
          let doc = snapshot.docs[0]
          if (doc.data().passcode == self.passcode) {
            self.$store.commit('set_number', doc.data().number)
            self.$store.commit('set_title', doc.data().title)
            self.$store.commit('set_firstname', doc.data().firstname)
            self.$store.commit('set_lastname', doc.data().lastname)
            self.$store.commit('set_email', doc.data().email)
            self.$store.commit('set_phone', doc.data().phone)
            self.$store.commit('set_license_id', doc.data().licenseId)
            self.$store.commit('set_admin', doc.data().admin)
              // check if Line ID not bound to this account
            if (!doc.data().lineId) {
              self.$liff.getProfile().then((profile)=> {
                self.$store.commit('set_line_id', profile.userId)
                users.doc(doc.id).update({lineId: profile.userId}).then(()=>{
                  self.showHomeButton = true
                  self.$buefy.toast.open({ message: 'เปิดการใช้งานเรียบร้อย', type: 'is-success'})
                  self.$router.push({'name': 'Home'})
                })
              })
            } else {
              self.$liff.getProfile().then((profile)=>{
                self.$store.commit('set_line_id', profile.userId)
              })
              self.$buefy.toast.open({ message: 'เปิดการใช้งานเรียบร้อย', type: 'is-success'})
              self.$router.push({'name': 'Home'})
            }
          } else {
            self.$buefy.toast.open({ message: 'รหัสผ่านไม่ถูกต้อง โปรดตรวจสอบอีกครั้ง', type: 'is-danger'})
          }
        } else {
          self.$buefy.toast.open({ message: 'ไม่พบข้อมูลการลงทะเบียนของท่าน โปรดติดต่อเจ้าหน้าที่สภาฯ', type: 'is-danger'})
        }
      })
    }
  }
}
</script>
