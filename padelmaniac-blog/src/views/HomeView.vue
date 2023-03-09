<template>
  <div>
    <h2> Bienvenidos a PadelManiac,</h2>
    <h3>La casa de los locos del padel, en dónde encontrarás toda la actualidad, sobre el padel.</h3>
    <img src="@/assets/padelLogo1.png" alt="logo">
    <h1>Maniac</h1>
    <div>
      <WeatherComp />
    </div>
    <div>
      <SlideshowComp />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideshowComp from '../components/SlideshowComp.vue';
import WeatherComp from '@/components/WeatherComp.vue';

export default {
  name: 'HomeView',
  components: { SlideshowComp, WeatherComp }
}
</script>

<style lang="scss" scoped>
* {
  text-align: center;
}
h2{
  margin-top: 5rem;
}

h3 {
  margin: auto;
  width: 70%;
  padding: 2rem;
}
img {
  width: 20%;
}

h1 {
  font-size: 100px;
}

</style>
