<template>
  <footer class="footer">
    <div class="contact_rgpd">
      <img src="../assets/logo_mon_traiteur.png" alt="logo_mon_traiteur"><p>Contact</p>
      <img src="../assets/logo_mon_traiteur.png" alt="logo_mon_traiteur"><p>RGPD</p>
    </div>
    <div class="social_network_icons">
      <img src="../assets/logo_fb.png" alt="logo_mon_traiteur">
      <img src="../assets/logo_tw.png" alt="logo_mon_traiteur">
      <img src="../assets/logo_ig.png" alt="logo_mon_traiteur">
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

.contact_rgpd{
  float: left;
}

.contact_rgpd p {
  display: inline;
}

.social_network_icons{
  float: right;
}

.social_network_icons img{
  display: inline;
  margin-right: 1em;
  vertical-align: auto;
  }
</style>
