<template>
<section class="section">
  <div class="has-text-centered">
    <img src="../assets/LA-logo-small.png" width="100">
  </div>
  <h1 class="title is-size-4 has-text-info has-text-centered">Registration</h1>
  <h1 class="subtitle is-size-6 has-text-centered"><strong>ขั้นตอนการลงทะเบียนเข้างาน</strong></h1>
  <div class="container">
    <p>
      ท่านสามารถใช้ QR code ในระบบ Line เพื่อแสกนเข้างานได้ โดยแสดง QR Code ที่หน้ากล้องของเครื่องคอมพิวเตอร์ ณ จุดลงทะเบียนทั้งสองวัน
    </p>
    <br>
    <p>
      เมื่อแสกนเพื่อลงทะเบียนกับเครื่องคอมพิวเตอร์แล้วให้ท่านรับกระเป๋าโดยเจ้าหน้าที่จะทำการแสกน QR Code ของท่านเมื่อท่านได้รับกระเป๋า
    </p>
    <p>
      เอกสารในกระเป๋าประกอบไปด้วย
    </p>
    <ol>
      <li>ป้ายผู้เข้าร่วมประชุม</li>
      <li>คูปองถ่ายรูป Photo Booth</li>
    </ol>
    <br>
  </div>
  <div class="buttons is-centered">
    <router-link :to="{ name: 'Home' }">
      <button class="button is-info is-rounded">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        <span>Home</span>
      </button>
    </router-link>
    <router-link :to="{ name: 'QRCode' }">
      <button class="button is-rounded is-link">
        <b-icon pack="fas" icon="qrcode"></b-icon>
        <span>Your QR</span>
      </button>
    </router-link>
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