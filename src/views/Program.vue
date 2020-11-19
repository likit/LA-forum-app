<template>
<section class="section">
  <div class="has-text-centered">
    <img src="../assets/LA-logo-small.png" width="100">
  </div>
  <h1 class="title has-text-info has-text-centered">
    Programs
  </h1>
  <table class="table is-fullwidth box is-striped" v-for="pg in progs" :key="pg.title">
    <col width="50%">
    <tr>
      <td><strong>เริ่ม</strong></td>
      <td>{{ pg.start.calendar() }}</td>
    </tr>
    <tr>
      <td><strong>ถึง</strong></td>
      <td>{{ pg.end.calendar() }}</td>
    </tr>
    <tr>
      <td><strong>รายการ</strong></td>
      <td>{{ pg.sessionTitle }}</td>
    </tr>
    <tr>
      <td><strong>ชื่อหัวข้อ</strong></td>
      <td>{{ pg.title }}</td>
    </tr>
    <tr>
      <td><strong>วิทยากร</strong></td>
      <td>{{ pg.speaker }}</td>
    </tr>
    <tr>
      <td><strong>สังกัด</strong></td>
      <td>{{ pg.affil }}</td>
    </tr>
    <tr>
      <td><strong>สถานที่</strong></td>
      <td>{{ pg.location }}</td>
    </tr>
    <tr>
      <td><strong>เอกสารประกอบ</strong></td>
      <td><a :href="pg.materialUrl">{{ pg.materialUrl }}</a></td>
    </tr>
    <tr v-if="$store.state.user.admin">
      <td colspan="2"><button class="button is-rounded is-light is-danger" @click="$router.push({ name: 'ProgramAdminEdit', params: { programId: pg.id }})">Edit</button></td>
    </tr>
  </table>
  <div class="buttons is-centered">
    <button class="button is-light is-success is-rounded" v-if="$store.state.user.admin"
            @click="$router.push({ name: 'ProgramAdmin' })">Add</button>
    <button class="button is-info is-rounded" @click="$router.push({ name: 'Home' })">
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
      <span>Home</span>
    </button>
  </div>
</section>
</template>

<script>
import { programs } from '../firebase'
import moment from "moment";

moment.locale('th')

export default {
  name: "Program",
  data() {
    return {
      progs: [],
    }
  },
  mounted() {
    const self = this
    programs.get().then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        let prog = doc.data()
        prog.id = doc.id
        prog.start = moment(new Date(doc.data().startDateTime.toDate()))
        prog.end = moment(new Date(doc.data().endDateTime.toDate()))
        self.progs.push(prog)
      })
    })
  }
}
</script>

<style scoped>

</style>