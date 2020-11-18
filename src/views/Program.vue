<template>
<section class="section">
  <h1 class="title is-info has-text-centered">Programs</h1>
  <table class="table is-fullwidth is-bordered is-narrow is-striped" v-for="pg in progs" :key="pg.title">
    <tr>
      <td><strong>เริ่ม</strong></td>
      <td>{{ pg.start.fromNow() }}</td>
    </tr>
    <tr>
      <td><strong>ถึง</strong></td>
      <td>{{ pg.end.fromNow() }}</td>
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
      <td><strong>สถานที่</strong></td>
      <td>{{ pg.location }}</td>
    </tr>
    <tr>
      <td><strong>เอกสารประกอบ</strong></td>
      <td><a :href="pg.materialUrl">{{ pg.materialUrl }}</a></td>
    </tr>
    <tr v-if="$store.state.user.admin">
      <td colspan="2"><button class="button is-light" @click="$router.push({ name: 'ProgramAdminEdit', params: { programId: pg.id }})">edit</button></td>
    </tr>
  </table>
  <div class="buttons is-centered">
    <button class="button is-light" v-if="$store.state.user.admin"
            @click="$router.push({ name: 'ProgramAdmin' })">Add</button>
    <button class="button is-light" @click="$router.push({ name: 'Home' })">
      Home
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