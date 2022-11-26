<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
    </div>
    <div class="has-text-centered">
      <h1 class="title is-size-4 has-text-info">Survey</h1>
      <h1 class="subtitle is-size-6"><strong>แบบสอบถาม</strong></h1>
    </div>
    <div class="container">
      <div class="box">
        <b-field label="ความเหมาะสมของการจัดหัวข้อการประชุมครั้งนี้">
          <b-rate icon-pack="fas" size="is-large" v-model="topics"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="กิจกรรมพิธีเปิด">
          <b-rate icon-pack="fas" size="is-large" v-model="opening"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="กิจกรรม photo booth">
          <b-rate icon-pack="fas" size="is-large" v-model="photoBooth"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="กิจกรรมการจำหน่ายสินค้าของที่ระลึก">
          <b-rate icon-pack="fas" size="is-large" v-model="purchasing"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="การให้ข้อมูลและการแก้ปัญหาของคณะผู้จัดงาน">
          <b-rate icon-pack="fas" size="is-large" v-model="information"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="การประชาสัมพันธ์งานประชุม">
          <b-rate icon-pack="fas" size="is-large" v-model="publicRelation"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="ความน่าสนใจหัวข้อประชุม">
          <b-rate icon-pack="fas" size="is-large" v-model="topicInterest"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="การประกวดผลงาน MT Best Practices Award">
          <b-rate icon-pack="fas" size="is-large" v-model="mtAward"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="สถานที่จัดงานประชุม โสต ทัศนอุปกรณ์">
          <b-rate icon-pack="fas" size="is-large" v-model="venue"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="ระยะเวลาในการจัดประชุม 2 วัน">
          <b-rate icon-pack="fas" size="is-large" v-model="duration"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="อาหารกลางวันและอาหารว่าง">
          <b-rate icon-pack="fas" size="is-large" v-model="coffeeBreak"></b-rate>
        </b-field>
      </div>
      <div class="box">
        <b-field label="ข้อเสนอแนะ">
          <b-input v-model="comment" type="textarea"></b-input>
        </b-field>
      </div>
      <div class="box">
        <b-field label="สิ่งที่ท่านไม่พอใจเกี่ยวกับงานประชุม">
          <b-input v-model="unlike" type="textarea"></b-input>
        </b-field>
      </div>
      <div class="box">
        <b-field label="หัวข้อการประชุมที่ท่านสนใจอยากให้จัดในปีต่อไป">
          <b-input v-model="suggestedTopics" type="textarea"></b-input>
        </b-field>
      </div>
    </div>
    <br>
    <div class="buttons is-centered">
      <button class="button is-info is-rounded" @click="$router.push({ name: 'Home' })">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        <span>Home</span>
      </button>
      <button class="button is-success is-rounded" @click="submit">Submit</button>
    </div>
  </section>
</template>

<script>
import {surveys} from '@/firebase'

export default {
  name: "Survey",
  methods: {
    submit: function() {
      const self = this
      surveys.add({
        topics: this.topics,
        information: this.information,
        publicRelation: this.publicRelation,
        venue: this.venue,
        mtAward: this.mtAward,
        topicInterest: this.topicInterest,
        coffeeBreak: this.coffeeBreak,
        photoBooth: this.photoBooth,
        suggestedTopics: this.suggestedTopics,
        comment: this.comment,
        unlike: this.unlike,
        duration: this.duration,
        purchasing: this.purchasing,
        opening: this.opening,
        lineId: this.$store.state.user.lineId
      }).then(()=>{
        self.$buefy.toast.open({message: 'บันทึกข้อมูลเรียบร้อยแล้ว', type: 'is-success'})
        self.$router.push({ name: 'Home'})
      })
    }
  },
  data() {
    return {
      topics: 0,
      information: 0,
      publicRelation: 0,
      venue: 0,
      mtAward: 0,
      topicInterest: 0,
      coffeeBreak: 0,
      photoBooth: 0,
      suggestedTopics: '',
      comment: '',
      unlike: '',
      duration: 0,
      purchasing: 0,
      opening: 0,
    }
  },
  mounted() {
    const self = this
    if(!this.$store.state.user.lineId) {
      self.$router.back()
    }
  }
}
</script>

<style scoped>

</style>