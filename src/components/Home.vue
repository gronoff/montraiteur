<template>
  <div>
    <Header />
    <section class="principale">
      <form>
        <InputSearch id="idSearch" type="search" label="Entrez en contact avec les meilleurs traiteurs près de chez vous" placeholder="lieu de l'événement"/>
      </form>
    </section>
    <Footer />
  </div>
</template>

<script>

import Header from './Header.vue';
import Footer from './Footer.vue';
import InputSearch from './InputSearch.vue'

export default {
  name: 'home',
  components : {Header,Footer,InputSearch
  },
  // customStyle: {color: 'red'}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.principale{
  display: flex;
  justify-content: center;
  margin: 50px;
} 

</style>
