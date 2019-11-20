<template>
  <div>
    <Filtre />
    <Card />
    <Footer />
  </div>
</template>

<script>
import Filtre from "./Filtre"
import Footer from "./Footer"
import Card from "./Card"
export default {
  name: 'TestAdrien',
  components: {
    Filtre,
    Footer,
    Card
  }
}
</script>