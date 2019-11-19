<template>
  <div>
    <h1>Neewee</h1>
    <PageNumber txt="page 2 sur 7"/>
    <Jumbotron/>
    <CarouselForNinon/>
  </div>
</template>

<script>
import PageNumber from './PageNumber.vue'
import Jumbotron from './Jumbotron.vue'
import CarouselForNinon from './CarouselForNinon.vue'
export default {
  name: 'TestNinon',
  components:{PageNumber, Jumbotron, CarouselForNinon}
}
</script>