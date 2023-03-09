<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand to="/" class="p-3">
        <img src="../assets/padelLogo1.png" class="d-inline-block align-top" alt="logo">
        <h2>Maniac</h2>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="p-3">
        <b-navbar-nav class="ms-auto">
          <b-nav-item to="/blog">Blogs</b-nav-item>
          <b-nav-item to="/create-post">Crear Blog</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login"><strong>Log In</strong></b-nav-item>
          <b-nav-item to="/register"><strong>Sign Up</strong></b-nav-item>
          <b-nav-item to="/" @click="$store.dispatch('logout')"><strong>LogOut</strong></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'NavbarComp',
  setup(){
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

  },
  props: {
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

img {
  width: 7rem;
}
</style>
