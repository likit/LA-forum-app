<template>
  <div id="app">
    <router-view/>
    <footer class="footer">
      <div class="content has-text-centered">
        <h1 class="title is-size-4">LA Forum App version 1.0.rc1</h1>
        <h1 class="subtitle is-size-6">จัดทำโดยอนุกรรมการประชาสัมพันธ์ สภาเทคนิคการแพทย์วาระที่ 6</h1>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    // this.$liff.init({ liffId: '1657676192-qpme4gOz'})
  },
}
</script>