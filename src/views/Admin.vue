<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
    </div>
    <h1 class="title has-text-centered has-text-danger">Admin Page</h1>
    <div class="container">
      <nav class="panel">
        <p class="panel-heading">Menu</p>
        <a class="panel-block" @click="$router.push({ name: 'OpeningDraw' })">
          <span class="panel-icon">
            <i class="fas fa-chevron-right"></i>
          </span>
          Opening draw
        </a>
        <a class="panel-block" @click="$router.push({ name: 'OpeningDraw' })">
          <span class="panel-icon">
            <i class="fas fa-chevron-right"></i>
          </span>
          Registration Scan
        </a>
      </nav>
    </div>
    <br>
    <div class="buttons is-centered">
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
export default {
  name: "Admin",
  mounted() {
    if (this.$store.state.user.admin === false || this.$store.state.user.number === null){
      this.$router.push({ name: 'Register'})
    }
  },
}
</script>

<style scoped>

</style>