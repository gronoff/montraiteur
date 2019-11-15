<template>
  <footer class="footer">
    <div class="contact_rgpd">
      <a href="url">
        <span>
          <img src="../assets/img/logo_mon_traiteur.png" alt="logo_mon_traiteur">
          <p>Contact</p>
        </span>
      </a>
      <a href="url">
        <span>
          <img src="../assets/img/logo_mon_traiteur.png" alt="logo_mon_traiteur">
          <p>RGPD</p>
        </span>
      </a>
    </div>
    <div class="social_network_icons">
      <img src="../assets/img/logo_fb.png" alt="logo facebook">
      <img src="../assets/img/logo_tw.png" alt="logo twitter">
      <img src="../assets/img/logo_ig.png" alt="logo">
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
  clear: both;
  width: 100%;
  height:4em;
  background-color: #E6E5E5;
}
footer div{
  clear: both;
  display: inline;
  vertical-align: center;
}

img{
  width: 2em;
  height: 2em;
}

.contact_rgpd p {
  display: inline-block;
}

.contact_rgpd img{
  display: inline-block;
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