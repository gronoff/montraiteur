<template>
  <footer class="footer">
    <div class="contact_rgpd">
      <img src="..\assets\logo_mon_traiteur.png" alt="logo_mon_traiteur" height="42" width="42"><p>Contact</p>
      <img src="..\assets\logo_mon_traiteur.png" alt="logo_mon_traiteur" height="42" width="42"><p>RGPD</p>
    </div>
    <div class="social_network_icons">
      <img src="..\assets\logo_fb.png" alt="logo_mon_traiteur" height="42" width="42">
      <img src="..\assets\logo_tw.png" alt="logo_mon_traiteur" height="42" width="42">
      <img src="..\assets\logo_ig.png" alt="logo_mon_traiteur" height="42" width="42">
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact_rgpd div
.contact_rgpd p {
  display: inline;
}

.social_network_icons{
  display: inline;
}
</style>
