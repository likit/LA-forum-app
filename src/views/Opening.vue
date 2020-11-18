<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-info is-size-4 has-text-centered">Opening Ceremony</h1>
      <div class="has-text-centered">
        <h1 class="subtitle is-size-6" v-if="!opening">ร่วมกดไลค์เพื่อเปิดงาน</h1>
        <h1 class="subtitle is-size-6" v-else>หมายเลขลงทะเบียนของท่านคือ</h1>
        <button class="button is-large is-info" v-if="!opening" @click="openingHandler">
          <span class="icon">
            <i class="far fa-thumbs-up"></i>
          </span>
          <span>Like!</span>
        </button>
        <div v-if="opening">
          <div class="columns">
            <div class="column">
              <h1 class="title is-size-1">{{ $store.state.user.number }}</h1>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <button class="button is-large is-success" @click="checkDraw" v-if="!win">
                <span>ตรวจสอบรางวัล</span>
              </button>
              <p v-else>
                กรุณาติดต่อคณะกรรมการจัดงานเพื่อรับรางวัล
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <router-link :to="{ name: 'Home' }">
                <button class="button is-info is-rounded">
                  <span class="icon">
                    <i class="fas fa-home"></i>
                  </span>
                  <span>Home</span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState} from "vuex";
import {draws} from "../firebase"

export default {
name: "Opening",
  data() {
    return {
      win: false,
    }
  },
  computed: {
    ...mapState(['opening'])
  },
  mounted() {
    if (this.$store.state.user.number === null) {
      this.$router.push({ name: 'Register' })
    }
  },
  methods: {
    openingHandler: function() {
      const self = this
      if (this.opening !== true) {
        this.$store.commit('toggle_opening')
        draws.where('number', '==', this.$store.state.user.number).get().then((snapshot)=>{
          if (snapshot.docs.length == 0) {
            draws.add({
              event: 'opening',
              number: self.$store.state.user.number,
              lineId: self.$store.state.user.lineId,
              claimed: null,
              win: false
            }).then(()=>{
              self.$buefy.toast.open({ message: 'ขอบคุณที่ร่วมในพิธีเปิด', type: 'is-success'})
            })
          } else {
            self.$buefy.toast.open({ message: 'ท่านไม่สามารถคลิกซ้ำได้', type: 'is-warning'})
          }
        })
      }
    },
    checkDraw: function() {
      const self = this
      draws.where('number', '==', this.$store.state.user.number)
          .where('win', '==', true)
          .get().then((snapshot)=>{
        if (snapshot.docs.length > 0) {
          self.$buefy.toast.open({ message: 'Congratulations!!', type: 'is-success'})
          self.win = true
        } else {
          self.$buefy.toast.open({ message: 'Better luck next time!', type: 'is-warning'})
        }
      })
    }
  }
}
</script>

<style scoped>

</style>