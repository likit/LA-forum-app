<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-info is-size-4 has-text-centered">Opening Ceremony</h1>
      <div class="has-text-centered">
        <h1 class="subtitle is-size-6">ร่วมกดเพื่อเปิดงาน</h1>
        <button class="button is-large is-info" v-if="!opening" @click="openingHandler">
          <span class="icon">
            <i class="far fa-thumbs-up"></i>
          </span>
          <span>Like!</span>
        </button>
        <div v-if="opening">
          <div class="columns">
            <div class="column">
              <button class="button is-large is-success">
                <span>Thanks!</span>
              </button>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <router-link :to="{ name: 'Home' }">
                <button class="button is-light">
                  <b-icon pack="fas" icon="chevron-left"></b-icon>
                  <span>Back</span>
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

export default {
name: "Opening",
  computed: {
    ...mapState(['opening'])
  },
  methods: {
    openingHandler: function() {
      this.$buefy.toast.open({ message: 'ขอบคุณที่ร่วมในพิธีเปิด', type: 'is-success'})
      this.$store.commit('toggle_opening')
    }
  }
}
</script>

<style scoped>

</style>