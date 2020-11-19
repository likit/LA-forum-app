<template>
  <section class="section">
    <div class="container">
      <ul>
        <li><a @click="$router.push({ name: 'OpeningDraw' })">Opening draw</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
name: "Admin"
}
</script>

<style scoped>

</style>