<template>
  <div id="resultat">
      <Header/>
      <Filtre/>
      <Card/>
      <Footer/>
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import Filtre from "./Filtre"
import Card from "./Card"
export default {
  name: 'resultat',
  components:{
    Header,
    Footer,
    Filtre,
    Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
