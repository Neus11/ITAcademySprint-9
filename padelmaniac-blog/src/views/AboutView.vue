<template>
  <div class="about">
    <h1>Padel Maniac</h1>
    <p>La página donde encontrar y compratir las opiniones e información relacionada con el padel. Desde las últimas novedades 
      de material deportivo, como calzado, palas de todas las marcas. También ofreceremos toda la información de los torneo World Padel Tour
      y Premerier, a la vez que se sguiran los movimientos de las parejas.
      </p>
      <br />
      <p>
      Aenean odio felis, porttitor quis mauris nec, facilisis consectetur nunc. Ut in justo eu ligula egestas ultricies. Ut aliquam diam a 
      est auctor finibus. Phasellus vel malesuada enim. Duis sem sapien, dignissim vitae tristique quis, egestas a turpis. Nulla id ipsum eget 
      augue condimentum dictum. Nam condimentum nisi augue, at aliquet libero hendrerit et. Nunc quis sodales nisl, sit amet molestie augue. 
      Nulla tincidunt arcu et ipsum ornare bibendum. Ut condimentum iaculis erat a mattis. Aliquam accumsan lectus id metus aliquet, at malesuada
      diam vehicula. Aenean nec dui nec purus gravida posuere. Morbi et tellus sit amet libero elementum porttitor. Quisque feugiat quam ac 
      est elementum euismod. Duis tempor sit amet tellus vitae ullamcorper.
    </p>
    <div class="register">
      <p>Para publicar Blogs necesitas estar registrad@, registrate aqui: 
        <router-link class="router-link" :to="{ name: 'RegisterView' }">Register</router-link>
      </p>
    </div>
    <div class="blogs">
      <p> Para ver todos nuestros blogs, no necesitas registro!! Animate!: 
        <router-link class="router-link" :to="{ name: 'BlogView' }">Ver Blogs</router-link>
      </p>
    </div>
</div>
      
      
</template>

<script>

export default {
  name: 'AboutView',
  components: {}
}

</script>

<style scoped>
.about {
  height: 100vh;
  text-align: center;
  margin: 5rem;
  font-size: large;
}
h1 {
  padding: 4rem;
}
.register, .blogs{
  font-weight: 600;
}
a {
  text-decoration: none;
  color: rgb(68, 115, 68);
}
</style>


