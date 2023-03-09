<template>
  <div>
    <NavbarComp v-if="!navigationDis"/>
    <router-view/>
    <FooterComp v-if="!navigationDis"/>
  </div>
</template>

<script>

import NavbarComp from '@/components/NavbarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  
  name: 'App',
  components: { NavbarComp, FooterComp },
  data() {
    return {
      navigationDis: null,
    };
  },
  created() {
    this.checkRoute();
  },
  methods: {
    checkRoute() {
      if(this.$route.name === 'LoginView' || this.$route.name === 'RegisterView') {
        this.navigationDis = true;
        return;
      }
      this.navigationDis = false
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  }
}
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(205, 205, 205);
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}

</style>
