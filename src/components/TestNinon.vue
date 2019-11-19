<template>
  <div>
    <h1>Neewee</h1>
    <PageNumber txt="page 2 sur 7"/>
    <Jumbotron/>
  </div>
</template>

<script>
import PageNumber from './PageNumber.vue'
import Jumbotron from './Jumbotron.vue'
export default {
  name: 'TestNinon',
  components:{PageNumber, Jumbotron}
}
</script>