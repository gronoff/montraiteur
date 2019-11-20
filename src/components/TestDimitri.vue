<template>
  <div>
    <Header />
    <InputRange/>
    <Footer/>
    
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from "./Footer";
import InputRange from "./InputRange"


export default {
  name: 'TestDimitri',
  components: {Header,Footer,InputRange}

}
</script>