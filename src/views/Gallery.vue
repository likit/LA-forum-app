<template>
  <section class="section">
    <div class="has-text-centered">
      <img src="../assets/LA-logo-small.png" width="100">
    </div>
    <h1 class="title has-text-info has-text-centered">
      Photo Gallery
    </h1>
    <div class="container">
      <div class="box" v-for="gal in gallerySet" :key="gal.title">
        <h1 class="title">{{ gal.title }}</h1>
        <button class="button is-light is-info">
          <span class="icon">
            <i class="far fa-image"></i>
          </span>
          <span>View</span>
        </button>
      </div>
      <div class="buttons is-centered" v-if="$store.state.user.admin">
        <button class="button is-info is-rounded" @click="$router.push({ name: 'Home' })">
          <span class="icon">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </button>
        <button class="button is-rounded is-success"
                @click="$router.push({ name: 'GalleryAdmin' })">
          <span class="icon">
            <i class="fas fa-folder-plus"></i>
          </span>
          <span>Album</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import {galleries} from "@/firebase";

export default {
  name: "Gallery",
  data() {
    return {
      gallerySet: []
    }
  },
  mounted() {
    const self = this
    galleries.get().then((snapshot)=>{
      snapshot.docs.forEach((doc)=>{
        self.gallerySet.push(doc.data())
      })
    })
  }
}
</script>

<style scoped>

</style>