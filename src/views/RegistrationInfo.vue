<template>
<section class="section">
  <div class="container">
    <div class="buttons">
      <router-link :to="{ name: 'Home' }">
        <button class="button is-small is-rounded">
          <b-icon pack="fas" icon="chevron-left"></b-icon>
          <span>Home</span>
        </button>
      </router-link>
    </div>
  </div>
  <br>
  <div class="container box">
    <h1 class="title is-size-4">ขั้นตอนการลงทะเบียนเข้างาน</h1>
    <p>
      ท่านสามารถใช้ QR code ในระบบ Line เพื่อแสกนเข้างานได้ โดยแสดง QR Code ที่หน้ากล้องของเครื่องคอมพิวเตอร์ ณ จุดลงทะเบียนทั้งสองวัน
    </p>
  </div>
</section>
</template>

<script>
export default {
name: "RegistrationInfo.vue"
}
</script>

<style scoped>

</style>