<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
      <h1 class="has-text-info title has-text-centered">Opening Draw</h1>
    </div>
    <div class="container">
      <br>
      <div class="has-text-centered">
        <button class="button is-success is-large" @click="draw">Draw!!</button>
      </div>
      <div v-for="w in winlist" :key="w.number">
        <h1 class="title is-size-1">{{ w.number }}</h1>
      </div>
    </div>
    <br>
    <div class="buttons is-centered">
      <button class="button is-info is-rounded" @click="$router.push({ name: 'Admin' })">
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
        <span>Admin</span>
      </button>
    </div>
  </section>
</template>

<script>
import {draws} from '../firebase'

export default {
  name: "OpeningDraw",
  data() {
    return {
      samples: [],
      wins: [],
      winners: [],
      winlist: []
    }
  },
  mounted() {
    if (this.$store.state.user.admin === false || this.$store.state.user.number === null){
      this.$router.push({ name: 'Register'})
    }
  },
  methods: {
    draw: function() {
      const self = this
      draws.get().then((snapshot)=>{
        snapshot.docs.forEach((doc)=>{
          self.samples.push(doc.id)
          self.winners.push(doc.data())
        })
        let n = 0
        while (n <= 10) {
          let idx = Math.floor(Math.random() * self.samples.length)
          let winner = self.samples[idx]
          if (self.wins.indexOf(winner) < 0) {
            n = n + 1
            self.wins.push(winner)
            self.winlist.push(self.winners[idx])
            draws.doc(winner).update({ win: true })
          }
        }
      })
    }
},
}
</script>

<style scoped>

</style>