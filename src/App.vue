<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$liff.init({ liffId: '1654917258-m2QqMz51'})
  },
}
</script>