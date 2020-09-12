<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$liff.init({ liffId: '1654917258-m2QqMz51'})
  }
}
</script>