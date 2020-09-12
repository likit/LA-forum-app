<template>
  <section class="section">
    <div class="container">
      <div class="box">
        {{ lineName }}
      </div>
      <div class="box">
        <b-field label="หมายเลขใบอนุญาตประกอบวิชาชีพ">
          <b-input type="number"></b-input>
        </b-field>
        <b-field class="has-text-centered">
          <a class="is-info button is-rounded">
            <b-icon pack="far" icon="user"></b-icon>
            <span>ลงทะเบียน</span>
          </a>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      lineName: ''
    }
  },
  mounted() {
    if (!this.$liff.isLoggedIn()) {
      this.$liff.login()
    }
  }
}
</script>
