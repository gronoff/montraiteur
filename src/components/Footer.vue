<template>
  <footer>
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
  p {
    margin: 0;
    color:var(--grisFonce);
  }

  a {
    margin-left: 13px;
  }

  span {
    padding: 8px;
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #E6E5E5;
  }

  footer div {
    clear: both;
    display: inline;
    vertical-align: center;
  }

  img {
    width: 2em;
    height: 2em;
  }

  .contact_rgpd p, img, a {
    position: relative;
    display: inline-block;
  }

  .contact_rgpd img {
    top: 10px;
  }

  .social_network_icons{
    float: right;
    margin-top: 10px;
    margin-bottom: 8px;
  }

  .social_network_icons img {
    display: inline;
    margin: 0 10px;
  }

  @media (max-width: 470px) {
    footer.footer {
      justify-content: center;
    }
    footer div {
      margin: 0 auto;
    }
    .social_network_icons {
      padding-top: 10px;
    }
    a:first-child {
      margin-left: 0;
    }
  }
</style>