<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
    </div>
    <h1 class="title has-text-info has-text-centered">
      Gallery Admin
    </h1>
    <div class="container">
      <b-field label="Album Title" type="is-danger">
        <b-input v-model="gallery.title"></b-input>
      </b-field>
      <b-field label="URL" v-model="gallery.url" type="is-danger">
        <b-input></b-input>
      </b-field>
      <div class="buttons is-centered">
        <button class="button is-info is-rounded" @click="$router.push({ name: 'Home' })">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </button>
        <button class="button is-rounded is-success" @click="save">
          <span class="icon">
            <i class="far fa-save"></i>
          </span>
          <span>Save</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import {galleries} from "@/firebase";

export default {
  name: "GalleryAdmin",
  data() {
    return {
      gallery: {
        title: '',
        url: '',
      }
    }
  },
  mounted() {
    if (this.$store.state.user.number === null || this.$store.state.user.admin === false) {
      this.$router.push({ name: 'Register'})
    }
  },
  methods: {
    save: function() {
      const self = this
      galleries.add(this.gallery).then(()=>{
        self.$buefy.toast.open({ message: 'บันทึกเรียบร้อย', type: 'is-success'})
        self.$router.push({ name: 'Admin'})
      })
    }
  }
}
</script>

<style scoped>

</style>