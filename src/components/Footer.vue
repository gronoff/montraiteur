<template>
  <footer class="footer">
    <div class="contact_rgpd">
      <img src="../assets/logo_mon_traiteur.png" alt="logo_mon_traiteur" height="42" width="42"><p>Contact</p>
      <img src="../assets/logo_mon_traiteur.png" alt="logo_mon_traiteur" height="42" width="42"><p>RGPD</p>
    </div>
    <div class="social_network_icons">
      <img src="../assets/logo_fb.png" alt="logo_mon_traiteur" height="42" width="42">
      <img src="../assets/logo_tw.png" alt="logo_mon_traiteur" height="42" width="42">
      <img src="../assets/logo_ig.png" alt="logo_mon_traiteur" height="42" width="42">
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

p{
  color:#7A7D7D;
}

.footer{
  width: 100%;
  height:4em;
  background-color: #E6E5E5;
}

footer div{
  display: inline;
}

img{
  width: 2em;
  height: 2em;
}

span{
  margin-left: 1em;
  margin-right: 1%;
  margin-top: 1em;
}

.contact_rgpd p {
  display: inline;
}

.social_network_icons{
  float: right;
  margin-top: 1em;
}

.social_network_icons img{
  display: inline;
  margin-right: 1em;
}
</style>
