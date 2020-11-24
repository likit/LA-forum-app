<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
    </div>
    <h1 class="title has-text-info has-text-centered">
      Rate Programs
    </h1>
    <div class="container">
      <b-rate icon-pack="fas" v-model="speaker" custom-text="วิทยากร"></b-rate>
      <b-rate icon-pack="fas" v-model="content" custom-text="เนื้อหา"></b-rate>
      <b-rate icon-pack="fas" v-model="duration" custom-text="ระยะเวลา"></b-rate>
      <b-field label="Comment">
        <b-input v-model="comment" type="textarea"></b-input>
      </b-field>
      <div class="buttons is-centered">
        <button class="button is-rounded is-light" @click="$router.push({ name: 'Program'})">Cancel</button>
        <button class="button is-rounded is-success" @click="save">Save</button>
      </div>
    </div>
  </section>
</template>

<script>
import {programratings} from "@/firebase";

export default {
  name: "RateProgram",
  data() {
    return {
      speaker: 0,
      content: 0,
      duration: 0,
      comment: ''
    }
  },
  methods: {
    save: function () {
      programratings.add({
        programId: this.$route.params.programId,
        speaker: this.speaker,
        content: this.content,
        comment: this.comment,
        duration: this.duration,
        lineId: this.$store.state.user.lineId
      }).then(()=>{
        this.$buefy.toast.open({message: 'บันทึกข้อมูลเรียบร้อยแล้ว', type: 'is-success'})
        this.$router.push({ name: "Program"})
      })
    }
  }
}
</script>

<style scoped>

</style>