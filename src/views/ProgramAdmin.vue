<template>
<section class="section">
  <div class="container">
    <b-field label="Session Title">
      <b-input v-model="program.sessionTitle" type="is-danger"></b-input>
    </b-field>
    <b-field label="Title">
      <b-input v-model="program.title" type="is-danger"></b-input>
    </b-field>
    <b-field label="Speaker">
      <b-input v-model="program.speaker" type="is-danger"></b-input>
    </b-field>
    <b-field label="Affiliation">
      <b-input v-model="program.affil" type="is-danger"></b-input>
    </b-field>
    <b-field label="Location">
      <b-input v-model="program.location" type="is-danger"></b-input>
    </b-field>
    <b-field label="Begins At">
      <b-datetimepicker v-model="program.startDateTime"
          placeholder="Click to select..."
          icon="calendar-today"
          horizontal-time-picker>
      </b-datetimepicker>
    </b-field>
    <b-field label="Ends At">
      <b-datetimepicker v-model="program.endDateTime"
          placeholder="Click to select..."
          icon="calendar-today"
          horizontal-time-picker>
      </b-datetimepicker>
    </b-field>
    <b-field label="URL to Materials">
      <b-input v-model="program.materialUrl"></b-input>
    </b-field>
    <div class="buttons is-centered">
      <a class="button is-info is-rounded" @click="$router.push({name: 'Home'})">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
        <span>Home</span>
      </a>
      <button class="is-success button is-rounded" @click="save">Save</button>
    </div>
  </div>
</section>
</template>

<script>
import {programs} from '../firebase'

export default {
  name: "ProgramAdmin",
  data() {
    return {
      programId: null,
      program: {
        sessionTitle: '',
        title: '',
        startDateTime: null,
        endDateTime: null,
        speaker: '',
        affil: '',
        location: '',
        materialUrl: '',
      }
    }
  },
  mounted() {
    const self = this
    if (this.$route.params.programId) {
      this.programId = this.$route.params.programId
      programs.doc(this.$route.params.programId).get().then((doc) => {
        self.program = doc.data()
        self.program.startDateTime = doc.data().startDateTime.toDate()
        self.program.endDateTime = doc.data().endDateTime.toDate()
      })
    }
  },
  methods: {
    save: function() {
      const self = this
      if (this.$route.params.programId) {
        programs.doc(self.programId).update(self.program).then(()=>{
          self.$buefy.toast.open({ message: 'บันทึกข้อมูลเรียบร้อย', type: 'is-success'})
          self.$router.push({'name': 'Program'})
        })
      } else {
        programs.add(this.program).then(()=>{
          self.$buefy.toast.open({ message: 'บันทึกโปรแกรมเรียบร้อย', type: 'is-success'})
          self.$router.push({ name: 'Program'})
        })
      }
    }
  }
}
</script>

<style scoped>

</style>