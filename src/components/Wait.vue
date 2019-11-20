<template>
  <div>
    <Header />
    <div>
      <img src="https://gifimage.net/wp-content/uploads/2018/11/gif-veuillez-patienter.gif" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Wait',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  img {
    display: block;
    width: 40vw;
    min-width: 250px;
    margin: 0 auto 30px auto;
  }
</style>